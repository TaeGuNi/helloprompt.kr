---
title: " \"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\""
description: " \"Lo standard USB per LLM, MCP (Model Context Protocol). Scopri il prompt per creare un server personalizzato che collega i tuoi dati locali direttamente a Claude o Ollama, invece di copiare e incollare gli schemi JSON ogni volta.\""
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

- **🎯 Consigliato per:** Sviluppatori stanchi di incollare schemi DB o documenti API in ogni prompt, utenti di dati locali
- **⏱️ Tempo richiesto:** 5 minuti → Risparmio di tempo permanente
- **🤖 Modelli consigliati:** Claude Desktop, Ollama e altri modelli che supportano MCP

- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Apri Claude e incolli lo schema del DB. Dopo 10 minuti apri una nuova finestra e lo incolli di nuovo. È giunto il momento di mettere fine a questo ciclo infinito e frustrante."_

Nel 2026, l'**MCP (Model Context Protocol)** è diventato lo standard de facto per collegare gli LLM ai dati. Immaginalo come una 'porta USB' per i modelli IA. Invece di dover fornire manualmente il contesto ogni singola volta, ti basta collegare un server una volta sola e il modello "leggerà" automaticamente e in tempo reale i tuoi file, database e API interne.

Esistono già eccellenti server MCP generici per connettere GitHub o il filesystem. Tuttavia, il vero potere si sprigiona quando colleghi **'la logica di business specifica della tua azienda'** all'LLM.

Oggi, invece di scrivere noiose righe di codice boilerplate, ti presentiamo un prompt che istruisce l'IA a effettuare lo scaffolding di un server MCP personalizzato, basato su TypeScript e perfettamente funzionante, in soli 5 minuti.

---

## ⚡️ Sintesi in 3 Punti (TL;DR)

1. **Fine del copia e incolla:** Usa MCP per permettere all'LLM di accedere direttamente ai tuoi dati locali (DB, log, API).
2. **Creazione del server via prompt:** Genera automaticamente il codice per un server MCP completo con un singolo prompt, senza configurazioni complesse.
3. **Privacy assoluta:** I dati non lasciano mai il tuo ambiente locale; vengono trasmessi in streaming direttamente alla context window del modello.

---

## 🚀 La Soluzione: "MCP Server Scaffolder"

### 🥉 Versione Basic

Utilizza questa versione quando hai bisogno rapidamente solo della struttura di base del server MCP.

> **Ruolo:** Sei uno sviluppatore TypeScript Senior.
> **Task:** Scrivi il codice per un semplice server MCP utilizzando `@modelcontextprotocol/sdk` che abbia il seguente scopo: `[Inserisci lo scopo, es: fornire il meteo di una città specifica]`.

<br>

### 🥇 Versione Pro

Utilizza questa versione quando hai bisogno di un codice server robusto, scalabile e pronto per la produzione.

> **Ruolo (Role):** Sei un Ingegnere TypeScript Senior, esperto nell'ecosistema Model Context Protocol (MCP).
>
> **Contesto (Context):**
>
> - Background: Ho bisogno di un server MCP personalizzato per integrare i miei dati locali o le mie API interne con un LLM.
> - Obiettivo: Devi generare il codice per un server MCP completo ed eseguibile in un singolo file (`index.ts`), perfettamente adattato alle mie esigenze.
>
> **Task (Task):**
>
> 1. Scrivi il codice del server MCP che soddisfi i seguenti requisiti:
>    - **Scopo:** `[Descrivi dettagliatamente lo scopo del server. Es: Leggere le ultime 50 righe di un file di log specifico]`
> 2. Struttura il codice in modo che sia pronto per il copia-incolla, includendo commenti esplicativi affinché l'utente possa eseguirlo immediatamente nel terminale.
>
> **Vincoli (Constraints):**
>
> - Devi usare rigorosamente l'SDK ufficiale `@modelcontextprotocol/sdk`.
> - Se i parametri di input dello strumento sono complessi, utilizza il pacchetto `zod` per la convalida dello schema (consigliato).
> - Devi implementare in modo impeccabile le interfacce `ListToolsRequestSchema` e `CallToolRequestSchema` durante la creazione del server.
> - Includi sempre la logica di gestione delle eccezioni (`try/catch`) all'interno dell'handler del tool per evitare che il server vada in crash.
> - **Fornisci esclusivamente un singolo blocco di codice TypeScript, senza alcuna spiegazione aggiuntiva.**
>
> **Avvertenze (Warning):**
>
> - Non inventare metodi SDK inesistenti. In caso di dubbio, utilizza le API Node.js standard per aggirare il problema.

