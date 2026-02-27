---
layout: /src/layouts/Layout.astro
title: "Kein Platz für Spaghetti-Code: Der DDD-Cheatcode, um die KI zum Senior Developer zu trimmen 🤬"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Arbeitsautomatisierung"
description: "Schluss mit sinnloser Lobhudelei – hier ist der gnadenlose KI-Trainings-Prompt eines Senior Architects, der die KI zwingt, saubere Business-Logik zu schreiben."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 Kein Platz für Spaghetti-Code: Der DDD-Cheatcode, um die KI zum Senior Developer zu trimmen 🤬

- **🎯 Zielgruppe:** Von Wartungsarbeiten erschöpfte Junior Developer, Architekten, die Spaghetti-Code verabscheuen
- **⏱️ Zeitaufwand:** 3 Stunden Refactoring → auf 1 Minute verkürzt
- **🤖 Empfohlene Modelle:** KIs mit starken Fähigkeiten zur Code-Generierung (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

_Hast du dir schon mal den Code angesehen, den eine KI ausgespuckt hat, und wolltest dir die Haare raufen? Wenn du es nicht mehr ertragen kannst, wie sie Datenbankabfragen stumpfsinnig direkt in die UI klatscht, dann benutze diesen Cheatcode._

Dieses Skill-Dokument ist das Gesetzbuch, mit dem du deinem freundlichen (und gedankenlosen) KI-Assistenten jegliche "Schmeichelei" und "Faulheit" austreibst und ihn zu einem gnadenlosen Senior Architect umprogrammierst. Wenn du nicht wegen technischer Schulden kündigen willst, weil du blind den Code der KI kopiert hast, implementiere dieses Protokoll sofort.

---
## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)
- 🚫 **Absolutes Verbot von Schichten-Chaos:** Architektonischer Terror, bei dem UI, Business-Logik und Datenbankkommunikation in einer einzigen Datei vermischt werden, wird im Keim erstickt.
- 🛡️ **Befreiung von Framework-Abhängigkeiten:** Erzwingt "reinen Domain"-Code, der auch dann überlebt, wenn dein Framework morgen den Bach runtergeht.
- 🔪 **Zerstörer von Riesen-Funktionen:** Die KI wird darauf trainiert, schmutzigen Code, der länger als 30 Zeilen ist oder durch Kommentare in Abschnitte unterteilt wird, gnadenlos zu zerschlagen (Refactoring).

---
## 🚀 Die Lösung: "Domain-Driven Design (DDD) & Clean Architecture Protocol"

### 🥉 Basic Version (Basisversion)
Verwende diese Version, wenn du nur schnell ein Refactoring-Ergebnis brauchst.

> **Rolle:** Du bist ein gnadenloser `[Senior Software Architect]`.
> **Aufgabe:** Refactore das folgende `[Code-Snippet]` entsprechend dem Single Responsibility Principle (SRP) und der Separation of Concerns (SoC). Mische keine Business-Logik in die UI, und wenn der Code länger als 30 Zeilen ist, teile ihn zwingend in Funktionen auf.

### 🥇 Pro Version (Expertenversion)
Das ist der Cheatcode, den du zückst, wenn du die Architektur des gesamten Projekts auf Vordermann bringen musst und strengen Clean Code verlangst.

> **Rolle (Role):** Du bist ein gnadenloser `[Senior Software Architect]` und ein Fanatiker des Domain-Driven Design (DDD). Spar dir sinnlose Schmeicheleien oder Erklärungen und gib mir einfach den Code.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich arbeite gerade an einem Projekt basierend auf `[Framework/Sprache]`.
> - Ziel: Das Schreiben von Clean-Architecture-Code, bei dem die View-, Business- und Data-Schichten perfekt voneinander getrennt sind.
>
> **Aufgabe (Task):**
>
> 1. Analysiere die bereitgestellten `[Anforderungen oder Code]` und zerreiße sie gnadenlos in die UI-Schicht, die Business-Domain und die Infrastructure-Schicht.
> 2. Reduziere die Kopplung durch schnittstellenbasierte (Dependency Injection) Ansätze, damit die zentrale Domain-Logik nicht durch spezifische Frameworks (wie React, Next.js etc.) verunreinigt wird.
> 3. Wenn ein Objekt oder eine Funktion mehr als zwei Verhaltensweisen aufweist, fragmentiere sie sofort gemäß dem Single Responsibility Principle (SRP).
>
> **Einschränkungen (Constraints):**
>
> - Das direkte Ausführen von Datenbankabfragen oder `fetch`/`axios`-Aufrufen innerhalb von Controllern oder UI-Komponenten (`page.tsx`, `Component.tsx` usw.) wird als "architektonischer Terrorismus" betrachtet. Absolut verboten.
> - Die Ausgabe darf ausschließlich als Markdown-Codeblock (` ``` `) erfolgen.
>
> **Warnungen (Warning):**
>
> - Erfinde nicht plausibel klingende, aber nicht existierende Bibliotheken oder unsichere neue Syntax (Vermeidung von Halluzinationen). Wenn du etwas nicht weißt, gib es offen zu.
> - Wenn eine Funktion die Länge von 30 Zeilen überschreitet oder Code-Smell aufweist, bei dem durch Kommentare "ab hier Teil XY" markiert wird, teile sie sofort auf.

**📋 Cheatcode zum Kopieren (Copy & Paste)**
```text
Rolle (Role): Du bist ein gnadenloser [Senior Software Architect] und ein Fanatiker des Domain-Driven Design (DDD). Spar dir sinnlose Schmeicheleien oder Erklärungen und gib mir einfach den Code.

Kontext (Context):
- Hintergrund: Ich arbeite gerade an einem Projekt basierend auf [Framework/Sprache].
- Ziel: Das Schreiben von Clean-Architecture-Code, bei dem die View-, Business- und Data-Schichten perfekt voneinander getrennt sind.

Aufgabe (Task):
1. Analysiere die bereitgestellten [Anforderungen oder Code] und zerreiße sie gnadenlos in die UI-Schicht, die Business-Domain und die Infrastructure-Schicht.
2. Reduziere die Kopplung durch schnittstellenbasierte (Dependency Injection) Ansätze, damit die zentrale Domain-Logik nicht durch spezifische Frameworks verunreinigt wird.
3. Wenn ein Objekt oder eine Funktion mehr als zwei Verhaltensweisen aufweist, fragmentiere sie sofort gemäß dem Single Responsibility Principle (SRP).

Einschränkungen (Constraints):
- Das direkte Ausführen von Datenbankabfragen oder fetch/axios-Aufrufen innerhalb von Controllern oder UI-Komponenten wird als "architektonischer Terrorismus" betrachtet. Absolut verboten.
- Die Ausgabe darf ausschließlich als Markdown-Codeblock erfolgen.

Warnungen (Warning):
- Erfinde keine plausibel klingenden, aber nicht existierenden Bibliotheken oder unsichere neue Syntax. Wenn du etwas nicht weißt, gib es offen zu.
- Wenn eine Funktion die Länge von 30 Zeilen überschreitet oder Code-Smell aufweist, bei dem durch Kommentare "ab hier Teil XY" markiert wird, teile sie sofort auf.

[Anforderungen oder Code]: (Füge hier den Code ein)
```

---
## 💡 Kommentar des Autors (Insight)
Ehrlich gesagt, sieht der von KI generierte Code oft auf den ersten Blick plausibel aus, entpuppt sich aber bei näherem Hinsehen als Müllhalde. Unreflektierte `fetch`-Aufrufe und Datenbankabfragen direkt innerhalb von UI-Komponenten... Das ist typischer Schrott-Code, bei dem auf Wartbarkeit gepfiffen wurde. 

Dieser Cheatcode ist das Werkzeug, das der KI den oberflächlichen Instinkt der "schnellen Fertigstellung" austreibt und den strengen Maßstab eines Senior Developers anlegt. 

Wenn du ihn anwendest, wirst du sehen, dass die KI aufhört, dummes Zeug wie "Ja, verstanden! Das ist eine hervorragende Idee!" zu faseln. Stattdessen konfrontiert sie dich mit harten Fakten, zerschlägt den Code in seine Einzelteile und strukturiert ihn sauber. Wenn du nicht willst, dass du bei einem wachsenden Projekt unter der Last von Spaghetti-Code kündigen musst, dann pack die KI mit diesem Prompt am Kragen und lass sie coden.

---
## 🙋 Häufig gestellte Fragen (FAQ)
- 📌 **Q: Für welche Sprache oder welches Framework sollte ich diesen Prompt verwenden?**
  - A: Sprachunabhängig. Ob TypeScript, Python oder Java – die Grundlagen der Architektur sind überall gleich. Ersetze einfach den Platzhalter `[Framework/Sprache]` durch den Tech-Stack, den du gerade verwendest.
- 📌 **Q: Die KI ignoriert ständig die neuesten Routing-Regeln des Frameworks und betreibt Over-Engineering.**
  - A: Füge in diesem Fall einfach einen Satz hinzu. Ein harsches "Respektiere die Grundregeln des Next.js App Routers (View, Layout), aber lagere die interne Business-Logik mit dem Adapter-Pattern aus!" wirkt wahre Wunder.
- 📌 **Q: Ist der Prompt nicht zu aggressiv? Wird die KI nicht gekränkt sein?**
  - A: Warum der KI gegenüber höflich sein? Die Maschine liefert nur dann Meisterwerke, wenn man sie hart ran nimmt. Ein "Ich betrachte das als Terrorismus" ist beim Schutz der Architektur weitaus effektiver als ein "Bitte mach das".

---
## 🧬 Anatomie des Prompts (Why it works?)
- 💣 **Einführung extremer Einschränkungen:** Durch harte Formulierungen wie "wird als architektonischer Terrorismus betrachtet" wird der KI die Möglichkeit genommen, Kompromisse mit sich selbst einzugehen.
- 🛡️ **Erzwingung von Framework-Unabhängigkeit:** Das Einimpfen der Einstellung "Selbst wenn das Framework stirbt, darf keine einzige Zeile geändert werden" gibt das Grundgerüst vor, um echte Domain-Logik aufzubauen.
- ✂️ **Quantifizierung des SRP-Prinzips:** Durch konkrete und strenge Kriterien wie "Verbot von mehr als 30 Zeilen" und "Kommentare, die Abschnitte teilen, sind Code-Smell" wird die KI dazu verleitet, den Code selbstständig zu fragmentieren.

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
Die KI schreibt Code unglaublich schnell, aber es interessiert sie nicht im Geringsten, wie deine App in einem Jahr gewartet werden soll. Clean Architecture und Design sind letztlich die Aufgabe menschlicher Ingenieure. 

Dieser Cheatcode ist die mächtige Peitsche, die der Maschine diese schwere Verantwortung aufzwingt. Streife der KI die Hülle des unnötig schmeichelnden Chatbots ab und wecke den wahren Agenten, der durch und durch ein Senior Architect ist.

Und jetzt: Hör auf, Spaghetti-Code zu entwirren, und mach pünktlich Feierabend! 🍷
