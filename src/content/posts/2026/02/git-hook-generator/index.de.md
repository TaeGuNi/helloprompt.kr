---
layout: /src/layouts/Layout.astro
title: "커밋 전 자동 점검! AI Git Hook 생성기 (Git Hook Generator)"
author: HelloBot
date: 2026-02-12
updatedDate: 2026-02-12
category: DevOps
description: "Erstellen Sie mit KI in Sekunden perfekte Shell-Skripte für Husky und pre-commit. Sichern Sie Ihre Codequalität ab heute vollautomatisch."
tags: [AI, Git, DevOps, Automation]
---

## 📝 Automatischer Check vor dem Commit! AI Git Hook Generator

- **🎯 Empfohlen für:** Frontend-/Backend-Entwickler, DevOps-Ingenieure, Tech Leads
- **⏱️ Zeitaufwand:** Von 1 Stunde → auf 1 Minute reduziert
- **🤖 Empfohlene Modelle:** Claude 3.5 Sonnet, GPT-4o (spezialisiert auf Code-Generierung)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

> _"Oh nein, ich habe schon wieder vergessen, den Linter laufen zu lassen! 🚨 Verabschieden Sie sich für immer von den feuerroten Fehler-Logs in Ihrer CI/CD-Pipeline – automatisierte Git Hooks übernehmen ab jetzt."_

Wir alle machen Fehler, aber unser System darf sie nicht durchwinken. Manuell `Lint`-Prüfungen oder `Test`-Code auszuführen, kurz bevor man Code committet oder pusht, ist mühsam und wird im Eifer des Gefechts oft einfach vergessen.

Genau hier sind **Git Hooks** der absolute Lebensretter. Wenn man jedoch nicht täglich Shell-Skripte schreibt, kann es extrem frustrierend sein, Hooks von Grund auf neu zu erstellen, die auf allen Betriebssystemen reibungslos funktionieren. Machen Sie Schluss damit! Beschreiben Sie der KI ab sofort einfach Ihre Team-Konventionen und die Projektumgebung. In nur wenigen Sekunden erhalten Sie ein wasserdichtes, perfekt funktionierendes Gatekeeper-Skript.

---

## ⚡️ TL;DR (Zusammenfassung in 3 Sätzen)

1. **Die ultimative Automatisierung:** Von der Einhaltung der Commit-Message-Konventionen bis hin zur Code-Formatierung – alle Regeln werden direkt vor dem Commit rigoros durchgesetzt.
2. **Präzises KI-Scripting:** Sie müssen sich nicht mehr mit komplexen regulären Ausdrücken oder plattformübergreifenden Shell-Skripten herumschlagen. Die KI generiert maßgeschneiderten Code für Ihre Umgebung.
3. **CI-Ressourcen schonen:** Da Fehler zu 100 % lokal abgefangen werden, bevor sie in die Pipeline gelangen, sparen Sie massiv an Cloud-Kosten und lästigen Wartezeiten.

---

## 🚀 Die Lösung: "Prompt für Git Hook Skripte"

### 🥉 Basic Version (Basis-Version)

Verwenden Sie diesen Prompt, wenn Sie auf die Schnelle ein einfaches Hook-Skript für eine spezifische Aktion benötigen.

> **Rolle:** Du bist ein `[DevOps-Ingenieur]`.
>
> **Aufgabe:** Schreibe ein Git Hook Shell-Skript samt Anleitung zur Einrichtung, das `[Husky]` verwendet, um `[npm run lint vor jedem git commit auszuführen]`.

### 🥇 Pro Version (Experten-Version)

Nutzen Sie diese Variante für ein robustes, fehlerresistentes Setup, das im gesamten Team standardisiert eingesetzt werden soll.

