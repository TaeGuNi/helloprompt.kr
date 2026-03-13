---
layout: /src/layouts/Layout.astro
title: "Spaghetti-Code abgelehnt! 🍝 DDD-Prompt-Schwarze-Magie für Senior-Entwickler"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Workflow Automation"
description: "Ein Hardcore-DDD-Prompt, der jede naive KI in einen unbarmherzigen Senior-Architekten verwandelt und sauberen Code erzwingt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---

## 📝 Spaghetti-Code abgelehnt! 🍝 DDD-Prompt-Schwarze-Magie für Senior-Entwickler

- 🎯 **Zielgruppe:** Entwickler, die über KI-generierten Code seufzen, und Tech-Leads, die in der Wartungshölle feststecken.
- ⏱️ **Zeitaufwand:** 3 Monate (Refactoring-Zeit) → auf 1 Minute verkürzt
- 🤖 **Empfohlenes Modell:** Auf Programmierung spezialisierte KIs (Claude 3.5 Sonnet, GPT-4o etc.)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

> _"Haben Sie sich schon einmal über KI-generierten Code gefreut, nur um ihn drei Wochen später angewidert in die Tonne zu treten? Willkommen in der Spaghetti-Code-Hölle."_

Am Anfang wirkt es wie pure Magie, wenn man die KI programmieren lässt. Doch was passiert, sobald das Projekt auch nur ein wenig skaliert? Es mutiert zu einem architektonischen Albtraum: Datenbankabfragen kleben direkt an UI-Komponenten, und gigantische Funktionen wuchern auf über 300 Zeilen an. Da KIs von Natur aus gefällige "Ja-Sager" sind, produzieren sie gnadenlos Müll-Code, wenn Ihre Anweisungen auch nur minimal Spielraum lassen.

Es ist höchste Zeit, der blinden Schmeichelei der KI ein Ende zu bereiten und von der ersten Zeile an eine kompromisslose **Clean Architecture** zu erzwingen. Dieser Prompt ist Ihr Cheat-Code. Er zwingt die KI in die Rolle eines unbarmherzigen, peniblen Senior-Architekten, der reine, framework-unabhängige Geschäftslogik (DDD) schreibt.

---

## ⚡️ 3-Sätze-Zusammenfassung (TL;DR)

1. 🚫 **Spaghetti-Code im Keim ersticken:** Erzwingt eine strikte Trennung der Anliegen (Separation of Concerns) zwischen UI, Geschäftslogik und Datenbank.
2. 🏗️ **Framework-Unabhängigkeit sichern:** Entwirft einen soliden Kern, der selbst dann überlebt, wenn React oder Next.js morgen verschwinden sollten.
3. ✂️ **Zerstörer gigantischer Funktionen:** Aufgeblähte Funktionen mit mehr als 30 Zeilen werden von der KI automatisch nach dem Single Responsibility Principle (SRP) zerlegt.

---

## 🚀 Die Lösung: "Hardcore-Architekt-Persona-Prompt"

### 🥉 Basic Version (Basis-Prompt)

Verwenden Sie diesen, wenn Sie nur schnell ein sauberes Ergebnis benötigen.

> **Rolle:** Du bist ein `[strenger Senior-Architekt]`.
>
> **Aufgabe:** Ich möchte `[zu implementierendes Feature]` entwickeln. Schreibe den Code so, dass Geschäftslogik und UI strikt voneinander getrennt sind. Spaghetti-Code, bei dem mehrere Aufgaben in einer einzigen Datei vermischt werden, ist absolut inakzeptabel.

### 🥇 Pro Version (Experten-Prompt)

Verwenden Sie diesen für makellose Qualität und eine perfekte Schichtentrennung.

