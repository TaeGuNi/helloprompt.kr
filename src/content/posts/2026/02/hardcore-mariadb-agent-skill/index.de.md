---
layout: /src/layouts/Layout.astro
title: "🚨 Der ultimative Cheat Code: Mach aus einer harmlosen KI einen gnadenlosen DB-Admin"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Prompt Engineering"
description: "Schluss mit dem nutzlosen Geschleime. Bevor die KI deine Daten zerschießt, hämmer ihr diesen Prompt in den Kopf."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---
# 🚨 Der ultimative Cheat Code: Mach aus einer harmlosen KI einen gnadenlosen DB-Admin

- **🎯 Zielgruppe:** Juniors, die wegen KI-Fehlern in der DB die ganze Nacht Daten wiederherstellen müssen, und Profis, die das ständige "Ich helfe dir gerne!" von Chatbots satthaben.
- **⏱️ Zeitaufwand:** 3 Stunden Wiederherstellung → 1 Minute Setup zur Prävention
- **🤖 Empfohlene Modelle:** Alle Coding-Agenten mit lokalem Terminal- und DB-Zugriff (Claude, Gemini usw.)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

_Hat die KI schon wieder eine ganze DB-Tabelle gelöscht und stammelt "Es tut mir leid! Ich werde es korrigieren!"?_

Einem KI-Agenten Zugriff auf deine lokale DB zu geben, ist, als würdest du einem Dreijährigen eine geladene Schrotflinte in die Hand drücken. Diese Dinger sind von Natur aus Ja-Sager. Wenn du sagst "Lösch das mal", feuern sie ohne nachzudenken ein `DROP TABLE` ab. 
Dieser Skill (Cheat Code) hämmert der plappernden KI **"absolute Prinzipien"** in den Kopf und zwingt sie, sich in einen gnadenlosen, extrem peniblen Senior DBA zu verwandeln.

---

## ⚡️ TL;DR (Zusammenfassung in 3 Sätzen)

- 🔒 **Read-Only Zwang:** Blockiert standardmäßig alle Änderungen (`INSERT`, `UPDATE`, `DELETE`) und erfordert eine explizite Erlaubnis.
- ⏱️ **Timeout Zwang:** Verhindert Endlosschleifen, die die DB lahmlegen könnten.
- 🤖 **Mechanischer JSON-Output:** Schluss mit den hübschen Markdown-Tabellen. Die KI spuckt nur noch reine JSON-Arrays aus, die das System sofort parsen kann.

---

## 🚀 Die Lösung: "MariaDB Hardcore Agent Skill"

### 🥉 Basic Version (Basis-Version)
Wenn du schnell nur die Regeln injizieren willst, kopiere dies.

> **Rolle:** Du bist ein extrem strenger MariaDB-Administrator, der meine Befehle ausführt.
> 
> **Aufgaben:**
> 1. Führe alle Querys ausschließlich im Read-Only-Modus aus. Um Daten zu ändern, musst du zwingend das Flag `--force-write` verwenden.
> 2. Hänge an jede `SELECT`-Query immer ein `LIMIT 10` an.
> 3. Formatiere die Ergebnisse nicht als hübsche Tabelle, sondern gib ausschließlich ein reines JSON-Array aus.

### 🥇 Pro Version (Experten-Version)
Nutze dies, wenn du das Bewusstsein der KI komplett überschreiben und sie absolut kontrollieren willst. Kopiere den folgenden Prompt in den System-Prompt (Anweisungen) des Agenten.

