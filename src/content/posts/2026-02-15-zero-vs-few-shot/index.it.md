---
title: "Zero-Shot vs Few-Shot Learning: Quando fornire esempi"
date: "2026-02-15"
description: "Una guida per capire quando usare il prompting zero-shot rispetto al few-shot per ottenere prestazioni ottimali dagli LLM."
---

Nel mondo dei Grandi Modelli Linguistici (LLM), _come_ chiedi qualcosa è importante tanto quanto _cosa_ chiedi. Due delle tecniche più fondamentali nel prompt engineering sono l'apprendimento **Zero-Shot** e **Few-Shot**. Comprendere la differenza — e sapere quando applicare ciascuna — può elevare significativamente la qualità delle tue interazioni con l'IA.

## Cos'è l'apprendimento Zero-Shot?

Il prompting **Zero-Shot** consiste nel chiedere al modello di eseguire un compito senza fornire esempi specifici dell'output desiderato. Ti affidi interamente alla conoscenza pre-addestrata del modello e alla sua capacità di comprendere le istruzioni in linguaggio naturale.

**Esempio:**

"Traduci la seguente frase in spagnolo: 'Oggi il tempo è bello.'"

Qui, non hai mostrato al modello _come_ tradurre; gli hai semplicemente detto _di_ tradurre.

### Quando usare Zero-Shot:

- **Compiti di conoscenza generale:** Traduzioni standard, riassunti o risposte a domande fattuali.
- **Istruzioni semplici:** Quando il compito è diretto e non richiede un formato specifico e complesso.
- **Scrittura creativa:** Quando vuoi che il modello sia aperto e meno vincolato da uno schema rigido.
- **Test iniziali:** Spesso è meglio iniziare con zero-shot per vedere come si comporta il modello "appena uscito dalla scatola" prima di aggiungere complessità.

## Cos'è l'apprendimento Few-Shot?

Il prompting **Few-Shot** (spesso chiamato "Apprendimento nel Contesto") implica fornire al modello alcuni esempi (shots) dell'input e dell'output desiderato prima della richiesta effettiva. Questi esempi servono come modello da seguire.

**Esempio:**

Traduci dall'inglese a uno slang piratesco specifico.
Inglese: "Hello, how are you?"
Pirata: "Ahoy matey, how be ye fairin'?"
Inglese: "Where is the bathroom?"
Pirata: "Where be the head?"
Inglese: "I would like some water."
Pirata:

Vedendo le coppie precedenti, il modello capisce non solo che deve tradurre, ma anche il **tono** e lo **stile** specifici richiesti.

### Quando usare Few-Shot:

- **Formattazione complessa:** Quando hai bisogno dell'output in una struttura specifica (ad es. JSON, CSV o uno stile di documento specifico) che il modello non riesce a produrre con le sole istruzioni.
- **Stile/Tono sfumato:** Quando si imita una voce specifica, un'identità di marca o uno stile linguistico.
- **Logica difficile:** Per i compiti di ragionamento, fornire esempi della "catena di pensiero" può aiutare a guidare il modello verso la conclusione corretta.
- **Concetti nuovi o personalizzati:** Se stai usando parole inventate o terminologia di dominio specifica, gli esempi le definiscono nel contesto.

## Il compromesso (Trade-off)

Mentre Few-Shot offre spesso una maggiore precisione per compiti complessi, ha un costo: la **Finestra di Contesto**.

Ogni esempio che fornisci consuma token. In conversazioni o documenti molto lunghi, riempire il prompt con troppi esempi potrebbe limitare lo spazio disponibile per il contenuto effettivo che desideri elaborare.

## Conclusione

Inizia con **Zero-Shot**. I modelli moderni come GPT-4 e Claude 3 sono notevolmente capaci senza esempi. Se il modello non riesce a seguire il tuo formato o stile, passa a **Few-Shot** aggiungendo 1-3 esempi chiari e di alta qualità. Questo approccio iterativo assicura di bilanciare efficienza e prestazioni.
