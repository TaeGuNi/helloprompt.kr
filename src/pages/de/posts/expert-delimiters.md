---
layout: /src/layouts/Layout.astro
title: "KI versteht Sie nicht? Verwenden Sie 'Trennzeichen' (Delimiters)"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "Ist die KI verwirrt, wenn sie lange Texte zusammenfasst oder Code korrigiert? Nutzen Sie die Trennzeichen-Technik, um Abschnitte zu trennen und Ihre Genauigkeit zu verdoppeln."
tags: ["Trennzeichen", "Lesbarkeit", "XML-Tags"]
---

# 🚧 KI versteht Sie nicht? Verwenden Sie "Trennzeichen"

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

Wenn Sie einer KI einen langen Text vorwerfen und sagen "Fasse das zusammen", ist die KI manchmal verwirrt darüber, wo der zusammenzufassende Text endet und wo die Anweisungen beginnen.

So wie Menschen Text beim Lesen in **Absätze** unterteilen, müssen Sie eine klare **Grenze (Trennzeichen/Delimiter)** für die KI ziehen und sagen: **"Von hier bis hier ist der Inhalt."**

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. KI kann Schwierigkeiten haben, Befehle und Daten in langen Texten zu unterscheiden.
2. Verwenden Sie XML-Tags (`< >`) oder spezielle Symbole (`"""`), um klare Grenzen zu setzen.
3. Die Gewohnheit, Abschnitte zu unterteilen, reduziert Erkennungsfehler der KI und erhöht die Aufgabengenauigkeit.

---

## 🚀 Die Lösung: "Verwendung von XML-Tags oder speziellen Symbolen"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein kompetenter **Redakteur**.
**Anfrage:** Ist die KI verwirrt, wenn sie lange Texte zusammenfasst oder Code korrigiert? Erkläre, wie man die Trennzeichen-Technik nutzt, um Abschnitte zu trennen und die Genauigkeit zu verdoppeln.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Der beste Weg ist die Verwendung von `< >`-Tags oder `"""` (drei Anführungszeichen).

> **Rolle:** Du bist ein kompetenter **Redakteur**.
>
> **Anfrage:** Fasse den Inhalt, der in die `<text>`-Tags unten eingeschlossen ist, in 3 Sätzen zusammen.
>
> **Eingabedaten:**
> <text>
> `[Fügen Sie hier einen unglaublich langen Nachrichtenartikel oder Bericht ein]`
> </text>

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe ohne Trennzeichen)

KI: Sie könnte die Anweisung "Fasse das zusammen" als Teil der Zusammenfassung selbst aufnehmen oder einfach den Anfang des Textes lesen und hastig enden.

```text
(Verwirrende Mischung aus Anweisungen und Daten)
```

<br>

### ✅ Nachher (Einschließen mit Tags)

Die KI erkennt nur den Inhalt innerhalb von `<text>` als **"zu verarbeitende Daten"** und unterscheidet den Rest klar als **"Befehle".**

```text
(Extrahiert präzise nur den Inhalt innerhalb von <text> und fasst ihn perfekt zusammen)
```

---

## 🎯 Schlussfolgerung

Experten unterteilen beim Erstellen von Prompts gewohnheitsmäßig **Abschnitte (Sections)**.

- `<context>` (Situation)
- `<instruction>` (Anweisungen)
- `<data>` (Daten)

Diese eine kleine Angewohnheit macht die Fehlerrate Ihrer Prompts zu 0%. 🧱
