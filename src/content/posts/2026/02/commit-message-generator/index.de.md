---
layout: /src/layouts/Layout.astro
title: "'Commit-Nachricht empfehlen' Keine Sorgen mehr! Automatische Generierung von Conventional Commits"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Ein Prompt, der automatisch saubere, standardisierte Commit-Nachrichten (Conventional Commits) generiert, wenn Sie einfach Ihre Änderungen (`git diff`) einfügen."
tags: ["Git", "Commit-Nachricht", "Zusammenarbeit", "Produktivität"]
---

# 📝 "Commit-Nachricht empfehlen" Keine Sorgen mehr! Automatische Generierung von Conventional Commits

- **🎯 Empfohlen für:** Entwickler, Open-Source-Beitragende, Teamleiter
- **⏱️ Zeitaufwand:** 5 Minuten → 10 Sekunden
- **🤖 Empfohlenes Modell:** Alle dialogfähigen KIs (ChatGPT, Claude, Gemini etc.)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐☆

> _"Die passende Commit-Nachricht zu formulieren, dauert manchmal länger als das eigentliche Bugfixing – lassen wir das doch einfach die KI erledigen."_

Eine aussagekräftige Git-Historie ist das Rückgrat jedes guten Softwareprojekts. Doch wer kennt es nicht: Nach stundenlangem Coden fehlt oft die Energie für eine ordentliche Commit-Nachricht, und es endet wieder mit `fix: bug` oder `update stuff`.
Mit diesem Prompt können Sie einfach die Ausgabe von `git diff` einfügen und erhalten sofort strukturierte, nach **Conventional Commits** formatierte Nachrichten, die in jedem Open-Source-Projekt oder Entwicklerteam gerne gesehen sind.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Automatisierte Klassifizierung:** Die KI erkennt selbstständig den Typ der Änderung (feat, fix, refactor etc.).
2. **Klare Struktur:** Generiert prägnante Titel und detaillierte Beschreibungen in Form von Aufzählungspunkten.
3. **Standard-Konformität:** Hält sich strikt an die Regeln der Conventional Commits, ideal für nahtlose Team-Kollaboration.

---

## 🚀 Die Lösung: "Git-Commit-Nachrichten-Generator"

### 🥉 Basic Version (Einfach)

Verwenden Sie diesen Prompt, wenn Sie schnell ein sauberes Ergebnis ohne viele Details benötigen.

> **Rolle:** Du bist ein erfahrener Open-Source-Maintainer, der großen Wert auf eine saubere Git-Historie legt.
> **Anfrage:** Analysiere die folgenden Code-Änderungen und erstelle eine saubere, standardisierte Commit-Nachricht nach den Regeln der Conventional Commits.

<br>

### 🥇 Pro Version (Experte)

Verwenden Sie diesen Prompt, wenn Sie mehrere Optionen und detaillierte Erklärungen (Body & Footer) für Ihre Commits benötigen.

