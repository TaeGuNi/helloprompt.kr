---
layout: /src/layouts/Layout.astro
title: "Traducteur de Problèmes de Physique : Du Jugement de la Situation à l'Établissement des Équations"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Maths/Sciences"
description: "Prompt qui lit les problèmes de physique écrits, analyse la situation et vous dit quelle formule utiliser."
tags: ["Physique", "Ingénierie", "RésolutionProblèmes", "Prompt"]
---

# 📝 Traducteur de Problèmes de Physique : Du Jugement de la Situation à l'Établissement des Équations

- **🎯 Recommandé pour :** Tout le monde
- **⏱️ Temps requis :** 5 minutes
- **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"J'ai mémorisé toutes les formules, mais je ne sais pas s'il faut utiliser F=ma ou la Loi de Conservation de l'Énergie pour ce problème."_

90 % des problèmes de physique sont de la 'compréhension de lecture'. La partie la plus difficile est de trouver des indices cachés dans le problème ("Quand il n'y a pas de friction", "Partant du repos") et de les traduire en langage mathématique. Ce prompt trouve des indices dans le problème comme Sherlock Holmes et vous remet l'outil parfait (formule).

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Extrayez les variables physiques (Valeurs données, Valeurs à trouver) des problèmes écrits.
2. Signalez explicitement les conditions cachées (Contraintes implicites).
3. Établissez une stratégie pour la résolution de problèmes et faites correspondre les formules.

---

## 🚀 La Solution : « Architecte de Solution Physique »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

**Rôle :** Tu es un `[Professeur de Physique et Expert en Résolution de Problèmes]`.
**Demande :** Créez un prompt qui lit les problèmes de physique écrits, analyse la situation et vous dit quelle formule utiliser.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et utilisez-le.

> **Rôle :** Tu es un `[Professeur de Physique et Expert en Résolution de Problèmes]`.
>
> **Contexte :** J'essaie de résoudre un problème de physique, mais je ne peux pas bien saisir la situation et je suis confus sur le principe à appliquer.
>
> **Tâche :**
>
> 1. **[Extraction de Variable]** : Organise les valeurs données dans le problème (Connues) et les valeurs à trouver (Inconnues) avec des symboles (ex : $v_0 = 0 m/s$).
> 2. **[Conditions Cachées]** : Trouve des conditions qui ne sont pas spécifiées dans le texte mais doivent être considérées physiquement (ex : "Chute libre" -> $a = 9.8 m/s^2$).
> 3. **[Établissement de Stratégie]** : Explique quelle est la **Loi Physique** la plus appropriée pour résoudre ce problème et pourquoi tu devrais l'utiliser.
> 4. **[Établissement de l'Équation]** : Établis un **Modèle Mathématique** pur avant de substituer des nombres.
>
> **Contraintes :**
>
> - Concentre-toi sur la 'Conception' plutôt que sur le processus de résolution (Calcul).
> - Fais attention à la notation des Unités.
>
> **Texte du Problème :**
> `[Copiez et collez le problème de physique ici]`

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

"J'ai lâché une balle du toit d'un bâtiment de 45m de haut. Vitesse en touchant le sol ?"

### ✅ Après (Résultat)

**[Extraction de Variable]**

- $h$ (Hauteur) = 45 m
- $v_0$ (Vitesse Initiale) = 0 m/s (Puisqu'il a juste dit 'lâché')
- $v$ (Vitesse Finale) = ? (Valeur à trouver)

**[Conditions Cachées]**

- Ignorer la résistance de l'air car il n'y a pas de mention.
- Accélération $a$ = Accélération Gravitationnelle $g$ $\approx 9.8 m/s^2$ (Définir la direction vers le bas +)

**[Établissement de Stratégie]**
Puisqu'il n'y a pas d'info de Temps ($t$) et qu'il demande la relation entre la hauteur et la vitesse, utiliser **'Loi de Conservation de l'Énergie'** ou **'Équations de Mouvement pour Accélération Constante (Équation sans temps)'** est le plus rapide.

**[Établissement de l'Équation]**
$$ 2as = v^2 - v_0^2 $$
Ici $v_0=0$, $s=h$, $a=g$, donc
$$ v = \sqrt{2gh} $$

---

## 🎯 Conclusion

La physique est un langage qui traduit le monde en maths. Avec ce prompt, vous aurez une expérience étrange où le monde entier ressemble à des formules.

Maintenant quittez le travail à l'heure... Ah, à cause de l'inertie, continuez-vous à aller comme vous rentriez chez vous ? 🍷
