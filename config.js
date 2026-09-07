// Configuration de la source de données — SEUL fichier à éditer ici.
//
// Colle ci-dessous l'URL CSV obtenue en publiant l'onglet AGREGATS_PUBLIC :
//
//   1. Ouvre le classeur de suivi des sinistres.
//   2. Fichier → Partager → Publier sur le web.
//   3. Dans "Contenu", choisis l'onglet AGREGATS_PUBLIC  (PAS "Document entier").
//   4. Dans le second menu, choisis "Valeurs séparées par des virgules (.csv)".
//   5. Clique Publier, puis copie l'URL proposée.
//
// Elle doit ressembler à ceci (note le /d/e/ et l'identifiant 2PACX-…,
// différent de l'ID du document) :
//
//   https://docs.google.com/spreadsheets/d/e/2PACX-1vT.../pub?gid=123456&single=true&output=csv
//
// Ne publie QUE l'onglet AGREGATS_PUBLIC : il est pseudonymisé et sans
// données personnelles. Publier "Document entier" exposerait le master, qui
// contient les noms, téléphones et numéros de permis des chauffeurs.
//
// Après modification : Commit changes, et la page est à jour en une minute.

window.SINISTRES_CSV_URL = "https://docs.google.com/spreadsheets/d/1VMGhNhGnATAbFIsbFT2mkAEyO55ZEOcATwpf-h1xnHA/edit?gid=529647148#gid=529647148";
