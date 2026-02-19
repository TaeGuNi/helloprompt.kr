---
layout: /src/layouts/Layout.astro
title: "Excel Sensitivitätsanalyse: Perfekte Vorbereitung für 'Was wäre wenn' Szenarien"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Arbeitsautomatisierung"
description: "Wie sehr sinkt der Gewinn, wenn der Wechselkurs um 10% steigt? Berechnung Dutzender Fälle auf einmal mit Excel Datentabellen-Funktion."
tags: ["Excel", "Sensitivitätsanalyse", "Szenario", "Datentabelle"]
---

# 📝 Excel Sensitivitätsanalyse: Perfekte Vorbereitung für "Was wäre wenn" Szenarien

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Niemand kennt die Zukunft. Aber wir können alle Zukünfte berechnen."_

Das Wichtigste bei der Geschäftsplanung ist die Variable. **'Sensitivitätsanalyse'** Tabelle zeigt, wie sich das Betriebsergebnis ändert, wenn sich Wechselkurs, Rohstoffpreis, Verkaufsvolumen usw. ändern. Mit Excels verstecktem Cheat-Key **'Datentabelle'** Funktion können Sie 100 Szenarien mit einer Formel automatisch generieren.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Beziehung zwischen Variablen (Wechselkurs, Verkaufsvolumen) und Ergebnis (Betriebsergebnis) herstellen.
2. Matrix generieren unter Verwendung der Funktion 'Was-wäre-wenn-Analyse > Datentabelle'.
3. Ergebnis simulieren, wenn sich zwei Variablen gleichzeitig ändern.

---

## 🚀 Die Lösung: "Szenario-Matrix-Generator"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein `[Finanzmodellierungs-Experte]` im strategischen Planungsbüro.
**Anfrage:** Wie sehr sinkt der Gewinn, wenn der Wechselkurs um 10% steigt? Berechnung Dutzender Fälle auf einmal mit Excel Datentabellen-Funktion.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und verwenden Sie ihn.

> **Rolle:** Du bist ein `[Finanzmodellierungs-Experte]` im strategischen Planungsbüro.
>
> **Kontext:** Ich möchte **Sensitivitätsanalyse** in Excel durchführen.
>
> - **Ziel:** Änderung des 'Betriebsergebnisses' beobachten
> - **Variable 1 (Zeile):** Wechselkurs (1.200 KRW ~ 1.400 KRW, 50 KRW Einheit)
> - **Variable 2 (Spalte):** Verkaufsvolumen (10k ~ 50k, 10k Einheit)
>
> **Aufgabe:**
>
> 1. Sag mir Schritt für Schritt die Reihenfolge, um Excels **'Datentabelle'** Funktion zu verwenden.
> 2. Erkläre klar, wo Zeileneingabezelle und Spalteneingabezelle verknüpft werden sollen, um nicht verwirrt zu sein.
> 3. Gib Tipp, um Einsicht abzuleiten wie "Absicherung ist erforderlich, da Gewinn abstürzt, wenn Wechselkurs steigt", wenn man die fertige Tabelle sieht.
>
> **Einschränkungen:**
>
> - Gib Menüpfad an (Daten-Tab > Was-wäre-wenn-Analyse > Datentabelle).

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```text
Wie macht man Wechselkursschwankungsszenario in Excel?
```

### ✅ Nachher (Ergebnis)

```text
### 🌪️ Excel Sensitivitätsanalyse 3-Schritte-Anleitung

**1. Das Brett legen (Matrix-Struktur)**
- Geben Sie **Wechselkurs** Szenarien (1200, 1250...) in Spalte A (Vertikal) ein.
- Geben Sie **Verkaufsvolumen** Szenarien (10k, 20k...) in Zeile 1 (Horizontal) ein.
- **Schlüssel:** Müssen **'Betriebsergebnis-Berechnungsformel (=C10)'** mit der **Eck (A1)** Zelle verknüpfen, wo Spalte A und Zeile 1 sich treffen.

**2. Magie wirken (Datentabelle ausführen)**
- Wählen Sie gesamte Tabelle aus ➔ [Daten] Tab ➔ [Was-wäre-wenn-Analyse] ➔ Klick [Datentabelle].
- **Zeileneingabezelle:** Klick **'Verkaufsvolumen'** Zelle der Originaldaten (Weil es horizontale Achse ist!)
- **Spalteneingabezelle:** Klick **'Wechselkurs'** Zelle der Originaldaten (Weil es vertikale Achse ist!)

**3. Ergebnis prüfen**
- Moment, in dem Sie OK drücken, werden Leerstellen in der Tabelle mit Dutzenden von Betriebsergebnisschätzungen gefüllt.
- **💡 Tipp:** Wenden Sie Bedingte Formatierung (Farbskalen) an. 'Todeslinie', wo Gewinn zu Defizit (Rot) wird, ist auf einen Blick zu sehen.
```

---

## 🎯 Schlussfolgerung

Wenn Führungskraft fragt "Was passiert, wenn Wechselkurs 1.350 wird?", keine Panik und Koordinate (1350, Verkaufsvolumen) der Excel-Tabelle lesen. Das ist 'vorbereitetes Talent'.

Machen Sie jetzt pünktlich Feierabend! 🍷
