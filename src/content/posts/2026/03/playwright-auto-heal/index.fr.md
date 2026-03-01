---
layout: /src/layouts/Layout.astro
title: "Des tests E2E qui s'arrêtent à la moindre erreur ? Résolvez le problème en 1 minute avec le prompt d'Auto-healing Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Découvrez un prompt pratique qui utilise l'IA pour réparer automatiquement les tests Playwright cassés par des changements de sélecteurs."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 Des tests E2E qui s'arrêtent à la moindre erreur ? Résolvez le problème en 1 minute avec le prompt d'Auto-healing Playwright 🛠️


- **🎯 Recommandé pour :** Ingénieurs QA, développeurs front-end, responsables de l'automatisation des tests
- **⏱️ Temps requis :** Réduit de 2 heures à 1 minute
- **🤖 Modèles recommandés :** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

_"Le test E2E qui fonctionnait parfaitement hier a échoué ce matin juste parce qu'une classe CSS d'un bouton a changé. Faut-il encore aller chercher le nouveau sélecteur ?"_
Lorsqu'on travaille sur le développement front-end ou la QA, il est très courant que les tests E2E (End-to-End) échouent à cause de modifications de l'interface utilisateur. Surtout avec des outils comme Playwright ou Cypress, si la structure du DOM ou le nom d'une classe change, le code de test renvoie inévitablement une erreur. Devoir rechercher chaque test cassé, ouvrir les outils de développement et copier le nouveau sélecteur est une perte de temps considérable. Désormais, donnons simplement les journaux d'erreurs (logs) et la nouvelle structure HTML à l'IA pour qu'elle procède à une « Auto-guérison » (Auto-healing) par elle-même.
---
## ⚡️ Résumé en 3 lignes (TL;DR)
1. Un prompt permettant à l'IA d'analyser et de réparer d'elle-même les sélecteurs Playwright cassés suite à une modification de l'interface utilisateur.
2. Au-delà d'une simple correction du code, vous recevrez des suggestions de stratégies pour écrire des sélecteurs robustes (résilients) face aux changements.
3. Il suffit de fournir le journal des erreurs et la dernière capture du DOM pour obtenir le code corrigé en moins d'une minute.
---
## 🚀 La solution : « Prompt d'auto-guérison (Auto-healing) pour Playwright »

### 🥉 Version Basique (Basic Version)
À utiliser lorsque vous souhaitez simplement fournir le code défectueux et le message d'erreur pour obtenir rapidement le code corrigé.
> **Rôle :** Tu es un `[Ingénieur QA Senior]`.
> **Requête :** Corrige le `[code de test cassé]` en te basant sur le journal d'erreurs Playwright et le nouveau code HTML fournis.
### 🥇 Version Pro (Expert Version)
À utiliser lorsque vous souhaitez aller au-delà d'une simple correction et refactoriser avec un code robuste et facile à maintenir.
> **Rôle (Role) :** Tu es un `[SDET Senior (Software Development Engineer in Test)]` expert en automatisation des tests. Tu as une parfaite compréhension des meilleures pratiques (Best Practices) de Playwright.
> 
> **Contexte (Context) :**
> 
> - Contexte : Récemment, nos tests E2E Playwright ont commencé à échouer suite à une mise à jour de l'interface utilisateur. La cause principale est la modification des sélecteurs (Selectors).
> - Objectif : Réparer le code de test défaillant et l'améliorer en adoptant une structure de sélecteurs robuste (résiliente) et moins sujette aux ruptures lors des futures modifications de l'interface.
> 
> **Requête (Task) :**
> 
> 1. Analyse le `[Journal des erreurs]` et la `[Nouvelle structure HTML]` fournis ci-dessous pour identifier la cause fondamentale de l'erreur.
> 2. Modifie le `[Code de test existant]` pour que le test passe à nouveau avec succès.
> 3. Lors de la modification, privilégie l'utilisation d'attributs orientés utilisateur (User-Facing) tels que le texte, les attributs ARIA, ou les `data-testid` plutôt que de dépendre de classes CSS ou de chemins XPath.
> 4. Ajoute un bref commentaire dans le code pour expliquer « pourquoi cette modification a été effectuée ».
> 
> **Données d'entrée :**
> - Journal des erreurs : `[Copier/Coller l'intégralité du log d'erreur]`
> - Nouvelle structure HTML : `[Extrait HTML pertinent copié depuis les outils de développement]`
> - Code de test existant : `[Extrait du code Playwright qui a échoué]`
> 
> **Contraintes (Constraints) :**
> 
> - La sortie doit être fournie sous forme d'un bloc de code complet, prêt à être copié/collé immédiatement.
> - Utiliser en priorité les localisateurs intégrés (Locators) de Playwright (ex. : `getByRole`, `getByText`, `getByTestId`).
> 
> **Avertissement (Warning) :**
> 
> - S'il est impossible de trouver l'élément approprié dans l'extrait HTML fourni, ne fais pas de suppositions hasardeuses. Réponds plutôt : « Impossible de trouver le sélecteur exact par manque d'informations HTML. Veuillez fournir davantage d'informations sur le DOM. »
---

