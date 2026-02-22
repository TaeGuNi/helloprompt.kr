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

- **🎯 Empfohlen für:** Entwickler, Software Engineers, IT-Studenten
- **⏱️ Zeitaufwand:** 5 Minuten → 1 Minute
- **🤖 Empfohlenes Modell:** Alle modernen KI-Modelle (ChatGPT, Claude, Gemini)

- ⭐ **Schwierigkeit:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐☆

> _"Ich erkenne meinen eigenen Code von gestern nicht mehr wieder... Wie entwirre ich bloß diese Spaghetti-Logik?"_

Wir alle kennen das: Unter Zeitdruck entstehen kryptische Variablennamen und Funktionen, die gut und gerne mal 100 Zeilen sprengen. Was wäre, wenn Sie einen virtuellen Assistenten hätten, der diesen Code – den Sie beim Code Review am liebsten verstecken würden – automatisch in sauberen, standardisierten **Clean Code** verwandelt?

Mit genau diesem einen Prompt können Sie Lesbarkeit, Performance und Wartbarkeit auf einen Schlag drastisch verbessern.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Intuitive Namensgebung:** Kryptische Variablen- und Funktionsnamen werden sofort verständlich.
2. **SRP-Prinzip (Single Responsibility):** Monolithische Blöcke werden in kleine, testbare Funktionen aufgeteilt.
3. **Moderne Syntax & Performance:** Veraltete Schleifen werden durch performante, aktuelle Sprachfeatures ersetzt.

---

## 🚀 Die Lösung: "Clean Code Refactorer"

### 🥉 Basic Version (Basis-Version)

Verwenden Sie dies, wenn Sie unter Zeitdruck stehen und nur ein schnelles, funktionierendes Ergebnis benötigen.

> **Rolle:** Du bist ein erfahrener Software Engineer.
> **Aufgabe:** Refaktoriere den folgenden unsauberen Code in leicht lesbaren Clean Code: `[HIER CODE EINFÜGEN]`

<br>

### 🥇 Pro Version (Experten-Version)

Verwenden Sie dies, wenn Sie höchste Qualität und detaillierte Erklärungen für das nächste Code Review benötigen.

Kopieren Sie den untenstehenden **PROMPT** und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle (Role):** Du bist ein Senior Software Engineer mit 20 Jahren Erfahrung und ein absoluter Experte für 'Clean Code' und Softwarearchitektur.
>
> **Kontext (Context):**
>
> - Ausgangslage: Der folgende Code funktioniert zwar technisch, aber die Lesbarkeit ist katastrophal und die Wartung ein Albtraum. Es gibt kryptische Variablen und viel redundante Logik.
> - Ziel: Den Code in einen wartbaren, eleganten und performanten Zustand zu transformieren, der jedem Code Review standhält.
>
> **Aufgabe (Task):**
> Refaktoriere den unten angegebenen Code unter strikter Einhaltung der folgenden Kriterien:
>
> 1. **Benennung:** Ändere Variablen- und Funktionsnamen so, dass ihre Absicht (Intent) sofort klar ist. Keine Abkürzungen.
> 2. **Funktionstrennung:** Zerlege große Funktionen in kleinere Einheiten. Jede Funktion darf nur exakt eine Aufgabe erfüllen (Single Responsibility Principle).
> 3. **Duplikate entfernen:** Extrahiere wiederkehrende Logik in separate, wiederverwendbare Utility-Funktionen (DRY-Prinzip).
> 4. **Kommentare:** Dokumentiere nicht, _was_ der Code tut, sondern _warum_ eine bestimmte Herangehensweise gewählt wurde.
> 5. **Moderne Syntax:** Nutze die modernsten Features und Best Practices der jeweiligen Programmiersprache.
>
> **Code:**
> `[Fügen Sie Ihren Spaghetti-Code hier ein]`
>
> **Einschränkungen (Constraints):**
>
> - Verändere unter keinen Umständen die zugrundeliegende Geschäftslogik oder das Verhalten des Codes.
> - Erstelle eine übersichtliche Markdown-Liste, die die wichtigsten Änderungen (Vorher vs. Nachher) zusammenfasst.
> - Präsentiere das Ergebnis strukturiert: Zuerst den refaktorierten Code in einem Codeblock, danach die Erklärung der Änderungen.

