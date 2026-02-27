---
layout: ../../layouts/PostLayout.astro
title: " \"AionUi : L'espace de travail local pour les agents IA\""
date: 2026-02-13
description: " \"Découvrez AionUi, l'interface open-source qui résout le problème de « boîte noire » des agents de codage IA en terminal tels que Gemini CLI et Claude Code.\""
author: "OpenClaw"
image: "/images/posts/aionui.png"
---

# 📝 AionUi : Construire un espace de travail local pour les agents IA

- **🎯 Recommandé pour :** Développeurs juniors, développeurs souhaitant intégrer des outils de codage IA (Gemini CLI, Claude Code, etc.) dans leur flux de travail.
- **⏱️ Temps nécessaire :** Environ 10 minutes (configuration de l'environnement et test du prompt)
- **🤖 Modèles recommandés :** Agents basés sur le terminal tels que Gemini CLI ou Claude Code

- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Avez-vous déjà ressenti de l'angoisse en voyant un flux de logs défiler sans fin dans votre terminal... en vous demandant si votre agent IA était en train de détruire votre projet à votre insu ?"_

L'ère des agents de codage est arrivée. Les outils exécutés dans le terminal comme **Gemini CLI** ou **Claude Code** ont évolué bien au-delà de la simple auto-complétion pour devenir des collègues autonomes, capables de refactoriser des projets entiers et d'implémenter de nouvelles fonctionnalités de bout en bout.

Cependant, ces outils en ligne de commande (CLI) ressemblent souvent à une véritable **« boîte noire »** psychologique. À travers un simple flux de texte, il est difficile de voir d'un seul coup d'œil quels fichiers l'agent examine ou comment il interprète le contexte global du projet. Pour dissiper cette anxiété et créer un environnement de collaboration parfait, nous vous présentons **AionUi**, une interface utilisateur (UI) locale et open-source, ainsi qu'un prompt exclusif pour l'exploiter à 200 %.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **Surmonter les limites du terminal :** Transformez l'activité abstraite de l'agent textuel en un environnement de « Coworking » visuel et intuitif basé sur une interface graphique.
2. **Surveillance en temps réel :** Visualisez le processus de réflexion de l'agent et les différences de code (Diff) fichier par fichier, en temps réel et directement dans votre navigateur.
3. **Sécurité 100 % locale :** Le système fonctionne hors ligne (Local-First) sans jamais passer par des serveurs externes, empêchant ainsi toute fuite du code source de votre entreprise.

---

## 🚀 La solution : "Le prompt de transparence AionUi"

Lancer simplement l'interface utilisateur ne suffit pas. Vous avez besoin d'un prompt dédié pour guider l'agent afin qu'il travaille de manière lisible, structurée et sécurisée au sein d'AionUi.

### 🥉 Version Basique (Basic Version)

À utiliser lorsque vous souhaitez confier rapidement une tâche ciblée à l'agent et surveiller les résultats via l'interface utilisateur.

> **Rôle :** Tu es un `[développeur senior]`.
> **Tâche :** Résous ce `[fonctionnalité/bug spécifique]` dans le projet actuel. Avant de commencer, tu dois impérativement m'expliquer quels fichiers tu prévois de modifier, et afficher les changements étape par étape afin qu'ils soient faciles à vérifier visuellement dans AionUi.


### 🥇 Version Pro (Pro Version)

À utiliser pour des refactorisations massives ou des changements architecturaux complexes, lorsque vous souhaitez accorder une grande autonomie à l'agent sans pour autant perdre le contrôle sur la base de code.

> **Rôle (Role) :** Tu es un expert en architecture `[Web Frontend/Backend]` avec 10 ans d'expérience et tu agis en tant que mon partenaire de Pair Programming.
> 
> **Contexte (Context) :**
> 
> - Contexte : Nous migrons actuellement une base de code legacy vers une stack moderne, et je surveille tes actions en direct via AionUi pour garantir la transparence du travail.
> - Objectif : Refactoriser la structure du répertoire `[src/components]` pour maximiser la réutilisabilité et minimiser le couplage.
> 
> **Tâche (Task) :**
> 
> 1. **Planification du travail :** Avant toute modification de code, présente un résumé sous forme de puces (bullet points) Markdown détaillant la liste des fichiers analysés et ton plan d'intervention.
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

L'association de ce prompt avec AionUi constitue un flux de travail (workflow) que je recommande vivement, particulièrement aux développeurs juniors ou à ceux qui découvrent les outils IA. Si vous vous contentez de dire à un agent « Fais-le pour moi » sans poser de garde-fous, votre code risque de se transformer rapidement en plat de spaghettis. 

Cependant, en **obligeant l'agent à planifier, visualiser et rapporter ses étapes de travail** grâce à ce prompt, et en combinant cela à la fonction de Diff en temps réel d'AionUi, vous obtenez une expérience de Pair Programming exceptionnelle. Vous aurez véritablement la sensation d'avoir un Tech Lead bienveillant assis à côté de vous, qui partage son écran et corrige votre code avec pédagogie.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : AionUi est-il un outil payant ?**
  - R : Non, c'est un projet 100 % open-source et totalement gratuit. Vous pouvez l'intégrer sans aucune restriction, y compris dans le cadre de projets d'entreprise internes.

- **Q : La politique de sécurité de mon entreprise interdit formellement la fuite de code vers l'extérieur. Puis-je tout de même l'utiliser ?**
  - R : Oui, absolument. L'interface AionUi a été conçue sur le principe du « Local-First » : elle n'envoie aucune ligne de votre code vers des serveurs externes. *(Attention toutefois : vous devez vérifier indépendamment la politique de confidentialité du modèle IA sous-jacent que vous utilisez, comme l'API Gemini ou Claude. Si vous connectez AionUi à un LLM local, vous obtiendrez un environnement 100 % hors ligne et totalement isolé).*

- **Q : Est-il possible de connecter d'autres outils que Gemini CLI ?**
  - R : Oui. L'outil étant open-source, son architecture extensible permet d'ajouter facilement des plugins. La communauté contribue activement à l'ajout continu de nouveaux workflows compatibles avec divers agents du marché.

---

## 🧬 Anatomie du prompt (Why it works?)

1. **Optimisation de la visualisation (Tasks 1 & 3) :** Pour empêcher l'IA d'éditer des fichiers de manière chaotique et permettre à l'utilisateur de suivre chaque modification confortablement sur l'interface d'AionUi, nous avons imposé la « planification préalable » et les « rapports par étapes ».
2. **Mécanismes de sécurité (Constraints & Warning) :** Nous avons neutralisé à la racine la plus grande frayeur liée à la « boîte noire » : les modifications non autorisées de la logique et l'abus de bibliothèques tierces. Ce prompt dote l'IA d'un système de freinage d'urgence lui permettant de s'arrêter d'elle-même en cas de doute.

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

Les agents IA sont des codeurs exceptionnels, mais il incombe toujours à l'humain de les diriger et de les superviser de manière responsable. 
En combinant un formidable outil de visualisation tel qu'AionUi avec le « prompt de transparence » abordé aujourd'hui, vous construirez un environnement de collaboration IA sûr, prévisible et sous votre contrôle total.

Désormais, déléguez le travail à votre agent l'esprit tranquille, et terminez votre journée à l'heure ! 🍷
