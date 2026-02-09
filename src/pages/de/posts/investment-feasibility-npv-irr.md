---
layout: /src/layouts/Layout.astro
title: "Investitions-Machbarkeitsanalyse: NPV & IRR Auto-Berechnung Excel"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Arbeitsautomatisierung"
description: "Sollte ich dieses Geschäft machen? Berechnen Sie einfach den Nettobarwert (NPV) und den Internen Zinsfuß (IRR), Schlüsselfaktoren der Investitionsentscheidung, mit Excel."
tags: ["Excel", "Investitionsanalyse", "NPV", "IRR"]
---

# 📝 Investitions-Machbarkeitsanalyse: NPV & IRR Auto-Berechnung Excel

> **🎯 Empfohlen für:** Jeden
> **⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Ist es rentabel, jetzt 100 Millionen zu investieren und in 5 Jahren 200 Millionen zu verdienen? Es hängt vom Zinssatz ab."_

Sie sollten nicht nur auf den Gewinnbetrag schauen. Weil sich der Wert des Geldes mit der Zeit ändert. **NPV (Nettobarwert)** und **IRR (Interner Zinsfuß)**, die goldenen Regeln von Unternehmensinvestitionsentscheidungen. Konzepte sind schwierig, aber mit Excel-Funktionen können sogar Grundschüler rechnen. KI erstellt perfekte Vorlagenformeln.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Verstehen Sie NPV- und IRR-Konzepte basierend auf Cashflow-Daten.
2. Erstellen Sie automatische Berechnungsformeln unter Verwendung der Excel `NPV` (NBW), `IRR` (IZF) Funktionen.
3. Schlagen Sie Investitionsbeurteilungskriterien gemäß Diskontsatz (Zinssatz) Änderungen vor.

---

## 🚀 Die Lösung: "Investitionsprüfer KI"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

> **Rolle:** Du bist ein `[Finanzmodellierungs-Experte]`.
> **Anfrage:** Sollte ich dieses Geschäft machen? Berechnen Sie einfach den Nettobarwert (NPV) und den Internen Zinsfuß (IRR), Schlüsselfaktoren der Investitionsentscheidung, mit Excel.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und verwenden Sie ihn.

> **Rolle:** Du bist ein `[Finanzmodellierungs-Experte]`.
>
> **Kontext:** Ich möchte die Investitionsmachbarkeit eines neuen Projekts mit Excel analysieren.
>
> - **Anfangsinvestition (Jahr 0):** -100 Millionen KRW (Zelle B2)
> - **Erwarteter Umsatz (Jahr 1~5):** 30 Millionen KRW jährlich (Zellen B3~B7)
> - **Diskontsatz (Erforderliche Rendite):** 10% (Zelle C2)
>
> **Aufgabe:**
>
> 1. Sag mir die **Excel-Formel, um den NPV (Nettobarwert)** dieses Projekts zu finden.
> 2. Sag mir die **Excel-Formel, um den IRR (Internen Zinsfuß)** zu finden.
> 3. Erkläre Beurteilungskriterien, ob investiert werden soll oder nicht, wenn Berechnungsergebnisse **NPV > 0** oder **IRR > Diskontsatz** sind.
>
> **Einschränkungen:**
>
> - Schreibe die Formel unter Beachtung, dass die `NPV` (NBW) Funktion von Excel ab Jahr 1 eingegeben werden sollte. (Anfangsinvestition separat verarbeiten)

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```text
Sag mir, wie man NPV IRR in Excel findet.
```

### ✅ Nachher (Ergebnis)

```text
### 📊 Investitionsanalyse Excel-Formeln

**1. NPV (Nettobarwert) finden**
- **Formel:** `=B2 + NPV(C2, B3:B7)`
- **Interpretation:** Einfach Anfangsinvestition (-100M) addieren und nur Umsätze ab Jahr 1 mit der NPV-Funktion diskontieren, um genau zu sein.
- **Urteil:** Wenn Ergebnis **größer als 0** ist, investieren! (Geldverdienendes Geschäft)

**2. IRR (Interner Zinsfuß) finden**
- **Formel:** `=IRR(B2:B7)`
- **Interpretation:** Einfach den gesamten Bereich von Anfangsinvestition bis zum letzten Umsatz greifen.
- **Urteil:** Wenn Ergebnis (z.B. 15%) **höher als Diskontsatz (10%)** ist, investieren!

**💡 Zusammenfassung:**
NPV zeigt Betrag (Wie viel verdient?), IRR zeigt Rendite (Wie viel % verdient?). Am besten, wenn beide zufriedenstellend sind.
```

---

## 🎯 Schlussfolgerung

Investition ist keine Ahnung, sondern Wissenschaft. Verhindern Sie Multi-Milliarden-Fehler mit zwei Zeilen Excel-Formeln.

Machen Sie jetzt pünktlich Feierabend! 🍷
