---
layout: /src/layouts/Layout.astro
title: "Excel, JSON, CSV... Échappez à la Corvée de Conversion de Format de Données"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "JSON vers CSV, XML vers JSON. Laissez les tâches ennuyeuses de conversion de format de données à l'IA. Les structures imbriquées complexes ne sont pas un problème."
tags: ["Conversion de Données", "JSON", "CSV", "Excel", "Productivité"]
---

# 📝 Excel, JSON, CSV... Échappez à la Corvée de Conversion de Format de Données

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"S'il vous plaît, convertissez le contenu de ce fichier Excel en JSON et envoyez-le à l'API."_

Convertir des formats de données est courant lors du développement.
Utiliser des outils de conversion en ligne semble inconfortable pour télécharger des données d'entreprise, et écrire des scripts demande plus d'efforts que cela ne vaut.
Grattez simplement les données et collez-les. L'IA comprend parfaitement et les convertit.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Conversion de format libre comme JSON ↔ CSV ↔ XML
2. Supprimer les champs inutiles et changer la structure des données (Mappage)
3. Conversion hautement utile comme la génération d'instructions SQL Insert

---

## 🚀 La Solution : « Convertisseur de Données Universel »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un expert en Ingénierie des Données et ETL (Extract, Transform, Load).
> **Demande :** JSON vers CSV, XML vers JSON. Crée un prompt qui laisse les tâches ennuyeuses de conversion de format de données à l'IA. Les structures imbriquées complexes ne sont pas un problème.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un expert en Ingénierie des Données et ETL (Extract, Transform, Load).
>
> **Contexte :** J'ai besoin de convertir des données que j'ai dans un format utilisable dans un autre système.
>
> **Tâche :**
>
> 1. Convertis les données **[Format Source]** ci-dessous vers **[Format Cible]**.
> 2. Applique `[Règle de Changement de Nom de Champ]` pendant la conversion.
> 3. Imprime uniquement le résultat proprement pour que je puisse vérifier si les données sont correctes.
>
> **Données Source :**
>
> ```
> [Collez les données originales ici]
> ```
>
> **Règles de Conversion :**
>
> - Format Source : `[ex. : CSV]`
> - Format Cible : `[ex. : Tableau JSON]`
> - Changement de Champ : `[ex. : Changer 'Nom' -> 'name', 'Âge' -> 'age' et exclure 'Adresse']`

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (CSV d'Entrée)

```csv
Nom,Âge,Emploi
Hong Gildong,30,Développeur
Kim Cheolsoo,25,Designer
```

### ✅ Après (Résultat - JSON + Changement de Nom de Champ)

**Demande :** Convertir CSV en JSON mais changer pour des noms de champs en anglais.

```json
[
  {
    "name": "Hong Gildong",
    "age": 30,
    "job": "Développeur"
  },
  {
    "name": "Kim Cheolsoo",
    "age": 25,
    "job": "Designer"
  }
]
```

### ✅ Après (Résultat - Instruction SQL Insert)

**Demande :** Changer en instruction INSERT utilisable dans la table MySQL `users`.

```sql
INSERT INTO users (name, age, job) VALUES
('Hong Gildong', 30, 'Développeur'),
('Kim Cheolsoo', 25, 'Designer');
```

---

## 🎯 Conclusion

Ne perdez pas de temps à lutter avec les fonctions Excel ou à écrire des regex pour la conversion de données.
Au moment où vous dites "Change ça comme ça" à l'IA, l'heure de quitter le travail se rapproche. 🍷
