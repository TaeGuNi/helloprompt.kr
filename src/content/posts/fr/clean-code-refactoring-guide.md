---
title: "Refactoriser le Code Sale en Code Propre en 1 Seconde"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "Un prompt qui transforme un code spaghetti complexe en un code propre facile à lire et à maintenir."
tags: ["Refactorisation", "Clean Code", "Maintenance", "Productivité Dév"]
---

# 📝 Refactoriser le Code Sale en Code Propre en 1 Seconde

- **🎯 Recommandé pour :** Tout le monde
- **⏱️ Temps requis :** 5 minutes
- **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Je ne reconnais même pas le code que j'ai écrit... Comment démêler ce spaghetti ?"_

Nous avons tous eu l'expérience d'écrire des noms de variables désordonnés parce que nous étions pressés, ou d'avoir une seule fonction dépassant 100 lignes.
Et s'il y avait un secrétaire qui refactorisait le code que vous avez honte de montrer à vos collègues selon les **normes 'Clean Code'** ?
Avec ce seul prompt, vous pouvez capturer la lisibilité, la performance et la maintenabilité en une seule fois.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Changer intuitivement les noms de variables/fonctions
2. Supprimer le code dupliqué et séparer les fonctions
3. Appliquer la syntaxe récente et optimiser les performances

---

## 🚀 La Solution : « Refactoriseur Clean Code »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

**Rôle :** Tu es un Ingénieur Logiciel Senior avec 20 ans d'expérience et un expert en 'Clean Code'.
**Demande :** Transforme un code spaghetti complexe en un code propre facile à lire et à maintenir.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un Ingénieur Logiciel Senior avec 20 ans d'expérience et un expert en 'Clean Code'.
>
> **Contexte :** Le code que j'ai écrit fonctionne, mais il a une mauvaise lisibilité et est difficile à maintenir. Les noms de variables ne sont pas clairs et il y a beaucoup de logique dupliquée.
>
> **Tâche :**
> Refactorise le code fourni ci-dessous selon les critères suivants :
>
> 1. **Nommage :** Change les noms de variables et de fonctions pour que leur intention soit clairement connue.
> 2. **Séparation des Fonctions :** Décompose les fonctions en plus petits morceaux pour qu'une fonction ne fasse qu'une seule chose (SRP).
> 3. **Supprimer les Doublons :** Extrais la logique répétée dans des fonctions ou des utilitaires séparés.
> 4. **Commentaires :** Ajoute des commentaires uniquement aux parties où une explication est nécessaire sur 'Pourquoi' le code a été écrit de cette façon.
> 5. **Syntaxe Moderne :** Applique la dernière syntaxe moderne du langage.
>
> **Code :**

> [Collez le code à refactoriser ici]

> **Contraintes :**
>
> - Ne change jamais la logique métier (comportement) du code existant.
> - Résume les principaux changements avant et après la refactorisation dans une liste.
> - Affiche la sortie divisée en un bloc de code et un bloc d'explication.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

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

### ✅ Après (Résultat)

```javascript
/**
 * Calcule le montant total du panier.
 * Applique une réduction de 10% pour les articles de plus de 100 wons.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((total, item) => {
    const finalPrice =
      item.price > DISCOUNT_THRESHOLD ? item.price * DISCOUNT_RATE : item.price;
    return total + finalPrice;
  }, 0);
}
```

_Changements : `calc` -> `calculateTotalPrice`, `d` -> `items`, nombres magiques en constantes, utilisation de `reduce`._

---

## 🎯 Conclusion

Ne procrastinez plus en disant "Je le réparerai plus tard".
Transformez le code malodorant en code parfumé en 3 secondes avec ce prompt et rentrez chez vous ! 🍷
