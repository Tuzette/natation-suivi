// =====================================================================
//  DONNÉES DU SITE — seul fichier à modifier pour mettre à jour le suivi
// =====================================================================
//
//  Ajouter une performance : copier une ligne de PERFORMANCES, la coller
//  à la fin de la liste et changer les valeurs. L'ordre n'a pas d'importance,
//  le site trie tout seul.
//
//  nageur  : identifiant du nageur (doit exister dans NAGEURS)
//  date    : "AAAA-MM-JJ"
//  epreuve : "50 NL", "100 Dos", "200 Brasse", "50 Papillon", "100 4 Nages"…
//            (distance + espace + NL / Dos / Brasse / Papillon / 4 Nages)
//  temps   : "36.64" (moins d'une minute) ou "1:21.67" (min:sec.centièmes)
//  points  : points FFN, ou null si inconnus
//  bassin  : 25 ou 50
//  lieu    : ville de la compétition
//  niveau  : "DEP", "REG", "NAT"… (libre)
//
//  Tout le reste (âge, catégorie, saison, records, progression) est calculé
//  automatiquement par le site.
//
//  Les records des nageurs qui ont un numéro FFN (iuf) sont aussi récupérés
//  automatiquement dans donnees-ffn.js : ne pas modifier ce fichier-là.
// =====================================================================

const NAGEURS = [
  // suivi: true = nageur affiché par défaut. iuf = numéro FFN (sert à la mise à jour automatique).
  { id: "luka", nom: "BISCEGLIE", prenom: "Luka", naissance: 2015, club: "USB Longwy Natation", iuf: 3703723, suivi: true },
  // Concurrents
  { id: "tocque", nom: "TOCQUE", prenom: "Jules", naissance: 2015, club: "US Toul", iuf: 4130890 },
  { id: "poenar", nom: "POENAR", prenom: "Darian", naissance: 2015, club: "USB Longwy Natation", iuf: 4155095 },
  { id: "meyer", nom: "MEYER", prenom: "Louis", naissance: 2015, club: "ASPTT Nancy", iuf: 3748723 },
  { id: "kircher", nom: "KIRCHER", prenom: "Hugo", naissance: 2015, club: "CA Orne Lorraine Confluences", iuf: 4279887 },
  { id: "ouhmich", nom: "OUHMICH", prenom: "Rayan", naissance: 2015, club: "NC Lunéville-Baccarat", iuf: 3171635 },
  { id: "didot", nom: "DIDOT", prenom: "Loris", naissance: 2015, club: "NC Lunéville-Baccarat", iuf: 4281722 },
  { id: "delawoevre", nom: "DELAWOEVRE", prenom: "Gabriel", naissance: 2015, club: "USB Longwy Natation", iuf: 3069643 },
  { id: "helmlinger", nom: "HELMLINGER", prenom: "Vincent", naissance: 2015, club: "ASPTT Nancy", iuf: 3975784 },
  { id: "gerard", nom: "GERARD", prenom: "Noe", naissance: 2015, club: "CA Orne Lorraine Confluences", iuf: 4294973 },
  { id: "liez", nom: "LIEZ", prenom: "Arthur", naissance: 2015, club: "ASPTT Nancy", iuf: 3810411 },
  { id: "doudoux", nom: "DOUDOUX PELLERIN", prenom: "Sacha", naissance: 2015, club: "ASPTT Nancy", iuf: 3965176 },
  { id: "morville", nom: "MORVILLE", prenom: "Tom", naissance: 2015, club: "US Toul", iuf: 4041513 },
];

