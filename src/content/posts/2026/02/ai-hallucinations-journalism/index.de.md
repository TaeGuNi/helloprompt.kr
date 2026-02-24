---
title: " \"AI Hallucinations in Journalism\""
description: " \"Ars Technica retracts a story after discovering that AI-generated quotes were falsely attributed to a software maintainer, highlighting the risks of LLMs in newsrooms.\""
date: 2026-02-15
tags: ["AI", "Ethics", "Journalism", "Fake News"]
---

# 📝 KI-Halluzinationen perfekt blockieren: Der Fact-Checking-Prompt für Journalisten

- **🎯 Empfohlen für:** Journalisten, Content-Editoren, Newsletter-Herausgeber
- **⏱️ Zeitaufwand:** 1 Stunde (manuelle Prüfung) → 3 Minuten (KI-Prüfung)
- **🤖 Empfohlenes Modell:** Claude 3.5 Sonnet, GPT-4o (Modelle mit starker Analytik und hoher Instruktionstreue)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nützlichkeit:** ⭐⭐⭐⭐⭐

> _"Was wäre, wenn die Zitate in Ihrem neuesten Artikel frei von einer KI erfunden wurden? Sie brauchen ein unüberwindbares Schutzschild, das Ihre journalistische Karriere sichert."_

Kürzlich musste das renommierte IT-Magazin Ars Technica einen Artikel zurückziehen, nachdem bekannt wurde, dass die Zitate eines Software-Maintainers von einer KI "halluziniert" worden waren. Mit dem zunehmenden Einsatz von LLMs (Large Language Models) in Redaktionen sind die plausibel klingenden Lügen der KI nicht länger nur ein lustiger Ausrutscher, sondern ein fatales Risiko für die Glaubwürdigkeit von Medienhäusern.

In diesem Beitrag stelle ich einen Prompt vor, der die eigenmächtige Informationserfindung durch KI im Keim erstickt. Er zwingt die KI dazu, Artikelentwürfe ausschließlich auf Basis der bereitgestellten **Quelldaten (Source)** zu verfassen und Fakten sicher zu überprüfen.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. **Fatale KI-Halluzinationen:** KIs neigen dazu, fehlendes Wissen durch täuschend echt klingende Sätze und Zitate zu ersetzen.
2. **Absoluter Fokus auf die Quelle (Source):** Sie müssen der KI verbieten, auf externes Wissen zuzugreifen, und sie zwingen, sich strikt auf den bereitgestellten Text zu stützen.
3. **Automatisierte Gegenprüfung:** Nutzen Sie Prompts, um den Entwurf mit dem Original-Interview abzugleichen und Sätze ohne klare Quelle sofort aufzudecken.

---

## 🚀 Die Lösung: "Der Integritäts-Fact-Checker"

### 🥉 Basic Version (Grundversion)

Nutzen Sie diese Version, um einen Artikelentwurf schnell auf erfundene Informationen zu scannen.

> **Rolle:** Du bist ein extrem kritischer "Chief Fact-Checker".
> **Aufgabe:** Vergleiche den folgenden `[Artikelentwurf]` mit den `[Original-Interviewdaten]`. Finde alle Stellen, an denen der Autor Informationen hinzugefügt hat, die nicht in der Quelle stehen, oder Zitate verfälscht hat. Weist mich auf jede noch so kleine Übertreibung hin.

<br>

### 🥇 Pro Version (Expertenversion)

Verwenden Sie diesen Prompt, um die kreativen Freiheiten der KI bei der Artikel-Erstellung komplett zu unterbinden und einen zu 100 % vertrauenswürdigen Entwurf zu generieren.

> **Rolle (Role):** Du bist ein Pulitzer-Preis-prämierter investigativer Journalist und ein "Editor-in-Chief", der geradezu besessen von korrekten Fakten ist.
>
> **Kontext (Context):**
>
> - Hintergrund: Kürzlich hat ein anderes Medium durch KI erfundene Zitate veröffentlicht, was zu einem massiven Skandal führte.
> - Ziel: Wir müssen einen zu 100 % faktenbasierten `[Artikelentwurf]` verfassen, der ausschließlich auf dem bereitgestellten `[Quellmaterial]` beruht.
>
> **Aufgabe (Task):**
>
> 1. Verfasse basierend auf dem `[Quellmaterial]` einen leserfreundlichen Artikelentwurf.
> 2. Jedes Zitat (" "), das im Artikel verwendet wird, muss exakt und wortwörtlich aus dem `[Quellmaterial]` übernommen werden.
> 3. Ergänze niemals fehlende Informationen durch dein eigenes Vorwissen. Wenn Informationen fehlen, füge die Anmerkung "[Diese Information ist in der Quelle nicht enthalten]" ein.
> 4. Erstelle nach dem `[Artikelentwurf]` eine <Quellenprüfungs-Liste> als Markdown-Liste, die zeigt, aus welchem Absatz des Originals die wichtigsten Fakten und Zitate stammen.
>
> **Einschränkungen (Constraints):**
>
> - Externe Internetrecherchen oder die Nutzung deiner internen Wissensdatenbank (Knowledge Base) sind strengstens untersagt.
> - Leichte grammatikalische Anpassungen zur besseren Lesbarkeit sind erlaubt, aber jegliche Umformulierung, die die Nuancen der Fakten verändert, ist absolut verboten.
>
> **Warnung (Warning):**
>
> - Wenn du auch nur ein einziges falsches Zitat erfindest, das nicht im Originaltext steht, trägt unsere Redaktion schwerwiegende rechtliche Konsequenzen. Präge dir das ein!
>
> **Eingabedaten (Input):**
>
> - `[Quellmaterial]`: (Fügen Sie hier Interview-Transkripte, Pressemitteilungen, offizielle Dokumente usw. ein)

