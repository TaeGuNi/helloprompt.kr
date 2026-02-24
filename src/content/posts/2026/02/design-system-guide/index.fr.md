---
layout: /src/layouts/Layout.astro
title: "디자인 시스템 구축: 디자이너와 개발자가 안 싸우는 법"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "디자인/UX"
description: "Comment synchroniser les variables Figma et CSS. Guide de création d'un Design System basé sur les tokens."
tags: ["디자인시스템", "Figma", "CSS", "UI-UX", "협업"]
---

# 🎨 Créer un Design System : Comment éviter les conflits entre designers et développeurs

- **🎯 Recommandé pour :** Les développeurs frustrés par des retours tels que "la couleur du bouton ne correspond pas à la maquette", et les designers désespérés pensant que "les développeurs ont ruiné mon design".
- **⏱️ Temps requis :** 10 minutes → Réduit à 1 minute (Conception initiale des tokens et conversion automatique du code)
- **🤖 Modèles recommandés :** ChatGPT-4o, Claude 3.5 Sonnet (Architecture et génération de code)

- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"La couleur primaire n'était pas `#0055FF` ? Pourquoi celle-ci est-elle `#0050FF` dans le code ?"_

Les valeurs de couleurs et de marges codées en dur, éparpillées partout dans votre code base, sont les principales causes d'un cauchemar de maintenance. Adoptez les **Design Tokens (Tokens de Design)**. Il s'agit de l'engagement le plus fiable pour définir et partager tous les éléments visuels (couleurs, polices, marges, ombres) sous forme de variables sémantiques. Une fois qu'un système basé sur des tokens est mis en place, vous découvrirez la magie d'une synchronisation automatique du code des développeurs dès qu'un designer modifie une valeur dans Figma.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **La tokenisation du design :** Au lieu d'utiliser des valeurs hexadécimales absolues comme `#0055FF`, utilisez un langage commun et porteur de sens tel que `primary-500`.
2. **Application des variables Figma :** Exploitez les fonctionnalités de variables et de styles de Figma pour structurer les propriétés visuelles en tokens organisés.
3. **Synchronisation du code :** Transformez automatiquement les données de tokens extraites en fichier `tailwind.config.ts` ou en variables CSS globales pour les appliquer instantanément à votre projet.

---

## 🚀 La Solution : "Design Token Generator Prompt"

### 🥉 Version Basique (Basic Version)

Utilisez ce prompt lorsque vous devez concevoir une palette de couleurs initiale et que vous ne savez pas comment nommer vos variables.

> **Tâche (Task) :**
> Je suis en train de concevoir la palette de couleurs du Design System pour un nouveau produit.
> Je souhaite diviser les couleurs `[Primary (Bleu)]`, `[Secondary (Gris)]` et `[Error (Rouge)]` en 9 nuances allant de 100 à 900.
> Recommande-moi un tableau contenant les codes hexadécimaux pour chaque nuance, associés à des noms intuitifs et sémantiques (par exemple, `text-primary`, `bg-surface-default`) afin que je puisse les appliquer directement dans mon code.

<br>

### 🥇 Version Pro (Expert Version)

À utiliser pour transformer parfaitement les données JSON de tokens extraites de Figma en code prêt à l'emploi pour votre environnement frontend.

> **Rôle (Role) :** Tu es un ingénieur Design Ops Senior avec 10 ans d'expérience et un architecte frontend.
>
> **Contexte (Context) :**
>
> - Contexte : Un designer a défini des design tokens dans Figma et les a exportés sous forme de données JSON.
> - Objectif : Convertir parfaitement ces données JSON en code immédiatement applicable dans un projet frontend.
>
> **Données d'entrée (Input Data) :**
>
> `[Collez ici les données JSON des tokens extraites de Figma]`
>
> **Tâche (Task) :**
>
> 1. Analyse les données d'entrée et convertis-les au format d'un fichier de configuration moderne **Tailwind CSS (`tailwind.config.ts`)**.
> 2. Rédige également le code des **Variables CSS (`:root { --color-blue-500: ... }`)** pour ne pas dépendre exclusivement d'un framework CSS spécifique.
> 3. Ajoute une stratégie et des exemples de code pour la prise en charge du Dark Mode (via `@media (prefers-color-scheme: dark)` ou la classe `.dark`) afin que le thème s'adapte automatiquement.
>
> **Contraintes (Constraints) :**
>
> - Fournis le résultat uniquement sous forme de blocs de code Markdown (`ts`, `css`).
> - Maintiens strictement la casse kebab-case (kebab-case) pour tous les noms de variables.
>
> **Avertissement (Warning) :**
>
> - N'invente aucune valeur de couleur ou nuance qui ne figure pas dans la structure JSON fournie. (Prévention des hallucinations)

