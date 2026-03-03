---
title: " \"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\""
description: "MCP (Model Context Protocol) è la porta USB per gli LLM. Scopri il prompt definitivo per creare un server personalizzato in 5 minuti: collega i tuoi dati locali a Claude o Ollama e smetti per sempre di copiare e incollare file JSON."
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

# 📝 Basta col Copia-Incolla: Crea il Tuo Primo Server MCP in 5 Minuti

- **🎯 Consigliato per:** Sviluppatori esausti di incollare schemi DB o documentazione API in ogni prompt, e professionisti che gestiscono dati in locale.
- **⏱️ Tempo richiesto:** 5 minuti → Risparmio di tempo permanente.
- **🤖 Modelli raccomandati:** Claude Desktop, Ollama e qualsiasi modello compatibile con lo standard MCP.

- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Apri Claude, copi lo schema del database e lo incolli. Dieci minuti dopo, nuova chat, e ripeti l'operazione. È arrivato il momento di spezzare per sempre questo loop frustrante."_

Oggi l'**MCP (Model Context Protocol)** si è imposto come lo standard assoluto per connettere gli LLM ai tuoi dati. Immaginalo come una vera e propria "porta USB" per l'Intelligenza Artificiale. Invece di dover fornire il contesto manualmente a ogni singola interazione, ti basta configurare un server una volta sola: da quel momento, il modello "leggerà" in totale autonomia e in tempo reale i tuoi file, i database e le API interne.

Esistono già ottimi server MCP generici per integrare GitHub o il filesystem locale. Tuttavia, il vero salto di qualità avviene quando colleghi direttamente all'LLM la **logica di business specifica della tua azienda**.

In questa guida, anziché costringerti a scrivere noiose righe di codice boilerplate, ti consegneremo un prompt in grado di istruire l'IA per generare lo scaffolding di un server MCP su misura. Sarà basato su TypeScript e pronto all'uso in soli 5 minuti.

---

## ⚡️ Sintesi in 3 Punti (TL;DR)

1. **Addio al copia-incolla:** Sfrutta il protocollo MCP per garantire all'LLM un accesso diretto ai tuoi dati locali (database, log, API interne).
2. **Generazione via prompt:** Crea il codice per un server MCP completo con un singolo comando, senza perderti in configurazioni estenuanti.
3. **Privacy assoluta:** I tuoi dati non lasciano mai il tuo ambiente locale; vengono trasmessi in modo sicuro ed esclusivo alla context window del modello.

---

## 🚀 La Soluzione: "MCP Server Scaffolder"

### 🥉 Versione Basic

Ideale quando hai bisogno di ottenere la struttura di base del tuo server MCP nel minor tempo possibile.

> **Ruolo:** Sei un Senior TypeScript Developer.
> **Task:** Scrivi il codice per un semplice server MCP utilizzando `@modelcontextprotocol/sdk` con il seguente scopo: `[Inserisci lo scopo del server, ad esempio: fornire le previsioni meteo di una città specifica]`.

### 🥇 Versione Pro

La scelta perfetta quando esigi un codice robusto, scalabile e pronto per essere messo in produzione.

> **Ruolo (Role):** Sei un Senior TypeScript Engineer, massimo esperto nell'ecosistema Model Context Protocol (MCP).
>
> **Contesto (Context):**
>
> - Background: Devo creare un server MCP su misura per connettere i miei dati locali o le mie API interne a un LLM.
> - Obiettivo: Generare il codice di un server MCP completo, eseguibile all'interno di un singolo file (`index.ts`) e perfettamente adattato alle mie necessità.
>
> **Task (Task):**
>
> 1. Scrivi il codice di un server MCP che rispetti i seguenti requisiti:
>    - **Scopo:** `[Descrivi nel dettaglio l'obiettivo del server. Esempio: Leggere e analizzare le ultime 50 righe del file di log del server di produzione]`
> 2. Struttura il codice affinché sia un perfetto copia-incolla. Inserisci commenti chiari per permettermi di eseguirlo immediatamente da terminale.
>
> **Vincoli (Constraints):**
>
> - Utilizza rigorosamente l'SDK ufficiale `@modelcontextprotocol/sdk`.
> - Se i parametri di input del tool sono complessi, implementa la libreria `zod` per la validazione dello schema (altamente raccomandato).
> - Gestisci in modo impeccabile le interfacce `ListToolsRequestSchema` e `CallToolRequestSchema` durante l'inizializzazione del server.
> - Includi sempre una solida gestione degli errori (`try/catch`) all'interno dell'handler del tool, per prevenire qualsiasi crash del server.
> - **Fornisci esclusivamente un unico blocco di codice TypeScript. Non aggiungere alcuna spiegazione testuale.**
>
> **Avvertenze (Warning):**
>
> - Non allucinare metodi SDK inesistenti. In caso di dubbio, affidati esclusivamente alle API standard di Node.js.

