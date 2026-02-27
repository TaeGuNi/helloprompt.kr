---
layout: /src/layouts/Layout.astro
title: " \"Refactoriser le Code Sale en Code Propre en 1 Seconde\""
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: " \"Un prompt IA qui transforme instantanément votre code spaghetti complexe en un code propre, lisible et facile à maintenir.\""
tags: ["Refactorisation", "Clean Code", "Maintenance", "Productivité Dév"]
---

# 📝 Refactoriser le Code Sale en Code Propre en 1 Seconde

- **🎯 Recommandé pour :** Développeurs juniors, Ingénieurs logiciels, Leaders techniques
- **⏱️ Temps requis :** 5 minutes → 1 seconde
- **🤖 Modèle recommandé :** Claude 3.5 Sonnet, GPT-4o, Gemini 2.5 Pro

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Je n'arrive même plus à comprendre le code que j'ai écrit hier... Comment démêler ce plat de spaghettis sans tout casser ?"_

Nous avons tous connu cette situation : écrire des noms de variables expéditifs sous la pression des délais, ou laisser grandir une fonction jusqu'à ce qu'elle dépasse les 100 lignes.
Et si vous aviez un pair-programmeur virtuel capable de refactoriser ce code — celui que vous n'osez même pas montrer à vos collègues — pour qu'il respecte strictement les **standards du « Clean Code »** ?
Avec ce simple prompt, vous pouvez améliorer instantanément la lisibilité, les performances et la maintenabilité de votre base de code, sans effort.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. **Renommage sémantique** : Clarifie instantanément les noms de variables et de fonctions pour révéler leur véritable intention.
2. **Découpage modulaire** : Élimine le code dupliqué et sépare les responsabilités selon le principe SRP (Single Responsibility Principle).
3. **Modernisation de la syntaxe** : Applique les standards de codage les plus récents tout en optimisant les performances globales.

---

## 🚀 La Solution : « L'Assistant Clean Code »

### 🥉 Version De Base (Basic)

Utilisez ce prompt lorsque vous avez besoin d'un nettoyage rapide sans instructions complexes.

> **Rôle :** Tu es un Ingénieur Logiciel Senior avec 20 ans d'expérience, expert incontesté en 'Clean Code'.
> **Demande :** Transforme ce code spaghetti complexe en un code propre, modulaire, facile à lire et à maintenir. Voici le code : `[Insérer le code ici]`


### 🥇 Version Pro (Expert)

Utilisez ce prompt pour une refactorisation en profondeur nécessitant une qualité de production et un respect strict des règles d'architecture.

