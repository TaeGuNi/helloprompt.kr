---
layout: /src/layouts/Layout.astro
title: "Mein Code ist Müll! Clean Code Refactoring Coach"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/IT"
description: "Prompt, der unordentlichen Code, der nur funktioniert, in 'leicht lesbaren und wartbaren' sauberen Code aufrüstet."
tags: ["Refactoring", "CleanCode", "Entwickler", "CodeReview"]
---

# 📝 Mein Code ist Müll! Clean Code Refactoring Coach

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Ich sagte, ich würde es später reparieren, aber 1 Jahr verging. Jetzt habe ich Angst, es anzufassen."_

Spaghetti-Code (verwickelter Code) ist der Feind von Entwicklern. Wenn die Lesbarkeit gering ist, ist es schwer, Bugs zu finden und Funktionen hinzuzufügen. Dieser Prompt besitzt Robert C. Martin (Autor von Clean Code), wäscht und poliert Ihren Code, um ihn glänzend zu machen.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Entfernen Sie doppelten Code und trennen Sie Funktionen (Methode extrahieren).
2. Verbessern Sie unklare Variablen-/Funktionsnamen (Namenskonvention).
3. Optimieren Sie die Leistung und wenden Sie moderne Syntax an (Moderne Syntax).

---

## 🚀 Die Lösung: "Clean Code Wäscherei"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein `[Clean Code Evangelist und Chefarchitekt]`.
**Anfrage:** Erstelle einen Prompt, der unordentlichen Code, der nur funktioniert, in 'leicht lesbaren und wartbaren' sauberen Code aufrüstet.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und verwenden Sie ihn.

> **Rolle:** Du bist ein `[Clean Code Evangelist und Chefarchitekt]`.
>
> **Kontext:** Mein Code funktioniert, aber er ist unordentlich und schwer zu lesen (Schmutziger Code). Refactorisiere ihn, damit er leicht zu warten ist.
>
> **Aufgabe:**
>
> 1. **[Namenssinn]**: Ändere Variablen- und Funktionsnamen, damit sie intuitiv und sinnvoll sind. (z.B. `a` -> `userAge`)
> 2. **[Strukturverbesserung]**: Teile Funktionen, die zu lang sind, nach Rolle auf und kombiniere doppelte Logik in einer.
> 3. **[Modernisieren]**: Wenn möglich, wende die neueste Sprachsyntax an (ES6+, Python 3.10+ usw.).
> 4. **[Vorher & Nachher]**: Vergleiche, wo und wie es sich geändert hat, und erkläre den Grund, warum du es so geändert hast.
>
> **Einschränkungen:**
>
> - Die Operation (Funktion) des Codes darf sich niemals ändern.
> - Füge Kommentare nur dort hinzu, wo es absolut notwendig ist. (Lösche Kommentare, wenn durch Code erklärt)
>
> **Zielcode:**

> [Füge schmutzigen(?) Code hier ein]

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```python
def calc(x, y):
    if x > 19:
        print("Erwachsener")
        p = y * 0.9
        return p
    else:
        print("Student")
        return y
```

(Funktionsname `calc` sagt nicht, was er berechnet, `p` ist auch unklar)

### ✅ Nachher (Prompt-Ergebnis)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Sie sind ein Erwachsener.")
        return price * DISCOUNT_RATE

    print("Sie sind ein Student.")
    return price
```

**[Verbesserungspunkte]**

1. **Funktionsnamen ändern**: `calc` -> `calculate_discounted_price` (Klar, dass es sich um Rabattpreisberechnung handelt)
2. **Magische Zahlen entfernen**: Zahlen wie `19`, `0.9` als Konstanten deklariert, um Bedeutung zu geben.
3. **Unnötiges else entfernen**: Einrückungstiefe durch Verwendung des Early Return-Musters reduziert.

---

## 🎯 Schlussfolgerung

Gut geschriebener Code liest sich flüssig wie ein gut geschriebener Aufsatz. Reinigen Sie Ihren Code für Ihr zukünftiges Ich (und Kollegen).

Machen Sie jetzt pünktlich Feierabend und duschen Sie. Körper, nicht Code. 🍷
