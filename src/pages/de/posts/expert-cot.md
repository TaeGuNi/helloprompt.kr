---
layout: /src/layouts/Layout.astro
title: 'Wenn KI dumme Antworten gibt: "Chain of Thought (CoT)" anwenden'
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "Gibt die KI bei einfachen Fragen gute Antworten, redet aber bei komplexen logischen Problemen Unsinn? Die wahre Anwendung der CoT-Technik, die von den Top 1% der Prompt-Ingenieure verwendet wird."
tags: ["CoT", "Logisches Denken", "Problemlösung"]
---

# 🧠 Wenn KI immer wieder dumme Antworten gibt

> **🎯 Empfohlene Zielgruppe:** Alle
> **⏱️ Zeitaufwand:** 5 Minuten
> **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Bei einfachen Dingen ist sie gut, aber sobald es mehr als 3 Bedingungen sind, redet sie Unsinn."_

KI (LLM) verlässt sich grundsätzlich auf **"intuitive Wahrscheinlichkeiten"**. Wenn sie also auf komplexe logische Probleme stößt, **"denkt"** sie nicht wie ein Mensch, sondern **"rät"** die plausibelste Antwort. (Das nennt man 'Halluzination'.)

Hier benötigen wir eine Technik, die **"Zeit zum Nachdenken"** erzwingt: **Chain of Thought (CoT, Gedankenkette)**.

---

## ⚡️ Zusammenfassung in 3 Zeilen (TL;DR)

1. KI neigt dazu, bei komplexen Problemen falsche Antworten zu geben, indem sie sich auf Intuition verlässt.
2. Die Technik "Chain of Thought (CoT)" gibt der KI Zeit zum Nachdenken und fördert logisches Schlussfolgern.
3. Durch die 3 Schritte Denken -> Überprüfung -> Schlussfolgerung kann die Genauigkeit drastisch erhöht werden.

---

## 🚀 Lösung: "Logische 3er-Kombi"

### 🥉 Basic Version (Basis-Version)

Verwenden Sie dies, wenn Sie schnell nur das Ergebnis benötigen.

> **Rolle:** Du bist ein **Senior Projektmanager (PM)**, der logische Fehler findet.
> **Anfrage:** Gibt die KI bei einfachen Fragen gute Antworten, redet aber bei komplexen logischen Problemen Unsinn? Erkläre die wahre Anwendung der CoT-Technik, die von den Top 1% der Prompt-Ingenieure verwendet wird.

<br>

### 🥇 Pro Version (Experten-Version)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Es reicht nicht, einfach nur "Denke schrittweise" zu sagen.
Für einen sicheren Effekt bestellen Sie die 3 Schritte: **Denken (Think) -> Überprüfen (Review) -> Antworten (Answer)**.

> **Rolle:** Du bist ein **Senior Projektmanager (PM)**, der logische Fehler findet.
>
> **Situation:** Der Projektzeitplan ist durcheinander geraten. Finde eine Lösung basierend auf den untenstehenden Bedingungen.
>
> **Anfrage:**
>
> 1. **[Denken]** Antworte nicht sofort, sondern liste die Zeitpläne der Teams in chronologischer Reihenfolge auf. (**Denke schrittweise**)
> 2. **[Überprüfung]** Überprüfe selbst noch einmal, ob es Widersprüche in deiner Logik gibt.
> 3. **[Schlussfolgerung]** Fasse abschließend das Enddatum des Projekts und die Ursache der Verzögerung in einem Satz zusammen.
>
> **[Bedingungen]**
>
> - Das Designteam (dauert 3 Tage) muss fertig sein, damit das Entwicklungsteam (dauert 5 Tage) beginnen kann.
> - Aber der Entwicklungsleiter ist ab heute für 2 Tage im Urlaub.
> - Das QA-Team (dauert 2 Tage) beginnt nach Abschluss der Entwicklung, arbeitet aber nicht am Wochenende.
> - Heute ist Montag.

---

## 🧬 Prompt-Analyse (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Before (Allgemeine Frage)

KI: (Einfache Addition: 3+5+2 = 10 Tage) "Das Projekt dauert insgesamt 10 Tage und endet nächsten Mittwoch."
-> **Falsche Antwort.** (Urlaub und Wochenenden wurden nicht berechnet, nur intuitiv addiert)

<br>

### ✅ After (CoT Anwendungsergebnis)

Die KI denkt wie ein Mensch und geht den Kalender durch.

```text
[1. Schrittweises Denken]
- Heute (Mo): Designteam Start (Tag 1)
- Mittwoch: Designteam Ende (3 Tage Dauer)
- Donnerstag: Entwicklungsteam Start möglich... aber Entwicklungsleiter Urlaub (Heute~Di) hat keinen Einfluss.
- Donnerstag~Nächste Woche Mittwoch: Entwicklungsteam 5 Tage Dauer (Do, Fr, Mo, Di, Mi / Wochenende ausgenommen)
- Nächste Woche Donnerstag: QA-Team Start (2 Tage Dauer)
- Nächste Woche Freitag: QA-Team Ende

[2. Überprüfung]
- Entwicklungsleiter ist bis Dienstag im Urlaub, aber da Entwicklungsstart erst Donnerstag ist, kein Einfluss.
- Wochenende (Sa, So) Arbeit ausgeschlossen, Berechnung korrekt.

[3. Schlussfolgerung]
Das endgültige Enddatum ist 'nächsten Freitag', und da ein Wochenende dazwischen liegt, beträgt die Gesamtdauer 12 Tage (10 Arbeitstage).
```

---

## 🎯 Fazit

Wenn komplexe Excel-Formeln durcheinander sind oder verflochtene Zeitpläne organisiert werden müssen und die KI dumm erscheint?
Es liegt nicht an der Intelligenz der KI. **Es ist Ihre Schuld, dass Sie ihr keine Zeit zum Nachdenken gegeben haben.**

Fügen Sie diesen einen Satz jetzt sofort ans Ende Ihres Prompts an.
**"Denke schrittweise und überprüfe deine Logik."**
