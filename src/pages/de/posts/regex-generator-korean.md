---
layout: /src/layouts/Layout.astro
title: "Alien-artiges Regex, Bestellen in natürlicher Sprache"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Kämpfen Sie nicht mit komplexen regulären Ausdrücken wie beim Entschlüsseln von Codes. Sagen Sie einfach das gewünschte Muster, und die KI erstellt das Regex."
tags: ["Regex", "Regulärer Ausdruck", "String-Verarbeitung", "Validierung"]
---

# 📝 Alien-artiges Regex, Bestellen in natürlicher Sprache

> **🎯 Empfohlen für:** Jeden
> **⏱️ Zeitaufwand:** 5 Minuten
> **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Was war nochmal das E-Mail-Validierungs-Regex... Ah, und wie setze ich Bindestriche in Telefonnummern?"_

Regulärer Ausdruck (Regex), jedes Mal neu, wenn man ihn benutzt, und sieht jedes Mal wie eine Alien-Sprache aus, wenn man ihn sieht, oder?
`^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`... selbst zu tippen ist Folter.
Sagen Sie jetzt einfach "Finde E-Mail-Format" in natürlicher Sprache.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Fordern Sie komplexe Musterübereinstimmungen in natürlicher Sprache an
2. Geben Sie eine detaillierte Erklärung für das generierte Regex
3. Verifizieren Sie mit Testfällen

---

## 🚀 Die Lösung: "Regex-Dolmetscher"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

> **Rolle:** Du bist ein Regex-Meister.
> **Anfrage:** Kämpfe nicht mit komplexen regulären Ausdrücken wie beim Entschlüsseln von Codes. Sag einfach das gewünschte Muster, und die KI erstellt das Regex.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein Regex-Meister.
>
> **Kontext:** Ich muss spezifische Muster aus Textdaten extrahieren oder validieren. Aber die Regex-Syntax ist zu schwierig.
>
> **Aufgabe:**
>
> 1. Schreibe einen **Regulären Ausdruck (Regex)**, der perfekt zu dem von mir beschriebenen Muster passt.
> 2. Erkläre, wie das geschriebene Regex funktioniert, indem du es in Teile zerlegst.
> 3. Zeige jeweils 3 Beispiele, die übereinstimmen (Match), und 3 Beispiele, die nicht übereinstimmen (Non-match) mit diesem Regex.
>
> **Muster, das ich finden möchte:**
> `[Beschreiben Sie das gewünschte Muster hier in natürlicher Sprache. z.B.: "Mobiltelefonnummer im Format 010-1234-5678"]`
>
> **Sprache/Umgebung:** `[z.B.: JavaScript / Python / Java]`
>
> **Einschränkungen:**
>
> - Stelle sicher, dass die Sonderzeichen-Escape-Verarbeitung korrekt durchgeführt wird.
> - Erstelle einen Ausdruck, der so prägnant wie möglich, aber genau ist.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

**Muster:** "Passwort muss mindestens 8 Zeichen lang sein, mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl und ein Sonderzeichen enthalten."

### ✅ Nachher (Ergebnis)

**Regex (JavaScript):**

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

**Erklärung:**

- `^`: Anfang der Zeichenkette
- `(?=.*[a-z])`: Enthält mindestens einen Kleinbuchstaben
- `(?=.*[A-Z])`: Enthält mindestens einen Großbuchstaben
- `(?=.*\d)`: Enthält mindestens eine Zahl
- `{8,}`: 8 Zeichen oder mehr

**Test:**

- ✅ `Pass1234!` (Match)
- ❌ `pass1234` (Kein Sonderzeichen/Großbuchstabe)

---

## 🎯 Schlussfolgerung

Regex ist mächtig, aber zu unfreundlich für Menschen zu lesen.
Überlassen Sie jetzt diese komplexe Code-Entschlüsselung der KI und genießen Sie einfach die Magie der Textverarbeitung! 🍷
