---
layout: /src/layouts/Layout.astro
title: "Abschweifende Sitzungsprotokolle ordentlich zusammenfassen"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Arbeitsautomatisierung"
description: "Die Audioaufnahme wurde transkribiert, ist aber viel zu lang? Nutzen Sie diesen Prompt, um chaotische Meeting-Protokolle präzise auf den Kern zusammenzufassen."
tags: ["Arbeitseffizienz", "Excel", "Bericht", "ChatGPT"]
---

# 📝 Abschweifende Sitzungsprotokolle ordentlich zusammenfassen

- **🎯 Empfohlen für:** Projektmanager, Teamleiter, Assistenten, Scrum Master
- **⏱️ Zeitaufwand:** 60 Minuten → 3 Minuten
- **🤖 Empfohlenes Modell:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

> _"Ein einstündiges Meeting ergibt 10 Seiten Transkript. Wer soll das alles lesen und die To-Dos herausfiltern?"_

Meeting-Transkripte oder KI-gestützte Sprache-zu-Text-Aufzeichnungen enthalten oft viel Smalltalk, unstrukturierte Gedanken und redundante Aussagen. Wenn Sie später darauf zurückgreifen müssen, ist es mühsam, die eigentlichen Kernpunkte herauszufiltern. Mit dem richtigen KI-Prompt verwandeln Sie seitenlange, chaotische Dialoge in Sekunden in strukturierte, professionelle Protokolle.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Struktur statt Chaos:** Verwandelt rohe, unstrukturierte Meeting-Transkripte sofort in übersichtliche Management-Summaries.
2. **Klar definierte Action Items:** Filtert automatisch Aufgaben, Verantwortlichkeiten und Fristen aus dem Dialog heraus.
3. **Massive Zeitersparnis:** Sparen Sie sich das stundenlange manuelle Zusammenfassen und Formatieren von Besprechungsnotizen.

---

## 🚀 Lösung: "Der perfekte Protokoll-Assistent"

### 🥉 Basic Version (Für den schnellen Überblick)

Nutzen Sie diese Variante, wenn Sie unter Zeitdruck stehen und nur die wichtigsten Ergebnisse benötigen.

> **Rolle:** Du bist ein erfahrener Projektmanager.
> **Aufgabe:** Fasse das folgende Meeting-Transkript prägnant zusammen. Extrahiere die wichtigsten Kernpunkte und Entscheidungen in Stichpunkten.
> **Eingabe:** `[Hier das Transkript einfügen]`

<br>

### 🥇 Pro Version (Für professionelle Protokolle)

Verwenden Sie diesen Prompt für formelle Meetings, bei denen eine exakte Dokumentation von Aufgaben und Verantwortlichkeiten zwingend erforderlich ist.

> **Rolle (Role):** Du bist ein hochprofessioneller Executive Assistant und zertifizierter Projektmanager. Deine Stärke liegt darin, komplexe und abschweifende Diskussionen strukturiert und geschäftsmäßig auf den Punkt zu bringen.
>
> **Kontext (Context):**
>
> - Hintergrund: Das folgende Transkript stammt aus einem unstrukturierten Team-Meeting. Der Dialog enthält viel Umgangssprache, Füllwörter und Smalltalk.
> - Ziel: Erstellung eines formellen, sofort versandfertigen Besprechungsprotokolls für das Management.
>
> **Aufgabe (Task):**
>
> 1. Analysiere den Text und gliedere ihn in folgende Abschnitte: **Tagesordnungspunkte**, **Kerndiskussionen**, **Getroffene Entscheidungen** und **Action Items (Nächste Schritte)**.
> 2. Wandle umgangssprachliche Formulierungen in eine professionelle, klare Geschäftssprache um.
> 3. Extrahiere bei den "Action Items" zwingend, **wer** für **was** bis **wann** verantwortlich ist.
>
> **Eingabedaten:**
>
> - Transkript: `[Füge hier den gesamten Meeting-Text ein]`
>
> **Einschränkungen (Constraints):**
>
> - Formatiere die Ausgabe ausschließlich als saubere Markdown-Liste.
> - Schließe sämtlichen Smalltalk, irrelevante Anekdoten und emotionale Ausbrüche konsequent aus.
> - Beschränke die Zusammenfassung auf maximal eine DIN-A4-Seite.
>
> **Warnung (Warning):**
>
> - Erfinde keine Aufgaben, Fristen oder Namen. Wenn keine Frist im Text genannt wurde, notiere zwingend "Nicht definiert". (Halluzinations-Vermeidung)

---

## 💡 Autorenkommentar (Insight)

