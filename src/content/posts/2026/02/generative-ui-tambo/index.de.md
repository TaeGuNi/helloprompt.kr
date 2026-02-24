---
layout: ../../../layouts/PostLayout.astro
title: " \"Einstieg in Generative UI mit dem Tambo SDK\""
date: 2026-02-20
description: " \"Wie man dynamische, KI-generierte Schnittstellen in React-Anwendungen implementiert. Erstellen Sie Generative UI mühelos mit dem Tambo SDK.\""
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

# 📝 Einstieg in Generative UI mit dem Tambo SDK

- **🎯 Zielgruppe:** Frontend-Entwickler, React-Ingenieure, UX/UI-Designer
- **⏱️ Zeitaufwand:** 60 Minuten → 10 Minuten (mit Tambo)
- **🤖 Empfohlene Modelle:** Claude 3.5 Sonnet, GPT-4o (für Function Calling)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐☆

> _"Sind Sie es leid, dass Ihre KI-Chatbots nur endlose Textwüsten ausspucken, anstatt interaktive Schnittstellen zu bieten?"_

Jenseits der einfachen Erstellung von Text und Bildern durch KI sind wir in eine Ära eingetreten, in der künstliche Intelligenz **Benutzeroberflächen (UI)** in Echtzeit generiert. Dies wird als **Generative UI** bezeichnet.

Heute werden wir das **Tambo SDK** erkunden – ein Tool, mit dem Sie Generative UI auf einfachste Weise in einer React-Umgebung implementieren können – und gemeinsam ein praktisches Beispiel erstellen.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Dynamische Generierung:** Die KI entscheidet spontan und kontextbasiert, welche UI-Komponenten am besten zur Nutzeranfrage passen.
2. **Nahtlose React-Integration:** Tambo verbindet KI-Antworten direkt mit Ihren UI-Komponenten, ohne dass Sie komplexes JSON manuell parsen müssen.
3. **Typsicherheit:** Native TypeScript-Unterstützung (via Zod) garantiert eine fehlerfreie Kommunikation zwischen dem LLM und Ihrem Frontend.

---

## 🚀 Lösung: Generative UI mit Tambo implementieren

Bei der klassischen UI-Entwicklung definieren Entwickler alle Bildschirme im Voraus. Mit Generative UI geben wir der KI Werkzeuge an die Hand, um dynamisch zu entscheiden, was gerendert wird.

### 🥉 Basic Version (Klassischer Text-Prompt)

Ohne ein Framework wie Tambo liefert die KI lediglich unstrukturierten Text.

> **Rolle:** Du bist ein Reiseberater.
> **Aufgabe:** Plane eine Reise zur Insel Jeju und nenne empfehlenswerte Orte.

<br>

### 🥇 Pro Version (Tambo SDK & Function Calling)

Mit Tambo weisen wir die KI an, strukturierte UI-Komponenten (als Tools) aufzurufen, um dem Nutzer ein interaktives Erlebnis zu bieten.

> **Rolle (Role):** Du bist ein interaktiver Frontend-Agent für Reiseplanungen.
>
> **Kontext (Context):**
>
> - Du hast Zugriff auf React-Komponenten, wie z.B. eine interaktive Karte (`PlaceCard`).
>
> **Aufgabe (Task):**
>
> 1. Analysiere die Nutzeranfrage ("Plane eine Reise zur Insel Jeju").
> 2. Wenn du einen Ort empfiehlst, rufe das Tool `showPlace` auf, anstatt reinen Text zu generieren.
> 3. Fülle die Schema-Parameter `[name]`, `[description]` und `[rating]` präzise aus.
>
> **Einschränkungen (Constraints):**
>
> - Generiere keine redundanten Textantworten, wenn die UI-Karte die Frage bereits vollständig beantwortet.

### 💻 Implementierung in 4 Schritten

Stellen Sie sich vor, Sie bauen einen Reiseassistenten. Anstatt nur Text zu erhalten, soll der Nutzer ansprechende UI-Karten sehen.

**1. Installation**
Installieren Sie zunächst die benötigten Pakete.

```bash
npm install @tambo/sdk ai zod
```

**2. Komponenten definieren**
Erstellen Sie die React-Komponente, die die KI nutzen soll.

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from "@tambo/ui";

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">
        {name}
      </Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>Buchen</Button>
    </Card>
  );
}
```

**3. Tambo-Registry konfigurieren**
Hier teilen Sie der KI mit, dass diese Komponente als "Tool" existiert. Tambo macht diesen Prozess extrem intuitiv.

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
        "Zeigt Informationen über einen Ort im interaktiven Kartenformat an.",
      schema: z.object({
        name: z.string().describe("Name des Ortes"),
        description: z.string().describe("Beschreibung des Ortes"),
        rating: z.number().describe("Bewertung (1-5)"),
      }),
    },
  },
});
```

