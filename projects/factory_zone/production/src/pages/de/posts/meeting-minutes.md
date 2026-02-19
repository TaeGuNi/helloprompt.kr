---
layout: /src/layouts/Layout.astro
title: "Verpasste Inhalte beim Protokollieren? KI fasst es für Sie zusammen"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "Arbeitsautomatisierung"
description: "Sagen Sie nach dem Meeting nicht: 'Was war das noch gleich?'. Mit einer Audiodatei ist die Zusammenfassung in 1 Minute erledigt."
tags: ["Meeting", "Zusammenfassung", "Produktivität"]
---

# 📝 Verpasste Inhalte beim Protokollieren? KI fasst es für Sie zusammen

- **🎯 Zielgruppe:** Alle Angestellten, PMs, Assistenten
- **⏱️ Zeitaufwand:** 30 Min. → 1 Min. reduziert
- **🤖 Empfohlene Modelle:** Clova Note (STT), ChatGPT (GPT-4), Claude 3

- ⭐ **Schwierigkeit:** ⭐☆☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzwert:** ⭐⭐⭐⭐⭐

> _"Sagen Sie nach dem Meeting nicht: 'Was war das noch gleich?'. Mit einer Audiodatei ist die Zusammenfassung in 1 Minute erledigt."_

Das vollständige Protokollieren von Meeting-Inhalten ist ineffizient. Wichtig sind die 'Entscheidungen' und die 'zu erledigenden Aufgaben (Action Items)'. Dieser Prompt verwandelt verstreute Meeting-Inhalte in eine klare Aufgabenliste.

---

## ⚡️ Zusammenfassung in 3 Zeilen (TL;DR)

1. Zusammenfassung langer Protokolle und Extraktion der Kerninhalte
2. Automatische Erstellung von Action Items (Verantwortlicher/Frist)
3. Klare Angabe von Entscheidungen und zukünftigen Plänen

---

## 🚀 Lösung: "Meeting Minutes Master"

### 🥉 Basic Version (Basis-Version)

Verwenden Sie dies, wenn Sie schnell nur das Wesentliche erfassen möchten.

> **Rolle:** Du bist eine kompetente Assistentin.
> **Anfrage:** Fasse dieses Sitzungsprotokoll zusammen und nenne mir die 3 wichtigsten Punkte.
> **Eingabe:** `[Protokolltext]`

<br>

### 🥇 Pro Version (Experten-Version)

Verwenden Sie dies, wenn eine systematische Verteilung des Protokolls erforderlich ist.

> **Rolle (Role):** Du bist ein sorgfältiger Projektmanager (PM).
>
> **Kontext (Context):**
>
> - Art des Meetings: `[Wöchentliches Meeting / Kick-off / Brainstorming]`
> - Teilnehmer: `[Teilnehmerliste]`
>
> **Aufgabe (Task):**
>
> 1. Organisiere das Protokoll gemäß der folgenden Vorlage.
>    - **📅 Datum:** `[Meeting-Datum]`
>    - **👥 Teilnehmer:** `[Teilnehmer]`
>    - **🗣️ Hauptagenda (Agenda):** `[Liste der Tagesordnungspunkte]`
>    - **✅ Entscheidungen (Decisions):** `[Beschlossene Inhalte]`
>    - **📝 Aufgaben (Action Items):**
>      - `[Verantwortlicher]` : `[Aufgabe]` (~`[Frist]`)
>    - **⏭️ Termin für das nächste Meeting:** `[Geplantes Datum]`
>
> **Einschränkungen (Constraints):**
>
> - Entferne unnötigen Smalltalk (Witze, Gespräche über das Wetter usw.).
> - Verfasse Action Items als möglichst konkrete Handlungen (z. B. "Prüfen" -> "Bericht erstellen und per E-Mail versenden").
>
> **Warnung (Warning):**
>
> - Überprüfe Daten und Zahlen genau.

---

## 💡 Kommentar des Verfassers (Insight)

Der Effekt wird maximiert, wenn Sie zuerst den Text mit einem STT-Tool (Speech-to-Text) wie Clova Note extrahieren und dann diesen Prompt verwenden. Wenn Sie das Protokoll innerhalb von 5 Minuten nach dem Meeting teilen, werden Sie als "jemand, der gut arbeitet" anerkannt.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Was mache ich, wenn das Protokoll zu lang ist?**
  - A: Bei ChatGPT gibt es ein Eingabelimit, also teilen Sie den Text auf oder laden Sie die Datei hoch (unter Verwendung des Code Interpreters) und fordern Sie eine Analyse an. Claude ist vorteilhaft für die Verarbeitung langer Kontexte.

- **Q: Funktioniert es auch bei Text ohne Sprechertrennung?**
  - A: Ja, durch den Kontext kann bis zu einem gewissen Grad abgeleitet werden, wer was gesagt hat, aber für die Genauigkeit sind Sprechermarkierungen besser.

---

## 🧬 Prompt-Analyse (Why it works?)

1.  **Vorlage (Template) bereitgestellt:** Dem KI wurde ein klares Ausgabeformat gegeben, um die Nachbearbeitungszeit zu verkürzen.
2.  **Explizite Anweisung (Explicit Instruction):** Klare Anweisungen wie "unnötigen Smalltalk entfernen" und "konkrete Handlungen verfassen" wurden gegeben, um die Qualität zu erhöhen.

---

## 📊 Beweis: Vorher & Nachher (Before & After)

### ❌ Before (Eingabe)

```text
(중구난방인 회의 녹취록 텍스트...)
김대리: 아, 그 건은 제가 이번 주까지 할게요.
박부장: 그래, 그거 중요하니까 빨리 처리해. 그리고 다음 주 워크샵 장소 섭외는?
이사원: 제가 몇 군데 알아보고 있는데 강남 쪽으로...
```

### ✅ After (Ergebnis)

```markdown
**📝 할 일 (Action Items):**

- 김대리 : 중요 안건 처리 (~이번 주)
- 이사원 : 워크샵 장소(강남 인근) 섭외 및 리스트 보고 (~다음 주)
```

---

## 🎯 Fazit

Das Protokollieren für die KI, das Denken für den Menschen! 🍷