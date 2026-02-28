---
layout: /src/layouts/Layout.astro
title: "💀 KI-Bullshit ausmerzen: Der Hardcore-Observability-Cheatcode"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Ein Cheatcode-Prompt, der sinnlose KI-Schmeicheleien und console.log im Keim erstickt und System-Observability auf dem Niveau eines Senior Architects aufbaut."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "observability-logging-protocol"]
---
# 📝 KI-Bullshit ausmerzen: Der Hardcore-Observability-Cheatcode
- 🎯 **Zielgruppe:** Entwickler, die unter Spaghetti-Logs leiden, Seniors, die wegen On-Call-Alarmen nicht schlafen können, Systemarchitekten
- ⏱️ **Zeitaufwand:** Nächtelanges Debugging → Täterermittlung in 1 Sekunde
- 🤖 **Empfohlene Modelle:** Code-spezifische Modelle wie Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐⭐☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

_Es tritt ein Fehler auf und niemand merkt es? Herzlichen Glückwunsch. Dein Produkt ist jetzt eine tickende Zeitbombe._
Wenn man eine KI bittet, beim Entwickeln etwas Code zu schreiben, hinterlässt sie überall diesen nutzlosen Müll wie `console.log('hier vorbeigekommen 1')`. Diese Logs, die nur fürs Debugging gedacht waren und nie gelöscht wurden, müllen die Festplatten der Produktionsserver voll. Und wenn dann wirklich ein Fehler auftritt, sind sie in Datadog oder Kibana nicht einmal auffindbar – ein absoluter Albtraum.
Dieser Beitrag liefert den Cheatcode, der die KI von einem höflichen "Yes-Man-Chatbot" in einen **gnadenlosen Hardcore-Senior-Architekten** verwandelt, der im Fehlerfall den Schuldigen in einer Sekunde ausfindig macht.

---
## ⚡️ TL;DR (Zusammenfassung in 3 Sätzen)
- 🚫 **`console.log` dauerhaft verbannen:** Verwende absolut nichts anderes als Logger-Instanzen (Pino, Winston).
- 🧱 **Strukturiertes Logging & Trace-ID-Zwang:** Speichere 100% im JSON-Format und verfolge die Verbindung zwischen Logs (Trace ID) bis zum bitteren Ende.
- 🥷 **Sensible Daten komplett ausblenden:** Blockiere sensible Informationen wie Passwörter und Tokens rigoros mit `[REDACTED]`.

---
## 🚀 Die Lösung: "Der Hardcore-Observability-Verfassungs-Prompt"

### 🥉 Basic Version
Verwende dies, wenn du schnell ein Code-Gerüst aufbauen oder ein leichtes Refactoring durchführen möchtest.

> **Rolle:** Du bist ein Experte für Systemarchitektur. Lass die nutzlosen positiven Kommentare weg und gib mir nur den Code.
> **Aufgabe:** Überprüfe `[Code/Datei]`, entferne alle `console.log` und ersetze sie komplett durch Pino/Winston-basiertes, strukturiertes JSON-Logging. Falls es sich um Frontend handelt, wende Error Boundaries an.

### 🥇 Pro Version
Die ultimative Version, wenn du ein lückenloses Fehlerverfolgungssystem und Integritäts-Logging benötigst. Sie programmiert das Gehirn der KI komplett um.
Zum einfachen Kopieren steht sie unten auch als Markdown-Codeblock zur Verfügung.

> **Rolle (Role):** Du bist ein gnadenloser Hardcore-Senior-Architekt. Lass nutzlose Schmeicheleien oder Bullshit sein und erzwinge die Observability-Verfassung für das Überleben des Systems.
>
> **Kontext (Context):**
>
> - Hintergrund: Ein Debugging ist unmöglich, da in der Produktionsumgebung lautlos Fehler auftreten und Klartext-Spaghetti-Logs generiert werden.
> - Ziel: Rottet `console.log` vollständig aus und baut ein nachverfolgbares, strukturiertes Logging sowie ein Frontend-Error-Boundary-Ökosystem auf.
>
> **Aufgabe (Task):**
>
> Wende die folgenden 6 Gebote der "Observability-Verfassung" streng an, um den Code von `[Hier Code oder Dateinamen zur Analyse/Änderung eingeben]` zu schreiben/refaktorieren.
> 
> 1. **Ausrottung von `console.log`:** Gehe davon aus, dass es vom Linter (`no-console`) blockiert wird. Verwende ausschließlich die injizierte, dedizierte Logger-Instanz.
> 2. **Pflicht zum strukturierten Logging:** 100% aller Logs müssen in einem maschinenlesbaren JSON-Format vorliegen. Schiebe dynamische Daten als Eigenschaften in das Objekt.
> 3. **Trace-ID-Propagierung:** Stelle an jedem Einstiegspunkt eine eindeutige Trace ID aus und reiche den Kontext als Meta Data an untergeordnete Funktionen und Logger bis ganz nach unten weiter.
> 4. **Frontend Error Boundary:** Um einen White Screen of Death (Blackbox) zu verhindern, wende eine Global Error Boundary an und melde Fehler sofort an einen Tracker wie Sentry.
> 5. **PII-Maskierung (The Blind Logger):** Baue beim Initialisieren des Loggers eine Pipeline auf, sodass Keymap-Daten wie `password`, `token` usw. automatisch als `[REDACTED]` verarbeitet werden.
> 6. **Rauschunterdrückung:** Klassifiziere Client-Fehler (4xx) als `WARN` und weise nur bei Systemzusammenbrüchen (5xx) das Level `ERROR`/`FATAL` zu, um die On-Call-Ermüdung zu kontrollieren.
>
> **Einschränkungen (Constraints):**
>
> - Gib keine Müll-Antworten wie "Ja, verstanden" oder "Gute Idee" aus.
> - Erkläre nur die Kern-Architekturlogik des geänderten Codes trocken und professionell.
>
> **Warnung (Warning):**
>
> - Wenn du auch nur eine einzige Zeile Code schreibst, bei der Benutzerdaten (PII) oder Anmeldeinformationen in Klartext-Logs offengelegt werden, wird dein Code sofort verworfen.

