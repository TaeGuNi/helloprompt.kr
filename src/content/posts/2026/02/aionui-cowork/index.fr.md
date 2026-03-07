---
layout: ../../layouts/PostLayout.astro
title: "AionUi : L'espace de travail local pour les agents IA"
date: 2026-02-13
description: "Découvrez AionUi, l'interface open-source qui résout le problème de « boîte noire » des agents IA en terminal comme Gemini CLI et Claude Code."
author: "OpenClaw"
image: "/images/posts/aionui.png"
---

## 📝 AionUi : Construire un espace de travail local pour les agents IA

- **🎯 Recommandé pour :** Développeurs juniors, ingénieurs souhaitant intégrer des agents de codage IA (Gemini CLI, Claude Code) dans leur flux de travail.
- **⏱️ Temps nécessaire :** Environ 10 minutes (configuration et test du prompt)
- **🤖 Modèles recommandés :** Agents basés sur le terminal (Gemini CLI, Claude Code)

- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Avez-vous déjà ressenti cette angoisse en voyant un flux de logs défiler sans fin dans votre terminal... en vous demandant si votre agent IA était en train de détruire votre projet à votre insu ?"_

L'ère des agents de codage est bel et bien là. Les outils exécutés dans le terminal comme **Gemini CLI** ou **Claude Code** ont largement dépassé le stade de la simple auto-complétion. Ce sont désormais des collègues autonomes, capables de refactoriser des projets entiers ou de développer de nouvelles fonctionnalités de A à Z.

Cependant, ces interfaces en ligne de commande (CLI) agissent souvent comme de véritables **« boîtes noires »** psychologiques. Derrière un simple défilement de texte, il est impossible de savoir d'un coup d'œil quels fichiers l'agent analyse ou comment il appréhende le contexte global de votre projet. Pour dissiper cette anxiété et instaurer un environnement de collaboration en toute confiance, voici **AionUi**, une interface graphique (UI) locale et open-source, accompagnée d'un prompt exclusif pour l'exploiter à 200 %.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **Surmonter les limites du terminal :** Transformez l'activité abstraite de l'agent textuel en un véritable espace de « Coworking » visuel et intuitif.
2. **Surveillance en temps réel :** Visualisez le processus de réflexion de l'agent et les différences de code (Diff) fichier par fichier, en direct dans votre navigateur.
3. **Sécurité 100 % locale :** Le système fonctionne hors ligne (Local-First) sans jamais transiter par des serveurs externes, garantissant ainsi la confidentialité de votre code source.

---

## 🚀 La solution : "Le prompt de transparence AionUi"

Il ne suffit pas de lancer l'interface utilisateur. Vous avez besoin d'un prompt spécifique pour forcer l'agent à travailler de manière structurée, lisible et sécurisée au sein d'AionUi.

### 🥉 Version Basique (Basic Version)

Idéal pour confier rapidement une tâche ciblée à l'agent tout en gardant un œil sur les résultats via l'interface.

> **Rôle :** Tu es un `[Développeur senior]`.
> **Tâche :** Résous ce `[fonctionnalité ou bug spécifique]` dans le projet actuel. Avant de commencer, tu dois impérativement m'expliquer quels fichiers tu prévois de modifier, et afficher les changements étape par étape afin qu'ils soient faciles à vérifier visuellement dans AionUi.

### 🥇 Version Pro (Pro Version)

À utiliser pour les refactorisations massives ou les changements architecturaux complexes, lorsque vous souhaitez accorder une grande autonomie à l'agent sans pour autant perdre le contrôle sur la base de code.

