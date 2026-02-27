---
layout: /src/layouts/Layout.astro
title: " \"WCAG 2.2 웹 접근성 감사(Audit) 봇\""
author: "Zzabbis"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "프론트엔드"
description: " \"Mon code est-il accessible à tous ? Ce prompt vérifie si votre code respecte les normes d'accessibilité (WCAG).\""
tags: ["Accessibility", "HTML", "WCAG"]
---

# ♿️ Mon code est-il accessible à tous ? Bot d'audit automatique d'accessibilité web (WCAG)

- **🎯 Recommandé pour :** Développeurs sur des projets publics/grandes entreprises, juniors souhaitant peaufiner leur portfolio, développeurs frontend seniors.
- **⏱️ Temps requis :** 2 heures de vérification manuelle → 1 minute d'audit automatique par l'IA.
- **🤖 Modèles recommandés :** Claude 3.5 Sonnet (analyse de code exceptionnelle), GPT-4o.

- ⭐ **Difficulté :** ⭐☆☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐☆

> _"Vous avez peut-être intégré de superbes animations, mais si quelqu'un ne peut même pas cliquer sur le bouton de connexion, votre code est un échec."_

L'accessibilité web (Web Accessibility ou A11y) n'est plus une simple "attention particulière", c'est devenu la norme et souvent une obligation légale. Cependant, mémoriser et appliquer à chaque ligne de code les directives complexes et exhaustives du WCAG (Web Content Accessibility Guidelines) 2.2 est presque impossible. Ce prompt analyse vos balises et vos composants, identifie en une minute les défauts d'accessibilité critiques pour les lecteurs d'écran ou la navigation au clavier, et refactorise le tout avec un code sémantique parfait.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **Conversion en balisage sémantique :** Transforme l'utilisation abusive des `<div>` en balises HTML5 sémantiques et porteuses de sens.
2. **Conformité totale au WCAG 2.2 :** Vérifie rigoureusement les critères d'accessibilité complexes tels que le contraste des couleurs, la gestion du focus et la mauvaise utilisation de WAI-ARIA.
3. **Guide de test pratique :** Fournit des méthodes de test concrètes que vous pouvez effectuer vous-même à l'aide de lecteurs d'écran (VoiceOver, NVDA) et du clavier (Tab).

---

## 🚀 La Solution : "Auditeur A11y (Accessibilité)"

### 🥉 Version Basique (Basic Version)

Utilisez-la pour vérifier rapidement l'accessibilité d'un bouton ou d'un formulaire spécifique.

> **Rôle :** Tu es un expert en accessibilité web (A11y).
> **Tâche :** Analyse le code HTML ci-dessous pour identifier tout problème d'accessibilité lors de la navigation au clavier ou avec un lecteur d'écran, et corrige-le pour le rendre parfaitement sémantique.
> **Code :**
>
>
> [Collez votre code ici]
>
### 🥇 Version Pro (Pro Version)

Idéal pour auditer des composants d'interface utilisateur complexes nécessitant des interactions avancées (Modales, Menus déroulants, Onglets).

> **Rôle (Role) :** Tu es un auditeur strict certifié WCAG 2.2 et un développeur frontend senior avec 10 ans d'expérience.
>
> **Contexte (Context) :**
>
> - Cible : Je viens de développer le composant `[Nom du composant, ex : Modale du formulaire d'inscription]`.
> - Objectif : Ce composant doit être totalement accessible et utilisable sans aucun obstacle pour les utilisateurs naviguant uniquement au clavier et pour les personnes malvoyantes utilisant un lecteur d'écran.
>
> **Tâche (Task) :**
>
> 1. **Diagnostic WCAG 2.2 :** Examine minutieusement le code fourni pour déceler toute violation des critères WCAG 2.2 (Niveau AA minimum) : contraste, gestion du focus, étiquettes de formulaires, textes alternatifs, etc.
> 2. **Refactoring sémantique :** Élimine l'utilisation excessive et injustifiée de `<div>` ou `<span>`, et réécris le code en utilisant les balises sémantiques HTML5 appropriées.
> 3. **Optimisation WAI-ARIA :** Respecte la première règle d'ARIA ("La meilleure utilisation d'ARIA est de ne pas utiliser ARIA"). N'ajoute des attributs `aria-*` et `role` que lorsque c'est absolument nécessaire et impossible à résoudre avec du HTML natif.
> 4. **Piège du Focus (Focus Trap) :** S'il s'agit d'une modale ou d'une popup, conçois un flux logique pour que le focus du clavier reste piégé à l'intérieur du composant (Focus Trap) sans s'échapper.
> 5. **Guide de validation :** Rédige un scénario de test précis en 3 lignes pour que je puisse tester ce code moi-même avec mon clavier (Tab/Shift+Tab, Espace/Entrée) et un lecteur d'écran.
>
> **Code (Code) :**
>
>
> [Collez le code de votre composant ici]
>
>
> **Contraintes (Constraints) :**
>
> - Assure-toi d'identifier et d'intégrer les éléments qui doivent être masqués visuellement mais lus par les lecteurs d'écran (ex. classes `sr-only`).

