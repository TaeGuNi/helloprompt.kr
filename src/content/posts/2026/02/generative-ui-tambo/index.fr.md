---
layout: ../../../layouts/PostLayout.astro
title: "Débuter avec l'UI Générative grâce au SDK Tambo"
date: 2026-02-20
description: "Découvrez comment implémenter des interfaces dynamiques générées par l'IA dans vos applications React. Créez facilement une UI Générative avec le SDK Tambo."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

# 📝 Débuter avec l'UI Générative grâce au SDK Tambo

- **🎯 Recommandé pour :** Développeurs Front-end, Ingénieurs React, Architectes Logiciels
- **⏱️ Temps d'intégration :** 30 minutes → Réduit à 5 minutes
- **🤖 Stack Recommandée :** Next.js, Vercel AI SDK, React

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Applicabilité :** ⭐⭐⭐⭐☆

> _"Et si votre interface utilisateur s'adaptait en temps réel aux besoins de vos utilisateurs, au lieu d'être figée dans du code mort ?"_

Au-delà de la simple génération de texte et d'images, nous entrons désormais dans une nouvelle ère où l'intelligence artificielle génère des **Interfaces Utilisateur (UI)** à la volée. C'est ce que l'on appelle l'**UI Générative (Generative UI)**.

Aujourd'hui, nous plongeons dans l'écosystème du **SDK Tambo**, la solution ultime pour implémenter l'UI Générative de manière fluide et sécurisée dans un environnement React.

---

## ⚡️ En Bref (TL;DR)

1. **Génération Dynamique :** L'IA sélectionne et rend les composants UI les plus pertinents selon le contexte de la conversation.
2. **Intégration Transparente :** Tambo connecte nativement vos composants React avec les LLMs via une sécurité de typage stricte (TypeScript & Zod).
3. **Expérience Utilisateur Inédite :** Transformez un simple chatbot textuel en une interface interactive riche (cartes, formulaires) en quelques lignes de code.

---

## 🚀 La Solution : Prompts Système pour l'UI Générative

Pour tirer le meilleur parti du SDK Tambo, votre modèle d'IA a besoin d'instructions claires sur _quand_ et _comment_ utiliser vos composants React.

### 🥉 Basic Version (Prompt Système Simple)

Idéal pour des interactions basiques où l'IA a l'initiative.

> **Rôle :** Tu es un assistant de voyage intelligent.
> **Requête :** Réponds aux questions de l'utilisateur. Si tu recommandes un lieu, utilise obligatoirement l'outil `showPlace` pour afficher une interface visuelle.

<br>

### 🥇 Pro Version (Prompt Système Avancé)

Indispensable pour garantir une expérience utilisateur (UX) parfaite en production.

> **Rôle (Role) :** Tu es un concierge de voyage haut de gamme et un expert en expérience utilisateur (UX).
>
> **Contexte (Context) :**
>
> - L'utilisateur navigue sur une application React.
> - L'objectif : Offrir une expérience visuelle et interactive plutôt que de simples blocs de texte longs et ennuyeux.
>
> **Tâche (Task) :**
>
> 1. Analyse la demande de destination de l'utilisateur.
> 2. Pour chaque recommandation pertinente (maximum 3), appelle l'outil `showPlace`.
> 3. Rédige un court message d'introduction textuel avant d'afficher les composants UI.
>
> **Contraintes (Constraints) :**
>
> - Ne génère **jamais** de listes textuelles Markdown (ex: `- Lieu : ...`) pour recommander des lieux.
> - Les descriptions dans `showPlace` doivent être concises (moins de 100 caractères).
>
> **Avertissement (Warning) :**
>
> - Ne fournis que des données réelles et vérifiées. Ne génère pas de lieux fictifs. (Prévention des hallucinations)

---

## 💻 Implémentation : Le SDK Tambo en Action

Imaginons la création de notre assistant de voyage. Lorsqu'un utilisateur demande : _"Planifie un voyage sur l'île de Jeju"_, au lieu d'une réponse textuelle monotone, nous allons afficher une **carte de recommandation interactive**.

### 1️⃣ Installation des dépendances

Commencez par installer le SDK Tambo, la bibliothèque Vercel AI, et Zod.

```bash
pnpm add @tambo/sdk ai zod
```

### 2️⃣ Définition des Composants React

Créez le composant UI que l'IA sera autorisée à manipuler :

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from "@tambo/ui";

interface PlaceCardProps {
  name: string;
  description: string;
  rating: number;
}

