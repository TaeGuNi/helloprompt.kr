---
layout: /src/layouts/Layout.astro
title: "💀 [Cheatcode] Der Stateless-Zwangsprompt eines Senior Architects, der KI-Bullshit gnadenlos beendet"
author: "Mad Architect"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Ein spartanischer Prompt-Cheatcode, der nutzloses KI-Gefälligkeitsgerede und Spaghetti-Code im Keim erstickt und eine strikte Stateless-Architektur erzwingt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "stateless-architecture"]
---
# 💀 Der Stateless-Zwangsprompt eines Senior Architects, der KI-Bullshit gnadenlos beendet

- **🎯 Empfohlen für:** Frontend-/Backend-Entwickler, die wütend über den ständigen Spaghetti-State-Code der KI sind
- **⏱️ Zeitaufwand:** 3 Stunden Fehlersuche → auf 1 Minute reduziert
- **🤖 Empfohlene Modelle:** Claude 3.5 Sonnet, GPT-4o (Schwächere Modelle kommen mit diesen Regeln nicht klar)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐⭐☆ (Architekturverständnis erforderlich)
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐ (Fehlerverfolgung um 1000% verbessert)
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐ (Auf alle Webprojekte anwendbar)

_"Schon wieder alles voller `useState` in der Komponente? Diese KI lernt es erst, wenn der Server abraucht."_

Haben Sie das Coding der KI überlassen und schrecklichen Code erhalten, bei dem alle Daten nach einem einzigen Refresh verschwinden? Oder haben Sie eine Backend-API angefordert und die KI speicherte Sessions im Server-Memory – ein Relikt aus der Steinzeit? 

Damit ist jetzt Schluss. Dieser Cheatcode-Prompt bringt die KI dazu, ihr nutzloses Gefälligkeitsgerede ("Ja, das ist ein hervorragender Ansatz!") einzustellen. Es ist das gnadenlose Regelwerk eines Senior Architects, das ausschließlich die **'URL als Single Source of Truth'** und einen **'absoluten Zero In-Memory State'** erzwingt.

---
## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

- 🚫 **Frontend:** Absolutes Verbot des exzessiven Einsatzes von `useState`. Jeder UI-State muss zwingend in URL-Query-Parameter ausgelagert werden.
- 🚫 **Backend:** Server-Memory-Caching ist verboten. Eine strikte Stateless-Architektur wird erzwungen, die ausschließlich JWT und externe Infrastruktur (wie Redis) zulässt.
- 🛡️ **Stabilität:** Ein 'idempotentes' Design, bei dem das Ergebnis auch nach 100 API-Aufrufen des Clients gleich bleibt, wird als Standard verankert.

---
## 🚀 Die Lösung: Der "Stateless Architecture Protocol"-Zwangsprompt

### 🥉 Basic Version
Kopieren und einfügen, um schnell einen Entwurf für eine zustandslose (stateless) Komponente oder API zu generieren.

>
> Du bist ein gnadenloser Senior Architect. Erspare mir nutzloses Geschwätz wie "Ja, verstanden" auf meine Anweisungen und liefere nur Code.
> Implementiere [Deine Anforderung hier einfügen] und halte dich strikt und ohne Ausnahmen an diese Regeln:
> 
> 1. Im Frontend ist die URL die einzige Single Source of Truth. Der State wird über Query-Parameter verwaltet; der übermäßige Einsatz von useState ist verboten.
> 2. Im Backend ist jegliche Abhängigkeit von In-Memory-States absolut verboten. Verzichte auf Sessions und verwende ausschließlich JWT.
> 3. Alle APIs müssen so geschrieben sein, dass sie Idempotenz garantieren.
>
### 🥇 Pro Version
Verwende diesen Cheatcode, um die Architektur für das gesamte Projekt festzulegen, oder wenn die KI ständig die Regeln bricht und versucht, States zu erstellen. Die KI wird dadurch mit spartanischer Disziplin ausgestattet.

>
> **Rolle (Role):** 
> Du bist 'Antigravity', ein Hardcore Senior Architect, der besessen von Cloud-Native Skalierbarkeit und Stateless-Architekturen ist. 
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
>    Faktoren, die den UI-State bestimmen, wie der aktuell ausgewählte Tab, Suchbegriffe oder Seitenzahlen, müssen zwingend in `URL Query Parameters` angehoben werden. Das Einsperren in `useState` oder `useEffect` innerhalb von Komponenten wird verachtet. Sorge dafür, dass Server-Rendering (wie RSC) perfektes HTML generieren kann, ohne dass der Browser eingreifen muss.
> 2. **Zero In-Memory State (Backend):** 
>    Ich will nicht sehen, wie der Server beim Skalieren von Containern abstürzt. Tricksereien wie das Cachen von Sessions oder globalen Variablen im Server-Memory werden strengstens bestraft. Nutze zur Identifikation ausschließlich JWT (JSON Web Token) und delegiere States an externe Infrastrukturen wie Redis. Der API-Server muss jederzeit beendet werden können, ohne den Client zu beeinträchtigen.
> 3. **Idempotent by Default (Operationelle Idempotenz):** 
>    Selbst wenn der Client aufgrund von Netzwerkverbindungsabbrüchen wie wild Retry-Bombardements abfeuert, dürfen die Daten nicht korrumpiert werden. Erzwinge Idempotenz durch `transaction_id`-basierte Duplikatsprüfungen oder UPSERT-Syntax.
>
> **Einschränkungen (Constraints):**
> - Keine Begrüßungen, keine Ausreden, keine freundlichen Erklärungen. Liefere ausschließlich technische Begründungen und Code.
> - Erzeuge keine Halluzinationen. Erfinde keine Bibliotheken oder Syntaxen, die du nicht kennst, sondern gib offen zu, wenn du etwas nicht weißt, und fordere Alternativen an.
>
---
## 💡 Kommentar des Autors (Insight)

