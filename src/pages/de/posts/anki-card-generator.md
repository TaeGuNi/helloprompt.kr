---
layout: /src/layouts/Layout.astro
title: "Statt handgelenksschmerzendem Kopieren: Automatischer Merk-Karten-Generator"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Lernmethode/Selbstentwicklung"
description: "Prompt, der langen Text oder Vorlesungsnotizen in Karteikarten (Q&A)-Paare umwandelt, die in Anki, Quizlet usw. eingefügt werden können."
tags: ["Merken", "Karteikarte", "Anki", "Quizlet"]
---

# 📝 Statt handgelenksschmerzendem Kopieren: Automatischer Merk-Karten-Generator

> **🎯 Empfohlen für:** Jeden
> **⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Wenn ich während der Zeit, Karten zu machen, gelernt hätte, wäre ich an die Seoul National University gegangen."_

Karteikarten-Apps (Anki usw.) sind die besten Merkwerkzeuge, haben aber einen fatalen Nachteil. Die 'Arbeit', Karten (Vorder-/Rückseite) zu machen, ist zu hart. Merken dauert 10 Minuten, aber Karten machen dauert 1 Stunde. Überlassen Sie diese Arbeit jetzt der KI.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Analysieren Sie Lernmaterial (Text) und extrahieren Sie Schlüsselwörter und Konzepte.
2. Konvertieren Sie in 'Frage (Vorderseite) - Antwort (Rückseite)' Form Paare.
3. Stellen Sie CSV-Format bereit, das direkt in Excel oder Anki importiert werden kann.

---

## 🚀 Die Lösung: "Q&A Fabrik"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

> **Rolle:** Du bist ein `[Lernmaterial-Verarbeitungsexperte]`.
> **Anfrage:** Wandle langen Text oder Vorlesungsnotizen in Karteikarten (Q&A)-Paare um, die in Anki, Quizlet usw. eingefügt werden können.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und verwenden Sie ihn.

> **Rolle:** Du bist ein `[Lernmaterial-Verarbeitungsexperte]`.
>
> **Kontext:** Ich möchte das, was ich gelernt habe, in eine Karteikarten-App (Anki/Quizlet) einfügen und auswendig lernen. Schau dir den Text an und mache wichtige Inhalte, die wahrscheinlich in der Prüfung erscheinen, zu Fragen.
>
> **Aufgabe:**
>
> 1. **[Q&A Extraktion]**: Extrahiere wichtige Definitionen, Jahre, kausale Zusammenhänge usw. aus dem Text und mache 'Frage' und 'Antwort'.
> 2. **[Lückentext]**: Mache nicht nur "Was ist A?", mische Lückentext-Typen wie "A wurde B wegen [ ]".
> 3. **[Formatierung]**: Ausgabe im `Frage;Antwort` Format (CSV-Stil) zum einfachen Kopieren. (Trennzeichen ist Semikolon)
>
> **Einschränkungen:**
>
> - Frage sollte kurz und klar sein.
> - Schreibe nur den Kern in die Antwort, setze zusätzliche Erklärungen in Klammern `()`.
> - Mache mindestens 10 Sets.
>
> **Eingabetext:**
> `[Kopiere und füge gelernten Inhalt hier ein]`

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Texteingabe)

"Mitochondrien werden Kraftwerke der Zelle genannt und produzieren ATP. Haben ihre eigene DNA."

### ✅ Nachher (Prompt-Ergebnis)

```text
Was ist der Spitzname von Mitochondrien?;Kraftwerk der Zelle
Wie heißt die Energiequelle, die Mitochondrien produzieren?;ATP (Adenosintriphosphat)
Mitochondrien haben [    ], so dass eine unabhängige Vermehrung möglich ist.;DNA (Mütterlich vererbt)
Wo findet hauptsächlich Zellatmung statt?;Mitochondrien
```

-> Einfach kopieren und 'Datei importieren' in Anki und fertig.

---

## 🎯 Schlussfolgerung

Zeit zum Lernen zu gewinnen, ist die beste Lernmethode. Vergeben Sie das Kartenmachen an Subunternehmer(?).

Machen Sie jetzt pünktlich Feierabend... Blättern Sie im Vokabelbuch statt mit dem Smartphone zu spielen. 🍷
