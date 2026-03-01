---
layout: /src/layouts/Layout.astro
title: "🎙️ Strukturierter Prompt: Chaotische Meeting-Notizen in 1 Minute ordnen"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: " "
description: "Ein Praxis-Prompt, der unstrukturierte Meeting-Transkripte sofort in saubere Zusammenfassungen und klare Action Items verwandelt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Chaotische Meeting-Notizen in 1 Minute strukturieren

- **🎯 Zielgruppe:** Junior-Mitarbeiter, Projektmanager, Marketer
- **⏱️ Zeitaufwand:** 30 Minuten → auf 1 Minute reduziert
- **🤖 Empfohlene Modelle:** Alle konversationsbasierten KIs (ChatGPT, Claude, Gemini etc.)
- ⭐ **Schwierigkeitsgrad:** ⭐☆☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nützlichkeit:** ⭐⭐⭐⭐⭐

> _"Haben Sie heute Nachmittag auch wieder wertvolle Zeit mit dem Tippen von Meeting-Protokollen verschwendet?"_

Selbst wenn man das Meeting aufzeichnet und direkt danach in Text umwandelt (etwa mit Whisper), bleibt es eine Qual, die Kernaussagen aus dem Gesprächswirrwarr herauszufiltern. Dieser Prompt extrahiert messerscharf die **wichtigsten Entscheidungen** und leitet ab, **wer was bis wann tun muss (Action Items)** – und das aus einem völlig unstrukturierten Textberg. Einfach kopieren und einfügen.

---
## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. Kopieren Sie das rohe Text-Transkript und übergeben Sie es der KI.
2. Die KI filtert irrelevantes Geplauder heraus und extrahiert exakt die getroffenen Kernentscheidungen.
3. Die entscheidenden nächsten Schritte (Action Items) werden übersichtlich nach Verantwortlichkeiten strukturiert.

---
## 🚀 Die Lösung: "Prompt zur automatischen Strukturierung von Meeting-Notizen"

### 🥉 Basic Version (Basis-Version)

Verwenden Sie diese Variante, wenn Sie möglichst schnell Ergebnisse benötigen.

> **Rolle:** Du bist ein `[erfahrener Senior Project Manager]`.
> **Aufgabe:** Lies das folgende `[Meeting-Transkript]` und fasse die wichtigsten Entscheidungen sowie die nächsten Schritte (Action Items) auf den Punkt zusammen.

### 🥇 Pro Version (Experten-Version)

Nutzen Sie diese Variante, wenn es auf höchste Präzision und Detailtiefe ankommt.

> **Rolle (Role):** Du bist ein `[IT-Projektmanager mit 10 Jahren Berufserfahrung]`. Du bist ein absoluter Experte darin, den Kontext komplexer Meetings blitzschnell zu erfassen und glasklar zu strukturieren, wer was bis wann erledigen muss.
>
> **Kontext (Context):**
> - Hintergrund: Ein unstrukturiertes Text-Transkript eines `[wöchentlichen Status-Meetings oder Brainstormings]` liegt vor.
> - Ziel: Erstellung einer sauber strukturierten Zusammenfassung, die es allen Teilnehmern ermöglicht, die Kernpunkte sofort zu erfassen und ihre jeweiligen Aufgaben (Action Items) missverständnisfrei auszuführen.
>
> **Aufgabe (Task):**
> 1. Lies das untenstehende `[Meeting-Transkript]` und fasse es exakt nach folgender Struktur zusammen:
>   - 📌 Hauptthema (Main Topic)
>   - 🎯 Wichtige Entscheidungen (Key Decisions)
>   - 🚨 Ausstehende/Ungelöste Punkte (Pending Issues)
>   - ✅ Action Items (Verantwortlichkeiten, Fristen und konkrete Aufgaben klar benennen)
> 2. Filtere Begrüßungen, Smalltalk und inhaltliche Wiederholungen restlos heraus.
> 3. Verwende durchgehend einen professionellen, geschäftlichen Tonfall (klare, präzise Schriftsprache).
>
> **Einschränkungen (Constraints):**
> - Die Ausgabe muss zwingend als Liste erfolgen. Nutze dafür Markdown-Elemente (wie -, *, Backticks) und passende Emojis.
> - Verwende unter keinen Umständen Markdown-Tabellen (Tables).
> - Ist der Verantwortliche für ein Action Item nicht eindeutig zuordbar, markiere diesen Punkt zwingend mit '[Klärung erforderlich]'.
>
> **Warnung (Warning):**
> - Erfinde niemals Informationen oder Fristen, die nicht explizit im Transkript erwähnt wurden (striktes Verbot von Halluzinationen).
>
> **Eingabe (Input):**
> - Meeting-Transkript: `[Fügen Sie hier das rohe Transkript ein]`

---

## 💡 Kommentar des Autors (Insight)

