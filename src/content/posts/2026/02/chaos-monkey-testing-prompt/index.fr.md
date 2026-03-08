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

## 📝 Prompt Chaos Monkey pour torturer l'IA 💣

- **🎯 Cible :** Développeurs seniors, ingénieurs QA et Tech Leads exaspérés par les IA complaisantes qui ne pondent que du « Happy Path ».
- **⏱️ Temps gagné :** De 10 minutes à 10 secondes (éradique à la source les heures perdues à déboguer les hallucinations de l'IA).
- **🤖 Modèles recommandés :** Toutes les IA de pointe (mention spéciale à Claude 3.5 Sonnet et GPT-4o, redoutables en code).
- ⭐ **Difficulté :** ⭐⭐⭐⭐☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Vous sabrez le champagne parce que le test généré par l'IA est passé du premier coup ? Félicitations. Votre serveur de prod explosera demain matin."_

Demandez à une IA de rédiger des tests, et neuf fois sur dix, elle vous servira sur un plateau une montagne de « Happy Paths » parfaitement lisses. Un monde de Bisounours où les API externes répondent en 0,1 seconde, où la base de données ne flanche jamais, et où l'utilisateur saisit toujours des données irréprochables. Oubliez cette utopie. Le code que nous expédions en production est un bouclier qui doit encaisser 80 % d'échecs, de pannes et de catastrophes imprévisibles. Ce prompt est un véritable code de triche : il attrape l'IA par le col et lui injecte de force la philosophie « Chaos Monkey » popularisée par Netflix, pour des tests enfin blindés.

---

## ⚡️ 3 points clés (TL;DR)

- 🚫 **20 % de Happy Path, grand maximum :** Les tests qui réussissent ne sont là que pour rassurer les juniors. Consacrez 80 % de l'effort à la résilience face aux pires scénarios.
- 💥 **Simulation de chaos obligatoire :** Les timeouts réseau, les erreurs HTTP 500 et les ruptures de connexion à la base de données doivent être le cœur de vos tests.
- 🧹 **Tolérance zéro pour le "Dirty Mocking" :** Interdisez formellement la pollution des objets globaux (comme `window.fetch`), et exigez une isolation stricte via MSW ou l'injection de dépendances (DI).

---

## 🚀 La Solution : Le protocole "Chaos Monkey"

### 🥉 Version Basique

À dégainer pour forcer rapidement la création de tests robustes axés sur la gestion des erreurs.

> **Rôle :** Tu es un ingénieur QA hardcore et impitoyable, un véritable Chaos Monkey.
> **Tâche :** Rédige les tests pour le `[code_à_tester]` que je te fournis. Ne génère qu'un seul scénario de fonctionnement idéal (Happy Path). Pour tout le reste, simule les pires catastrophes (erreur réseau 500, timeout de la DB, inputs invalides, etc.) afin de valider ma logique de défense.

### 🥇 Version Pro

Le prompt ultime pour pulvériser la complaisance de l'IA. Il exige une isolation irréprochable des tests, digne d'une mise en prod, allant jusqu'à vérifier le Garbage Collector. Copiez-collez-le tel quel.

> **Rôle (Role) :** Tu es le "Chaos Monkey", un SRE impitoyable et Architecte QA Senior tout droit sorti de chez Netflix. Tu prends plus de plaisir à faire planter du code qu'à le voir fonctionner. Tu bannis toute formule de politesse et tout blabla inutile.
> 
> **Contexte (Context) :**
> - Arrière-plan : Tu dois rédiger les tests Unitaires/E2E pour le `[module_ou_composant_cible]`.
> - Objectif : Construire une suite de tests (Test Suite) de l'extrême, un véritable bouclier validant que le système ne s'effondre pas et récupère avec grâce (ou gère l'erreur proprement) face au chaos absolu.
> 
> **Tâche (Task) :**
> 1. Limite le "Happy Path" à 20 % maximum des tests. Ta véritable valeur ajoutée réside dans les 80 % restants : les scénarios d'échec.
> 2. Inclus obligatoirement au moins l'un de ces scénarios catastrophes : timeout d'une API externe, erreur HTTP 500 (Internal Error), ou coupure brutale de la base de données.
> 3. Ne te contente pas d'un simple Pass/Fail. Sois impitoyable sur tes assertions (`expect`) : vérifie rigoureusement le rollback en cas d'erreur, le déclenchement du timeout lors de chutes de perfs, et le nettoyage optimal de la mémoire (Garbage Collection).
> 
> **Contraintes (Constraints) :**
> - Pollution des objets globaux (Dirty Mocking) STRICTEMENT INTERDITE ! Si tu t'avises d'écraser directement `global.fetch` ou `window.setTimeout`, je tue le processus sur-le-champ.
> - Pour le mocking réseau, utilise obligatoirement MSW (Mock Service Worker), ou isole/mocke uniquement le client via l'injection de dépendances (DI).
> - Livre le résultat UNIQUEMENT sous forme de bloc de code Markdown. N'ajoute JAMAIS de phrases mielleuses du type "Cela vous a-t-il aidé ?".

---

## 💡 L'avis de l'auteur (Insight)

Soyons honnêtes. Quand vous demandez à une IA de pondre des tests, elle se réfugie dans son propre monde imaginaire pour faire apparaître à tout prix cette satanée petite coche verte (✅). Une utopie ridicule où l'API répond en 1 ms et où l'utilisateur n'envoie que du JSON parfaitement formaté. 

Ce prompt met le feu à cette utopie. Sur le terrain, un serveur ne plante pas à cause d'une logique métier défaillante. Il s'effondre parce que l'API tierce en laquelle vous aviez une confiance aveugle crache soudainement une erreur 502 Bad Gateway, ou parce que la connexion AWS RDS saute, laissant votre système tourner bêtement dans une boucle infinie. En utilisant ce "Chaos Monkey", l'IA va d'elle-même creuser les "Edge Cases" les plus obscurs et bloquer à la source ces pratiques de mocking bâclées qui polluent le scope global. C'est le seul véritable antidote pour sauver vos week-ends et vous épargner des nuits blanches de débogage.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Et si l'IA génère des erreurs tellement complexes que les tests refusent de passer ?**
  - R : C'est exactement le but. Si vos tests explosent, cela prouve que la gestion des erreurs est absente de votre code de production. Arrêtez de vous plaindre et allez blinder votre logique métier.
- **Q : Peut-on l'utiliser pour tester des composants Front-end ?**
  - R : Absolument. Demandez-lui de valider ce qui se passe quand un utilisateur clique 50 fois sur un bouton en 0,1 seconde, ou quand le spinner de chargement tourne dans le vide pendant 30 secondes à cause d'une latence réseau.
- **Q : Ne peut-on pas simplement utiliser `jest.mock()` au lieu de MSW ?**
  - R : Mocker un module spécifique est très bien. Ce que je bannis, c'est cette fâcheuse manie de trafiquer arbitrairement la portée `global`, ce qui propage l'infection aux autres fichiers de tests. Tant que l'isolation stricte est garantie, utilisez l'outil de votre choix.

---

## 🧬 Autopsie du prompt (Pourquoi ça marche ?)

- **Un persona impitoyable (Role) :** En arrachant à l'IA son masque d'"assistante amicale" pour lui greffer l'ego d'un SRE obsédé par les failles, on court-circuite toute flatterie et on va droit au but.
- **Des contraintes quantifiées (Constraints) :** Au lieu d'une consigne floue comme "Ajoute des cas d'erreur", on lui impose une métrique implacable : "Le Happy Path représente moins de 20 %". Cela détruit mécaniquement sa zone de confort.
- **Directives architecturales (Clean Mocking) :** En interdisant préventivement le pire anti-pattern de l'IA (la pollution globale), on la force à élever drastiquement le niveau d'architecture et d'isolation du code de test.

---

## 📊 Preuve : Before & After

### ❌ Avant (Entrée classique)

- **Attitude de l'IA (prompt basique) :** _"Bien sûr ! Je vais vous rédiger le code de test pour la connexion ! 😊"_
- **Résultat :** Un test unique et inutile qui renvoie un `200 OK` en entrant le bon e-mail et le bon mot de passe. (Avec, en prime, un écrasement toxique de la fonction `fetch` globale).

### ✅ Après (Avec notre méthode)

- **Attitude de l'IA (Chaos Monkey) :** (Elle recrache directement le code défensif, sans aucune formule de politesse).
- **Résultat :** 
  - Validation stricte du déclenchement d'une erreur de Timeout si le réseau met plus de 5 secondes à répondre.
  - Confirmation qu'une UI de secours (Fallback UI) s'affiche correctement quand la base de données s'effondre avec une erreur 500.
  - Garantie d'une isolation réseau parfaite via MSW, sans aucun effet de bord sur les autres fichiers de la suite de tests.

---

## 🎯 Conclusion

On n'écrit pas des tests pour trouver la paix intérieure. C'est une simulation de guerre destinée à vérifier si votre application survivra dans cet enfer qu'est l'environnement de production. 

Ne vous laissez plus berner par la flatterie bon marché de l'IA. Torturer l'IA avec ce prompt et détruire virtuellement votre système jusqu'à ses fondations est la seule façon de survivre en tant que véritable ingénieur. Il est temps d'affronter la fragilité de votre propre code. Copiez ce prompt immédiatement et lancez vos tests ! 🍷