---

## 💡 L'Avis de l'Expert (Insight)

Les efforts pour améliorer l'accessibilité web se transforment souvent en une surutilisation d'attributs WAI-ARIA. Or, l'ajout incorrect de `aria-label` ou de `role` crée une confusion majeure pour les utilisateurs de lecteurs d'écran.
La force de ce prompt réside dans l'obligation faite à l'IA de respecter la **"Première règle d'ARIA (utiliser les balises HTML natives autant que possible)"**.
Dans un contexte professionnel, lorsque vous développez une boîte de sélection personnalisée complexe ou une modale, passer ce prompt permet de détecter miraculeusement les pertes de focus du clavier ou les étiquettes de formulaire manquantes. Utilisé avec le modèle Claude 3.5 Sonnet, c'est comme avoir un expert pointilleux en accessibilité assis à côté de vous pour faire une revue de code rigoureuse.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : L'audit d'accessibilité fonctionne-t-il également avec des images de maquettes UI ?**
  - R : Absolument. Avec GPT-4o ou Claude 3.5 Sonnet, vous pouvez joindre la capture d'écran du composant et ajouter la requête : "Vérifie si le contraste des couleurs (Color Contrast) respecte le niveau AA du WCAG". L'IA détectera même les défauts de conception invisibles dans le code.

- **Q : J'utilise Tailwind CSS, le prompt corrigera-t-il aussi les noms de classes ?**
  - R : Oui. Il suffit de préciser dans le contexte (Context) : "Utilise Tailwind CSS pour appliquer les classes utilitaires dédiées aux lecteurs d'écran (`sr-only`)". L'IA générera un code parfaitement adapté à votre stack technique.

---

## 🧬 Décryptage du Prompt (Pourquoi ça marche ?)

1.  **Critères d'évaluation stricts :** Au lieu de demander vaguement "Améliore l'accessibilité", l'intégration de la norme internationale "WCAG 2.2 Niveau AA" dans le persona contrôle totalement les hallucinations de l'IA.
2.  **Application de la 1ère Règle d'ARIA :** Empêche l'IA d'abuser des attributs ARIA et favorise un balisage sémantique fondamental tirant le meilleur parti des spécifications HTML de base.
3.  **Guide de test actionnable :** L'IA ne se contente pas de fournir le code correct ; elle exige des scénarios de test que le développeur peut expérimenter directement au clavier, maximisant ainsi l'utilité pratique.

---

## 📊 Preuve à l'appui : Avant & Après (Before & After)

### ❌ Avant (Code d'entrée : Un bouton désastreux fait de `div`)

```html
<div class="submit-btn" onclick="sendData()">
  <img src="send-icon.png" />
  <span>Envoyer</span>
</div>
```

### ✅ Après (Résultat : Parfaitement adapté au clavier et lecteurs d'écran)

```html


<button type="button" class="submit-btn" onClick="sendData()">
  <img src="send-icon.png" alt="" aria-hidden="true" />
  <span>Envoyer</span>
</button>
```

---

## 🎯 Conclusion

Pour certains, l'accessibilité (A11y) est une simple "fonctionnalité de confort", mais pour d'autres, c'est un mur infranchissable qui détermine s'ils peuvent ou non utiliser votre service. Un excellent développeur ne se contente pas d'écrire un code qui fonctionne ; il écrit un code qui n'exclut aucun utilisateur.

Désormais, écrivez un code accessible à tous et terminez votre journée avec fierté ! 🍷
