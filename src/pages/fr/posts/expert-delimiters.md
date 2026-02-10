---
layout: /src/layouts/Layout.astro
title: "L'IA ne vous comprend pas ? Utilisez des « Délimiteurs »"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "L'IA est-elle confuse lorsqu'elle résume de longs textes ou corrige du code ? Utilisez la technique des Délimiteurs pour séparer les sections et doubler votre précision."
tags: ["Délimiteurs", "Lisibilité", "Balises XML"]
---

# 🚧 L'IA ne vous comprend pas ? Utilisez des « Délimiteurs »

**🎯 Recommandé pour :** Tout le monde
**⏱️ Temps requis :** 5 minutes
**🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

Lorsque vous lancez un long texte à une IA et dites « Résume ceci », l'IA est parfois confuse quant à savoir où se termine le texte à résumer et où commencent les instructions.

Tout comme les humains divisent le texte en **paragraphes** lors de la lecture, vous devez tracer une **frontière (Délimiteur)** claire pour l'IA, en disant **« D'ici à ici, c'est le contenu. »**

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. L'IA peut avoir du mal à distinguer les commandes des données dans les longs textes.
2. Utilisez des balises XML (`< >`) ou des symboles spéciaux (`"""`) pour définir des limites claires.
3. L'habitude de diviser les sections réduit les erreurs de reconnaissance de l'IA et augmente la précision de la tâche.

---

## 🚀 La Solution : « Utiliser des balises XML ou des symboles spéciaux »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

**Rôle :** Tu es un **Éditeur** compétent.
**Demande :** L'IA est-elle confuse lorsqu'elle résume de longs textes ou corrige du code ? Explique comment utiliser la technique des Délimiteurs pour séparer les sections et doubler la précision.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

La meilleure façon est d'utiliser des balises `< >` ou `"""` (trois guillemets).

> **Rôle :** Tu es un **Éditeur** compétent.
>
> **Demande :** Résume le contenu enveloppé dans les balises `<text>` ci-dessous en 3 phrases.
>
> **Données d'entrée :**
> <text>
> `[Insérez ici un article de presse ou un rapport incroyablement long]`
> </text>

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée sans délimiteurs)

IA : Elle pourrait inclure l'instruction « Résume ceci » dans le résumé lui-même, ou simplement lire le début du texte et finir à la hâte.

```text
(Mélange confus d'instructions et de données)
```

<br>

### ✅ Après (Enveloppement avec des balises)

L'IA reconnaît uniquement le contenu à l'intérieur de `<text>` comme **« données à traiter »** et distingue clairement le reste comme **« commandes ».**

```text
(Extrait avec précision uniquement le contenu à l'intérieur de <text> et le résume parfaitement)
```

---

## 🎯 Conclusion

Les experts divisent habituellement les **Sections** lors de la création de prompts.

- `<context>` (Situation)
- `<instruction>` (Instructions)
- `<data>` (Données)

Cette seule petite habitude rend le taux d'erreur de vos prompts de 0%. 🧱