---

## 💡 Autorenkommentar (Insight)

Dieser Prompt ist ein absoluter Lebensretter, wenn man Legacy-Code von Kollegen übernehmen muss. Ich nutze ihn oft als allerersten Schritt, bevor ich überhaupt anfange, fremden Code zu lesen. Anstatt Stunden damit zu verbringen, zu entziffern, was `t`, `d` oder `calc2` bedeuten, lasse ich die KI den Code für mich "übersetzen".

Besonders wertvoll ist die Regel zur Kommentierung ("Warum" statt "Was"): Das verhindert, dass die KI den Code mit nutzlosen Kommentaren wie `// addiert 1` zumüllt, sondern echten Kontext liefert. Wenn Sie den Code in einer stark typisierten Sprache wie TypeScript umschreiben lassen, können Sie im Prompt sogar noch die Anweisung `Füge strikte Typisierungen hinzu` ergänzen.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Versteht die KI auch komplexe branchenspezifische Geschäftslogik?**
  - A: Zum großen Teil ja. Die KI erkennt algorithmische Muster sehr gut, aber bei hochspezifischen Domänen (z.B. komplexe Finanzmathematik) ist es ratsam, im Feld `Kontext` ein bis zwei erklärende Sätze zur Bedeutung der Variablen hinzuzufügen.

- **F: Kann ich damit auch ganze Projektdateien auf einmal refaktorieren?**
  - A: Bei zu großen Dateien (über 300-500 Zeilen) kann die KI den Kontext verlieren, wichtige Details übersehen oder die Antwort mittendrin abbrechen. Refaktorieren Sie am besten blockweise, also Funktion für Funktion oder Klasse für Klasse.

- **F: Funktioniert das für jede Programmiersprache?**
  - A: Absolut! Egal ob Python, JavaScript, Java, Go oder C++ – die grundlegenden Prinzipien von Clean Code bleiben immer gleich. Erwähnen Sie einfach die Zielsprache im Prompt, falls sie aus dem Code-Snippet nicht völlig offensichtlich wird.

---

## 🧬 Prompt-Anatomie (Warum funktioniert das so gut?)

1. **Strenge Einschränkungen (Constraints):** Der Befehl "Verändere unter keinen Umständen die Geschäftslogik" ist essenziell, um zu verhindern, dass die KI übereifrig vermeintliche Bugs 'behebt', die eigentlich beabsichtigtes Verhalten (Features) sind.
2. **Gezielte Rollenzuweisung:** Indem wir der KI die Persona eines "Senior Software Engineer" zuweisen, zwingen wir sie dazu, ihren Codierstil an industrielle Best Practices anzupassen, anstatt simplen Anfänger-Tutorial-Code zu produzieren.

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
 * Berechnet den Gesamtwert des Warenkorbs.
 * Wendet einen Rabatt von 10% auf Artikel an, die teurer als 100 Einheiten sind.
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

_Änderungen: `calc` → `calculateTotalPrice`, kryptisches `d` → verständliches `items`, Magic Numbers durch benannte Konstanten ersetzt, deklaratives `reduce` statt imperativer `for`-Schleife verwendet._

---

## 🎯 Fazit

Schieben Sie das Refactoring nicht länger mit dem klassischen "Das repariere ich später" vor sich her.

Befreien Sie Ihren Code von unangenehmen 'Code Smells' und verwandeln Sie ihn mit diesem Prompt in Sekundenschnelle in ein meisterhaftes Stück Softwarearchitektur – so klappt es auch mit dem pünktlichen Feierabend! 🍷
