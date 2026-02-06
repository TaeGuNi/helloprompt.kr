---
layout: /src/layouts/Layout.astro
title: "Composant Frontend, Décrivez Juste le Design et le Code est Fait"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codage/Développement"
description: "Un prompt qui génère rapidement des composants UI avec la stack technologique souhaitée comme React, Vue, Tailwind CSS, etc."
tags: ["Frontend", "React", "Vue", "Tailwind", "Composant UI"]
---

# 📝 Composant Frontend, Décrivez Juste le Design et le Code est Fait

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Combien de fois dois-je envelopper avec div pour faire une carte UI ?"_

Le processus de passage de l'ébauche de design au code est souvent une tâche répétitive simple.
"Image à gauche, titre en gras, 2 boutons d'étiquette en dessous..."
Si vous l'expliquez avec des mots comme ça, un code de composant parfaitement stylisé apparaît.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Générer du code en décrivant la forme UI souhaitée en texte
2. Support des dernières stacks comme React/Vue + Tailwind CSS
3. Prise en compte du Design Responsif et de l'Accessibilité (A11y)

---

## 🚀 La Solution : « Usine de Composants UI »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un designer UI/UX sensuel et un développeur frontend qualifié.
> **Demande :** Génère rapidement des composants UI avec la stack technologique souhaitée comme React, Vue, Tailwind CSS, etc.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et collez-le dans ChatGPT ou Claude.

> **Rôle :** Tu es un designer UI/UX sensuel et un développeur frontend qualifié.
>
> **Contexte :** J'ai besoin d'un nouveau composant UI pour mon application web. Il doit être un design moderne et propre.
>
> **Tâche :**
>
> 1. Écris le code du composant UI qui correspond à la description ci-dessous.
> 2. Utilise `[React / Vue / Svelte]` et `[Tailwind CSS / Styled Components / CSS Modules]` pour la stack technologique.
> 3. Applique un design **Responsif** qui rend bien sur mobile et bureau.
> 4. Si des icônes sont nécessaires, suppose l'utilisation de bibliothèques virtuelles comme `lucide-react` ou `font-awesome`.
>
> **Description du Composant :**
> `[Décrivez l'UI que vous voulez faire. ex. : Carte de profil - inclut image d'avatar ronde, nom, emploi, bouton suivre]`
>
> **Contraintes :**
>
> - Insère de manière appropriée les attributs ARIA en tenant compte de l'Accessibilité.
> - Écris le code pour qu'il puisse être copié et utilisé comme un seul fichier.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Description d'Entrée)

"Fais une carte produit. Photo du produit en haut, nom du produit et prix en dessous. Et mets un bouton ajouter au panier et un bouton cœur."

### ✅ Après (Résultat - Exemple React + Tailwind)

```jsx
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-lg font-semibold">${price}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
          <ShoppingCart size={18} /> Ajouter
        </button>
        <button
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Liste de souhaits"
        >
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
```

---

## 🎯 Conclusion

Ne passez pas de temps à dessiner des écrans.
Laissez le squelette à l'IA, et concentrez-vous juste sur la connexion des données et insuffler la vie. 🍷
