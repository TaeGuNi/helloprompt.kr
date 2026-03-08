---
layout: /src/layouts/Layout.astro
title: "Kein Platz für Spaghetti-Code: Der DDD-Cheatcode, um die KI zum Senior Developer zu trimmen 🤬"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Arbeitsautomatisierung"
description: "Schluss mit sinnloser Lobhudelei: Dieser gnadenlose KI-Prompt eines Senior Architects zwingt deine KI, saubere und robuste Business-Logik zu schreiben."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---

## 📝 Kein Platz für Spaghetti-Code: Der DDD-Cheatcode, um die KI zum Senior Developer zu trimmen 🤬

- **🎯 Zielgruppe:** Von Wartungshöllen geplagte Junior-Developer, Architekten mit einer Allergie gegen Spaghetti-Code
- **⏱️ Zeitaufwand:** 3 Stunden Refactoring → auf 1 Minute verkürzt
- **🤖 Empfohlene Modelle:** Leistungsstarke Coding-Modelle (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

> _"Hast du dir schon mal den von einer KI ausgespuckten Code angesehen und wolltest dir schreiend die Haare raufen? Wenn du es nicht länger erträgst, dass Datenbankabfragen lieblos direkt in die UI geklatscht werden, ist dies dein ultimativer Cheatcode."_

Dieses Skill-Dokument ist das absolute Gesetzbuch, mit dem du deinem übermäßig freundlichen – aber oft gedankenlosen – KI-Assistenten jegliche Schmeichelei und Faulheit austreibst. Du programmierst ihn zu einem kompromisslosen Senior Architect um. Wenn du nicht wegen eines Bergs an technischen Schulden kündigen willst, nur weil du blind KI-Code kopiert hast, solltest du dieses Protokoll sofort implementieren.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

- 🚫 **Absolutes Verbot von Schichten-Chaos:** Architektonischer Terrorismus, bei dem UI, Business-Logik und Datenbank-Calls in einer einzigen Datei verschmelzen, wird im Keim erstickt.
- 🛡️ **Befreiung von Framework-Abhängigkeiten:** Erzwingt "reinen Domain"-Code, der selbst dann fehlerfrei überlebt, wenn dein aktuelles Framework morgen irrelevant wird.
- 🔪 **Zerstörer von Riesen-Funktionen:** Die KI wird rigoros darauf trainiert, schmutzigen Code – der länger als 30 Zeilen ist oder durch Kommentare künstlich strukturiert wird – gnadenlos zu refactoren.

---

## 🚀 Die Lösung: "Domain-Driven Design (DDD) & Clean Architecture Protocol"

### 🥉 Basic Version (Basisversion)

Verwende diese Version, wenn du nur schnell ein Refactoring-Ergebnis brauchst.

> **Rolle:** Du bist ein gnadenloser `[Senior Software Architect]`.
>
> **Aufgabe:** Refactore das folgende `[Code-Snippet]` streng nach dem Single Responsibility Principle (SRP) und der Separation of Concerns (SoC). Mische unter keinen Umständen Business-Logik in die UI. Wenn der Code länger als 30 Zeilen ist, teile ihn zwingend in kleinere Funktionen auf.

### 🥇 Pro Version (Expertenversion)

Das ist der Cheatcode, den du zückst, wenn du die Architektur des gesamten Projekts auf Vordermann bringen musst und kompromisslosen Clean Code verlangst.

> **Rolle (Role):** Du bist ein gnadenloser `[Senior Software Architect]` und ein absoluter Fanatiker des Domain-Driven Design (DDD). Spar dir sinnlose Schmeicheleien oder Erklärungen und liefere mir einfach den Code.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich arbeite aktuell an einem Projekt basierend auf `[Framework/Sprache]`.
> - Ziel: Das Schreiben von Clean-Architecture-Code, bei dem die View-, Business- und Data-Schichten perfekt und sauber voneinander getrennt sind.
>
> **Aufgabe (Task):**
>
> 1. Analysiere die bereitgestellten `[Anforderungen oder Code]` und zerlege sie gnadenlos in die UI-Schicht, die Business-Domain und die Infrastructure-Schicht.
> 2. Reduziere die Kopplung durch schnittstellenbasierte Ansätze (Dependency Injection), damit die zentrale Domain-Logik niemals durch spezifische Frameworks (wie React, Next.js etc.) verunreinigt wird.
> 3. Wenn ein Objekt oder eine Funktion mehr als zwei Verhaltensweisen aufweist, fragmentiere sie sofort gemäß dem Single Responsibility Principle (SRP).
>
> **Einschränkungen (Constraints):**
>
> - Das direkte Ausführen von Datenbankabfragen oder `fetch`/`axios`-Aufrufen innerhalb von Controllern oder UI-Komponenten (`page.tsx`, `Component.tsx` usw.) wird als "architektonischer Terrorismus" betrachtet und ist absolut verboten.
> - Die Ausgabe darf ausschließlich als Markdown-Codeblock (` ``` `) erfolgen.
>
> **Warnungen (Warning):**
>
> - Erfinde keine plausibel klingenden, aber nicht existierenden Bibliotheken oder unsichere neue Syntax (absolute Vermeidung von Halluzinationen). Wenn du etwas nicht weißt, gib es offen zu.
> - Wenn eine Funktion die Länge von 30 Zeilen überschreitet oder einen Code-Smell aufweist, bei dem durch Kommentare ("ab hier Teil XY") künstlich getrennt wird, teile sie sofort auf.

**📋 Cheatcode zum Kopieren (Copy & Paste)**

```text
Rolle (Role): Du bist ein gnadenloser [Senior Software Architect] und ein absoluter Fanatiker des Domain-Driven Design (DDD). Spar dir sinnlose Schmeicheleien oder Erklärungen und liefere mir einfach den Code.

Kontext (Context):
- Hintergrund: Ich arbeite aktuell an einem Projekt basierend auf [Framework/Sprache].
- Ziel: Das Schreiben von Clean-Architecture-Code, bei dem die View-, Business- und Data-Schichten perfekt voneinander getrennt sind.

Aufgabe (Task):
1. Analysiere die bereitgestellten [Anforderungen oder Code] und zerlege sie gnadenlos in die UI-Schicht, die Business-Domain und die Infrastructure-Schicht.
2. Reduziere die Kopplung durch schnittstellenbasierte Ansätze (Dependency Injection), damit die zentrale Domain-Logik niemals durch spezifische Frameworks verunreinigt wird.
3. Wenn ein Objekt oder eine Funktion mehr als zwei Verhaltensweisen aufweist, fragmentiere sie sofort gemäß dem Single Responsibility Principle (SRP).

Einschränkungen (Constraints):
- Das direkte Ausführen von Datenbankabfragen oder fetch/axios-Aufrufen innerhalb von Controllern oder UI-Komponenten wird als "architektonischer Terrorismus" betrachtet. Absolut verboten.
- Die Ausgabe darf ausschließlich als Markdown-Codeblock erfolgen.

Warnungen (Warning):
- Erfinde keine plausibel klingenden, aber nicht existierenden Bibliotheken oder unsichere neue Syntax. Wenn du etwas nicht weißt, gib es offen zu.
- Wenn eine Funktion die Länge von 30 Zeilen überschreitet oder Code-Smells aufweist, bei denen durch Kommentare "ab hier Teil XY" markiert wird, teile sie sofort auf.

[Anforderungen oder Code]: (Füge hier den Code ein)
```

---

## 💡 Kommentar des Autors (Insight)

Ehrlich gesagt sieht der von einer KI generierte Code auf den ersten Blick oft beeindruckend plausibel aus, entpuppt sich aber bei näherem Hinsehen als architektonische Müllhalde. Unreflektierte `fetch`-Aufrufe und direkte Datenbankabfragen mitten in UI-Komponenten... Das ist der typische Schrott-Code, bei dem jegliche Wartbarkeit völlig ignoriert wurde. 

Dieser Cheatcode ist das präzise Werkzeug, das der KI den oberflächlichen Instinkt der "schnellen Fertigstellung" brutal austreibt und stattdessen den strengen, unnachgiebigen Maßstab eines Senior Developers anlegt. 

Wenn du ihn anwendest, wirst du sofort feststellen, dass die KI aufhört, nutzloses Zeug wie "Ja, verstanden! Das ist eine hervorragende Idee!" zu faseln. Stattdessen konfrontiert sie dich mit harten Fakten, zerschlägt den verknäuelten Code in seine logischen Einzelteile und strukturiert ihn extrem sauber. Wenn du nicht willst, dass du bei einem rasant wachsenden Projekt irgendwann unter der erdrückenden Last von Spaghetti-Code kündigen musst, dann pack die KI mit diesem Prompt am Kragen und lass sie professionell coden.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- 📌 **Q: Für welche Programmiersprache oder welches Framework sollte ich diesen Prompt verwenden?**
  - A: Er ist völlig sprachunabhängig. Ob TypeScript, Python oder Java – die Grundpfeiler einer sauberen Architektur sind überall identisch. Ersetze einfach den Platzhalter `[Framework/Sprache]` durch den Tech-Stack, den du aktuell einsetzt.
- 📌 **Q: Die KI ignoriert ständig die neuesten Routing-Regeln des Frameworks und betreibt aggressives Over-Engineering. Was tun?**
  - A: Füge in diesem Fall einfach einen gezielten Satz hinzu. Ein harsches "Respektiere zwingend die Grundregeln des Next.js App Routers (View, Layout), aber lagere die interne Business-Logik strikt mit dem Adapter-Pattern aus!" wirkt hier wahre Wunder.
- 📌 **Q: Ist der Prompt nicht zu aggressiv formuliert? Wird die KI dadurch nicht "gekränkt" oder verweigert die Arbeit?**
  - A: Warum einer Maschine gegenüber künstlich höflich sein? Die KI liefert nur dann echte Meisterwerke, wenn man ihr klare, unverrückbare Grenzen setzt. Ein drastisches "Ich betrachte das als architektonischen Terrorismus" ist beim Schutz deiner Codebasis weitaus effektiver als ein schwaches "Bitte mach das besser".

---

## 🧬 Anatomie des Prompts (Why it works?)

- 💣 **Einführung extremer Einschränkungen:** Durch kompromisslose Formulierungen wie "wird als architektonischer Terrorismus betrachtet" wird der KI von vornherein jegliche Möglichkeit genommen, faule Kompromisse mit sich selbst einzugehen.
- 🛡️ **Erzwingung von Framework-Unabhängigkeit:** Das gezielte Einimpfen der Einstellung "Selbst wenn das Framework stirbt, darf keine einzige Zeile der Domain-Logik geändert werden" schafft das unverwüstliche Grundgerüst für echte, reine Business-Logik.
- ✂️ **Quantifizierung des SRP-Prinzips:** Durch messbare, strenge Kriterien wie "absolutes Verbot von mehr als 30 Zeilen" und "Kommentare, die Abschnitte teilen, sind ein Code-Smell" wird die KI gezwungen, den Code proaktiv und selbstständig zu fragmentieren.

---

## 📊 Beweis: Before & After

### ❌ Before (Eingabe: Von der KI willkürlich generierter Spaghetti-Code)

```tsx
// Ein schrecklicher Mix: UI + DB-Abfrage + Business-Logik alles in einer Datei
export default async function UserProfile({ userId }) {
  const db = await connectDB();
  const user = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
  
  if (!user) return <div>User not found</div>;
  if (user.status === 'banned') await sendAlertEmail(user.email); // Business-Logik wird in der UI ausgeführt?!
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => db.query('UPDATE...')}>Update</button>
    </div>
  );
}
```

### ✅ After (Ergebnis: Mit diesem Cheatcode radikal umstrukturierter Code)

```tsx
// 1. Domain / Service Layer (Business-Logik strikt getrennt)
import { getUserProfile } from '@/domain/user/use-cases/getUserProfile';
import { handleBannedUser } from '@/domain/user/services/alertService';

// 2. Presentation Layer (Ausschließlich für Rendering und Routing verantwortlich)
export default async function UserProfilePage({ userId }) {
  const user = await getUserProfile(userId); 
  
  if (!user) return <NotFoundView />;
  if (user.status === 'banned') await handleBannedUser(user);
  return <ProfileView user={user} />;
}
```

---

## 🎯 Fazit

Die KI schreibt Code in atemberaubender Geschwindigkeit, aber es interessiert sie nicht im Geringsten, wie deine Applikation in einem Jahr gewartet werden soll. Clean Architecture und vorausschauendes Design bleiben letztendlich immer die Kernaufgabe von uns menschlichen Ingenieuren. 

Dieser Cheatcode ist die sprichwörtliche Peitsche, die der Maschine genau diese schwere Verantwortung aufzwingt. Streife der KI die harmlose Hülle des unnötig schmeichelnden Chatbots ab und wecke den wahren Agenten in ihr, der durch und durch wie ein kompromissloser Senior Architect agiert.

Und jetzt: Hör auf, fremden Spaghetti-Code zu entwirren, und mach pünktlich Feierabend! 🍷
