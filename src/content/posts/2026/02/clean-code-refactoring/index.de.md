---
layout: /src/layouts/Layout.astro
title: " \"Mein Code ist Müll! Clean Code Refactoring Coach\""
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/IT"
description: " \"Ein Prompt, der unordentlichen Code, der 'irgendwie funktioniert', in sauberen, gut lesbaren und wartbaren Code transformiert.\""
tags: ["Refactoring", "CleanCode", "Entwickler", "CodeReview"]
---

# 📝 Mein Code ist Müll! Clean Code Refactoring Coach

- **🎯 Empfohlen für:** Entwickler, Software-Ingenieure, Berufsanfänger
- **⏱️ Zeitaufwand:** 5 Minuten → Auf 1 Minute verkürzt
- **🤖 Empfohlenes Modell:** Alle modernen LLMs (ChatGPT, Claude, Gemini)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nützlichkeit:** ⭐⭐⭐⭐☆

> _"Ich dachte mir, ich räume das später auf. Jetzt ist ein Jahr vergangen und ich traue mich nicht mehr, diese Datei anzufassen."_

Spaghetti-Code ist der natürliche Feind jedes Entwicklers. Wenn die Lesbarkeit schlecht ist, wird die Fehlersuche zur Qual und das Hinzufügen neuer Funktionen zum Albtraum. Dieser Prompt schlüpft in die Rolle eines Clean-Code-Architekten (ganz im Sinne von Robert C. Martin), analysiert Ihr Chaos und poliert Ihren Code auf Hochglanz.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Strukturierung:** Erkennt und eliminiert doppelten Code durch intelligentes Extrahieren von Methoden.
2. **Namensgebung:** Ersetzt kryptische Variablen durch sprechende, intuitive Bezeichnungen.
3. **Modernisierung:** Aktualisiert veraltete Syntax auf den neuesten Sprachstandard bei maximaler Performance.

---

## 🚀 Die Lösung: "Clean Code Wäscherei"

### 🥉 Basic Version (Die schnelle Lösung)

Perfekt für den schnellen Alltag, wenn Sie nur ein rasches Review benötigen.

> **Rolle:** Du bist ein erfahrener `[Clean Code Evangelist und Software-Architekt]`.
> **Aufgabe:** Refaktorisiere den folgenden Code, der zwar funktioniert, aber extrem unsauber ist. Mach ihn leicht lesbar, gut wartbar und erkläre kurz deine Änderungen.

\

### 🥇 Pro Version (Der Experte)

Nutzen Sie diesen Prompt für komplexe Module, die eine tiefgreifende architektonische Überarbeitung erfordern.

> **Rolle (Role):** Du bist ein `[Clean Code Evangelist und Senior Software-Architekt]`.
>
> **Kontext (Context):**
>
> - Hintergrund: Mein Code erfüllt zwar funktional seinen Zweck, ist aber schwer zu lesen (Legacy/Dirty Code) und kaum wartbar.
> - Ziel: Ein vollständiges Refactoring zu einem sauberen, gut strukturierten und wartbaren Code, der Best Practices folgt.
>
> **Aufgabe (Task):**
>
> 1. **[Naming]**: Ändere Variablen- und Funktionsnamen so, dass ihre Absicht sofort klar wird (z. B. `a` → `userAge`).
> 2. **[Struktur]**: Zerlege überlange Funktionen nach dem Single-Responsibility-Prinzip (SRP) und fasse redundante Logik zusammen.
> 3. **[Modernisierung]**: Wende die modernsten Paradigmen und Syntax-Features der jeweiligen Sprache an (z. B. ES6+ für JavaScript, Python 3.10+).
> 4. **[Analyse]**: Erstelle einen "Vorher/Nachher"-Vergleich und begründe deine Designentscheidungen präzise.
>
> **Einschränkungen (Constraints):**
>
> - Die Kernfunktionalität und Business-Logik des Codes dürfen unter keinen Umständen verändert werden.
> - Nutze Kommentare nur dort, wo das "Warum" (nicht das "Was") erklärt werden muss. Der Code selbst sollte selbsterklärend sein.
>
> **Zielcode:**
>
> ```text
> [Fügen Sie hier Ihren unordentlichen Code ein]
> ```

