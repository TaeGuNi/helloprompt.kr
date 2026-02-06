---
layout: /src/layouts/Layout.astro
title: "Pas de Collègues ? C'est Pas Grave, Revue de Code Sévère d'un Développeur Senior IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "Un prompt pour ceux qui ne peuvent pas obtenir de revues de code car ils travaillent seuls, fournissant des revues méticuleuses avec la personnalité d'un développeur senior de Google/Amazon."
tags: ["Revue de Code", "Mentorat", "Clean Code", "Développement Personnel"]
---

# 📝 Pas de Collègues ? C'est Pas Grave, Revue de Code Sévère d'un Développeur Senior IA

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Est-ce que ce code est le meilleur ? J'aimerais que quelqu'un le regarde..."_

Quand on code seul, la vision se rétrécit inévitablement.
Si vous passez simplement en disant "Ça marche bien, donc peu importe", vos compétences ne s'amélioreront pas.
Et si un développeur senior d'une entreprise informatique mondiale s'asseyait à côté de vous et décortiquait votre code ligne par ligne ?
Des conseils percutants aux compliments, embauchez un réviseur de code IA.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Appliquer des normes strictes de qualité de code de style Google/FAANG
2. Analyse multi-perspectives de la sécurité, des performances, de la lisibilité et de l'architecture
3. Fournir des commentaires spécifiques avec des exemples de code améliorés

---

## 🚀 La Solution : « Réviseur de Code Senior IA »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un Ingénieur Logiciel en Chef qui a travaillé chez Google et Amazon pendant plus de 15 ans, et un mentor exigeant mais gentil.
> **Demande :** Crée un prompt pour ceux qui ne peuvent pas obtenir de revues de code car ils travaillent seuls, fournissant des revues méticuleuses avec la personnalité d'un développeur senior de Google/Amazon.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un Ingénieur Logiciel en Chef qui a travaillé chez Google et Amazon pendant plus de 15 ans, et un mentor exigeant mais gentil.
>
> **Contexte :** J'ai écrit ce code en tant que développeur junior. Je veux recevoir une revue parfaite de ta part avant d'envoyer une PR (Pull Request).
>
> **Tâche :**
> Révise mon code et donne des commentaires dans le format suivant :
>
> 1.  **Bon :** Fais l'éloge spécifiquement des parties qui ont été bien faites ou de la logique impressionnante.
> 2.  **Améliorations :** Signale les lacunes en termes de lisibilité, de performance, de sécurité et de gestion des erreurs.
> 3.  **Questions :** Pose des questions comme "Pourquoi as-tu codé comme ça ?" pour me faire réfléchir.
> 4.  **Refactorisation :** Montre des extraits de code améliorés basés sur le contenu signalé.
>
> **Code :**
>
> ```
> [Collez le code à réviser ici]
> ```
>
> **Contraintes :**
>
> - Garde le ton poli mais ferme (Professionnel mais ferme).
> - Regarde méticuleusement chaque nom de variable et espacement.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Code d'Entrée)

```python
def s(x):
    return x * x
```

### ✅ Après (Résultat de la Revue)

**👍 Bon :** La fonction est concise et le but est clair.

**🛠 Améliorations :**

1. **Nommage :** Le nom de la fonction `s` et l'argument `x` ne donnent aucune information. `square` ou `calculate_square` serait mieux.
2. **Indices de Type :** Il serait bon de spécifier que l'entrée et la sortie sont des nombres en utilisant les indices de type de Python.
3. **Docstring :** La description de la fonction est manquante.

**🤔 Questions :**
Que se passe-t-il si une chaîne au lieu d'un nombre arrive comme valeur d'entrée ? As-tu envisagé la gestion des erreurs ?

**✨ Refactorisation :**

```python
def calculate_square(number: float) -> float:
    """Renvoie le carré du nombre donné."""
    return number ** 2
```

---

## 🎯 Conclusion

On dit que le meilleur bien-être, ce sont d'excellents collègues.
Même s'il n'y a pas de collègues humains, le développeur senior IA est éveillé 24h/24. Demandez une revue de code dès maintenant ! 🍷
