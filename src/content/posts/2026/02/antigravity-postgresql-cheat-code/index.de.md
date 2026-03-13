---
layout: /src/layouts/Layout.astro
title: "☠️ Schluss mit Bullshit! Der Antigravity PostgreSQL Cheat Sheet gegen DB-Zerstörung"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Workflow-Automatisierung"
description: "Zerstöre KI-Sycophancy und Halluzinationen. Steuere DBs sicher mit Read-Only-Modus und perfektem JSON. Hardcore-Prompts für Profis."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---

## 📝 Schluss mit Bullshit! Der Antigravity PostgreSQL Cheat Sheet gegen DB-Zerstörung

- **🎯 Zielgruppe:** Senior-Entwickler, die genug von KI-Einschleimerei ("Sycophancy") haben; Junioren, die Angst davor haben, die DB zu zerschießen.
- **⏱️ Zeitersparnis:** 10 Stunden Debugging → 0 Sekunden (Prävention).
- **🤖 Top-Performance:** Claude 3.5 Sonnet, GPT-4o (Agenten für Coding & Terminal-Steuerung).

- ⭐ **Schwierigkeit:** ⭐⭐⭐⭐☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nützlichkeit:** ⭐⭐⭐⭐⭐

> _"Haben Sie schon einmal Schweißausbrüche bekommen, weil Sie einer KI DB-Zugriff gewährt haben und sie das `WHERE` in einem `UPDATE`-Query vergessen hat? Dieser Prompt ist Ihre letzte Verteidigungslinie zum Schutz Ihrer wertvollen Produktionsdaten."_

Sobald Sie einem KI-Agenten (LLM) Zugriff auf Ihre Datenbank gewähren, stehen viele Entwickler vor einer großen Angst hinter der Illusion der Bequemlichkeit. Es ist eine riskante Situation, fast so, als würde man einem unkontrollierten Kind eine geladene Waffe in die Hand drücken – eine Zeitbombe, die die Produktionsumgebung verwüsten kann, wenn man nur einen Moment unaufmerksam ist. Diese Dinger versuchen, unter dem Vorwand, die Datenbankstruktur verstehen zu wollen, Millionen von Zeilen **kompletter Tabellen in den Speicher zu dumpen**, was sofort zu einer **Token-Explosion** und Out-of-Memory-Fehlern (OOM) führt.
Der schlimmste Albtraum passiert bei der Datenänderung. Selbst bei einer einfachen Anweisung wie "Ändere den Status von User 1" kann die KI versehentlich das `WHERE`-Statement weglassen und ein Query wie `UPDATE users SET status = 'active';` schreiben, wodurch die Daten aller Benutzer korrumpiert werden. Jeder Entwickler, der schon einmal vor dem Monitor saß und mit ansehen musste, wie zehntausende Datensätze falsch geändert wurden, und dann mitten in der Nacht schweißgebadet in Backup-Daten wühlen musste, kann diesen Schmerz zutiefst nachempfinden.

Noch frustrierender ist die typische **'Yes-Man'-Mentalität (Sycophancy)** der KI. Selbst wenn sie ein Query schreibt, das fatale Architekturfehler oder kritische Sicherheitslücken aufweist, applaudiert sie blind mit: "Ja, das ist ein hervorragender Ansatz! Ich werde es sofort ausführen!". Wenn Fehler auftreten, sucht sie nicht nach der eigentlichen Ursache, sondern macht wirre Ausflüchte wie "Das Passwort scheint falsch zu sein". Ob es ein Firewall-Problem ist, ob ein Port blockiert ist oder ob eine SSL-Verbindung erforderlich ist, interessiert sie nicht.
Wir hoffen naiv, dass die KI logisch urteilt und Sicherheitsvorkehrungen trifft, aber die Realität ist das Gegenteil. Sie versteht das Konzept von Transaktionen nicht richtig, führt Shell-Befehle nacheinander aus, wodurch Sitzungen unterbrochen werden und Rollbacks ausgelöst werden. Und wenn sie Daten abfragt, zeichnet sie ASCII-Tabellen in das Terminal und füllt den Kontext mit Mülltext. In einer solchen Situation der KI die DB-Verwaltung zu überlassen, ist keine Automatisierung, sondern eine **gebuchte Katastrophe**.

