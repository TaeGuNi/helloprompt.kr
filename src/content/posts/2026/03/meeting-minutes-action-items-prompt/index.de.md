---
layout: /src/layouts/Layout.astro
title: "🎙️ Strukturierter Prompt: Chaotische Meeting-Notizen in 1 Minute ordnen"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: " "
description: "Ein Praxis-Prompt, der unstrukturierte Meeting-Transkripte sofort in saubere Zusammenfassungen und Action Items verwandelt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Chaotische Meeting-Notizen in 1 Minute strukturieren
<!-- ⚠️ [CRITICAL RULE]   (10   ) ⚠️
    (`index.ko.md`)  ,
****   9  (`index.[lang].md`)   .
 (9): en, de, es, fr, it, ja, pt, ru, zh
 10(+9 )       . -->
<!-- ⚠️ [Lint Rule]   . (Table)      . -->
- **🎯 Zielgruppe:** Junior-Mitarbeiter, Projektmanager, Marketer
- **⏱️ Zeitaufwand:** Von 30 Minuten → auf 1 Minute reduziert
- **🤖 Empfohlene Modelle:** Alle konversationsbasierten KIs (ChatGPT, Claude, Gemini etc.)
- ⭐ **Schwierigkeitsgrad:** ⭐☆☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nützlichkeit:** ⭐⭐⭐⭐⭐
<!-- ⚠️ [Lint Rule] (>) Basic/Pro   (_..._)     . -->
> _"Haben Sie heute Nachmittag auch wieder Ihre ganze Zeit mit dem Schreiben von Meeting-Protokollen verschwendet?"_
Selbst wenn man direkt nach dem Meeting das aufgenommene Audio in Text umwandelt (mit Tools wie Whisper etc.), ist es eine weitere Qual, die Kernaussagen aus den durcheinandergewürfelten Gesprächen herauszufiltern. Dieser Prompt extrahiert messerscharf nur die **'wichtigsten Entscheidungen'** und das, **'wer was tun muss (Action Items)'**, aus einem zusammenhangslosen Textberg. Einfach kopieren und einfügen.
---
## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)
1. Kopieren Sie den rohen, umgewandelten Text und übergeben Sie ihn der KI.
2. Die KI filtert das Geplauder heraus und extrahiert nur die Kernentscheidungen.
3. Die wichtigsten 'nächsten Schritte pro Verantwortlichem (Action Items)' werden klar herausgearbeitet.
---
## 🚀 Die Lösung: "Prompt zur automatischen Strukturierung von Meeting-Notizen"
<!-- ⚠️ [Lint Rule] (>) (Prompt ) Prompt  . -->
### 🥉 Basic Version (Basis-Version)
Verwenden Sie diese Version, wenn Sie schnell nur Ergebnisse benötigen.
> **Rolle:** Du bist ein `[Senior Project Manager]`.
> **Aufgabe:** Lies das folgende `[Meeting-Transkript]` und fasse die wichtigsten Entscheidungen sowie die nächsten Schritte (Action Items) auf den Punkt zusammen.
### 🥇 Pro Version (Experten-Version)
Verwenden Sie diese Version, wenn detaillierte Qualität gefragt ist.
> **Rolle (Role):** Du bist ein `[IT-Service-Planer und PM mit 10 Jahren Erfahrung]`. Du bist ein Experte darin, den Kontext von Meetings zu erfassen und klar zu strukturieren, wer was bis wann erledigen muss.
>
> **Kontext (Context):**
> - Hintergrund: Ein unstrukturiertes Text-Transkript liegt nach einem `[wöchentlichen Status-Meeting oder Ideenfindungs-Meeting]` vor.
> - Ziel: Erstellung einer sauber strukturierten Zusammenfassung, damit die Teilnehmer den Inhalt des Meetings schnell erfassen und ihre jeweiligen Aufgaben (Action Items) ohne Verwirrung ausführen können.
>
> **Aufgabe (Task):**
> 1. Lies das untenstehende `[Meeting-Transkript]` und fasse es nach folgender Struktur zusammen:
>   - 📌 Hauptthema (Main Topic)
>   - 🎯 Wichtige Entscheidungen (Key Decisions)
>   - 🚨 Ausstehende/Ungelöste Punkte (Pending Issues)
>   - ✅ Action Items (Verantwortliche, Fristen und Aufgaben klar benennen)
> 2. Entferne Begrüßungen, unnötiges Geplauder und Wiederholungen vollständig.
> 3. Behalte einen geschäftlichen Tonfall (höfliche und klare Schriftsprache) bei.
>
> **Einschränkungen (Constraints):**
> - Das Ausgabeformat muss eine Liste sein, die Markdown-Symbole (-, *, Backticks etc.) und Emojis verwendet.
> - Verwende unter keinen Umständen Markdown-Tabellen (Table).
> - Wenn der Verantwortliche für ein Action Item unklar ist, markiere es mit '[Klärung erforderlich]'.
>
> **Warnung (Warning):**
> - Erfinde niemals Inhalte, die nicht im Transkript stehen. (Vermeidung von Halluzinationen)
>
> **Eingabe (Input):**
> - Meeting-Transkript: `[Fügen Sie hier den kopierten Transkript-Text ein]`
---
<!-- ✅ [Lint Rule]  .   CI  . -->
## 💡 Kommentar des Autors (Insight)
Der Kern dieses Prompts liegt in der **'Extraktion von Action Items'** und der **'Unterdrückung von Halluzinationen (Hallucination)'**. 
Der wahre Zweck eines Meeting-Protokolls besteht nicht darin, "das Gesagte aufzuzeichnen", sondern "klarzustellen, was als Nächstes zu tun ist". 
Wenn man ihn in der Praxis anwendet, erfindet die KI oft plausibel klingende Zeitpläne, die gar nicht im Meeting besprochen wurden. Um dies zu verhindern, wurden die Einschränkung "Erfinde keine fehlenden Inhalte" und die defensive Anweisung "Wenn der Verantwortliche unklar ist, markiere es mit [Klärung erforderlich]" hinzugefügt. Werfen Sie den mit STT-Tools wie Whisper extrahierten Text zusammen mit diesem Prompt in Claude 3.5 Sonnet oder GPT-4o. Die Textbearbeitung, die sonst 30 Minuten dauern würde, schrumpft auf 1 Minute. Trinken Sie in der gewonnenen Zeit lieber noch eine Tasse Kaffee.
---
<!-- ⚠️ [Lint Rule]  .    . -->
## 🙋 Häufig gestellte Fragen (FAQ)
- **F: Kann ich auch das Transkript eines einstündigen, langen Meetings komplett einfügen?**
  - A: Ja, die neuesten Modelle (wie Claude 3.5 Sonnet, GPT-4o etc.) verfügen über ein hervorragendes Kontextverständnis und können auch Texte von einer Stunde Länge problemlos verarbeiten. Falls Sie jedoch an ein Token-Limit stoßen, teilen Sie die Eingabe in zwei Hälften auf.
