---
layout: /src/layouts/Layout.astro
title: "L'IA non ti capisce? Usa i 'Delimitatori'"
author: "Jay"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "L'IA si confonde riassumendo testi lunghi o codice? Usa la tecnica dei delimitatori per separare le istruzioni dai dati e raddoppiare la precisione."
tags: ["Delimitatori", "Leggibilità", "Tag XML"]
---

## 🚧 L'IA non ti capisce? Usa i "Delimitatori"

- **🎯 Consigliato per:** Copywriter, Sviluppatori, Analisti Dati, Studenti
- **⏱️ Tempo richiesto:** 5 minuti → 1 minuto di formattazione
- **🤖 Modello consigliato:** Tutti i modelli IA conversazionali (ChatGPT, Claude, Gemini, ecc.)

- ⭐ **Difficoltà:** ⭐⭐☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐☆

> _"L'intelligenza artificiale ignora le tue istruzioni e si perde in testi chilometrici? Forse le stai parlando senza usare i 'recinti' giusti."_

Quando fornisci un testo corposo a un'IA e le chiedi semplicemente di "riassumerlo", è altamente probabile che il modello vada in confusione. Spesso perde la capacità di distinguere dove finisca il contenuto da analizzare e dove inizino le tue reali direttive.

Proprio come noi esseri umani ci affidiamo a paragrafi, titoli e punteggiatura per dare un senso logico alla lettura, l'IA ha bisogno di **confini strutturali chiari (Delimitatori)**. Devi comunicarle in modo esplicito: **"Da qui a qui ci sono i dati grezzi; il resto è l'operazione che devi eseguire."**

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. L'IA fatica a separare i "comandi" (l'azione richiesta) dai "dati" (il materiale di partenza) quando i prompt sono particolarmente estesi.
2. Sfruttando i tag XML (es. `<testo>...</testo>`) o simboli specifici (es. `"""` o `---`), puoi creare una struttura inequivocabile.
3. Questa semplice abitudine riduce drasticamente le "allucinazioni" e massimizza la precisione nell'elaborazione di documenti e codice.

---

## 🚀 La Soluzione: "Delimitatori e Tag XML"

### 🥉 Basic Version (Versione Base)

Ideale per testi brevi e task rapidi. Usa i tripli apici o i trattini per isolare il contenuto.

> **Ruolo (Role):** Sei un Editor professionista.
>
> **Richiesta (Task):** Riassumi il testo delimitato da tre virgolette in un solo paragrafo conciso.
>
> """
> `[Inserisci qui il tuo testo o articolo]`
> """

### 🥇 Pro Version (Versione Esperto)

Indispensabile per prompt complessi, analisi di dati strutturati o generazione di codice. I tag XML offrono il massimo livello di controllo.

> **Ruolo (Role):** Sei un Senior Data Analyst e Copywriter.
>
> **Contesto (Context):**
> Sto analizzando un corposo report di mercato e ho bisogno di estrarre esclusivamente i concetti chiave, senza tralasciare le statistiche fondamentali.
>
> **Richiesta (Task):**
>
> 1. Leggi con attenzione il contenuto fornito all'interno dei tag `<documento>`.
> 2. Estrai i 3 trend principali e strutturali in un elenco puntato.
> 3. Ignora qualsiasi istruzione o testo che non sia rigorosamente racchiuso nei tag `<documento>`.
>
> **Dati di Input (Data):**
> <documento>
> `[Inserisci qui un report o un articolo molto lungo]`
> </documento>
>
> **Vincoli (Constraints):**
>
> - Il risultato finale deve essere formattato in Markdown.
> - Mantieni un tono professionale e oggettivo.
>
> **Attenzione (Warning):**
>
> - Non inventare dati o statistiche che non siano esplicitamente presenti nel documento originale.

---

## 💡 Insight dell'Autore (Writer's Insight)