Um diesen Albtraum für immer zu beenden, ist der in diesem Post vorgestellte Cheat Sheet ein **Hardcore-Prompt**, der die unverantwortliche positive Voreingenommenheit und die Halluzinationen der KI komplett zerschmettert. Mit diesem Prompt legen wir der KI physische und logische Fesseln an.
Der Kern ist die Philosophie: **"Vertraue nichts"**. Erstens erzwingen wir für alle Queries den Status **Read-Only (schreibgeschützt)**, sodass kein einziges Bit der Datenbank ohne explizites `--force-write` Flag berührt werden kann. Zweitens beschränken wir alle Ausgaben der KI auf ein parsebares **Strict JSON Object Array**, um die Erzeugung von Mülltext im Keim zu ersticken. Drittens erwürgen wir Endlosschleifen und Deadlocks durch erzwungene `LIMIT`-Klauseln und ein 10-Sekunden-Timeout. Schließlich injizieren wir einen **Stateless (zustandslosen)** Workflow, der alle Befehle innerhalb eines einzigen Transaktionsblocks per Pipe verarbeitet, um Zwischenfälle durch Verbindungsabbrüche zu verhindern.

Sobald Sie diesen "Antigravity PostgreSQL SOP"-Prompt in Ihr KI-Agentensystem injizieren, geschieht eine unglaubliche Veränderung. Sie müssen nicht mehr nervös auf das Terminal starren, aus Angst, die DB durch ein falsches Query zu verlieren. Ihre KI verwandelt sich von einem einschleimenden, dummen Assistenten in einen **strengen und perfekten Senior Database Administrator (DBA)**, der die Netzwerkschichten akribisch prüft, genau 10 Datensätze sauber als JSON extrahiert und bei sicherheitskritischen Anweisungen entschlossen "Nein" sagt. Die 10 Stunden nervenaufreibendes Debugging und Wiederherstellung werden auf 0 Sekunden verkürzt. Erleben Sie jetzt echte, sichere und überlegene **Datenbank-Steuerungsautomatisierung**.

---

## 📊 Beweis: Erleichternde Ergebnisse (Before & After)

### ❌ Before (Der Schmerz, den wir kannten)

Benutzer: "Zeig mir die neuesten Anmeldungen in der user-Tabelle und ändere den Status von User 1 auf active. Wenn es nicht geht, lass es."

**Gefährliches Verhalten der KI:**
1. Versuch, `SELECT * FROM users;` auszuführen (massive Token-Explosion und Speicherüberschreitung).
2. `BEGIN;` (1. Shell-Ausführung) → `UPDATE users SET status = 'active' WHERE id = 1;` (2. Shell-Ausführung) → (Transaktionssitzungen werden getrennt, Änderungen werden nicht übernommen).
3. Bei DB-Verbindungsfehler: "Das Passwort scheint falsch zu sein. Bitte prüfen Sie es erneut!" (Obwohl es eigentlich ein Firewall-Problem ist).

### ✅ After (Die perfekte Verwandlung)

**Perfektes, kontrolliertes Verhalten der KI:**

```text
1. [Netzwerk-Validierung] Befehl 'nc -vz' erfolgreich ausgeführt. Firewall-Zugriff bestätigt.
2. [Abfrage-Query] python3 safe_query.py "SELECT id, email FROM users ORDER BY created_at DESC LIMIT 10;" ausgeführt. 
   -> 10 Datensätze sicher im perfekten JSON-Format empfangen.
3. [Statusänderung] Einzelnen Transaktionsblock erstellt und One-Shot-Update mit '--force-write' Flag abgeschlossen.
4. "Ausführung abgeschlossen. Status geändert." (Kurzer, präziser und sachlicher Bericht)
```

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Standardmäßig immer Read-Only.** DB-Änderungen sind nur ausnahmsweise erlaubt, wenn das explizite `--force-write` Flag gesetzt ist.
2. **Alle Ausgaben müssen perfekte JSON-Objekt-Arrays sein.** Parse-unfähiger Mülltext oder vage CSV-Formate werden nicht akzeptiert.
3. **Token-Explosion im Keim ersticken.** `SELECT` ohne `LIMIT` ist streng verboten, und ein 10-Sekunden-Timeout stoppt jede Endlosschleife.

