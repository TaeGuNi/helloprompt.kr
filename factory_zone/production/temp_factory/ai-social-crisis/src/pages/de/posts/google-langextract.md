---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Strukturierte Datenextraktion meistern mit Google LangExtract"
date: 2024-05-20
pubDate: 2024-05-20
description: "Lernen Sie, wie Sie mit der neuen LangExtract-Bibliothek von Google präzises JSON und strukturierte Daten aus LLMs extrahieren."
author: "Hello Prompt"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "Google LangExtract Logo"
tags: ["Google", "LLM", "Data Extraction", "Python", "AI"]
---

Während große Sprachmodelle (LLMs) großartig darin sind, Gedichte zu schreiben oder Code zu generieren, haben sie oft Schwierigkeiten mit der Aufgabe, die in Geschäftsanwendungen am dringendsten benötigt wird: der **strukturierten Datenextraktion**. Spezifische Informationen aus Texten zu extrahieren und sie genau in das JSON-Format einzupassen, war allein mit Prompt Engineering eine Herausforderung.

Google hat kürzlich **LangExtract** vorgestellt, eine neue Python-Bibliothek, die dieses Problem frontal angeht. In diesem Artikel werden wir untersuchen, was LangExtract ist und wie es Ihre Datenpipelines revolutionieren kann.

## Was ist LangExtract?

LangExtract arbeitet auf der Basis von Googles Gemini- und Vertex AI-Modellen und wandelt unstrukturierte Textdaten in strukturierte Objekte um (typischerweise Pydantic-Modelle oder Python Dataclasses). Es bietet eine viel stärkere **Typsicherheit** und **Fehlerkorrekturfähigkeit** als herkömmliche LangChain-Parser oder einfache Prompt-Anweisungen.

### Hauptmerkmale

1.  **Schema-basierte Extraktion**: Definieren Sie ein Pydantic-Modell und zwingen Sie das LLM, Daten zu generieren, die genau diesem Schema entsprechen.
2.  **Selbstkorrektur (Self-Correction)**: Wenn das Modell ein falsches Format ausgibt, erkennt die Bibliothek automatisch Parsing-Fehler und fordert das Modell auf, sich selbst zu korrigieren, um ein gültiges Ergebnis zu erhalten.
3.  **Gemini-Optimierung**: Es nutzt die Function-Calling-Funktionen der neuesten Gemini Pro- und Flash-Modelle von Google, um Extraktionsaufgaben schnell und kostengünstig durchzuführen.

## Anwendungsbeispiel

Lassen Sie uns ein Beispiel für die Extraktion von Meeting-Informationen aus einem einfachen E-Mail-Text betrachten.

```python
from google.langextract import DataExtractor
from pydantic import BaseModel, Field
from datetime import datetime

# 1. Definieren des Schemas für die Datenextraktion
class MeetingInfo(BaseModel):
    topic: str = Field(description="Thema des Meetings")
    participants: list[str] = Field(description="Liste der Teilnehmernamen")
    start_time: datetime = Field(description="Startzeit des Meetings")
    location: str | None = Field(description="Ort des Meetings (null falls keiner)")

# 2. Initialisieren des Extraktors (unter Verwendung des Gemini-Modells)
extractor = DataExtractor(model="gemini-1.5-flash")

email_content = """
Wir haben das Meeting 'Q3 Marketingstrategie' für nächsten Dienstag um 14 Uhr angesetzt.
Teilnehmer sind Jan, Lisa und Peter.
Der Ort ist Konferenzraum 301. Seien Sie pünktlich!
"""

# 3. Ausführen der Datenextraktion
meeting = extractor.extract(MeetingInfo, email_content)

print(meeting)
# Ausgabe:
# topic='Q3 Marketingstrategie'
# participants=['Jan', 'Lisa', 'Peter']
# start_time=datetime(2024, 5, 21, 14, 0)
# location='Konferenzraum 301'
```

## Warum LangExtract?

Früher mussten Sie reguläre Ausdrücke (Regex) verwenden oder komplexe Prompts schreiben, aber mit LangExtract können Sie Datenpipelines nach dem **Code-First**-Ansatz erstellen. Es ist besonders nützlich, um Schlüsselargumente für Antworten aus abgerufenen Dokumenten in RAG-Systemen (Retrieval-Augmented Generation) zu extrahieren oder Bestellinformationen in Kundensupport-Chatbots zu strukturieren, um sie an eine API weiterzugeben.

## Fazit

Google LangExtract verwandelt LLMs von einfachen Chatbots in **zuverlässige Datenverarbeitungs-Engines**. Installieren Sie es noch heute und führen Sie es in Ihre Projekte ein. Der Aufwand für die Datenvorverarbeitung wird drastisch reduziert.
