---
layout: /src/layouts/Layout.astro
title: " \"Planung eines auf einen Blick sichtbaren KPI-Dashboards\""
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Arbeitsautomatisierung"
description: " \"Welche Indikatoren sollte ich mir ansehen? Empfehlung für Dashboard-Komponenten und Layout.\""
tags: ["Arbeitseffizienz", "Excel", "Bericht", "ChatGPT"]
---

# 📝 Planung eines auf einen Blick sichtbaren KPI-Dashboards

- **🎯 Empfohlen für:** Datenanalysten, Projektmanager, Marketing-Teamleiter
- **⏱️ Zeitaufwand:** 30 Minuten → 2 Minuten
- **🤖 Empfohlenes Modell:** Claude 3.5 Sonnet (exzellent für Struktur und UI/UX-Logik), ChatGPT-4o

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐☆

> _"Ihr Dashboard gleicht einem Flugzeug-Cockpit voller Zahlen, aber niemand weiß, wohin die Reise eigentlich geht?"_

Ein gutes Dashboard ist kein Datenfriedhof, sondern ein klares Navigationsinstrument. Wenn Sie sich oft schwer tun, die wirklich relevanten Key Performance Indicators (KPIs) auszuwählen und das exakt passende Diagramm dafür zu finden, wird Ihnen dieser Prompt stundenlanges Grübeln und endlose Feedback-Schleifen ersparen.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Verwandelt vage Anforderungen in ein klares, strukturiertes Dashboard-Konzept.
2. Liefert nicht nur Kern-KPIs, sondern auch die wissenschaftlich besten Diagrammtypen (Balken, Linie, Donut) für maximale Lesbarkeit.
3. Strukturiert das Layout nach der natürlichen Blickführung (F-Pattern), sodass Entscheider die Kernzahlen in unter 3 Sekunden erfassen.

---

## 🚀 Die Lösung: "BI-Dashboard-Designer"

### 🥉 Basic Version (Grundlagen)

Verwenden Sie diese Version, wenn Sie nur eine schnelle erste Idee oder einen Brainstorming-Partner für Ihr nächstes Meeting brauchen.

> **Rolle:** Du bist ein erfahrener UI/UX-Designer und Senior Data Analyst.
> **Aufgabe:** Ich baue ein Dashboard für `[Abteilung/Zweck, z.B. B2B Vertrieb]`. Welche 5 Indikatoren sollte ich unbedingt anzeigen und welche Diagramme passen dazu?

\

### 🥇 Pro Version (Experten-Level)

Verwenden Sie diesen Prompt, wenn Sie ein professionelles Konzept benötigen, das Sie direkt an Entwickler oder das Management weitergeben können.

> **Rolle (Role):** Du bist ein Lead UI/UX-Designer und Senior Data Analyst, spezialisiert auf Business Intelligence und Executive Dashboards.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich erstelle ein Leistungsmanagement-Dashboard für das `[Abteilung/Team, z.B. Performance Marketing]`-Team.
> - Zielgruppe: Die Hauptnutzer sind `[Zielgruppe, z.B. C-Level Executives / Teamleiter]`, die schnelle, datengetriebene Entscheidungen treffen müssen.
>
> **Aufgabe (Task):**
>
> 1. Definiere die 5 kritischsten Key Performance Indicators (KPIs), die auf diesem Dashboard zwingend enthalten sein müssen. Vermeide sogenannte "Vanity-Metriken".
> 2. Empfiehl für jeden KPI den am besten geeigneten Diagrammtyp (z.B. Liniendiagramm, Bullet-Chart, Heatmap) und begründe kurz, warum dieser Typ die Daten am besten visualisiert.
> 3. Entwirf eine konkrete Layout-Struktur (Wireframe-Konzept) für das Dashboard (z.B. Top-Row für High-Level KPIs, linke Spalte für Trends).
>
> **Einschränkungen (Constraints):**
>
> - Fokus auf "Actionable Insights" (Handlungsempfehlungen ableitbar).
> - Das Layout muss der natürlichen Blickführung (F-Pattern) folgen.
> - Strukturiere die Antwort übersichtlich mit Markdown-Überschriften und Bulletpoints.

---

## 💡 Autorenkommentar (Insight)

