---
layout: /src/layouts/Layout.astro
title: 'Wenn die KI Sie nicht versteht? Setzen Sie "Zäune" (Delimiters)'
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "Ist die KI verwirrt, wenn sie lange Texte zusammenfasst oder Code korrigiert? Erhöhen Sie die Genauigkeit mit der Delimiter-Technik, die Abschnitte durch Sonderzeichen unterteilt."
tags: ["Trennzeichen", "Lesbarkeit", "XML-Tags"]
---

# 🚧 Wenn die KI Sie nicht versteht? Setzen Sie "Zäune"

> **🎯 Empfohlene Zielgruppe:** Alle
> **⏱️ Zeitaufwand:** 5 Minuten
> **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

Wenn Sie der KI einen langen Text geben und sagen "Fass das zusammen", ist die KI manchmal verwirrt, wo der zusammenzufassende Text beginnt und wo der Befehl endet.

So wie Menschen beim Lesen **Absätze** machen, müssen wir auch für die KI klare **Grenzlinien (Delimiters)** ziehen: **"Von hier bis hier ist es."**

---

## ⚡️ Zusammenfassung in 3 Zeilen (TL;DR)

1. KI kann bei langen Texten Schwierigkeiten haben, Befehle von Daten zu unterscheiden.
2. Setzen Sie klare Grenzen mit XML-Tags (`< >`) oder Sonderzeichen (`"""`).
3. Die Gewohnheit, Abschnitte zu unterteilen, reduziert Erkennungsfehler der KI und erhöht die Arbeitsgenauigkeit.

---

## 🚀 Lösung: "XML-Tags oder Sonderzeichen nutzen"

### 🥉 Basic Version (Basis-Version)

Verwenden Sie dies, wenn Sie schnell nur das Ergebnis benötigen.

> **Rolle:** Du bist ein fähiger **Redakteur**.
> **Anfrage:** Ist die KI verwirrt, wenn sie lange Texte zusammenfasst oder Code korrigiert? Erhöhen Sie die Genauigkeit mit der Delimiter-Technik, die Abschnitte durch Sonderzeichen unterteilt.

<br>

### 🥇 Pro Version (Experten-Version)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Die beste Methode ist die Verwendung von `< >`-Tags oder `"""` (drei Anführungszeichen).

> **Rolle:** Du bist ein fähiger **Redakteur**.
>
> **Anfrage:** Fasse den Inhalt, der unten in `<text>`-Tags eingeschlossen ist, in 3 Sätzen zusammen.
>
> **Eingabedaten:**
> <text>
> `[Hier extrem langer Nachrichtenartikel oder Berichtsinhalt]`
> </text>

---

## 🧬 Prompt-Analyse (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Before (Eingabe ohne Trennung)

KI: Könnte den Befehl "Fass zusammen" in die Zusammenfassung aufnehmen oder nur den Anfang des Textes lesen und grob beenden.

```text
(Befehl und Daten sind vermischt und verwirrend)
```

<br>

### ✅ After (In Tags einschließen)

Die KI erkennt nur den Inhalt innerhalb von `<text>` als **"zu verarbeitende Daten"** und unterscheidet den Rest klar als **"Befehl"**.

```text
(Extrahiert genau den Inhalt innerhalb von <text> und fasst ihn perfekt zusammen)
```

---

## 🎯 Fazit

Experten unterteilen beim Erstellen von Prompts gewohnheitsmäßig **Abschnitte (Sections)**.

- `<context>` (Situation)
- `<instruction>` (Anweisung)
- `<data>` (Daten)

Diese kleine Gewohnheit senkt die Fehlerrate des Prompts auf 0%. 🧱
