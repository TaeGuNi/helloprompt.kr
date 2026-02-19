---
layout: /src/layouts/Layout.astro
title: "Mon code est une poubelle ! Le coach de refactorisation Clean Code"
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Codage/IT"
description: "Un prompt qui transforme un code désordonné qui fonctionne à peine en un code propre, 'lisible et facile à maintenir'."
tags: ["Refactorisation", "Clean Code", "Développeur", "Revue de code"]
---

# 📝 Mon code est une poubelle ! Le coach de refactorisation Clean Code

- **🎯 Recommandé pour :** Tout le monde
- **⏱️ Durée :** 5 minutes
- **🤖 Modèle recommandé :** Tous les modèles d'IA

- **📊 Difficulté :** ⭐⭐☆☆☆
- **⚡️ Efficacité :** ⭐⭐⭐⭐⭐
- **🛠️ Utilité :** ⭐⭐⭐⭐☆

_"Je m'étais dit que je le corrigerais plus tard, mais un an a passé. Maintenant, j'ai peur d'y toucher."_

Le code spaghetti (code enchevêtré) est l'ennemi du développeur. Lorsque la lisibilité est mauvaise, il est difficile de trouver des bugs et d'ajouter des fonctionnalités. Ce prompt, inspiré par Robert C. Martin (auteur de Clean Code), va laver et polir votre code pour le faire briller.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Suppression du code dupliqué et séparation des fonctions (Extract Method)
2. Amélioration des noms de variables/fonctions flous (Convention de nommage)
3. Optimisation des performances et application de la syntaxe moderne (Modern Syntax)

---

## 🚀 Solution : "Le Pressing Clean Code"

### 🥉 Version Basique (Basic Version)

À utiliser lorsque vous avez besoin d'un résultat rapide.

> **Rôle :** Tu es un `[Évangéliste du Clean Code et Architecte Senior]`.
> **Demande :** Améliore ce code sale qui fonctionne à peine pour en faire un code propre, 'lisible et facile à maintenir'.

<br>

### 🥇 Version Pro (Pro Version)

À utiliser lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous pour l'utiliser.

> **Rôle (Role) :** Tu es un `[Évangéliste du Clean Code et Architecte Senior]`.
>
> **Contexte (Context) :** Mon code fonctionne, mais il est sale et difficile à lire (Dirty Code). Refactorise-le pour qu'il soit facile à maintenir.
>
> **Tâche (Task) :**
>
> 1. **[Sens du nommage]** : Change les noms de variables et de fonctions pour qu'ils soient intuitifs et significatifs. (ex : `a` -> `userAge`)
> 2. **[Amélioration de la structure]** : Découpe les fonctions trop longues par rôle et fusionne la logique dupliquée.
> 3. **[Modernisation]** : Si possible, applique la syntaxe la plus récente du langage (ES6+, Python 3.10+, etc.).
> 4. **[Avant & Après]** : Compare ce qui a changé et comment, et explique pourquoi tu as fait ces changements.
>
> **Contraintes (Constraints) :**
>
> - Le fonctionnement (fonctionnalité) du code ne doit absolument pas changer.
> - N'ajoute des commentaires que là où c'est strictement nécessaire. (Supprime les commentaires si le code s'explique de lui-même)
>
> **Code cible :**

> [Collez votre code sale (?) ici]

---

## 🧬 Anatomie du prompt (Pourquoi ça marche ?)

Ce prompt est conçu pour saisir exactement l'intention de l'IA en combinant une définition claire du persona et des instructions spécifiques (Tâche). Il induit une réflexion étape par étape (Chain of Thought) pour obtenir une réponse logique.

---

## 📊 Preuve : Avant & Après

La différence entre une commande simple et un prompt optimisé est claire. En utilisant le prompt fourni, vous obtenez une réponse plus concrète et structurée, et vous économisez du temps de ré-invitation (Re-prompting).

### ❌ Avant (Entrée)

```python
def calc(x, y):
    if x > 19:
        print("성인")
        p = y * 0.9
        return p
    else:
        print("학생")
        return y
```

(Le nom de la fonction `calc` ne dit pas ce qu'elle calcule, et `p` n'a pas de sens clair)

### ✅ Après (Résultat du prompt)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("성인입니다.")
        return price * DISCOUNT_RATE

    print("학생입니다.")
    return price
```

**[Points d'amélioration]**

1.  **Changement du nom de la fonction** : `calc` -> `calculate_discounted_price` (Il est clair que c'est un calcul de prix réduit)
2.  **Suppression des nombres magiques** : Attribution de sens aux nombres comme `19`, `0.9` en les déclarant comme constantes.
3.  **Suppression du else inutile** : Utilisation du modèle Early Return pour réduire la profondeur de l'indentation.

---

## 💡 Commentaire de l'auteur (Insight)

Ce prompt met l'accent sur l'aspect pratique pour une utilisation immédiate au travail.
Si le résultat n'est pas satisfaisant, essayez de définir les variables d'entrée ou la situation (Contexte) de manière un peu plus détaillée.

---

## 🙋 Foire Aux Questions (FAQ)

**Q. Je ne suis pas satisfait du résultat.**
R. Ajoutez des exemples concrets ou décrivez la situation (Contexte) plus en détail.

**Q. Est-ce possible dans d'autres langages ?**
R. Oui, c'est possible si vous traduisez les instructions du prompt dans la langue concernée.

---

## 🎯 Conclusion

Un code bien écrit se lit aussi facilement qu'un bon essai. Nettoyez votre code pour votre futur vous (et vos collègues).

Maintenant, rentrez chez vous et prenez une douche. Pas le code, votre corps. 🍷