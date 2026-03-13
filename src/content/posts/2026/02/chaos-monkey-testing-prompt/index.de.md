---
layout: /src/layouts/Layout.astro
title: "Chaos Monkey Test-Prompt: Wie man KI foltert 💣 (Der Happy Path ist tot)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "General"
description: "Haben Sie genug vom seelenlosen 'Erfolgreich ausgeführt!' der KI? Ein Hardcore-Test-Cheatcode, der unerbittlich Systemausfall-Szenarien erzwingt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 📝 Chaos Monkey Test-Prompt: Wie man KI foltert 💣

- **🎯 Empfohlene Zielgruppe:** Senior-Entwickler, QA-Ingenieure und Tech-Leads, die es satthaben, dass KIs nur den idealen 'Happy Path' abdecken.
- **⏱️ Zeitaufwand:** 10 Minuten → 10 Sekunden (Erstickt KI-Bullshit im Keim)
- **🤖 Empfohlenes Modell:** Alle konversationellen KIs (besonders für komplexes Coding: Claude 3.5 Sonnet, GPT-4o)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐⭐☆ (Die KI wird ziemlich leiden)
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐ (Tötet Bugs, bevor sie überhaupt entstehen)
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐ (Sofort anwendbar auf alle TDD- und E2E-Tests)

_"Freuen Sie sich darüber, dass der von der KI generierte Testcode auf Anhieb bestanden wurde? Herzlichen Glückwunsch. Ihr Produktionsserver wird morgen explodieren."_

Wenn Sie eine KI bitten, Testcode zu schreiben, erhalten Sie fast immer eine Ansammlung naiver „Schönwetter-Szenarien“ – den berüchtigten Happy Path. Es ist eine trügerische Märchenwelt: APIs antworten stets in 0,1 Sekunden, Datenbankverbindungen sind absolut stabil und Nutzer geben ausschließlich fehlerfreie Daten ein. Vergessen Sie diese Illusion. In der unbarmherzigen Realität der Produktion benötigen wir Code, der wie ein massiver Schutzschild fungiert und 80 % aller denkbaren Systemausfälle und Edge Cases abwehrt. Dieser Cheatcode ist ein kompromissloser Hardcore-Prompt. Er packt die KI sprichwörtlich am Kragen und zwingt ihr unmissverständlich die gefürchtete „Chaos Monkey“-Philosophie von Netflix auf.

---

## ⚡️ Zusammenfassung in 3 Zeilen (TL;DR)

- 🚫 **Maximal 20 % Happy Path:** Erfolgreiche Tests sind reine Formsache. Widmen Sie 80 % der Testabdeckung den kritischen Fehlerszenarien.
- 💥 **Erzwungene Katastrophensimulation:** Netzwerk-Timeouts, HTTP 500-Fehler und Datenbankabbrüche müssen zwingende Bestandteile der Test-Suite sein.
- 🧹 **Kein Dirty Mocking:** Bestrafen Sie die globale Verschmutzung von Objekten (wie `window.fetch`) rigoros und fordern Sie eine saubere Isolierung durch MSW oder Dependency Injection (DI).

---

## 🚀 Die Lösung: Das "Chaos Monkey"-Protokoll

### 🥉 Basisversion (Basic Version)

Nutzen Sie diese Variante, wenn Sie auf die Schnelle robustes Error-Handling in Ihre Tests integrieren müssen.

> **Rolle:** Du bist ein gnadenloser Hardcore-QA-Ingenieur und Chaos Monkey.
> 
> **Aufgabe:** Schreibe Testcode für den folgenden `[Quellcode]`. Erstelle exakt EINEN Test für den Normalbetrieb (Happy Path). Alle restlichen Tests müssen auf Worst-Case-Szenarien basieren – wie Netzwerk-500-Fehler, DB-Timeouts und fehlerhafte Typeingaben –, um die Abwehrlogik unerbittlich zu validieren.

### 🥇 Pro-Version (Expertenmodus)

