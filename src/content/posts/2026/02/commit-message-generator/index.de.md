---
layout: /src/layouts/Layout.astro
title: " \"'Commit-Nachricht empfehlen' Keine Sorgen mehr! Automatische Generierung von Conventional Commits\""
author: "Jay"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Generieren Sie mit diesem Prompt automatisch saubere, standardisierte Conventional Commits, indem Sie einfach Ihr `git diff` einfügen."
tags: ["Git", "Commit-Nachricht", "Zusammenarbeit", "Produktivität"]
---

## 📝 Nie wieder Kopfzerbrechen: Automatische Generierung von Conventional Commits

- **🎯 Empfohlen für:** Entwickler, Open-Source-Contributor, Team Leads
- **⏱️ Zeitaufwand:** 5 Minuten → 10 Sekunden
- **🤖 Empfohlenes Modell:** Alle dialogfähigen KI-Modelle (ChatGPT, Claude, Gemini etc.)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐☆

> _"Die passende Commit-Nachricht zu formulieren, dauert manchmal länger als das eigentliche Bugfixing – überlassen wir diesen lästigen administrativen Schritt doch einfach der KI."_

Eine saubere und aussagekräftige Git-Historie ist das absolute Rückgrat jedes erfolgreichen Softwareprojekts. Doch seien wir mal ehrlich: Wer kennt diese Situation nicht? Nach stundenlangem, hochkonzentriertem Coden ist die mentale Energie komplett aufgebraucht. Für eine ordentlich strukturierte Commit-Nachricht fehlt schlichtweg der Nerv, und am Ende landet doch wieder nur ein nichtssagendes `fix: bug` oder `update stuff` im Repository. 

Das rächt sich spätestens dann, wenn Wochen später ein Kollege (oder man selbst) versucht nachzuvollziehen, warum genau diese eine Zeile Code geändert wurde. Mit dem folgenden Prompt gehört dieses Problem endgültig der Vergangenheit an. Sie müssen lediglich die Ausgabe Ihres `git diff` einfügen und erhalten in Sekundenschnelle eine perfekt strukturierte Nachricht, die streng den Regeln der **Conventional Commits** folgt. Solche präzisen, standardisierten Logs werten nicht nur Ihre professionelle Reputation auf, sondern sind in jedem ambitionierten Entwicklerteam und bei Open-Source-Projekten ein absolutes Muss. Sparen Sie sich die kognitive Last für das eigentliche Programmieren und automatisieren Sie den administrativen Overhead!

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Automatisierte Klassifizierung:** Die KI erkennt den Typ der Code-Änderung (feat, fix, refactor etc.) völlig selbstständig und fehlerfrei.
2. **Kristallklare Struktur:** Es werden prägnante Titel und detaillierte, sofort verständliche Beschreibungen in übersichtlichen Aufzählungspunkten generiert.
3. **Kompromisslose Standard-Konformität:** Die strikte Einhaltung der Conventional Commits garantiert eine nahtlose und professionelle Team-Kollaboration.

---

## 🚀 Die Lösung: "Git-Commit-Nachrichten-Generator"

### 🥉 Basic Version (Einfach)

Nutzen Sie diesen kompakten Prompt, wenn Sie blitzschnell ein sauberes Ergebnis ohne ausschweifende Details benötigen.

> **Rolle:** Du bist ein erfahrener Open-Source-Maintainer, der höchsten Wert auf eine makellose Git-Historie legt.
> **Anfrage:** Analysiere die folgenden Code-Änderungen und generiere eine saubere, standardisierte Commit-Nachricht, die exakt den Regeln der Conventional Commits entspricht.

### 🥇 Pro Version (Experte)

Dieser fortgeschrittene Prompt ist ideal, wenn Sie aus mehreren hochwertigen Optionen wählen möchten und detaillierte Erklärungen (Body & Footer) für komplexe Commits fordern.

> **Rolle (Role):** Du bist ein Senior Software Engineer und strenger Open-Source-Maintainer, der kompromisslosen Wert auf eine makellose und nachvollziehbare Git-Historie legt.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich habe Code-Änderungen vorgenommen und benötige eine saubere Commit-Nachricht, die meine Teamkollegen und zukünftige Entwickler sofort und ohne Rückfragen verstehen.
> - Ziel: Die Generierung präziser, hochgradig aussagekräftiger Commit-Nachrichten nach strikten internationalen Standards.
>
> **Aufgabe (Task):**
> Analysiere die unten stehenden `[Änderungen]` und schlage exakt 3 verschiedene Commit-Nachrichten vor, die streng den **Conventional Commits**-Regeln folgen.
>
> 1. **Format:** `<type>(<scope>): <subject>`
> 2. **Body:** Fasse den Grund für die Änderung (Warum?) und den genauen technischen Inhalt (Was?) in übersichtlichen, leicht erfassbaren Aufzählungspunkten zusammen.
> 3. **Footer:** (Optional) Falls eine Issue-Nummer im Code oder Kontext erkennbar ist, füge sie zwingend im Format `Closes #[Issue-Nummer]` hinzu.
>
> **Änderungen (Changes):**
> `[Füge hier die Ausgabe von 'git diff' oder eine kurze Zusammenfassung ein]`
>
> **Einschränkungen (Constraints):**
>
> - Erlaubte Typen (Type): Wähle ausschließlich aus dieser Liste: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
> - Der Betreff (Subject) darf maximal 50 Zeichen lang sein, muss zwingend im Imperativ (Befehlsform) geschrieben sein und darf niemals mit einem Punkt enden. Schreibe die Commit-Nachrichten auf **Englisch**, da dies der uneingeschränkte Standard in der globalen Softwareentwicklung ist.
> - Gib die finale Antwort in einem sauberen Markdown-Codeblock aus, damit ich sie mit einem Klick kopieren kann.
>
> **Warnung (Warning):**
>
> - Erfinde unter keinen Umständen Funktionalitäten, Variablen oder Dateien, die nicht explizit in den bereitgestellten Änderungen erwähnt werden (absolute Null-Toleranz für Halluzinationen). Wenn der Zweck einer Änderung unklar ist, weise direkt darauf hin.

