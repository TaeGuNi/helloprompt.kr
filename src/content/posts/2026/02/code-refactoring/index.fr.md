---
layout: /src/layouts/Layout.astro
title: " \"Mon code est une poubelle ! Le coach de refactorisation Clean Code\""
author: "Jay"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Codage/IT"
description: "Un prompt puissant qui transforme un code désordonné et difficile à maintenir en un code propre, lisible et prêt pour la production."
tags: ["Refactorisation", "Clean Code", "Développeur", "Revue de code"]
---

## 📝 Mon code est une poubelle ! Le coach de refactorisation Clean Code

- **🎯 Recommandé pour :** Développeurs de tous niveaux (surtout ceux qui ont peur de leur propre code)
- **⏱️ Durée :** 5 minutes → Réduite à 30 secondes
- **🤖 Modèle recommandé :** Claude 3.5 Sonnet (excellent en code), GPT-4o

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐☆

> _"Je m'étais dit que je le corrigerais plus tard... ça fait un an, et maintenant je n'ose même plus y toucher de peur que tout s'effondre."_

Le "code spaghetti" est le cauchemar absolu de tout développeur. Quand la lisibilité fait défaut, la moindre petite fonctionnalité se transforme en parcours du combattant et traquer un bug revient à chercher une aiguille dans une botte de foin. Inspiré des principes de Robert C. Martin (l'auteur de _Clean Code_), ce prompt agit comme un linter sous stéroïdes couplé à un architecte logiciel de haut vol : il va nettoyer, structurer et polir votre base de code pour lui redonner toute sa clarté, sans jamais en altérer la logique.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. **Extraction et modularité :** Découpe les fonctions kilométriques en petites unités logiques (Extract Method).
2. **Nommage sémantique :** Remplace les variables cryptiques par des noms explicites et compréhensibles.
3. **Modernisation transparente :** Applique les standards récents de votre langage sans modifier la logique métier.

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
> 1. **Nommage sémantique** : Renomme les variables et les fonctions de manière intentionnelle (ex. : `d` devient `elapsedTimeInDays`).
> 2. **Découpage logique** : Applique le principe de responsabilité unique (SRP). Extrais les blocs logiques complexes en fonctions privées bien nommées.
> 3. **Modernisation** : Utilise les fonctionnalités modernes et idiomatiques du langage `[Précisez votre langage, ex. : TypeScript, Python 3.11]`.
> 4. **Analyse des changements** : Fournis une brève liste à puces expliquant _pourquoi_ tu as effectué ces modifications (avantages concrets).
>
> **Contraintes (Constraints) :**
>
> - **Règle d'or absolue :** Le comportement du code (les entrées et les sorties) ne doit absolument PAS changer.
> - Élimine les "nombres magiques" et remplace-les par des constantes nommées.
> - N'ajoute des commentaires que pour expliquer le _pourquoi_ (logique métier complexe), jamais le _comment_ (le code doit s'expliquer de lui-même).
> - Privilégie le "Early Return" pour réduire l'imbrication (Guard Clauses).
>
> **Code cible :**
>
> `[Collez votre code spaghetti ici]`

---

## 💡 Commentaire de l'auteur (Insight)

L'erreur la plus fréquente lorsqu'on utilise une IA pour coder est de lui demander de "juste corriger" le code. Sans garde-fous stricts, l'IA a la fâcheuse tendance à réécrire la logique métier de A à Z ou d'ajouter des fonctionnalités dont personne ne veut. Toute la puissance de ce prompt réside dans sa **règle d'or absolue : "Le comportement du code ne doit pas changer"**.

En tant que développeur, je dégaine systématiquement la _Pro Version_ avant d'ouvrir une Pull Request sur du code legacy que je viens de toucher. Non seulement cela rehausse drastiquement la qualité de la base de code, mais c'est également une méthode redoutable pour découvrir de nouveaux design patterns et des syntaxes plus élégantes. Gardez ceci à l'esprit : un code propre est un cadeau inestimable que vous offrez à vos collègues... et à vous-même dans 6 mois.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : L'IA risque-t-elle de casser ma logique métier ?**
  - A : C'est extrêmement rare avec les modèles récents, surtout si vous utilisez la _Pro Version_ qui verrouille strictement les contraintes. Cependant, la confiance n'exclut pas le contrôle. **Ayez toujours des tests unitaires** solides en place avant d'entreprendre une refactorisation en profondeur.

- **Q : Ce prompt est-il adapté aux frameworks spécifiques (React, Django, Spring, etc.) ?**
  - A : Absolument. Il vous suffit d'injecter le contexte directement dans le prompt. Ajoutez par exemple : "Utilise les conventions idiomatiques de React (Hooks personnalisés, mémoïsation si pertinent)". L'IA alignera instantanément son refactoring sur les meilleures pratiques de votre écosystème.

- **Q : Que faire si l'IA me propose une syntaxe trop moderne pour mon environnement de production ?**
  - A : Indiquez simplement votre version cible dans la section des contraintes de la _Pro Version_. Par exemple : "Contrainte : Le code doit impérativement rester compatible avec ES5" ou "Conforme-toi strictement aux standards de Java 8".

---

## 🧬 Anatomie du prompt (Pourquoi ça marche ?)

1. **Le persona de l'Architecte Senior :** Il oblige l'IA à viser l'excellence absolue, balayant d'un revers de main les solutions naïves ou "bricolées".
2. **Des directives chirurgicales (Guard Clauses, Nommage) :** Plutôt que de quémander vaguement un "code propre", le prompt attaque frontalement les pires pratiques (nombres magiques, imbrication excessive) pour garantir leur éradication totale.
3. **L'exigence de justification :** Forcer l'IA à expliquer _pourquoi_ elle a fait certains choix transforme le résultat en une revue de code limpide, prouvant qu'elle n'a pas modifié la logique au doigt mouillé.

---

## 📊 Preuve : Before & After

Voici l'impact fulgurant du prompt sur un script Python typique, codé "à la va-vite".

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

_(La fonction `calc` est vague, `x` et `y` ne veulent rien dire, la présence du `19` et du `0.9` tient de la magie noire, et l'imbrication avec `else` est totalement superflue.)_

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

1. **Typage et Nommage :** `calc` se métamorphose en `calculate_discounted_price`, rendant l'intention limpide. L'ajout d'annotations de type (`int`, `float`) vient blinder l'utilisation.
2. **Constantes explicites :** Les nombres cryptiques `19` et `0.9` laissent place à des variables sémantiques claires.
3. **Early Return :** Le `else` inutile est pulvérisé pour aplatir la structure et offrir une lecture linéaire.

---

## 🎯 Conclusion

Un code d'excellence doit pouvoir se dévorer avec la même fluidité qu'un bon article de presse. Ne laissez pas la dette technique s'accumuler jusqu'à l'asphyxie de votre projet. Décrassez votre base de code dès aujourd'hui pour préserver votre santé mentale de demain.

Maintenant, validez ce commit, fermez votre ordinateur et allez prendre une bonne douche. Pour vous, pas pour le code. 🍷
