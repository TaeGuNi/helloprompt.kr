---
layout: /src/layouts/Layout.astro
title: " \"Darlehensrückzahlungsplan: Gleiche Kapital- und Zinszahlung vs Gleiche Kapitalzahlung\""
author: "Jay"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Arbeitsautomatisierung"
description: " \"Erstellen Sie eine professionelle Darlehenszinsrechner-Vorlage direkt in Excel, ohne auf unübersichtliche Bankseiten angewiesen zu sein.\""
tags: ["Excel", "Darlehenszins", "Finanzfunktion", "PMT"]
---

# 📝 Darlehensrückzahlungsplan: Annuitätentilgung vs. Ratentilgung in Excel

- **🎯 Empfohlen für:** Jeden, der einen Kredit plant, Excel-Anfänger, Finanzplaner
- **⏱️ Zeitaufwand:** 5 Minuten → 1 Minute
- **🤖 Empfohlenes Modell:** Alle dialogfähigen KI-Modelle (ChatGPT, Claude, Gemini etc.)

- ⭐ **Schwierigkeit:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐☆

> _"1.000 Euro monatliche Rate – aber wie viel davon ist eigentlich Tilgung und wie viel wandert als Zins direkt an die Bank?"_

Es gibt grundsätzlich zwei gängige Methoden zur Rückzahlung von Krediten: die **Annuitätentilgung** (konstante monatliche Gesamtraten) und die **Ratentilgung** (konstante Tilgungsbeträge, aber mit der Zeit sinkende Gesamtraten). Welche Option ist finanziell sinnvoller für Ihre individuelle Situation? Anstatt sich auf Bankberater oder starre Online-Rechner zu verlassen, können Sie mit den Excel-Finanzfunktionen (`PMT`, `IPMT`, `PPMT`) in Sekundenschnelle Ihren eigenen, maßgeschneiderten Tilgungsplan erstellen. So sehen Sie die tatsächliche Zinsbelastung auf einen Blick und können strategische Finanzentscheidungen treffen.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Monatsrate berechnen:** Ermitteln Sie die konstante monatliche Zahlung (Tilgung + Zins) automatisch mit der Funktion `PMT` (RMZ).
2. **Zins und Tilgung trennen:** Spalten Sie die Rate exakt auf, indem Sie `IPMT` (ZINSZ) für den Zinsanteil und `PPMT` (KAPZ) für den Tilgungsanteil nutzen.
3. **Dynamischer Tilgungsplan:** Generieren Sie eine tabellarische Übersicht, die den abnehmenden Restschuldsaldo für jeden einzelnen Monat (z.B. Monat 1 bis 120) transparent darstellt.

---

## 🚀 Die Lösung: "Der KI-gestützte Darlehensrechner"

### 🥉 Basic Version (Grundlagen)

Verwenden Sie diesen Prompt, wenn Sie nur ein schnelles, einfaches Ergebnis ohne komplexe Tabellen benötigen.

> **Rolle:** Du bist ein erfahrener `[Finanz-Excel-Experte]`.
> **Anfrage:** Erstelle mir eine Vorlage für einen Darlehenszinsrechner, den ich direkt in Excel aufbauen kann, ohne externe Bankseiten besuchen zu müssen. Erkläre mir die dafür wichtigsten Finanzfunktionen kurz und prägnant.


### 🥇 Pro Version (Expertenmodus)

Nutzen Sie diesen Prompt für einen hochdetaillierten, professionellen Tilgungsplan mit exakten, sofort anwendbaren Formeln.

> **Rolle (Role):** Du bist ein erfahrener `[Finanz-Excel-Experte]`.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich möchte in Excel einen detaillierten Tilgungsplan für ein Darlehen mit **Annuitätentilgung** (gleichbleibende monatliche Gesamtraten) erstellen.
> - Darlehensbetrag: 100.000 Euro (steht in Zelle B1)
> - Jahreszinssatz: 4,5 % (steht in Zelle B2)
> - Laufzeit: 10 Jahre bzw. 120 Monate (steht in Zelle B3)
>
> **Aufgabe (Task):**
>
> 1. Nenne mir die genaue **`PMT` (RMZ) Formel**, um die konstante monatliche Gesamtrate (Zins + Tilgung) zu berechnen.
> 2. Gib mir die spezifischen Formeln, um den exakten **Zinsanteil (`IPMT` / ZINSZ)** und den **Tilgungsanteil (`PPMT` / KAPZ)** für den N-ten Monat (z.B. den 1. Monat, referenziert auf Zelle A5) zu ermitteln.
> 3. Liefere die Formeln zwingend mit **absoluten Zellbezügen ($)**, damit ich sie problemlos über die vollen 120 Monate per AutoFill nach unten ziehen kann.
>
> **Einschränkungen (Constraints):**
>
> - Denke unbedingt daran, den Jahreszinssatz durch 12 zu teilen und die Laufzeit in Monaten anzugeben, da es sich um eine monatliche Berechnung handelt.
> - Gib mir die Ausgabe als übersichtlichen Text mit gut lesbaren Code-Blöcken für die Formeln. Keine langen theoretischen Abhandlungen!

