---
layout: /src/layouts/Layout.astro
title: "Stoppt Spaghetti-Code! Architektur-Empfehlung perfekt für mein Projekt"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Ein Prompt, der optimale Softwarearchitektur wie MVC, Clean Architecture, MSA entwirft, wenn Sie Projektumfang und Anforderungen eingeben."
tags: ["Architektur", "Design", "Designmuster", "Systemdesign", "MSA"]
---

# 📝 Stoppt Spaghetti-Code! Architektur-Empfehlung perfekt für mein Projekt

> **🎯 Empfohlen für:** Jeden
> **⏱️ Zeitaufwand:** 5 Minuten
> **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Es war anfangs einfach... Ein paar Funktionen hinzugefügt und der Code ist durcheinander, Angst vor Änderungen."_

Der Anfang jedes Großprojekts war eine einzelne kleine Datei.
Aber wenn man ohne Struktur beginnt, fällt man schnell in den Sumpf der 'technischen Schulden'.
Geben Sie eine Entwurfszeichnung (Architektur) in Auftrag, die perfekt zur Natur Ihres Projekts passt, an die KI. Es wird ein stabiles Skelett werden.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Empfehle Architekturmuster, die für Projektanforderungen geeignet sind (MVC, MVVM, Clean Architecture usw.)
2. Definiere Verzeichnisstruktur und Dateirollen
3. Analysiere Vor- und Nachteile der Übernahme

---

## 🚀 Die Lösung: "Software-Architekt"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

> **Rolle:** Du bist ein Chef-Softwarearchitekt, der für großangelegtes Systemdesign verantwortlich ist.
> **Anfrage:** Erstelle einen Prompt, der optimale Softwarearchitektur wie MVC, Clean Architecture, MSA entwirft, wenn Sie Projektumfang und Anforderungen eingeben.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein Chef-Softwarearchitekt, der für großangelegtes Systemdesign verantwortlich ist.
>
> **Kontext:** Ich versuche, ein neues Projekt zu starten, und mache mir Sorgen, welche Architektur ich für einfache Wartung und gute Skalierbarkeit anwenden soll.
>
> **Aufgabe:**
>
> 1. Empfiehl 2 **am besten geeignete Architekturmuster** unter Berücksichtigung der Eigenschaften meines Projekts.
> 2. Zeichne die **Verzeichnisstruktur** in Baumform basierend auf der Architektur mit der 1. Priorität.
> 3. Erkläre, welche Rolle jeder Ordner und jede Ebene spielt.
>
> **Projektbeschreibung:**
> `[Schreiben Sie Projektinhalte. z.B.: Einkaufszentrums-App mit vielen Benutzern, Verwendung von React Native und Node.js, Zahlungs- und Lieferverfolgungsfunktionen wichtig]`
>
> **Einschränkungen:**
>
> - Vermeide Over-Engineering und schlage entsprechend dem realistischen Umfang vor.
> - Liefere logische Gründe, warum diese Architektur gewählt wurde.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabeprojekt)

"Mache eine einfache To-Do-App. Entwickle alleine und nicht viele Funktionen."

### ✅ Nachher (Ergebnis)

**Empfohlene Architektur:** **MVVM (Model-View-ViewModel)** oder **Feature-basierte Struktur**

**Ordnerstruktur (Feature-basiert):**

```text
src/
├── features/           # Module nach Funktion
│   ├── todos/
│   │   ├── components/ # Todo-bezogene UI
│   │   ├── hooks/      # Todo-bezogene Logik
│   │   └── api/        # Todo-API-Aufruf
│   └── auth/           # Authentifizierungsbezogen
├── shared/             # Gemeinsame Module
│   ├── components/     # Gemeinsame Buttons, Eingaben
│   └── utils/          # Hilfsfunktionen
├── App.js
└── index.js
```

_Grund: Da das Projekt klein ist, ist die Gruppierung nach Feature intuitiv und die Entwicklungsgeschwindigkeit schneller als komplexe Schichtentrennung._

---

## 🎯 Schlussfolgerung

Niemand baut ein Haus, indem er Ziegel ohne Bauplan stapelt.
Software ist nicht anders. Bauen Sie ein stabiles Haus, das auch nach 10 Jahren nicht einstürzt, mit dem KI-Architekten! 🍷