---

## 💡 L'Insight dell'Autore (Insight)

Il segreto di questo prompt non sta nel chiedere vagamente all'IA di "scrivere del codice", ma nell'imporre i **requisiti fondamentali del protocollo (la gestione delle richieste ListTools e CallTool)** che un server MCP deve assolutamente soddisfare.

Il vantaggio più grande di costruire e utilizzare il proprio server MCP è la **privacy assoluta**. Mentre gli strumenti di ricerca web generici inviano le tue query a server esterni, un server MCP personalizzato connesso a un database PostgreSQL locale o a un'API interna garantisce che i dati vengano trasmessi in modo sicuro e solo sotto il tuo totale controllo. Non ci sarà più alcun bisogno di copiare documenti interni sensibili per incollarli nella finestra della chat.

Inizia utilizzando questo prompt per creare strumenti semplici in "sola lettura" (Read-only), come la lettura dei file di log locali. Una volta compreso il meccanismo, potrai espandere le funzionalità per modificare i database, creando così il tuo assistente IA personale definitivo.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Posso usare questo prompt anche se non so programmare?**
  - A: Assolutamente sì! Basta descrivere il tuo `[Scopo]` in linguaggio naturale, come "crea una funzione che mi dica il meteo di Roma", e Claude genererà il codice perfetto per te. Dovrai solo copiare il codice e incollarlo nel tuo ambiente di esecuzione.

- **Q: Come eseguo e collego il codice del server generato?**
  - A: Salva il codice come `index.ts`, poi aggiungi il percorso di questo script alla sezione `mcpServers` nel file di configurazione di Claude Desktop (`claude_desktop_config.json`). L'integrazione avverrà automaticamente.

- **Q: Il server creato con questo prompt funziona solo su Claude?**
  - A: No. Il Model Context Protocol è uno standard aperto, il che significa che funzionerà perfettamente con Ollama, Cursor e qualsiasi altra piattaforma o client che supporti MCP.

---

## 🧬 Anatomia del Prompt (Why it works?)

1.  **Controllo rigoroso dei Vincoli (Constraints):** Imponendo l'uso di `@modelcontextprotocol/sdk` e `zod`, e specificando gli schemi obbligatori (`ListToolsRequestSchema`, `CallToolRequestSchema`), impediamo all'IA di avere allucinazioni e generare codice fuori standard.
2.  **Output focalizzato su un singolo file di codice:** Richiedendo una struttura a file singolo (`index.ts`) senza spiegazioni aggiuntive, massimizziamo la velocità di test e il Time-to-Value per l'utente, evitando la complessità di progetti frammentati in più file.
3.  **Gestione obbligatoria degli errori:** Abbiamo imposto preventivamente l'uso di blocchi `try/catch` per evitare che un errore durante l'esecuzione del tool faccia crashare l'intero server MCP.

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

L'era in cui dovevamo inserire meccanicamente il contesto nelle chat dell'IA è finita. Ora è il momento di sfruttare l'IA come una vera infrastruttura, "collegando" (Plug-in) direttamente i tuoi dati al modello.

Risparmia il tempo perso in noiosi copia-incolla ed effettua lo scaffolding del tuo server MCP perfetto in soli 5 minuti. Ora puoi staccare dal lavoro in orario! 🍷
