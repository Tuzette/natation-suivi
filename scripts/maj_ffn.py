"""
Mise à jour automatique des records depuis les fiches FFN.

Pour chaque nageur de donnees.js qui a un numéro FFN (iuf), le script lit sa
fiche publique sur ffn.extranat.fr (vue « Performances », bassins 25 m et
50 m), récupère toutes ses courses individuelles et ajoute dans donnees-ffn.js
celles qui n'y sont pas encore.
"""
import re
import sys
import time
import unicodedata
from pathlib import Path

import requests
from bs4 import BeautifulSoup

RACINE = Path(__file__).resolve().parent.parent
DONNEES = RACINE / "donnees.js"
SORTIE = RACINE / "donnees-ffn.js"
URL = "https://ffn.extranat.fr/webffn/nat_recherche.php?idact=nat&idrch_id={iuf}&idbas={bassin}&idopt=prf"
ENTETE = {"User-Agent": "Suivi-natation-familial (site perso, 1 lecture par semaine)"}

NAGES = {"NL": "NL", "Dos": "Dos", "Bra.": "Brasse", "Brasse": "Brasse",
         "Pap.": "Papillon", "Papillon": "Papillon", "4 N.": "4 Nages", "4 Nages": "4 Nages"}

LIGNE = re.compile(
    r'\{\s*nageur:\s*"(?P<nageur>[^"]+)",\s*date:\s*"(?P<date>[^"]+)",\s*epreuve:\s*"(?P<epreuve>[^"]+)",\s*'
    r'temps:\s*"(?P<temps>[^"]+)",\s*points:\s*(?P<points>null|\d+),\s*bassin:\s*(?P<bassin>\d+),\s*'
    r'lieu:\s*"(?P<lieu>[^"]*)",\s*niveau:\s*"(?P<niveau>[^"]*)"\s*\}')


def sans_accents(txt):
    return "".join(c for c in unicodedata.normalize("NFD", txt) if unicodedata.category(c) != "Mn")


def secondes(temps):
    if ":" in temps:
        m, s = temps.split(":")
        return int(m) * 60 + float(s)
    return float(temps)


def cle(p):
    return (p["nageur"], p["epreuve"], int(p["bassin"]), p["date"], f'{secondes(p["temps"]):.2f}')


def nageurs_suivis():
    texte = DONNEES.read_text(encoding="utf-8")
    bloc = texte[texte.index("const NAGEURS"):]
    bloc = bloc[:bloc.index("];")]
    res = []
    for ligne in bloc.splitlines():
        if ligne.strip().startswith("//"):
            continue
        m_id = re.search(r'id:\s*"([^"]+)"', ligne)
        m_iuf = re.search(r'iuf:\s*(\d+)', ligne)
        if m_id and m_iuf:
            res.append((m_id.group(1), m_iuf.group(1)))
    return res


def lire_existant():
    if not SORTIE.exists():
        return []
    res = []
    for m in LIGNE.finditer(SORTIE.read_text(encoding="utf-8")):
        p = m.groupdict()
        p["points"] = None if p["points"] == "null" else int(p["points"])
        p["bassin"] = int(p["bassin"])
        res.append(p)
    return res


def normaliser_temps(t):
    m, s = t.split(":")
    return f"{int(m)}:{s}" if int(m) else s


def lire_fiche(nageur, iuf):
    perfs = []
    for bassin_demande in (25, 50):
        r = requests.get(URL.format(iuf=iuf, bassin=bassin_demande), headers=ENTETE, timeout=30)
        r.raise_for_status()
        perfs += lire_page(nageur, r.text)
        time.sleep(2)
    return perfs


def lire_page(nageur, html):
    soup = BeautifulSoup(html, "html.parser")
    perfs, bassin = [], None
    for tr in soup.select("table tr"):
        texte = " ".join(tr.get_text(" ").split())
        mb = re.search(r"Bassin : (25|50) m", texte)
        if mb:
            bassin = int(mb.group(1))
            continue
        cellules = [" ".join(c.get_text(" ").split()) for c in tr.find_all(["th", "td"])]
        if bassin is None or len(cellules) < 7 or not re.fullmatch(r"\d{2}:\d{2}\.\d{2}", cellules[1]):
            continue
        dist, _, nage = cellules[0].partition(" ")
        if nage not in NAGES or not dist.isdigit():
            continue
        md = re.fullmatch(r"(\d{2})/(\d{2})/(\d{4})", cellules[5])
        if not md:
            continue
        mp = re.search(r"(\d+)\s*pts", cellules[3])
        perfs.append({
            "nageur": nageur,
            "date": f"{md.group(3)}-{md.group(2)}-{md.group(1)}",
            "epreuve": f"{dist} {NAGES[nage]}",
            "temps": normaliser_temps(cellules[1]),
            "points": int(mp.group(1)) if mp else None,
            "bassin": bassin,
            "lieu": sans_accents(re.sub(r"\s*\([A-Z]{3}\)\s*$", "", cellules[4])).upper(),
            "niveau": cellules[6].strip("[]") or "DEP",
        })
    return perfs


def ecrire(perfs):
    perfs.sort(key=lambda p: (p["nageur"], p["date"], p["epreuve"], p["bassin"]))
    lignes = [
        "// =====================================================================",
        "//  FICHIER GÉNÉRÉ AUTOMATIQUEMENT à partir des fiches FFN — ne pas modifier",
        "//  Courses lues sur ffn.extranat.fr (fiche « Performances ») pour chaque",
        "//  nageur ayant un « iuf » dans donnees.js.",
        "// =====================================================================",
        "",
        "const PERFORMANCES_FFN = [",
    ]
    for p in perfs:
        pts = "null" if p["points"] is None else p["points"]
        lignes.append(
            f'  {{ nageur: "{p["nageur"]}", date: "{p["date"]}", epreuve: "{p["epreuve"]}", temps: "{p["temps"]}", '
            f'points: {pts}, bassin: {p["bassin"]}, lieu: "{p["lieu"]}", niveau: "{p["niveau"]}" }},')
    lignes.append("];")
    SORTIE.write_text("\n".join(lignes) + "\n", encoding="utf-8")


def main():
    existant = lire_existant()
    connus = {cle(p) for p in existant}
    nouveaux, erreurs = [], []
    for nageur, iuf in nageurs_suivis():
        try:
            fiche = lire_fiche(nageur, iuf)
            if not fiche:
                erreurs.append(f"{nageur} : aucune course lue (structure de page modifiée ?)")
            for p in fiche:
                if cle(p) not in connus:
                    connus.add(cle(p))
                    nouveaux.append(p)
                    print(f"+ {nageur} {p['epreuve']} ({p['bassin']} m) {p['temps']} le {p['date']}")
        except Exception as e:  # on continue avec les autres nageurs
            erreurs.append(f"{nageur} : {e}")
        time.sleep(3)  # lecture espacée, pour ne pas solliciter le site de la FFN
    if nouveaux:
        ecrire(existant + nouveaux)
    print(f"{len(nouveaux)} nouvelle(s) course(s).")
    for e in erreurs:
        print("ERREUR", e)
    if erreurs and not nouveaux and len(erreurs) == len(nageurs_suivis()):
        sys.exit(1)


if __name__ == "__main__":
    main()
