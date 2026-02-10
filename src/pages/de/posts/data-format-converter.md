---
layout: /src/layouts/Layout.astro
title: "Excel, JSON, CSV... Entkomme der Datenformat-Konvertierungs-Plackerei"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "JSON zu CSV, XML zu JSON. Überlassen Sie lästige Datenformat-Konvertierungsaufgaben der KI. Komplexe verschachtelte Strukturen sind kein Problem."
tags: ["Datenkonvertierung", "JSON", "CSV", "Excel", "Produktivität"]
---

# 📝 Excel, JSON, CSV... Entkomme der Datenformat-Konvertierungs-Plackerei

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Bitte konvertieren Sie diesen Excel-Dateiinhalt in JSON und senden Sie ihn an die API."_

Das Konvertieren von Datenformaten ist beim Entwickeln alltäglich.
Die Verwendung von Online-Konvertierungstools fühlt sich unangenehm an, wenn Unternehmensdaten hochgeladen werden, und das Schreiben von Skripten erfordert mehr Aufwand als es wert ist.
Kopieren Sie einfach Daten und fügen Sie sie ein. KI versteht perfekt und konvertiert sie.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Freie Formatkonvertierung wie JSON ↔ CSV ↔ XML
2. Entfernen unnötiger Felder und Ändern der Datenstruktur (Mapping)
3. Sehr nützliche Konvertierung wie das Generieren von SQL-Insert-Anweisungen

---

## 🚀 Die Lösung: "Universeller Datenkonverter"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein Experte für Datentechnik und ETL (Extract, Transform, Load).
**Anfrage:** JSON zu CSV, XML zu JSON. Erstelle einen Prompt, der lästige Datenformat-Konvertierungsaufgaben der KI überlässt. Komplexe verschachtelte Strukturen sind kein Problem.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein Experte für Datentechnik und ETL (Extract, Transform, Load).
>
> **Kontext:** Ich muss Daten, die ich habe, in ein Format konvertieren, das in einem anderen System verwendet werden kann.
>
> **Aufgabe:**
>
> 1. Konvertiere die **[Quellformat]**-Daten unten in **[Zielformat]**.
> 2. Wende `[Feldnamenänderungsregel]` während der Konvertierung an.
> 3. Gib nur das Ergebnis sauber aus, damit ich überprüfen kann, ob die Daten korrekt sind.
>
> **Quelldaten:**
>
> ```
> [Fügen Sie Originaldaten hier ein]
> ```
>
> **Konvertierungsregeln:**
>
> - Quellformat: `[z.B.: CSV]`
> - Zielformat: `[z.B.: JSON-Array]`
> - Feldänderung: `[z.B.: Ändere 'Name' -> 'name', 'Alter' -> 'age' und schließe 'Adresse' aus]`

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe-CSV)

```csv
Name,Alter,Beruf
Hong Gildong,30,Entwickler
Kim Cheolsoo,25,Designer
```

### ✅ Nachher (Ergebnis - JSON + Feldnamenänderung)

**Anfrage:** Konvertiere CSV in JSON, aber ändere zu englischen Feldnamen.

```json
[
  {
    "name": "Hong Gildong",
    "age": 30,
    "job": "Entwickler"
  },
  {
    "name": "Kim Cheolsoo",
    "age": 25,
    "job": "Designer"
  }
]
```

### ✅ Nachher (Ergebnis - SQL-Insert-Anweisung)

**Anfrage:** Ändere zu INSERT-Anweisung, die in MySQL `users`-Tabelle verwendbar ist.

```sql
INSERT INTO users (name, age, job) VALUES
('Hong Gildong', 30, 'Entwickler'),
('Kim Cheolsoo', 25, 'Designer');
```

---

## 🎯 Schlussfolgerung

Verschwenden Sie keine Zeit damit, mit Excel-Funktionen zu kämpfen oder Regex für die Datenkonvertierung zu schreiben.
In dem Moment, in dem Sie der KI sagen "Ändere das so", rückt der Feierabend näher. 🍷