---

## 💡 Kommentar des Autors (Insight)

Der Kern dieses Prompts besteht darin, die KI von einem "kreativen Autor" zu einem strengen "Übersetzer und Zusammenfasser" herabzustufen. Meine Erfahrung zeigt: Wenn Sie einer KI einfach den Befehl "Schreibe einen Artikel" geben, wird sie mit hoher Wahrscheinlichkeit fiktive Personen oder Zitate erfinden, um den Text flüssiger klingen zu lassen. (Genau das war die Ursache für das Debakel bei Ars Technica.)

Daher ist es absolut essenziell, durch die **Einschränkungen (Constraints)** und **Warnungen (Warning)** starke psychologische Leitplanken zu setzen – wie das Verbot von Vorwissen und der Hinweis auf rechtliche Konsequenzen. Ich empfehle dringend, sich diesen Prompt in Ihrem Notiz-Tool oder der internen Snippet-Bibliothek abzuspeichern und ihn vor jeder Veröffentlichung in der Fact-Checking-Phase rigoros einzusetzen.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Gibt es bei der Fact-Checking-Qualität Unterschiede zwischen den KI-Modellen?**
  - A: Ja, gewaltige. Anstelle von Modellen, die auf Kreativität optimiert sind (wie das reguläre GPT-4), sind Modelle der **Claude 3.5 Sonnet**-Familie für Textabgleiche und Fact-Checking weitaus sicherer und zuverlässiger, da sie Instruktionen exakter befolgen.

- **F: Was ist, wenn das Quellmaterial (z. B. ein langes Interview-Transkript) zu umfangreich ist?**
  - A: Moderne Modelle können problemlos zehntausende von Wörtern auf einmal verarbeiten (Claude 3.5 z. B. bis zu 200k Token). Selbst Transkripte von 1–2 stündigen Interviews können Sie in der Regel komplett einfügen, ohne dass Informationen verloren gehen.

---

## 🧬 Prompt-Anatomie (Why it works?)

1.  **Strenge Kontextbegrenzung (Strict Context Bounding):** Durch den klaren Zaun um das `[Quellmaterial]` wird der KI systematisch verboten, auf ihre eigenen Trainingsdaten zuzugreifen.
2.  **Selbstverifizierungs-Mechanismus (Self-Verification):** Der Zwang, eine <Quellenprüfungs-Liste> zu erstellen, bringt die KI dazu, die Basis ihrer eigenen Behauptungen zurückzuverfolgen und eventuelle Halluzinationen selbstständig zu korrigieren.
3.  **Hochrisiko-Warnung (High-Stakes Warning):** Das Schlüsselwort "rechtliche Konsequenzen" stimuliert die internen Sicherheitsfilter (Safety Alignment) des Modells stark, was zu besonders konservativen und sicheren Ergebnissen führt.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Standard-Anfrage)

```text
Prompt: Schreibe basierend auf diesen kurzen Interviewnotizen einen Artikel.

(Antwort der KI)
...Software-Maintainer John Doe betonte: "Dieses Update ist revolutionär und hat alle Sicherheitslücken restlos beseitigt."
```

_(Ergebnis: Die Worte "revolutionär" oder "restlos beseitigt" kamen in den echten Notizen gar nicht vor. Typische KI-Halluzination zur Ausschmückung des Kontextes.)_

### ✅ Nachher (Mit der Pro Version)

```text
(Antwort der KI)
...Der Artikelentwurf ist abgeschlossen.

<Quellenprüfungs-Liste>
- **"Die Sicherheitspatches wurden angewendet."** (Quelle: Absatz 3 des Originals - "Wir haben gestern alle Sicherheitspatches auf dem Server installiert.")
- ⚠️ **[Achtung] Behauptungen über revolutionäre Veränderungen** (Diese Informationen konnten in der Quelle nicht gefunden werden und wurden daher aus dem Entwurf ausgeschlossen.)
```

_(Ergebnis: Erfundene Zitate werden proaktiv blockiert. Der Artikel ist sicher und basiert zu 100 % auf belegbaren Fakten aus der Quelle.)_

---

## 🎯 Fazit

KIs sind großartige "Assistenten", die die Produktivität in Nachrichtenredaktionen enorm steigern können. Sie sind jedoch nicht der "Chefredakteur", der die Verantwortung für die journalistische Integrität trägt. Bevor Sie auf den "Veröffentlichen"-Button klicken, ist eine rigorose, quellenbasierte Gegenprüfung keine Option mehr, sondern eine Überlebensnotwendigkeit.

Schützen Sie Ihre Karriere und die Glaubwürdigkeit Ihres Mediums vor den plausiblen Lügen der KI – mit dem Integritäts-Fact-Checker-Prompt! 🍷
