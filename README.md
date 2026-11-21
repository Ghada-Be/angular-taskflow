# TaskFlow — Angular & TypeScript

Projet réalisé dans le cadre du module Angular, avec pour objectif de comprendre les notions du cours et de les appliquer progressivement dans TaskFlow.

## Séance 1 — Introduction à Angular

Lors des premières séances, le professeur nous a montré comment installer et utiliser OneNote pour organiser nos cours, puis comment préparer notre environnement avec Node.js, Angular CLI et VS Code.

Nous avons ensuite créé TaskFlow et découvert la structure d'un projet Angular, notamment les composants, les templates et le rôle de TypeScript.

J'ai travaillé sur les différents types de binding, `@if`, `@for` et les Pipes pour afficher les tâches et formater leurs titres et dates. Nous avons également vu les interfaces TypeScript pour mieux définir la structure de nos données.

## Séance 2 — Signals et communication entre composants

Cette séance était principalement consacrée aux Signals et à la communication entre composants.

Le professeur nous a expliqué qu'avant, Angular utilisait Zone.js pour détecter les changements, ce qui pouvait entraîner des vérifications inutiles et affecter les performances. Avec le fonctionnement Zoneless, Angular s'appuie sur des notifications plus précises.

Ce que j'ai retenu :

- `signal()` permet de créer une valeur réactive et `tasks()` de la lire.
- `set()` remplace une valeur, tandis que `update()` permet de la modifier à partir de son état précédent.
- Il ne faut pas modifier directement le tableau original. On crée une nouvelle référence avec des méthodes JavaScript comme `filter()` ou `map()`.
- `computed()` représente une variable calculée automatiquement. Par exemple, `count` dépend de `tasks`, donc on ne le modifie pas directement.
- `input()` permet à l'enfant de recevoir des données du parent, tandis que `output()` permet de remonter un événement.
- `[task]` correspond au property binding et `(completed)` à l'event binding.
- `emit()` permet à l'enfant d'envoyer un événement au parent.

Pour mieux comprendre, le professeur nous a donné l'exemple d'un catalogue de produits avec des ProductCard et un service de panier, où l'on peut ajouter un produit, le supprimer par son ID ou modifier sa quantité.

Dans TaskFlow, j'ai appliqué la même logique avec `TaskList` comme parent et `TaskCard` comme enfant. Lorsqu'une tâche est terminée, l'enfant transmet son ID au parent, qui met à jour la liste avec `update()`.

J'ai surtout compris que l'enfant n'a pas besoin de modifier directement les données : il communique avec le parent, qui se charge de gérer les changements.
