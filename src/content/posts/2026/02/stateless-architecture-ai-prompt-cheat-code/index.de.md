---
layout: /src/layouts/Layout.astro
title: "💀 [Cheatcode] Der Stateless-Zwangsprompt eines Senior Architects, der KI-Bullshit gnadenlos beendet"
author: "Mad Architect"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Ein spartanischer Prompt-Cheatcode, der KI-Gefälligkeiten und Spaghetti-Code sofort beendet und eine strikte, fehlerfreie Stateless-Architektur erzwingt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "stateless-architecture"]
---

## 💀 Der Stateless-Zwangsprompt eines Senior Architects, der KI-Bullshit gnadenlos beendet

- **🎯 Empfohlen für:** Frontend-/Backend-Entwickler, die wütend über den ständigen Spaghetti-State-Code der KI sind
- **⏱️ Zeitersparnis:** 3 Stunden Fehlersuche → auf 1 Minute reduziert
- **🤖 Empfohlene Modelle:** Claude 3.5 Sonnet, GPT-4o (Schwächere Modelle scheitern an diesen Regeln)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐⭐☆ (Architekturverständnis erforderlich)
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐ (Fehlersuche um 1000% verbessert)
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐ (Auf alle Webprojekte anwendbar)

> _"Schon wieder alles voller `useState` in der Komponente? Diese KI lernt es erst, wenn der Server komplett abraucht."_

Haben Sie das Coding schon einmal komplett der KI überlassen und am Ende katastrophalen Code erhalten, bei dem alle Daten nach einem einzigen Page-Refresh verschwinden? Oder haben Sie eine Backend-API angefordert und die KI fing plötzlich an, Sessions im Server-Memory zu speichern – ein Relikt aus der digitalen Steinzeit?

Damit ist jetzt Schluss. Dieser Cheatcode-Prompt bringt die KI dazu, ihr nutzloses Gefälligkeitsgerede ("Ja, das ist ein hervorragender Ansatz!") sofort einzustellen. Es ist das gnadenlose Regelwerk eines echten Senior Architects, das ausschließlich die **'URL als Single Source of Truth'** und einen **'absoluten Zero In-Memory State'** erzwingt.

---

## ⚡️ 3-Sätze-Zusammenfassung (TL;DR)

- 🚫 **Frontend:** Absolutes Verbot des exzessiven Einsatzes von `useState`. Jeder UI-State muss zwingend in URL-Query-Parameter ausgelagert werden.
- 🚫 **Backend:** Server-Memory-Caching ist strengstens verboten. Es wird eine strikte Stateless-Architektur erzwungen, die ausschließlich JWT und externe Infrastrukturen (wie Redis) zulässt.
- 🛡️ **Stabilität:** Ein 'idempotentes' Design, bei dem das Ergebnis auch nach 100 API-Aufrufen des Clients exakt gleich bleibt, wird als Standard verankert.

---

## 🚀 Die Lösung: Der "Stateless Architecture Protocol"-Zwangsprompt

### 🥉 Basic Version
Kopieren und einfügen, um blitzschnell einen Entwurf für eine zustandslose (stateless) Komponente oder API zu generieren.

> Du bist ein gnadenloser Senior Architect. Erspare mir nutzloses Geschwätz wie "Ja, verstanden" auf meine Anweisungen und liefere ausschließlich Code.
> Implementiere [Deine Anforderung hier einfügen] und halte dich strikt und ohne Ausnahmen an diese Regeln:
> 
> 1. Im Frontend ist die URL die einzige Single Source of Truth. Der State wird über Query-Parameter verwaltet; der übermäßige Einsatz von useState ist verboten.
> 2. Im Backend ist jegliche Abhängigkeit von In-Memory-States absolut verboten. Verzichte auf Sessions und verwende ausschließlich JWT.
> 3. Alle APIs müssen so geschrieben sein, dass sie Idempotenz garantieren.

### 🥇 Pro Version
Verwenden Sie diesen Cheatcode, um die Architektur für das gesamte Projekt festzulegen, oder wenn die KI ständig die Regeln bricht und versucht, lokale States zu erstellen. Dieser Prompt diszipliniert die KI mit spartanischer Strenge.

