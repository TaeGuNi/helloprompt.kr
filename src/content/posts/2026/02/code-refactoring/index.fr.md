---
layout: /src/layouts/Layout.astro
title: " \"Mon code est une poubelle ! Le coach de refactorisation Clean Code\""
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Codage/IT"
description: " \"Un prompt qui transforme un code désordonné et difficile à maintenir en un code propre, lisible et robuste.\""
tags: ["Refactorisation", "Clean Code", "Développeur", "Revue de code"]
---

# 📝 Mon code est une poubelle ! Le coach de refactorisation Clean Code

- **🎯 Recommandé pour :** Développeurs de tous niveaux (surtout ceux qui ont peur de leur propre code)
- **⏱️ Durée :** 5 minutes → Réduite à 30 secondes
- **🤖 Modèle recommandé :** Claude 3.5 Sonnet (excellent en code), GPT-4o

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐☆

> _"Je m'étais dit que je le corrigerais plus tard... ça fait un an, et maintenant je n'ose même plus y toucher de peur que tout s'effondre."_

Le "code spaghetti" est le cauchemar silencieux de tout développeur. Lorsque la lisibilité est mauvaise, chaque nouvelle fonctionnalité devient un parcours du combattant et la traque des bugs s'apparente à chercher une aiguille dans une botte de foin. Ce prompt, inspiré des principes de Robert C. Martin (l'auteur de _Clean Code_), agit comme un linter surpuissant couplé à un architecte logiciel : il va nettoyer, structurer et polir votre code pour lui redonner toute sa lisibilité sans altérer sa logique.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. **Extraction et modularité :** Découpe les fonctions kilométriques en petites unités logiques (Extract Method).
2. **Nommage sémantique :** Remplace les variables cryptiques par des noms explicites et compréhensibles.
3. **Modernisation silencieuse :** Applique les standards récents de votre langage sans modifier la logique métier.

---

## 🚀 Solution : "Le Pressing Clean Code"

### 🥉 Basic Version (Version Rapide)

Idéal pour un nettoyage express d'un petit script ou d'une fonction isolée.

> **Rôle :** Tu es un `[Architecte Logiciel Senior]` expert en Clean Code.
> **Demande :** Refactorise ce code pour le rendre extrêmement propre, lisible et facile à maintenir. La logique métier doit rester strictement identique.


### 🥇 Pro Version (Version Expert)

À utiliser pour des composants complexes, des classes entières ou du code hérité (legacy) critique.

> **Rôle (Role) :** Tu es un `[Architecte Logiciel Senior]` intransigeant, fervent défenseur des principes SOLID et du Clean Code.
>
> **Contexte (Context) :**
>
> - Code actuel : Mon code fonctionne techniquement, mais il est difficile à lire, présente des duplications et utilise des conventions de nommage floues (Dirty Code).
> - Objectif : Obtenir un code de qualité production, prêt à passer une revue de code stricte.
>
> **Demande (Task) :**
>
> 1. **Nommage sémantique** : Renomme les variables et les fonctions de manière intentionnelle (ex: `d` devient `elapsedTimeInDays`).
> 2. **Découpage logique** : Applique le principe de responsabilité unique (SRP). Extrais les blocs logiques complexes en fonctions privées bien nommées.
> 3. **Modernisation** : Utilise les fonctionnalités modernes et idiomatiques du langage `[Indiquez votre langage, ex: TypeScript, Python 3.11]`.
> 4. **Analyse des changements** : Fournis une brève liste à puces expliquant _pourquoi_ tu as effectué ces modifications (avantages concrets).
>
> **Contraintes (Constraints) :**
>
> - **Règle d'or :** Le comportement du code (les entrées et les sorties) ne doit absolument PAS changer.
> - Élimine les "nombres magiques" et remplace-les par des constantes nommées.
> - N'ajoute des commentaires que pour expliquer le _pourquoi_ (logique métier complexe), jamais le _comment_ (le code doit s'expliquer de lui-même).
> - Privilégie le "Early Return" pour réduire l'imbrication (Guard Clauses).
>
> **Code cible :**
>
> `[Collez votre code spaghetti ici]`

