---
title: "Strukturierung komplexer Prompts: Das CREATE-Framework"
date: "2026-02-15"
desc: "Lernen Sie, wie Sie mit dem CREATE-Framework, einem Kernkonzept des Prompt Engineerings für komplexe Aufgaben, konsistente und hochwertige KI-Antworten erhalten."
---

# Strukturierung komplexer Prompts: Das CREATE-Framework

Da sich KI-Modelle weiterentwickeln, betrauen wir sie mit immer komplexeren Aufgaben. Während einfache Prompts für einfache Fragen ausreichen, erfordert die Anweisung von KI zu komplexer Geschäftslogik oder kreativen Aufgaben einen systematischen Ansatz.

Dieser Beitrag stellt das **CREATE-Framework** vor, eine Methode zur logischen Strukturierung von Prompts, um die KI-Leistung zu maximieren.

## Was ist das CREATE-Framework?

CREATE steht für sechs Schlüsselelemente, die für eine effektive Prompt-Erstellung unerlässlich sind.

1.  **C**ontext (Kontext): Der KI eine Rolle und Situation zuweisen.
2.  **R**equest (Anfrage): Die spezifische Aufgabe klar benennen.
3.  **E**xamples (Beispiele): Beispiele (Few-Shot) für das gewünschte Ergebnis liefern.
4.  **A**djustments (Anpassungen): Ton, Stil und Einschränkungen festlegen.
5.  **T**ype of Output (Ausgabetyp): Das Format des Ergebnisses angeben (Tabelle, Code, Markdown usw.).
6.  **E**xtras (Extras): Behandlung von Randfällen oder speziellen Anweisungen einbeziehen.

---

## Schritt-für-Schritt-Anleitung

### 1. Context (Kontext)

Wenn Sie der KI eine Persönlichkeit geben, ändert sich die Qualität der Antwort erheblich.

> "Du bist ein Senior Software Engineer mit 10 Jahren Erfahrung. Du bist darauf spezialisiert, Legacy-Code in modernen Clean Code zu refactoring."

### 2. Request (Anfrage)

Vermeiden Sie Mehrdeutigkeit und verwenden Sie klare Verben.

> "Analysiere die unten angegebene Python-Funktion und refactorisiere sie, um die Lesbarkeit zu verbessern und die Ausführungsgeschwindigkeit zu optimieren."

### 3. Examples (Beispiele)

KI lernt Muster durch Beispiele. Zeigen Sie Eingabe- und Ausgabepaare.

> **Eingabe:**
> `def calc(x,y): return x+y`
>
> **Ausgabe:**
>
> ```python
> def add_numbers(a: int, b: int) -> int:
>     """Gibt die Summe zweier Zahlen zurück."""
>     return a + b
> ```

### 4. Adjustments (Anpassungen)

Entscheiden Sie über Ton und Art der Antwort.

> "Halte die Erklärungen prägnant und verwende professionelle Terminologie, behalte aber einen freundlichen Ton bei, der für Junior-Entwickler zugänglich ist."

### 5. Type of Output (Ausgabetyp)

Geben Sie an, wie Sie das Ergebnis erhalten möchten.

> "Präsentiere das Ergebnis, indem du zuerst den gesamten geänderten Code in einem Codeblock zeigst, gefolgt von einer stichpunktartigen Zusammenfassung der Änderungen."

### 6. Extras (Extras)

Unerwartete Situationen verhindern.

> "Wenn eine Sicherheitslücke im Code gefunden wird, gib bitte zusätzlich zum Refactoring eine separate Warnmeldung aus."

---

## Fazit

Die Verwendung des CREATE-Frameworks ermöglicht es Ihnen, die Zeit für das Schreiben von Prompts zu verkürzen und gleichzeitig eine gleichbleibende Ausgabequalität beizubehalten. Wenn Sie vor komplexen Problemen stehen, organisieren Sie Ihre Gedanken nach der CREATE-Struktur, anstatt vage zu fragen. Die KI wird so intelligent antworten, wie Sie sie gestalten.
