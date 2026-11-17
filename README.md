# Suivi natation (global)

Site de suivi de Luka et de ses concurrents : records, comparaison, qualification aux départementaux, webconfrontation.

- `index.html` : le site. Pas besoin d'y toucher.
- `donnees.js` : les nageurs suivis, les temps saisis à la main, les réglages et les boutons de mise à jour.
- `donnees-ffn.js` : courses récupérées automatiquement sur les fiches FFN. Ne pas le modifier.
- `_brouillons/` : pages en attente, non publiées (sélection U12).

## Mettre à jour depuis la FFN

Boutons en bas du site, ou onglet **Actions** > « Mise à jour depuis la FFN » > **Run workflow**.
Si l'Action échoue avec une erreur de droits : **Settings > Actions > General > Workflow permissions**, cocher « Read and write permissions ».

## Ajouter un concurrent

Ajouter une ligne dans `NAGEURS` de `donnees.js` avec un `id` unique et son numéro FFN (`iuf`), puis lancer une mise à jour.