---

## 💡 Autorenkommentar (Insight)

Als Entwickler verbringen wir weitaus mehr Zeit mit dem Lesen von Code als mit dem Schreiben. Das Refactoring von Legacy-Code kostet oft Stunden und viel Nerven. Dieser Prompt ist besonders nützlich, wenn man den "Tunnelblick" hat und den Wald vor lauter Bäumen nicht mehr sieht. Anstatt sich in Formatierungsdetails zu verlieren, liefert die KI strukturierte Vorschläge (wie z. B. Early Returns oder das Extrahieren magischer Zahlen), die man direkt übernehmen oder als Diskussionsgrundlage für das nächste Code-Review nutzen kann. Ein echter Gamechanger für die tägliche Entwickler-Routine!

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Versteht die KI auch komplexe Frameworks wie React oder Spring Boot?**
  - A: Ja, moderne LLMs erkennen Kontext und Framework-spezifische Best Practices sehr gut. Fügen Sie einfach im Prompt hinzu: "Achte auf React Hooks Best Practices" oder "Nutze moderne Spring-Annotationen".

- **F: Kann die KI aus Versehen Bugs einbauen?**
  - A: Obwohl die Anweisung lautet, die Logik nicht zu ändern, kann es bei sehr komplexen Algorithmen zu Fehlern kommen. **Wichtig:** Führen Sie nach jedem KI-Refactoring unbedingt Ihre Unit-Tests (TDD) aus, bevor Sie die Änderungen übernehmen!

---

## 🧬 Prompt-Anatomie (Warum funktioniert das?)

1. **Die Rolle des Architekten:** Durch die Zuweisung der Persona "Senior Architekt" wird das LLM angewiesen, strenge qualitative Maßstäbe an den Tag zu legen, statt nur oberflächliche Syntax-Korrekturen durchzuführen.
2. **Kategorisierte Aufgaben (Task):** Die explizite Aufteilung in Naming, Struktur und Modernisierung zwingt die KI, methodisch vorzugehen und nichts zu übersehen.
3. **Schutz der Geschäftslogik (Constraints):** Die strikte Anweisung, das Verhalten nicht zu ändern, minimiert das Risiko von Regressionen (eingebauten Fehlern).

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

_(Das Problem: `calc` ist nichtssagend, `x` und `y` sind kryptisch, Magic Numbers (`19`, `0.9`) verwirren den Leser.)_

### ✅ Nachher (Ergebnis)

```python
def calculate_discounted_price(age: int, price: float) -> float:
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Sie sind ein Erwachsener.")
        return price * DISCOUNT_RATE

    print("Sie sind ein Student.")
    return price
```

**[Die Verbesserungen auf einen Blick:]**

1. **Sprechende Namen:** `calc` wurde zu `calculate_discounted_price`, `x` zu `age` und `y` zu `price`.
2. **Magische Zahlen beseitigt:** Konstanten wie `ADULT_AGE_THRESHOLD` klären sofort die Geschäftslogik.
3. **Guard Clauses (Early Return):** Das unnötige `else` wurde entfernt, was die Einrückungstiefe reduziert und den Code geradliniger macht.
4. **Type Hints (Python 3):** Parameter und Rückgabewerte sind nun typisiert, was die IDE-Unterstützung massiv verbessert.

---

## 🎯 Fazit

Gut geschriebener Code liest sich so flüssig wie ein exzellenter Roman. Refaktorisieren Sie Ihren Code nicht nur für andere, sondern vor allem für Ihr zukünftiges Ich.

Jetzt klappen Sie den Laptop zu und machen Sie pünktlich Feierabend. Entspannen Sie sich – Ihr Code ist jetzt sauber. 🍷
