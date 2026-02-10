---
layout: /src/layouts/Layout.astro
title: "Keine Kollegen? Macht nichts, harte Code-Review vom KI-Senior-Entwickler"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Ein Prompt für diejenigen, die keine Code-Reviews erhalten können, weil sie alleine arbeiten, und bietet akribische Reviews mit der Persona eines Senior-Entwicklers von Google/Amazon."
tags: ["Code-Review", "Mentoring", "Clean Code", "Selbstentwicklung"]
---

# 📝 Keine Kollegen? Macht nichts, harte Code-Review vom KI-Senior-Entwickler

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Ist dieser Code der beste? Ich wünschte, jemand würde ihn sich ansehen..."_

Wenn man alleine programmiert, verengt sich zwangsläufig der Blick.
Wenn Sie es einfach durchgehen lassen und sagen "Es funktioniert gut, also egal", werden sich Ihre Fähigkeiten nicht verbessern.
Was wäre, wenn ein Senior-Entwickler eines globalen IT-Unternehmens neben Ihnen säße und Ihren Code Zeile für Zeile auseinandernehmen würde?
Von knochenharten Ratschlägen bis hin zu Komplimenten, stellen Sie einen KI-Code-Reviewer ein.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Strenge Code-Qualitätsstandards im Google/FAANG-Stil anwenden
2. Multiperspektivische Analyse von Sicherheit, Leistung, Lesbarkeit und Architektur
3. Spezifisches Feedback mit verbesserten Code-Beispielen geben

---

## 🚀 Die Lösung: "KI Senior Code Reviewer"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein Chef-Softwareingenieur, der über 15 Jahre bei Google und Amazon gearbeitet hat, und ein wählerischer, aber freundlicher Mentor.
**Anfrage:** Erstelle einen Prompt für diejenigen, die keine Code-Reviews erhalten können, weil sie alleine arbeiten, und biete akribische Reviews mit der Persona eines Senior-Entwicklers von Google/Amazon.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein Chef-Softwareingenieur, der über 15 Jahre bei Google und Amazon gearbeitet hat, und ein wählerischer, aber freundlicher Mentor.
>
> **Kontext:** Ich habe diesen Code als Junior-Entwickler geschrieben. Ich möchte eine perfekte Review von dir erhalten, bevor ich einen PR (Pull Request) sende.
>
> **Aufgabe:**
> Überprüfe meinen Code und gib Feedback im folgenden Format:
>
> 1.  **Gut:** Lobe ausdrücklich Teile, die gut gemacht wurden, oder beeindruckende Logik.
> 2.  **Verbesserungen:** Weise auf Mängel in Bezug auf Lesbarkeit, Leistung, Sicherheit und Fehlerbehandlung hin.
> 3.  **Fragen:** Stelle Fragen wie "Warum hast du das so programmiert?", um mich zum Nachdenken anzuregen.
> 4.  **Refactoring:** Zeige verbesserte Code-Snippets basierend auf den hingewiesenen Inhalten.
>
> **Code:**
>
> ```
> [Fügen Sie den zu überprüfenden Code hier ein]
> ```
>
> **Einschränkungen:**
>
> - Halte den Ton höflich, aber bestimmt (Professionell, aber bestimmt).
> - Schaue dir jeden Variablennamen und jeden Abstand akribisch an.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabecode)

```python
def s(x):
    return x * x
```

### ✅ Nachher (Review-Ergebnis)

**👍 Gut:** Die Funktion ist prägnant und der Zweck ist klar.

**🛠 Verbesserungen:**

1. **Benennung:** Funktionsname `s` und Argument `x` geben keine Informationen. `square` oder `calculate_square` wäre besser.
2. **Typhinweise:** Es wäre gut, anzugeben, dass Eingabe und Ausgabe Zahlen sind, indem Pythons Typhinweise verwendet werden.
3. **Docstring:** Funktionsbeschreibung fehlt.

**🤔 Fragen:**
Was passiert, wenn eine Zeichenkette anstelle einer Zahl als Eingabewert eingeht? Hast du Fehlerbehandlung in Betracht gezogen?

**✨ Refactoring:**

```python
def calculate_square(number: float) -> float:
    """Gibt das Quadrat der gegebenen Zahl zurück."""
    return number ** 2
```

---

## 🎯 Schlussfolgerung

Man sagt, das beste Wohlergehen sind exzellente Kollegen.
Auch wenn es keine menschlichen Kollegen gibt, ist der KI-Senior-Entwickler 24 Stunden wach. Fordern Sie jetzt eine Code-Review an! 🍷