> **Rolle (Role):** Du bist ein Senior Software Engineer und Open-Source-Maintainer, der extremen Wert auf eine makellose Git-Historie legt.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich habe Code-Änderungen vorgenommen und brauche eine saubere Commit-Nachricht, die meine Kollegen und zukünftige Entwickler sofort verstehen.
> - Ziel: Generierung von präzisen, aussagekräftigen Commit-Nachrichten nach internationalen Standards.
>
> **Aufgabe (Task):**
> Analysiere die unten stehenden `[Änderungen]` und schlage 3 verschiedene Commit-Nachrichten vor, die streng den **Conventional Commits**-Regeln folgen.
>
> 1. **Format:** `<type>(<scope>): <subject>`
> 2. **Body:** Fasse den Grund für die Änderung (Warum?) und den genauen Inhalt der Änderung (Was?) in übersichtlichen Aufzählungspunkten zusammen.
> 3. **Footer:** (Optional) Falls eine Issue-Nummer existiert, füge sie im Format `Closes #[Issue-Nummer]` hinzu.
>
> **Änderungen (Changes):**
> `[Füge hier die Ausgabe von 'git diff' oder eine kurze Zusammenfassung ein]`
>
> **Einschränkungen (Constraints):**
>
> - Erlaubte Typen (Type): Wähle ausschließlich aus `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
> - Der Betreff (Subject) darf maximal 50 Zeichen lang sein, muss im Imperativ (Befehlsform) geschrieben sein und darf nicht mit einem Punkt enden. Schreibe die Commit-Nachrichten auf **Englisch**, da dies der Standard in der Softwareentwicklung ist.
> - Gib die finale Antwort in einem sauberen Markdown-Codeblock aus, damit ich sie direkt kopieren kann.
>
> **Warnung (Warning):**
>
> - Erfinde keine Funktionalitäten oder Dateien, die nicht in den bereitgestellten Änderungen erwähnt werden (Keine Halluzinationen). Wenn der Zweck unklar ist, weise darauf hin.

---

## 💡 Kommentar des Autors (Insight)

Dieser Prompt ist ein echter Gamechanger für den Entwickleralltag. Oftmals verlieren wir den Kontext unserer eigenen Änderungen, wenn wir an mehreren Dateien gleichzeitig gearbeitet haben. Indem wir einfach `git diff` in die KI werfen, erhalten wir nicht nur fertige Commit-Nachrichten, sondern auch eine Art "Mini-Code-Review". Die KI fasst logisch zusammen, was passiert ist, und zwingt uns indirekt dazu, unsere Commits sinnvoll zu splitten, falls die Liste der Änderungen zu lang oder zu chaotisch wird. Tipp: Wenn Sie den Output von `git diff --staged` verwenden, stellen Sie sicher, dass nur die relevanten Dateien im Commit landen.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Kann ich die Commit-Nachrichten auch auf Deutsch generieren lassen?**
  - A: Ja, Sie können in den _Constraints (Einschränkungen)_ explizit angeben: "Schreibe die Commit-Nachrichten auf Deutsch." In den meisten professionellen und Open-Source-Projekten ist Englisch jedoch der De-facto-Standard, weshalb der Pro-Prompt standardmäßig Englisch verwendet.

- **Q: Was mache ich, wenn `git diff` zu lang für das Kontextfenster der KI ist?**
  - A: Bei sehr großen Commits empfiehlt es sich, die Änderungen in logische Blöcke aufzuteilen (z.B. UI-Änderungen und Backend-Logik getrennt). Nutzen Sie `git add -p` und generieren Sie die Nachricht nur für die aktuell gestageten Änderungen.

- **Q: Weiß die KI immer, welchen Scope (z.B. `auth`, `ui`) sie verwenden soll?**
  - A: Die KI leitet den Scope aus den Dateinamen oder Pfaden ab (z.B. Änderungen in `src/components/Button.tsx` -> `scope: ui`). Sie können den Scope bei Bedarf in der endgültigen Nachricht manuell anpassen.

---

## 🧬 Prompt-Anatomie (Warum funktioniert das?)

1. **Klare Rollenzuweisung:** Durch die Definition als "Senior Software Engineer" und "Maintainer" zwingen wir die KI, einen professionellen, strengen Tonfall anzuschlagen und Standards wertzuschätzen.
2. **Strikte Einschränkungen (Constraints):** Die exakte Vorgabe der erlaubten Typen (feat, fix etc.) und die 50-Zeichen-Grenze für den Betreff verhindern, dass die KI zu kreativ wird und vom Standard abweicht.
3. **Format-Spezifikation:** Durch die Anforderung, Body und Footer getrennt und strukturiert auszugeben, wird die Commit-Nachricht nicht nur maschinenlesbar (z.B. für Semantic Release Tools), sondern auch für Menschen extrem gut erfassbar.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe / Unstrukturierte Notiz)

```text
Ich habe die Farbe des Login-Buttons auf Rot geändert und endlich den nervigen Fehler behoben, dass der Login-Request fehlschlägt. Ach ja, und ich habe noch schnell die Installationsanleitung in der Readme aktualisiert.
```

### ✅ Nachher (KI-Ergebnis)

**Option 1 (Fokus auf Bugfix - Empfohlen)**

```text
fix(auth): resolve login failure and update button style

- Fix logic error that prevented successful login requests
- Change login button color to red for better visibility
- Update installation guide in README.md
```

**Option 2 (Getrennte Commits - Best Practice)**

```text
style(ui): change login button color to red

fix(auth): resolve login request failure

docs(readme): update installation guide
```

---

## 🎯 Fazit

Commit-Nachrichten sind Briefe an Ihr zukünftiges Ich und Ihre Teamkollegen. Sparen Sie sich das Kopfzerbrechen und lassen Sie die KI die Formatierungsarbeit übernehmen. So bleibt Ihre Git-Historie makellos und Sie können schneller in den verdienten Feierabend starten! 🍷