**4. UI aus der KI-Antwort rendern**
Integrieren Sie Tambo in Ihren Chatbot, um die KI-Antwort direkt in native React-UI zu übersetzen.

```tsx
// app/chat/page.tsx
import { useChat } from "ai/react";
import { TamboProvider, GenerativeUI } from "@tambo/sdk/react";
import { tambo } from "@/lib/tambo";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <TamboProvider registry={tambo}>
      <div className="chat-container">
        {messages.map((m) => (
          <div key={m.id}>
            <strong>{m.role}:</strong>
            {/* Generierte UI wird hier nahtlos zusammen mit Text gerendert */}
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

---

## 💡 Anmerkung des Autors (Insight)

Generative UI ist der nächste logische Schritt nach simplen Chat-Interfaces. Meiner Erfahrung nach scheitern viele Frontend-Projekte daran, dass Entwickler mühsam versuchen, unstrukturierte JSON-Antworten von LLMs manuell zu parsen und in React-Komponenten zu pressen.

Das Tambo SDK löst genau diesen Schmerzpunkt. Es fungiert als intelligente Brücke zwischen dem "Function Calling" der KI und Ihrem React-Komponentenbaum. Wenn Sie komplexe Dashboards, E-Commerce-Berater oder dynamische Formulare bauen, erspart Ihnen dieser deklarative Ansatz wochenlange Entwicklungszeit. Die KI wird quasi zum Junior-Frontend-Entwickler, der Ihre vorgefertigten Lego-Bausteine in Echtzeit zusammensetzt.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Funktioniert das Tambo SDK nur mit React?**
  - A: Ja, Tambo ist aktuell stark auf das React-Ökosystem (inklusive Next.js) optimiert. Für andere Frameworks wie Vue oder Svelte müssen Sie auf die Basis-Funktionen des Vercel AI SDK zurückgreifen.

- **Q: Verursacht Function Calling (Generative UI) höhere API-Kosten?**
  - A: Der Unterschied ist marginal. Das Übermitteln der Zod-Schemata (als Tools) verbraucht anfangs etwas mehr Input-Tokens. Da die KI jedoch strukturierte JSON-Daten zurückgibt, anstatt lange Textabsätze zu generieren, können die Output-Kosten insgesamt sogar sinken.

- **Q: Kann die KI auch falsche oder nicht existierende Komponenten aufrufen?**
  - A: Nein. Durch die strikte Registrierung in der `createTambo`-Registry und die Validierung via Zod ist sichergestellt, dass die KI nur exakt die Komponenten und Datentypen verwendet, die Sie ausdrücklich freigegeben haben.

---

## 🧬 Anatomie des Prompts (Why it works?)

1. **Tool-Definition (Zod):** Indem wir das Zod-Schema übergeben, zwingen wir das LLM, strukturierte Daten (`name`, `description`, `rating`) zu liefern. Die KI versteht exakt, welche Typen die React-Komponente erwartet.
2. **Registry-Muster:** Durch das Registrieren der Komponente im SDK weiß die KI, dass sie nicht auf Text beschränkt ist. Sie wechselt vom "Schreib-Modus" in den "Werkzeug-Modus" und führt gezieltes Function Calling aus.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Before (Klassischer Text-Bot)

```text
Nutzer: Zeig mir ein Hotel in Berlin.

KI: Das Hotel Adlon Kempinski ist eine sehr gute Wahl. Es hat 5 Sterne und liegt direkt am Brandenburger Tor. Möchten Sie, dass ich es buche?
(Nutzer muss manuell nach dem Link suchen oder tippen "Ja, bitte buchen", was oft zu abbrechenden Flows führt.)
```

### ✅ After (Generative UI mit Tambo)

```text
Nutzer: Zeig mir ein Hotel in Berlin.

KI: [Rendert sofort eine interaktive React-Karte `<PlaceCard name="Hotel Adlon" rating={5} />`]
(Die Karte enthält ein schönes Bild und einen klickbaren "Buchen"-Button. Der Nutzer kann direkt in der UI interagieren, ohne weiter tippen zu müssen.)
```

---

## 🎯 Fazit

Mit dem Tambo SDK verwandeln Sie statische KI-Chats in dynamische, handlungsorientierte Applikationen. Das Chat-Fenster ist nicht mehr nur ein Raum zum Lesen – es wird zur vollwertigen, personalisierten Benutzeroberfläche.

Probieren Sie es in Ihrem nächsten React-Projekt aus und heben Sie die User Experience auf das nächste Level. Jetzt können Sie Feierabend machen! 🍷
