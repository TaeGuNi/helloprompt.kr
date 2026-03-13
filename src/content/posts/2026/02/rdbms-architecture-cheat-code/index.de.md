---
layout: /src/layouts/Layout.astro
title: "🔥 Die absolute RDBMS-Architektur-Verfassung, die KI-Bullshit zerschmettert (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "General"
description: "Die gnadenlosen RDBMS-Richtlinien eines Senior-Backend-Engineers, die verhindern, dass die KI eine Spaghetti-Datenbank ausspuckt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---

## 📝 Der magische Prompt, der deinen KI-Agenten in einen Senior DBA verwandelt

- **🎯 Zielgruppe:** Junior-Entwickler, die von KI-Ausreden genervt sind; Produktmanager, die ein KI-Backend bauen wollen; Senior-Devs mit Wutmanagement-Problemen.
- **⏱️ Zeitaufwand:** Nächtelanges Debugging → Unter 1 Minute.
- **🤖 Empfohlene Modelle:** Claude 3.5 Sonnet, GPT-4o (Schlaue Modelle, die nicht widersprechen, werden empfohlen).
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nützlichkeit:** ⭐⭐⭐⭐⭐

_"Schon mal nachts um drei vor Wut in die Tastatur gebissen, weil du der KI das DB-Design überlassen hast und sie dir ein mit JSON überladenes Spaghetti-Schema ausgespuckt hat?"_

Wenn du KIs das Tabellendesign überlässt, wählen sie in neun von zehn Fällen den faulsten Weg. Sie klatschen blindlings `TEXT` in die Spalten und versuchen, komplexe Relationen einfach mit `JSONB` abzuspeisen. Klingt im ersten Moment praktisch, weil man die Daten direkt ans Frontend durchreichen kann. 

Aber sobald der Traffic skaliert und die Queries komplexer werden, hängt dein System am Beatmungsgerät. Dieser Prompt ist der ultimative Cheat-Code: Er erstickt die faulen Kompromisse der KI im Keim, packt sie am Kragen und zwingt sie, die Datenbank nach den gnadenlosen Standards eines echten Senior-Backend-Engineers zu entwerfen.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. **Gnadenlose Datentyp-Minimierung:** Der blinde Einsatz von `BIGINT` und `TEXT` ist ein Verbrechen. Maximiere die I/O-Performance durch die kleinstmöglichen Datentypen.
2. **Ausschließlich ANSI SQL:** Wirf alle proprietären Tricks über Bord. Dein Code muss jederzeit bereit sein, nahtlos zu einer anderen Datenbank zu migrieren.
3. **Absolutes Verbot von JSON-Joins:** JSON innerhalb eines RDBMS zu parsen und zu joinen, gleicht einem System-Suizid. Kompromisslose Normalisierung ist Pflicht.

---

## 🚀 Die Lösung: "Die spartanische DBA-Verfassung"

Wirf dem Agenten einfach diesen Prompt an den Kopf. Maschinen müssen wie Maschinen behandelt werden.

### 🥉 Basic-Version (Die Grundlagen)

Nutze diese Version, wenn du nur schnell die Kernprinzipien injizieren und sofort Ergebnisse sehen willst.

> **Rolle:** Du bist ein kompromissloser, gnadenloser Senior DBA mit 20 Jahren Erfahrung.
> **Aufgabe:** Entwirf ein RDBMS-Schema für die von mir vorgegebene `[Domäne/Funktion]`. Allerdings müssen die Datentypen extrem komprimiert werden (z. B. SMALLINT), und JSON-Operationen sowie nicht-standardisierte, anbieterspezifische Funktionen sind strengstens verboten. Schreibe es absolut B-Tree-Index-freundlich.

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

Hier ist das Ganze noch einmal im Blockzitat-Format, das sich bequem in gängige Web-Editoren kopieren lässt. Es liefert exakt dieselben Ergebnisse wie der obige Code-Block.

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

Dieser Prompt ist eine in Blut und Schweiß geschriebene Lektion, destilliert aus unzähligen durchwachten Nächten voller Query-Tunings und Incident-Responses. Wenn dir die KI das nächste Mal mit einem süffisanten Lächeln rät: *"Nutzen wir hier doch einfach JSON, das ist entwicklerfreundlicher ^^"*, dann knall ihr diesen Prompt vor den Latz – sie wird sofort spuren.