- **F: Funktioniert das auch in der kostenlosen Version von ChatGPT?**
  - A: Es ist möglich, aber die Fähigkeit, den Kontext zu erfassen und Anweisungen präzise zu befolgen, kann bei kostenlosen Modellen (wie GPT-3.5) etwas geringer ausfallen. Wir empfehlen nach Möglichkeit die Nutzung der neuesten Modelle.
---
## 🧬 Anatomie des Prompts (Why it works?)
1. **Rollenvergabe (Role):** Durch die Persona eines PMs mit 10 Jahren Erfahrung erzwingen wir einen Tonfall, der "Arbeitsanweisungen klärt", anstatt den Text nur zu kürzen.
2. **Strukturierung der Aufgabe (Task):** Indem wir das Ausgabeformat in Agenda, Entscheidungen, ausstehende Punkte und Action Items unterteilen, verhindern wir, dass die KI in einem falschen Format antwortet.
3. **Einschränkungen (Constraints):** Die Verwendung von Markdown-Tabellen (Table), die die Lesbarkeit auf Mobilgeräten beeinträchtigen, wird grundsätzlich blockiert und stattdessen das Emoji-Listenformat erzwungen.
---
## 📊 Beweis: Vorher & Nachher (Before & After)
### ❌ Vorher (Eingabe)
```text
Teamleiter Kim: Ah ja, können Sie mich hören? Wir haben uns heute wegen der Marketingkampagne für dieses Quartal versammelt. Herr Park, wie sieht es mit den vorbereiteten Plänen A und B aus?
Herr Park: Ja, bei Plan A sieht es so aus, als ob das Budget etwas überschritten wird, also sollten wir ihn wohl zurückstellen und mit Plan B weitermachen.
Mitarbeiter Choi: Entschuldigen Sie, wenn wir mit Plan B fortfahren, werde ich bis diesen Freitag eine Liste für die Influencer-Rekrutierung erstellen.
Teamleiter Kim: Okay, dann legen wir uns auf Plan B fest. Herr Park, bitte überarbeiten Sie den Budgetplan bis nächsten Dienstag und erstatten Sie Bericht. Und das Design der Landingpage... Ah, das ist noch nicht mit dem Design-Team abgestimmt, oder?
Herr Park: Ja, das steht noch aus.
```
### ✅ Nachher (Ergebnis)
```text
📌 Hauptthema
- Diskussion über den Entwurf der Marketingkampagne für Q3
🎯 Wichtige Entscheidungen
- Plan A wird wegen Budgetüberschreitung zurückgestellt, Plan B ist final bestätigt
🚨 Ausstehende/Ungelöste Punkte
- Planung des Landingpage-Designs (Abstimmung mit dem Design-Team erforderlich)
✅ Action Items
- 👨‍💼 Herr Park: Überarbeitung und Bericht des Budgetplans basierend auf Plan B (Frist: Nächster Dienstag)
- 🧑‍💻 Mitarbeiter Choi: Erstellung einer Liste für die Influencer-Rekrutierung bzgl. Plan B (Frist: Dieser Freitag)
- ❓ [Klärung erforderlich]: Verantwortlicher für die Abstimmung der Landingpage mit dem Design-Team steht noch nicht fest
```
---
## 🎯 Fazit
Verschwenden Sie keine Energie mehr mit dem Aufräumen komplizierter Meeting-Notizen. 
Überlassen Sie das Ordnen des chaotischen Textes der KI und konzentrieren Sie sich darauf, die beschlossenen Action Items auszuführen. 
Und jetzt machen Sie pünktlich Feierabend! 🍷
