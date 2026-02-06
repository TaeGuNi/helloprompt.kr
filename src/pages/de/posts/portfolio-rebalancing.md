---
layout: /src/layouts/Layout.astro
title: "KI-Portfolio-Rebalancing: Goldenen Schnitt finden"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Finanzen & Investitionen"
description: "Prompt, um meinen Asset-Allokationsstatus zu überprüfen und einen optimalen Rebalancing-Verhältnis-Vorschlag zu erhalten."
tags: ["Investition", "AssetAllokation", "Rebalancing", "Portfolio"]
---

# 📝 KI-Portfolio-Rebalancing: Goldenen Schnitt finden

> **🎯 Empfohlen für:** Jeden
> **⏱️ Zeitaufwand:** 5 Minuten
> **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Legen Sie nicht alle Eier in einen Korb, ist Ihr Korbzustand in Ordnung?"_

Der Standard der Investition ist Asset-Allokation, aber im Laufe der Zeit werden bestimmte Assets zu groß oder klein, was das Gleichgewicht bricht. Dieser Prompt analysiert das aktuelle Asset-Gewicht, berechnet die Lücke zum Zielgewicht und sagt "was und wie viel zu verkaufen und zu kaufen" mit spezifischer Menge.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Analysieren Sie das Gewicht nach Asset-Klasse des aktuellen Portfolios.
2. Vergleichen Sie mit Zielgewicht und berechnen Sie Überschuss/Mangel.
3. Präsentieren Sie einen spezifischen Rebalancing-Aktionsplan einschließlich Kauf-/Verkaufsmenge.

---

## 🚀 Die Lösung: "Asset-Balance-Tuner"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

> **Rolle:** Du bist ein `[Portfoliomanager]`, der Vermögenswerte von VIP-Kunden bei einer Vermögensverwaltungsfirma verwaltet.
> **Anfrage:** Überprüfe meinen Asset-Allokationsstatus und schlage ein optimales Rebalancing-Verhältnis vor.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und verwenden Sie ihn.

> **Rolle:** Du bist ein `[Portfoliomanager]`, der Vermögenswerte von VIP-Kunden bei einer Vermögensverwaltungsfirma verwaltet.
>
> **Kontext:** Ich möchte mein Investitionsportfolio neu gewichten.
> Mein Gesamtvermögen beträgt `[100 Millionen KRW]`, und das Zielgewicht ist `[Aktie 60%, Anleihe 30%, Bargeld 10%]`.
>
> **Aktuelle Haltevermögenswerte:**
>
> - Aktie: `[75 Millionen KRW]` (Apple, Samsung Electronics usw.)
> - Anleihe: `[15 Millionen KRW]` (US-Staatsanleihen-ETF)
> - Bargeld: `[10 Millionen KRW]`
>
> **Aufgabe:**
>
> 1. Zeige den Unterschied (Disparitätsrate) zwischen aktuellem Gewicht und Zielgewicht in einer Tabelle.
> 2. Berechne **welches Asset zu verkaufen oder zu kaufen ist und wie viel (Betrag)**, um dem Zielgewicht zu entsprechen.
> 3. Erkläre kurz den erwarteten Effekt nach dem Rebalancing (Risikominderung usw.).
>
> **Einschränkungen:**
>
> - Nimm an, dass Transaktionskosten (Gebühr, Steuer) für die Berechnung 0 sind.
> - Rate in spezifischer Reihenfolge wie "Verkaufen, um Bargeld zu sichern, dann kaufen".

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```text
Ich habe Aktien und Anleihen, wie passe ich das Gewicht an?
```

### ✅ Nachher (Ergebnis)

```text
### ⚖️ Portfolio-Rebalancing-Vorschlag

**1. Gewichtsanalyse**
| Asset | Aktueller Betrag | Aktuelles Gewicht | Zielgewicht | Differenz |
| :--- | :--- | :--- | :--- | :--- |
| **Aktie** | 75M | 75% | 60% | 🔻 15% (Überschuss) |
| **Anleihe** | 15M | 15% | 30% | 🔺 15% (Mangel) |
| **Bargeld** | 10M | 10% | 10% | ✅ Richtig |

**2. Aktionsplan**
1. **[Verkaufen]** Verkaufe Vermögenswerte im Wert von **15 Millionen KRW** aus Aktienvermögen. (Gewinnrealisierung)
2. **[Kaufen]** Kaufe zusätzliche Anleihevermögenswerte im Wert von **15 Millionen KRW** mit gesichertem Bargeld.

**3. Erwarteter Effekt**
Effekt der Verringerung des Volatilitätsrisikos durch Reduzierung des durch Aktienkursanstieg aufgeblähten Aktiengewichts und Kauf unterbewerteter Anleihen zum niedrigen Preis.
```

---

## 🎯 Schlussfolgerung

Investition ist kein Bereich der Vorhersage, sondern Bereich der Reaktion. Allein das mechanische Rebalancing gut zu machen, ermöglicht Investitionen ohne Verlust.

Machen Sie jetzt pünktlich Feierabend! 🍷
