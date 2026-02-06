---
layout: /src/layouts/Layout.astro
title: "Compte-rendu de réunion, vous l'organisez encore à la main ? 3 minutes avec l'IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatisation du Travail"
description: "Un prompt de secrétaire qui transforme des scripts de réunion désordonnés en résumés propres et en actions à entreprendre."
tags: ["Compte-rendu", "Résumé", "Productivité"]
---

# 📝 Compte-rendu de réunion, vous l'organisez encore à la main ? 3 minutes avec l'IA

- **🎯 Recommandé pour :** Tout le monde
- **⏱️ Temps requis :** 5 minutes
- **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"On a beaucoup parlé pendant une heure, mais maintenant que j'essaie d'organiser, je ne me souviens plus et c'est le désordre ?"_

Après une réunion, il ne reste que des fichiers d'enregistrement ou des notes gribouillées. Organiser cela en rapport devient une autre tâche. Ne serait-ce pas génial si vous pouviez simplement extraire les décisions importantes et qui doit faire quoi pour quand (Action Item) ?

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Convertit les transcriptions de réunion désordonnées en documents commerciaux structurés.
2. Distingue clairement les « Décisions » des « Éléments en attente » parmi les sujets discutés.
3. Extrait automatiquement les **Action Items** pour chaque responsable.

---

## 🚀 La Solution : « Secrétaire de Réunion Intelligent »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un `[Secrétaire Professionnel de 10 ans]`.
> **Demande :** Convertis des scripts de réunion désordonnés en résumés propres et en actions à entreprendre.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude. (C'est parfait si vous insérez le résultat de la conversion de texte de Clovanote, etc.)

> **Rôle (Role) :** Tu es un `[Secrétaire Professionnel de 10 ans]`.
>
> **Situation (Context) :** J'ai le texte de la transcription de la `[Réunion d'Équipe Hebdomadaire]` qui vient de se terminer, mais c'est trop long et désorganisé.
>
> **Demande (Task) :**
>
> 1. Résume tout le contenu en 3 lignes en te concentrant sur les points clés de l'ordre du jour.
> 2. Distingue les « Questions Décidées » des « Questions en Attente » parmi le contenu discuté.
> 3. Extrais clairement les **Action Items** pour chaque responsable au format [Responsable] : [À Faire] : [Date Limite].
> 4. Écris sur un ton de « Rapport Commercial » poli et clair dans l'ensemble.
>
> **Texte :**
> `[Collez le script de la réunion ou les notes ici]`

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

```text
Manager Kim : À propos de ce plan marketing, je pense que choisir le Plan A est mieux. Mais le budget est un problème.
Assistant Lee : J'ai parlé à l'équipe financière du budget, et il semble qu'une augmentation de 10 % soit possible.
Manager Kim : Vraiment ? Alors confirme le Plan A, et Lee, fais un calendrier détaillé et partage-le d'ici mardi prochain. Park, fais une ébauche de design.
Staff Park : Oui, compris. Mais quel est exactement le concept ?
Manager Kim : Partons sur un style moderne. Trouve des références et montre-les-moi d'ici demain après-midi.
```

### ✅ Après (Résultat)

```text

---

## 🎯 Conclusion

Maintenant, ne luttez pas pour tout noter pendant la réunion, concentrez-vous sur la discussion. L'IA organise mieux.
```
