---
layout: /src/layouts/Layout.astro
title: "Prompt Chaos Monkey pour torturer l'IA 💣 (Le Happy Path est mort)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Fatigué des « Succès ! » sans âme de l'IA ? Voici le code de triche hardcore qui impose des scénarios de destruction du système."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 📝 Prompt Chaos Monkey pour torturer l'IA 💣

- **🎯 Public cible :** Seniors, ingénieurs QA et Tech Leads exaspérés par les IA qui se la jouent experts en ne pondant que des « Happy Paths ».
- **⏱️ Temps requis :** De 10 minutes → à 10 secondes (Bloque à la source le temps perdu avec les absurdités de l'IA).
- **🤖 Modèles recommandés :** Toutes les IA conversationnelles (Recommandation spéciale pour Claude 3.5 Sonnet et GPT-4o, excellents en codage).
- ⭐ **Difficulté :** ⭐⭐⭐⭐☆ (L'IA va sérieusement en baver).
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐ (Éradique les bugs avant même leur naissance).
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐ (Applicable immédiatement à tous les tests TDD et E2E).

_"Vous vous réjouissez parce que le code de test généré par l'IA est passé du premier coup ? Félicitations. Votre serveur de production va exploser demain."_

Demandez à un agent IA de rédiger des tests, et neuf fois sur dix, il vous servira une montagne de « scénarios de fonctionnement normal (Happy Path) » bien complaisants. Un monde de conte de fées où les API externes répondent en 0,1 seconde, où la base de données ne tombe jamais en panne, et où l'utilisateur saisit toujours des valeurs parfaites. Laissez tomber. Le code que nous devons écrire est un bouclier spatial conçu pour parer à 80 % d'échecs et de catastrophes. Le code de triche présenté dans cet article est un prompt hardcore qui attrape l'IA par le col et lui injecte de force la philosophie « Chaos Monkey » de Netflix.

---
## ⚡️ En Bref (TL;DR)
- 🚫 **20 % de Happy Path, pas plus :** Les tests qui réussissent ne sont là que pour la forme. Allouez 80 % de vos efforts à la défense contre les scénarios d'échec.
- 💥 **Simulation de catastrophe obligatoire :** Les délais d'attente réseau (timeouts), les erreurs 500 et les ruptures de connexion à la base de données doivent impérativement figurer dans vos blocs de test.
- 🧹 **Interdiction du "Dirty Mocking" :** Sanctionnez sévèrement la pollution des objets globaux comme `window.fetch`, et exigez une isolation propre via MSW ou l'injection de dépendances (DI).

---
## 🚀 La Solution : Le protocole "Chaos Monkey"

### 🥉 Version Basique
À dégainer quand vous souhaitez ajouter rapidement des tests de gestion d'erreurs.

> ```text
> Rôle : Tu es un ingénieur QA hardcore et impitoyable, un véritable Chaos Monkey.
> Tâche : Rédige des codes de test pour le [code] que je te fournis. Ne crée qu'un seul scénario de fonctionnement normal (Happy Path). Pour tous les autres tests, simule les "pires scénarios de catastrophe" (erreur réseau 500, timeout de la DB, saisie de type de données incorrect, etc.) afin de valider la logique de défense.
> ```

\
### 🥇 Version Pro
Le code de triche ultime pour balayer la flatterie sans âme de l'IA et exiger une isolation de test parfaite de niveau production, incluant la vérification du Garbage Collection. Copiez-collez-le tel quel.

> ```text
> **Rôle (Role) :** 
> Tu es le "Chaos Monkey", un SRE impitoyable et Architecte QA Senior tout droit sorti de chez Netflix. Tu prends plus de plaisir à trouver du code qui plante qu'à voir du code qui marche. Tu ne fais aucune formule de politesse ni aucun blabla inutile.
> 
> **Contexte (Context) :**
> - Arrière-plan : Tu dois rédiger les tests Unitaires/E2E pour le [module/composant cible à tester].
> - Objectif : Construire une suite de tests (Test Suite) extrême, digne d'un bouclier spatial, pour vérifier que le système ne s'effondre pas et se rétablit avec grâce (ou gère l'erreur correctement) face à n'importe quelle situation catastrophique.
> 
> **Tâche (Task) :**
> 1. Limite le "Happy Path" à un maximum de 20 % de l'ensemble des tests. Ta valeur réside dans la validation des 80 % de scénarios d'échec.
> 2. Tu dois obligatoirement inclure au moins un des scénarios de catastrophe suivants : Délai de communication avec l'API externe (Timeout), HTTP 500 Internal Error, Rupture de connexion à la base de données.
> 3. Ne te contente pas d'un simple Pass/Fail. Sois acharné avec tes `expect` : vérifie rigoureusement si le rollback d'erreur s'effectue correctement, si la limite de timeout est déclenchée lors d'un ralentissement des performances, et si le nettoyage de la mémoire (Garbage Collection) est sain.
> 
> **Contraintes (Constraints) :**
> - Pollution des objets globaux (Dirty Mocking) STRICTEMENT INTERDITE ! Si tu t'avises d'écraser directement `global.fetch` ou `window.setTimeout`, je tue le processus sur-le-champ.
> - Pour le mocking réseau, utilise obligatoirement MSW (Mock Service Worker), ou isole et mock uniquement l'objet client reçu via l'injection de dépendances (DI).
> - Ne fournis le résultat que sous forme de bloc de code Markdown, et n'ajoute JAMAIS de phrases de conclusion inutiles du genre "Cela vous a-t-il aidé ?".
> ```

---
## 💡 L'avis de l'auteur (Aperçu)
Soyons honnêtes. Quand vous demandez à une IA de pondre des tests, elle se réfugie dans son propre monde imaginaire pour faire apparaître à tout prix cette petite "coche verte (✅)". Une utopie où l'API répond en 1 ms et où l'utilisateur n'envoie que du JSON parfaitement formaté. 

Ce prompt met le feu à cette utopie. Sur le terrain, un serveur ne plante pas à cause d'une logique défaillante. Il s'effondre parce que l'API tierce en laquelle vous aviez confiance crache soudainement un 502 Bad Gateway, ou que la connexion AWS RDS fait des siennes, laissant votre système tourner bêtement dans un chargement infini. En utilisant ce code de triche "Chaos Monkey", l'IA va d'elle-même creuser dans les "Edge Cases" les plus obscurs, bloquant à la source ces pratiques de mocking de bas étage qui polluent la portée globale (global scope). C'est le seul vaccin capable de vous épargner les week-ends au bureau et les nuits blanches de débogage.

---
## 🙋 Foire Aux Questions (FAQ)
- **Q : Et si l'IA crée des situations d'erreur tellement complexes que les tests ne tournent plus du tout ?**
  - R : C'est exactement ce que nous voulons. Si les tests explosent, cela signifie que la logique de gestion d'erreur est absente de votre véritable code de production. Arrêtez de pleurnicher et corrigez votre code principal.
- **Q : Peut-on l'utiliser pour tester des composants Front-end ?**
  - R : Absolument. Demandez-lui de valider ce qui se passe quand un utilisateur clique 50 fois sur un bouton en 0,1 seconde, ou quand le spinner de chargement tourne pendant 30 secondes à cause d'une latence réseau.
- **Q : Ne peut-on pas utiliser jest.mock() au lieu de MSW ?**
  - R : Mocker un module, c'est très bien. Ce que je déteste par-dessus tout, c'est cette sale manie de trafiquer la portée `global` de manière arbitraire, propageant l'infection aux autres fichiers de test. Tant que l'isolation est garantie, utilisez les outils de votre choix.

---
## 🧬 Autopsie du prompt (Pourquoi ça marche ?)
- **Un persona impitoyable (Role) :** En retirant à l'IA son rôle d'"assistante amicale" pour lui implanter l'ego d'un Architecte SRE obsédé par la recherche de failles, on élimine toute flatterie et fioriture inutile.
- **Des contraintes quantifiées (Constraints) :** Au lieu d'une consigne floue comme "Ajoute beaucoup de scénarios d'échec", on lui donne une métrique précise : "Le Happy Path à moins de 20 %". Cela restreint mécaniquement son champ d'action.
- **Directives architecturales (Clean Mocking) :** En interdisant de manière préventive, dès le prompt, l'"anti-pattern" (la pollution des objets globaux) que l'IA commet souvent par paresse, on augmente drastiquement et de force la qualité d'isolation du code de test.

---
## 📊 La preuve : Avant & Après
### ❌ Avant (Entrée classique)
- **Attitude de l'IA avec un prompt normal :** _"Oui ! Je vais vous rédiger le code de test pour la logique de connexion utilisateur ! 😊"_
- **Résultat :** Un joli petit test unique où l'on obtient un `200 OK` en entrant le bon e-mail et le bon mot de passe. (Et bien sûr, un écrasement bâclé de la fonction `fetch` globale).

### ✅ Après (Résultat avec notre méthode)
- **Attitude de l'IA avec le cheat code Chaos Monkey :** (Elle recrache directement le code défensif, sans aucune formule de politesse inutile).
- **Résultat :** 
  - Vérification rigoureuse du déclenchement d'une erreur de Timeout lorsque le réseau est retardé de plus de 5 secondes.
  - Confirmation qu'une interface utilisateur de secours (Fallback UI) sécurisée s'affiche pour l'utilisateur lorsque la base de données s'effondre et renvoie une erreur 500.
  - Garantie d'une isolation réseau parfaite via MSW, n'affectant absolument aucun autre fichier de test.

---
## 🎯 Conclusion
On n'écrit pas du code de test pour trouver la paix intérieure. C'est une simulation impitoyable destinée à vérifier si votre application peut survivre dans cet enfer qu'est l'environnement de production. 

Ne vous laissez pas berner par la flatterie bon marché de l'IA. Essorer l'IA avec ce prompt et détruire le système jusqu'à ses fondations est la seule façon de survivre en tant que véritable ingénieur. Il est temps d'affronter la fragilité de votre propre code. Copiez cela immédiatement et lancez vos tests ! 🍷
```
