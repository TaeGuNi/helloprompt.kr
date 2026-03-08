---
layout: /src/layouts/Layout.astro
title: "Mon Code est Nul ! Coach de Refactorisation Clean Code"
author: "Jay"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/IT"
description: "Un prompt qui transforme votre code brouillon et fonctionnel en un code propre, lisible et facile à maintenir."
tags: ["Refactorisation", "CleanCode", "Développeur", "RevueDeCode"]
---

## 📝 Mon Code est Nul ! Coach de Refactorisation Clean Code

- **🎯 Recommandé pour :** Développeurs juniors, ingénieurs logiciels, étudiants en informatique
- **⏱️ Temps requis :** 5 minutes → 1 minute
- **🤖 Modèle recommandé :** Tous les modèles d'IA (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐☆

> _"« Je nettoierai ce code plus tard. » Cette promesse a plus d'un an, et aujourd'hui, vous êtes terrifié à l'idée d'y toucher."_

Le code spaghetti est le pire ennemi de tout développeur. Un code illisible transforme la moindre traque de bugs en véritable cauchemar et rend l'ajout de nouvelles fonctionnalités extrêmement périlleux. Ce prompt invoque l'esprit de Robert C. Martin (l'auteur de _Clean Code_) pour nettoyer, polir et faire briller votre code de mille feux.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **Élimination des doublons :** Extraction des méthodes et stricte séparation des responsabilités.
2. **Clarté absolue :** Renommage intuitif des variables et des fonctions selon les conventions.
3. **Modernisation :** Application des syntaxes les plus récentes et optimisation de la structure globale.

---

## 🚀 La Solution : "Coach de Clean Code"

### 🥉 Version De Base (Basic Version)

Utilisez cette version lorsque vous avez besoin d'un résultat rapide et direct.

> **Rôle :** Tu es un `[Évangéliste du Clean Code]`.
> **Requête :** Transforme ce code `[Collez votre code ici]` en un code propre, lisible et facile à maintenir, sans en altérer le comportement final.

### 🥇 Version Pro (Expert Version)

Privilégiez cette version pour une refactorisation en profondeur accompagnée d'explications détaillées.

> **Rôle (Role) :** Tu es un `[Évangéliste du Clean Code et Architecte Logiciel Senior]`.
>
> **Contexte (Context) :**
>
> - Contexte : Mon code actuel fonctionne parfaitement, mais il est mal structuré, redondant et difficile à lire (Spaghetti Code).
> - Objectif : Refactoriser ce code pour qu'il respecte strictement les principes du Clean Code, le rendant ainsi facile à maintenir par d'autres développeurs.
>
> **Requête (Task) :**
>
> 1. **[Nommage Intuitif] :** Renomme les variables et les fonctions pour qu'elles reflètent exactement leur utilité.
> 2. **[Refactorisation Structurelle] :** Découpe les fonctions trop longues (Single Responsibility Principle) et regroupe la logique dupliquée (DRY).
> 3. **[Modernisation] :** Applique les syntaxes les plus récentes et idiomatiques du langage.
> 4. **[Analyse Avant/Après] :** Explique précisément quels changements ont été effectués et justifie tes choix architecturaux.
> 5. Le code cible à analyser est : `[Insérez votre code ici]`
>
> **Contraintes (Constraints) :**
>
> - La logique métier et le comportement final du code ne doivent absolument pas changer.
> - N'ajoute des commentaires que si la complexité de la logique ne peut pas être expliquée par le code lui-même.

---

## 💡 Avis de l'Auteur (Insight)

Ce prompt est un véritable sauveur lorsque vous reprenez un projet "legacy" ou que vous effectuez une revue de code sur la Pull Request d'un développeur junior. L'avantage majeur de ce prompt n'est pas seulement d'obtenir un code plus propre, mais surtout de comprendre _pourquoi_ les modifications ont été apportées grâce à l'analyse Avant/Après. C'est un excellent outil d'apprentissage pour s'imprégner des principes **SOLID** et **DRY** au quotidien. Je vous conseille vivement de l'utiliser morceau par morceau sur de vastes bases de code plutôt que d'y jeter un fichier de 2 000 lignes d'un seul coup.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : L'IA risque-t-elle de casser la logique de mon code ?**
  - R : C'est rare avec les modèles les plus performants (GPT-4, Claude 3.5, Gemini), mais cela peut arriver sur une logique métier très complexe. C'est pourquoi la contrainte "Le comportement final ne doit pas changer" est stricte. Quoi qu'il en soit, exécutez toujours vos tests unitaires après une refactorisation générée par l'IA.

- **Q : Puis-je l'utiliser pour n'importe quel langage de programmation ?**
  - R : Absolument ! L'IA a été entraînée sur des millions de dépôts open source couvrant la quasi-totalité des langages (Python, JavaScript, Java, C++, Go, Rust...). Il suffit de préciser le langage si le code en lui-même n'est pas explicite.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

1. **Rôle d'Expert (Architecte Logiciel) :** En définissant ce rôle, on force l'IA à adopter un niveau d'exigence très élevé, allant bien au-delà d'une simple correction syntaxique.
2. **Critères Précis (Nommage, Structure, Modernisation) :** Au lieu de demander vaguement "Rends-le meilleur", on détaille les piliers du Clean Code que l'IA doit cibler en priorité.
3. **Explication Pédagogique (Avant/Après) :** L'exigence de justifier les changements empêche l'IA d'effectuer des modifications "magiques" et aide le développeur humain à valider la pertinence de la refactorisation.

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

_(Le nom de la fonction `calc` ne dit pas ce qu'elle calcule, et les variables `x`, `y` et `p` sont totalement dénuées de sens)_

### ✅ Après (Résultat)

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

1. **Nommage explicite :** `calc` devient `calculate_discounted_price`, clarifiant immédiatement l'objectif de la fonction.
2. **Élimination des Nombres Magiques :** Les valeurs `19` et `0.9` sont extraites dans des constantes nommées (`ADULT_AGE_THRESHOLD`, `DISCOUNT_RATE`), donnant du sens aux calculs.
3. **Simplification (Early Return) :** La clause `else` inutile est supprimée, réduisant la profondeur d'indentation et améliorant grandement la lisibilité globale.

---

## 🎯 Conclusion

Un code propre se lit aussi facilement qu'un article bien rédigé. Nettoyez votre code dès aujourd'hui pour faciliter la vie de votre "moi" du futur (et accessoirement, celle de vos collègues).

Maintenant, validez votre Pull Request, quittez le bureau à l'heure et allez vous détendre. C'est le code qui doit transpirer, pas vous. 🍷
