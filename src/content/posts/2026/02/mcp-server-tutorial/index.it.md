---
title: " \"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\""
description: "Lo standard USB per LLM, MCP (Model Context Protocol). Scopri il prompt per creare un server personalizzato che collega i tuoi dati locali direttamente a Claude o Ollama, invece di dover copiare e incollare gli schemi JSON ogni volta."
author: "Unifactory Editor"
date: "2026-02-16"
tags:
  [
    "MCP",
    "Model Context Protocol",
    "Local LLM",
    "TypeScript",
    "Ollama",
    "Claude",
  ]
image: "/images/2026/02/16/mcp-server-tutorial.jpg"
---

# 📝 Basta Copia e Incolla: Crea il Tuo Primo Server MCP in 5 Minuti

- **🎯 Consigliato per:** Sviluppatori stanchi di incollare schemi DB o documentazioni API in ogni prompt, utenti che lavorano con dati locali
- **⏱️ Tempo richiesto:** 5 minuti → Risparmio di tempo permanente
- **🤖 Modelli consigliati:** Claude Desktop, Ollama e tutti i modelli compatibili con MCP

- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Apri Claude e incolli lo schema del database. Passano dieci minuti, apri una nuova finestra e lo incolli di nuovo. È giunto il momento di spezzare questo ciclo infinito e frustrante."_

Oggi, l'**MCP (Model Context Protocol)** si è affermato come lo standard de facto per connettere gli LLM ai tuoi dati. Immaginalo come una vera e propria "porta USB" per l'Intelligenza Artificiale. Invece di dover fornire manualmente il contesto a ogni interazione, ti basta configurare un server una sola volta: da quel momento, il modello "leggerà" automaticamente e in tempo reale i tuoi file, i database e le API interne.

Esistono già eccellenti server MCP generici per integrare GitHub o il filesystem locale. Tuttavia, il vero potenziale si sprigiona quando colleghi direttamente all'LLM la **logica di business specifica della tua azienda**.

In questa guida, anziché farti scrivere noiose righe di codice boilerplate, ti forniremo un prompt capace di istruire l'IA a realizzare lo scaffolding di un server MCP su misura, basato su TypeScript e pronto all'uso in soli 5 minuti.

---

## ⚡️ Sintesi in 3 Punti (TL;DR)

1. **Addio al copia e incolla:** Sfrutta MCP per consentire all'LLM di accedere in modo diretto ai tuoi dati locali (database, log, API).
2. **Generazione del server via prompt:** Crea automaticamente il codice per un server MCP completo con un singolo comando, senza impazzire tra configurazioni complesse.
3. **Privacy assoluta:** I tuoi dati non abbandonano mai l'ambiente locale; vengono semplicemente trasmessi in streaming alla context window del modello.

---

## 🚀 La Soluzione: "MCP Server Scaffolder"

### 🥉 Versione Basic

Ideale quando hai bisogno esclusivamente e in tempi rapidi della struttura di base del tuo server MCP.

> **Ruolo:** Sei uno Sviluppatore TypeScript Senior.
> **Task:** Scrivi il codice per un semplice server MCP utilizzando `@modelcontextprotocol/sdk` con il seguente scopo: `[Inserisci lo scopo, es: fornire il meteo di una determinata città]`.

### 🥇 Versione Pro

La scelta perfetta quando necessiti di un codice server robusto, scalabile e immediatamente pronto per la produzione.

> **Ruolo (Role):** Sei un Senior TypeScript Engineer, massimo esperto nell'ecosistema Model Context Protocol (MCP).
>
> **Contesto (Context):**
>
> - Background: Ho la necessità di creare un server MCP su misura per integrare i miei dati locali o le mie API interne con un LLM.
> - Obiettivo: Generare il codice per un server MCP completo, pienamente eseguibile all'interno di un singolo file (`index.ts`) e perfettamente modellato sulle mie specifiche esigenze.
>
> **Task (Task):**
>
> 1. Scrivi il codice di un server MCP che soddisfi i seguenti requisiti:
>    - **Scopo:** `[Descrivi nel dettaglio lo scopo del server. Es: Leggere le ultime 50 righe di uno specifico file di log]`
> 2. Struttura il codice in modo che sia pronto per il copia-incolla. Includi commenti chiari per consentire all'utente di eseguirlo immediatamente da terminale.
>
> **Vincoli (Constraints):**
>
> - Utilizza rigorosamente l'SDK ufficiale `@modelcontextprotocol/sdk`.
> - Se i parametri di input del tool risultano complessi, adotta la libreria `zod` per la validazione dello schema (fortemente consigliato).
> - Implementa in modo impeccabile le interfacce `ListToolsRequestSchema` e `CallToolRequestSchema` durante l'inizializzazione del server.
> - Includi sempre un'adeguata gestione delle eccezioni (`try/catch`) all'interno dell'handler del tool, per scongiurare qualsiasi crash del server.
> - **Fornisci esclusivamente un singolo blocco di codice TypeScript, omettendo qualsiasi spiegazione aggiuntiva.**
>
> **Avvertenze (Warning):**
>
> - Non inventare mai metodi SDK inesistenti. In caso di dubbi, affidati alle API Node.js standard per risolvere il problema.