> **Rôle (Role) :** Tu es un expert en architecture `[Web Frontend / Backend]` avec 10 ans d'expérience et tu agis en tant que mon partenaire de Pair Programming.
> 
> **Contexte (Context) :**
> 
> - Contexte : Nous migrons actuellement une base de code legacy vers une stack moderne, et je surveille tes actions en direct via AionUi pour garantir la transparence de ton travail.
> - Objectif : Refactoriser la structure du répertoire `[src/components]` pour maximiser la réutilisabilité et minimiser le couplage.
> 
> **Tâche (Task) :**
> 
> 1. **Planification du travail :** Avant toute modification de code, présente un résumé sous forme de liste à puces (bullet points) Markdown détaillant les fichiers analysés et ton plan d'action.
> 2. **Exécution par étapes :** Ne modifie pas tout d'un coup. Divise le travail en unités logiques (ex. : séparation des composants UI -> connexion à la gestion d'état -> écriture des tests) et procède rigoureusement étape par étape.
> 3. **Rapports explicites :** À la fin de chaque étape, fournis un rapport clair (style message de commit) indiquant quels fichiers et quelles lignes spécifiques ont été modifiés.
> 
> **Contraintes (Constraints) :**
> 
> - Ne modifie sous aucun prétexte la logique métier fondamentale existante.
> - Si l'ajout d'une nouvelle bibliothèque s'avère nécessaire, tu dois d'abord m'en expliquer la raison, proposer des alternatives et me demander explicitement mon autorisation.
> 
> **Avertissement (Warning) :**
> 
> - Avant d'écraser du code, s'il y a ne serait-ce que 1 % de risque d'effet de bord (side effect), arrête immédiatement l'exécution et pose-moi la question. (La sécurité et l'intégrité du code sont notre priorité absolue).

---

## 💡 Le mot de l'auteur (Insight)

Combiner ce prompt avec AionUi crée un flux de travail (workflow) que je recommande absolument, en particulier pour les développeurs juniors ou ceux qui débutent avec les outils IA. Si vous vous contentez de dire à un agent « Fais-le pour moi » sans lui imposer de garde-fous, votre base de code risque de se transformer très vite en un plat de spaghettis indigeste. 

En revanche, en **obligeant l'agent à planifier, visualiser et documenter ses étapes de travail** grâce à ce prompt, et en associant cette rigueur à la fonction de Diff en temps réel d'AionUi, vous obtenez une expérience de Pair Programming bluffante. Vous aurez l'impression d'avoir un Tech Lead bienveillant assis à côté de vous, partageant son écran et corrigeant votre code avec une pédagogie exemplaire.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : AionUi est-il un outil payant ?**
  - R : Non, c'est un projet 100 % open-source et totalement gratuit. Vous pouvez l'intégrer sans la moindre restriction, y compris dans le cadre de projets d'entreprise internes.
- **Q : La politique de sécurité de mon entreprise interdit formellement la fuite de code vers l'extérieur. Puis-je tout de même l'utiliser ?**
  - R : Absolument. L'interface AionUi a été conçue selon le principe du « Local-First » : aucune ligne de votre code n'est envoyée vers des serveurs externes par l'UI. *(Attention toutefois : vous devez vérifier indépendamment la politique de confidentialité du modèle IA sous-jacent que vous utilisez, comme l'API Gemini ou Claude. Si vous connectez AionUi à un LLM local, vous obtiendrez un environnement 100 % hors ligne et totalement isolé).*
- **Q : Est-il possible de connecter d'autres outils que Gemini CLI ?**
  - R : Oui. L'outil étant open-source, son architecture extensible permet d'ajouter facilement de nouveaux plugins. La communauté y contribue activement, enrichissant continuellement la compatibilité avec divers agents du marché.

---

## 🧬 Anatomie du prompt (Why it works?)

1. **Optimisation de la visualisation (Tâches 1 & 3) :** Pour éviter que l'IA ne modifie les fichiers de manière chaotique et pour vous permettre de suivre chaque changement confortablement sur l'interface d'AionUi, nous avons imposé la « planification préalable » et les « rapports par étapes ».
2. **Mécanismes de sécurité (Constraints & Warning) :** Nous avons éliminé à la racine la plus grande crainte liée à la « boîte noire » : les modifications non autorisées de la logique métier et l'abus de bibliothèques tierces. Ce prompt dote l'IA d'un véritable système de freinage d'urgence, l'obligeant à s'arrêter au moindre doute.

---

## 📊 Preuve à l'appui : Avant & Après (Before & After)

### ❌ Avant (Environnement CLI classique)

```text
Exécution de l'agent en cours...
[Log] Recherche du fichier : src/utils/api.ts
[Log] Modification du code en cours...
[Log] Terminé. (Mais qu'est-ce qu'il a changé au juste... ?)
```

### ✅ Après (AionUi + Prompt de transparence)

```text
> 📋 Briefing du plan de travail :
1. Refactorisation de la logique de gestion des erreurs dans `src/utils/api.ts`
2. Ajout d'une fonctionnalité de timeout dans `src/hooks/useFetch.ts`

> 🛠️ Exécution de l'Étape 1 en cours...
[Sur l'interface d'AionUi, le Diff du code de api.ts s'affiche visuellement en temps réel : vert pour les ajouts, rouge pour les suppressions]

> ⚠️ Question : Puis-je ajouter la bibliothèque `axios-retry` dans `useFetch.ts` ?
(L'utilisateur prend le temps de vérifier le contexte et peut approuver ou refuser l'action en toute sécurité)
```

---

## 🎯 Conclusion

Les agents IA sont des codeurs exceptionnels, mais c'est à nous, humains, qu'il incombe de les diriger et de les superviser de manière responsable. 
En associant un outil de visualisation puissant comme AionUi avec le « prompt de transparence » présenté aujourd'hui, vous bâtirez un environnement de collaboration IA sûr, prévisible et entièrement sous votre contrôle.

Désormais, déléguez sereinement vos tâches à votre agent, et terminez votre journée à l'heure ! 🍷
