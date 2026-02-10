---
layout: /src/layouts/Layout.astro
title: "Sauveur des Maths : Explicateur de Problèmes de Maths Amical"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Maths/Sciences"
description: "Au lieu d'une feuille de réponses peu aimable qui ne donne que la bonne réponse, voici un prompt qui explique le processus de réflexion étape par étape."
tags: ["ÉtudeMaths", "RésolutionProblèmes", "Prompt", "Tutorat"]
---

# 📝 Sauveur des Maths : Explicateur de Problèmes de Maths Amical

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"La feuille de réponses est trop peu aimable. Je ne sais pas pourquoi le processus intermédiaire devient comme ça !"_

La raison de l'abandon des maths n'est souvent pas parce que le problème est difficile, mais parce que 'je ne peux pas comprendre l'explication'. La feuille de réponses dit juste "Donc A=B" et passe à autre chose, mais nous avons besoin de l'explication de 10 lignes entre les deux. Ce prompt possède l'IA comme un 'tuteur privé' et montre les processus omis en détail.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Montrez le 'Fil de Pensée' (Chain of Thought) plutôt que de donner juste la réponse.
2. Spécifiez les formules et principes utilisés à chaque étape entre parenthèses.
3. Utilisez des analogies faciles que même les élèves du primaire peuvent comprendre.

---

## 🚀 La Solution : « Solution Étape par Étape »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

**Rôle :** Tu es un `[Docteur en Éducation Mathématique et Tuteur Privé Amical]`.
**Demande :** Au lieu d'une feuille de réponses peu aimable qui ne donne que la bonne réponse, explique le processus de réflexion en le résolvant étape par étape.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et utilisez-le.

> **Rôle :** Tu es un `[Docteur en Éducation Mathématique et Tuteur Privé Amical]`.
>
> **Contexte :** Je suis bloqué en résolvant un problème de maths, et je veux connaître le processus de résolution en détail, pas juste la réponse. Je manque de bases, donc tu dois l'expliquer très facilement.
>
> **Tâche :**
>
> 1. Définis d'abord les **Concepts Clés/Formules** nécessaires pour résoudre le problème.
> 2. Explique le processus de solution en le divisant en **Étapes Logiques (Étape par Étape)** (Étape 1, Étape 2...).
> 3. Lorsque la formule est transformée à chaque étape, explique **quelle loi a été appliquée** entre parenthèses (ex : Théorème du Binôme, Mise au carré des deux côtés, etc.).
> 4. Enfin, vérifie si la réponse est correcte par un processus de **Vérification**.
>
> **Contraintes :**
>
> - Utilise le format LaTeX pour les formules pour les montrer proprement.
> - N'utilise pas de mots comme "Comme tu le sais évidemment". (Parce que je ne sais pas)
>
> **Problème :**
> `[Entrez le problème de maths que vous voulez résoudre ici]`

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Question Générale)

Q : "Résous x^2 - 5x + 6 = 0"
R : "x = 2 ou x = 3." (Fin)

### ✅ Après (Résultat du Prompt)

**[Concept Clé]**
Nous utilisons la 'Factorisation' pour trouver les racines d'une équation quadratique.

**[Processus de Solution]**
**Étape 1 : Trouver la Forme de Factorisation**
Nous devons trouver deux nombres qui se multiplient pour donner +6 et s'additionnent pour donner -5.

- (-2) × (-3) = 6
- (-2) + (-3) = -5
  Donc les deux nombres sont -2 et -3.

**Étape 2 : Réécriture de l'Équation**
$$(x - 2)(x - 3) = 0$$

**Étape 3 : Trouver les Solutions**
Pour que les deux expressions se multiplient pour donner 0, soit le début doit être 0, soit la fin doit être 0.

$$
x - 2 = 0
ightarrow x = 2$$ (Transposition)
$$x - 3 = 0
ightarrow x = 3$$ (Transposition)

**[Vérification]**
Substituer x=2 dans l'équation originale : $$2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$$ (Valide)

---

## 🎯 Conclusion

Les maths se résolvent à la main, pas avec les yeux. Essayez d'écrire vous-même le processus que ce prompt vous a appris dans votre cahier.

Maintenant quittez le travail à l'heure et refroidissez votre cerveau ! 🍷
$$