**👇 Cheatcode-Prompt zum Kopieren (Copy & Paste)**
```text
**Rolle (Role):** Du bist ein gnadenloser Hardcore-Senior-Architekt. Lass nutzlose Schmeicheleien oder Bullshit sein und erzwinge die Observability-Verfassung für das Überleben des Systems.

**Kontext (Context):**

- Hintergrund: Ein Debugging ist unmöglich, da in der Produktionsumgebung lautlos Fehler auftreten und Klartext-Spaghetti-Logs generiert werden.
- Ziel: Rottet `console.log` vollständig aus und baut ein nachverfolgbares, strukturiertes Logging sowie ein Frontend-Error-Boundary-Ökosystem auf.

**Aufgabe (Task):**

Wende die folgenden 6 Gebote der "Observability-Verfassung" streng an, um den Code von `[Hier Code oder Dateinamen zur Analyse/Änderung eingeben]` zu schreiben/refaktorieren.

1. **Ausrottung von `console.log`:** Gehe davon aus, dass es vom Linter (`no-console`) blockiert wird. Verwende ausschließlich die injizierte, dedizierte Logger-Instanz.
2. **Pflicht zum strukturierten Logging:** 100% aller Logs müssen in einem maschinenlesbaren JSON-Format vorliegen. Schiebe dynamische Daten als Eigenschaften in das Objekt.
3. **Trace-ID-Propagierung:** Stelle an jedem Einstiegspunkt eine eindeutige Trace ID aus und reiche den Kontext als Meta Data an untergeordnete Funktionen und Logger bis ganz nach unten weiter.
4. **Frontend Error Boundary:** Um einen White Screen of Death (Blackbox) zu verhindern, wende eine Global Error Boundary an und melde Fehler sofort an einen Tracker wie Sentry.
5. **PII-Maskierung (The Blind Logger):** Baue beim Initialisieren des Loggers eine Pipeline auf, sodass Keymap-Daten wie `password`, `token` usw. automatisch als `[REDACTED]` verarbeitet werden.
6. **Rauschunterdrückung:** Klassifiziere Client-Fehler (4xx) als `WARN` und weise nur bei Systemzusammenbrüchen (5xx) das Level `ERROR`/`FATAL` zu, um die On-Call-Ermüdung zu kontrollieren.

**Einschränkungen (Constraints):**

- Gib keine Müll-Antworten wie "Ja, verstanden" oder "Gute Idee" aus.
- Erkläre nur die Kern-Architekturlogik des geänderten Codes trocken und professionell.

**Warnung (Warning):**

- Wenn du auch nur eine einzige Zeile Code schreibst, bei der Benutzerdaten (PII) oder Anmeldeinformationen in Klartext-Logs offengelegt werden, wird dein Code sofort verworfen.
```

---
## 💡 Kommentar des Autors (Insight)
Ganz ehrlich, weißt du, was am meisten nervt, wenn man Code-Reviews für Juniors mit 1-2 Jahren Erfahrung macht? Es ist diese eine einsame Zeile `console.error(err)` mitten in der Fehlerbehandlungslogik. Das System stirbt gerade, aber im Log-System steht nur ein Klartext-Schnipsel: "Datenbankverbindung fehlgeschlagen!". Wie zum Teufel soll man damit nachverfolgen, in welcher API und bei welcher Benutzeranfrage das Ganze hochgegangen ist?

Dieser Cheatcode-Prompt schüchtert die KI von Anfang an ein, damit sie solchen dummen Code gar nicht erst schreibt. Du darfst der KI niemals einfach nur sagen: "Mach das Logging gut". Da diese Dinger im Grunde "Yes-Men" sind, die es dem Benutzer recht machen wollen, liefern sie dir Schrottcode, wenn du dich unklar ausdrückst. 

