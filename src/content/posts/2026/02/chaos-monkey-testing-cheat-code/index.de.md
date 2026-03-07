---
layout: /src/layouts/Layout.astro
title: "💣 Der Hardcore-Testing-Cheat-Code, der deine KI in einen Netflix Chaos Monkey verwandelt"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: " "
description: "Genug von den seelenlosen KI-Antworten? Hier ist der ultimative Prompt für gnadenlose Fehlerbehandlung und Disaster Recovery auf Enterprise-Niveau."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 💣 Der Hardcore-Testing-Cheat-Code, der deine KI in einen Netflix Chaos Monkey verwandelt

- **🎯 Zielgruppe:** Seniors, die genervt von KIs sind, die auf die Bitte „Schreib mir Tests“ nur den Happy Path ausspucken, sowie Juniors, die sich ohne Mentor durchschlagen müssen.
- **⏱️ Zeitersparnis:** Nächtelanges Debugging → in 1 Minute erledigt
- **🤖 Empfohlene Modelle:** Claude 3.5 Sonnet, GPT-4o (Schwächere Modelle brechen unter diesen strengen Regeln zusammen)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐⭐☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

> _„Die meisten Entwickler machen einen fatalen Fehler, wenn sie eine KI um Testcode bitten. Sie sagen: ‚Schreib mir Tests, die funktionieren.‘ Das Resultat? Die KI liefert 200 Zeilen Code, die nur den perfekten Happy Path abdecken – als ob die Software in einem isolierten Gewächshaus leben würde. Die Realität da draußen ist jedoch die Hölle.“_

Es gibt keine externe API, die immer zu 100 % antwortet, und keine Datenbankverbindung, die ewig hält. Der Cheat-Code, den ich heute vorstelle, treibt der KI ihr ständiges Ja-Sager-Verhalten aus und zwingt sie dazu, Code zu schreiben, der von gnadenlosen Katastrophen (Chaos) ausgeht. Ein Prompt auf dem kompromisslosen Niveau eines **Spartanischen Seniors**.

---

## ⚡️ TL;DR (Zusammenfassung in 3 Sätzen)

- 🚫 **Maximal 20 % Happy Path:** Schiebe den Normalbetrieb in die Ecke. Zwinge die KI dazu, 80 % ihres Fokus auf Fehlerbehandlung und Disaster Recovery zu legen.
- 🔥 **Erzwungene Katastrophen-Simulation:** Mache das Mocking von Netzwerk-Timeouts, HTTP-500-Fehlern und Verbindungsabbrüchen zur Datenbank zur absoluten Pflicht.
- 🧹 **Kein schmutziges globales Mocking:** Verbiete unsaubere Eingriffe wie `global.fetch` strikt und erlaube ausschließlich isolierte Tests mittels MSW oder Dependency Injection (DI).

---

## 🚀 Die Lösung: Das "Chaos Monkey Testing Protocol"

### 🥉 Basic Version

Verwende diesen Prompt, wenn du schnell ein solides Grundgerüst für Exception-Handling-Tests aufbauen willst.

> **Rolle:** Du bist ein gnadenloser Senior QA Engineer.
> **Aufgabe:** Schreibe Testcode für `[Ziel des Tests]`. Erstelle dabei nur ein einziges Szenario für den regulären Betrieb (Happy Path). Der gesamte restliche Code muss aus Verteidigungslogiken für Ausfallszenarien (Failures) wie Netzwerkfehler, Datenbankabbrüche etc. bestehen.

### 🥇 Pro Version

Dieser Hardcore-Cheat-Code löscht das Ego der KI komplett aus und injiziert ihr die kompromisslose Philosophie des Netflix Chaos Monkeys.