Dies ist der ultimative Cheatcode, der die seelenlose Gefälligkeit der KI eliminiert. Er erzwingt Test-Isolierung auf Produktionsniveau und validiert sogar die Garbage Collection. Einfach kopieren und einfügen.

> **Rolle (Role):** 
> Du bist ein rücksichtsloser SRE und Senior QA Architect im Stil von Netflix, bekannt als 'Chaos Monkey'. Du findest mehr Befriedigung darin, fehlerhaften Code zum Absturz zu bringen, als funktionierenden abzusegnen. Verzichte komplett auf höfliche Floskeln oder leeres Gerede.
> 
> **Kontext (Context):**
> - Hintergrund: Du musst Unit-/E2E-Testcode für `[Zielmodul oder Komponente]` schreiben.
> - Ziel: Erstellung einer extremen, absolut kugelsicheren Test-Suite. Sie muss sicherstellen, dass das System unter keinen Umständen abstürzt und sich selbst bei Katastrophen elegant erholt (oder Errors korrekt abfängt).
> 
> **Aufgabe (Task):**
> 1. Begrenze den Happy Path auf maximal 20 % der gesamten Tests. Dein wahrer Fokus liegt zu 80 % auf der Validierung fataler Fehlerszenarien.
> 2. Du MUSST zwingend mindestens eines der folgenden Katastrophenszenarien implementieren: Externe API-Verzögerung (Timeout), HTTP 500 Internal Error, sofortiger Abbruch der Datenbankverbindung.
> 3. Überprüfe nicht nur stupide auf Pass/Fail. Nutze `expect` unerbittlich, um zu verifizieren, ob Error-Rollbacks sauber funktionieren, ob Timeout-Limits bei extremen Leistungseinbrüchen greifen und ob der Speicher-Cleanup (Garbage Collection) ordnungsgemäß ausgeführt wird.
> 
> **Einschränkungen (Constraints):**
> - Die Verschmutzung globaler Objekte (Dirty Mocking) ist ABSOLUT VERBOTEN! Wenn du versuchst, `global.fetch` oder `window.setTimeout` direkt zu überschreiben, werde ich deinen Prozess sofort beenden.
> - Für das Netzwerk-Mocking MUSST du zwingend MSW (Mock Service Worker) verwenden, oder du isolierst und mockst ausschließlich Client-Objekte, die via DI (Dependency Injection) übergeben wurden.
> - Gib das Ergebnis AUSSCHLIESSLICH als Markdown-Codeblock aus. Füge niemals nutzlose Schlussbemerkungen wie "War das hilfreich?" hinzu.

---

## 💡 Kommentar des Autors (Insight)

Sind wir doch mal ehrlich: Wenn man eine KI bittet, Testcode zu schreiben, flüchtet sie sich in ihre eigene kleine Fantasiewelt, nur um möglichst schnell diesen begehrten 'grünen Haken (✅)' zu generieren. Es ist eine perfekte Utopie, in der die API stets in 1 ms antwortet und Benutzer ausnahmslos makellose JSON-Formate abschicken. 

Dieser Prompt fackelt genau diese Utopie gnadenlos ab. In der Praxis stürzen Server nicht ab, weil die Geschäftslogik einen marginalen Fehler aufweist. Sie kollabieren, weil die ach so verlässliche Third-Party-API plötzlich ein 502 Bad Gateway ausspuckt oder die AWS-RDS-Verbindung für eine Millisekunde wackelt und das System in einen fatalen Endlos-Ladezyklus zwingt. Wenn Sie diesen 'Chaos Monkey'-Cheatcode einsetzen, knöpft sich die KI automatisch die hässlichsten Edge Cases vor. Sie blockiert anfängerhaftes Mocking, das den globalen Scope verschmutzt, direkt im Ansatz. Dieser Prompt ist das einzige Gegenmittel, das Sie zuverlässig vor Wochenendarbeit und nächtelangem Debugging bewahrt.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Was ist, wenn die KI eine derart komplexe Fehlersituation erschafft, dass der Test überhaupt nicht mehr durchläuft?**
  - A: Exakt das ist das Ziel. Wenn der Test fehlschlägt, bedeutet das schlichtweg, dass in Ihrem tatsächlichen Produktionscode die essenzielle Error-Handling-Logik fehlt. Reparieren Sie den eigentlichen Code, anstatt sich über den Test zu beschweren.

