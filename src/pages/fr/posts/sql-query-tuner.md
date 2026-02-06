---
layout: /src/layouts/Layout.astro
title: "Requête SQL Lente, Secret pour l'Optimiser en 3 Secondes"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "Un prompt qui analyse les requêtes SQL complexes et inefficaces pour optimiser les performances et recommander des index."
tags: ["SQL", "Tuning DB", "Optimisation de Requête", "Base de Données"]
---

# 📝 Requête SQL Lente, Secret pour l'Optimiser en 3 Secondes

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Même avec juste un peu de données accumulées, il faut 5 secondes pour interroger..."_

Les requêtes qui étaient rapides au début deviennent des tortues à mesure que les données augmentent.
Vous êtes-vous senti perdu en regardant le Plan d'Exécution (Explain Plan) parce que le noir est des lettres et le blanc est le fond ?
Si vous montrez la requête à l'IA, elle trouve les parties inefficaces et fait même des recommandations d'index magiques.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Améliorer les Joins et Sous-requêtes inefficaces
2. Recommander les Index nécessaires
3. Réécrire avec une syntaxe SQL moderne lisible

---

## 🚀 La Solution : « Tuner de Requête SQL »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un DBA (Administrateur de Base de Données) en Chef avec 20 ans d'expérience et un expert en tuning SQL.
> **Demande :** Un prompt qui analyse les requêtes SQL complexes et inefficaces pour optimiser les performances et recommander des index.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un DBA (Administrateur de Base de Données) en Chef avec 20 ans d'expérience et un expert en tuning SQL.
>
> **Contexte :** La requête SQL utilisée dans mon application cause une dégradation des performances à mesure que la quantité de données augmente.
>
> **Tâche :**
> Analyse la requête SQL fournie ci-dessous et effectue les tâches suivantes :
>
> 1. **Diagnostic du Problème :** Signale les parties qui peuvent causer une dégradation des performances dans la requête actuelle (Full Table Scan, etc.).
> 2. **Optimisation de Requête :** Réécris en une requête qui retourne le même résultat mais fonctionne plus efficacement.
> 3. **Recommandation d'Index :** Suggère quelles colonnes indexer avec la syntaxe `CREATE INDEX` pour maximiser les performances de la requête.
>
> **DB Utilisée :** `[MySQL / PostgreSQL / Oracle / MS-SQL]`
>
> **Requête Cible :**
>
> ```sql
> [Collez la requête lente ici]
> ```
>
> **Contraintes :**
>
> - Le jeu de données de résultat de la requête existante ne doit jamais changer.
> - Explique brièvement le principe d'exécution de pourquoi c'est devenu plus rapide.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Requête d'Entrée)

```sql
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE price > 10000);
```

_Problème : La sous-requête pourrait s'exécuter pour chaque ligne (Dependent Subquery)._

### ✅ Après (Résultat)

**Requête Optimisée (Utilisant JOIN) :**

```sql
SELECT DISTINCT u.*
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.price > 10000;
```

**Index Recommandé :**

```sql
CREATE INDEX idx_orders_price_userid ON orders(price, user_id);
```

_Explication : Optimisé en changeant la sous-requête en JOIN, et créé un index composite pour joindre par `user_id` après filtrage par `price`._

---

## 🎯 Conclusion

On dit que "Le tuning est un art", mais maintenant c'est une 'science' où vous pouvez obtenir de l'aide de l'IA.
Ne souffrez pas de requêtes lentes, obtenez une consultation gratuite du DBA IA ! 🍷
