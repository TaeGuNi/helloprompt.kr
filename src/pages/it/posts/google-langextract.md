---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Padroneggiare l’estrazione di dati strutturati con Google LangExtract'
pubDate: 2024-05-20
description: 'Impara come estrarre JSON preciso e dati strutturati dagli LLM utilizzando la nuova libreria LangExtract di Google.'
author: 'Hello Prompt'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Google LangExtract Logo'
tags: ["Google", "LLM", "Data Extraction", "Python", "AI"]
---

Mentre i modelli linguistici di grandi dimensioni (LLM) sono eccellenti nello scrivere poesie o generare codice, spesso hanno difficoltà con il compito più necessario nelle applicazioni aziendali: **l'estrazione di dati strutturati**. Estrarre informazioni specifiche dal testo e adattarle accuratamente al formato JSON è stata una sfida con la sola ingegneria dei prompt.

Google ha recentemente svelato **LangExtract**, una nuova libreria Python che affronta questo problema di petto. In questo articolo esploreremo cos'è LangExtract e come può rivoluzionare i tuoi pipeline di dati.

## Cos'è LangExtract?

LangExtract opera sui modelli Gemini e Vertex AI di Google, convertendo i dati di testo non strutturati in oggetti strutturati (tipicamente modelli Pydantic o Dataclasses Python). Offre una **sicurezza dei tipi** e una **capacità di recupero errori** molto più robuste rispetto ai parser tradizionali di LangChain o alle semplici istruzioni dei prompt.

### Caratteristiche principali

1.  **Estrazione basata su schemi**: Definisci un modello Pydantic e forza l'LLM a generare dati che corrispondano esattamente a quello schema.
2.  **Auto-correzione (Self-Correction)**: Se il modello genera un formato errato, la libreria rileva automaticamente gli errori di parsing e chiede al modello di correggersi, ottenendo un risultato valido.
3.  **Ottimizzazione per Gemini**: Sfrutta le capacità di chiamata di funzioni degli ultimi modelli Gemini Pro e Flash di Google per eseguire compiti di estrazione in modo rapido ed economico.

## Esempio di utilizzo

Vediamo un esempio di estrazione di informazioni su una riunione da un semplice corpo di email.

```python
from google.langextract import DataExtractor
from pydantic import BaseModel, Field
from datetime import datetime

# 1. Definire lo schema per l'estrazione dei dati
class MeetingInfo(BaseModel):
    topic: str = Field(description="Argomento della riunione")
    participants: list[str] = Field(description="Elenco dei nomi dei partecipanti")
    start_time: datetime = Field(description="Orario di inizio della riunione")
    location: str | None = Field(description="Luogo della riunione (null se nessuno)")

# 2. Inizializzare l'estrattore (utilizzando il modello Gemini)
extractor = DataExtractor(model="gemini-1.5-flash")

email_content = """
Abbiamo programmato la riunione 'Strategia di Marketing Q3' per martedì prossimo alle 14:00.
I partecipanti sono Marco, Giulia e Luca.
Il luogo è la Sala Conferenze 301. Non fate tardi!
"""

# 3. Eseguire l'estrazione dei dati
meeting = extractor.extract(MeetingInfo, email_content)

print(meeting)
# Output:
# topic='Strategia di Marketing Q3'
# participants=['Marco', 'Giulia', 'Luca']
# start_time=datetime(2024, 5, 21, 14, 0)
# location='Sala Conferenze 301'
```

## Perché LangExtract?

In precedenza, dovevi usare espressioni regolari (Regex) o scrivere prompt complessi, ma con LangExtract, puoi costruire pipeline di dati con un approccio **code-first**. È particolarmente utile per estrarre argomenti chiave necessari per le risposte da documenti recuperati nei sistemi RAG (Retrieval-Augmented Generation), o strutturare le informazioni sugli ordini nei chatbot di assistenza clienti per passarle a un'API.

## Conclusione

Google LangExtract trasforma gli LLM da semplici chatbot in **motori di elaborazione dati affidabili**. Installalo oggi stesso e introducilo nei tuoi progetti. Il dolore della pre-elaborazione dei dati sarà drasticamente ridotto.
