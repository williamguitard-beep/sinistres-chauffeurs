# Sinistres Chauffeurs — vue publique

Tableau de bord de la sinistralité de la flotte, **anonymisé** et
partageable.

👉 https://williamguitard-beep.github.io/sinistres-chauffeurs/

## Ce que contient cette page

Uniquement des **agrégats** : volumes de sinistres par mois, DTO vs
Location, taux normalisé par taille de parc, part de récidive, répartition
par tranche d'ancienneté du conducteur, durée moyenne d'immobilisation.

Les chauffeurs et les véhicules y apparaissent sous un **pseudonyme stable**
(`C-…`, `V-…`). Les compteurs, les rangs de récidive et les taux restent
donc exacts, sans qu'aucune identité ne soit exposée.

Cette page ne contient **aucun** nom, numéro de téléphone, numéro de permis
ni plaque d'immatriculation.

## D'où viennent les données

La page lit à chaque chargement l'onglet `AGREGATS_PUBLIC` du classeur de
suivi, publié en CSV. Cet onglet est réécrit à chaque exécution du pipeline
(quotidienne), donc **la page se met à jour toute seule**.

Prérequis, une seule fois : publier l'onglet `AGREGATS_PUBLIC` via
*Fichier → Partager → Publier sur le web*. Tant que ce n'est pas fait, la
page s'affiche vide avec un diagnostic explicite — elle ne casse pas.

## Comment la mettre à jour

Ce dépôt ne contient que le fichier publié. La source vit dans le dépôt de
travail privé (`Analyse sinistre`), qui régénère cette page par

```sh
node scripts/build-github-page.js   # -> docs/index.html
node scripts/publish-github-page.js # -> pousse ici
```

Le dépôt de travail n'est **pas** publiable : il contient les exports
nominatifs (plannings, master) qui alimentent le pipeline.