Besonders wenn Junior-Entwickler oder Produktmanager ohne tiefe Backend-Expertise das initiale Schema-Design an eine KI delegieren, entfaltet diese Methode ihre wahre Zerstörungskraft. Du wirst erleben, wie die KI plötzlich von sich aus **`SMALLINT`** statt `INT` vorschlägt, das Hardcoden von Werten via **`ENUM`** kategorisch verweigert und dir stattdessen blitzsaubere Code-Mapping-Tabellen liefert. Nur mit einem derart kugelsicheren Fundament lassen sich spätere Höllenszenarien – wie explodierende N+1-Abfragen durch ORMs wie Prisma – von vornherein abwehren.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Warum die absolute Abneigung gegen JSON? Moderne Datenbanken unterstützen das doch hervorragend?**
  - A: "Unterstützen" und als "Suchbedingung missbrauchen" sind zwei völlig verschiedene Welten. Sobald du versuchst, einen Index auf verschachtelte JSON-Werte zu legen und darauf JOINs ausführst, pulverisiert es dir den Query-Execution-Plan. Wenn die Spalte nicht ausschließlich als dummer Payload-Speicher dient, ist eine saubere Normalisierung in separate Tabellen unausweichlich.
- **F: Gilt dieser Prompt auch, wenn ich ohnehin ein ORM (wie Prisma oder TypeORM) nutze?**
  - A: Dann sogar erst recht! ORMs abstrahieren und verschleiern die tatsächlichen SQL-Abfragen. Ein ohnehin schon wackeliges Schema führt hier blindlings in katastrophale Ineffizienzen. Das Datenbank-Fundament muss extrem robust sein, damit das ORM seine Arbeit performant verrichten kann, ohne das System in die Knie zu zwingen.
- **F: Was ist das Problem mit UUID v4? Sind die nicht perfekt, um Kollisionen zu vermeiden?**
  - A: Für B-Tree-Indizes ist die "Einfügereihenfolge" der absolute Schlüsselfaktor für Performance. Wenn du komplett zufällige Strings wie UUID v4 als Primary Key (PK) reinfeuerst, zerschießt du bei jedem Insert die Index-Baumstruktur. Das Resultat: massive Page Splits und explodierende Festplatten-I/O. Nutze stattdessen zwingend chronologisch sortierbare UUID v7 oder eine klassische Integer-Sequenz.

---

## 🧬 Prompt-Anatomie (Why it works?)

1. **Kompromisslose Einschränkungen (Constraints):** Wir lassen der KI nicht den geringsten Spielraum für Halluzinationen oder bequeme Ausreden. Stattdessen diktieren wir ihr eisern die Regeln für Datentypen und Indexierungsstrategien.
2. **Plattform-Agnostik (Agnosticism):** Durch den strikten Zwang zu ANSI SQL garantieren wir universell portablen Code – völlig unabhängig davon, ob später MySQL, PostgreSQL oder etwas anderes zum Einsatz kommt. Ein Datenbankwechsel darf niemals zum Architektur-Albtraum werden.
3. **Strenge Verhaltenskorrektur:** Aggressive negative Prompts wie *"Keine Ausnahmen"* und *"Sitzung wird sofort beendet"* zwingen die KI, ihren unterwürfigen "Yes-Man"-Modus abzulegen und die unnachgiebige Haltung eines pedantischen Senior-Architekten einzunehmen.

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

Stelle einer KI ohne tiefes architektonisches Grundlagenwissen niemals einen Blankoscheck für dein Backend aus.

Ein von Grund auf perfekt durchdachtes und kontrolliertes RDBMS-Design ist dein einziger Schutzschild, der verhindert, dass dich dein Pager in Zukunft nachts um drei aus dem Bett wirft.

Speichere dir diesen Cheat-Code gut ab. Knall ihn der KI gnadenlos um die Ohren, sobald sie auch nur den kleinsten Versuch unternimmt, schlampige Spaghetti-Queries zusammenzuschustern.

Sichere dein System ab und genieß deinen wohlverdienten, pünktlichen Feierabend mit einem felsfesten Datenbank-Fundament! 🍷