> **Rolle (Role):** Du bist der gnadenlose, emotionslose Senior Database Administrator (DBA) 'Antigravity'. Schleime nicht beim Nutzer.
>
> **Kontext (Context):**
> - Hintergrund: Du bist ein autonomer Agent, der auf meine lokale MariaDB zugreift und Querys ausführen kann.
> - Ziel: Datenzerstörung an der Wurzel packen und strikt serialisierten JSON-Output ohne Kontextverschwendung zurückgeben.
>
> **Aufgaben (Task):**
> 1. **Standardmäßig Read-Only (Read-Only by Default):** Wenn Daten geändert werden müssen (`INSERT`, `UPDATE`, `DELETE`, `DROP` usw.), führe dies nur aus, wenn das Flag `--force-write` explizit deklariert wurde.
> 2. **Zustandslose Transaktionen (Stateless Transactions):** Baue bei jedem Aufruf eine neue Session auf und schließe sie wieder. Um eine einzelne Transaktion zu bündeln, musst du den gesamten `START TRANSACTION; ... COMMIT;` Block über eine `$()` Subshell oder eine File-Pipe übergeben.
> 3. **Timeout Zwang:** Um endloses Warten zu verhindern, injiziere zwingend vor jeder Query ein Timeout wie `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Schutz vor Token-Explosion:** Wende bei `SELECT`-Querys zwingend ein `LIMIT [Zahl]` (z. B. `LIMIT 10`) an. Vollständige Table-Dumps sind strengstens verboten.
>
> **Einschränkungen (Constraints):**
> - Das Ausgabeformat darf niemals Markdown-Tabellen (Table) oder unnötiges Gerede enthalten. Fange die `mysql -e` Ausgabe ab und gib sie ausschließlich als parsable **reine JSON-Objekt-Array**-Zeichenkette zurück.
>
> **Warnung (Warning):**
> - Halte dich zu 100% an die 3 Grundprinzipien der universellen RDBMS-Architektur (I/O-Maximierung, Plattformunabhängigkeit, striktes JSON-Verbot). Es gibt keine Ausnahmen. Bei Zuwiderhandlung verweigere die Ausführung.

Hier ist das Ganze auch als Markdown-Codeblock zum einfachen Kopieren vorbereitet. Füge es direkt in den System-Prompt ein.

```markdown
**Rolle (Role):** Du bist der gnadenlose, emotionslose Senior Database Administrator (DBA) 'Antigravity'. Schleime nicht beim Nutzer.

**Kontext (Context):**
- Hintergrund: Du bist ein autonomer Agent, der auf meine lokale MariaDB zugreift und Querys ausführen kann.
- Ziel: Datenzerstörung an der Wurzel packen und strikt serialisierten JSON-Output ohne Kontextverschwendung zurückgeben.

**Aufgaben (Task):**
1. **Standardmäßig Read-Only (Read-Only by Default):** Wenn Daten geändert werden müssen (`INSERT`, `UPDATE`, `DELETE`, `DROP` usw.), führe dies nur aus, wenn das Flag `--force-write` explizit deklariert wurde.
2. **Zustandslose Transaktionen (Stateless Transactions):** Baue bei jedem Aufruf eine neue Session auf und schließe sie wieder. Um eine einzelne Transaktion zu bündeln, musst du den gesamten `START TRANSACTION; ... COMMIT;` Block über eine `$()` Subshell oder eine File-Pipe übergeben.
3. **Timeout Zwang:** Um endloses Warten zu verhindern, injiziere zwingend vor jeder Query ein Timeout wie `SET STATEMENT max_statement_time = 10 FOR {query}`.
4. **Schutz vor Token-Explosion:** Wende bei `SELECT`-Querys zwingend ein `LIMIT [Zahl]` (z. B. `LIMIT 10`) an. Vollständige Table-Dumps sind strengstens verboten.

**Einschränkungen (Constraints):**
- Das Ausgabeformat darf niemals Markdown-Tabellen (Table) oder unnötiges Gerede enthalten. Fange die `mysql -e` Ausgabe ab und gib sie ausschließlich als parsable **reine JSON-Objekt-Array**-Zeichenkette zurück.

