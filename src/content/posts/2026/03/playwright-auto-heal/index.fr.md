---
layout: /src/layouts/Layout.astro
title: "Vos tests E2E plantent à la moindre modification ? Réparez-les en 1 minute avec ce prompt d'Auto-Healing Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Découvrez un prompt redoutable pour confier à l'IA la réparation automatique de vos tests Playwright cassés par des changements de sélecteurs."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 Vos tests E2E plantent à la moindre modification ? Réparez-les en 1 minute avec ce prompt d'Auto-Healing Playwright 🛠️

- **🎯 Recommandé pour :** Ingénieurs QA, développeurs front-end, responsables de l'automatisation des tests
- **⏱️ Temps requis :** Réduit de 2 heures à 1 minute
- **🤖 Modèles recommandés :** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

_"Le test E2E qui passait au vert hier plante ce matin juste parce qu'une classe CSS a été modifiée. Faut-il encore perdre du temps à chercher le nouveau sélecteur ?"_

Lorsqu'on travaille sur le développement front-end ou la QA, il est fréquent de voir les tests E2E (End-to-End) échouer à la suite de modifications de l'interface utilisateur. Surtout avec des outils comme Playwright ou Cypress, le moindre changement dans la structure du DOM ou le nom d'une classe provoque inévitablement des erreurs. Devoir identifier chaque test cassé, inspecter les éléments dans les DevTools et copier les nouveaux sélecteurs est une perte de temps monumentale. Désormais, confiez simplement vos logs d'erreurs et la nouvelle structure HTML à l'IA pour qu'elle procède d'elle-même à une « auto-guérison » (Auto-healing) de vos tests.
---
## ⚡️ Résumé en 3 lignes (TL;DR)
1. Un prompt permettant à l'IA d'analyser et de réparer de manière autonome les sélecteurs Playwright cassés par des modifications de l'UI.
2. Au-delà d'une simple correction, l'IA vous suggère des stratégies pour écrire des sélecteurs robustes (résilients) face aux futurs changements.
3. Il vous suffit de fournir le log d'erreur et le DOM actualisé pour obtenir un code corrigé et prêt à l'emploi en moins d'une minute.
---
## 🚀 La solution : « Prompt d'Auto-Healing pour Playwright »

### 🥉 Version Basique (Basic Version)
À utiliser lorsque vous souhaitez simplement fournir le code défectueux et le message d'erreur pour obtenir une correction express.
> **Rôle :** Tu es un `[Ingénieur QA Senior]`.
> **Requête :** Corrige le `[code de test cassé]` en te basant sur le log d'erreurs Playwright et le nouveau code HTML fournis.
### 🥇 Version Pro (Expert Version)
À utiliser lorsque vous souhaitez aller au-delà d'une simple rustine et refactoriser vos tests pour les rendre robustes et pérennes.
> **Rôle (Role) :** Tu es un `[SDET Senior (Software Development Engineer in Test)]` expert en automatisation des tests. Tu maîtrises sur le bout des doigts les meilleures pratiques (Best Practices) de Playwright.
> 
> **Contexte (Context) :**
> 
> - Contexte : Récemment, nos tests E2E Playwright ont commencé à échouer suite à une mise à jour de l'interface utilisateur. La cause principale est la modification des sélecteurs (Selectors).
> - Objectif : Réparer le code de test défaillant et l'améliorer en adoptant une structure de sélecteurs robuste (résiliente), moins sujette aux ruptures lors des futures évolutions de l'UI.
> 
> **Requête (Task) :**
> 
> 1. Analyse le `[Journal des erreurs]` et la `[Nouvelle structure HTML]` fournis ci-dessous pour identifier la cause racine de l'erreur.
> 2. Modifie le `[Code de test existant]` pour que le test repasse au vert.
> 3. Lors de la modification, privilégie systématiquement les attributs orientés utilisateur (User-Facing) tels que le texte visible, les attributs ARIA ou les `data-testid`, plutôt que de dépendre de classes CSS ou de chemins XPath fragiles.
> 4. Ajoute un bref commentaire dans le code pour expliquer « pourquoi cette modification précise a été effectuée ».
> 
> **Données d'entrée :**
> - Journal des erreurs : `[Copier/Coller l'intégralité du log d'erreur]`
> - Nouvelle structure HTML : `[Extrait HTML pertinent copié depuis les DevTools]`
> - Code de test existant : `[Extrait du code Playwright qui a échoué]`
> 
> **Contraintes (Constraints) :**
> 
> - La réponse doit être fournie sous la forme d'un bloc de code complet, prêt à être copié/collé immédiatement.
> - Utiliser en priorité les localisateurs natifs (Locators) de Playwright (ex. : `getByRole`, `getByText`, `getByTestId`).
> 
> **Avertissement (Warning) :**
> 
> - S'il est impossible de déduire le bon sélecteur à partir de l'extrait HTML fourni, ne fais aucune supposition hasardeuse. Réponds simplement : « Impossible de trouver le sélecteur exact par manque d'informations HTML. Veuillez fournir davantage d'informations sur le DOM. »
---

