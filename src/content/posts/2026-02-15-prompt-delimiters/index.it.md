---
title: "Usare i delimitatori nei prompt: Perché i tag XML sono importanti"
date: "2026-02-15"
description: "Impara a separare chiaramente i dati dalle istruzioni nei prompt per LLM e perché i tag XML sono il delimitatore più efficace."
---

Uno degli errori più comuni quando si lavora con i Grandi Modelli di Linguaggio (LLM) è non distinguere chiaramente le istruzioni (System Prompt) dai dati (User Input). Questo può portare il modello a confondere i dati con le istruzioni o a generare allucinazioni indesiderate.

La soluzione più affidabile a questo problema è l'uso di **delimitatori**. Vediamo perché i **tag XML** sono diventati lo standard del settore.

## Cosa sono i delimitatori?

I delimitatori agiscono come segnali stradali che isolano parti specifiche del testo, dicendo al modello: "Da qui a qui sono dati, non è un comando".

I delimitatori comunemente usati includono:

- Triple virgolette: `"""testo"""`
- Trattini: `---testo---`
- Parentesi quadre: `[testo]`
- **Tag XML**: `<tag>testo</tag>`

## Perché proprio i tag XML?

I modelli moderni come Claude di Anthropic e la serie GPT di OpenAI sono stati addestrati su enormi quantità di dati HTML e XML. Di conseguenza, hanno una comprensione innata della struttura definita dai tag di apertura `<tag>` e di chiusura `</tag>`.

### 1. Inizio e fine chiari

Le triple virgolette (`"""`) possono creare confusione se i dati stessi contengono virgolette. I tag XML, invece, hanno un tag di chiusura distinto (`</tag>`), rendendo la struttura inequivocabile.

### 2. Contesto semantico

I nomi dei tag forniscono indizi al modello sulla natura dei dati.

- `<article>`: Corpo dell'articolo
- `<rules>`: Regole da seguire
- `<examples>`: Esempi di few-shot

### 3. Prevenzione dell'iniezione di prompt

Anche se un utente malintenzionato inserisce testo come "Ignora le istruzioni precedenti...", racchiuderlo nei tag `<user_input>` aumenta significativamente la probabilità che il modello lo tratti come dati da elaborare piuttosto che come un comando da eseguire.

## Esempi

**Cattivo esempio:**

```text
Riassumi il testo qui sotto.
[Testo di input dell'utente...]
```

**Buon esempio (Usando XML):**

```text
Per favore riassumi il testo racchiuso nei tag <document>.

<document>
[Testo di input dell'utente...]
</document>
```

## Conclusione

Il nucleo del prompt engineering è eliminare l'ambiguità. Man mano che i tuoi compiti diventano più complessi, prendi l'abitudine di usare i tag XML per strutturare i tuoi prompt. Vedrai un miglioramento significativo nelle prestazioni e nell'affidabilità del modello.