---

## 💡 L'Avis de l'Auteur (Insight)

Créer un Design System ne consiste pas à établir un plan magistral et à tout achever en une seule fois. Si vous essayez de tokeniser parfaitement tous les composants et la typographie dès le premier jour, il y a de fortes chances que vous vous épuisiez et abandonniez.
Je recommande fortement une stratégie d'**Adoption Incrémentale (Incremental Adoption)** : commencez par remplacer par des variables **"les éléments les plus fréquemment et répétitivement utilisés (ex. : la couleur de fond du bouton principal, la couleur du texte du corps)"**.
Ce simple petit token sera le premier pas pour réduire drastiquement les coûts de communication inutiles entre designers et développeurs.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Quel plugin dois-je utiliser pour extraire les tokens depuis Figma ?**
  - R : Dans la pratique, **'Tokens Studio for Figma'** est devenu le standard de facto. Il permet d'exporter du JSON et de se synchroniser directement avec un dépôt GitHub. Récemment, la fonctionnalité native des Variables de Figma est devenue si puissante que les intégrations via l'API REST sont également très populaires.

- **Q : Une petite startup de 2 à 3 personnes a-t-elle vraiment besoin d'un Design System ?**
  - R : Si vous êtes plus d'une personne ou si la maintenance du projet dépasse 3 mois, l'adoption est indispensable. La dette technique du "on rangera plus tard quand on aura le temps" finit toujours par se transformer en bombe à retardement, ralentissant considérablement la vélocité du projet. N'oubliez pas que votre "Moi du futur" (Future Self) est aussi une autre personne.

---

## 🧬 Anatomie du Prompt (Why it works?)

1. **Imposition du nommage sémantique :** Il encourage un nommage basé sur le sens, comme "couleur de fond du bouton principal (`bg-primary-default`)", plutôt que "bleu clair". Ainsi, même si la couleur de la marque passe du bleu au violet, il suffit de modifier un seul code hexadécimal pour que tout le projet soit mis à jour instantanément.
2. **Délégation des conversions de formats répétitives :** Transcrire manuellement un format JSON en un objet de configuration Tailwind ou en syntaxe de variables CSS est une véritable corvée pour un humain. L'IA excelle dans ces conversions structurelles répétitives avec une précision et une rapidité redoutables, éliminant à la source toute erreur humaine (Human Error).

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Input)

À chaque changement de design, il faut chercher et remplacer les codes hexadécimaux un par un dans plus de 100 fichiers. 😱

```css
.button-primary {
  background-color: #3b82f6;
}

.text-highlight {
  color: #3b82f6;
}
```

### ✅ Après (Output)

La modification d'une seule valeur de variable met à jour parfaitement l'UI de l'ensemble du produit. 🚀

```css
:root {
  --primary-500: #3b82f6;
  --bg-primary-default: var(--primary-500);
}

.button-primary {
  background-color: var(--bg-primary-default);
}
```

---

## 🎯 Conclusion

L'interprète entre le design et le développement ne doit pas être un "humain" émotif, mais un **"système"** doté de règles strictes.
Arrêtez de vous disputer sur des pixels et des codes de couleurs. Parlez désormais un langage commun : celui des tokens.

**"Cher développeur, ceci n'est pas un `gray-200` mais un `surface-subtle`. Merci de vérifier les tokens."** 🍷