> **Rôle (Role) :** Tu es un Ingénieur Logiciel Senior avec plus de 20 ans d'expérience, expert en architecture logicielle et fervent défenseur des principes du 'Clean Code'.
>
> **Contexte (Context) :**
>
> - Contexte : Le code que j'ai fourni fonctionne techniquement, mais sa lisibilité est désastreuse et sa maintenance est un cauchemar. Les noms de variables sont cryptiques et la logique métier est truffée de redondances.
> - Objectif : Obtenir un code robuste, élégant et prêt pour la production.
>
> **Demande (Task) :**
> Refactorise le code fourni ci-dessous en respectant scrupuleusement les critères suivants :
>
> 1. **Nommage (Naming) :** Renomme les variables et les fonctions de manière sémantique pour que leur intention soit évidente (ex: `d` -> `userData`).
> 2. **Séparation des responsabilités (SRP) :** Décompose les fonctions monolithiques en fonctions plus petites et ciblées ne réalisant qu'une seule tâche.
> 3. **Élimination des doublons (DRY) :** Extrais toute logique répétitive dans des fonctions utilitaires ou des modules distincts.
> 4. **Commentaires stratégiques :** N'ajoute des commentaires que pour expliquer le « Pourquoi » d'une décision technique complexe, jamais le « Comment » (le code doit s'expliquer de lui-même).
> 5. **Syntaxe moderne :** Refactorise en utilisant les fonctionnalités et la syntaxe les plus modernes du langage cible.
>
> **Code à refactoriser :**
> `[Collez votre code sale ici]`
>
> **Contraintes (Constraints) :**
>
> - Ne modifie **jamais** la logique métier fondamentale ni le comportement d'origine du code.
> - Présente d'abord un résumé sous forme de liste à puces des modifications majeures apportées.
> - Fournis le code refactorisé dans un bloc de code propre, suivi d'une brève explication des choix architecturaux.

---

## 💡 L'Avis de l'Expert (Insight)

La véritable force de ce prompt ne réside pas seulement dans le formatage visuel du code, mais dans sa capacité à imposer le principe de **responsabilité unique (SRP)** à l'IA.
Souvent, lorsque les développeurs demandent à ChatGPT de "nettoyer le code", l'IA se contente d'ajouter des commentaires ou de raccourcir quelques lignes. En exigeant spécifiquement le renommage sémantique et la modularité, vous transformez l'IA d'un simple correcteur orthographique en un véritable **Pair Programmer Senior**. C'est un outil redoutable pour la revue de code (Code Review) ou pour reprendre un projet « Legacy » hérité d'un autre développeur. Je l'utilise personnellement avant chaque Pull Request complexe pour m'assurer que mon équipe n'aura aucun mal à lire ma logique métier.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Est-ce que l'IA risque de casser la logique de mon application ?**
  - R : C'est une possibilité avec des modèles moins performants. C'est pourquoi la contrainte _"Ne modifie jamais la logique métier fondamentale"_ est cruciale. Je vous recommande d'utiliser Claude 3.5 Sonnet ou GPT-4o pour ce type de tâche, car ils excellent dans le maintien du contexte logique. Et bien sûr, lancez toujours vos tests unitaires après une refactorisation !

- **Q : Dois-je préciser le langage de programmation dans le prompt ?**
  - R : Les modèles récents détectent généralement le langage automatiquement. Cependant, si vous utilisez un framework spécifique (comme React, Vue ou NestJS), il est très utile d'ajouter une ligne dans le contexte : _"Ce code utilise React 18 et TypeScript"_. Cela permettra à l'IA d'appliquer les conventions propres à cet écosystème.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

1. **Définition stricte du Rôle** : Imposer le rôle d'un "Ingénieur Senior" force l'IA à adopter un standard d'exigence élevé, évitant ainsi les solutions de facilité.
2. **Critères précis (DRY, SRP)** : En utilisant le jargon technique exact (SRP, DRY), le modèle active ses connaissances profondes en ingénierie logicielle plutôt que de faire une simple reformulation de surface.
3. **Barrière de sécurité (Contraintes)** : L'interdiction formelle de modifier le comportement du code réduit drastiquement les risques d'hallucinations et de régressions invisibles.

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Le Code Sale)

```javascript
function calc(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i].price > 100) {
      t += d[i].price * 0.9;
    } else {
      t += d[i].price;
    }
  }
  return t;
}
```

### ✅ Après (Le Code Propre)

```javascript
/**
 * Calcule le montant total du panier.
 * Applique une remise de 10% pour les articles coûtant plus de 100 €.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((totalPrice, item) => {
    const finalPrice =
      item.price > DISCOUNT_THRESHOLD ? item.price * DISCOUNT_RATE : item.price;

    return totalPrice + finalPrice;
  }, 0);
}
```

_Changements appliqués : `calc` → `calculateTotalPrice`, `d` → `items`, extraction des nombres magiques en constantes claires (`DISCOUNT_THRESHOLD`), et remplacement de la boucle `for` par une méthode `reduce` plus moderne et fonctionnelle._

---

## 🎯 Conclusion

Ne remettez plus la qualité de votre code à plus tard en vous disant : « Je nettoierai ça quand j'aurai le temps ».
Transformez un code illisible en une architecture propre et élégante en quelques secondes grâce à ce prompt. Votre futur vous (et vos collègues) vous remerciera !

Maintenant, vous pouvez fermer votre IDE l'esprit tranquille. 🍷
