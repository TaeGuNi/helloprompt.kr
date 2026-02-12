---
title: "Darlehensrückzahlungsplan: Gleiche Kapital- und Zinszahlung vs Gleiche Kapitalzahlung"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Arbeitsautomatisierung"
description: "Darlehenszinsrechner-Vorlage, die direkt in Excel erstellt wird, ohne Bankseiten besuchen zu müssen."
tags: ["Excel", "Darlehenszins", "Finanzfunktion", "PMT"]
---

# 📝 Darlehensrückzahlungsplan: Gleiche Kapital- und Zinszahlung vs Gleiche Kapitalzahlung

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"1 Million Won monatlich zahlen, wie viel ist Kapital und wie viel ist Zins?"_

Es gibt im Wesentlichen zwei Darlehensrückzahlungsmethoden. **'Gleiche Kapital- und Zinszahlung'**, wo die monatliche Zahlung gleich ist, und **'Gleiche Kapitalzahlung'**, wo sie mit der Zeit abnimmt. Welche ist vorteilhaft für mich? Einen vollständigen Rückzahlungsplan mit Excel-Finanzfunktionen (`PMT`, `IPMT`, `PPMT`) zu erstellen, zeigt den Gesamtzinsunterschied auf einen Blick.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Automatische Berechnung der monatlichen Zahlung (Kapital + Zins) mit `PMT` (RMZ) Funktion.
2. Trennen von Zins- und Kapitalanteil mit `IPMT` (ZINSZ) und `PPMT` (KAPZ) Funktionen.
3. Generieren eines Plans, der die Saldoänderung nach Rückzahlungsrunde (1~360 Runden) zeigt.

---

## 🚀 Die Lösung: "Selbst-Darlehensrechner"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein `[Finanz-Excel-Experte]`.
**Anfrage:** Darlehenszinsrechner-Vorlage, die direkt in Excel erstellt wird, ohne Bankseiten besuchen zu müssen.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und verwenden Sie ihn.

> **Rolle:** Du bist ein `[Finanz-Excel-Experte]`.
>
> **Kontext:** Ich möchte einen Darlehensplan der **Gleichen Kapital- und Zinsrückzahlung** Methode in Excel erstellen.
>
> - **Darlehensbetrag:** 100 Millionen KRW (B1)
> - **Jahreszinssatz:** 4,5% (B2)
> - **Rückzahlungszeitraum:** 10 Jahre (120 Monate) (B3)
>
> **Aufgabe:**
>
> 1. Sag mir die **`PMT` Funktionsformel**, um die gesamte monatliche Zahlung (Kapital + Zins) zu finden.
> 2. Sag mir Formeln, um **Zins (`IPMT`)** und **Kapital (`PPMT`)** zu finden, die in der N-ten Runde (z.B. 1. Runde) jeweils abgehen.
> 3. Gib Formel mit absoluter Referenz ($), damit ich von der 1. bis zur 120. Runde ziehen und füllen kann.
>
> **Einschränkungen:**
>
> - Vergiss nicht, den Jahreszinssatz durch 12 zu teilen, da es sich um eine monatliche Berechnung handelt.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```text
Wie berechnet man Darlehenszins in Excel?
```

### ✅ Nachher (Ergebnis)

````text
### 🏦 Excel Darlehensrückzahlungsformeln-Sammlung

**1. Monatliche Zahlung (Gesamtkapital + Zins)**
```text
=PMT($B$2/12, $B$3*12, -$B$1)
```
````

_Ergebnis: Ca. 1.036.384 KRW (Zahlen Sie so viel monatlich)_

**2. Wie viel ist Zins? (Basierend auf 1. Runde)**

- Angenommen, Runde (1, 2, 3...) ist in Spalte A:

```text
=IPMT($B$2/12, A5, $B$3*12, -$B$1)
```

_(A5 ist aktuelle Runde. Nach unten ziehen)_

**3. Wie viel ist Kapital?**

```text
=PPMT($B$2/12, A5, $B$3*12, -$B$1)
```

**💡 Analyse:**
Im frühen Stadium ist `IPMT` (Zins) groß und `PPMT` (Kapital) klein, aber der Kapitalrückzahlungsanteil steigt mit der Zeit.

```

---

## 🎯 Schlussfolgerung

Die Gesamtzinskosten visuell zu überprüfen, verbrennt Ihren Willen, das Darlehen zurückzuzahlen. Zeichnen Sie Ihre eigene Rückzahlungskarte mit Excel.

Machen Sie jetzt pünktlich Feierabend! 🍷
```