Der wahre Wert dieses Prompts liegt in der **gezielten Extraktion von Action Items** bei gleichzeitigem **strikten Unterdrücken von KI-Halluzinationen**. 
Ein gutes Meeting-Protokoll soll schließlich nicht einfach nur "alles Gesagte mitschreiben", sondern unmissverständlich klären: "Was ist als Nächstes zu tun?". 
In der Praxis neigt die KI oft dazu, plausibel klingende, aber völlig frei erfundene Deadlines zu generieren, die im Meeting nie besprochen wurden. Um genau das zu unterbinden, greifen die harte Regel "Erfinde niemals Informationen" sowie die defensive Anweisung zur Markierung mit '[Klärung erforderlich]'. Geben Sie den rohen Text aus Speech-to-Text-Tools wie Whisper einfach zusammen mit diesem Prompt in Claude 3.5 Sonnet oder GPT-4o ein. Die nervenaufreibende Textarbeit, die Sie sonst gut 30 Minuten kosten würde, ist in 1 Minute erledigt. Genießen Sie in der gewonnenen Zeit lieber entspannt eine Tasse Kaffee.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Kann ich auch das Transkript eines stundenlangen Meetings am Stück einfügen?**
  - A: Absolut. Die aktuellen Flaggschiff-Modelle (wie Claude 3.5 Sonnet oder GPT-4o) besitzen ein massives Kontextfenster und verarbeiten auch einstündige Meetings mühelos. Sollten Sie dennoch an ein Token-Limit stoßen, halbieren Sie den Text einfach.

- **Q: Funktioniert der Prompt auch in der kostenlosen ChatGPT-Version?**
  - A: Grundsätzlich ja. Allerdings ist die Präzision bei der Kontextanalyse und der strikten Befolgung von Constraints in älteren, kostenlosen Modellen (wie GPT-3.5) merklich geringer. Für fehlerfreie Ergebnisse empfehlen wir stets die aktuellen Top-Modelle.

---

## 🧬 Anatomie des Prompts (Why it works?)

1. **Rollenvergabe (Role):** Die Persona eines hochgradig erfahrenen Projektmanagers zwingt die KI in einen professionellen Tonfall, der Prioritäten setzt und "Arbeitsanweisungen klärt", statt den Text lediglich stumpf zusammenzufassen.
2. **Aufgabenstrukturierung (Task):** Durch die starre Vorgabe der Kategorien (Hauptthema, Entscheidungen, offene Punkte, Action Items) nehmen wir der KI jeglichen Spielraum für unerwünschte Eigenkreationen beim Ausgabeformat.
3. **Einschränkungen (Constraints):** Markdown-Tabellen, die auf mobilen Endgeräten oft das Layout sprengen, werden kategorisch verboten. Stattdessen wird ein sauberes, extrem gut lesbares Emoji-Listenformat erzwungen.

---

## 📊 Beweis: Before & After

### ❌ Before (Eingabe)

```text
Teamleiter Kim: Ah ja, können Sie mich alle hören? Wir haben uns heute wegen der Marketingkampagne für dieses Quartal versammelt. Herr Park, wie sieht es mit den vorbereiteten Plänen A und B aus?
Herr Park: Ja, bei Plan A sieht es leider so aus, als würden wir das Budget leicht überschreiten. Daher sollten wir diesen wohl besser zurückstellen und direkt mit Plan B weitermachen.
Mitarbeiter Choi: Kurzer Einwurf: Wenn wir mit Plan B fortfahren, werde ich bis diesen Freitag bereits eine Shortlist für die Influencer-Akquise zusammenstellen.
Teamleiter Kim: Okay, dann loggen wir Plan B hiermit ein. Herr Park, bitte überarbeiten Sie den entsprechenden Budgetplan bis kommenden Dienstag und erstatten Sie uns Bericht. Und was das Design der Landingpage angeht... Ah, das ist noch gar nicht mit dem Design-Team abgestimmt, richtig?
Herr Park: Korrekt, das steht aktuell noch aus.
```

### ✅ After (Ergebnis)

```text
📌 Hauptthema
- Abstimmung zur Marketingkampagne für das laufende Quartal

🎯 Wichtige Entscheidungen
- Plan A wird aufgrund von Budgetüberschreitung zurückgestellt; Plan B ist offiziell verabschiedet.

🚨 Ausstehende/Ungelöste Punkte
- Konzeption des Landingpage-Designs (Abstimmung mit dem Design-Team steht noch aus)

✅ Action Items
- 👨‍💼 Herr Park: Überarbeitung und Reporting des Budgetplans für Plan B (Frist: Kommender Dienstag)
- 🧑‍💻 Mitarbeiter Choi: Erstellung einer Shortlist für die Influencer-Akquise bezüglich Plan B (Frist: Dieser Freitag)
- ❓ [Klärung erforderlich]: Zuständigkeit für die finale Abstimmung der Landingpage mit dem Design-Team ist noch offen
```

---

## 🎯 Fazit

Verschwenden Sie Ihre wertvolle Energie nicht länger mit dem manuellen Entwirren endloser Meeting-Transkripte. 
Überlassen Sie das Ordnen des Text-Chaos einfach der KI und konzentrieren Sie sich auf das, was wirklich zählt: die Umsetzung der beschlossenen Action Items. 

Und jetzt: Machen Sie pünktlich Feierabend! 🍷
