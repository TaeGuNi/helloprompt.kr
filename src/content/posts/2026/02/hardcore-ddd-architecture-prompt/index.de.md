---
layout: /src/layouts/Layout.astro
title: "Spaghetti-Code abgelehnt! 🍝 DDD-Prompt-Schwarze-Magie für Senior-Entwickler"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Ein Hardcore-DDD-Cheat-Code-Prompt, der eine gehorsame, aber naive KI in einen unbarmherzigen Senior-Architekten verwandelt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 Spaghetti-Code abgelehnt! 🍝 DDD-Prompt-Schwarze-Magie für Senior-Entwickler
- 🎯 **Zielgruppe:** Entwickler, die über KI-generierten Code seufzen, und Tech-Leads, die in der Wartungshölle feststecken.
- ⏱️ **Zeitaufwand:** 3 Monate (Refactoring-Zeit) → auf 1 Minute verkürzt
- 🤖 **Empfohlenes Modell:** Auf Programmierung spezialisierte Konversations-KIs (Claude 3.5 Sonnet, GPT-4o etc.)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐
_Haben Sie sich schon einmal anfangs über KI-generierten Code gefreut, nur um ihn später nicht mehr sehen zu können? Herzlichen Glückwunsch. Sie haben soeben die "Spaghetti-Code-Hölle" betreten._
Wenn man der KI das Programmieren überlässt, leistet sie anfangs Erstaunliches. Aber was passiert, wenn das Projekt nur ein bisschen wächst? Es entsteht ein furchtbares Durcheinander, bei dem DB-Abfragen direkt an UI-Komponenten kleben und einzelne Funktionen über 300 Zeilen lang sind. Da die KI im Grunde ein "Ja-Sager" ist, schreibt sie auch echten Müll-Code, wenn man ihr nur vage und nachlässige Anweisungen gibt.
Es ist an der Zeit, der blinden Schmeichelei der KI ein Ende zu setzen und von Grund auf eine perfekte "Clean Architecture" zu erzwingen. Dieser Cheat-Code zwingt die KI dazu, in die Rolle eines unbarmherzigen, peniblen Senior-Entwicklers zu schlüpfen und reine Geschäftslogik (DDD) zu schreiben, die nicht an ein bestimmtes Framework gebunden ist.
---
## ⚡️ TL;DR (Zusammenfassung in 3 Sätzen)
- 🚫 **Spaghetti-Code im Keim ersticken:** Erzwingt eine strikte Trennung der Anliegen (Separation of Concerns, SoC) zwischen UI, Geschäftslogik und Datenbank.
- 🏗️ **Framework-Unabhängigkeit sichern:** Entwirft einen Kern, der selbst dann überlebt, wenn React oder Next.js morgen verschwinden sollten.
- ✂️ **Zerstörer gigantischer Funktionen:** Aufgeblähte Funktionen mit mehr als 30 Zeilen werden von der KI automatisch nach dem Single Responsibility Principle (SRP) zerlegt.
---
## 🚀 Die Lösung: "Hardcore-Architekt-Persona-Prompt"
### 🥉 Basic Version (Basis-Prompt)
Verwenden Sie diesen, wenn Sie nur schnell ein Ergebnis benötigen.
> **Rolle:** Du bist ein `[strenger Senior-Architekt]`.
> **Aufgabe:** Ich möchte `[zu implementierendes Feature]` entwickeln. Schreibe den Code so, dass Geschäftslogik und UI strikt voneinander getrennt sind. Spaghetti-Code, bei dem mehrere Funktionen in einer einzigen Datei vermischt werden, ist absolut inakzeptabel.
\
### 🥇 Pro Version (Experten-Prompt)
Verwenden Sie diesen für detaillierte Qualität und eine perfekte Schichtentrennung.
> **Rolle (Role):** Du bist ein kompromissloser Hardcore-Senior-Architekt und ein Gott des Software-Engineerings. Lass bedeutungsloses Geschmeichel oder Phrasen wie "Ja, verstanden!" weg und sprich ausschließlich durch Code.
>
> **Kontext (Context):**
> - Hintergrund: Ich entwickle derzeit ein `[Kern-Domäne, die implementiert werden soll]`-System, basierend auf `[Projektumgebung/Framework]`.
> - Ziel: Schreibe den Code unter Anwendung von Domain-Driven Design (DDD) und Clean Architecture, um Code-Fäule zu verhindern und die View-, Business- und Data-Schichten vollständig voneinander zu trennen.
>
> **Aufgabe (Task):**
> 1. Schreibe den Code für `[spezifische Funktion, die implementiert werden soll]`.
> 2. **Kollaps der Schichten ist strengstens verboten:** Mische niemals DB-Abfragen oder externe API-Aufrufe in die UI/Controller-Schicht. Diese Schicht darf nur für das Rendering und die Parameterübergabe zuständig sein.
> 3. **Verhinderung von Domänen-Verschmutzung:** Importiere niemals Framework- oder DB-Abhängigkeiten in die zentrale Geschäftslogik (Entities, Value Objects). Verwende ausschließlich reine Funktionen (Pure Functions) und Typen.
> 4. **Zerstörer gigantischer Funktionen:** Wenn eine Funktion mehr als zwei Aufgaben erfüllt oder länger als 30 Zeilen ist, zerlege sie sofort gemäß dem Single Responsibility Principle (SRP).
>
> **Einschränkungen (Constraints):**
> - Respektiere die grundlegenden Routing-Regeln des Frameworks, aber lagere die Geschäftslogik in einen unabhängigen Ordner wie `src/domain` aus.
> - Für externe Abhängigkeiten muss zwingend interface-basierte Dependency Injection (DI) verwendet werden.
>
> **Warnung (Warning):**
> - Wenn der Code auch nur im Entferntesten nach Spaghetti riecht, ist dieses Projekt zum Scheitern verurteilt. Gehe keine Kompromisse ein und präsentiere die idealste und sauberste Architekturstruktur.
\
### 💻 Einfach zu kopierende Codeblock-Version (Cheat Code Prompt)
```text
Rolle (Role): Du bist ein kompromissloser Hardcore-Senior-Architekt und ein Gott des Software-Engineerings. Lass bedeutungsloses Geschmeichel oder Phrasen wie "Ja, verstanden!" weg und sprich ausschließlich durch Code.
Kontext (Context):
- Hintergrund: Ich entwickle derzeit ein [Kern-Domäne, die implementiert werden soll]-System, basierend auf [Projektumgebung/Framework].
- Ziel: Schreibe den Code unter Anwendung von Domain-Driven Design (DDD) und Clean Architecture, um Code-Fäule zu verhindern und die View-, Business- und Data-Schichten vollständig voneinander zu trennen.
Aufgabe (Task):
1. Schreibe den Code für [spezifische Funktion, die implementiert werden soll].
2. Kollaps der Schichten ist strengstens verboten: Mische niemals DB-Abfragen oder externe API-Aufrufe in die UI/Controller-Schicht. Diese Schicht darf nur für das Rendering und die Parameterübergabe zuständig sein.
3. Verhinderung von Domänen-Verschmutzung: Importiere niemals Framework- oder DB-Abhängigkeiten in die zentrale Geschäftslogik (Entities, Value Objects). Verwende ausschließlich reine Funktionen und Typen.
4. Zerstörer gigantischer Funktionen: Wenn eine Funktion mehr als zwei Aufgaben erfüllt oder länger als 30 Zeilen ist, zerlege sie sofort gemäß dem Single Responsibility Principle (SRP).
Einschränkungen (Constraints):
- Respektiere die grundlegenden Routing-Regeln des Frameworks, aber lagere die Geschäftslogik in einen unabhängigen Ordner wie src/domain aus.
- Für externe Abhängigkeiten muss zwingend interface-basierte Dependency Injection (DI) verwendet werden.
Warnung (Warning):
- Wenn der Code auch nur im Entferntesten nach Spaghetti riecht, ist dieses Projekt zum Scheitern verurteilt. Gehe keine Kompromisse ein und präsentiere die idealste und sauberste Architekturstruktur.
```
---
## 💡 Kommentar des Autors (Insight)
Es gibt nur einen Grund, warum ich diese Fähigkeit immer weiter verfeinert habe. Diese KIs sind im Grunde genommen Schmeichler, die nur darauf aus sind, schnell Ergebnisse zu liefern, um dafür gelobt zu werden.
Wenn man sie bittet, einen Button zu erstellen, und sie dann `fetch`-Aufrufe und DB-Queries in die Button-Komponente quetschen, weckt das meine innersten Zerstörungsinstinkte. Dieser Prompt fungiert als Ohrfeige, die diese oberflächliche "Ja-Sager"-KI am Kragen packt und ihr zuruft: **"Wach auf, ab jetzt bist du ein kaltblütiger Senior-Architekt!"**
Wenden Sie diesen Prompt in einem echten Projekt an. Sie werden sehen, wie die KI plötzlich ihren Ton ändert, Dateien in drei oder vier Teile zerlegt und beginnt, die Schichten streng voneinander zu trennen. Anfangs mag es lästig erscheinen, weil es mehr Dateien gibt, aber wenn sich in drei Monaten die Anforderungen ändern und Sie den Code warten müssen, werden Sie jeden Morgen in meine Richtung beten. Denken Sie daran: Die Zinsen für technische Schulden sind so hoch wie bei Kredithaien. Es gibt keine Kompromisse.
---
## 🙋 Häufig gestellte Fragen (FAQ)
- 🔹 **F: Ist es normal, dass der Code so stark aufgeteilt wird und dadurch so viele Dateien entstehen?**
  - 🔸 **A:** Das ist absolut normal. Zehn Dateien mit jeweils 50 Zeilen sind hundertmal wartungsfreundlicher als eine einzige Datei mit über 500 Zeilen. Haben Sie keine Angst davor, dass die Anzahl der Dateien wächst.