Dieser Prompt ist ein absoluter Lebensretter für alle, die regelmäßig an langen Abstimmungsrunden teilnehmen. Besonders effektiv ist er, wenn Sie Tools wie Microsoft Teams oder Zoom nutzen, die automatisch Transkripte erstellen. Anstatt das Transkript manuell zu überfliegen, übernimmt die KI das "Goldschürfen" für Sie.

**Pro-Tipp:** Wenn Ihr Transkript extrem lang ist (über 1 Stunde), empfehle ich Modelle mit großem Kontextfenster wie **Claude 3.5 Sonnet** oder **Gemini 1.5 Pro**. Sie neigen weitaus weniger dazu, Details in der Mitte des Textes zu übersehen. Achten Sie darauf, das Transkript vorab kurz nach vertraulichen Passwörtern oder sensiblen Personaldaten zu durchsuchen und diese zu anonymisieren!

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Kann die KI auch verschiedene Sprecher im Text unterscheiden?**
  - A: Ja, solange das Transkript Sprechermarkierungen (z.B. "Max:", "Anna:") enthält, ordnet die KI die Aussagen und Aufgaben automatisch der richtigen Person zu.

- **Q: Mein Transkript enthält viele branchenspezifische Fachbegriffe und Abkürzungen. Versteht die KI das?**
  - A: In den meisten Fällen ja. Wenn Ihr Unternehmen jedoch sehr spezielle interne Akronyme nutzt, fügen Sie dem Prompt unter _Kontext_ einfach einen kurzen Satz hinzu: _"Hinweis: 'CRM' steht für unser internes Kundensystem, 'Q3' meint das dritte Quartal."_

- **Q: Was tun, wenn das Transkript die Zeichenbeschränkung sprengt?**
  - A: Nutzen Sie in diesem Fall Claude (das ein riesiges Kontextfenster hat) oder teilen Sie das Transkript in zwei Hälften auf. Bitten Sie die KI, zuerst Teil 1 und dann Teil 2 zusammenzufassen, um abschließend ein Gesamtdokument zu erstellen.

---

## 🧬 Prompt-Anatomie (Warum funktioniert das so gut?)

1. **Strenge Rollenzuweisung:** Indem wir die KI als "Executive Assistant" definieren, ändert sich ihr Sprachstil sofort von gesprächig zu professionell-distanziert.
2. **Klare Strukturierung (Task):** Die explizite Vorgabe der Abschnitte (Entscheidungen, Action Items) zwingt das Modell, den unstrukturierten Text in ein brauchbares Format zu pressen.
3. **Sicherheitsnetz (Warning):** Der Befehl "Erfinde keine Aufgaben" verhindert gefährliche Halluzinationen, die bei KI-Zusammenfassungen sonst oft auftreten.

---

## 📊 Beweis: Before & After

### ❌ Before (Eingabe)

```text
[00:15] Manager Kim: Ähm, ja, also ich glaube nicht, dass das aktuelle Design richtig ist... Es fehlt irgendwie der Pepp, wisst ihr?
[00:42] Teamleiter Park: Hmm, wie wäre es dann damit, wenn wir den Button blau machen? Und wir müssen noch das Budget für Q3 klären. Anna, machst du das?
[01:05] Anna: Puh, ja klar, kann ich machen. Bis wann brauchst du das? Freitag?
[01:12] Teamleiter Park: Ja, Freitagmittag wäre super. Ach übrigens, der Kaffee in der Küche ist schon wieder leer.
```

### ✅ After (Ergebnis)

```markdown
### 📝 Besprechungsprotokoll

**📌 Kerndiskussionen:**

- Das aktuelle Design wird als unzureichend ("fehlender Pepp") bewertet.
- Eine Anpassung der primären Button-Farbe auf Blau wurde vorgeschlagen.
- Budgetplanung für das dritte Quartal (Q3) steht aus.

**✅ Getroffene Entscheidungen:**

- Das Design wird überarbeitet, um ansprechender zu wirken.

**🚀 Action Items (Nächste Schritte):**

- **Aufgabe:** Klärung des Budgets für Q3
  - **Verantwortlich:** Anna
  - **Frist:** Freitagmittag
```

---

## 🎯 Fazit

Vergeuden Sie Ihre wertvolle Zeit nicht mehr mit dem Entschlüsseln von chaotischen Besprechungsnotizen. Lassen Sie die KI die Fleißarbeit erledigen, während Sie sich auf die tatsächliche Umsetzung der Aufgaben konzentrieren.

Machen Sie jetzt pünktlich Feierabend! 🍷