Dieser Prompt ist ein absoluter Gamechanger, bevor Sie überhaupt ein Tool wie Tableau, Power BI oder Looker Studio öffnen. Der häufigste Fehler bei der Dashboard-Erstellung ist, einfach alle verfügbaren Daten auf eine Seite zu werfen.

Indem wir der KI die _Zielgruppe_ (z.B. C-Level vs. Operatives Team) mitteilen, ändert sich das Ergebnis drastisch. Ein Geschäftsführer braucht aggregierte Trends (MRR, Churn Rate) in der oberen linken Ecke, während ein Kampagnen-Manager granulare Cost-per-Click (CPC) Daten als Heatmap benötigt. Nutzen Sie das generierte Konzept als Blaupause und bauen Sie Ihr Dashboard exakt nach dieser Struktur nach. Es spart Ihnen Stunden an Redesign-Arbeit!

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Schreibt mir dieser Prompt auch den fertigen Code (z.B. SQL oder React) für das Dashboard?**
  - A: Nein, dieser Prompt fokussiert sich rein auf das konzeptionelle Design (KPI-Auswahl, Diagrammtypen, Layout). Wenn Sie den Code für die Charts benötigen, können Sie das Ergebnis als Kontext in einem Folge-Prompt nutzen (z.B. "Schreibe mir den React Recharts Code für KPI Nummer 2").

- **Q: Kann ich diesen Prompt für jedes BI-Tool verwenden?**
  - A: Ja! Ob Sie Excel, Tableau, Power BI, Google Looker Studio oder eine Eigenentwicklung nutzen – die Prinzipien für gute Datenvisualisierung und Layout-Strukturierung bleiben systemübergreifend exakt gleich.

---

## 🧬 Prompt-Anatomie (Why it works?)

1.  **Zielgruppen-Spezifizierung:** Durch die Definition der Endnutzer weiß die KI sofort, auf welchem Flughöhen-Level die KPIs angesiedelt sein müssen (Strategisch vs. Operativ).
2.  **Anti-Vanity-Klausel:** Die Anweisung, "Actionable Insights" zu liefern und "Vanity-Metriken" zu vermeiden, zwingt das Modell, Kennzahlen vorzuschlagen, die echte Geschäftsentscheidungen treiben (z.B. _Conversion Rate_ statt _Total Pageviews_).
3.  **F-Pattern Layout-Zwang:** Die KI wird gezwungen, wie ein echter UX-Designer zu denken. Die wichtigsten, zusammenfassenden Zahlen (Scorecards) werden automatisch prominent platziert, während tiefergehende Analysen weiter unten folgen.

---

## 📊 Beweis: Before & After

### ❌ Before (Einfache Eingabe)

```text
Ich mache ein Dashboard für mein Sales-Team. Was soll ich da alles reinpacken?
```

_(Ergebnis: Eine langweilige, unstrukturierte Liste von 15 allgemeinen Verkaufsbegriffen ohne Fokus.)_

### ✅ After (Ergebnis des Pro-Prompts)

```text
### 🎯 Top 5 KPIs für das Performance Marketing Dashboard (C-Level Fokus)

1. Customer Acquisition Cost (CAC) vs. Customer Lifetime Value (CLV)
   - Diagramm: Bullet-Chart oder gestapeltes Balkendiagramm
   - Warum: Zeigt sofort das Verhältnis von Ausgaben zu Ertrag.
2. Return on Ad Spend (ROAS) Trend
   - Diagramm: Liniendiagramm mit Trendlinie und Vorjahresvergleich (YoY).
   - Warum: Visualisiert die Effizienz des eingesetzten Kapitals im Zeitverlauf.

### 📐 Layout-Struktur (F-Pattern)
- Top-Row (Die "Hero"-Metriken): 4 KPI-Scorecards (CAC, CLV, ROAS, Total Spend) mit rot/grünen Indikatoren für Month-over-Month (MoM) Veränderungen.
- Mittlerer Bereich (Trends): Großes Liniendiagramm für die ROAS-Entwicklung der letzten 12 Monate.
```

---

## 🎯 Fazit

Ein visuell ansprechendes Dashboard ist wertlos, wenn es keine klaren Antworten liefert. Mit diesem Prompt stellen Sie sicher, dass das Design der Daten folgt – und nicht umgekehrt.

Planen Sie schlau, bauen Sie schneller und machen Sie heute pünktlich Feierabend! 🍷