## 💡 Le mot de l'auteur (Insight)
Cette méthode dévoile tout son potentiel lorsque des dizaines de tests échouent simultanément en environnement de production. Par le passé, lorsqu'un seul sélecteur changeait, je devais ouvrir 30 fichiers de test et utiliser `Ctrl + F` pour les corriger un par un. Cependant, en enregistrant ce prompt dans l'IA intégrée à mon IDE ou dans Claude, et en lui fournissant simplement le journal d'erreurs ainsi qu'une copie de l'onglet Elements du navigateur, je peux externaliser complètement cette tâche fastidieuse d'extraction de sélecteurs. 
Le point clé réside particulièrement dans la contrainte : « Utilise des attributs orientés utilisateur (User-Facing) ». Par défaut, l'IA a tendance à cibler les classes CSS car c'est la solution de facilité, mais en imposant cette règle, elle produit un code d'excellente qualité comme `getByRole('button', { name: 'Submit' })`. C'est une arme qui vous fera gagner au moins une heure de temps de travail par jour. Essayez-la sans hésiter !
---

## 🙋 Foire aux questions (FAQ)
- **Q : Que faire si la structure HTML est trop longue ?**
  - R : Il n'est pas nécessaire de copier la page entière. Il suffit de copier et de fournir les balises jusqu'à l'élément parent de l'élément qui a causé l'erreur (par exemple, un bouton ou un formulaire).
- **Q : Puis-je l'utiliser avec Cypress ou Selenium à la place de Playwright ?**
  - R : Oui, il vous suffit de remplacer le mot « Playwright » par le nom de l'outil que vous utilisez dans le prompt, et cela fonctionnera tout aussi bien.
- **Q : Cela fonctionnera-t-il correctement même dans un projet sans `data-testid` ?**
  - R : Oui, l'IA trouvera intelligemment des alternatives basées sur l'accessibilité, telles que `getByRole` ou `getByText`.
---
## 🧬 Décryptage du prompt (Why it works?)
1. **Attribution du persona de SDET :** En lui donnant le point de vue d'un ingénieur spécialiste des tests plutôt que d'un développeur classique, l'IA est incitée à générer un code qui ne se contente pas de fonctionner, mais qui respecte les meilleures pratiques de Playwright.
2. **Obligation d'utiliser des localisateurs orientés utilisateur (User-Facing) :** Nous avons imposé au niveau du prompt la philosophie fondamentale de Playwright, qui consiste à réduire l'instabilité (Flakiness) des tests à sa source, augmentant ainsi la qualité du résultat.
3. **Sécurité contre les hallucinations :** Pour éviter que l'IA ne génère du code dénué de sens en cas de manque d'informations — ce qui compliquerait davantage le débogage —, nous avons défini une contrainte explicite : « Si tu ne sais pas, dis-le ».
---
## 📊 Preuve : Avant & Après (Before & After)
### ❌ Avant (Entrée)
```text
Journal des erreurs :
Error: locator
