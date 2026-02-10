---
layout: /src/layouts/Layout.astro
title: "Schmutzigen Code in 1 Sekunde in sauberen Code refaktorisieren"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Ein Prompt, der komplexen Spaghetti-Code in leicht lesbaren und wartbaren sauberen Code umwandelt."
tags: ["Refactoring", "Clean Code", "Wartung", "Entwicklerproduktivität"]
---

# 📝 Schmutzigen Code in 1 Sekunde in sauberen Code refaktorisieren

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Ich erkenne nicht einmal den Code, den ich geschrieben habe... Wie entwirre ich diese Spaghetti?"_

Wir alle haben die Erfahrung gemacht, unordentliche Variablennamen zu schreiben, weil wir in Eile waren, oder eine einzelne Funktion zu haben, die 100 Zeilen überschreitet.
Was wäre, wenn es eine Sekretärin gäbe, die Code, den Sie Kollegen nur ungern zeigen, in **'Clean Code'-Standards** refaktorisiert?
Mit nur diesem einen Prompt können Sie Lesbarkeit, Leistung und Wartbarkeit auf einmal erfassen.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Variablennamen/Funktionsnamen intuitiv ändern
2. Doppelten Code entfernen und Funktionen trennen
3. Neueste Syntax anwenden und Leistung optimieren

---

## 🚀 Die Lösung: "Clean Code Refactorer"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein Senior Software Engineer mit 20 Jahren Erfahrung und ein 'Clean Code'-Experte.
**Anfrage:** Wandle komplexen Spaghetti-Code in leicht lesbaren und wartbaren sauberen Code um.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein Senior Software Engineer mit 20 Jahren Erfahrung und ein 'Clean Code'-Experte.
>
> **Kontext:** Der Code, den ich geschrieben habe, funktioniert, hat aber eine schlechte Lesbarkeit und ist schwer zu warten. Variablennamen sind unklar, und es gibt viel doppelte Logik.
>
> **Aufgabe:**
> Refaktoriere den unten angegebenen Code gemäß den folgenden Kriterien:
>
> 1. **Benennung:** Ändere Variablen- und Funktionsnamen so, dass ihre Absicht klar erkennbar ist.
> 2. **Funktionstrennung:** Zerlege Funktionen in kleinere Stücke, damit eine Funktion nur eine Sache tut (SRP).
> 3. **Duplikate entfernen:** Extrahiere wiederholte Logik in separate Funktionen oder Dienstprogramme.
> 4. **Kommentare:** Füge Kommentare nur zu Teilen hinzu, wo eine Erklärung benötigt wird, 'Warum' der Code so geschrieben wurde.
> 5. **Moderne Syntax:** Wende die neueste moderne Syntax der Sprache an.
>
> **Code:**
>
> ```
> [Fügen Sie den zu refakturierenden Code hier ein]
> ```
>
> **Einschränkungen:**
>
> - Ändere niemals die Geschäftslogik (Verhalten) des bestehenden Codes.
> - Fasse die wichtigsten Änderungen vor und nach dem Refactoring in einer Liste zusammen.
> - Zeige die Ausgabe unterteilt in einen Codeblock und einen Erklärungsblock.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```javascript
function calc(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i].price > 100) {
      t += d[i].price * 0.9;
    } else {
      t += d[i].price;
    }
  }
  return t;
}
```

### ✅ Nachher (Ergebnis)

```javascript
/**
 * Berechnet den Gesamtwarenkorbbetrag.
 * Wendet 10% Rabatt für Artikel über 100 Won an.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((total, item) => {
    const finalPrice =
      item.price > DISCOUNT_THRESHOLD ? item.price * DISCOUNT_RATE : item.price;
    return total + finalPrice;
  }, 0);
}
```

_Änderungen: `calc` -> `calculateTotalPrice`, `d` -> `items`, magische Zahlen zu Konstanten, `reduce` verwendet._

---

## 🎯 Schlussfolgerung

Schieben Sie es nicht mehr auf, indem Sie sagen "Ich repariere es später".
Verwandeln Sie stinkenden Code mit diesem Prompt in 3 Sekunden in duftenden Code und gehen Sie nach Hause! 🍷