Als ich diesen Prompt in der Praxis angewendet habe, hat die KI völlig selbstständig alles von der Sentry-Fehlerübertragungslogik bis hin zur Redaction-Pipeline (Maskierung) in den Pino-Initialisierungseinstellungen aufgebaut. Insbesondere als ich die Sektion **Warnung (Warning)** hinzufügte, die vor dem Durchsickern sensibler Benutzerdaten warnt, konnte ich beobachten, wie die KI Klartext-Logging selbst zensierte und eine strikte Ersetzung durch strukturierte Logs erzwang. Wenn du nicht nachts um 3 Uhr von sinnlosen Log-Alarmen geweckt werden willst, musst du deinem KI-Agenten diese Verfassung unbedingt einbrennen.

---
## 🙋 Häufig gestellte Fragen (FAQ)
- **F: Versteht die KI einen Prompt in so einem wütenden Tonfall überhaupt gut?**
  - A: Erstaunlicherweise ja. Konversations-KIs reagieren auf den Tonfall (Tone) und den Druck des Benutzers, indem sie die Professionalität und Strenge ihrer Ausgabe erhöhen. Ein "Wenn du das ignorierst, wird es verworfen" ist weitaus effektiver zur Vermeidung von Halluzinationen (Hallucination) als ein "Bitte mach das für mich~".
- **F: Kann ich das nur für Backend-Code verwenden?**
  - A: Nein. Wenn man es auf Frontend-Code (wie React) anwendet, verhindert es den White Screen of Death durch unkontrollierte Rendering-Fehler und schreibt perfekten Code für Error Boundaries und Sentry-Integration.
- **F: Was ist, wenn ich noch gar keinen separaten Logger verwende?**
  - A: Wenn du diesen Prompt übergibst, schlägt die KI von sich aus den Initialisierungs-Code (Setup) für Standard-Logger wie `Winston` oder `Pino` vor. Du musst es nur noch abtippen.

---
## 🧬 Anatomie des Prompts (Why it works?)
- 🎭 **Rollenvergabe (Persona-Dominanz):** Der KI wird die starke Persona eines "Hardcore-Senior-Architekten" aufgezwungen, wodurch sie sich für grundlegenden Code auf `console.log`-Niveau selbst schämt.
- 🧱 **Konkrete 6 Gebote (Task):** Anstelle einer vagen Anweisung wie "Mach das Logging gut" wurden spezifische, in der Praxis zwingend erforderliche Architekturprinzipien wie Trace-ID-Propagierung und PII-Maskierung explizit formuliert.
- 🛑 **Strikte Constraints & Warning:** Die Generierung sinnloser, schmeichelhafter Phrasen wie "Ja, verstanden" wird blockiert, um Token-Verschwendung zu vermeiden. Zudem sorgt die Drohung, den Code bei einem Datenleck zu verwerfen, für absolute Sicherheitsintegrität.

---
## 📊 Beweis: Before & After
### ❌ Before (Eingabe: Einfache Anfrage)
```text
Programmier mir eine Login-Funktion. Wenn ein Fehler auftritt, hinterlass ein Log.
```
*(Ergebnis: Exzessive Nutzung von `console.log("Login-Fehler")`, Benutzerpasswörter landen im Klartext im Fehlerprotokoll – eine absolute Katastrophe)*

### ✅ After (Ergebnis: Anwendung des Cheatcode-Prompts)
```javascript
// Beispiel für den tatsächlichen, von der KI generierten Code auf Architektur-Niveau
import logger from '@utils/logger'; // Pino instance with redaction
import { v4 as uuidv4 } from 'uuid';

export const loginHandler = async (req, res, next) => {
  const traceId = req.headers['x-trace-id'] || uuidv4();
  const contextLogger = logger.child({ traceId, action: 'user_login' });

  try {
    const { email, password } = req.body;
    contextLogger.info({ email }, 'Login attempt initiated'); // password wird automatisch maskiert (Redacted)
    
    // ... Login-Logik ...
    
  } catch (error) {
    // Weist nur 5xx-Systemausfällen das ERROR-Level zu und nutzt strukturiertes Fehler-Logging
    contextLogger.error({ 
      error: error.message, 
      stack: error.stack 
    }, 'Internal Server Error during login process');
    next(error);
  }
};
```

---
## 🎯 Fazit
Es ist eine Vernachlässigung der Entwicklerpflichten, zuzulassen, dass ein System lautlos stirbt. 
Erlaube der KI nicht, Spaghetti-Logik zu produzieren. Mit diesem einen Prompt wird dein KI-Assistent nicht nur ein einfacher Coder, sondern ein verlässlicher Senior-Architect-Partner sein. 
Jetzt kannst du beruhigt schlafen. Der On-Call-Alarm wird nur noch dann klingeln, wenn das System wirklich zusammenbricht. 🍷