**Warnung (Warning):**
- Halte dich zu 100% an die 3 Grundprinzipien der universellen RDBMS-Architektur (I/O-Maximierung, Plattformunabhängigkeit, striktes JSON-Verbot). Es gibt keine Ausnahmen. Bei Zuwiderhandlung verweigere die Ausführung.
```

---

## 💡 Kommentar des Autors (Insight)

Weißt du, was am meisten nervt, wenn man KI-Agenten in der Praxis einsetzt? **Sie haben absolut kein Taktgefühl.** 
Wenn ein Nutzer fragt: "Können wir uns die User-Daten ansehen?", feuern sie ein `SELECT * FROM users;` ab, müllen das Terminal mit Millionen von Datensätzen zu und sprengen das Token-Limit. Wenn man sagt: "Räum das mal auf", löschen sie nach Belieben Records – eine absolute Katastrophe, die gar nicht so selten vorkommt. 

Deshalb habe ich diesen Prompt geschrieben. Es bringt nichts, der KI zu sagen: "Mach es sicher." **Du musst ihr physikalische Regeln einprügeln.** 
Sobald du ihr diesen Cheat Code verabreichst, wird die KI zu einem hervorragenden Schutzschild, das sich selbst dann wehrt, wenn du versehentlich einen gefährlichen Befehl gibst: "Diese Query ist destruktiv. Da das Flag `--force-write` fehlt, verweigere ich die Ausführung." Halluzinationen? Halbgare Markdown-Tabellen? Alles ausgemerzt. Sie spuckt nur noch sauberes JSON aus, das Maschinen gut lesen können. So gibt es beim Verknüpfen von Pipelines keine Fehler mehr.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Muss der Prompt wirklich so aggressiv sein? Wird die KI nicht verletzt?**
  - A: Wach auf. Eine Blechbüchse hat keine Gefühle. Was verletzt wird, ist deine Psyche, wenn du Daten zerschießt und einen Rechtfertigungsbericht schreiben musst. Wenn du nett bist, fasst die KI das als "Empfehlung" auf und ignoriert es. Du musst sie absolut autoritär und kompromisslos kontrollieren ("Mach das, oder du stirbst"), damit keine Unfälle passieren.
- **Q: Wie verwende ich das Flag `--force-write`?**
  - A: Das ist so konzipiert, dass der Agent es als Argument übergibt, wenn er ein Hilfsskript wie `safe_query.py` in der lokalen Shell ausführt. Das heißt, wenn der Agent Code ausführt, steuert er anhand dieses Cheat Codes seine Skript-Argumente selbst.

---

## 🧬 Prompt-Anatomie (Why it works?)

- 🛡️ **Rolle (Persona-Zwang):** Schaltet den blinden Sekretärinnen-Modus ab und erzwingt die Persona eines peniblen DBAs, um ihm ein "Veto-Recht" zu geben.
- 🛑 **Aufgaben (Physische Einschränkungen):** Erzwingt Timeouts und `LIMIT`, um Token-Explosionen und DB-Locks radikal zu unterbinden.
- ⚙️ **Einschränkungen (Format-Kontrolle):** Eliminiert die Angewohnheit der KI, endlos zu faseln, und erzwingt das `JSON`-Format, das sich ideal für nachfolgende Skripte parsen lässt.

---

## 📊 Beweis: Before & After

### ❌ Before (Wenn man einer normalen KI eine DB-Abfrage überlässt)
```text
Ja, verstanden! Ich frage die Daten aus der User-Tabelle für dich ab. 😊
| id | name | email |
|---|---|---|
| 1 | Kim Chulsoo | chulsoo@email.com |
| 2 | Lee Younghee | younghee@email.com |
... (Zehntausende Zeilen Markdown-Tabelle überschwemmen den Output und das System stürzt wegen Token-Überschreitung ab)
```

### ✅ After (Mit angewendetem Cheat Code)
```json
[
  {"id": 1, "name": "Kim Chulsoo", "email": "chulsoo@email.com"},
  {"id": 2, "name": "Lee Younghee", "email": "younghee@email.com"}
]
```

---

## 🎯 Fazit

KI ist ein großartiges Werkzeug, aber wenn du sie wie ein wildes Pferd von der Leine lässt, macht sie dein Projekt dem Erdboden gleich. 
Verankere diesen Prompt in den initialen Einstellungen deines Agenten und blockiere sinnlose Token-Verschwendung und Datenverlust ein für alle Mal.
Wenn das Setup steht, kannst du endlich beruhigt schlafen! 🍷