---

## 💡 Kommentar des Autors (Insight)

Dieser Prompt ist ein wahrer Gamechanger für den hektischen Entwickleralltag. Viel zu oft verlieren wir den Kontext unserer eigenen Änderungen, besonders wenn wir tief im Tunnel waren und an Dutzenden Dateien gleichzeitig geschraubt haben. Indem wir einfach den rohen Output von `git diff` in die KI werfen, erhalten wir nicht nur fertige, professionelle Commit-Nachrichten, sondern quasi auch ein gnadenloses "Mini-Code-Review" gratis dazu. Die KI fasst logisch und schonungslos zusammen, was wir da eigentlich fabriziert haben. Das zwingt uns indirekt dazu, unsere zu groß geratenen Commits sinnvoll aufzuspalten, falls die Liste der detektierten Änderungen zu lang oder chaotisch ausfällt. **Mein persönlicher Pro-Tipp:** Nutzen Sie konsequent den Output von `git diff --staged`. So stellen Sie absolut sicher, dass die KI auch wirklich nur die Dateien analysiert, die tatsächlich im nächsten Commit landen sollen, und ignorieren irrelevantes Rauschen im Arbeitsverzeichnis.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Kann ich die Commit-Nachrichten auch auf Deutsch generieren lassen?**
  - A: Technisch ja. Sie können in den _Constraints (Einschränkungen)_ den Befehl anpassen auf: "Schreibe die Commit-Nachrichten auf Deutsch." Beachten Sie jedoch, dass in nahezu allen professionellen Teams und Open-Source-Projekten Englisch der absolute De-facto-Standard ist. Genau deshalb liefert der Pro-Prompt die Ergebnisse standardmäßig auf Englisch.

- **Q: Was mache ich, wenn mein `git diff` den Rahmen des KI-Kontextfensters sprengt?**
  - A: Bei gewaltigen Commits ist das ein starkes Indiz dafür, dass Sie Ihre Änderungen in kleinere, logische Blöcke aufteilen sollten (z.B. UI-Anpassungen strikt von der Backend-Logik trennen). Nutzen Sie `git add -p` im Terminal und füttern Sie die KI ausschließlich mit den aktuell gestageten Änderungen.

- **Q: Woher weiß die KI, welchen spezifischen Scope (z.B. `auth`, `ui`) sie verwenden muss?**
  - A: Moderne Modelle leiten den Scope verblüffend präzise aus den Dateinamen oder Ordnerstrukturen ab (z.B. führt eine Änderung in `src/components/Button.tsx` logischerweise zu `scope: ui`). Sollte die KI dennoch einmal danebenliegen, können Sie den Scope vor dem endgültigen Commit mit einem Handgriff manuell korrigieren.

---

## 🧬 Prompt-Anatomie (Warum funktioniert das?)

1. **Das psychologische Framing (Rollenzuweisung):** Durch die klare Definition als "Senior Software Engineer" und "strenger Maintainer" zwingen wir die KI in ein professionelles Mindset. Sie schlägt dadurch einen verbindlichen Tonfall an und achtet penibel auf Qualitätsstandards.
2. **Die Macht der Restriktion (Constraints):** Die exakte Limitierung auf erlaubte Typen (feat, fix etc.) sowie die harte 50-Zeichen-Grenze für den Betreff fungieren als Leitplanken. Sie verhindern effektiv, dass das Modell "zu kreativ" wird und vom etablierten Branchenstandard abweicht.
3. **Architektonische Format-Spezifikation:** Die zwingende Anforderung, Body und Footer strikt getrennt voneinander auszugeben, macht die resultierende Nachricht nicht nur optimal maschinenlesbar (essenziell für Semantic Release Tools), sondern auch für menschliche Reviewer blitzschnell erfassbar.

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

Vergessen Sie nie: Commit-Nachrichten sind im Grunde genommen Liebesbriefe an Ihr zukünftiges Ich und an Ihre hart arbeitenden Teamkollegen. Sparen Sie sich das ständige Kopfzerbrechen über die perfekte Formulierung und delegieren Sie diese trockene Formatierungsarbeit souverän an die KI. So bleibt Ihre Git-Historie jederzeit makellos, Code-Reviews gehen deutlich schneller von der Hand, und Sie können sich früher und völlig entspannt in den wohlverdienten Feierabend verabschieden! 🍷