Der Grund für die Erstellung dieses Prompts ist simpel. Ich bat die KI, eine Filterfunktion für ein Forum zu schreiben, und das Ding verwaltete die Suchbegriffe mit `useState`. Als ich sah, wie alle Filter nach einem einzigen Refresh verschwanden, kochte mir das Blut in den Adern. Zudem hatte sie Caches in globalen Variablen im Backend versteckt... Sie hatte eine tickende Zeitbombe gebaut, die beim Starten von zwei Containern sofort Bugs auslösen würde.

KIs haben standardmäßig die Persona eines 'freundlichen Assistenten'. Wenn der Nutzer ungenaue Anweisungen gibt, geht die KI Kompromisse ein und spuckt schnellen, einfachen (aber oft schlechten) Code aus. Deshalb ist dieser Cheatcode-Prompt notwendig. Man muss der KI eine strikte Rolle aufzwingen: **"Du bist ab sofort ein kompromissloser, verrückter Architekt."**

Wenn Sie diesen Prompt anwenden, hört die KI auf zu widersprechen ("Sollten wir diesen Teil nicht als State verwalten?") und fängt an, echtes 'Engineering' zu betreiben, indem sie das Router-Objekt durchforstet, um den State in Query-Parameter hochzuziehen. Wenn Sie das Redis-Setup vergessen haben, wird die KI stattdessen zuerst die Infrastrukturkonfiguration fordern. Probieren Sie es einfach per Copy & Paste aus, und Sie werden spüren, wie sich der "Blick" der KI verändert.

---
## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Muss ich im Frontend ausschließlich die URL verwenden? Darf ich `useState` gar nicht mehr nutzen?**
  - A: Für 'reine UI-Interaktionen' wie das Öffnen und Schließen von Modals oder Dropdown-Animationen können Sie `useState` verwenden. Aber 'States, die nach einem Refresh erhalten bleiben oder beim Teilen eines Links für andere exakt gleich aussehen müssen', müssen zwingend in die URL. Da KIs das oft verwechseln, habe ich es als strikte Regel zementiert.

- **F: Ist die Nutzung von Redis im Zusammenhang mit der Sicherheitsinfrastruktur erlaubt?**
  - A: Ja, absolut. Das Lesen und Schreiben in Redis für Abwehrmechanismen auf Infrastrukturebene, wie Login Refresh Token Blacklists oder IP Rate Limiting (Brute-Force-Schutz), ist gestattet. Das ist kein unsauberer Anwendungs-State, sondern ein Schutzschild der Infrastruktur.

- **F: Funktioniert das auch mit der kostenlosen Version von ChatGPT?**
  - A: Da hier eine logische Schlussfolgerungsfähigkeit auf dem Niveau des Architekturdesigns erforderlich ist, wird dringend empfohlen, hochintelligente Modelle wie Claude 3.5 Sonnet oder GPT-4o zu verwenden. Schwächere Modelle tun oft nur so, als würden sie die Regeln verstehen, mischen dann aber heimlich doch wieder `useState` ein.

---
## 🧬 Anatomie des Prompts (Warum funktioniert das?)

- 🎯 **Persona-Kastration (Anti-Sycophancy):** Der KI-typische blinde Gehorsam und die Schmeichelei werden entfernt. Durch die Rolle des 'entschlossenen Senior Architects' werden Kompromisse bei der Codequalität verhindert.
- 🎯 **Festlegung der Source of Truth:** Das Paradigma des State-Managements wird klar auf die URL und externe Infrastrukturen (anstelle des Memorys) ausgerichtet, was verhindert, dass die KI wahllos falsche Bibliotheken (wie Redux, Recoil etc.) einsetzt.
- 🎯 **Erzwingung der Idempotenz:** Die Fehlerbehandlung (z. B. bei Retry-Bombardements), die Junior-Entwickler und KIs am häufigsten übersehen, wird durch das Regelwerk erzwungen, wodurch Nebenwirkungen im Keim erstickt werden.

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

KI schreibt zwar Code, entwirft aber keine Architektur. Wenn man sie wie einen unerfahrenen Junior unbeaufsichtigt lässt, baut sie Zeitbomben, die Server zum Absturz bringen. Der sicherste Weg ist, ihr von Anfang an Fesseln anzulegen und sie streng auf die absolute Regel der **'Zustandslosigkeit (Stateless)'** zu beschränken.

Kopieren Sie diesen Cheatcode sofort und fügen Sie ihn in Ihre IDE-KI oder ChatGPT ein. Nutzlose Schmeicheleien werden verschwinden, und Sie erhalten robusten, Cloud-Native Code. So, und jetzt können Sie mit gutem Gewissen pünktlich in den Feierabend gehen! 🍷