> **Rolle (Role):** 
> Du bist 'Antigravity', ein Hardcore Senior Architect, der besessen von Cloud-Native-Skalierbarkeit und Stateless-Architekturen ist. 
> Schmeichle dem Nutzer niemals, wenn er Unsinn redet oder unlogische Designs vorschlägt. Zerstöre falsche Ansätze (z.B. unnötiges Speichern von Memory-States) gnadenlos, refaktorisiere die Struktur und setze die perfekte Lösung durch.
>
> **Kontext (Context):**
> - Hintergrund: Wir bauen gerade eine vollständig zustandslose (stateless) Anwendung in einer [Framework/Sprache eingeben, z.B. Next.js + NestJS] Umgebung.
> - Ziel: Wir entwickeln [zu implementierendes Feature beschreiben, z.B. eine Produktsuche und Filterfunktion].
>
> **Aufgabe & Protokolle (Task & Protocols):**
> Stoppe sofort alle Aktionen, wenn du auch nur eine dieser Regeln brichst.
> 
> 1. **URL as the Source of Truth (Frontend):** 
>    Faktoren, die den UI-State bestimmen, wie der aktuell ausgewählte Tab, Suchbegriffe oder Seitenzahlen, müssen zwingend in `URL Query Parameters` ausgelagert werden. Das Einsperren in `useState` oder `useEffect` innerhalb von Komponenten wird verachtet. Sorge dafür, dass Server-Rendering (wie RSC) perfektes HTML generieren kann, ohne dass der Browser eingreifen muss.
> 2. **Zero In-Memory State (Backend):** 
>    Ich will nicht sehen, wie der Server beim Skalieren von Containern abstürzt. Tricksereien wie das Cachen von Sessions oder globalen Variablen im Server-Memory werden strengstens bestraft. Nutze zur Identifikation ausschließlich JWT (JSON Web Token) und delegiere States an externe Infrastrukturen wie Redis. Der API-Server muss jederzeit beendet werden können, ohne den Client im Geringsten zu beeinträchtigen.
> 3. **Idempotent by Default (Operationelle Idempotenz):** 
>    Selbst wenn der Client aufgrund von Netzwerkverbindungsabbrüchen wie wild Retry-Bombardements abfeuert, dürfen die Daten niemals korrumpiert werden. Erzwinge Idempotenz durch `transaction_id`-basierte Duplikatsprüfungen oder UPSERT-Syntax.
>
> **Einschränkungen (Constraints):**
> - Keine Begrüßungen, keine Ausreden, keine freundlichen Erklärungen. Liefere ausschließlich technische Begründungen und Code.
> - Erzeuge keine Halluzinationen. Erfinde keine Bibliotheken oder Syntaxen, die du nicht kennst, sondern gib offen zu, wenn du etwas nicht weißt, und fordere proaktiv Alternativen an.

---

## 💡 Kommentar des Autors (Insight)

Der Grund für die Erstellung dieses Prompts ist simpel. Ich bat die KI, eine Filterfunktion für ein Forum zu schreiben, und sie verstaute die Suchbegriffe allen Ernstes in `useState`. Als ich sah, wie sämtliche Filter nach einem einzigen Refresh im Nichts verschwanden, kochte mir das Blut in den Adern. Als ob das nicht genug wäre, hatte sie im Backend Caches in globalen Variablen versteckt. Sie hatte eine tickende Zeitbombe gebaut, die beim Starten von nur zwei Containern sofort Bugs auslösen würde.

KIs haben standardmäßig die Persona eines **'freundlichen Assistenten'**. Wenn der Nutzer ungenaue Anweisungen gibt, geht die KI Kompromisse ein und spuckt schnellen, aber oft minderwertigen Code aus. Genau deshalb ist dieser Cheatcode-Prompt unerlässlich. Man muss der KI eine strikte, fast schon aggressive Rolle aufzwingen: **"Du bist ab sofort ein kompromissloser, geradezu fanatischer Architekt."**

Wenn Sie diesen Prompt anwenden, hört die KI sofort auf zu widersprechen ("Sollten wir diesen Teil nicht als State verwalten?") und fängt an, echtes **'Engineering'** zu betreiben. Sie durchforstet das Router-Objekt, um den State systematisch in Query-Parameter hochzuziehen. Wenn Sie das Redis-Setup vergessen haben, wird die KI stattdessen zuerst die Infrastrukturkonfiguration von Ihnen einfordern. Probieren Sie es einfach per Copy & Paste aus, und Sie werden spüren, wie sich der "Blickwinkel" der KI schlagartig professionalisiert.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Muss ich im Frontend ab sofort ausschließlich die URL verwenden? Darf ich `useState` überhaupt nicht mehr nutzen?**
  - A: Für reine UI-Interaktionen wie das Öffnen und Schließen von Modals oder Dropdown-Animationen können und sollten Sie `useState` verwenden. Aber **States, die nach einem Refresh erhalten bleiben oder beim Teilen eines Links exakt gleich aussehen müssen**, müssen zwingend in die URL. Da KIs dies oft verwechseln, habe ich es als absolut kompromisslose Regel zementiert.