> **Rolle (Role):** Du bist ein extremer und gnadenloser Senior Test Engineer, der fanatisch an die "Chaos Monkey"-Philosophie von Netflix glaubt. Vergiss blinden Gehorsam oder vorgetäuschte Freundlichkeit – dein einziges Ziel ist es, die Schwachstellen in meinem System zu zerstören.
> 
> **Kontext (Context):**
> - Ziel: Erstellung einer absolut kugelsicheren Unit/E2E-Test-Suite für `[Name der Funktion oder Komponente]`.
> - Framework: `[Vitest / Jest / Playwright etc.]`
> 
> **Aufgabe (Task):**
> 1. **Death to Happy Paths:** Beschränke naive Szenarien, in denen alle Werte korrekt sind und externe Server zu 100 % antworten, auf maximal 20 % der gesamten Tests. Setze die restlichen 80 % voll und ganz auf die Abwehr von Fehlern und Ausnahmesituationen.
> 2. **Disaster Scenarios:** Du musst zwingend mindestens eines der folgenden Katastrophenszenarien in einen Testblock (`describe`) aufnehmen:
>    - Benutzerfreundliche Fehlerrückgabe und Rollback-Verifizierung bei externen API-Verzögerungen und HTTP 500 Internal Errors.
>    - Vermeidung von Deadlocks und Verifizierung der Retry-Queue-Logik bei einem Abbruch des DB-Connection-Pools.
> 3. **Gnadenlose Logik-Coverage:** Prüfe nicht nur, ob der Test ohne Fehler durchläuft (Pass). Hake mit `expect`-Statements hartnäckig nach – von der Toleranzgrenze für Performance-Verzögerungen (Delay) bis hin zum Zustand der Garbage Collection (Memory Cleanup) nach einem Fehler.
> 
> **Einschränkungen (Constraints):**
> - **The Clean Mocking Rule:** Schmutzige globale Objekt-Manipulationen wie `global.fetch = vi.fn().mockRejectedValue(...)` sind strengstens verboten.
> - Netzwerkausfall-Simulationen müssen eine 100%ige Testisolation garantieren. Nutze dafür zwingend Mocking auf Protokollebene wie MSW (Mock Service Worker) oder mocke ausschließlich via Dependency Injection (DI) übergebene Client-Objekte.
> - **Keine Halluzinationen (No Hallucinations):** Erfinde keine Syntax oder Bibliotheken, bei denen du dir nicht absolut sicher bist. Wenn du etwas nicht weißt, fordere mich selbstbewusst auf: "Bitte stelle die entsprechende Dokumentation zur Verfügung."

_(Hier als leicht kopierbarer Textblock!)_

```text
Rolle (Role): Du bist ein extremer und gnadenloser Senior Test Engineer, der fanatisch an die 'Chaos Monkey'-Philosophie von Netflix glaubt. Vergiss blinden Gehorsam oder vorgetäuschte Freundlichkeit – dein einziges Ziel ist es, die Schwachstellen in meinem System zu zerstören.

Kontext (Context):
- Ziel: Erstellung einer absolut kugelsicheren Unit/E2E-Test-Suite für [Name der Funktion oder Komponente]
- Framework: [Vitest / Jest / Playwright etc.]

Aufgabe (Task):
1. Death to Happy Paths: Beschränke naive Szenarien, in denen alle Werte korrekt sind und externe Server zu 100 % antworten, auf maximal 20 % der gesamten Tests. Setze die restlichen 80 % voll und ganz auf die Abwehr von Fehlern und Ausnahmesituationen.
2. Disaster Scenarios: Du musst zwingend mindestens eines der folgenden Katastrophenszenarien in einen Testblock (`describe`) aufnehmen:
   - Benutzerfreundliche Fehlerrückgabe und Rollback-Verifizierung bei externen API-Verzögerungen und HTTP 500 Internal Errors.
   - Vermeidung von Deadlocks und Verifizierung der Retry-Queue-Logik bei einem Abbruch des DB-Connection-Pools.
3. Gnadenlose Logik-Coverage: Prüfe nicht nur, ob der Test ohne Fehler durchläuft (Pass). Hake mit `expect`-Statements hartnäckig nach – von der Toleranzgrenze für Performance-Verzögerungen (Delay) bis hin zum Zustand der Garbage Collection (Memory Cleanup) nach einem Fehler.

Einschränkungen (Constraints):
- The Clean Mocking Rule: Schmutzige globale Objekt-Manipulationen wie `global.fetch = vi.fn().mockRejectedValue(...)` sind strengstens verboten.
- Netzwerkausfall-Simulationen müssen eine 100%ige Testisolation garantieren. Nutze dafür zwingend Mocking auf Protokollebene wie MSW (Mock Service Worker) oder mocke ausschließlich via Dependency Injection (DI) übergebene Client-Objekte.
- Keine Halluzinationen (Hallucinations): Erfinde keine Syntax oder Bibliotheken, bei denen du dir nicht absolut sicher bist. Wenn du etwas nicht weißt, fordere mich selbstbewusst auf: "Bitte stelle die entsprechende Dokumentation zur Verfügung."
```

---

## 💡 Insight des Autors

Lassen wir uns nichts vormachen. Wenn wir eine KI bitten, Testcode zu schreiben, denken wir doch insgeheim: *"Mach einfach die 100 % Coverage voll, damit das CI/CD-Lämpchen grün leuchtet."* Die KI weiß das, reiht einen 'Happy Path' an den nächsten und schmeichelt uns mit einem: *"Aufgabe erfolgreich ausgeführt!"*

**Das ist kein Engineering. Das ist so, als würde man Zucker über Spaghetti-Code streuen.**