---

## 💡 Anmerkung des Autors (Insight)

Dieser Ansatz ist besonders wertvoll, weil Banken in ihren Finanzierungsangeboten oft nur die monatliche Rate in den Vordergrund stellen. Wenn Sie den Plan in Excel selbst nachbauen, erleben Sie häufig einen echten "Aha-Moment": In den ersten Jahren zahlen Sie fast ausschließlich Zinsen an die Bank, während die tatsächliche Schuld kaum sinkt. Mit diesem Wissen im Hinterkopf können Sie Sondertilgungen strategisch viel effizienter planen. Ich nutze genau dieses Modell, um bei Verhandlungen mit der Bank auf Augenhöhe zu agieren – denn Zahlen lügen nicht!

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Muss ich dafür die allerneueste Excel-Version besitzen?**
  - A: Nein. Die Funktionen RMZ (`PMT`), ZINSZ (`IPMT`) und KAPZ (`PPMT`) gehören zu den absoluten Basis-Finanzfunktionen und sind in allen Excel-Versionen der letzten 20 Jahre sowie uneingeschränkt in Google Sheets verfügbar.

- **F: Was ist, wenn ich außerplanmäßige Sondertilgungen leisten möchte?**
  - A: Für unregelmäßige Sondertilgungen reicht das einfache PMT-Modell nicht ganz aus, da sich die Restschuld dynamisch ändert. Sie können die KI jedoch in einem Folge-Prompt bitten: _"Erweitere den Plan um eine Spalte für unregelmäßige Sondertilgungen und passe die Zinsberechnung dynamisch an den neuen tatsächlichen Restsaldo an."_

- **F: Warum werden die Ergebnisse in Excel manchmal als negative Zahlen dargestellt?**
  - A: Excel betrachtet Kreditauszahlungen (Geld, das Sie erhalten) oft als positiv und Ratenzahlungen (Geld, das abfließt) logischerweise als negativ. Um eine positive Rate im Arbeitsblatt zu sehen, setzen Sie in der Formel einfach ein Minuszeichen vor den Zellbezug des Darlehensbetrags (z.B. `=-$B$1`).

---

## 🧬 Prompt-Anatomie (Warum funktioniert das so gut?)

1. **Zuweisung einer Expertenrolle (Role):** Indem wir die KI sofort zum `[Finanz-Excel-Experten]` machen, vermeiden wir oberflächliche Wikipedia-Erklärungen und erhalten direkt präzise, tabellenkalkulationsgerechte Formeln.
2. **Klar definierter Kontext (Context):** Die genaue Angabe der Zellbezüge (B1, B2, B3) zwingt die KI, Formeln zu generieren, die Sie per Copy & Paste sofort in Ihre Tabelle einfügen können – ohne mühsames Suchen und Anpassen der Variablen.
3. **Prävention von Fehlern (Constraints):** Der häufigste Anfängerfehler bei Excel-Finanzfunktionen ist das Vergessen der monatlichen Zinsanpassung (Zins/12). Durch den expliziten Hinweis im Prompt schließen wir diese ärgerliche Fehlerquelle von vornherein aus.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Einfache Eingabe)

Wie berechnet man Darlehenszinsen in Excel?

### ✅ Nachher (Ergebnis durch KI mit unserem Prompt)

```text
Hier sind die exakten Formeln für Ihren Tilgungsplan. Tragen Sie Ihre Werte in B1, B2 und B3 ein. Angenommen, die fortlaufende Monatsnummer (1, 2, 3...) steht in Spalte A ab Zeile 5:

1. Konstante monatliche Gesamtrate (RMZ):
=RMZ($B$2/12; $B$3; -$B$1)
Ergebnis: ca. 1.036,38 €

2. Zinsanteil im jeweiligen Monat (ZINSZ):
=ZINSZ($B$2/12; A5; $B$3; -$B$1)
(Ziehen Sie diese Formel nach unten, um den Zins für jeden Monat zu sehen)

3. Tilgungsanteil im jeweiligen Monat (KAPZ):
=KAPZ($B$2/12; A5; $B$3; -$B$1)

💡 Analyse:
Beobachten Sie die Entwicklung: In Zeile 5 (Monat 1) ist der Zinsanteil mit 375,00 € am höchsten. Die eigentliche Tilgung beträgt hier nur 661,38 €. Mit jedem weiteren Monat verschiebt sich dieses Verhältnis langsam zugunsten der Tilgung.
```

---

## 🎯 Fazit

Die visuelle Überprüfung der gesamten Zinskosten über die Laufzeit auf einen Blick kann ein echter Weckruf sein. Es motiviert enorm dazu, das Darlehen schneller zurückzuzahlen oder strategische Sondertilgungen zu leisten. Zeichnen Sie Ihre eigene finanzielle Landkarte mit Excel und übernehmen Sie die volle Kontrolle über Ihre Kredite.

Und jetzt: Rechnen lassen, Feierabend machen und die Zinsen im Auge behalten! 🍷
