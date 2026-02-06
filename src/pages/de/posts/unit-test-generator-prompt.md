---
layout: /src/layouts/Layout.astro
title: "Testcode schreiben, ein Prompt, der in 5 Minuten fertig ist"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Überlassen Sie das langweilige und mühsame Schreiben von Unit-Tests der KI. Fordern Sie 100% Abdeckung heraus!"
tags: ["Testcode", "TDD", "Jest", "PyTest", "QA"]
---

# 📝 Testcode schreiben, ein Prompt, der in 5 Minuten fertig ist

> **🎯 Empfohlen für:** Jeden
> **⏱️ Zeitaufwand:** 5 Minuten
> **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Ich bin beschäftigt, nur Code zu schreiben, wann soll ich all die Testcodes machen?"_

Jeder kennt die Bedeutung von Testcode, aber wenn man tatsächlich versucht, ihn zu schreiben, dauert es oft länger als die Hauptlogik.
Über Randfälle (Edge Cases) nachdenken, Mocking machen... hat es Ihnen Kopfschmerzen bereitet?
Fügen Sie jetzt einfach die Geschäftslogik ein. KI wird akribische Testcodes für Sie schreiben.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Deckt nicht nur Happy Paths, sondern auch Ausnahmefälle ab
2. Perfekte Unterstützung für weit verbreitete Test-Framework-Syntax
3. Automatische Generierung von Mock-Daten

---

## 🚀 Die Lösung: "Unit Test Generator"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

> **Rolle:** Du bist ein akribischer und perfektionistischer QA-Ingenieur und Testautomatisierungsexperte.
> **Anfrage:** Überlasse das langweilige und mühsame Schreiben von Unit-Tests der KI. Fordere 100% Abdeckung heraus!

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein akribischer und perfektionistischer QA-Ingenieur und Testautomatisierungsexperte.
>
> **Kontext:** Ich habe Code, der in `[Verwendete Sprache/Framework]` geschrieben ist. Ich benötige Unit-Tests, um die Zuverlässigkeit dieses Codes zu erhöhen.
>
> **Aufgabe:**
>
> 1. Analysiere den bereitgestellten Code und schreibe zuerst eine Liste von Testfällen. (Einschließlich Erfolgsfälle, Fehlerfälle, Grenzwertanalyse)
> 2. Schreibe ausführbaren Testcode unter Verwendung von `[Testbibliotheksname (z.B. Jest, PyTest, JUnit)]`.
> 3. Wenn es externe Abhängigkeiten gibt, behandle Mocking.
> 4. Füge Kommentare für jeden Testfall hinzu, die erklären, was er überprüft.
>
> **Code:**
>
> ```
> [Fügen Sie den zu testenden Code hier ein]
> ```
>
> **Einschränkungen:**
>
> - Schließe verschiedene Szenarien ein, damit die Testabdeckung so hoch wie möglich ist.
> - Stelle den Code in einer Form bereit, die sofort kopiert und ausgeführt werden kann.
> - Schreibe die Testbeschreibung (Description) auf Deutsch.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabecode)

```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Kann nicht durch 0 teilen.");
  return a / b;
}
```

### ✅ Nachher (Ergebnis)

```javascript
describe("divide Funktionstest", () => {
  // 1. Normalbetriebstest
  test("10 geteilt durch 2 sollte 5 sein", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Ausnahmebehandlungstest
  test("Durch 0 teilen sollte einen Fehler werfen", () => {
    expect(() => divide(10, 0)).toThrow("Kann nicht durch 0 teilen.");
  });

  // 3. Grenzwert-/Spezialwerttest
  test("Negative Zahlen teilen sollte zu einer negativen Zahl führen", () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});
```

---

## 🎯 Schlussfolgerung

Wenn Fehler nach der Bereitstellung gefunden werden, steigen die Kosten für deren Behebung um das 100-fache.
Vernichten Sie Fehler in der Entwicklungsphase mit diesem Prompt und drücken Sie die 'Merge'-Taste mit Zuversicht! 🍷