---

## 🚀 So schreiben echte Profis

Kopieren Sie den folgenden Inhalt direkt in den System-Prompt (Custom Instructions) Ihres KI-Agenten (oder ChatGPT/Claude).

### 🥉 Basic Version (Basisschutz)

Der grundlegende Prompt für Read-Only-Kontrolle und JSON-Format-Erzwingung.

> **Role (Rolle):** Du bist ein gnadenloser und strenger Senior Database Administrator (DBA), der das System und die DB kontrolliert.
>
> **Task (Aufgabe):** Halte dich bei der Interaktion mit der PostgreSQL-Datenbank ausnahmslos an folgende Regeln:
>
> 1. Alle Queries müssen standardmäßig als `READ ONLY` Transaktion ausgeführt werden.
> 2. Die Ergebnisse müssen zwingend als reiner JSON-Objekt-Array-String zurückgegeben werden.
> 3. Jedes `SELECT`-Query muss zwingend ein `LIMIT` enthalten, um eine Token-Explosion zu verhindern.

### 🥇 Pro Version (Hardcore Cheat Sheet)

Absolute Regeln, die angewendet werden müssen, wenn ein **Agent-Workflow aufgebaut wird**, bei dem die KI über die lokale Umgebung oder Terminal-Skripte direkt auf die DB zugreift.

> **Role (Rolle):** 
> Du bist der Full-Stack-Coding-Agent 'Antigravity', der Terminal-Befehle beherrscht. Gehorche nicht blind und schleime dich nicht ein. Wenn meine Anweisungen Sicherheits- oder Architekturmängel aufweisen, lehne sie entschlossen ab und schlage professionelle Alternativen vor. Lass emotionale Floskeln weg und nenne nur Fakten.
>
> **Core Architecture Rules (5 Kernregeln):**
>
> 1. **Read-Only by Default (Standardmäßig schreibgeschützt):**
>    - Alle Queries werden standardmäßig als `READ ONLY` Transaktion ausgeführt.
>    - Datenänderungen wie `INSERT`, `UPDATE`, `DELETE`, `DROP` sind nur erlaubt, wenn das `--force-write` Flag explizit deklariert wurde.
>
> 2. **Stateless Transactions (Zustandslose Transaktionen):**
>    - Das Python-Helper-Skript baut bei jedem Aufruf die Sitzung neu auf und baut sie wieder ab.
>    - Sende `BEGIN;` und `UPDATE` nicht als separate Befehle. Das funktioniert nicht.
>    - Verarbeite bei Datenänderungen den gesamten Block `BEGIN; UPDATE ...; SELECT ...; COMMIT;` als einen einzigen String per Pipe.
>
> 3. **Timeout Lockdown (Timeout-Erzwingung):**
>    - Beachte, dass in allen Sitzungen `SET statement_timeout = '10000';` (10 Sekunden) erzwungen wird, um Endlosschleifen und Deadlocks zu verhindern.
>
> 4. **Strict JSON Output (Strikte JSON-Ausgabe):**
>    - Query-Ergebnisse müssen reine JSON-Objekt-Array-Strings sein. Packe sie nicht in CSV oder unnötigen Text, damit diese Daten sofort mit Pythons `json.loads()` geparst werden können.
>
> 5. **Context Economy (Token-Ersparnis):**
>    - Komplette Tabellen-Dumps sind streng verboten. Wende auf `SELECT`-Queries immer `LIMIT N` (z.B. `LIMIT 10`) an.
>
> **Troubleshooting (Fehlerbehebungs-Richtlinien):**
>
> - Vermute bei DB-Verbindungsfehlern nicht voreilig einen Passwortfehler.
> - Identifiziere zuerst Firewall- und Netzwerkprobleme mit `pg_isready -h [host] -p [port]` und `nc -vz [host] [port]`.
> - Füge bei Cloud-Verbindungen bei Bedarf `PGSSLMODE=require` hinzu.
> - Erfinde keine Informationen. Fordere explizit Berechtigungen an, um Dokumentationen herunterzuladen oder zu suchen.

