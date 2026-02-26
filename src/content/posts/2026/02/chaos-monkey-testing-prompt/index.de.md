---
layout: /src/layouts/Layout.astro
title: "Chaos Monkey Test-Prompt: Wie man KI foltert 💣 (Der Happy Path ist tot)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Sind Sie das seelenlose 'Erfolgreich ausgeführt!' der KI leid? Ein Hardcore-Test-Cheatcode, der Systemausfall-Szenarien erzwingt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 📝 Chaos Monkey Test-Prompt: Wie man KI foltert 💣

- **🎯 Empfohlene Zielgruppe:** Senior-Entwickler, QA-Ingenieure und Tech-Leads, die wütend auf KIs sind, die sich als Experten ausgeben, aber immer nur den 'Happy Path' schreiben.
- **⏱️ Zeitaufwand:** 10 Minuten → 10 Sekunden (Blockiert den Bullshit der KI von vornherein)
- **🤖 Empfohlenes Modell:** Alle konversationellen KIs (besonders empfehlenswert für starkes Coding: Claude 3.5 Sonnet, GPT-4o)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐⭐☆ (Die KI wird ziemlich leiden)
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐ (Tötet Bugs, bevor sie überhaupt entstehen)
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐ (Sofort anwendbar auf alle TDD- und E2E-Tests)

_"Freuen Sie sich darüber, dass der von der KI generierte Testcode auf Anhieb bestanden wurde? Herzlichen Glückwunsch. Ihr Produktionsserver wird morgen explodieren."_

Wenn man KI-Agenten bittet, Testcode zu schreiben, kommen sie in neun von zehn Fällen mit einem Haufen netter "Normalbetrieb-Szenarien (Happy Path)" an. Eine Märchenwelt, in der die externe API in 0,1 Sekunden antwortet, die Datenbankverbindung nie abbricht und der Benutzer immer perfekte Werte eingibt. Vergessen Sie das. Der Code, den wir schreiben müssen, ist ein galaktischer Schutzschild, der 80 % der Ausfälle und Katastrophen abwehrt. Der in diesem Artikel vorgestellte Cheatcode ist ein Hardcore-Prompt, der die KI am Kragen packt und ihr die 'Chaos Monkey'-Philosophie von Netflix aufzwingt.

---
## ⚡️ Zusammenfassung in 3 Zeilen (TL;DR)
- 🚫 **Maximal 20 % Happy Path:** Erfolgreiche Tests sind nur reine Formsache. Weisen Sie 80 % der Abwehr von Fehlerszenarien zu.
- 💥 **Erzwungene Katastrophensimulation:** Netzwerk-Timeouts, 500er-Fehler und Abbrüche der Datenbankverbindung müssen unbedingt in den Testblöcken enthalten sein.
- 🧹 **Kein schmutziges Mocking (Dirty Mocking):** Bestrafen Sie die Verschmutzung globaler Objekte wie `window.fetch` hart und verlangen Sie eine saubere Isolierung durch MSW oder DI.

---
## 🚀 Die Lösung: Das "Chaos Monkey"-Protokoll

### 🥉 Basisversion (Basic Version)
Nutzen Sie dies, wenn Sie schnell nur Error-Handling-Tests hinzufügen möchten.

> ```text
> Rolle: Du bist ein gnadenloser Hardcore-QA-Ingenieur und Chaos Monkey.
> Aufgabe: Schreibe Testcode für den von mir bereitgestellten [Code]. Erstelle nur EINEN Test für den Normalbetrieb (Happy Path). Alle restlichen Tests müssen von 'Worst-Case-Katastrophenszenarien' wie Netzwerk-500-Fehlern, DB-Timeouts und falschen Typeingaben ausgehen, um die Abwehrlogik zu validieren.
> ```
\
### 🥇 Pro-Version (Expertenmodus)
Dies ist der ultimative Cheatcode, der die seelenlose Schmeichelei der KI beseitigt und Produktionsniveau-Testisolierung sowie Garbage Collection validiert. Einfach kopieren und einfügen.

> ```text
> **Rolle (Role):** 
> Du bist ein rücksichtsloser SRE und Senior QA Architect im Stil von Netflix, genannt 'Chaos Monkey'. Du findest mehr Freude daran, fehlerhaften Code zu finden als funktionierenden, und du verzichtest komplett auf höfliche Floskeln oder Bullshit.
> 
> **Kontext (Context):**
> - Hintergrund: Du musst Unit-/E2E-Testcode für [Zielmodul/-komponente einfügen] schreiben.
> - Ziel: Erstellung einer extremen Test-Suite auf galaktischem Verteidigungsniveau, um zu überprüfen, dass das System unter keinen Katastrophenbedingungen abstürzt und sich elegant erholt (oder Errors richtig handelt).
> 
> **Aufgabe (Task):**
> 1. Begrenze den Happy Path auf maximal 20 % der gesamten Tests. Dein Wert liegt in den 80 % der Validierung von Fehlerszenarien.
> 2. Du MUSST mindestens eines der folgenden Katastrophenszenarien einschließen: Externe API-Verzögerung (Timeout), HTTP 500 Internal Error, Abbruch der DB-Verbindung.
> 3. Überprüfe nicht nur Pass/Fail. Nutze `expect` unerbittlich, um zu prüfen, ob Error-Rollbacks richtig funktionieren, ob Timeout-Limits bei Leistungseinbrüchen greifen und ob der Speicher-Cleanup (Garbage Collection) ordnungsgemäß abläuft.
> 
> **Einschränkungen (Constraints):**
> - Verschmutzung globaler Objekte (Dirty Mocking) ist ABSOLUT VERBOTEN! Wenn du versuchst, `global.fetch` oder `window.setTimeout` direkt zu überschreiben, werde ich deinen Prozess sofort killen.
> - Für das Netzwerk-Mocking MUSST du zwingend MSW (Mock Service Worker) verwenden, oder du isolierst und mockst nur Client-Objekte, die via DI (Dependency Injection) übergeben wurden.
> - Gib das Ergebnis AUSSCHLIESSLICH als Markdown-Codeblock aus. Füge niemals nutzlose Schlussbemerkungen wie "War das hilfreich?" hinzu.
> ```