---

## 💡 L'Insight dell'Autore (Insight)

Il vero segreto di questo prompt non sta nel chiedere genericamente all'IA di "scrivere del codice", ma nell'imporre chirurgicamente i **requisiti strutturali del protocollo (la gestione esatta di `ListTools` e `CallTool`)**, che sono le fondamenta per far funzionare qualsiasi server MCP senza intoppi.

Il vantaggio più dirompente di un server MCP su misura è la **privacy assoluta**. Mentre le classiche ricerche web espongono le tue query a server di terze parti, un server MCP personalizzato—magari agganciato al tuo PostgreSQL locale o all'API riservata della tua azienda—garantisce che i dati fluiscano in modo sicuro, restando sempre sotto il tuo controllo. Fine delle paranoie: non dovrai mai più incollare documenti sensibili e coperti da NDA nella finestra di una chat.

Il mio consiglio pratico? Inizia usando questo prompt per generare tool "Read-only" (sola lettura), come l'analisi dei file di log o l'interrogazione di una singola tabella. Non appena avrai preso confidenza con l'architettura, potrai spingerti oltre, abilitando permessi di scrittura per trasformare l'LLM nel tuo assistente operativo definitivo.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Posso usare questo prompt anche se non sono un programmatore esperto?**
  - A: Assolutamente sì! Ti basterà descrivere il tuo `[Scopo]` in puro linguaggio naturale (es. "crea una funzione che legga i dati dei clienti dal mio Excel"), e l'IA scriverà la logica al posto tuo. Tu dovrai solo copiare il codice ed eseguirlo.

- **Q: Come avvio e connetto il server appena generato?**
  - A: Salva il codice in un file `index.ts`, installa le dipendenze richieste ed esegui lo script. Dopodiché, ti basterà aggiungere il percorso del server nella sezione `mcpServers` del file di configurazione di Claude Desktop (`claude_desktop_config.json`). L'integrazione sarà immediata.

- **Q: Questo server funzionerà esclusivamente con Claude?**
  - A: Assolutamente no. Il Model Context Protocol è uno standard rigorosamente open source. Il tuo server comunicherà in modo impeccabile con Ollama, Cursor, e qualsiasi altro client moderno che supporti l'architettura MCP.

---

## 🧬 Anatomia del Prompt (Why it works?)

1. **Controllo spietato dei vincoli (Constraints):** Imponendo l'uso congiunto di `@modelcontextprotocol/sdk` e `zod`, oltre a dichiarare esplicitamente gli schemi vitali (`ListToolsRequestSchema`, `CallToolRequestSchema`), blindiamo l'IA contro le allucinazioni, bloccando sul nascere la generazione di codice deprecato.
2. **Output monolitico (Single-file):** Esigendo un'architettura a file singolo (`index.ts`) senza inutili chiacchiere di contorno, abbattiamo drasticamente il *Time-to-Value*. Eviti così l'incubo di dover ricostruire mentalmente la struttura a cartelle pensata dall'IA.
3. **Prevenzione attiva dei crash:** L'obbligo di incapsulare la logica in blocchi `try/catch` non è un vezzo. Assicura che un banale errore di parsing in un singolo tool non faccia crollare in modo catastrofico l'intero server MCP durante una conversazione.

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

L'era buia in cui eravamo condannati a incollare tonnellate di contesto nelle chat è ufficialmente finita. Oggi l'IA si evolve da semplice chatbot a vera e propria infrastruttura: grazie al protocollo MCP, i tuoi dati diventano "Plug-in" nativi che potenziano il ragionamento del modello.

Smetti di sprecare energie nel copia-incolla manuale. Usa questo prompt, genera lo scaffolding del tuo server MCP perfetto in soli 5 minuti, e lascia che sia la macchina a fare il lavoro sporco per te.

Ora, chiudi il terminale e goditi il resto della serata. 🍷