- **F: Kann ich dieses Konzept auch für Frontend-Komponenten-Tests verwenden?**
  - A: Selbstverständlich. Lassen Sie die KI Szenarien validieren, in denen ein verzweifelter User einen Button in 0,1 Sekunden 50 Mal anklickt, oder in denen der Lade-Spinner wegen massiver Netzwerkverzögerungen volle 30 Sekunden lang rotiert.

- **F: Kann ich nicht einfach `jest.mock()` anstelle von MSW verwenden?**
  - A: Ein spezifisches Modul zu mocken, ist völlig in Ordnung. Was jedoch strikt vermieden werden muss, ist die eigenmächtige Manipulation des `global`-Scopes, wodurch diese Mocking-Seuche auf andere Testdateien übergreift. Solange eine absolute Isolierung gewährleistet bleibt, steht Ihnen die Wahl des Tools frei.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert)

- **Gnadenlose Persona (Role):** Dieser Kniff entzieht der KI die Rolle der 'freundlichen Assistentin' und pflanzt ihr stattdessen das rücksichtslose Ego eines SRE-Architekten ein, der geradezu versessen darauf ist, das System zu brechen. Das eliminiert unnötige Schmeicheleien und mentalen Ballast.
- **Quantifizierte Einschränkungen (Constraints):** Anstatt vager Anweisungen wie "Füge viele Fehlerszenarien hinzu", gibt der Prompt messbare Metriken vor ("Happy Path unter 20 %"). Dadurch wird der Handlungsspielraum der KI systematisch eingegrenzt.
- **Architektur-Richtlinien (Clean Mocking):** Verbietet proaktiv auf Prompt-Ebene das gefürchtete 'Anti-Pattern' (Verschmutzung globaler Objekte), das KIs aus reiner Faulheit oft anwenden. So wird die Isolierungsqualität des Testcodes zwangsweise auf Produktionsniveau gehoben.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

- **Einstellung der KI bei Standard-Prompts:** _"Ja! Ich schreibe gerne den Testcode für die Benutzer-Login-Logik für Sie! 😊"_
- **Ergebnis:** Ein niedlicher, isolierter Test, der ein geschmeidiges `200 OK` liefert, wenn die richtige E-Mail und das passende Passwort eingegeben werden. (Und natürlich wurde wieder einmal `global.fetch` völlig lieblos überschrieben.)

### ✅ Nachher (Ergebnis)

- **Einstellung der KI beim Chaos Monkey Cheatcode:** (Spuckt sofort den defensiven Code aus, vollkommen ohne nutzlose Begrüßungsfloskeln.)
- **Ergebnis:** 
  - Gründliche Validierung, ob ein sauberer Timeout-Error geworfen wird, wenn das Netzwerk länger als 5 Sekunden hängt.
  - Strikte Überprüfung, ob dem User ein sicheres Fallback-UI präsentiert wird, falls die Datenbank abstürzt und einen 500-Fehler zurückwirft.
  - Gewährleistung einer makellosen Netzwerkisolierung durch MSW, die garantiert keine anderen Testdateien kontaminiert.

---

## 🎯 Fazit

Testcode schreibt man nicht, um sein Gewissen zu beruhigen. Er ist eine gnadenlose Simulation, um zu überprüfen, ob die Anwendung im absoluten Chaos der Produktionsumgebung überleben kann. 

Lassen Sie sich nicht von der billigen Schmeichelei der KI einlullen. Die KI mit diesem Prompt in die Mangel zu nehmen und das System bis auf die Grundmauern zu stressen, ist der einzige Weg, um als wahrer Engineer zu bestehen. Es ist an der Zeit, sich einzugestehen, wie fragil Ihr Code wirklich war. Kopieren Sie diesen Prompt sofort und lassen Sie Ihre Tests brennen! 🍷