---

## 💡 Commentaire de l'auteur (Insight)

L'erreur la plus courante avec les IA de codage est de leur demander de simplement "corriger" le code. Sans garde-fous, l'IA a tendance à réécrire la logique métier ou à ajouter des fonctionnalités non sollicitées. La puissance de ce prompt réside dans sa **règle d'or : "Le comportement du code ne doit pas changer"**.

En tant que développeur, j'utilise systématiquement la _Pro Version_ avant de soumettre une Pull Request pour du vieux code que je viens de modifier. Cela permet non seulement d'améliorer la qualité de la base de code, mais c'est aussi un excellent moyen d'apprendre de nouveaux patterns et des syntaxes plus élégantes. N'oubliez pas : un code propre est un cadeau que vous faites à vos collègues, et à vous-même dans 6 mois.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : L'IA risque-t-elle de casser ma logique métier ?**
  - A : C'est très rare avec les modèles récents si vous utilisez la _Pro Version_ qui verrouille les contraintes. Cependant, ne faites jamais une confiance aveugle. **Ayez toujours des tests unitaires** en place avant de refactoriser en profondeur.

- **Q : Ce prompt fonctionne-t-il pour les frameworks spécifiques (React, Django, Spring...) ?**
  - A : Absolument. Il vous suffit de préciser le contexte dans le prompt. Par exemple : "Utilise les conventions idiomatiques de React (Hooks personnalisés, mémoïsation si nécessaire)". L'IA adaptera son refactoring aux meilleures pratiques du framework.

- **Q : Que faire si le code refactorisé utilise une syntaxe trop récente pour mon serveur ?**
  - A : Précisez votre version cible dans les contraintes de la _Pro Version_. Par exemple : "Contrainte : Le code doit rester compatible avec ES5" ou "Utilise uniquement les standards de Java 8".

---

## 🧬 Anatomie du prompt (Pourquoi ça marche ?)

1. **Persona d'Architecte Senior :** Force l'IA à adopter un standard d'excellence élevé, évitant les solutions "bricolées" ou naïves.
2. **Directives ciblées (Guard Clauses, Nommage) :** Au lieu de demander un vague "code propre", on cible les pires pratiques (nombres magiques, imbrication profonde) pour s'assurer qu'elles soient éradiquées.
3. **Exigence de justification :** Demander à l'IA d'expliquer _pourquoi_ elle a fait ces choix facilite la revue de code et garantit qu'elle n'a pas modifié la logique au hasard.

---

## 📊 Preuve : Before & After

Voici l'impact du prompt sur un script Python typique, écrit "à la va-vite".

### ❌ Before (Code original)

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

_(Le nom `calc` est vague, `x` et `y` n'ont aucun sens, la magie du `19` et du `0.9` est inexpliquée et l'imbrication avec `else` est inutile)._

### ✅ After (Résultat du prompt)

```python
def calculate_discounted_price(age: int, base_price: float) -> float:
    ADULT_AGE_THRESHOLD = 20
    ADULT_DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Client adulte : Réduction appliquée.")
        return base_price * ADULT_DISCOUNT_RATE

    print("Tarif étudiant standard.")
    return base_price
```

**[Ce qui a changé]**

1. **Typage et Nommage :** `calc` devient `calculate_discounted_price`, clarifiant immédiatement le but. L'ajout d'annotations de type (`int`, `float`) sécurise l'usage.
2. **Constantes explicites :** Les nombres cryptiques `19` et `0.9` sont remplacés par des variables sémantiques.
3. **Early Return :** Disparition du `else` inutile pour aplatir la structure et rendre la lecture linéaire.

---

## 🎯 Conclusion

Un code bien écrit doit se lire avec la même fluidité qu'un bon article. Ne laissez pas la dette technique s'accumuler jusqu'à l'asphyxie. Nettoyez votre code aujourd'hui pour préserver votre santé mentale de demain.

Maintenant, validez ce commit, rentrez chez vous et prenez une douche. Pour vous, pas pour le code. 🍷