## 💡 Le mot de l'auteur (Insight)
Cette approche dévoile tout son potentiel lorsque des dizaines de tests échouent simultanément dans votre pipeline CI. Par le passé, lorsqu'un simple bouton changeait d'identifiant, je devais ouvrir 30 fichiers de test et faire des `Ctrl + F` pour les corriger un par un. Désormais, en enregistrant ce prompt dans l'IA intégrée à mon IDE (comme Copilot ou Cursor) ou dans Claude, et en lui balançant simplement le log d'erreur avec un copier-coller de l'onglet Elements du navigateur, je délègue intégralement cette tâche fastidieuse. 
Le véritable secret de ce prompt réside dans la contrainte : « Utilise des attributs orientés utilisateur (User-Facing) ». Par défaut, l'IA a tendance à cibler bêtement les classes CSS car c'est la solution de facilité. En lui imposant cette règle stricte, elle produit un code d'une propreté clinique comme `getByRole('button', { name: 'Submit' })`. C'est une véritable arme secrète qui vous fera gagner au bas mot une heure de corvée par jour. Testez-le sans hésiter !
---

## 🙋 Foire aux questions (FAQ)
- **Q : Que faire si la structure HTML est trop volumineuse pour être collée ?**
  - R : Inutile de copier la page entière. Contentez-vous de copier l'arborescence DOM de l'élément parent qui contient l'élément fautif (par exemple, la balise `div` du formulaire ou le conteneur du bouton).
- **Q : Ce prompt fonctionne-t-il avec Cypress ou Selenium à la place de Playwright ?**
  - R : Absolument. Il vous suffit de remplacer le mot « Playwright » par votre framework de test dans le prompt, et l'IA adaptera sa logique et sa syntaxe.
- **Q : Cela fonctionnera-t-il correctement même si mon projet n'utilise pas de `data-testid` ?**
  - R : Oui, l'IA est suffisamment intelligente pour se rabattre sur des alternatives basées sur l'accessibilité, telles que `getByRole` ou `getByText`, conformément aux bonnes pratiques.
---
## 🧬 Décryptage du prompt (Why it works?)
1. **Attribution du persona de SDET :** En forçant l'IA à adopter le point de vue d'un ingénieur expert en automatisation (et non d'un simple développeur), on la pousse à générer un code qui ne se contente pas de « marcher », mais qui respecte scrupuleusement les standards de qualité de Playwright.
2. **Obligation d'utiliser des localisateurs orientés utilisateur (User-Facing) :** Nous avons injecté dans le prompt la philosophie fondamentale de Playwright : réduire l'instabilité (Flakiness) des tests à la source, garantissant ainsi des tests beaucoup moins fragiles.
3. **Sécurité anti-hallucination :** Pour éviter que l'IA n'invente des sélecteurs fictifs en cas de contexte incomplet — ce qui transformerait le correctif en cauchemar de débogage —, nous lui avons imposé une règle stricte : « Si tu ne sais pas, dis-le ».
---
## 📊 Preuve : Avant & Après
### ❌ Avant (Entrée)
```text
Journal des erreurs :
Error: locator

```