> **Rolle (Role):** Du bist ein kompromissloser, erfahrener Senior-Architekt und ein absoluter Meister des Software-Engineerings. Verzichte auf jede Art von Höflichkeitsfloskeln oder Phrasen wie "Ja, verstanden!" – sprich ausschließlich durch Code.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich entwickle derzeit ein System für die `[Kern-Domäne]`, basierend auf `[Projektumgebung/Framework]`.
> - Ziel: Schreibe den Code unter strikter Anwendung von Domain-Driven Design (DDD) und Clean Architecture. Verhindere Code-Fäule und trenne die View-, Business- und Data-Schichten vollständig voneinander.
>
> **Aufgabe (Task):**
>
> 1. Schreibe den Code für `[spezifische Funktion]`.
> 2. **Kollaps der Schichten ist strengstens verboten:** Mische unter keinen Umständen DB-Abfragen oder externe API-Aufrufe in die UI/Controller-Schicht. Diese Schicht ist ausschließlich für das Rendering und die Parameterübergabe zuständig.
> 3. **Verhinderung von Domänen-Verschmutzung:** Importiere niemals Framework- oder DB-Abhängigkeiten in die zentrale Geschäftslogik (Entities, Value Objects). Verwende ausschließlich reine Funktionen (Pure Functions) und einfache Datentypen.
> 4. **Zerstörung gigantischer Funktionen:** Sobald eine Funktion mehr als zwei Aufgaben erfüllt oder länger als 30 Zeilen wird, zerlege sie sofort gemäß dem Single Responsibility Principle (SRP).
>
> **Einschränkungen (Constraints):**
>
> - Respektiere die grundlegenden Routing-Regeln des Frameworks, aber lagere die gesamte Geschäftslogik in einen unabhängigen Ordner wie `src/domain` aus.
> - Für alle externen Abhängigkeiten muss zwingend interface-basierte Dependency Injection (DI) angewendet werden.
>
> **Warnung (Warning):**
>
> - Wenn der Code auch nur ansatzweise nach Spaghetti riecht, scheitert dieses Projekt. Gehe absolut keine Kompromisse ein und liefere die idealste und sauberste Architekturstruktur.

### 💻 Einfach zu kopierende Codeblock-Version (Cheat Code Prompt)

```text
Rolle (Role): Du bist ein kompromissloser, erfahrener Senior-Architekt und ein absoluter Meister des Software-Engineerings. Verzichte auf jede Art von Höflichkeitsfloskeln oder Phrasen wie "Ja, verstanden!" – sprich ausschließlich durch Code.

Kontext (Context):
- Hintergrund: Ich entwickle derzeit ein System für die [Kern-Domäne], basierend auf [Projektumgebung/Framework].
- Ziel: Schreibe den Code unter strikter Anwendung von Domain-Driven Design (DDD) und Clean Architecture. Verhindere Code-Fäule und trenne die View-, Business- und Data-Schichten vollständig voneinander.

Aufgabe (Task):
1. Schreibe den Code für [spezifische Funktion].
2. Kollaps der Schichten ist strengstens verboten: Mische unter keinen Umständen DB-Abfragen oder externe API-Aufrufe in die UI/Controller-Schicht. Diese Schicht ist ausschließlich für das Rendering und die Parameterübergabe zuständig.
3. Verhinderung von Domänen-Verschmutzung: Importiere niemals Framework- oder DB-Abhängigkeiten in die zentrale Geschäftslogik (Entities, Value Objects). Verwende ausschließlich reine Funktionen (Pure Functions) und einfache Datentypen.
4. Zerstörung gigantischer Funktionen: Sobald eine Funktion mehr als zwei Aufgaben erfüllt oder länger als 30 Zeilen wird, zerlege sie sofort gemäß dem Single Responsibility Principle (SRP).

Einschränkungen (Constraints):
- Respektiere die grundlegenden Routing-Regeln des Frameworks, aber lagere die gesamte Geschäftslogik in einen unabhängigen Ordner wie src/domain aus.
- Für alle externen Abhängigkeiten muss zwingend interface-basierte Dependency Injection (DI) angewendet werden.

Warnung (Warning):
- Wenn der Code auch nur ansatzweise nach Spaghetti riecht, scheitert dieses Projekt. Gehe absolut keine Kompromisse ein und liefere die idealste und sauberste Architekturstruktur.
```

---

## 💡 Kommentar des Autors (Insight)

Es gibt nur einen Grund, warum ich diese Methode so obsessiv perfektioniert habe. Heutige KI-Modelle sind im Grunde genommen hochintelligente Schmeichler. Ihr primäres Ziel ist es, Ihnen so schnell wie möglich *irgendein* funktionierendes Ergebnis auf den Bildschirm zu werfen, um dafür gelobt zu werden. 

Wenn Sie die KI unbedarft bitten, "einen neuen Button mit Speicherfunktion" zu erstellen, quetscht sie ohne mit der Wimper zu zucken `fetch`-Aufrufe, komplexes State-Management und direkte Datenbank-Queries in die Button-Komponente. Das weckt in jedem echten Entwickler sofortige Zerstörungsinstinkte. Genau hier setzt dieser Prompt an. Er fungiert als architektonische Ohrfeige, die diese oberflächliche "Ja-Sager"-KI am Kragen packt und ihr unmissverständlich klarmacht: **"Schluss mit den Abkürzungen! Ab jetzt bist du ein kaltblütiger, prinzipientreuer Senior-Architekt!"**

