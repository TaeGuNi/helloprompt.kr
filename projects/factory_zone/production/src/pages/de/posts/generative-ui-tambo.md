---
layout: ../../../layouts/PostLayout.astro
title: "Einstieg in Generative UI mit dem Tambo SDK"
date: 2024-05-20
description: "Wie man dynamische, von KI generierte Schnittstellen in React-Anwendungen implementiert. Erstellen Sie Generative UI einfach mit dem Tambo SDK."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

Jenseits der Erstellung von Text und Bildern durch KI sind wir nun in eine Ära eingetreten, in der KI **Benutzeroberflächen (UI)** in Echtzeit generiert. Dies wird als **Generative UI** bezeichnet.

Heute werden wir das **Tambo SDK** erkunden, ein Tool, mit dem Sie Generative UI am einfachsten in einer React-Umgebung implementieren können, und ein einfaches Beispiel erstellen.

## Was ist Generative UI?

Die traditionelle UI-Entwicklung beinhaltete, dass Entwickler alle Bildschirme und Komponenten im Voraus definierten und bedingtes Rendering basierend auf Daten verwendeten. Generative UI ist anders.

*   **Dynamische Generierung:** Die KI entscheidet und rendert die am besten geeigneten UI-Komponenten spontan, basierend auf der Benutzerabsicht oder dem Gesprächskontext.
*   **Personalisierung:** Sie kann für jeden Benutzer oder jede Situation völlig unterschiedliche, maßgeschneiderte Schnittstellen bereitstellen.
*   **Flexibilität:** Sie kann nicht definierte Szenarien basierend auf dem Urteilsvermögen der KI bewältigen.

## Warum Tambo?

Tambo ist ein SDK, mit dem Sie diese Generative UI ohne komplexe Konfiguration sofort in Ihre Anwendung integrieren können.

1.  **React-Freundlich:** Perfekt kompatibel mit dem React-Komponentensystem.
2.  **Typsicherheit:** Native TypeScript-Unterstützung für sichere Entwicklung.
3.  **Einfache Integration:** Integriert sich leicht in wichtige KI-Bibliotheken wie das Vercel AI SDK.

## Erste Schritte mit dem Tambo SDK

Stellen Sie sich vor, Sie erstellen einen einfachen Reiseplanungs-Assistenten-Chatbot. Wenn ein Benutzer sagt: "Plane eine Reise zur Insel Jeju", möchten Sie nicht nur mit Text antworten, sondern eine reichhaltige UI wie **Karten, Flugbuchungskarten und Hotellisten** anzeigen.

### 1. Installation

Installieren Sie zuerst das Paket.

```bash
npm install @tambo/sdk ai
```

### 2. Komponenten definieren

Definieren Sie die UI-Komponenten, die die KI verwenden kann. Zum Beispiel eine Kartenkomponente zur Anzeige empfohlener Orte.

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from '@tambo/ui';

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">{name}</Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>Buchen</Button>
    </Card>
  );
}
```

### 3. Tambo-Registry konfigurieren

Jetzt müssen Sie der KI diese Komponente als "Tool" mitteilen. Tambo macht diesen Prozess sehr intuitiv.

```tsx
// lib/tambo.ts
import { createTambo } from '@tambo/sdk';
import { PlaceCard } from '../components/PlaceCard';
import { z } from 'zod';

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: 'Zeigt Informationen über einen Ort im Kartenformat an.',
      schema: z.object({
        name: z.string().describe('Name des Ortes'),
        description: z.string().describe('Beschreibung des Ortes'),
        rating: z.number().describe('Bewertung (1-5)'),
      }),
    },
  },
});
```

### 4. UI aus KI-Antwort rendern

Verwenden Sie schließlich Tambo in Ihrer Chatbot-Oberfläche, um die Antwort der KI in UI umzuwandeln.

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
            {/* Generierte UI wird hier zusammen mit Textnachrichten gerendert */}
            <GenerativeUI content={m.content} />
          </div>
        ))}
        
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>Senden</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## Fazit

Mit dem Tambo SDK können Sie der KI erlauben, Ihre React-Komponenten ohne komplexe Logik frei zu manipulieren. Das Chat-Fenster ist nicht mehr nur ein Raum für Text. Bringen Sie jetzt die Funktionen Ihrer App in das Gespräch.

Weitere Details finden Sie in der [Offiziellen Tambo-Dokumentation](https://tambo.dev).