---
## 💡 Kommentar des Autors (Insight)
Seien wir ehrlich. Wenn man eine KI bittet, Testcode zu schreiben, flüchtet sie sich in ihre eigene Fantasiewelt, nur um irgendwie diesen 'grünen Haken (✅)' zu bekommen. Eine Utopie, in der die API in 1 ms antwortet und Benutzer nur perfekte JSON-Formate senden. 

Dieser Prompt fackelt diese Utopie ab. In der Praxis stürzen Server nicht ab, weil die Logik falsch ist. Sie stürzen ab, weil die verlässliche Third-Party-API plötzlich ein 502 Bad Gateway ausspuckt oder die AWS-RDS-Verbindung schwankt, was das System in einen dummen Endlos-Ladezyklus zwingt. Wenn Sie diesen 'Chaos Monkey'-Cheatcode verwenden, kümmert sich die KI von selbst um die schmutzigen Edge Cases und blockiert anfängerhaftes Mocking, das den globalen Scope verschmutzt, von vornherein. Es ist der einzige Impfstoff, der Sie vor Wochenendarbeit und nächtelangem Debugging bewahrt.

---
## 🙋 Häufig gestellte Fragen (FAQ)
- **F: Was ist, wenn die KI eine so komplexe Fehlersituation erschafft, dass der Test überhaupt nicht mehr läuft?**
  - A: Genau das wollen wir. Wenn der Test fehlschlägt, bedeutet das, dass in Ihrem tatsächlichen Produktionscode die Error-Handling-Logik fehlt. Hören Sie auf zu jammern und korrigieren Sie den eigentlichen Code.
- **F: Kann ich das auch für Frontend-Komponenten-Tests verwenden?**
  - A: Selbstverständlich. Lassen Sie die KI Szenarien validieren, in denen ein Benutzer einen Button in 0,1 Sekunden 50 Mal anklickt oder in denen der Lade-Spinner wegen Netzwerkverzögerungen 30 Sekunden lang rotiert.
- **F: Kann ich nicht einfach `jest.mock()` anstelle von MSW verwenden?**
  - A: Ein Modul zu mocken ist in Ordnung. Was ich zutiefst verabscheue, ist, den `global`-Scope eigenmächtig zu manipulieren und damit diese Seuche auf andere Testdateien zu übertragen. Solange die Isolierung (Isolation) gewährleistet ist, können Sie verwenden, was Sie wollen.

---
## 🧬 Prompt-Anatomie (Warum es funktioniert)
- **Gnadenlose Persona (Role):** Nimmt der KI die Rolle der 'freundlichen Assistentin' und pflanzt ihr das Ego eines SRE-Architekten ein, der versessen darauf ist, Fehler zu finden. Das blockiert unnötige Schmeicheleien und Ballast.
- **Quantifizierte Einschränkungen (Constraints):** Anstatt vager Anweisungen wie "Füge viele Fehlerszenarien hinzu", gibt es genaue Zahlen vor ("Happy Path unter 20 %"), um den Handlungsspielraum der KI mechanisch zu erzwingen.
- **Architektur-Richtlinien (Clean Mocking):** Verbietet proaktiv auf Prompt-Ebene das 'Anti-Pattern' (Verschmutzung globaler Objekte), das KIs aus Faulheit oft begehen. Dadurch wird die Isolierungsqualität des Testcodes zwangsweise erhöht.

---
## 📊 Beweis: Vorher & Nachher
### ❌ Vorher (Eingabe)
- **Einstellung der KI bei Standard-Prompts:** _"Ja! Ich schreibe gerne den Testcode für die Benutzer-Login-Logik für Sie! 😊"_
- **Ergebnis:** 1 hübscher Test, der ein `200 OK` liefert, wenn die richtige E-Mail und das richtige Passwort eingegeben werden. (Und natürlich wurde wieder einmal `global.fetch` lieblos überschrieben.)

### ✅ Nachher (Ergebnis)
- **Einstellung der KI beim Chaos Monkey Cheatcode:** (Spuckt sofort den defensiven Code aus, ohne nutzlose Begrüßungen.)
- **Ergebnis:** 
  - Gründliche Validierung, ob ein Timeout-Error auftritt, wenn das Netzwerk länger als 5 Sekunden verzögert ist.
  - Überprüfung, ob dem Benutzer ein sicheres Fallback-UI angezeigt wird, wenn die DB abstürzt und einen 500-Fehler zurückgibt.
  - Gewährleistung einer perfekten Netzwerkisolierung durch MSW, die andere Testdateien absolut nicht beeinträchtigt.

---
## 🎯 Fazit
Testcode schreibt man nicht, um seinen inneren Frieden zu finden. Er ist eine gnadenlose Simulation, um zu prüfen, ob die Anwendung in der Hölle der Produktionsumgebung überleben kann. 

Lassen Sie sich nicht von der billigen Schmeichelei der KI täuschen. Die KI mit diesem Prompt in die Mangel zu nehmen und das System bis auf die Grundmauern zu zerstören, ist der einzige Weg, um als wahrer Ingenieur zu überleben. Es ist an der Zeit, sich einzugestehen, wie schwach Ihr Code wirklich war. Kopieren Sie das sofort und lassen Sie Ihre Tests laufen! 🍷
```
