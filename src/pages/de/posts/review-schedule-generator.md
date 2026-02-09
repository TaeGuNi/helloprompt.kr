---
layout: /src/layouts/Layout.astro
title: "Rückwärtsfahren der Vergessenskurve: Überprüfungsplan-Generator"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Lernmethode/Selbstentwicklung"
description: "Prompt, der den optimalen Überprüfungszeitpunkt angibt, damit Sie nie vergessen, was Sie gelernt haben, basierend auf Ebbinghaus' Vergessenskurventheorie."
tags: ["Lernplan", "Vergessenskurve", "Überprüfung", "Planung"]
---

# 📝 Rückwärtsfahren der Vergessenskurve: Überprüfungsplan-Generator

> **🎯 Empfohlen für:** Jeden
> **⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"100 englische Wörter heute auswendig gelernt, 50 morgen, 10 in einer Woche übrig."_

Das menschliche Gehirn ist darauf ausgelegt zu vergessen. Der einzige Weg, dies zu stoppen, ist 'Verteilte Wiederholung'. Schauen Sie es sich wieder an, wenn Sie kurz davor sind, es zu vergessen. Das Problem ist, dass die Berechnung dieses Zeitpunkts nervig ist. Dieser Prompt wird Ihr persönlicher Assistent und plant und sagt "Meister, es ist jetzt Zeit zu überprüfen".

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Berechnen Sie den optimalen Überprüfungszyklus (1 Tag später, 3 Tage später, 7 Tage später...) basierend auf dem Lernstartdatum.
2. Ausgabe im Format, das gut in Google Kalender usw. eingefügt werden kann (CSV/Liste).
3. Flexible Plananpassung unter Berücksichtigung von Wochenenden oder Feiertagen.

---

## 🚀 Die Lösung: "Ebbinghaus-Planer"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

> **Rolle:** Du bist ein `[Lernmanager und Kognitionswissenschaftsexperte]`.
> **Anfrage:** Erstelle einen Prompt, der den optimalen Überprüfungszeitpunkt angibt, damit Sie nie vergessen, was Sie gelernt haben, basierend auf Ebbinghaus' Vergessenskurventheorie.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und verwenden Sie ihn.

> **Rolle:** Du bist ein `[Lernmanager und Kognitionswissenschaftsexperte]`.
>
> **Kontext:** Ich habe heute angefangen, `[Fachname/Einheitsname]` zu lernen. Ich brauche einen Überprüfungsplan gemäß Ebbinghaus' Vergessenskurventheorie, um dies ins Langzeitgedächtnis zu überführen.
>
> **Aufgabe:**
>
> 1. **[Überprüfungszyklus]**: Berechne 1. (1 Tag später), 2. (3 Tage später), 3. (7 Tage später), 4. (15 Tage später), 5. (30 Tage später) Überprüfungsdaten basierend auf heute.
> 2. **[Plantabelle]**: Organisiere Datum, Wochentag und zu überprüfenden Inhalt in einer Tabelle.
> 3. **[Lerntipp]**: Gib einen kurzen Tipp, wie man für jede Runde überprüft. (z.B.: 1. leicht überfliegen, 3. Blankopapiertest usw.)
>
> **Einschränkungen:**
>
> - Das heutige Datum ist `2026-02-04`.
> - Kann an Wochenenden (Sa, So) lernen (oder kann zu "Möchte an Wochenenden ruhen" geändert werden).
>
> **Gelernter Inhalt:** `[z.B.: Informationsverarbeitungsingenieur Fach 1 / TOEIC Wörter Tag 1-5]`

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Pauken)

- 4. Feb: 10 Stunden lernen (Stolz)
- 28. Feb: Buch am Tag vor der Prüfung geöffnet und nichts erinnern (Verzweiflung)

### ✅ Nachher (Prompt-Plan)

**[Überprüfungsplantabelle (Startdatum: 4.2.)]**
| Runde | Datum | Tag | Überprüfungsleitfaden |
| :--- | :--- | :--- | :--- |
| **1.** | 5.2. | Do | **10 Min überfliegen**: Augenmerk hauptsächlich auf Schlüsselwörter |
| **2.** | 7.2. | Sa | **Quiz lösen**: Nur falsche Probleme erneut prüfen |
| **3.** | 11.2. | Mi | **Blankopapier-Überprüfung**: Buch schließen und Mindmap zeichnen |
| **4.** | 19.2. | Do | **Vertieftes Lernen**: Denken, indem man mit anderen Einheiten verbindet |
| **5.** | 6.3. | Fr | **Endprüfung**: Nur Dinge prüfen, die noch nicht erinnert werden |

-> Auch wenn die Gesamtstudienzeit ähnlich ist, steigt die Gedächtnisretentionsrate um 400%.

---

## 🎯 Schlussfolgerung

Lernen wird nicht mit Hinternkraft gemacht, sondern mit Zeitkampf. Berühren Sie es, wenn Sie kurz davor sind, es zu vergessen. So hackt man das Gehirn.

Machen Sie jetzt pünktlich Feierabend... und ruhen Sie sich heute gut aus. Denn Sie müssen morgen überprüfen. 🍷
