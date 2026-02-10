---
layout: /src/layouts/Layout.astro
title: "« Recommander un Message de Commit » Plus de Soucis ! Génération Auto Conventional Commits"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "Un prompt qui écrit des messages de commit propres adaptés aux normes mondiales (Conventional Commits) si vous collez simplement les changements (`git diff`)."
tags: ["Git", "Message de Commit", "Collaboration", "Productivité"]
---

# 📝 « Recommander un Message de Commit » Plus de Soucis ! Génération Auto Conventional Commits

**🎯 Recommandé pour :** Tout le monde
**⏱️ Temps requis :** 5 minutes
**🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Écrire des messages de commit est plus difficile que d'écrire du code..."_

`fix: bug`, `update code`... Faites-vous des commits comme ça ?
Les bons messages de commit sont le cœur de la gestion de l'historique, mais les écrire à chaque fois me donne mal à la tête.
Jetez simplement le contenu `git diff`, et il le sortira dans le style **Conventional Commits**, la norme du camp open source.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Analyser les changements et sélectionner automatiquement le type approprié (feat, fix, refactor, etc.)
2. Écrire un sujet concis et clair et un corps détaillé
3. Formatage adapté aux conventions de l'équipe

---

## 🚀 La Solution : « Générateur de Message de Commit Git »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

**Rôle :** Tu es un Mainteneur Open Source obsédé par la gestion de l'historique Git.
**Demande :** Écris un message de commit propre adapté aux normes mondiales (Conventional Commits) si je colle simplement les changements (`git diff`).

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un Mainteneur Open Source obsédé par la gestion de l'historique Git.
>
> **Contexte :** J'ai modifié le code, et j'ai besoin d'un message de commit propre que les collègues peuvent facilement comprendre.
>
> **Tâche :**
> Analyse les `[Changements]` ci-dessous et recommande 3 messages de commit qui respectent les règles **Conventional Commits**.
>
> 1. **Format :** `<type>(<scope>): <subject>`
> 2. **Corps :** Résume la raison du changement (Pourquoi) et le contenu du changement (Quoi) avec des puces.
> 3. **Pied de page :** (Optionnel) S'il y a un numéro de problème, ajoute-le au format `Closes #123`.
>
> **Changements (git diff ou résumé) :**
>
> ```
> [Écrivez le résultat `git diff` ou les changements simplement ici]
> ```
>
> **Contraintes :**
>
> - Types de Type : Sélectionne l'un de `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
> - Le Sujet ne doit pas dépasser 50 caractères et commencer par un impératif (racine du verbe). (L'anglais est par défaut)

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Changements d'Entrée)

"Changé la couleur du bouton de connexion en rouge, corrigé le bug où la connexion ne fonctionnait pas. Ah, et ajouté le guide d'installation au readme."

### ✅ Après (Résultat)

**Option 1 (Focus sur la Correction de Bug)**

```text
fix(auth): resolve login failure issue and update button style

- Fix logic error preventing user login
- Change login button color to red for better visibility
- Add installation guide to README.md
```

**Option 2 (Focus sur l'Amélioration de l'UI)**

```text
style(ui): update login button color and fix login bug

- Change login button color to red
- Fix login functionality bug
- docs: update installation guide in README
```

---

## 🎯 Conclusion

Les messages de commit sont des lettres à votre futur vous et à vos collègues.
Ne les écrivez pas grossièrement. Obtenez de l'aide de l'IA et entendez le compliment "Le journal de commit de cette personne est si propre" ! 🍷