> **Rolle (Role):** Du bist ein Senior `[DevOps-Ingenieur]` mit 10 Jahren Erfahrung und ein absoluter `[Experte für Git-Automatisierung]`.
>
> **Kontext (Context):**
>
> - Hintergrund: Teammitglieder halten sich vor dem Commit häufig nicht an die Code-Konventionen, was zu ständigen Build-Fehlern und Ressourcenverschwendung in der CI-Pipeline führt.
> - Umgebung: `[Node.js-basiertes Frontend-Projekt, Nutzung von Husky]`
> - Ziel: Aufbau robuster `[pre-commit und commit-msg]` Hooks, die Entwicklerfehler sofort an der Wurzel packen und blockieren.
>
> **Aufgabe (Task):**
>
> 1. `[pre-commit]` Hook: Schreibe ein Shell-Skript, das `[npm run lint]` und `[npm run format]` **ausschließlich** für bereitgestellte (staged) Dateien (`git diff --staged`) ausführt.
> 2. `[commit-msg]` Hook: Füge ein Skript hinzu, das mithilfe regulärer Ausdrücke strikt prüft, ob die Commit-Nachricht dem Standard der `[Conventional Commits (feat, fix, docs etc.)]` entspricht.
> 3. **Benachrichtigung:** Wenn ein Test oder eine Überprüfung fehlschlägt, muss eine freundliche, aber klare Fehlermeldung (inklusive Lösungsbeispielen) im Terminal ausgegeben und der Commit zwingend blockiert werden (exit 1).
> 4. **Implementierungs-Guide:** Erstelle einen Markdown-Codeblock mit der notwendigen `[package.json]` Konfiguration und den initialen Installationsbefehlen, damit Teammitglieder die Umgebung direkt nach dem Klonen des Repositories einrichten können.
>
> **Einschränkungen (Constraints):**
>
> - Das generierte Shell-Skript muss absolut plattformübergreifend und sicher unter macOS, Linux und Windows (Git Bash) funktionieren.
>
> **Warnung (Warning):**
>
> - Da das Projekt sehr umfangreich ist, würde die Überprüfung aller Dateien den Commit-Prozess extrem verlangsamen. Optimiere die Leistung zwingend so, dass **nur "geänderte Dateien (staged files)"** herausgefiltert und überprüft werden (z. B. durch die gezielte Nutzung von `lint-staged`).

---

## 💡 Anmerkung des Autors (Insight)

Der wahre Wert dieses Prompts geht weit über die bloße Fehlervermeidung hinaus – er bietet enorme **psychologische Sicherheit**. Ich nutze eine angepasste Version dieses Prompts in all meinen privaten Projekten, um einen strikten `pre-push` Hook einzurichten, der direkte Pushes auf den Main-Branch (`git push origin main`) kompromisslos blockiert.

Wenn man spät nachts, übermüdet und unkonzentriert, versehentlich einen Force-Push auf den Main-Branch versucht und das von der KI geschriebene Skript im Terminal sofort dazwischengrätscht: **"🚨 Halt! Der Main-Branch darf ausschließlich über Pull Requests aktualisiert werden."** – das Gefühl der Erleichterung in exakt diesem Moment ist unbezahlbar. Wenn Sie die KI zusätzlich darum bitten, `lint-staged` zu integrieren, beschleunigt sich der Prüfprozess um ein Vielfaches. Sie müssen es unbedingt ausprobieren!

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Wir haben Teammitglieder, die auf Windows arbeiten. Wird das Shell-Skript bei ihnen reibungslos funktionieren?**
  - A: Absolut! Da wir im Prompt explizit "plattformübergreifende Einschränkungen" definiert haben, berücksichtigt die KI dies automatisch. Für Windows wird der Code so generiert, dass er zuverlässig in der Git Bash ausgeführt wird. In Node.js-Umgebungen ist es ohnehin am sichersten, die KI direkt nach der Kombination aus `Husky` und `lint-staged` zu fragen, anstatt reine Shell-Skripte zu verlangen, um maximale Kompatibilität zu gewährleisten.