const PERFORMANCES = [
  { nageur: "luka", date: "2023-12-09", epreuve: "100 4 Nages",  temps: "2:31.30", points: 1,    bassin: 25, lieu: "LONGWY", niveau: "DEP" },
  { nageur: "luka", date: "2023-12-09", epreuve: "50 NL",        temps: "58.10",   points: 1,    bassin: 25, lieu: "LONGWY", niveau: "DEP" },
  { nageur: "luka", date: "2024-01-28", epreuve: "50 Dos",       temps: "1:04.40", points: 2,    bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2024-01-28", epreuve: "50 NL",        temps: "54.97",   points: 4,    bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2024-02-18", epreuve: "100 4 Nages",  temps: "2:09.10", points: 9,    bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2024-02-18", epreuve: "50 Brasse",    temps: "1:01.89", points: 77,   bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2024-03-17", epreuve: "100 NL",       temps: "1:55.48", points: 8,    bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2024-03-17", epreuve: "50 Dos",       temps: "58.88",   points: 39,   bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2024-04-14", epreuve: "100 4 Nages",  temps: "2:06.98", points: 16,   bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2024-04-14", epreuve: "50 Brasse",    temps: "59.99",   points: 105,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2024-04-14", epreuve: "50 Papillon",  temps: "1:05.11", points: 1,    bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2024-05-20", epreuve: "100 NL",       temps: "1:57.51", points: 3, bassin: 50, lieu: "LUNEVILLE", niveau: "DEP" },
  { nageur: "luka", date: "2024-05-20", epreuve: "50 Brasse",    temps: "1:00.30", points: 100, bassin: 50, lieu: "LUNEVILLE", niveau: "DEP" },
  { nageur: "luka", date: "2024-05-20", epreuve: "50 Dos",       temps: "1:04.57", points: 2, bassin: 50, lieu: "LUNEVILLE", niveau: "DEP" },
  { nageur: "luka", date: "2024-05-20", epreuve: "50 NL",        temps: "54.28",   points: 8, bassin: 50, lieu: "LUNEVILLE", niveau: "DEP" },
  { nageur: "luka", date: "2024-05-20", epreuve: "50 Papillon",  temps: "1:07.85", points: 1, bassin: 50, lieu: "LUNEVILLE", niveau: "DEP" },
  { nageur: "luka", date: "2024-10-13", epreuve: "100 4 Nages",  temps: "1:59.24", points: 56,   bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2024-10-13", epreuve: "50 Brasse",    temps: "59.79",   points: 108,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2024-10-13", epreuve: "50 NL",        temps: "47.39",   points: 100,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2024-12-01", epreuve: "100 4 Nages",  temps: "1:54.12", points: 95,   bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2024-12-01", epreuve: "50 Brasse",    temps: "1:00.12", points: 103,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-01-19", epreuve: "100 4 Nages",  temps: "1:45.64", points: 182,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-01-19", epreuve: "100 Brasse",   temps: "1:57.92", points: 189,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-01-19", epreuve: "100 NL",       temps: "1:37.53", points: 138,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-01-19", epreuve: "50 Brasse",    temps: "56.39",   points: 171,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-01-19", epreuve: "50 NL",        temps: "42.73",   points: 220,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-01-19", epreuve: "50 NL",        temps: "45.25",   points: 149,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-02-02", epreuve: "100 NL",       temps: "1:33.66", points: 187,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2025-02-02", epreuve: "50 Dos",       temps: "49.08",   points: 220,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2025-02-02", epreuve: "50 NL",        temps: "41.74",   points: 251,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-16", epreuve: "100 4 Nages",  temps: "1:47.58", points: 160,  bassin: 25, lieu: "NEUVES-MAISONS", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-16", epreuve: "50 Brasse",    temps: "55.30",   points: 194,  bassin: 25, lieu: "NEUVES-MAISONS", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-16", epreuve: "50 Papillon",  temps: "54.72",   points: 29,   bassin: 25, lieu: "NEUVES-MAISONS", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-23", epreuve: "100 Brasse",   temps: "2:01.73", points: 150,  bassin: 25, lieu: "JARNY", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-23", epreuve: "100 NL",       temps: "1:33.96", points: 183,  bassin: 25, lieu: "JARNY", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-23", epreuve: "50 Brasse",    temps: "55.82",   points: 183,  bassin: 25, lieu: "JARNY", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-23", epreuve: "50 Dos",       temps: "48.49",   points: 236,  bassin: 25, lieu: "JARNY", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-23", epreuve: "50 NL",        temps: "43.05",   points: 210,  bassin: 25, lieu: "JARNY", niveau: "DEP" },
  { nageur: "luka", date: "2025-03-23", epreuve: "50 Papillon",  temps: "56.64",   points: 12,   bassin: 25, lieu: "JARNY", niveau: "DEP" },
  { nageur: "luka", date: "2025-05-24", epreuve: "100 4 Nages",  temps: "1:43.84", points: 205,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-05-24", epreuve: "200 NL",       temps: "3:26.59", points: 129,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-06-08", epreuve: "100 Brasse",   temps: "1:59.06", points: 177,  bassin: 25, lieu: "SARREGUEMINES", niveau: "DEP" },
  { nageur: "luka", date: "2025-06-08", epreuve: "100 Papillon", temps: "2:04.78", points: 28,   bassin: 25, lieu: "SARREGUEMINES", niveau: "DEP" },
  { nageur: "luka", date: "2025-06-08", epreuve: "50 Brasse",    temps: "55.58",   points: 188,  bassin: 25, lieu: "SARREGUEMINES", niveau: "DEP" },
  { nageur: "luka", date: "2025-06-08", epreuve: "50 Papillon",  temps: "52.34",   points: 60,   bassin: 25, lieu: "SARREGUEMINES", niveau: "DEP" },
  { nageur: "luka", date: "2025-06-14", epreuve: "100 4 Nages",  temps: "1:51.46", points: 119,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2025-06-14", epreuve: "100 NL",       temps: "1:33.60", points: 188,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2025-06-15", epreuve: "200 NL",       temps: "3:19.47", points: 172,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2025-06-15", epreuve: "50 NL",        temps: "40.75",   points: 285,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2025-10-12", epreuve: "100 Brasse",   temps: "1:52.92", points: 246,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2025-10-12", epreuve: "100 Dos",      temps: "1:41.90", points: 244,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2025-10-12", epreuve: "100 NL",       temps: "1:48.37", points: 40,   bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2025-10-12", epreuve: "50 Dos",       temps: "46.84",   points: 282,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2025-11-11", epreuve: "100 NL",       temps: "1:31.06", points: 224,  bassin: 25, lieu: "PONT-A-MOUSSON", niveau: "DEP" },
  { nageur: "luka", date: "2025-11-22", epreuve: "100 NL",       temps: "1:25.97", points: 307,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2025-11-22", epreuve: "50 Dos",       temps: "47.71",   points: 257,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2025-11-22", epreuve: "50 NL",        temps: "39.74",   points: 321,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2025-11-23", epreuve: "100 Dos",      temps: "1:39.21", points: 281,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2025-11-23", epreuve: "50 NL",        temps: "38.39",   points: 373,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2025-12-14", epreuve: "100 4 Nages",  temps: "1:41.44", points: 236,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-12-14", epreuve: "50 Brasse",    temps: "53.05",   points: 247,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-12-14", epreuve: "50 NL",        temps: "39.26",   points: 339,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "luka", date: "2025-12-20", epreuve: "100 Brasse",   temps: "1:52.93", points: 246,  bassin: 25, lieu: "THIONVILLE", niveau: "REG" },
  { nageur: "luka", date: "2025-12-20", epreuve: "50 Brasse",    temps: "52.96",   points: 249,  bassin: 25, lieu: "THIONVILLE", niveau: "REG" },
  { nageur: "luka", date: "2025-12-21", epreuve: "50 Dos",       temps: "47.20",   points: 272,  bassin: 25, lieu: "THIONVILLE", niveau: "REG" },
  { nageur: "luka", date: "2025-12-21", epreuve: "50 NL",        temps: "37.75",   points: 399,  bassin: 25, lieu: "THIONVILLE", niveau: "REG" },
  { nageur: "luka", date: "2026-01-25", epreuve: "100 Dos",      temps: "1:39.75", points: 273,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-01-25", epreuve: "100 NL",       temps: "1:23.41", points: 353,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-01-25", epreuve: "200 NL",       temps: "3:06.59", points: 267,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-03-15", epreuve: "100 Brasse",   temps: "1:48.29", points: 306,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-03-15", epreuve: "100 Papillon", temps: "1:45.03", points: 189,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-03-15", epreuve: "200 4 Nages",  temps: "3:34.76", points: 222,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-07", epreuve: "200 NL",       temps: "2:53.21", points: 387,  bassin: 25, lieu: "SARREGUEMINES", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-07", epreuve: "50 Brasse",    temps: "48.59",   points: 369,  bassin: 25, lieu: "SARREGUEMINES", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-07", epreuve: "50 Dos",       temps: "43.53",   points: 388,  bassin: 25, lieu: "SARREGUEMINES", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-07", epreuve: "50 Papillon",  temps: "41.56",   points: 341,  bassin: 25, lieu: "SARREGUEMINES", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "100 4 Nages",  temps: "1:33.58", points: 356,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "100 Brasse",   temps: "1:50.78", points: 273,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "100 NL",       temps: "1:23.84", points: 345,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "200 NL",       temps: "2:59.13", points: 331,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "50 Brasse",    temps: "50.71",   points: 308,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "50 Dos",       temps: "45.12",   points: 335,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "50 Dos",       temps: "45.46",   points: 324,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "50 NL",        temps: "36.64",   points: 447,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-06-14", epreuve: "50 Papillon",  temps: "42.51",   points: 307,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "luka", date: "2026-10-11", epreuve: "100 4 Nages",  temps: "1:31.98", points: 383,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-10-11", epreuve: "100 Brasse",   temps: "1:44.45", points: 361,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-10-11", epreuve: "100 NL",       temps: "1:22.52", points: 370,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-10-11", epreuve: "200 NL",       temps: "2:54.50", points: 375,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-10-11", epreuve: "50 Papillon",  temps: "41.84",   points: 331,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "luka", date: "2026-11-01", epreuve: "400 NL",       temps: "5:59.03", points: 398,  bassin: 25, lieu: "PONT-A-MOUSSON", niveau: "DEP" },
  { nageur: "luka", date: "2026-11-14", epreuve: "200 4 Nages",  temps: "3:12.16", points: 396,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2026-11-14", epreuve: "200 NL",       temps: "2:52.47", points: 395,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2026-11-14", epreuve: "50 NL",        temps: "37.28",   points: 419,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2026-11-15", epreuve: "100 NL",       temps: "1:21.67", points: 387,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2026-11-15", epreuve: "50 Dos",       temps: "41.41",   points: 465,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "luka", date: "2026-11-15", epreuve: "100 4 Nages",  temps: "1:30.93", points: 402,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
];


// =====================================================================
//  GRILLES DE QUALIFICATION — DÉPARTEMENTAUX (Messieurs et Dames)
// =====================================================================
//  Une épreuve est qualifiée si le meilleur temps est inférieur ou égal
//  au temps de la grille. Toutes les catégories s'affichent côte à côte.
//  sexe : "H" ou "F" — chaque nageur ne voit que les grilles de son sexe
//  (un nageur sans « sexe » dans NAGEURS est considéré comme "H").
//  Pour une nouvelle saison, remplacer les temps.
// =====================================================================

const GRILLES_DEPARTEMENTAUX = [
  // --- Messieurs ---
  { nom: "U12-U13", sexe: "H", temps: {
    "50 NL":        "38.99",
    "100 NL":       "1:23.60",
    "200 NL":       "2:57.16",
    "400 NL":       "6:09.12",
    "800 NL":       "11:10.67",
    "1500 NL":      "21:27.28",
    "50 Dos":       "44.67",
    "100 Dos":      "1:34.58",
    "200 Dos":      "3:18.75",
    "50 Brasse":    "49.25",
    "100 Brasse":   "1:45.25",
    "200 Brasse":   "3:39.94",
    "50 Papillon":  "41.33",
    "100 Papillon": "1:33.53",
    "200 Papillon": "3:17.68",
    "100 4 Nages":  "1:33.95",
    "200 4 Nages":  "3:17.64",
    "400 4 Nages":  "6:50.81",
  } },
  { nom: "U14-U15", sexe: "H", temps: {
    "50 NL":        "35.46",
    "100 NL":       "1:16.29",
    "200 NL":       "2:42.53",
    "400 NL":       "5:39.98",
    "800 NL":       "11:10.67",
    "1500 NL":      "21:27.28",
    "50 Dos":       "40.50",
    "100 Dos":      "1:25.89",
    "200 Dos":      "3:01.30",
    "50 Brasse":    "44.61",
    "100 Brasse":   "1:35.91",
    "200 Brasse":   "3:21.15",
    "50 Papillon":  "37.66",
    "100 Papillon": "1:25.03",
    "200 Papillon": "3:00.80",
    "100 4 Nages":  "1:25.73",
    "200 4 Nages":  "3:01.15",
    "400 4 Nages":  "6:17.73",
  } },
  { nom: "U16 et +", sexe: "H", temps: {
    "50 NL":        "30.62",
    "100 NL":       "1:06.23",
    "200 NL":       "2:22.40",
    "400 NL":       "4:59.04",
    "800 NL":       "11:10.67",
    "1500 NL":      "21:27.28",
    "50 Dos":       "34.76",
    "100 Dos":      "1:13.95",
    "200 Dos":      "2:37.30",
    "50 Brasse":    "38.22",
    "100 Brasse":   "1:23.07",
    "200 Brasse":   "2:55.32",
    "50 Papillon":  "32.60",
    "100 Papillon": "1:13.34",
    "200 Papillon": "2:37.58",
    "100 4 Nages":  "1:14.42",
    "200 4 Nages":  "2:38.47",
    "400 4 Nages":  "5:32.23",
  } },
  // --- Dames ---
  { nom: "U10 et -", sexe: "F", temps: {
    "50 NL":        "44.25",
    "100 NL":       "1:33.62",
    "200 NL":       "3:27.36",
    "50 Dos":       "52.75",
    "100 Dos":      "1:50.58",
    "50 Brasse":    "56.87",
    "100 Brasse":   "2:06.48",
    "50 Papillon":  "48.07",
    "100 Papillon": "1:48.11",
    "100 4 Nages":  "1:50.33",
    "200 4 Nages":  "3:48.66",
  } },
  { nom: "U11", sexe: "F", temps: {
    "50 NL":        "42.82",
    "100 NL":       "1:30.72",
    "200 NL":       "3:20.80",
    "50 Dos":       "50.90",
    "100 Dos":      "1:46.81",
    "50 Brasse":    "54.96",
    "100 Brasse":   "2:02.12",
    "50 Papillon":  "46.48",
    "100 Papillon": "1:44.49",
    "100 4 Nages":  "1:46.73",
    "200 4 Nages":  "3:41.45",
  } },
  { nom: "U12-U13", sexe: "F", temps: {
    "50 NL":        "41.51",
    "100 NL":       "1:28.05",
    "200 NL":       "3:14.77",
    "400 NL":       "6:43.82",
    "800 NL":       "11:24.03",
    "1500 NL":      "22:04.97",
    "50 Dos":       "49.21",
    "100 Dos":      "1:43.34",
    "200 Dos":      "3:35.30",
    "50 Brasse":    "53.21",
    "100 Brasse":   "1:58.12",
    "200 Brasse":   "4:05.36",
    "50 Papillon":  "45.01",
    "100 Papillon": "1:41.15",
    "200 Papillon": "3:32.09",
    "100 4 Nages":  "1:43.42",
    "200 4 Nages":  "3:34.83",
    "400 4 Nages":  "7:24.82",
  } },
  { nom: "U14-U15", sexe: "F", temps: {
    "50 NL":        "38.05",
    "100 NL":       "1:21.03",
    "200 NL":       "2:58.89",
    "400 NL":       "6:11.72",
    "800 NL":       "11:24.03",
    "1500 NL":      "22:04.97",
    "50 Dos":       "44.76",
    "100 Dos":      "1:34.22",
    "200 Dos":      "3:17.18",
    "50 Brasse":    "48.60",
    "100 Brasse":   "1:47.59",
    "200 Brasse":   "3:44.52",
    "50 Papillon":  "41.15",
    "100 Papillon": "1:32.39",
    "200 Papillon": "3:14.91",
    "100 4 Nages":  "1:34.70",
    "200 4 Nages":  "3:17.39",
    "400 4 Nages":  "6:49.80",
  } },
  { nom: "U16 et +", sexe: "F", temps: {
    "50 NL":        "33.29",
    "100 NL":       "1:11.37",
    "200 NL":       "2:37.04",
    "400 NL":       "5:27.56",
    "800 NL":       "11:24.03",
    "1500 NL":      "22:04.97",
    "50 Dos":       "38.63",
    "100 Dos":      "1:21.67",
    "200 Dos":      "2:52.25",
    "50 Brasse":    "42.46",
    "100 Brasse":   "1:33.10",
    "200 Brasse":   "3:15.84",
    "50 Papillon":  "35.84",
    "100 Papillon": "1:20.32",
    "200 Papillon": "2:51.26",
    "100 4 Nages":  "1:22.71",
    "200 4 Nages":  "2:53.41",
    "400 4 Nages":  "6:01.61",
  } },
];

// =====================================================================
//  WEBCONFRONTATION BENJAMIN
// =====================================================================
//  Reprise de l'onglet « Webconfrontation Benjamin » : somme des points
//  FFN du meilleur temps de chaque épreuve retenue.
//  « parmi » : liste des épreuves possibles pour le critère.
//  « rang »  : 1 = la meilleure, 2 = la deuxième meilleure (épreuve
//              différente de la première), etc.
//  « debut » / « fin » : seules les courses nagées entre ces deux dates
//              (incluses) sont prises en compte. À changer chaque saison.
// =====================================================================

const WEBCONFRONTATION = {
  nom: "Webconfrontation benjamin",
  objectif: 2400,
  debut: "2026-09-01",
  fin:   "2027-06-01",
  criteres: [
    { libelle: "Meilleur 50 m n°1", parmi: ["50 NL", "50 Dos", "50 Brasse", "50 Papillon"], rang: 1 },
    { libelle: "Meilleur 50 m n°2", parmi: ["50 NL", "50 Dos", "50 Brasse", "50 Papillon"], rang: 2 },
    { libelle: "Meilleur 100 m",    parmi: ["100 NL", "100 Dos", "100 Brasse", "100 Papillon"], rang: 1 },
    { libelle: "200 4 Nages",       parmi: ["200 4 Nages"], rang: 1 },
    { libelle: "200 NL",            parmi: ["200 NL"], rang: 1 },
    { libelle: "400 NL",            parmi: ["400 NL"], rang: 1 },
  ]
};

// =====================================================================
//  BOUTONS DE MISE À JOUR (en bas du site)
// =====================================================================
//  Un seul bouton : il met à jour ce site ET celui de Luka, en un clic.
//  « relais » = adresse du relais Cloudflare (se termine par .workers.dev).
// =====================================================================

const MISE_A_JOUR = [
  { libelle: "Mettre à jour les courses", relais: "https://natation-maj.A_REMPLACER.workers.dev" },
];

/* ---------------------------------------------------------------------
   DÉSACTIVÉ : la règle de sélection U12 est plus complexe, à revoir.
   La page correspondante est rangée dans _brouillons/ (non publiée).

// =====================================================================
//  SÉLECTION U12 BENJAMIN
// =====================================================================
//  Classement par cumul de points FFN (page selection.html).
//  Pour chaque épreuve, ce sont les meilleurs points obtenus entre
//  « debut » et « fin » (incluses) qui comptent, tous bassins confondus.
//  fin: null = pas de date de fin.
//  « rang » : 1 = la meilleure épreuve, 2 = la deuxième (épreuve différente).
// =====================================================================

const SELECTION_U12 = {
  nom: "Sélection U12 benjamin",
  debut: "2026-09-01",
  fin: null,
  criteres: [
    { libelle: "Meilleur 100 m n°1", parmi: ["100 NL", "100 Dos", "100 Brasse", "100 Papillon"], rang: 1 },
    { libelle: "Meilleur 100 m n°2", parmi: ["100 NL", "100 Dos", "100 Brasse", "100 Papillon"], rang: 2 },
    { libelle: "200 4 Nages",        parmi: ["200 4 Nages"], rang: 1 },
  ]
};
--------------------------------------------------------------------- */