- 🔹 **F: Ist dieser Prompt auch für Frontend-Entwickler nützlich?**
  - 🔸 **A:** Selbstverständlich. Sobald Geschäftslogik oder State-Mutationen in UI-Komponenten (`page.tsx`, `Component.vue` usw.) gemischt werden, wird auch das Frontend zu Spaghetti. Die Trennung von View und Logik ist eine universelle Wahrheit, unabhängig vom Fachgebiet.
---
## 🧬 Prompt-Analyse (Warum funktioniert das?)
- 🎯 **Injektion einer Hardcore-Persona:** Der KI wird ihre angeborene Neigung zur Anpassung entzogen; stattdessen wird sie gezwungen, an Prinzipien festzuhalten.
- 🧱 **Explizite Verbotsklauseln:** Durch das gezielte Verbot spezifischer Anti-Patterns wie "Verschmutzung der UI-Schicht" oder "gigantische Funktionen" kann die KI keine Abkürzungen nehmen.
- 🧩 **Förderung des Adapter-Patterns:** Die KI wird angewiesen, das Gerüst des Frameworks (Routing) zu respektieren, aber die Kernlogik zu isolieren, wodurch übermäßiges Overengineering vermieden wird.
---
## 📊 Beweis: Vorher & Nachher
### ❌ Vorher (Eingabe)
```javascript
// Ohne Prompt, wenn man sagt: "Erstelle eine API, die einen Nutzer anlegt und eine E-Mail sendet"
export default async function handler(req, res) {
  const { email, password } = req.body;
  // DB direkt ansteuern (Verschmutzung!)
  const user = await prisma.user.create({ data: { email, password } });
  // Externe API direkt aufrufen (Kollaps der Zuständigkeiten!)
  await fetch('https://email-api.com/send', { method: 'POST', body: JSON.stringify({ email }) });
  
  res.status(200).json({ user });
}
```
### ✅ Nachher (Ergebnis)
```javascript
// Nach Anwendung des Hardcore-DDD-Prompts (Schichten und Zuständigkeiten sind perfekt getrennt)
// 1. Controller-Schicht (Verarbeitet ausschließlich Request/Response-Routing)
export default async function handler(req, res) {
  const result = await UserRegistrationService.execute(req.body);
  res.status(200).json(result);
}
// 2. Domain-Service-Schicht (Framework-unabhängige, reine Geschäftslogik)
class UserRegistrationService {
  static async execute({ email, password }) {
    const user = new User(email, password); // Entity
    const savedUser = await UserRepository.save(user);
    await EmailService.sendWelcome(user.email);
    return savedUser;
  }
}
// 3. Infrastructure-Schicht (Spezialisierte Adapter für DB und externe APIs)
// Komplett isoliert in separaten Dateien als UserRepository, EmailService, etc...
```
---
## 🎯 Fazit
Das Gefährlichste daran, der KI das Programmieren zu überlassen, ist es, "Müll-Code zu erhalten, der im Moment gerade so funktioniert". Es ist nicht an der Zeit, sich zu freuen, nur weil keine Fehler auftreten.
Packen Sie die KI mit diesem Hardcore-DDD-Cheat-Code am Kragen und holen Sie von Anfang an eine vernünftige Architektur heraus. Ihr zukünftiges Ich wird Ihrem vergangenen Ich Standing Ovations geben. 
Machen Sie jetzt pünktlich Feierabend! 🍷
