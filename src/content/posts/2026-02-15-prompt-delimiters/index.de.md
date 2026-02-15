---
title: "Die Verwendung von Trennzeichen in Prompts: Warum XML-Tags wichtig sind"
date: "2026-02-15"
description: "Erfahren Sie, wie Sie Daten und Anweisungen in LLM-Prompts klar voneinander trennen und warum XML-Tags die effektivsten Trennzeichen sind."
---

Einer der häufigsten Fehler bei der Arbeit mit großen Sprachmodellen (LLMs) besteht darin, Anweisungen (System Prompt) und Daten (User Input) nicht klar zu unterscheiden. Dies kann dazu führen, dass das Modell Daten fälschlicherweise als Anweisungen interpretiert oder unerwünschte Halluzinationen erzeugt.

Die zuverlässigste Lösung für dieses Problem ist die Verwendung von **Trennzeichen** (Delimiters). Schauen wir uns an, warum **XML-Tags** zum Industriestandard geworden sind.

## Was sind Trennzeichen?

Trennzeichen fungieren als Wegweiser, die bestimmte Textteile isolieren und dem Modell sagen: "Von hier bis hier sind es Daten, kein Befehl."

Häufig verwendete Trennzeichen sind:

- Dreifache Anführungszeichen: `"""Text"""`
- Bindestriche: `---Text---`
- Eckige Klammern: `[Text]`
- **XML-Tags**: `<tag>Text</tag>`

## Warum speziell XML-Tags?

Moderne Modelle wie Claude von Anthropic und die GPT-Serie von OpenAI wurden auf riesigen Mengen an HTML- und XML-Daten trainiert. Daher haben sie ein angeborenes Verständnis für die durch öffnende `<tag>` und schließende `</tag>` Elemente definierte Struktur.

### 1. Klarer Start und Ende

Dreifache Anführungszeichen (`"""`) können Verwirrung stiften, wenn die Daten selbst Anführungszeichen enthalten. XML-Tags hingegen haben ein eindeutiges schließendes Tag (`</tag>`), was die Struktur unmissverständlich macht.

### 2. Semantischer Kontext

Tag-Namen geben dem Modell Hinweise auf die Art der Daten.

- `<article>`: Artikeltext
- `<rules>`: Zu befolgende Regeln
- `<examples>`: Few-Shot-Beispiele

### 3. Verhinderung von Prompt-Injection

Selbst wenn ein böswilliger Benutzer Text eingibt wie "Ignorieren Sie die vorherigen Anweisungen...", erhöht das Einschließen in `<user_input>`-Tags die Wahrscheinlichkeit erheblich, dass das Modell ihn als zu verarbeitende Daten und nicht als auszuführenden Befehl behandelt.

## Beispiele

**Schlechtes Beispiel:**

```text
Fassen Sie den Text unten zusammen.
[Benutzereingabe...]
```

**Gutes Beispiel (mit XML):**

```text
Bitte fassen Sie den Text innerhalb der <document>-Tags zusammen.

<document>
[Benutzereingabe...]
</document>
```

## Fazit

Der Kern des Prompt Engineering ist die Beseitigung von Mehrdeutigkeiten. Wenn Ihre Aufgaben komplexer werden, gewöhnen Sie sich an, XML-Tags zur Strukturierung Ihrer Prompts zu verwenden. Sie werden eine signifikante Verbesserung der Modellleistung und -zuverlässigkeit feststellen.
