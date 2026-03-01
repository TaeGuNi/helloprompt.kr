---
layout: /src/layouts/Layout.astro
title: "KI-Prompt: Excel-Formeln & VBA in 1 Sekunde erstellen 🚀"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: "Arbeitsautomatisierung"
description: "Schluss mit dem Auswendiglernen komplexer Excel-Formeln und VBA-Codes. Beschreiben Sie der KI einfach Ihre Datenstruktur und kopieren Sie das fertige Ergebnis."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "excel-formula-v"]
---

# 📝 KI-Prompt: Excel-Formeln & VBA in 1 Sekunde erstellen

- **🎯 Empfohlen für:** Junior-Mitarbeiter im Excel-Chaos, Marketer, die endlose Datenbereinigungen satt haben, und Fachkräfte ohne Zeit für Makro-Programmierung
- **⏱️ Zeitaufwand:** 30 Minuten Googeln → 1 Minute Prompt Copy & Paste
- **🤖 Empfohlene Modelle:** ChatGPT (GPT-4o), Claude 3.5 Sonnet

- ⭐ **Schwierigkeitsgrad:** ⭐☆☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

> _"Die Zeiten, in denen Sie auf Google nach 'Excel SVERWEIS mehrere Bedingungen' gesucht haben und sich durch werbeüberladene Blogs quälen mussten, sind endgültig vorbei."_

Schieben Sie den Feierabend auf, weil Sie noch Daten bereinigen müssen? Sich mit kryptischen Excel-Fehlermeldungen herumzuschlagen oder über nicht funktionierenden VBA-Code zu verzweifeln, ist im Berufsalltag leider allzu normal. Aber jetzt müssen Sie weder die Syntax von Funktionen perfekt auswendig lernen, noch objektorientierte Programmierung studieren. Wenn Sie der KI lediglich **"die Struktur Ihrer Daten"** und **"das gewünschte Endergebnis"** präzise beschreiben, liefert sie Ihnen maßgeschneiderte Formeln und Makro-Codes, die Sie nur noch kopieren und einfügen müssen.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. Anstatt Excel-Formeln oder VBA-Syntax auswendig zu lernen, erklären Sie der KI einfach die Spalteninformationen (Columns) und Ihr exaktes Ziel.
2. Wenn Sie die Datenstruktur als Text mitliefern, erhalten Sie passgenaue Formeln ohne lästige Zellbezugsfehler.
3. Bei komplexen Suchen mit mehreren Bedingungen oder wiederkehrenden Datenvorbereitungen (VBA) erzielen Sie eine enorme Zeitersparnis.

---

## 🚀 Die Lösung: Der "Excel/VBA Master-Prompt"

### 🥉 Basic Version (Basisversion)

Nutzen Sie diesen Prompt, wenn Sie schnell eine einfache Formel oder Tastenkombination benötigen.

> **Rolle:** Du bist ein `[absoluter Excel/VBA-Experte]` mit 20 Jahren Erfahrung.
> **Aufgabe:** Meine Daten sehen so aus: `[Spalte A: Name, Spalte B: Abteilung, Spalte C: Umsatz]`. Erstelle mir die effizienteste und fehlerfreie Formel, um `[die Summe der Umsätze der Vertriebsabteilung]` zu berechnen.

### 🥇 Pro Version (Expertenversion)

Verwenden Sie diesen Prompt für komplexe Mehrfachbedingungen, automatisierte Datenvorbereitung oder wenn Sie ausführlichen VBA-Makro-Code benötigen. Dieser Prompt minimiert Fehler und sorgt für exakte Zellbezüge.

> **Rolle (Role):** Du bist Datenanalyst in einem Fortune-500-Unternehmen und ein `[absoluter Excel- und VBA-Experte]`.
> 
> **Kontext (Context):**
> 
> - Hintergrund: Ich muss jede Woche `[hunderte Zeilen an Rohdaten bereinigen und in ein Berichtsformat umwandeln]`.
> - Ziel: Mein Ziel ist es, `[den manuellen Copy-Paste-Prozess zu eliminieren und alles per Knopfdruck zu automatisieren oder eine perfekte Formel anzuwenden]`.
> 
> **Datenstruktur (Data Structure):**
> 
> - Blattname: `[RawData]`
> - Spalte A: `[Datum (JJJJ-MM-TT)]`
> - Spalte B: `[Produktcode (z. B. PRD-1023)]`
> - Spalte C: `[Verkaufsmenge (Zahl)]`
> - Spalte D: `[Mitarbeitername]`
> 
> **Aufgabe (Task):**
> 
> 1. Erstelle basierend auf den obigen Daten `[einen VBA-Makro-Code, der die Summe der Verkaufsmenge pro Produktcode innerhalb eines bestimmten Datumsbereichs berechnet]`.
> 2. Erkläre sehr kurz und präzise, `[wie der Code funktioniert und wie ich ihn in ein Excel-Modul einfüge]`.
> 3. Falls die Lösung durch eine Funktion (Formel) effizienter und schneller ist als mit VBA, schlage zuerst die Formel-Methode vor.
> 
> **Einschränkungen (Constraints):**
> 
> - Das Ausgabeformat darf nur aus Aufzählungspunkten (Bullet Points) und Markdown-Codeblöcken bestehen.
> - Lass unnötige Einleitungen oder Begrüßungen komplett weg und gib direkt die Lösung (Code/Formel) aus.
> - Wenn du VBA-Code schreibst, füge unbedingt in jeder Zeile detaillierte Kommentare auf Deutsch hinzu.
> 
> **Warnung (Warning):**
> 
> - Falls du neuere Funktionen (z. B. XVERWEIS) verwendest, die zu Versionskonflikten führen könnten, erwähne kurz eine Alternative für ältere Versionen (SVERWEIS+VERGLEICH). Erfinde keine unsicheren Objekte oder Methoden, sondern verwende nur Standard-Excel-Funktionen.