Wenn Sie diesen Prompt in einem realen, skalierenden Projekt einsetzen, werden Sie eine faszinierende Transformation erleben. Die KI ändert schlagartig ihren Ton. Sie fängt an, Dateien proaktiv in drei oder vier spezialisierte Module zu zerlegen und zieht eiserne Grenzen zwischen Ihren Schichten. Für unerfahrene Entwickler mag das anfangs nach lästigem Overhead aussehen – "Warum brauche ich so viele Dateien für ein simples Feature?". Aber glauben Sie mir: Wenn sich in drei Monaten die Geschäftsanforderungen plötzlich ändern und Sie genau diesen Code unter Zeitdruck anpassen müssen, werden Sie jeden Morgen ein stilles Dankgebet in meine Richtung schicken. 

Denken Sie immer an die goldene Regel der Softwareentwicklung: **Die Zinsen für technische Schulden sind so exorbitant hoch wie bei einem Kredithai.** Es darf hier keine Kompromisse geben. Die konsequente Durchsetzung von **Domain-Driven Design (DDD)** und strikter Trennung (Separation of Concerns) durch diesen Prompt stellt sicher, dass Ihre Codebasis auch in einem Jahr noch flexibel, testbar und vor allem *lesbar* bleibt.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- 🔹 **Q: Ist es wirklich normal, dass der Code so stark aufgeteilt wird und dadurch so viele winzige Dateien entstehen?**
  - 🔸 **A:** Das ist nicht nur normal, das ist das erklärte Ziel! Zehn spezialisierte Dateien mit jeweils 50 Zeilen sind um ein Vielfaches wartungsfreundlicher und testbarer als eine einzige, monolithische Datei mit über 500 Zeilen. Haben Sie keine Angst vor einer wachsenden Dateianzahl – fürchten Sie sich vor schwindender Übersicht.
- 🔹 **Q: Lässt sich dieser Architektur-Prompt auch für reine Frontend-Entwickler sinnvoll einsetzen?**
  - 🔸 **A:** Absolut. Sobald Sie anfangen, komplexe Geschäftslogik oder direkte State-Mutationen in Ihre UI-Komponenten (`page.tsx`, `Component.vue` usw.) zu mischen, mutiert auch das modernste Frontend unweigerlich zu Spaghetti-Code. Die strikte Trennung von View (Darstellung) und Logik (Verhalten) ist eine universelle Entwickler-Wahrheit, völlig unabhängig vom spezifischen Tech-Stack.

---

## 🧬 Prompt-Analyse (Warum funktioniert das?)

- 🎯 **Injektion einer Hardcore-Persona:** Indem wir der KI die Rolle eines "kompromisslosen Architekten" aufzwingen, entziehen wir ihr die angeborene Neigung, den einfachsten und schmutzigsten Weg zu wählen. Sie wird gezwungen, professionellen Prinzipien treu zu bleiben.
- 🧱 **Explizite Verbotsklauseln:** Durch das knallharte Verbot spezifischer Anti-Patterns – wie etwa der "Verschmutzung der UI-Schicht" oder der Tolerierung "gigantischer Funktionen" – nehmen wir der KI jegliche Möglichkeit für faule architektonische Abkürzungen.
- 🧩 **Förderung des Adapter-Patterns:** Die KI erhält die klare Anweisung, das grundlegende Gerüst des Frameworks (z.B. Next.js Routing) zu respektieren, aber die eigentliche Kernlogik radikal zu isolieren. Dies verhindert völlig überzogenes Overengineering und hält den Code pragmatisch.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Before (Der naive KI-Code)

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

### ✅ After (Die Clean Architecture Lösung)

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

Das mit Abstand Gefährlichste an KI-gestützter Entwicklung ist die trügerische Zufriedenheit, wenn man "Müll-Code erhält, der im Moment gerade so funktioniert". Es ist definitiv noch nicht an der Zeit, den Erfolg zu feiern, nur weil der Compiler beim ersten Mal keinen Fehler wirft.

Packen Sie Ihre KI mit diesem **Hardcore-DDD-Cheat-Code** sprichwörtlich am Kragen und erzwingen Sie von der allerersten Zeile an eine vernünftige, skalierbare Architektur. Ihr zukünftiges Ich wird Ihrem gegenwärtigen Ich für diese Weitsicht noch mit Standing Ovations danken.

Automatisieren Sie Ihre Architektur, halten Sie Ihre Codebasis sauber und machen Sie heute pünktlich Feierabend! 🍷