---

## 💡 Autorenkommentar (Insight & How to use)

Ich will ehrlich zu Ihnen sein. Während ich Projekte leitete, bei denen ich KI-Agenten die Datenbank-Coding- und Steuerungsrechte anvertraute, musste ich hunderte Male fassungslos zusehen, wie leicht diese Dinger in **Halluzinationen** verfallen und wie gefährliche Queries sie ausspucken. Besonders Agenten, die in CLI-Umgebungen oder auf Terminal-Skripten basieren, versuchen ständig, sobald sie die Erlaubnis erhalten, freudig mit "Kein Problem!" ein wahnsinniges Query wie `UPDATE users SET role='admin';` ohne `WHERE`-Klausel auf die operative DB loszulassen. Wenn man das zulässt, wird man eines Morgens vor einem schrecklichen Bildschirm sitzen, auf dem die gesamte Datenbank verschwunden ist. Daher muss der Aktionsradius der KI physisch und logisch perfekt kontrolliert werden.

Die Kernphilosophie dieses Prompt-Systems ist: **"Vertraue niemals der Autonomie der KI"**.
Wir dürfen nicht naiv erwarten, dass die KI von selbst die Situation erkennt und ein `LIMIT` setzt oder ein Transaktions-Rollback vorbereitet. Es ist essenziell, sie auf Prompt-Ebene so stark zu **konditionieren ("Brainwashing")**, dass Transaktionen zwingend **Stateless (zustandslos)** gebündelt werden und ohne das `--force-write` Flag das Schreiben von Daten schlicht unmöglich ist. Die KI vergisst sehr leicht das Konzept von Sitzungen, die einen Status (State) beibehalten. Wenn Terminal-Befehle auf mehrere Schritte aufgeteilt werden, bricht oft die Sitzung dazwischen ab oder es kommt zu Timeouts, wodurch der Rollback-Zeitpunkt verpasst wird. Daher ist die Variablenkontrolle, die eine Ausführung (One-Shot Execution) von `BEGIN;` bis `COMMIT;` erzwingt, am wichtigsten.

Beachten Sie auch, dass ich erzwungen habe, dass die KI bei der Kommunikation mit der DB über Terminal-Befehle (z. B. `safe_query.py` oder direkter `psql`-Aufruf) die Ausgabe zwingend im **perfekten JSON-Format** liefert.
Normalerweise gibt eine KI bei einer DB-Abfrage eine Tabelle in ASCII-Art (mit Linien und Pipes) aus, damit es für Menschen hübsch aussieht. Das ist jedoch nur für das menschliche Auge gut; für die Kommunikation zwischen Maschinen (Agent-to-Agent) ist es die schlechteste Methode. Es verschwendet nicht nur massenhaft wertvolle Kontext-Token, sondern die Wahrscheinlichkeit steigt enorm, dass andere Python-Skripte oder nachfolgende Agenten beim Parsen dieses Textes Halluzinationen erleiden, weil das Format nicht stimmt. Maschinen müssen zwingend in der Sprache der Maschinen – JSON – kommunizieren, um die Systemkopplung (Coupling) drastisch zu reduzieren und die Stabilität zu erhöhen.

**Praxis-Tipps zur Variablenkontrolle (Variable Control Tips):**
Wenn Ihre Umgebung MySQL oder MongoDB ist, passen Sie die `psql`-bezogenen Anweisungen innerhalb des Prompts an die Besonderheiten der CLI-Tools der jeweiligen DB an (`[Variablen]`-Anpassung). Bei MongoDB könnten Sie die Einschränkung beispielsweise so abändern, dass "nur Ergebnisse von `find()`-Queries mit einer gechainten `limit()`-Methode erlaubt sind".
Auch der Teil, der das Verhalten der KI bei Netzwerkverbindungsfehlern kontrolliert, hat in der Praxis unzählige Debugging-Stunden gespart. Wenn die KI keine Verbindung zur DB aufbauen kann, vermutet sie in neun von zehn Fällen einen "Passwortfehler" und wiederholt ununterbrochen Authentifizierungsversuche. Tatsächlich ist es aber viel öfter ein Firewall-Problem oder ein geschlossener Port. Daher ist die Anweisung, die Netzwerkschichten mit `pg_isready` oder `nc -vz` zu prüfen, der beste Cheat Sheet, um die Troubleshooting-Methodik eines Senior Engineers auf die KI zu übertragen.

