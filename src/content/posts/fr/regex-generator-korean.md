---
title: "Regex de Type Alien, Commandez en Langage Naturel"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "Ne luttez pas avec des expressions régulières complexes comme si vous déchiffriez des codes. Dites simplement le motif que vous voulez, et l'IA créera la regex."
tags: ["Regex", "Expression Régulière", "Traitement de Chaînes", "Validation"]
---

# 📝 Regex de Type Alien, Commandez en Langage Naturel

**🎯 Recommandé pour :** Tout le monde
**⏱️ Temps requis :** 5 minutes
**🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"C'était quoi encore la regex de validation d'email... Ah, et comment je mets des tirets dans les numéros de téléphone ?"_

Expression Régulière (Regex), nouvelle à chaque utilisation et ressemblant à une langue extraterrestre à chaque fois que vous la voyez, n'est-ce pas ?
Taper `^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`... vous-même est une torture.
Maintenant, dites simplement "Trouve le format d'email" en langage naturel.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Demandez une correspondance de motifs complexes en langage naturel
2. Fournir une explication détaillée pour la regex générée
3. Vérifier avec des cas de test

---

## 🚀 La Solution : « Interprète Regex »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

**Rôle :** Tu es un Maître Regex.
**Demande :** Ne lutte pas avec des expressions régulières complexes comme si tu déchiffrais des codes. Dis simplement le motif que tu veux, et l'IA créera la regex.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un Maître Regex.
>
> **Contexte :** Je dois extraire ou valider des motifs spécifiques à partir de données textuelles. Mais la syntaxe regex est trop difficile.
>
> **Tâche :**
>
> 1. Écris une **Expression Régulière (Regex)** qui correspond parfaitement au motif que je décris.
> 2. Explique comment la regex écrite fonctionne en la décomposant en parties.
> 3. Montre 3 exemples qui correspondent (Match) et 3 exemples qui ne correspondent pas (Non-match) à cette regex respectivement.
>
> **Motif que je veux trouver :**
> `[Décrivez le motif que vous voulez en langage naturel ici. ex. : "Numéro de téléphone mobile au format 010-1234-5678"]`
>
> **Langage/Environnement :** `[ex. : JavaScript / Python / Java]`
>
> **Contraintes :**
>
> - Assure-toi que le traitement d'échappement des caractères spéciaux est effectué correctement.
> - Crée une expression aussi concise mais précise que possible.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

**Motif :** "Le mot de passe doit comporter au moins 8 caractères, contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial."

### ✅ Après (Résultat)

**Regex (JavaScript) :**

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

**Explication :**

- `^`: Début de la chaîne
- `(?=.*[a-z])`: Contient au moins une lettre minuscule
- `(?=.*[A-Z])`: Contient au moins une lettre majuscule
- `(?=.*\d)`: Contient au moins un chiffre
- `{8,}`: 8 caractères ou plus

**Test :**

- ✅ `Pass1234!` (Match)
- ❌ `pass1234` (Pas de car. spécial/majuscule)

---

## 🎯 Conclusion

Regex est puissant mais trop inamical pour être lu par les humains.
Maintenant, laissez ce déchiffrement de code complexe à l'IA, et profitez simplement de la magie du traitement de texte ! 🍷
