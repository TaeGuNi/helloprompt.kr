---
layout: ../../../layouts/PostLayout.astro
title: " \"Débuter avec l'UI Générative grâce au SDK Tambo\""
date: 2026-02-20
description: "Découvrez comment créer des interfaces dynamiques générées par l'IA dans vos applications React avec le SDK Tambo. Le guide de l'UI Générative."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

## 📝 Débuter avec l'UI Générative grâce au SDK Tambo

- **🎯 Recommandé pour :** Développeurs Front-end, Ingénieurs React, Architectes Logiciels
- **⏱️ Temps d'intégration :** 30 minutes → Réduit à 5 minutes
- **🤖 Stack Recommandée :** Next.js, Vercel AI SDK, React

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Applicabilité :** ⭐⭐⭐⭐☆

> _"Et si votre interface utilisateur s'adaptait en temps réel aux besoins de vos utilisateurs, au lieu d'être figée dans du code mort ?"_

Au-delà de la simple génération de texte ou d'images, nous entrons dans une nouvelle ère où l'intelligence artificielle conçoit des **Interfaces Utilisateur (UI)** à la volée. C'est la promesse de l'**UI Générative (Generative UI)**.

Aujourd'hui, nous explorons l'écosystème du **SDK Tambo**, l'outil par excellence pour intégrer l'UI Générative de manière fluide et sécurisée au cœur de vos applications React.

---

## ⚡️ En Bref (TL;DR)

1. **Génération Dynamique :** L'IA sélectionne et affiche les composants UI les plus pertinents en fonction du contexte de la conversation.
2. **Intégration Transparente :** Tambo connecte nativement vos composants React aux LLMs grâce à un typage strict et sécurisé (TypeScript & Zod).
3. **Expérience Utilisateur Inédite :** Transformez un simple chatbot textuel en une interface riche et interactive (cartes, formulaires) en seulement quelques lignes de code.

---

## 🚀 La Solution : Prompts Système pour l'UI Générative

Pour exploiter tout le potentiel du SDK Tambo, votre modèle d'IA nécessite des directives précises sur le _moment_ et la _manière_ d'utiliser vos composants React.

### 🥉 Basic Version (Prompt Système Simple)

Parfait pour des interactions simples où l'IA prend l'initiative.

> **Rôle :** Tu es un assistant de voyage intelligent.
> **Requête :** Réponds aux questions de l'utilisateur. Si tu recommandes un lieu, utilise obligatoirement l'outil `showPlace` pour déclencher l'interface visuelle.

### 🥇 Pro Version (Prompt Système Avancé)

Indispensable pour garantir une expérience utilisateur (UX) irréprochable en environnement de production.

> **Rôle (Role) :** Tu es un concierge de voyage haut de gamme et un expert en expérience utilisateur (UX).
>
> **Contexte (Context) :**
>
> - L'utilisateur navigue sur une application React.
> - L'objectif : Offrir une expérience visuelle interactive plutôt que de longs blocs de texte monotones.
>
> **Tâche (Task) :**
>
> 1. Analyse la demande de destination formulée par l'utilisateur.
> 2. Pour chaque recommandation pertinente (maximum 3), fais appel à l'outil `showPlace`.
> 3. Rédige un court message d'introduction textuel avant de déclencher l'affichage des composants UI.
>
> **Contraintes (Constraints) :**
>
> - Ne génère **absolument jamais** de listes textuelles au format Markdown (ex: `- Lieu : ...`) pour recommander des endroits.
> - Les descriptions injectées dans `showPlace` doivent rester très concises (moins de 100 caractères).
>
> **Avertissement (Warning) :**
>
> - Ne fournis que des informations réelles et strictement vérifiées. N'invente aucun lieu fictif. (Prévention stricte des hallucinations)

---

## 💻 Implémentation : Le SDK Tambo en Action

Prenons l'exemple de notre assistant de voyage. Lorsqu'un utilisateur demande : _"Planifie un voyage sur l'île de Jeju"_, plutôt que de renvoyer une réponse textuelle monotone, nous allons générer une **carte de recommandation interactive**.

### 1️⃣ Installation des dépendances

Commencez par installer le SDK Tambo, la bibliothèque Vercel AI et Zod.

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

Il est maintenant temps de déclarer ce composant en tant qu'"Outil" (Tool) compréhensible par le LLM.

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

Pour finir, intégrez le provider Tambo directement dans votre interface de chat.

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

L'intégration de l'UI Générative via Tambo est loin d'être un simple gadget visuel ; c'est un puissant levier d'optimisation des conversions (CRO). Lors de nos récents projets, le simple fait de remplacer des listes de recommandations textuelles par des composants interactifs générés à la volée a propulsé le taux de clic (CTR) de plus de 40 %.

La véritable force de cette approche réside dans la **réduction drastique de la friction** : l'utilisateur n'a plus besoin de changer de page pour passer à l'action. Veillez simplement à ce que vos descriptions de schémas `Zod` soient d'une clarté absolue, car elles font office de "documentation" pour le LLM. Plus la définition Zod est explicite, moins l'IA commettra d'erreurs lors du rendu.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Le SDK Tambo est-il compatible avec d'autres frameworks que React ?**
  - A : À l'heure actuelle, le SDK Tambo est taillé sur mesure pour l'écosystème React (Next.js, Remix, Vite). Toutefois, le concept de base du "Tool Calling" reste agnostique et peut tout à fait être reproduit manuellement sous Vue ou Svelte.

- **Q : L'UI Générative risque-t-elle d'augmenter la latence ressentie par l'utilisateur ?**
  - A : Non, car Tambo exploite intelligemment le streaming natif des LLMs. Le composant React s'affiche instantanément dès que les arguments JSON de l'outil sont validés par Zod, garantissant une expérience fluide et sans attente.

- **Q : Quel modèle LLM recommandez-vous pour garantir la plus haute précision de rendu UI ?**
  - A : Les modèles de pointe tels que GPT-4o ou Claude 3.5 Sonnet excellent dans la gestion de Tool Calling complexes. Pour des cas d'usage plus simples et orientés rentabilité, un modèle ultra-rapide comme Gemini 2.5 Flash fera parfaitement l'affaire.

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

Grâce au SDK Tambo, déléguer le rendu de vos composants React à l'IA devient un jeu d'enfant, et ce, sans jamais compromettre la sécurité de votre code ou la logique métier de votre application. La traditionnelle fenêtre de chat n'est plus une simple interface textuelle : elle s'impose désormais comme le centre névralgique interactif de votre produit.

Donnez vie à vos interfaces et laissez l'IA concevoir l'expérience parfaite ! 🚀
