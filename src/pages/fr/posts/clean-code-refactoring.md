---
layout: /src/layouts/Layout.astro
title: "Mon Code est Nul ! Coach de Refactorisation Clean Code"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/IT"
description: "Prompt qui met à niveau le code désordonné qui ne fait que fonctionner en code propre 'facile à lire et à maintenir'."
tags: ["Refactorisation", "CleanCode", "Développeur", "RevisiónCode"]
---

# 📝 Mon Code est Nul ! Coach de Refactorisation Clean Code

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"J'ai dit que je le corrigerais plus tard mais 1 an a passé. Maintenant j'ai peur d'y toucher."_

Le code spaghetti (code emmêlé) est l'ennemi des développeurs. Si la lisibilité est faible, il est difficile de trouver des bugs et difficile d'ajouter des fonctionnalités. Ce prompt possède Robert C. Martin (Auteur de Clean Code), lavant et polissant votre code pour le faire briller.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Supprimez le code en double et séparez les fonctions (Extraire la Méthode).
2. Améliorez les noms de variables/fonctions peu clairs (Convention de Nommage).
3. Optimisez les performances et appliquez la syntaxe moderne (Syntaxe Moderne).

---

## 🚀 La Solution : « Blanchisserie de Clean Code »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un `[Évangéliste du Clean Code et Architecte en Chef]`.
> **Demande :** Créez un prompt qui met à niveau le code désordonné qui ne fait que fonctionner en code propre 'facile à lire et à maintenir'.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et utilisez-le.

> **Rôle :** Tu es un `[Évangéliste du Clean Code et Architecte en Chef]`.
>
> **Contexte :** Mon code fonctionne, mais il est désordonné et difficile à lire (Code Sale). Refactorise-le pour qu'il soit facile à maintenir.
>
> **Tâche :**
>
> 1. **[Sens du Nommage]** : Change les noms de variables et de fonctions pour qu'ils soient intuitifs et significatifs. (ex : `a` -> `userAge`)
> 2. **[Amélioration de la Structure]** : Divise les fonctions trop longues par rôle, et combine la logique en double en une seule.
> 3. **[Moderniser]** : Si possible, applique la dernière syntaxe du langage (ES6+, Python 3.10+, etc.).
> 4. **[Avant & Après]** : Compare où et comment cela a changé, et explique la raison pour laquelle tu l'as changé ainsi.
>
> **Contraintes :**
>
> - L'opération (fonction) du code ne doit jamais changer.
> - Ajoute des commentaires uniquement là où c'est absolument nécessaire. (Supprime les commentaires si expliqués par le code)
>
> **Code Cible :**
>
> ```python
> [Collez le code sale(?) ici]
> ```

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

```python
def calc(x, y):
    if x > 19:
        print("Adulte")
        p = y * 0.9
        return p
    else:
        print("Étudiant")
        return y
```

(Le nom de la fonction `calc` ne dit pas ce qu'elle calcule, `p` est aussi peu clair)

### ✅ Après (Résultat du Prompt)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Vous êtes un adulte.")
        return price * DISCOUNT_RATE

    print("Vous êtes un étudiant.")
    return price
```

**[Points d'Amélioration]**

1. **Changer le Nom de la Fonction** : `calc` -> `calculate_discounted_price` (Clair que c'est un calcul de prix réduit)
2. **Supprimer les Nombres Magiques** : Nombres déclarés comme `19`, `0.9` comme constantes pour donner du sens.
3. **Supprimer le else Inutile** : Profondeur d'indentation réduite en utilisant le modèle de Retour Anticipé.

---

## 🎯 Conclusion

Le code bien écrit se lit facilement comme un essai bien écrit. Nettoyez votre code pour votre futur moi (et collègues).

Maintenant quittez le travail à l'heure et prenez une douche. Le corps, pas le code. 🍷