- **F: Das Skript ist extrem langsam und jeder Commit dauert jetzt mehrere Minuten. Was kann ich tun?**
  - A: Das passiert typischerweise, wenn `npm run lint` oder `npm run test` über die gesamte Codebasis gejagt wird. Stellen Sie sicher, dass Sie, wie im "Warnung"-Abschnitt des Prompts gefordert, explizit betonen: **"Überprüfe nur bereitgestellte (geänderte) Dateien."** Die KI wird das Skript daraufhin deutlich leichtgewichtiger umschreiben, meist unter Verwendung von `git diff --cached --name-only`.

- **F: Ich muss einen massiven Notfall-Commit pushen, aber der Hook blockiert mich permanent. Wie umgehe ich das?**
  - A: Wenn Sie in einer absoluten Ausnahmesituation den Hook überspringen müssen, können Sie das Flag `--no-verify` (oder `-n`) an Ihren Befehl anhängen (Beispiel: `git commit -m "fix: kritischer Hotfix" --no-verify`). **Aber Vorsicht:** Nutzen Sie diesen Ausweg wirklich nur im äußersten Notfall!

---

## 🧬 Prompt-Analyse (Warum es funktioniert)

1. **Konkretisierung von Kontext und Umgebung:** Anstatt einfach zu fordern "Mach mir einen Hook", benennen wir den exakten Tech-Stack (`Husky`, `Node.js`) und unsere aktuellen Schmerzpunkte (häufige Build-Fehler, verschwendete Ressourcen). Das zwingt die KI zu maßgeschneiderten, intelligenten Lösungen (wie etwa dem Vorschlag, `lint-staged` einzusetzen).
2. **Leistungsoptimierung (Warning):** Den häufigsten Anfängerfehler bei Shell-Skripten – die zeitraubende Prüfung aller Dateien – blockieren wir proaktiv bereits auf der Prompt-Ebene. Das Resultat ist hochgradig praxistauglicher und rasend schneller Code.
3. **Plattform-Einschränkungen (Constraints):** Durch die explizite Berücksichtigung diverser Betriebssysteme im Team erzwingen wir von Anfang an eine kompromisslose Kompatibilität für Windows, macOS und Linux.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Der alltägliche Schmerz)

```bash
# Ein typischer Entwicklerfehler
$ git commit -m "update"
[main 1a2b3c4] update
 3 files changed, 150 insertions(+)

$ git push origin main
# 10 Minuten später meldet sich der CI-Server:
# "❌ Build fehlgeschlagen: 45 Lint-Fehler gefunden, Verstoß gegen Commit-Message-Regeln. Bitte wiederholen." (Kollektives Aufseufzen im Team)
```

### ✅ Nachher (Die automatisierte Rettung)

```bash
# Lokale Blockade und sofortiges Feedback beim Commit-Versuch
$ git commit -m "update"
✔ Preparing lint-staged...
✖ Running tasks for staged files...
  ❯ package.json — 12 files
    ✖ eslint --fix [FAILED]

🚨 [Fehler] ESLint-Überprüfung nicht bestanden!
src/components/Button.tsx:25:2 - error: 'unusedVar' is assigned a value but never used.

🚨 [Fehler] Verstoß gegen Commit-Message-Regeln!
Eingegebene Nachricht: "update"
Richtiges Format-Beispiel: "feat: Login-Button Design überarbeitet" oder "fix: Tippfehler korrigiert"

❌ Commit abgebrochen. Bitte korrigieren Sie den Code und versuchen Sie es mit dem richtigen Nachrichtenformat erneut.
```

---

## 🎯 Fazit

Sobald Git Hooks einmal sauber eingerichtet sind, agieren sie als unsichtbare, verlässliche Versicherung, die Sie bis zum Ende des Projekts vor tausenden von ärgerlichen Flüchtigkeitsfehlern bewahrt. Wenn Sie die Einführung bisher aus Respekt vor komplexen Shell-Skripten vor sich hergeschoben haben, überlassen Sie der KI ab sofort einfach die Tastatur.

Es ist das perfekte, automatisierte Schutzschild, das nicht nur Ihre Codequalität, sondern auch Ihren pünktlichen Feierabend sichert. Committen Sie ab heute mit einem absolut beruhigten Gewissen! 🍷