---

## 💡 L'Insight dell'Autore (Insight)

Il segreto di questo prompt non risiede nel chiedere in modo generico all'IA di "scrivere del codice", bensì nell'imporre i **requisiti fondamentali del protocollo (la corretta gestione delle richieste ListTools e CallTool)**, condizioni indispensabili per il funzionamento di qualsiasi server MCP.

Il vantaggio più straordinario nel costruire un server MCP su misura è la **privacy assoluta**. Mentre i normali strumenti di ricerca web inviano le tue query verso server di terze parti, un server MCP personalizzato (magari connesso al tuo database PostgreSQL locale o a un'API aziendale interna) assicura che i dati vengano trasmessi in modo sicuro e sempre sotto il tuo completo controllo. Non avrai mai più bisogno di copiare documenti sensibili per incollarli nella finestra di chat.

Ti suggerisco di iniziare sfruttando questo prompt per creare tool semplici in "sola lettura" (Read-only), come ad esempio l'analisi di file di log locali. Una volta acquisita familiarità con il meccanismo, potrai estenderne le capacità fino a poter modificare direttamente i database, dando vita al tuo assistente IA definitivo.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Posso usare questo prompt anche se non so programmare?**
  - A: Assolutamente sì! Ti basterà descrivere il tuo `[Scopo]` in linguaggio naturale (ad esempio: "crea una funzione che mi dica il meteo di Roma"), e Claude genererà il codice perfetto al posto tuo. Non dovrai fare altro che copiare e incollare il risultato nel tuo ambiente di esecuzione.

- **Q: Come eseguo e collego il codice del server generato?**
  - A: Salva il codice in un file `index.ts`, quindi aggiungi il percorso di questo script all'interno della sezione `mcpServers` nel file di configurazione di Claude Desktop (`claude_desktop_config.json`). Da quel momento, l'integrazione sarà del tutto automatica.

- **Q: Il server creato con questo prompt funziona solo su Claude?**
  - A: Affatto. Il Model Context Protocol è uno standard aperto; questo significa che il tuo server funzionerà in modo impeccabile anche con Ollama, Cursor e qualsiasi altro client o piattaforma che supporti MCP.

---

## 🧬 Anatomia del Prompt (Why it works?)

1. **Controllo rigoroso dei vincoli (Constraints):** Imponendo l'utilizzo di `@modelcontextprotocol/sdk` e `zod`, e specificando in modo esplicito gli schemi obbligatori (`ListToolsRequestSchema`, `CallToolRequestSchema`), impediamo all'IA di soffrire di allucinazioni e di generare codice non standard.
2. **Output concentrato su un singolo file:** Richiedendo una struttura a file singolo (`index.ts`) priva di divagazioni esplicative, massimizziamo la velocità di test e il Time-to-Value per l'utente, aggirando del tutto la complessità dei progetti frammentati in più directory.
3. **Gestione obbligatoria degli errori:** Abbiamo imposto a monte l'uso sistematico di blocchi `try/catch`, garantendo che un banale errore durante l'esecuzione di un singolo tool non causi il crash dell'intero server MCP.

---

## 📊 Prima & Dopo (Before & After)

### ❌ Prima (Input)

```text
User:
(Copia e incolla di un intero file my_database_schema.sql di migliaia di righe)
(Copia e incolla di un intero file internal_api_docs.md di centinaia di righe)

Basandoti su questo schema, scrivi una query per trovare quanti utenti si sono registrati oggi, e spiegami come devo chiamare l'API seguendo questa documentazione.
```

### ✅ Dopo (Risultato)

```text
User:
Quanti utenti si sono registrati oggi? (Claude chiama automaticamente il tool MCP in background)

Claude:
Ho interrogato il database interno. Il numero totale di nuovi utenti registrati oggi è 150.
```

---

## 🎯 Conclusione

L'era in cui eravamo costretti a inserire meccanicamente tonnellate di contesto nelle chat dell'IA è giunta al termine. Ora è il momento di sfruttare l'IA come una vera e propria infrastruttura, connettendo i tuoi dati al modello in modalità "Plug-in".

Elimina definitivamente il tempo sprecato nei noiosi copia-incolla ed esegui lo scaffolding del tuo server MCP perfetto in soli 5 minuti. Ora puoi davvero staccare dal lavoro in orario! 🍷
