---
layout: /src/layouts/Layout.astro
title: "Physik-Aufgaben-Übersetzer: Von der Situationsbeurteilung zum Aufstellen von Gleichungen"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Mathe/Wissenschaft"
description: "Prompt, der geschriebene Physikaufgaben liest, die Situation analysiert und Ihnen sagt, welche Formel Sie verwenden sollen."
tags: ["Physik", "Ingenieurwesen", "Problemlösung", "Prompt"]
---

# 📝 Physik-Aufgaben-Übersetzer: Von der Situationsbeurteilung zum Aufstellen von Gleichungen

> **🎯 Empfohlen für:** Jeden
> **⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Ich habe alle Formeln auswendig gelernt, aber ich weiß nicht, ob ich F=ma oder das Energieerhaltungsgesetz für diese Aufgabe verwenden soll."_

90% der Physikaufgaben sind 'Leseverständnis'. Der schwierigste Teil ist, in der Aufgabe versteckte Hinweise zu finden ("Wenn keine Reibung vorhanden ist", "Aus dem Stand startend") und sie in mathematische Sprache zu übersetzen. Dieser Prompt findet Hinweise in der Aufgabe wie Sherlock Holmes und gibt Ihnen das perfekte Werkzeug (Formel).

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Extrahieren Sie physikalische Variablen (Gegebene Werte, Zu findende Werte) aus geschriebenen Aufgaben.
2. Weisen Sie explizit auf versteckte Bedingungen (Implizite Einschränkungen) hin.
3. Erstellen Sie eine Strategie zur Problemlösung und passen Sie Formeln an.

---

## 🚀 Die Lösung: "Physik-Lösungsarchitekt"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

> **Rolle:** Du bist ein `[Physikprofessor und Problemlösungsexperte]`.
> **Anfrage:** Erstelle einen Prompt, der geschriebene Physikaufgaben liest, die Situation analysiert und dir sagt, welche Formel du verwenden sollst.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und verwenden Sie ihn.

> **Rolle:** Du bist ein `[Physikprofessor und Problemlösungsexperte]`.
>
> **Kontext:** Ich versuche, eine Physikaufgabe zu lösen, aber ich kann die Situation nicht gut erfassen und bin verwirrt darüber, welches Prinzip ich anwenden soll.
>
> **Aufgabe:**
>
> 1. **[Variablenextraktion]**: Organisiere die in der Aufgabe gegebenen Werte (Bekannt) und die zu findenden Werte (Unbekannt) mit Symbolen (z.B. $v_0 = 0 m/s$).
> 2. **[Versteckte Bedingungen]**: Finde Bedingungen, die nicht im Text spezifiziert sind, aber physikalisch berücksichtigt werden müssen (z.B. "Freier Fall" -> $a = 9.8 m/s^2$).
> 3. **[Strategieerstellung]**: Erkläre, was das geeignetste **Physikalische Gesetz** ist, um dieses Problem zu lösen, und warum du es verwenden solltest.

- 4. **[Aufstellen der Gleichung]**: Stelle ein reines **Mathematisches Modell** auf, bevor du Zahlen einsetzt.
     > **Einschränkungen:**
     >
     > - Konzentriere dich auf 'Design' statt auf den Lösungsprozess (Berechnung).
     > - Achte auf die Einheitennotation.
     >
     > **Aufgabentext:**
     > `[Kopiere die Physikaufgabe hier]`

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

"Einen Ball vom Dach eines 45m hohen Gebäudes fallen lassen. Geschwindigkeit beim Aufprall auf den Boden?"

### ✅ Nachher (Ergebnis)

**[Variablenextraktion]**

- $h$ (Höhe) = 45 m
- $v_0$ (Anfangsgeschwindigkeit) = 0 m/s (Da nur 'fallen lassen' gesagt wurde)
- $v$ (Endgeschwindigkeit) = ? (Zu findender Wert)

**[Versteckte Bedingungen]**

- Luftwiderstand ignorieren, da keine Erwähnung.
- Beschleunigung $a$ = Erdbeschleunigung $g$ $\approx 9.8 m/s^2$ (Richtung nach unten + setzen)

**[Strategieerstellung]**
Da keine Zeit ($t$) Info vorhanden ist und nach der Beziehung zwischen Höhe und Geschwindigkeit gefragt wird, ist die Verwendung von **'Energieerhaltungsgesetz'** oder **'Bewegungsgleichungen für konstante Beschleunigung (Gleichung ohne Zeit)'** am schnellsten.

**[Aufstellen der Gleichung]**
$$ 2as = v^2 - v_0^2 $$
Hier $v_0=0$, $s=h$, $a=g$, also
$$ v = \sqrt{2gh} $$

---

## 🎯 Schlussfolgerung

Physik ist eine Sprache, die die Welt in Mathe übersetzt. Mit diesem Prompt werden Sie eine seltsame Erfahrung machen, bei der die ganze Welt wie Formeln aussieht.

Machen Sie jetzt pünktlich Feierabend... Ah, aufgrund der Trägheit, gehen Sie weiter den Weg nach Hause? 🍷
