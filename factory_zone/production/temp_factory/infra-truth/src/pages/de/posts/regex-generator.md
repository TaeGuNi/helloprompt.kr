---
layout: /src/layouts/Layout.astro
title: "Regex-Albtraum, jetzt an KI auslagern"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Entwicklung"
description: "Schreiben Sie kryptische reguläre Ausdrücke nicht selbst. Ein Prompt, der Code generiert, indem Sie einfach das gewünschte Muster erklären."
tags: ["Regex", "Regulärer Ausdruck", "Entwicklerproduktivität"]
---

# 📝 Regex-Albtraum, jetzt an KI auslagern

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Entschlüsseln Sie `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$` nur, um die E-Mail-Gültigkeit zu überprüfen?"_

Reguläre Ausdrücke (Regex) sind für Entwickler unerlässlich, aber sie gehören zu den Bereichen, mit denen wir uns am ungernsten beschäftigen. Sie müssen die Syntax jedes Mal nachschlagen, wenn Sie sie schreiben, und was andere geschrieben haben, sieht aus wie eine Alien-Sprache. Leiden Sie jetzt nicht mehr, sagen Sie der KI einfach das 'Muster'.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Mühen Sie sich nicht damit ab, komplexe Regex-Syntax auswendig zu lernen oder zu suchen.
2. Sagen Sie einfach das gewünschte Muster (Telefonnummer, E-Mail usw.), und die KI schreibt den Regex und interpretiert ihn sogar.
3. Fordern Sie Testcodes zusammen an, um die Genauigkeit des Regex sofort zu überprüfen.

---

## 🚀 Die Lösung: "Regex-Generator"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein `[Senior Entwickler]`.
**Anfrage:** Erstelle einen Prompt, der Code für kryptische reguläre Ausdrücke generiert, indem einfach das Muster erklärt wird.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein `[Senior Entwickler]`.
>
> **Situation:** Ich benötige einen regulären Ausdruck zur Verwendung in `[Python/JavaScript]`.
>
> **Aufgabe:**
>
> 1. Erstelle einen regulären Ausdruck, der die untenstehenden Anforderungen erfüllt.
> 2. Erkläre detailliert, was jedes Symbol bedeutet (Interpretation).
> 3. Zeige Beispielcode (passende Fälle/nicht passende Fälle), um diesen Regex zu testen.
>
> **Anforderungen:**
>
> - Ich möchte das US-Telefonnummernformat finden.
> - Beispiel: 123-456-7890 oder (123) 456-7890 oder 1234567890
> - Vorwahl ist optional.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```text
Schreib mir einen Regex für US-Telefonnummern. Bindestriche, Klammern oder nichts.
```

<br>

### ✅ Nachher (Ergebnis)

```javascript
// JavaScript Beispiel

const regex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

// Test
const phone1 = "123-456-7890"; // Match O
const phone2 = "(123) 456-7890"; // Match O
const phone3 = "1234567890"; // Match O

console.log(regex.test(phone1)); // true
```

### 🔍 Erklärung

- `^`: Anfang der Zeichenkette
- `(\(\d{3}\)|\d{3})`: 3 Ziffern in Klammern ODER nur 3 Ziffern
- `[- ]?`: Optionaler Bindestrich oder Leerzeichen
- `\d{3}`: 3 Ziffern
- `\d{4}`: 4 Ziffern
- `$`: Ende der Zeichenkette

---

## 🎯 Schlussfolgerung

Öffnen Sie nicht das Regex-Grammatikbuch. Sie müssen nur klar wissen, welches 'Muster' Sie wollen.