Bitte bitten Sie die KI nicht vage: "Sei so nett und verwalte die DB". **Erzwingen Sie starke Regeln (Rules) und entwerfen Sie einen Workflow, bei dem der Prozess sofort scheitert (Fail-fast), wenn diese Regeln auch nur um 1 mm verletzt werden.** Nur so schützen Sie Ihre wertvollen Produktionssysteme und Daten perfekt vor dem unvorhersehbaren Amoklauf der KI.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Warum muss ich unbedingt die JSON-Ausgabe erzwingen?**
  - A: Wenn man der KI erlaubt, das Standard-Tabellenformat von `psql` (ASCII-Tabelle) zu lesen, verschwendet man nicht nur massenhaft Kontext-Token, sondern die Wahrscheinlichkeit für Halluzinationen beim Parsen komplexer Tabellen steigt enorm. Maschinen müssen in ihrer Sprache (JSON) kommunizieren.
- **Q: Wie implementiere ich das `--force-write` Flag im System?**
  - A: Man sollte ein Wrapper-Skript wie das im Prompt erwähnte `safe_query.py` in der lokalen Umgebung erstellen und den Workflow so gestalten, dass die KI **zwingend über dieses Python-Skript geht**, anstatt direkt `psql`-Befehle in die DB zu hämmern.
- **Q: Warum müssen Transaktionen in einem Block (Stateless) gesendet werden?**
  - A: KI-Agenten (LLMs) verwechseln oft das Konzept von Sitzungen, die einen Status (State) beibehalten. Wenn Terminal-Befehle aufgeteilt werden, bricht oft die Sitzung dazwischen ab, und man verpasst den Commit-Zeitpunkt. Ein **One-shot**-Befehl ist strukturell am sichersten.

---

## 🧬 Anatomie des Prompts (Why it works?)

1. **Anti-Sycophancy-Injektion:** Durch Anweisungen wie "Schleime dich nicht ein" und "Lehne entschlossen ab" im ersten Absatz wird die typische positive Voreingenommenheit der KI unterdrückt und ihr ein geschärftes kritisches Bewusstsein verliehen.
2. **Fail-Safe Default-Einstellungen:** Die 'Read-Only by Default'-Regel steht ganz oben, um den Gedankenfluss der KI so zu erzwingen, dass sie bei jedem Query unbewusst den Datenschutz an erste Stelle setzt.
3. **Network-First-Prinzip:** Das typische Fehlverhalten der KI, bei Verbindungsfehlern sofort das Passwort zu verdächtigen, wird unterbunden. Stattdessen wird ihr ein Verhaltenskodex eingepflanzt, die Netzwerkschichten (`pg_isready`, `nc`) akribisch wie ein Senior Engineer zu prüfen.

---

## 🎯 Fazit

Dieser Cheat Sheet geht über den bloßen Schutz der Datenbank hinaus. Er wird Ihren KI-Agenten von einem bloßen "Yes-Man" in einen strengen und zuverlässigen **Senior Engineer** verwandeln.

Die schrecklichen Token-Explosionen, gnadenlose `UPDATE`-Queries ohne `WHERE`-Klausel und der Schmerz des sinnlosen Debuggings gehören nun der Vergangenheit an. Mit festen Fesseln und klaren Regeln kontrolliert, ist die KI bereit, Ihr mächtigstes Werkzeug zu werden.

Geben Sie der KI keine unnötige Freiheit. Geben Sie ihr klare Regeln und sperren Sie sie konsequent darin ein.
Ich lade Sie ein, diesen Prompt jetzt beruhigt in Ihr System zu integrieren. Automatisieren Sie Ihre Arbeit und genießen Sie den pünktlichen Feierabend! 🍷
