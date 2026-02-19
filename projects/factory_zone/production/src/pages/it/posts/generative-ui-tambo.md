---
layout: ../../../layouts/PostLayout.astro
title: "Iniziare con la Generative UI usando Tambo SDK"
date: 2024-05-20
description: "Come implementare interfacce dinamiche generate dall'IA nelle applicazioni React. Crea Generative UI facilmente con Tambo SDK."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

Oltre alla generazione di testo e immagini da parte dell'IA, siamo ora entrati nell'era in cui l'IA genera **Interfacce Utente (UI)** in tempo reale. Questa è chiamata **Generative UI**.

Oggi esploreremo **Tambo SDK**, uno strumento che ti aiuta a implementare la Generative UI nel modo più semplice in un ambiente React, e costruiremo un semplice esempio.

## Cos'è la Generative UI?

Lo sviluppo tradizionale dell'UI prevedeva che gli sviluppatori definissero tutte le schermate e i componenti in anticipo e utilizzassero il rendering condizionale basato sui dati. La Generative UI è diversa.

*   **Generazione Dinamica:** L'IA decide e renderizza i componenti UI più appropriati al volo, in base all'intento dell'utente o al contesto della conversazione.
*   **Personalizzazione:** Può fornire interfacce personalizzate completamente diverse per ogni utente o situazione.
*   **Flessibilità:** Può gestire scenari non definiti basandosi sul giudizio dell'IA.

## Perché Tambo?

Tambo è un SDK che ti permette di integrare questa Generative UI nella tua applicazione immediatamente senza configurazioni complesse.

1.  **React Friendly:** Perfettamente compatibile con il sistema di componenti React.
2.  **Type Safety:** Supporto nativo TypeScript per uno sviluppo sicuro.
3.  **Facile Integrazione:** Si integra facilmente con le principali librerie IA come Vercel AI SDK.

## Primi passi con Tambo SDK

Immagina di costruire un semplice chatbot assistente per la pianificazione dei viaggi. Quando un utente dice "Pianifica un viaggio all'isola di Jeju", invece di rispondere solo con il testo, vuoi mostrare un'UI ricca come **mappe, schede di prenotazione voli ed elenchi di hotel**.

### 1. Installazione

Per prima cosa, installa il pacchetto.

```bash
npm install @tambo/sdk ai
```

### 2. Definire i Componenti

Definisci i componenti UI che l'IA può utilizzare. Ad esempio, un componente scheda per mostrare i luoghi consigliati.

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from '@tambo/ui';

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">{name}</Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>Prenota</Button>
    </Card>
  );
}
```

### 3. Configurare il Registro Tambo

Ora devi informare l'IA di questo componente come "Strumento". Tambo rende questo processo molto intuitivo.

```tsx
// lib/tambo.ts
import { createTambo } from '@tambo/sdk';
import { PlaceCard } from '../components/PlaceCard';
import { z } from 'zod';

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: 'Mostra informazioni su un luogo in formato scheda.',
      schema: z.object({
        name: z.string().describe('Nome del luogo'),
        description: z.string().describe('Descrizione del luogo'),
        rating: z.number().describe('Valutazione (1-5)'),
      }),
    },
  },
});
```

### 4. Rendering dell'UI dalla Risposta dell'IA

Infine, usa Tambo nell'interfaccia del tuo chatbot per convertire la risposta dell'IA in UI.

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
            {/* L'UI generata viene renderizzata qui insieme ai messaggi di testo */}
            <GenerativeUI content={m.content} />
          </div>
        ))}
        
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>Invia</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## Conclusione

Con Tambo SDK, puoi lasciare che l'IA manipoli liberamente i tuoi componenti React senza logica complessa. La finestra della chat non è più solo uno spazio per il testo. Porta subito le funzionalità della tua app nella conversazione.

Per maggiori dettagli, consulta la [Documentazione Ufficiale Tambo](https://tambo.dev).