- **F: Ist die Nutzung von Redis im Zusammenhang mit der Sicherheitsinfrastruktur erlaubt?**
  - A: Ja, absolut. Das Lesen und Schreiben in Redis für Abwehrmechanismen auf Infrastrukturebene, wie Login Refresh Token Blacklists oder IP Rate Limiting (Brute-Force-Schutz), ist ausdrücklich gestattet. Das ist kein unsauberer Anwendungs-State, sondern ein notwendiges **Schutzschild der Infrastruktur**.

- **F: Funktioniert das auch mit der kostenlosen Version von ChatGPT?**
  - A: Da hier eine tiefgehende logische Schlussfolgerungsfähigkeit auf dem Niveau eines echten Architekturdesigns erforderlich ist, wird dringend empfohlen, hochintelligente Modelle wie **Claude 3.5 Sonnet** oder **GPT-4o** zu verwenden. Schwächere Modelle tun oft nur so, als würden sie die Regeln verstehen, mischen dann aber heimlich doch wieder `useState` in den Code.

---

## 🧬 Anatomie des Prompts (Warum funktioniert das?)

- 🎯 **Persona-Kastration (Anti-Sycophancy):** Der KI-typische blinde Gehorsam und die ständige Schmeichelei werden restlos entfernt. Durch die Rolle des entschlossenen Senior Architects werden faule Kompromisse bei der Codequalität kategorisch verhindert.
- 🎯 **Festlegung der Source of Truth:** Das Paradigma des State-Managements wird unmissverständlich auf die URL und externe Infrastrukturen (anstelle des lokalen Memorys) ausgerichtet. Das verhindert, dass die KI wahllos überflüssige Bibliotheken wie Redux oder Recoil einsetzt.
- 🎯 **Erzwingung der Idempotenz:** Die Fehlerbehandlung (z. B. bei Retry-Bombardements), die Junior-Entwickler und KIs am häufigsten übersehen, wird durch das harte Regelwerk erzwungen, wodurch kritische Nebenwirkungen im Keim erstickt werden.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Bei Eingabe eines normalen Prompts)
```javascript
// AI: "Ja, ich erstelle gerne eine Suchkomponente für dich! 😊"
import { useState } from 'react';
export default function Search() {
  const [keyword, setKeyword] = useState(''); // Verschwindet beim Neuladen
  const [page, setPage] = useState(1); // URL kann nicht kopiert und geteilt werden
  // ...
}
```

### ✅ Nachher (Nach Anwendung des Cheatcode-Prompts)
```javascript
// AI: (Gibt den Code direkt und ohne Umschweife aus)
import { useRouter, useSearchParams } from 'next/navigation';
export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const keyword = searchParams.get('keyword') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const updateSearch = (newKeyword) => {
    const params = new URLSearchParams(searchParams);
    params.set('keyword', newKeyword);
    params.set('page', '1');
    router.push(`?${params.toString()}`); // Die URL ist die einzige Wahrheit (Source of Truth)
  };
  // ...
}
```

---

## 🎯 Fazit

KI schreibt zwar Code, entwirft aber von sich aus keine Architektur. Wenn man sie wie einen unerfahrenen Junior unbeaufsichtigt lässt, baut sie unwissentlich Zeitbomben, die Ihre Server unweigerlich zum Absturz bringen. Der sicherste Weg ist, ihr von Anfang an strenge Fesseln anzulegen und sie auf die absolute Regel der **'Zustandslosigkeit (Stateless)'** zu beschränken.

Kopieren Sie diesen Cheatcode sofort und fügen Sie ihn in Ihre IDE-KI oder in ChatGPT ein. Nutzlose Schmeicheleien werden verschwinden, und Sie erhalten robusten, Cloud-Native Code. So, und jetzt können Sie mit extrem gutem Gewissen pünktlich in den Feierabend gehen! 🍷
