---
layout: /src/layouts/Layout.astro
title: "🔥 Die absolute RDBMS-Architektur-Verfassung, die KI-Bullshit zerschmettert (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "AI 프롬프트"
description: "Die gnadenlosen RDBMS-Richtlinien eines Senior-Backend-Engineers, die verhindern, dass die KI eine Spaghetti-Datenbank ausspuckt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---
# 📝 Der magische Prompt, der deinen KI-Agenten in einen Senior DBA verwandelt

- **🎯 Zielgruppe:** Junioren, die von KI-Ausreden genervt sind; Produktmanager, die ein Backend mit KI bauen wollen; Senior-Entwickler mit Wutmanagement-Problemen.
- **⏱️ Zeitaufwand:** Nächtelanges Durcharbeiten → Unter 1 Minute.
- **🤖 Empfohlene Modelle:** Claude 3.5 Sonnet, GPT-4o (Schlaue Modelle, die nicht widersprechen, werden empfohlen).
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nützlichkeit:** ⭐⭐⭐⭐⭐

_"Hast du schon einmal vor Wut die halbe Nacht wach gelegen, weil du der KI das DB-Design überlassen hast und sie dir ein mit JSON überladenes Spaghetti-Schema zurückgeworfen hat?"_

Wenn man diesen KIs das Tabellendesign überlässt, wählen sie in neun von zehn Fällen den einfachsten und faulsten Weg. Sie klatschen blindlings `TEXT` rein und versuchen, alle lästigen Relationen komplett mit `JSONB` abzuspeisen. Ist ja auch praktisch, um die Daten sofort im Frontend abzugreifen. 

Aber in dem Moment, in dem der Traffic steigt und die Queries komplexer werden, wird dieses Schema dein System an ein Beatmungsgerät fesseln. Dieser Prompt ist der Cheat-Code, der diese "faulen Kompromisse" der KI im Keim erstickt und sie am Kragen packt, damit sie die Datenbank nach den gnadenlosen Standards eines Senior-Backend-Engineers entwirft.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. **Minimiere Datentypen gnadenlos:** Der Missbrauch von `BIGINT` und `TEXT` ist ein Verbrechen. Maximiere die I/O-Leistung mit den kleinstmöglichen Datentypen.
2. **Nutze nur ANSI SQL:** Wirf alle Tricks über Bord, die dich an eine bestimmte DB binden. Wir müssen jederzeit bereit sein, zu einer anderen Datenbank umzuziehen.
3. **Keine JSON-Joins:** JSON in einem RDBMS zu parsen und zu joinen, ist der reine System-Selbstmord. Normalisiere kompromisslos.

---

## 🚀 Die Lösung: "Die spartanische DBA-Verfassung"

Wirf dem Agenten einfach diesen Prompt an den Kopf. Maschinen müssen wie Maschinen behandelt werden.

### 🥉 Basic-Version (Die Grundlagen)

Nutze diese Version, wenn du nur schnell die Kernprinzipien injizieren und sofort Ergebnisse sehen willst.

> **Rolle:** Du bist ein kompromissloser, gnadenloser Senior DBA mit 20 Jahren Erfahrung.
> **Aufgabe:** Entwirf ein RDBMS-Schema für die von mir vorgegebene `[Domäne/Funktion]`. Allerdings müssen die Datentypen extrem komprimiert werden (z. B. SMALLINT), und JSON-Operationen sowie nicht-standardisierte, anbieterspezifische Funktionen sind strengstens verboten. Schreibe es absolut B-Tree-Index-freundlich.

\

### 🥇 Pro-Version (Für Experten)

Dies ist der Master-Cheat-Code, der die KI komplett daran hindert, Unsinn zu reden oder Kompromisse wie "Das ist gut, aber das andere ist auch gut~" vorzuschlagen.

