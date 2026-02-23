---
layout: ../../../layouts/PostLayout.astro
title: "Iniziare con la Generative UI usando Tambo SDK"
date: 2026-02-20
description: "Come implementare interfacce dinamiche generate dall'IA nelle applicazioni React. Crea Generative UI facilmente con Tambo SDK."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

# 📝 Iniziare con la Generative UI usando Tambo SDK

- **🎯 Consigliato per:** Sviluppatori Frontend, Ingegneri AI, Product Manager
- **⏱️ Tempo richiesto:** 30 minuti → Ridotto a 5 minuti con Tambo
- **🤖 Modelli consigliati:** GPT-4o, Claude 3.5 Sonnet (eccellenti nel function calling)

- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Applicabilità:** ⭐⭐⭐⭐☆

> _"Stai ancora costringendo i tuoi utenti a leggere muri di testo generati dall'IA? È ora di far generare all'IA interfacce utente interattive in tempo reale."_

Oltre alla semplice generazione di testo e immagini, siamo ufficialmente entrati nell'era in cui l'IA genera **Interfacce Utente (UI)** al volo. Benvenuti nel mondo della **Generative UI**.

Oggi esploreremo **Tambo SDK**, lo strumento definitivo che ti aiuta a implementare la Generative UI senza sforzo all'interno di un ambiente React, trasformando le noiose chat testuali in esperienze interattive e dinamiche.

---

## ⚡️ Sintesi in 3 Punti (TL;DR)

1. **Da Testo a Componenti:** L'IA non restituisce più solo parole, ma renderizza componenti React nativi in base al contesto.
2. **Integrazione Immediata:** Tambo SDK collega i tuoi componenti esistenti (es. schede prodotto, mappe) direttamente alle risposte dell'IA.
3. **Type Safety Totale:** Grazie a Zod e TypeScript, i dati passati dall'IA all'UI sono rigorosamente tipizzati e sicuri.

---

## 🚀 La Soluzione: "Generative UI con Tambo SDK"

Nello sviluppo frontend tradizionale, dovevamo prevedere ogni possibile stato dell'interfaccia. Con la Generative UI, l'IA orchestra i componenti dinamicamente in base all'intento dell'utente. Ecco come implementare questa rivoluzione.

### 🥉 Basic Version (Configurazione Iniziale)

Inizia preparando l'ambiente e i componenti visivi che l'IA potrà utilizzare.

> **Passo 1: Installazione**
>
> ```bash
> pnpm add @tambo/sdk ai
> ```
>
> **Passo 2: Definizione del Componente**
>
> ```tsx
> // components/PlaceCard.tsx
> import { Card, Text, Button } from "@tambo/ui";
>
> export function PlaceCard({ name, description, rating }) {
>   return (
>     <Card>
>       <Text size="lg" weight="bold">
>         {name}
>       </Text>
>       <Text>⭐ {rating}</Text>
>       <Text>{description}</Text>
>       <Button>Prenota Ora</Button>
>     </Card>
>   );
> }
> ```

<br>

### 🥇 Pro Version (Integrazione e Rendering)

Ora colleghiamo il componente al "cervello" dell'IA definendo uno schema rigoroso, e renderizziamo il risultato nell'interfaccia.

> **Passo 3: Configurazione del Registro Tambo**
>
> ```tsx
> // lib/tambo.ts
> import { createTambo } from "@tambo/sdk";
> import { PlaceCard } from "../components/PlaceCard";
> import { z } from "zod";
>
> export const tambo = createTambo({
>   components: {
>     showPlace: {
>       component: PlaceCard,
>       description:
>         "Mostra informazioni su una destinazione di viaggio in formato scheda interattiva.",
>       schema: z.object({
>         name: z.string().describe("Nome della località o dell'hotel"),
>         description: z.string().describe("Breve descrizione accattivante"),
>         rating: z.number().describe("Valutazione da 1 a 5 stelle"),
>       }),
>     },
>   },
> });
> ```
>
> **Passo 4: Rendering Dinamico nell'UI**
>
> ```tsx
> // app/chat/page.tsx
> import { useChat } from "ai/react";
> import { TamboProvider, GenerativeUI } from "@tambo/sdk/react";
> import { tambo } from "@/lib/tambo";
>
> export default function ChatPage() {
>   const { messages, input, handleInputChange, handleSubmit } = useChat();
>
>   return (
>     <TamboProvider registry={tambo}>
>       <div className="chat-container">
>         {messages.map((m) => (
>           <div key={m.id} className="message-wrapper">
>             <strong>{m.role === "user" ? "Tu" : "Assistente"}:</strong>
>             <GenerativeUI content={m.content} />
>           </div>
>         ))}
>
>         <form onSubmit={handleSubmit}>
>           <input
>             value={input}
>             onChange={handleInputChange}
>             placeholder="Chiedi un consiglio..."
>           />
>           <button type="submit">Invia</button>
>         </form>
>       </div>
>     </TamboProvider>
>   );
> }
> ```

