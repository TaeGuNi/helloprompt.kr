---
layout: /src/layouts/Layout.astro
title: 'L''IA ne vous comprend pas ? Utilisez des "Délimiteurs"'
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Ingénierie de Prompt"
description: "L'IA s'embrouille en résumant de longs textes ou en modifiant du code ? Doublez la précision avec la technique des délimiteurs pour séparer les sections."
tags: ["Délimiteurs", "Lisibilité", "TagsXML"]
---

# 🚧 L'IA ne vous comprend pas ? Utilisez des "Délimiteurs"

> **🎯 Cible recommandée :** Tout le monde
> **⏱️ Temps nécessaire :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

Quand vous donnez un long texte à l'IA et dites "résume ça", l'IA est parfois confuse sur où commence et finit le texte à résumer, et où se trouve la commande.

Tout comme les humains divisent les textes en **paragraphes**, vous devez tracer une **ligne de démarcation (Délimiteur)** claire pour l'IA : **"C'est d'ici à là"**.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. L'IA peut avoir du mal à distinguer les commandes des données dans les textes longs.
2. Utilisez des balises XML (`< >`) ou des symboles spéciaux (`"""`) pour définir des limites claires.
3. L'habitude de diviser les sections réduit les erreurs de reconnaissance de l'IA et augmente la précision du travail.

---

## 🚀 Solution : "Utiliser des balises XML ou des symboles spéciaux"

### 🥉 Version Basique (Basic)

Utilisez ceci pour des résultats rapides.

> **Rôle :** Tu es un **Éditeur** compétent.
> **Demande :** L'IA s'embrouille en résumant de longs textes ou en modifiant du code ? Doublez la précision avec la technique des délimiteurs pour séparer les sections.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci quand vous avez besoin de qualité détaillée.

La meilleure méthode est d'utiliser des balises `< >` ou `"""` (trois guillemets).

> **Rôle :** Tu es un **Éditeur** compétent.
>
> **Demande :** Résume le contenu entouré par les balises `<text>` ci-dessous en 3 phrases.
>
> **Données d'entrée :**
> <text>
> `[Ici, un article de presse ou un rapport extrêmement long]`
> </text>

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée sans distinction)

IA : Elle pourrait inclure la phrase "résume ça" dans le résumé, ou lire seulement le début du texte et finir à la va-vite.

```text
(Commandes et données mélangées et confuses)
```

<br>

### ✅ Après (Entouré de balises)

L'IA reconnaît uniquement le contenu dans `<text>` comme **"données à traiter"**, et distingue clairement le reste comme **"commandes"**.

```text
(Extrait et résume parfaitement le contenu à l'intérieur de <text>)
```

---

## 🎯 Conclusion

Les experts divisent habituellement leurs prompts en **Sections**.

- `<context>` (Situation)
- `<instruction>` (Instructions)
- `<data>` (Données)

Cette petite habitude réduit le taux d'erreur du prompt à 0%. 🧱
