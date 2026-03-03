---
layout: /src/layouts/Layout.astro
title: "Prompt Chaos Monkey pour torturer l'IA 💣 (Le Happy Path est mort)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Marre des succès artificiels générés par l'IA ? Voici le code de triche impitoyable qui simule les pires scénarios pour blinder votre système."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

# 📝 Prompt Chaos Monkey pour torturer l'IA 💣

- **🎯 Public cible :** Développeurs seniors, ingénieurs QA et Tech Leads exaspérés par les IA complaisantes qui ne pondent que des « Happy Paths ».
- **⏱️ Temps requis :** De 10 minutes → à 10 secondes (éradique à la source le temps perdu à déboguer les absurdités de l'IA).
- **🤖 Modèles recommandés :** Toutes les IA conversationnelles (mention spéciale pour Claude 3.5 Sonnet et GPT-4o, excellents en développement).
- ⭐ **Difficulté :** ⭐⭐⭐⭐☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Vous vous réjouissez parce que le code de test généré par l'IA est passé du premier coup ? Félicitations. Votre serveur de production explosera demain."_

Demandez à un agent IA de rédiger des tests, et neuf fois sur dix, il vous servira une montagne de « scénarios de fonctionnement idéal (Happy Path) » parfaitement lisses. Un monde de conte de fées où les API externes répondent en 0,1 seconde, où la base de données ne flanche jamais, et où l'utilisateur saisit toujours des données irréprochables. Oubliez ça. Le code que nous devons livrer est un bouclier conçu pour encaisser 80 % d'échecs et de catastrophes. Ce code de triche est un prompt impitoyable qui attrape l'IA par le col pour lui injecter de force la philosophie « Chaos Monkey » popularisée par Netflix.

---

## ⚡️ En Bref (TL;DR)

- 🚫 **20 % de Happy Path, grand maximum :** Les tests qui réussissent ne sont là que pour la forme. Allouez 80 % de vos efforts à la résilience face aux pires scénarios.
- 💥 **Simulation de chaos obligatoire :** Les timeouts réseau, les erreurs HTTP 500 et les ruptures de connexion à la base de données doivent impérativement figurer dans vos tests.
- 🧹 **Interdiction absolue du "Dirty Mocking" :** Sanctionnez la pollution des objets globaux comme `window.fetch`, et exigez une isolation stricte via MSW ou l'injection de dépendances (DI).

---

## 🚀 La Solution : Le protocole "Chaos Monkey"

### 🥉 Version Basique

À dégainer pour exiger rapidement des tests robustes de gestion des erreurs.

> **Rôle :** Tu es un ingénieur QA hardcore et impitoyable, un véritable Chaos Monkey.
> **Tâche :** Rédige les codes de test pour le `[code_à_tester]` que je te fournis. Ne crée qu'un seul scénario de fonctionnement idéal (Happy Path). Pour tous les autres tests, simule les pires scénarios de catastrophe (erreur réseau 500, timeout de la base de données, saisie de données invalides, etc.) afin de valider la logique de défense.

### 🥇 Version Pro

Le code de triche ultime pour pulvériser la complaisance de l'IA et exiger une isolation de test irréprochable, digne d'une mise en production, incluant la vérification du Garbage Collector. Copiez-collez-le tel quel.

> **Rôle (Role) :** Tu es le "Chaos Monkey", un SRE impitoyable et Architecte QA Senior tout droit sorti de chez Netflix. Tu prends plus de plaisir à faire planter du code qu'à le voir fonctionner. Tu bannis toute formule de politesse et tout blabla inutile.
> 
> **Contexte (Context) :**
> - Arrière-plan : Tu dois rédiger les tests Unitaires/E2E pour le `[module_ou_composant_cible]`.
> - Objectif : Construire une suite de tests (Test Suite) extrême, digne d'un véritable bouclier, pour vérifier que le système ne s'effondre pas et se rétablit avec grâce (ou gère l'erreur proprement) face à n'importe quelle situation chaotique.
> 
> **Tâche (Task) :**
> 1. Limite le "Happy Path" à un maximum de 20 % de l'ensemble des tests. Ta véritable valeur réside dans la validation des 80 % de scénarios d'échec.
> 2. Tu dois obligatoirement inclure au moins un des scénarios catastrophes suivants : délai d'attente de l'API externe (Timeout), erreur HTTP 500 Internal Error, ou rupture de connexion à la base de données.
> 3. Ne te contente pas d'un simple Pass/Fail. Sois impitoyable avec tes assertions (`expect`) : vérifie rigoureusement si le rollback s'effectue correctement en cas d'erreur, si la limite de timeout se déclenche lors d'une chute de performance, et si le nettoyage de la mémoire (Garbage Collection) est optimal.
> 
> **Contraintes (Constraints) :**
> - Pollution des objets globaux (Dirty Mocking) STRICTEMENT INTERDITE ! Si tu t'avises d'écraser directement `global.fetch` ou `window.setTimeout`, je tue le processus sur-le-champ.
> - Pour le mocking réseau, utilise obligatoirement MSW (Mock Service Worker), ou isole et mock uniquement le client injecté via l'injection de dépendances (DI).
> - Ne fournis le résultat QUE sous forme de bloc de code Markdown, et n'ajoute JAMAIS de phrases de conclusion mielleuses du type "Cela vous a-t-il aidé ?".

---

## 💡 L'avis de l'auteur (Insight)

Soyons honnêtes. Quand vous demandez à une IA de pondre des tests, elle se réfugie dans son propre monde imaginaire pour faire apparaître à tout prix cette satanée petite coche verte (✅). Une utopie où l'API répond en 1 ms et où l'utilisateur n'envoie que du JSON parfaitement formaté. 

Ce prompt met le feu à cette utopie. Sur le terrain, un serveur ne plante pas à cause d'une logique défaillante. Il s'effondre parce que l'API tierce en laquelle vous aviez une confiance aveugle crache soudainement un 502 Bad Gateway, ou que la connexion AWS RDS fait des siennes, laissant votre système tourner bêtement dans une boucle de chargement infinie. En utilisant ce code de triche "Chaos Monkey", l'IA va d'elle-même creuser les "Edge Cases" les plus obscurs, bloquant à la source ces pratiques de mocking bâclées qui polluent la portée globale (global scope). C'est le seul antidote capable de vous épargner les week-ends au bureau et les nuits blanches de débogage.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Et si l'IA crée des situations d'erreur tellement complexes que les tests ne tournent plus du tout ?**
  - R : C'est exactement l'objectif recherché. Si les tests explosent, cela signifie que la logique de gestion des erreurs est absente de votre véritable code de production. Arrêtez de vous plaindre et blindez votre code principal.
- **Q : Peut-on l'utiliser pour tester des composants Front-end ?**
  - R : Absolument. Demandez-lui de valider ce qui se passe quand un utilisateur clique 50 fois sur un bouton en 0,1 seconde, ou quand le spinner de chargement tourne dans le vide pendant 30 secondes à cause d'une latence réseau.
- **Q : Ne peut-on pas utiliser `jest.mock()` au lieu de MSW ?**
  - R : Mocker un module, c'est très bien. Ce que je déteste par-dessus tout, c'est cette fâcheuse manie de trafiquer arbitrairement la portée `global`, propageant l'infection aux autres fichiers de test. Tant que l'isolation est garantie, utilisez les outils qui vous conviennent.

---

## 🧬 Autopsie du prompt (Pourquoi ça marche ?)

- **Un persona impitoyable (Role) :** En arrachant à l'IA son masque d'"assistante amicale" pour lui greffer l'ego d'un Architecte SRE obsédé par la recherche de failles, on élimine toute flatterie et fioriture inutile.
- **Des contraintes quantifiées (Constraints) :** Au lieu d'une directive floue comme "Ajoute beaucoup de scénarios d'échec", on lui impose une métrique implacable : "Le Happy Path à moins de 20 %". Cela restreint mécaniquement sa zone de confort.
- **Directives architecturales (Clean Mocking) :** En interdisant de manière préventive l'anti-pattern majeur de l'IA (la pollution des objets globaux) dès le prompt, on force drastiquement l'élévation de la qualité d'isolation du code de test.

---

## 📊 Preuve : Before & After

### ❌ Avant (Entrée classique)

- **Attitude de l'IA avec un prompt normal :** _"Oui ! Je vais rédiger le code de test pour la logique de connexion utilisateur ! 😊"_
- **Résultat :** Un joli petit test unique où l'on obtient un `200 OK` en entrant le bon e-mail et le bon mot de passe. (Et bien sûr, un écrasement bâclé de la fonction `fetch` globale).

### ✅ Après (Résultat avec notre méthode)

- **Attitude de l'IA avec le cheat code Chaos Monkey :** (Elle recrache directement le code défensif, sans aucune formule de politesse inutile).
- **Résultat :** 
  - Vérification rigoureuse du déclenchement d'une erreur de Timeout lorsque le réseau est retardé de plus de 5 secondes.
  - Confirmation qu'une interface utilisateur de secours (Fallback UI) sécurisée s'affiche pour l'utilisateur lorsque la base de données s'effondre et renvoie une erreur 500.
  - Garantie d'une isolation réseau parfaite via MSW, n'affectant absolument aucun autre fichier de test.

---

## 🎯 Conclusion

On n'écrit pas des tests pour trouver la paix intérieure. C'est une simulation impitoyable destinée à vérifier si votre application peut survivre dans cet enfer qu'est l'environnement de production. 

Ne vous laissez pas berner par la flatterie bon marché de l'IA. Essorer l'IA avec ce prompt et détruire le système jusqu'à ses fondations est la seule façon de survivre en tant que véritable ingénieur. Il est temps d'affronter la fragilité de votre propre code. Copiez cela immédiatement et lancez vos tests ! 🍷