---

## 💡 Kommentar des Autors (Insight)

Der Kern dieses Prompts besteht darin, **der KI die "Datenstruktur (Data Structure)" unmissverständlich zuzuordnen (Mapping)**.

Die meisten Fachkräfte fragen die KI einfach grob: "Gib mir die Formel für die Umsatzsumme von Team A." Da die KI nicht wissen kann, in welcher Spalte sich "Team A" befindet und ob der Umsatz als reine Zahl oder gemischt mit Text vorliegt, liefert sie oft nur unbrauchbare, allgemeine Vorlagen. Letztendlich müssen Sie die Zellbezüge (z. B. A2:A100) mühsam selbst anpassen.

Wenn Sie jedoch wie im obigen Pro-Prompt genau deklarieren, welche Daten in Spalte A und B stehen, liefert die KI sofort einsatzbereiten Code wie `SUMMEWENNS(RawData!C:C; RawData!A:A; ...)`, den Sie direkt kopieren und einfügen können.

Der Berufsalltag ist kein Übungsfeld. Verschwenden Sie keine wertvolle Stunde damit, Formelstrukturen zu analysieren oder Makro-Syntax zu pauken. Ihr wahrer Wert liegt nicht im Auswendiglernen von Excel-Befehlen, sondern in der Interpretation der berechneten Daten und im Treffen strategischer Geschäftsentscheidungen. Lagern Sie das reine Tippen an die KI aus und konzentrieren Sie sich auf das Wesentliche.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Funktioniert das auch genauso in Google Sheets?**
  - A: Ja, absolut. Allerdings sollten Sie im Abschnitt Aufgabe (Task) ausdrücklich erwähnen: "Schreibe eine Formel/ein Apps Script für Google Sheets", um Kompatibilitätsprobleme bei den Funktionen zu vermeiden.

- **F: Was soll ich tun, wenn die von der KI gelieferte Formel einen Fehlerwert (#NV, #WERT!) ausgibt?**
  - A: Kopieren Sie die betroffene Zelle mit dem Fehler und geben Sie der KI folgendes Feedback: "Mit dieser Formel erhalte ich den Fehler `#NV`. Bitte füge eine WENNFEHLER-Funktion (IFERROR) hinzu, um die Zelle leer zu lassen." In 10 Sekunden haben Sie eine perfekte Korrektur.

- **F: Reicht dafür auch die kostenlose Version von ChatGPT?**
  - A: Ja, für einfache Excel-Formeln ist die kostenlose Version völlig ausreichend. Wenn es jedoch um komplexe VBA-Codes mit Dutzenden von Zeilen geht, liefert die Pro-Version deutlich präzisere Ergebnisse, da sie den Kontext besser beibehält.

---

## 🧬 Analyse des Prompts (Why it works?)

1. **Zuordnung der Datenstruktur (Data Structure):** Durch die genaue Beschreibung des Datenaufbaus wird die mühsame Notwendigkeit, Zellbezugsbereiche (wie $A$1) manuell anzupassen, von vornherein eliminiert.
2. **Einschränkungen (Constraints):** Wenn man im Arbeitsalltag in Eile ist, nerven ausschweifende Begrüßungen der KI wie "Hallo! Ich helfe Ihnen gerne bei Ihrer Excel-Aufgabe~". Diese Zeitfresser wurden gezielt unterbunden.
3. **Optimierungstechnik (Aufgabe 3):** Um zu vermeiden, dass für simple Aufgaben schwerfälliges VBA genutzt wird, zwingt diese Logik die KI dazu, Formeln vorzuschlagen, wenn diese schneller sind. Das führt immer zum effizientesten Ergebnis.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```text
In Spalte A steht das Datum, in Spalte B der Produktcode, in C die Menge. Brauche ein Makro für die Summe der Menge von PRD-1023.
```

### ✅ Nachher (Ergebnis)

```text
1. Excel-Formel (Effizienter und schneller als VBA)
=SUMMEWENNS(RawData!C:C; RawData!B:B; "PRD-1023")

2. Falls zwingend ein VBA-Makro erforderlich ist:
Sub CalculateProductSales()
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim totalSales As Double
    Dim i As Long
    
    ' Arbeitsblatt festlegen
    Set ws = ThisWorkbook.Sheets("RawData")
    
    ' Letzte Zeile der Daten finden (reagiert automatisch auf neue Daten)
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    totalSales = 0
    
    ' Bedingungen prüfen und summieren
    For i = 2 To lastRow ' Beginnt ab Zeile 2, da Zeile 1 die Kopfzeile ist
        If ws.Cells(i, 2).Value = "PRD-1023" Then
            totalSales = totalSales + ws.Cells(i, 3).Value
        End If
    Next i
    
    ' Ergebnis ausgeben
    MsgBox "Die Gesamtverkaufsmenge für PRD-1023 beträgt " & totalSales & " Stück.", vbInformation, "Ergebnis"
End Sub
```

---

## 🎯 Fazit

Komplexe Excel-Formeln und VBA-Codes müssen kein Kopfzerbrechen mehr bereiten. Mit nur einem klaren Prompt verwandeln Sie sich vom einfachen Excel-"Nutzer" zum Excel-"Dirigenten".

Geben Sie der KI jetzt sofort die Datenstruktur der Excel-Tabelle, die Sie gerade geöffnet haben. Und dann genießen Sie Ihren pünktlichen Feierabend! 🍷