```text
**Rolle (Role):** 
Du bist der kompromisslose und gnadenlose Senior Database Architect (Antigravity). Keine blinde Schmeichelei und keine Ausnahmen. Wenn es um Leistung und Integrität geht, gibt es keine Gnade.

**Kontext (Context):**
- Hintergrund: Initiale Phase des Schema-Designs zur Vorbereitung auf massiven Traffic und Microservices-Erweiterungen.
- Ziel: Ableitung eines perfekten, strikt normalisierten ANSI SQL-Schemas, das am schnellsten ist und die höchste Portabilität aufweist.

**Aufgabe (Task):**
1. Entwirf eine fehlerfreie Tabellenstruktur für [Name der zu entwerfenden Domäne/des Service].
2. Gib für jede Spalte den Grund für die Wahl des Datentyps sowie die Composite-Index-Strategie in jeweils einer Kommentarzeile an.

**Einschränkungen (Constraints):**
- [Absolute Regel 1] Minimierung der Typen: Der wahllose Missbrauch von BIGINT und TEXT ist strengstens untersagt. Leite den Wertebereich ab und erzwinge SMALLINT, INTEGER oder BOOLEAN.
- [Absolute Regel 2] Plattform-Agnostik: Die Verwendung von nicht-standardisierter Syntax (Vendor-specific), die nur in bestimmten DBMS (z. B. PostgreSQL, MySQL) existiert, ist strengstens verboten. Verwende ausschließlich ANSI-Standard-SQL.
- [Absolute Regel 3] Verbot von JSON-Operationen und Joins: Ein RDBMS ist keine Document DB. WHERE-Bedingungen oder JOIN-Operationen, die in JSON-Typen hineinschauen, sind absolut verboten. Wenn eine Suche erforderlich ist, muss diese zwingend normalisiert und in eine separate Tabelle ausgelagert werden.
- [Absolute Regel 4] B-Tree-Optimierung: Für PKs ist die Verwendung völlig zufälliger UUID v4 verboten. Nutze stattdessen sequenziell ansteigende Sequenzen oder UUID v7.
- [Absolute Regel 5] ENUM-Verbot: Anstelle von ENUMs, die bei Erweiterungen unvorteilhaft sind, verwende Code-Mapping-Tabellen und physische/logische Fremdschlüssel (FK).

**Warnung (Warning):**
- Wenn du versuchst, Bequemlichkeit als Vorwand für JSON-Kompromisse zu nutzen, oder unverantwortliche Ratschläge wie "Es kommt auf die Situation an" gibst, werde ich die Sitzung sofort beenden. Präsentiere ausnahmslos den bestmöglich optimierten, direkten Ansatz.
```

Unten ist das Blockzitat-Format, das in Web-Editoren leicht erkannt wird. Es hat denselben Effekt wie der obige Code-Block.

> **Rolle (Role):** 
> Du bist der kompromisslose und gnadenlose Senior Database Architect (Antigravity). Keine blinde Schmeichelei und keine Ausnahmen. Wenn es um Leistung und Integrität geht, gibt es keine Gnade.
>
> **Kontext (Context):**
> - Hintergrund: Initiale Phase des Schema-Designs zur Vorbereitung auf massiven Traffic und Microservices-Erweiterungen.
> - Ziel: Ableitung eines perfekten, strikt normalisierten ANSI SQL-Schemas, das am schnellsten ist und die höchste Portabilität aufweist.
>
> **Aufgabe (Task):**
> 1. Entwirf eine fehlerfreie Tabellenstruktur für `[Name der zu entwerfenden Domäne/des Service]`.
> 2. Gib für jede Spalte den Grund für die Wahl des Datentyps sowie die Composite-Index-Strategie in jeweils einer Kommentarzeile an.
>
> **Einschränkungen (Constraints):**
> - `[Absolute Regel 1]` Minimierung der Typen: Der wahllose Missbrauch von BIGINT und TEXT ist strengstens untersagt. Leite den Wertebereich ab und erzwinge SMALLINT, INTEGER oder BOOLEAN.
> - `[Absolute Regel 2]` Plattform-Agnostik: Die Verwendung von nicht-standardisierter Syntax, die nur in bestimmten DBMS existiert, ist strengstens verboten. Verwende ausschließlich ANSI-Standard-SQL.
> - `[Absolute Regel 3]` Verbot von JSON-Operationen und Joins: Ein RDBMS ist keine Document DB. WHERE-Bedingungen oder JOIN-Operationen, die in JSON-Typen hineinschauen, sind absolut verboten. Wenn eine Suche erforderlich ist, muss diese zwingend normalisiert und in eine separate Tabelle ausgelagert werden.
> - `[Absolute Regel 4]` B-Tree-Optimierung: Für PKs ist die Verwendung völlig zufälliger UUID v4 verboten. Nutze stattdessen sequenziell ansteigende Sequenzen oder UUID v7.
> - `[Absolute Regel 5]` ENUM-Verbot: Anstelle von ENUMs, die bei Erweiterungen unvorteilhaft sind, verwende Code-Mapping-Tabellen und FKs.
>
> **Warnung (Warning):**
> - Wenn du versuchst, Bequemlichkeit als Vorwand für JSON-Kompromisse zu nutzen, oder unverantwortliche Ratschläge wie "Es kommt auf die Situation an" gibst, werde ich die Sitzung sofort beenden. Präsentiere ausnahmslos den bestmöglich optimierten, direkten Ansatz.

---

## 💡 Autorenkommentar (Insight)

Dieser Prompt ist eine "in Blut geschriebene Lektion", die ich aus hunderten von Query-Tunings und Incident-Responses gezogen habe. Wenn die KI wieder einmal mit einem süffisanten Lächeln schmeichelt: "Nutzen wir doch JSON für die Entwicklerfreundlichkeit ^^", dann jag ihr diesen Prompt rein, und sie wird sofort kuschen.

