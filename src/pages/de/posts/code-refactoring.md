---
layout: /src/layouts/Layout.astro
title: "Mein Code ist Müll! Clean Code Refactoring Coach"
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Coding/IT"
description: "Ein Prompt, der schmutzigen Code, der gerade so läuft, in sauberen Code verwandelt, der 'leicht zu lesen und gut zu warten' ist."
tags: ["Refactoring", "Clean Code", "Entwickler", "Code Review"]
---

# 📝 Mein Code ist Müll! Clean Code Refactoring Coach

- **🎯 Empfohlen für:** Jeden
- **⏱️ Dauer:** 5 Minuten
- **🤖 Empfohlenes Modell:** Alle KI-Modelle

- **📊 Schwierigkeit:** ⭐⭐☆☆☆
- **⚡️ Effektivität:** ⭐⭐⭐⭐⭐
- **🛠️ Nützlichkeit:** ⭐⭐⭐⭐☆

_"Ich habe gesagt, ich repariere es später, und jetzt ist ein Jahr vergangen. Jetzt habe ich Angst, es anzufassen."_

Spaghetti-Code (verworrener Code) ist der Feind des Entwicklers. Wenn die Lesbarkeit schlecht ist, ist es schwierig, Fehler zu finden oder Funktionen hinzuzufügen. Dieser Prompt lässt Robert C. Martin (Autor von Clean Code) von deinem Code Besitz ergreifen, ihn waschen und polieren, bis er glänzt.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Redundanten Code entfernen und Funktionen aufteilen (Extract Method)
2. Unklare Variablen-/Funktionsnamen verbessern (Naming Convention)
3. Leistungsoptimierung und Anwendung moderner Syntax (Modern Syntax)

---

## 🚀 Lösung: "Clean Code Wäscherei"

### 🥉 Basic Version (Basisversion)

Verwende dies, wenn du nur schnelle Ergebnisse benötigst.

> **Rolle:** Du bist ein `[Clean Code Evangelist und Chief Architect]`.
> **Anfrage:** Aktualisiere den schmutzigen Code, der gerade so läuft, zu einem sauberen Code, der 'leicht zu lesen und gut zu warten' ist.

<br>

### 🥇 Pro Version (Expertenversion)

Verwende dies, wenn du detaillierte Qualität benötigst.

Kopiere den Inhalt des **PROMPT** unten, um ihn zu verwenden.

> **Rolle (Role):** Du bist ein `[Clean Code Evangelist und Chief Architect]`.
>
> **Kontext (Context):** Mein Code funktioniert, ist aber unordentlich und schwer zu lesen (Dirty Code). Refactore ihn, damit er leichter zu warten ist.
>
> **Aufgabe (Task):**
>
> 1. **[Naming Sense]**: Ändere Variablen- und Funktionsnamen so, dass sie intuitiv und bedeutungsvoll sind. (z.B.: `a` -> `userAge`)
> 2. **[Strukturverbesserung]**: Zerlege Funktionen, die zu lang sind, nach Aufgaben und fasse redundante Logik zusammen.
> 3. **[Modernize]**: Wende wenn möglich die neueste Sprachsyntax an (ES6+, Python 3.10+ usw.).
> 4. **[Before & After]**: Vergleiche, was wie geändert wurde, und erkläre den Grund für die Änderung.
>
> **Einschränkungen (Constraints):**
>
> - Das Verhalten (die Funktion) des Codes darf sich keinesfalls ändern.
> - Füge Kommentare (Comments) nur dort hinzu, wo sie unbedingt notwendig sind. (Entferne Kommentare, wenn der Code selbsterklärend ist)
>
> **Zielcode:**

> [Füge hier deinen schmutzigen (?) Code ein]

---

## 🧬 Prompt-Anatomie (Why it works?)

Dieser Prompt ist so konzipiert, dass er die Absicht der KI durch eine Kombination aus klarer Persona-Einstellung und spezifischen Anweisungen (Task) genau erfasst. Er leitet schrittweises Denken (Chain of Thought) ein, um logische Antworten zu erhalten.

---

## 📊 Beweis: Vorher & Nachher

Der Unterschied zwischen einem einfachen Befehl und einem optimierten Prompt ist deutlich. Wenn du den bereitgestellten Prompt verwendest, erhältst du spezifischere und strukturiertere Antworten und sparst Zeit für erneutes Prompting (Re-prompting).

### ❌ Vorher (Eingabe)

```python
def calc(x, y):
    if x > 19:
        print("성인")
        p = y * 0.9
        return p
    else:
        print("학생")
        return y
```

(Der Funktionsname `calc` sagt nicht aus, was berechnet wird, und `p` ist ebenfalls bedeutungslos)

### ✅ Nachher (Prompt-Ergebnis)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("성인입니다.")
        return price * DISCOUNT_RATE

    print("학생입니다.")
    return price
```

**[Verbesserungspunkte]**

1. **Funktionsnamensänderung**: `calc` -> `calculate_discounted_price` (Es wird klar, dass ein rabattierter Preis berechnet wird)
2. **Magic Numbers entfernt**: Zahlen wie `19`, `0.9` als Konstanten deklariert, um ihnen Bedeutung zu verleihen.
3. **Unnötiges else entfernt**: Early Return Pattern verwendet, um die Einrückungstiefe zu verringern.

---

## 💡 Kommentar des Autors (Insight)

Dieser Prompt konzentriert sich auf die praktische Anwendbarkeit, die sofort in der Praxis eingesetzt werden kann.
Wenn das Ergebnis nicht zufriedenstellend ist, versuche, die Eingabevariablen oder die Situation (Context) etwas konkreter festzulegen.

---

## 🙋 Häufig gestellte Fragen (FAQ)

**F. Das Ergebnis gefällt mir nicht.**
A. Füge konkrete Beispiele hinzu oder beschreibe die Situation (Context) detaillierter.

**F. Ist das auch in anderen Sprachen möglich?**
A. Ja, das ist möglich, indem du die Anweisungen des Prompts in die entsprechende Sprache übersetzt.

---

## 🎯 Fazit

Gut geschriebener Code liest sich so flüssig wie ein gut geschriebener Essay. Reinige deinen Code für dein zukünftiges Ich (und deine Kollegen).

Jetzt mach Feierabend und geh duschen. Deinen Körper, nicht den Code. 🍷