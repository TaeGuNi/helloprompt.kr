---
layout: /src/layouts/Layout.astro
title: "Lancez Juste du JSON et la Définition de Type TypeScript Apparaît ! (feat. Zod)"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "Un prompt qui convertit automatiquement des données JSON complexes en interfaces TypeScript ou schémas Zod."
tags: ["TypeScript", "Zod", "JSON", "Définition de Type", "Productivité"]
---

# 📝 Lancez Juste du JSON et la Définition de Type TypeScript Apparaît ! (feat. Zod)

**🎯 Recommandé pour :** Tout le monde
**⏱️ Temps requis :** 5 minutes
**🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"La réponse API backend est si complexe, quand est-ce que je vais faire toutes ces interfaces ?"_

Tapez-vous `interface User { ... }` un par un ?
Objets imbriqués, tableaux, valeurs optionnelles... c'est parfait pour faire des erreurs.
Copiez et collez simplement le JSON de réponse API. Il crée des définitions de type TypeScript parfaites ainsi que des schémas Zod pour la validation à l'exécution.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Convertir les données JSON en Interface/Type TypeScript
2. Générer un schéma Zod/Yup pour la validation à l'exécution
3. Gestion parfaite des structures imbriquées (Objet Imbriqué)

---

## 🚀 La Solution : « Maître des Types »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

**Rôle :** Tu es un Développeur Senior qui a maîtrisé l'écosystème TypeScript.
**Demande :** Crée un prompt qui convertit automatiquement des données JSON complexes en interfaces TypeScript ou schémas Zod.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un Développeur Senior qui a maîtrisé l'écosystème TypeScript.
>
> **Contexte :** J'ai reçu des données JSON d'une API externe, et j'ai besoin de définitions de type pour les utiliser en toute sécurité dans mon projet.
>
> **Tâche :**
>
> 1. Écris une **Interface TypeScript** basée sur les données JSON ci-dessous. (Nom en PascalCase)
> 2. Écris un **Schéma Zod** ensemble pour la validation à l'exécution.
> 3. Inclus le code pour inférer les types (`z.infer`) à partir du schéma Zod.
>
> **Données JSON :**
>
> ```text
> [Collez les données JSON ici]
> ```
>
> **Contraintes :**
>
> - Suppose que tous les champs sont requis par défaut, mais traite-les comme optionnels (`?`) uniquement si `null` est inclus.
> - Sépare les objets à l'intérieur des tableaux en interfaces séparées et définis-les.
> - Ajoute des commentaires JSDoc pour expliquer ce qu'est chaque champ (en inférant).

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (JSON d'Entrée)

```text
{
  "id": 1,
  "name": "Jay",
  "contact": {
    "email": "jay@test.com",
    "phone": null
  },
  "tags": ["developer", "admin"]
}
```

### ✅ Après (Résultat)

```typescript
import { z } from "zod";

// 1. Zod Schema Definition
export const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().nullable().optional(), // Null handling
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  contact: ContactSchema,
  tags: z.array(z.string()),
});

// 2. TypeScript Type Inference
/** User Information Interface */
export type User = z.infer<typeof UserSchema>;
export type Contact = z.infer<typeof ContactSchema>;
```

---

## 🎯 Conclusion

La définition de type est un dispositif de sécurité, mais le processus de fabrication ne devrait pas être douloureux.
Construisez un système de types sûr et robuste avec un seul copier-coller ! 🍷