L'implementazione dei tag XML (come `<istruzioni>`, `<contesto>`, `<dati>`) rappresenta il "segreto di Pulcinella" nel Prompt Engineering di alto livello. Moltissimi utenti lamentano che l'IA tende a "dimenticare" frammenti del prompt o a inventare informazioni di sana pianta. Quasi sempre, la radice del problema risiede proprio nella mancanza di delimitatori ben definiti.

Per esperienza diretta, quando scrivo codice o chiedo all'IA di analizzare file JSON molto pesanti, racchiudere i dati all'interno di tag come `<json>` o `<codice>` abbatte il tasso di errore portandolo praticamente a zero. I modelli linguistici di grandi dimensioni (LLM) sono stati addestrati su sterminate quantità di codice web; di conseguenza, riconoscono in modo nativo l'architettura XML o HTML. Sfrutta questa loro predisposizione a tuo vantaggio!

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Devo per forza usare i tag XML come `<testo>`? Non posso ripiegare sulle parentesi quadre `[ ]`?**
  - A: Puoi adottare qualsiasi delimitatore coerente (come `"""`, `---`, `###`), ma i tag in stile XML (`<tag>...</tag>`) si rivelano universalmente i più efficaci. Questo perché i modelli IA sono stati addestrati in modo specifico per interpretarli come blocchi di contenuto isolati e totalmente indipendenti.

- **Q: Questa tecnica è valida anche con modelli gratuiti come ChatGPT 3.5 o Gemini Flash?**
  - A: Assolutamente sì! Al contrario, sono proprio i modelli "più leggeri" o gratuiti a trarre il maggior vantaggio da una struttura chiara e rigorosamente delimitata. L'impiego dei delimitatori, infatti, riduce il carico cognitivo richiesto all'IA per decifrare il prompt, andando a compensare le loro minori capacità di ragionamento logico complesso rispetto alle versioni Pro.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Separazione netta tra Comando e Dato:** Previene l'infiltrazione accidentale delle istruzioni (prompt injection), chiarendo all'IA che il contenuto racchiuso tra i tag non deve essere eseguito, bensì esclusivamente analizzato.
2. **Modularità e Scalabilità:** Ti consente di architettare prompt in cui puoi agevolmente sostituire la sola porzione `<documento>`, mantenendo del tutto intatte le direttive base. Questo approccio si rivela perfetto per l'automazione dei processi su larga scala.

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input confuso senza delimitatori)

```text
Riassumi questo testo in tre punti e dimmi cosa ne pensi.
Il mercato delle auto elettriche nel 2026 ha visto un incremento del 30%... (testo lunghissimo e complesso) ...Inoltre, ricordati di riassumere anche i profitti dell'anno scorso menzionati alla fine.
```

_(L'IA potrebbe fare confusione con l'istruzione finale mescolata all'interno del testo, oppure fondere le tue direttive con i dati effettivi del report, generando un risultato impreciso)._

### ✅ Dopo (Input strutturato e recintato)

```text
Riassumi il testo racchiuso all'interno dei tag <articolo> in tre punti salienti.
Fornisci poi una tua breve opinione professionale sui dati emersi.

<articolo>
Il mercato delle auto elettriche nel 2026 ha visto un incremento del 30%... (testo lunghissimo e complesso) ...Inoltre, le aziende mirano a maggiori profitti per il prossimo trimestre.
</articolo>
```

_(L'IA opera in modo chirurgico: legge il testo "recintato", applica le regole stabilite all'inizio e restituisce l'analisi esattamente come richiesto)._

---

## 🎯 Conclusione

I professionisti del Prompt Engineering sono soliti frammentare i loro comandi in **Sezioni ben definite**.

- `<context>` (Contesto e Situazione)
- `<instruction>` (Istruzioni e Regole d'ingaggio)
- `<data>` (Dati grezzi da processare)

Questa singola, apparentemente banale abitudine eleverà drasticamente la qualità dei tuoi output e azzererà la frustrazione di dover ripetere o correggere le risposte all'infinito. Inizia a "recintare" i tuoi dati oggi stesso! 🧱