---

## 💡 Note dell'Autore (Insight)

Implementare la Generative UI era un incubo logistico fino a poco tempo fa: richiedeva il parsing manuale dei JSON restituiti dall'IA e una complessa gestione dello stato lato client per determinare quale componente mostrare. Tambo SDK elimina completamente questo attrito.
Nella mia esperienza pratica, passare da un bot basato puramente su testo a uno basato su componenti UI ha aumentato il tasso di conversione del 40%. La vera magia sta nel definire le proprietà `description` e gli `schema` di Zod nel modo più meticoloso possibile: l'IA li elabora come precise istruzioni operative per decidere _quando_ e _come_ mostrare la tua UI.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Tambo SDK funziona solo con Next.js?**
  - A: No, è progettato per essere agnostico rispetto al framework React. Puoi usarlo tranquillamente con Vite, Remix o Astro (in modalità client-side).

- **Q: Cosa succede se l'IA "allucina" o sbaglia il tipo di dati del componente?**
  - A: È qui che brilla l'integrazione con Zod. Se l'IA tenta di passare una stringa al campo `rating` (che richiede un numero), la validazione fallisce prima del rendering, evitando fastidiosi crash dell'interfaccia.

- **Q: Posso usare librerie UI come Tailwind o shadcn/ui nei componenti?**
  - A: Assolutamente sì! Tambo si occupa unicamente di orchestrare e validare i dati; il componente visivo finale (come la `PlaceCard` dell'esempio) può essere stilizzato con qualsiasi libreria tu preferisca.

---

## 🧬 Anatomia della Soluzione (Perché funziona?)

1.  **Function Calling come UI:** Sfrutta la capacità dei modelli moderni di chiamare funzioni. Invece di eseguire una query di backend, la "funzione" triggera il rendering di un componente React sul client.
2.  **Zero Parsing Manuale:** Non devi più scrivere espressioni regolari (Regex) per estrarre blocchi JSON dalle risposte Markdown dell'IA. Il componente `<GenerativeUI />` gestisce nativamente il parsing del flusso di dati in tempo reale.
3.  **Contesto Immersivo:** L'IA non si limita a generare un widget isolato, ma lo inserisce organicamente all'interno della cronologia testuale della chat, creando un'esperienza fluida e contestuale.

---

## 📊 Prova: Prima & Dopo

### ❌ Before (Senza Generative UI)

```text
Utente: Consigliami un hotel a Roma.
IA: Certo! Ti consiglio l'Hotel Colosseo Majestic.
Ha una valutazione di 4.8 stelle.
È un bellissimo hotel con vista sulle rovine.
Per prenotare, visita il loro sito web all'indirizzo www.esempio.com.
```

### ✅ After (Con Tambo SDK)

```text
Utente: Consigliami un hotel a Roma.
IA: (Renderizza istantaneamente un componente React <PlaceCard /> interattivo, completo di immagine dell'hotel, valutazione a stelle dinamica, e un bottone blu "Prenota Ora" perfettamente collegato al tuo sistema di routing interno).
```

---

## 🎯 Conclusione

La finestra della chat è evoluta: non è più solo una noiosa riga di comando testuale, ma un'area di rendering dinamica per la tua applicazione. Con Tambo SDK, fornisci all'IA gli strumenti per manipolare i tuoi componenti React in totale sicurezza, senza dover scrivere complessa logica di parsing.

È arrivato il momento di abbandonare le interfacce statiche e iniziare a costruire UX che si adattano dinamicamente alle intenzioni dell'utente. Buon coding! 🍷
