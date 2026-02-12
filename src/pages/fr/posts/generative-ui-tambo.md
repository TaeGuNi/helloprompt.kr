---
layout: ../../../layouts/PostLayout.astro
title: "Débuter avec l'UI Générative grâce au SDK Tambo"
date: 2024-05-20
description: "Comment implémenter des interfaces dynamiques générées par l'IA dans les applications React. Créez facilement une UI Générative avec le SDK Tambo."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

Au-delà de la génération de texte et d'images par l'IA, nous sommes maintenant entrés dans l'ère où l'IA génère des **Interfaces Utilisateur (UI)** en temps réel. C'est ce qu'on appelle l'**UI Générative (Generative UI)**.

Aujourd'hui, nous allons découvrir le **SDK Tambo**, un outil qui vous aide à implémenter l'UI Générative le plus facilement possible dans un environnement React, et construire un exemple simple.

## Qu'est-ce que l'UI Générative ?

Le développement d'UI traditionnel impliquait que les développeurs définissent tous les écrans et composants à l'avance et utilisent un rendu conditionnel basé sur les données. L'UI Générative est différente.

*   **Génération Dynamique :** L'IA décide et effectue le rendu des composants d'UI les plus appropriés à la volée, en fonction de l'intention de l'utilisateur ou du contexte de la conversation.
*   **Personnalisation :** Elle peut fournir des interfaces personnalisées complètement différentes pour chaque utilisateur ou situation.
*   **Flexibilité :** Elle peut gérer des scénarios non définis en se basant sur le jugement de l'IA.

## Pourquoi Tambo ?

Tambo est un SDK qui vous permet d'intégrer cette UI Générative dans votre application immédiatement sans configuration complexe.

1.  **Compatible React :** Parfaitement compatible avec le système de composants React.
2.  **Sécurité de Typage :** Support natif de TypeScript pour un développement sécurisé.
3.  **Intégration Facile :** S'intègre facilement avec les principales bibliothèques d'IA comme Vercel AI SDK.

## Commencer avec le SDK Tambo

Imaginez construire un simple chatbot assistant de planification de voyage. Lorsqu'un utilisateur dit "Planifie un voyage sur l'île de Jeju", au lieu de simplement répondre par du texte, vous voulez afficher une UI riche comme des **cartes, des fiches de réservation de vol et des listes d'hôtels**.

### 1. Installation

Tout d'abord, installez le paquet.

```bash
npm install @tambo/sdk ai
```

### 2. Définir les Composants

Définissez les composants d'UI que l'IA peut utiliser. Par exemple, un composant carte pour afficher les lieux recommandés.

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from '@tambo/ui';

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">{name}</Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>Réserver</Button>
    </Card>
  );
}
```

### 3. Configurer le Registre Tambo

Maintenant, vous devez informer l'IA de ce composant en tant qu'"Outil". Tambo rend ce processus très intuitif.

```tsx
// lib/tambo.ts
import { createTambo } from '@tambo/sdk';
import { PlaceCard } from '../components/PlaceCard';
import { z } from 'zod';

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: 'Affiche des informations sur un lieu sous forme de carte.',
      schema: z.object({
        name: z.string().describe('Nom du lieu'),
        description: z.string().describe('Description du lieu'),
        rating: z.number().describe('Note (1-5)'),
      }),
    },
  },
});
```

### 4. Rendu de l'UI depuis la Réponse de l'IA

Enfin, utilisez Tambo dans l'interface de votre chatbot pour convertir la réponse de l'IA en UI.

```tsx
// app/chat/page.tsx
import { useChat } from 'ai/react';
import { TamboProvider, GenerativeUI } from '@tambo/sdk/react';
import { tambo } from '@/lib/tambo';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <TamboProvider registry={tambo}>
      <div className="chat-container">
        {messages.map((m) => (
          <div key={m.id}>
            <strong>{m.role}:</strong>
            {/* L'UI générée est rendue ici aux côtés des messages texte */}
            <GenerativeUI content={m.content} />
          </div>
        ))}
        
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>Envoyer</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## Conclusion

Avec le SDK Tambo, vous pouvez laisser l'IA manipuler librement vos composants React sans logique complexe. La fenêtre de chat n'est plus seulement un espace pour le texte. Apportez les fonctionnalités de votre application dans la conversation dès maintenant.

Pour plus de détails, consultez la [Documentation Officielle de Tambo](https://tambo.dev).