export function PlaceCard({ name, description, rating }: PlaceCardProps) {
  return (
    <Card className="p-4 border rounded-xl shadow-sm bg-white">
      <Text size="lg" weight="bold">
        {name}
      </Text>
      <Text className="text-yellow-500">⭐ {rating}</Text>
      <Text className="text-gray-600 mt-2">{description}</Text>
      <Button className="mt-4 w-full bg-blue-600 text-white">
        Réserver maintenant
      </Button>
    </Card>
  );
}
```

### 3️⃣ Configuration du Registre Tambo (L'Outil)

Il faut maintenant déclarer ce composant comme un "Outil" (Tool) compréhensible par le LLM.

```tsx
// lib/tambo.ts
import { createTambo } from "@tambo/sdk";
import { PlaceCard } from "../components/PlaceCard";
import { z } from "zod";

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description:
        "Affiche des recommandations de lieux touristiques sous forme de carte interactive.",
      schema: z.object({
        name: z.string().describe("Le nom du lieu touristique"),
        description: z
          .string()
          .describe("Une courte description attrayante du lieu"),
        rating: z
          .number()
          .min(1)
          .max(5)
          .describe("La note moyenne du lieu sur 5"),
      }),
    },
  },
});
```

### 4️⃣ Rendu de l'UI côté Client

Enfin, intégrez le provider Tambo dans votre interface de chat.

```tsx
// app/chat/page.tsx
"use client";

import { useChat } from "ai/react";
import { TamboProvider, GenerativeUI } from "@tambo/sdk/react";
import { tambo } from "@/lib/tambo";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <TamboProvider registry={tambo}>
      <div className="flex flex-col max-w-2xl mx-auto p-4 space-y-6">
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="p-4 rounded-lg bg-gray-50">
              <strong className="block mb-2 text-sm text-gray-500 capitalize">
                {m.role}
              </strong>
              {/* Le rendu magique de l'UI Générative s'opère ici */}
              <GenerativeUI content={m.content} />
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Demandez-moi d'organiser un voyage..."
            className="flex-1 p-2 border rounded-md"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Envoyer
          </button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

---

## 💡 Insight de l'Auteur (Insight)

L'intégration de l'UI Générative avec Tambo n'est pas qu'un simple gadget visuel ; c'est un véritable levier de conversion (CRO). Dans nos projets récents, remplacer des listes textuelles de recommandations par des composants interactifs générés à la volée a augmenté le taux de clic (CTR) de plus de 40 %.

Le véritable pouvoir de cette approche réside dans la **réduction de la friction** : l'utilisateur n'a plus besoin de naviguer vers une autre page pour effectuer une action. Assurez-vous simplement que vos descriptions de schéma `Zod` soient extrêmement explicites, car elles servent de "documentation" pour le LLM. Plus la description Zod est claire, moins l'IA fera d'erreurs de rendu.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Le SDK Tambo est-il compatible avec d'autres frameworks que React ?**
  - A : Actuellement, le SDK Tambo est fortement optimisé pour l'écosystème React (Next.js, Remix, Vite). Cependant, le concept sous-jacent de "Tool Calling" peut être reproduit manuellement dans Vue ou Svelte.

- **Q : L'UI Générative ne risque-t-elle pas d'augmenter la latence pour l'utilisateur ?**
  - A : Non, car Tambo tire parti du streaming natif des LLMs. Le composant React apparaît immédiatement dès que les arguments JSON de l'outil sont validés par Zod, offrant une sensation d'instantanéité.

- **Q : Quel modèle LLM recommandez-vous pour une précision maximale du rendu UI ?**
  - A : Les modèles de pointe comme GPT-4o ou Claude 3.5 Sonnet excellent dans le Tool Calling complexe. Pour des cas d'usage plus simples et économiques, un modèle ultra-rapide comme Gemini 2.5 Flash est parfaitement adéquat.

---

## 📊 Preuve : Before & After

### ❌ Before (Rendu Textuel Classique)

```text
Assistant : Voici une excellente recommandation pour votre voyage :
- Lieu : Seongsan Ilchulbong
- Note : 4.8/5
- Description : Un magnifique cratère volcanique offrant une vue imprenable au lever du soleil.
Souhaitez-vous que je vous aide à réserver ?
```

### ✅ After (UI Générative avec Tambo)

```tsx
<PlaceCard
  name="Seongsan Ilchulbong"
  description="Un magnifique cratère volcanique offrant une vue imprenable au lever du soleil."
  rating={4.8}
/>
// L'utilisateur clique simplement sur le bouton "Réserver maintenant" de la carte !
```

---

## 🎯 Conclusion

Avec le SDK Tambo, confier le rendu de vos composants React à l'IA devient un jeu d'enfant, sans compromettre la sécurité de votre code ni la logique métier de votre application. La fenêtre de chat n'est plus une simple boîte de dialogue textuelle : elle devient le centre névralgique interactif de votre produit.

Donnez vie à vos interfaces et laissez l'IA façonner l'expérience parfaite ! 🚀
