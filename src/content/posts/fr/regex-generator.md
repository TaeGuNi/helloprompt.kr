---
title: "Cauchemar Regex, maintenant confiez-le à l'IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Développement"
description: "N'écrivez pas vous-même des expressions régulières cryptiques. Un prompt qui génère du code simplement en expliquant le motif que vous voulez."
tags: ["Regex", "Expression Régulière", "Productivité Dév"]
---

# 📝 Cauchemar Regex, maintenant confiez-le à l'IA

**🎯 Recommandé pour :** Tout le monde
**⏱️ Temps requis :** 5 minutes
**🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Êtes-vous en train de déchiffrer `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$` juste pour vérifier la validité d'un e-mail ?"_

Les expressions régulières (Regex) sont essentielles pour les développeurs, mais c'est l'un des domaines que nous détestons le plus traiter. Vous devez rechercher la syntaxe à chaque fois que vous l'écrivez, et ce que les autres ont écrit ressemble à une langue extraterrestre. Maintenant, ne souffrez plus, dites simplement le 'motif' à l'IA.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Ne luttez pas pour mémoriser ou rechercher une syntaxe regex complexe.
2. Dites simplement le motif que vous voulez (numéro de téléphone, e-mail, etc.), et l'IA écrira la regex et l'interprétera même.
3. Demandez des codes de test ensemble pour vérifier immédiatement la précision de la regex.

---

## 🚀 La Solution : « Générateur de Regex »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

**Rôle :** Tu es un `[Développeur Senior]`.
**Demande :** Crée un prompt qui génère du code pour des expressions régulières cryptiques simplement en expliquant le motif.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un `[Développeur Senior]`.
>
> **Situation :** J'ai besoin d'une expression régulière à utiliser en `[Python/JavaScript]`.
>
> **Tâche :**
>
> 1. Crée une expression régulière qui satisfait les exigences ci-dessous.
> 2. Explique en détail ce que signifie chaque symbole (Interprétation).
> 3. Montre un exemple de code (cas correspondants/non correspondants) pour tester cette regex.
>
> **Exigences :**
>
> - Je veux trouver le format de numéro de téléphone américain.
> - Exemple : 123-456-7890 ou (123) 456-7890 ou 1234567890
> - L'indicatif régional est facultatif.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

```text
Écris-moi une regex pour les numéros de téléphone américains. Tirets, parenthèses ou rien.
```

<br>

### ✅ Après (Résultat)

```javascript
// Exemple JavaScript

const regex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

// Test
const phone1 = "123-456-7890"; // Correspondance O
const phone2 = "(123) 456-7890"; // Correspondance O
const phone3 = "1234567890"; // Correspondance O

console.log(regex.test(phone1)); // true
```

### 🔍 Explication

- `^`: Début de la chaîne
- `(\(\d{3}\)|\d{3})`: 3 chiffres entre parenthèses OU juste 3 chiffres
- `[- ]?`: Tiret ou espace facultatif
- `\d{3}`: 3 chiffres
- `\d{4}`: 4 chiffres
- `$`: Fin de la chaîne

---

## 🎯 Conclusion

N'ouvrez pas le livre de grammaire Regex. Vous avez juste besoin de savoir clairement quel 'motif' vous voulez.