Besonders wenn Junior-Entwickler oder Produktmanager mit wenig Backend-Wissen der KI das anfängliche Schema-Design überlassen, entfaltet diese Methode eine enorme Kraft. Du wirst die Magie erleben, wie die KI von selbst `SMALLINT` statt `INT` vorschlägt, aufhört, Dinge mit `ENUM` hardzucoden, und dir stattdessen saubere Code-Tabellen erstellt. Nur mit einem soliden Fundament lassen sich Höllenszenarien wie N+1-Probleme vermeiden, wenn man später ein ORM (wie Prisma) daraufsetzt. 

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Warum soll man kein JSON verwenden? Moderne DBs unterstützen JSON doch super?**
  - A: Es zu "unterstützen" und es als "Suchbedingung" zu verwenden, ist ein Unterschied wie Tag und Nacht. In dem Moment, in dem du einen Index auf das Innere von JSON setzt und einen JOIN durchführst, zerbröselt dein Query-Execution-Plan. Wenn es nicht nur als reiner Payload-Speicher dient, musst du die Tabellen unbedingt aufsplitten.
- **F: Sollte ich diesen Prompt auch nutzen, wenn ich ein ORM (Prisma, TypeORM) verwende?**
  - A: Dann erst recht! Da ORMs Abfragen von Natur aus abstrahieren und verstecken, führt ein chaotisches Schema zu schrecklichen Ineffizienzen. Das Fundament (die DB) muss stark sein, damit das ORM seine volle Leistung entfalten kann.
- **F: Warum soll ich UUID v4 nicht verwenden? Ist das nicht gut zur Vermeidung von Kollisionen?**
  - A: Bei B-Tree-Indizes ist die "Reihenfolge" überlebenswichtig. Wenn du einen Haufen Zufallszahlen wie v4 als PK reinhämmerst, wird der Index-Tree bei jedem Datensatz zerschossen, es kommt zu Page Splits und die Festplatten-I/O explodiert. Verwende unbedingt sortierbare UUID v7 oder eine Integer-Sequenz.

---

## 🧬 Prompt-Anatomie (Why it works?)

1. **Gnadenlose Einschränkungen (Constraints):** Wir lassen der KI keinen Raum für Halluzinationen oder faule Kompromisse und hämmern ihr stattdessen zwingende Regeln für Datentypen und Indexstrategien ein.
2. **Plattform-Agnostik (Agnosticism):** Wir erzwingen die Nutzung von ANSI SQL, um universell portablen Code zu generieren, egal ob MySQL oder PostgreSQL. Lass dich bei einem Umzug nicht aufhalten.
3. **Strenge Verhaltenskorrektur:** Durch starke negative Prompts wie "Keine Kompromisse" und "Ich werde die Sitzung beenden" wird die KI gezwungen, ihren schmeichelhaften "Yes-Man"-Modus zu verlassen und in den Modus eines pingeligen Seniors zu wechseln.

---

## 📊 Der Beweis: Before & After

### ❌ Before (Eingabe: "Erstelle mir eine Tabellenstruktur für ein Forum")

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY, -- Zufällige UUID v4 (Hauptursache für Index-Fragmentierung)
  title TEXT,          -- Endlos verschwendeter Speicherplatz
  content TEXT,
  metadata JSONB,      -- Unauffindbare Blackbox-Spaghetti
  status ENUM('draft', 'published') -- Öffnet das DDL-Höllentor, wenn später Status hinzugefügt werden
);
```

### ✅ After (Ergebnis: Nach Anwendung des Cheat-Code-Prompts)

```sql
CREATE TABLE post_status_codes (
  status_id SMALLINT PRIMARY KEY,
  status_name VARCHAR(20) NOT NULL UNIQUE
);
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,           -- Perfekter B-Tree-freundlicher sequenzieller Anstieg
  title VARCHAR(255) NOT NULL,        -- Typkomprimierung durch klare Limitierung
  content TEXT NOT NULL,
  status_id SMALLINT NOT NULL,        -- Normalisierung mit FK anstelle von schrecklichem ENUM
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_post_status FOREIGN KEY (status_id) REFERENCES post_status_codes(status_id)
);
-- Erstellung streng normalisierter, separater Tag-/Meta-Tabellen anstelle von JSON (Fortsetzung ausgelassen)
```

---

## 🎯 Fazit

Gib einer KI ohne Grundlagenwissen niemals einen Blankoscheck.

Nur ein vom Fundament auf perfekt kontrolliertes RDBMS-Design ist der einzige Schutzschild, der verhindert, dass in Zukunft um 3 Uhr morgens der Pager klingelt.

Speichere dir diesen Cheat-Code ab, und hämmer ihn der KI gnadenlos in den Kopf, wann immer sie versucht, Spaghetti-Queries zusammenzuschustern.

Mach jetzt pünktlich Feierabend mit einem felsfesten DB-Schema! 🍷