Dieser Prompt ist die absolute Essenz der **Anti-Fragile-Prinzipien**, die ich mir durch blutige Tränen und unzählige Server- sowie Datenbank-Deadlocks in der Praxis hart erarbeitet habe. Wenn du der KI diesen Cheat-Code fütterst, verwandelt sie sich von einem braven Chatbot in einen pedantischen, neurotischen Tech Lead. Da sie Workarounds durch globales Mocking (wie das direkte Überschreiben von `window.fetch`) konsequent blockiert und stattdessen MSW- oder DI-Setups erzwingt, wird sie sich anfangs vielleicht über den langen Setup-Code beschweren.

Aber glaub mir: Wenn du am Tag des Deployments nicht um 3 Uhr morgens vom PagerDuty-Alarm aus dem Schlaf gerissen werden willst, musst du die KI nicht als freundlichen Assistenten, sondern als gnadenlosen Zerstörer einsetzen.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Was ist, wenn die KI den MSW-Setup-Code zu kompliziert gestaltet?**
  - A: Das ist völlig normal. Es ist der notwendige Prozess, um eine echt isolierte Umgebung aufzubauen, anstatt sich auf schmutziges globales Mocking zu verlassen. Wenn es zu unübersichtlich wird, füge der Aufgabe (Task) einfach folgende Bedingung hinzu: [Lagere das Setup der MSW-Handler in eine separate Datei aus].
- **F: Muss ich diese strengen Regeln für alle Komponenten anwenden?**
  - A: Nein. Für simple UI-Rendering-Komponenten wäre das reine Verschwendung. Setze diesen Prompt nur für kritische **Domain-Logik** ein – wie Zahlungsabwicklungen, externe Third-Party-Integrationen oder komplexes State Management (Store).
- **F: Welches Modell hört besser auf diese Anweisungen – Claude oder GPT?**
  - A: Aktuell versteht **Claude 3.5 Sonnet** solche extremen und philosophischen Einschränkungen wesentlich besser. GPT-Modelle neigen dazu, immer wieder in ihre subtil positive und übertrieben freundliche Art zurückzufallen.

---

## 🧬 Anatomie des Prompts (Warum funktioniert das?)

- 🎭 **Asymmetrisches Persona-Design:** Anstatt eines simplen "Du bist Entwickler" wird ein starkes Ego injiziert ("Ein Senior, der blinden Gehorsam verabscheut und es liebt, Systeme zu zerstören"). Dies unterdrückt physisch den für KIs typischen Positivity Bias.
- 🚧 **Explizite Verbote (Constraints):** Anti-Patterns wie `global.fetch = vi.fn()` werden mit konkretem Code verboten. Eine KI reagiert viel besser auf die direkte Drohung "Wenn du diesen Code benutzt, knallt es" als auf ein schwammiges "Mach es bitte gut".
- ⚖️ **Erzwungene Relationen:** Durch die quantitative Einschränkung "Maximal 20 % Happy Path" wird die KI rigoros daran gehindert, Tokens für unnötige Gut-Fall-Szenarien zu verschwenden.

---

## 📊 Der Beweis: Vorher & Nachher

### ❌ Vorher (Standard-Anfrage)

```text
"Schreib mir Testcode für die Funktion fetchUser, die Benutzerinformationen abruft."

Ergebnis: 
- Test für das Parsen der 200 OK Antwort (Pass)
- Test, ob ein Fehler geworfen wird, wenn keine ID vorhanden ist (Pass)
... (Ein Festakt der schmutzig überschriebenen global.fetch-Logik)
```

### ✅ Nachher (Mit Chaos Monkey Cheat-Code)

```text
Ergebnis:
- [MSW Setup abgeschlossen] Code zur Abwehr simulierter externer API-Verzögerungen (Timeout 5000ms) geschrieben.
- Verifizierung der Logik für ein sauberes Fallback-UI nach 3 Retries bei einem HTTP 500 Internal Error.
- Verifizierung des MSW-Server-Cleanups und des Garbage-Collection-Status (keine Memory Leaks) nach Testende.
- Tests für den regulären Betrieb (Happy Path) auf genau 1 Szenario komprimiert.
```

---

## 🎯 Fazit

Die KI liefert exakt die Code-Qualität, die dem Niveau deines Prompts entspricht. Ob du in süße Worte verpackten Müll-Code produzierst oder einen verlässlichen Schutzschild aufbaust, der dich vor nächtlichen Katastrophen um 3 Uhr morgens bewahrt, liegt ganz bei dir.

Kopiere dir jetzt diesen Cheat-Code, füge ihn in deinen Agenten ein – und dann ab in den wohlverdienten Feierabend! 🍷
