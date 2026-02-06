---
layout: /src/layouts/Layout.astro
title: "Documentation API Ennuyeuse, Swagger Apparaît avec Juste du Code"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "Un prompt qui convertit automatiquement le code API en spécifications OpenAPI (Swagger) ou en documents Markdown lorsque vous le collez."
tags: ["API", "Documentation", "Swagger", "OpenAPI", "Backend"]
---

# 📝 Documentation API Ennuyeuse, Swagger Apparaît avec Juste du Code

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Si vous avez fini de développer, vous devriez aussi nous donner la documentation, non ? (Développeur Frontend)"_
_"Ah... Un instant. (Je n'ai pas encore écrit une seule ligne)"_

Est-ce que je suis le seul à détester écrire de la documentation plus que le développement d'API ?
Types de paramètres, statut requis, exemples de réponse... les écrire un par un fait s'écrouler la réalité.
Maintenant, copiez et collez simplement le code du contrôleur. L'IA le convertira en une spécification Swagger propre.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Extraire des spécifications précises de paramètres/réponses basées sur le code
2. Génération automatique du format OpenAPI (Swagger) YAML/JSON
3. Inclut des explications faciles à comprendre et des exemples de données

---

## 🚀 La Solution : « Générateur de Documents API »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un rédacteur technique méticuleux et un développeur backend.
> **Demande :** Un prompt qui convertit automatiquement le code API en spécifications OpenAPI (Swagger) ou en documents Markdown lorsque vous le collez.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un rédacteur technique méticuleux et un développeur backend.
>
> **Contexte :** J'ai du code API que j'ai développé, et je dois le documenter pour le partager avec les développeurs frontend.
>
> **Tâche :**
> Analyse le code API fourni ci-dessous et écris la documentation au format **[Sélectionner le Format Souhaité : OpenAPI 3.0 YAML / Tableau Markdown]**.
> Doit inclure les contenus suivants :
>
> 1. **Endpoint & Method :** Chemin URL et méthode HTTP
> 2. **Summary :** Bref résumé de ce que fait l'API
> 3. **Request Parameters :** Paramètres Body, Query, Path (incluant type, statut requis, description)
> 4. **Response :** Structure de réponse et JSON d'exemple pour succès (200) et échec (400, 500, etc.)
>
> **Code :**
>
> ```
> [Collez le code du contrôleur/routeur ici]
> ```
>
> **Contraintes :**
>
> - Spécifie clairement les types de données (String, Integer, etc.).
> - Remplis les exemples de réponse (Example Value) avec des données réalistes.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Code d'Entrée - Node.js Express)

```javascript
app.post("/users", (req, res) => {
  const { username, email } = req.body;
  if (!email) return res.status(400).send({ msg: "no email" });
  // Logique de sauvegarde DB...
  res.status(201).send({ id: 1, username, email });
});
```

### ✅ Après (Résultat - Exemple Markdown)

### **POST /users**

API d'inscription utilisateur

**Request Body**
| Nom du Champ | Type | Requis | Description |
|---|---|---|---|
| `username` | String | O | Surnom Utilisateur |
| `email` | String | O | Email Utilisateur (Unique) |

**Response (201 Created)**

```json
{
  "id": 1,
  "username": "jay_dev",
  "email": "jay@example.com"
}
```

---

## 🎯 Conclusion

La documentation n'est pas la fin du développement mais le début de la collaboration.
Mais ne dépensez pas trop d'énergie pour ce début. Laissez-le à l'IA et concentrez-vous sur la logique métier ! 🍷
