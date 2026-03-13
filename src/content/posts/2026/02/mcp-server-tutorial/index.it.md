---
layout: /src/layouts/Layout.astro
title: "\"Smettila di incollare il contesto: costruisci il tuo primo server MCP in 5 minuti\""
author: "Unifactory Editor"
date: "2026-02-16"
updatedDate: "2026-02-16"
category: "Work Automation"
description: "Scopri l'MCP (Model Context Protocol): collega i dati locali a Claude o Ollama senza copiare il contesto. Crea il tuo server personalizzato in 5 minuti."
tags: ["MCP", "Model Context Protocol", "Local LLM", "TypeScript", "Ollama", "Claude"]
image: "/images/2026/02/16/mcp-server-tutorial.jpg"
---

## 📝 Basta copia-incolla del contesto: crea il tuo primo server MCP in 5 minuti

- **🎯 Target consigliato:** Sviluppatori stanchi di incollare schemi DB o documentazione API nei prompt, utenti di dati locali.
- **⏱️ Tempo richiesto:** 5 minuti → risparmio di tempo permanente
- **🤖 Prestazioni top:** Modelli con supporto MCP come Claude Desktop, Ollama, ecc.

- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Apri una finestra di Claude e incolla lo schema del DB. Dieci minuti dopo, apri una nuova finestra e ripeti la stessa operazione. È ora di porre fine a questa estenuante routine, per sempre."_

![\"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\"](/images/hooks/mcp-server-tutorial.jpg)

Se sei uno sviluppatore o un analista di dati, conosci bene questa terribile routine. Apri una finestra di conversazione vuota su ChatGPT o Claude e inizi a trascinare e incollare all'infinito schemi di database aziendali (`schema.sql`) o specifiche API lunghe migliaia di righe. Ogni volta che apri una nuova chat, devi "imboccare" manualmente l'AI con blocchi di testo dicendo: "Scrivi una query basata sulla struttura di questa tabella" o "Questa è la documentazione della nostra API interna, come dovrei chiamarla?".

Basta un piccolo errore nella gestione della context window o il raggiungimento del limite di token e l'AI inizia a fare riferimento a tabelle sbagliate o a inventare colonne inesistenti. Peggio ancora, ogni volta che copi e incolli nel browser **codice aziendale sensibile** o **dati dei clienti** che non dovrebbero mai uscire dall'azienda, senti un brivido lungo la schiena. In questo processo, finiamo per non concentrarci sulla codifica, ma per ridurci a operai che rifiniscono prompt e assemblano contesti per assecondare i gusti dell'AI.

Per quanto tempo dobbiamo ripetere questo lavoro inutile? Anche ipotizzando di aprire solo 10 nuove finestre di prompt al giorno, almeno 30 minuti vengono sprecati solo nell'attività preliminare di ricerca, copia e incolla del testo. In una settimana sono due ore e mezza, in un mese è un'intera giornata lavorativa buttata via solo per copiare e incollare testo. Oltre alla perdita di tempo, la creatività e la concentrazione dello sviluppatore vengono mandate in frantumi.

Il problema più critico è proprio la <span style="color:var(--color-cyber-cyan)">frammentazione del contesto (Context Fragmentation)</span>. Lo schema incollato ieri è stato aggiornato stamattina, ma l'AI scrive ancora codice basato sul vecchio schema di ieri. Di conseguenza, si perdono decine di minuti a correggere errori causati da codice errato, finendo per arrabbiarsi e dire: "Facevo prima a scriverlo da solo". Mentre gli altri usano l'AI per finire il lavoro prima, noi ci ritroviamo paradossalmente a fare straordinari per assecondare e istruire l'AI.

Tuttavia, nel 2026, è arrivato un game changer che pone fine a tutta questa sofferenza in un colpo solo: il **Model Context Protocol (MCP)** guidato da Anthropic. Con questo enorme balzo tecnologico che sta diventando lo standard nell'ecosistema AI, non c'è più bisogno di imboccare manualmente l'AI con i dati. È possibile fare in modo che l'AI **attinga direttamente ai tuoi dati locali e li legga autonomamente in tempo reale**.

L'MCP può essere paragonato a una **porta USB universale** dedicata ai modelli AI. Basta avviare un server sul tuo computer una volta e collegare la porta, e client come Claude Desktop o Ollama potranno accedere direttamente al tuo file system locale, ai database interni e persino alle API aziendali su reti private per ricevere informazioni aggiornate in tempo reale.

La cosa ancora più sorprendente è che bastano 5 minuti per costruire un server personalizzato così potente. Utilizzando il prompt che presenterò oggi, invece di scrivere manualmente codice boilerplate complesso, puoi istruire l'AI a creare istantaneamente lo **scaffolding** di un codice server MCP basato su TypeScript perfettamente adatto al tuo ambiente di business unico. Otterrai un codice perfettamente funzionante in un colpo solo, senza doverti perdere tra dozzine di dipendenze e configurazioni iniziali.

Ora immagina l'incredibile cambiamento dopo l'applicazione di questo prompt. Ti basterà aprire una finestra di conversazione vuota e chiedere con naturalezza: <i>"Quanti sono i nuovi utenti registrati oggi?"</i> o <i>"Qual è la causa principale del log di errore di pagamento di ieri?"</i>.

Claude, in background, interrogherà silenziosamente il tuo DB locale o i tuoi file di log e fornirà risposte perfette basate su dati aggiornati e accurati senza il minimo errore. Senza preoccuparti della fuga di dati, la tua infrastruttura AI personalizzata, sicura e potente, sarà pronta all'interno del tuo computer. Stai per fare il primo passo per diventare non solo un codificatore (Coder), ma un **architetto (Architect)** che dirige il proprio potente sistema AI. Ecco svelato il trucco.

---

## 📊 Dimostrazione: risultati sorprendenti (Prima e Dopo)

### ❌ Prima (Il dolore che provavamo)

Il vecchio e doloroso metodo di copiare e incollare manualmente i dati ogni volta.

```text
User:
(Trascina e incolla l'intero file my_database_schema.sql di migliaia di righe)
(Copia e incolla l'intero file internal_api_docs.md di centinaia di righe)

Scrivi una query per visualizzare il numero di utenti registrati oggi basandoti su questo schema,
e dimmi come chiamarla in base a questa documentazione API.
```

### ✅ Dopo (Il risultato trasformato)

Il metodo intelligente in cui l'LLM comunica direttamente con l'ambiente locale tramite un server MCP pre-costruito.

```text
User:
Quanti sono i nuovi utenti registrati oggi?

(Claude chiama automaticamente lo strumento MCP pre-collegato in background)

Claude:
Interrogando direttamente il database interno, il numero totale di nuovi utenti registrati oggi è 150.
```

---

## ⚡️ Sintesi in 3 punti (TL;DR)

1. **Fine del copia-incolla inutile:** usa l'MCP per permettere agli LLM di accedere e interagire direttamente con i tuoi dati locali (DB, log, API).
2. **Configurazione del server in una riga:** genera automaticamente codice per server MCP personalizzati e pronti all'uso con un singolo prompt, senza noiose configurazioni iniziali.
3. **Protezione della privacy superiore:** trasmetti i dati direttamente nella context window del modello nel tuo ambiente locale sicuro, senza doverli caricare esternamente.

---

## 🚀 Ecco come scrivono i veri professionisti

Questo è un prompt perfezionato dopo dozzine di tentativi ed errori. Copia il prompt qui sotto e compila le parti tra `[parentesi]` in base alla tua situazione per metterlo subito in pratica.

### 🥉 Versione Base

Utilizzalo quando vuoi estrarre rapidamente solo la struttura di base di un server MCP.

> **Ruolo (Role):** Sei uno sviluppatore TypeScript senior.
> 
> **Compito (Task):** Utilizzando `@modelcontextprotocol/sdk`, scrivi un semplice codice per un server MCP che svolga la funzione di `[scopo desiderato (es. funzione per leggere i file di log in una cartella specifica)]`.

### 🥇 Versione Pro

Utilizzalo quando hai bisogno di un codice server robusto ed estensibile, pronto per essere utilizzato in produzione.

> **Ruolo (Role):** Sei un ingegnere TypeScript senior esperto nell'ecosistema Model Context Protocol (MCP).
>
> **Contesto (Context):**
> 
> - Background: È necessario un server MCP personalizzato per collegare dati locali o API interne con un LLM.
> - Obiettivo: Devi generare un codice server MCP completo, eseguibile senza errori e in formato file singolo (`index.ts`), perfettamente adatto ai miei requisiti.
> 
> **Compito (Task):**
> 
> 1. Scrivi il codice di un server MCP che soddisfi i seguenti requisiti.
>    - **Scopo:** `[Descrivi specificamente lo scopo del server (es. funzione per consultare il numero di iscritti di oggi in un database specifico)]`
> 2. Struttura il codice in modo che sia facile da copiare e incollare, con commenti dettagliati affinché l'utente possa testarlo immediatamente nel terminale.
> 
> **Vincoli (Constraints):**
> 
> - Devi utilizzare il pacchetto ufficiale `@modelcontextprotocol/sdk`.
> - Se i parametri di input dello strumento sono complessi, utilizza il pacchetto `zod` per la convalida dello schema (consigliato).
> - Durante la creazione dell'istanza del server, implementa perfettamente le interfacce `ListToolsRequestSchema` e `CallToolRequestSchema`.
> - Includi necessariamente la logica di gestione delle eccezioni (`try/catch`) all'interno dell'handler dello strumento per evitare che il runtime del server si blocchi.
> - **Fornisci in output solo un blocco di codice TypeScript, senza ulteriori spiegazioni.**
> 
> **Avvertenza (Warning):**
> 
> - Non inventare metodi SDK immaginari che non esistono nella realtà. In caso di incertezza, utilizza le API native di Node.js per aggirare il problema.

---

## 💡 Commento dell'autore (Approfondimenti e Modalità d'uso)

Il vero valore di questo prompt non risiede solo nel chiedere vagamente all'AI di scrivere codice, ma nell'**iniettare forzatamente nell'AI le rigide specifiche di protocollo richieste dall'ecosistema MCP**.

Il fallimento disastroso che ho vissuto quando ho provato per la prima volta a creare un server MCP personalizzato è diventato l'ossatura di questo prompt. Quando ho semplicemente istruito l'AI dicendo "Crea un server MCP che legga il mio DB aziendale e mi informi", l'AI ha inventato un sacco di **metodi SDK fantasma** che sembravano plausibili ma che in realtà non funzionavano affatto. Spesso ignorava completamente la gestione delle richieste `ListTools` e `CallTool`, che sono il cuore del ciclo di vita della comunicazione MCP, limitandosi a sputare fuori il solito comune codice per un server web Express.js. Alla fine, ho dovuto sprecare mezza giornata a correggere e debuggare quel codice disordinato.

L'unica verità che ho imparato dopo aver vissuto sulla mia pelle questo amaro fallimento è stata che <span style="color:var(--color-cyber-cyan)">'nella fase di stesura della bozza, non bisogna mai lasciare l'iniziativa dell'architettura all'AI'</span>.

Per questo motivo, ho stabilito esplicitamente nelle istruzioni del prompt di implementare le interfacce essenziali dell'SDK ufficiale `@modelcontextprotocol/sdk`, ovvero `ListToolsRequestSchema` e `CallToolRequestSchema`. Inoltre, ho inserito delle protezioni obbligando l'uso di `zod`, una libreria di convalida dei tipi a runtime, per evitare che i parametri di input dello strumento si confondessero. Di conseguenza, con una singola esecuzione del prompt, è nato un **codice server in un unico file (`index.ts`) perfetto**, eseguibile immediatamente nel terminale senza alcun errore di sintassi o di tipo.

In particolare, il momento in cui questo server MCP personalizzato brilla davvero nella pratica professionale è quando si combinano la <b>'privacy superiore (Privacy)'</b> e il <b>'contesto dinamico (Dynamic Context)'</b>. Con il metodo tradizionale, per combinare l'AI con dati sensibili dei clienti o specifiche API private nascosti nel profondo della rete aziendale, dovevamo procedere con cautela per non allarmare il team della sicurezza, eseguendo lavori di anonimizzazione uno per uno.

Tuttavia, avviando il proprio server MCP personalizzato che gira rigorosamente in ambiente locale, la situazione cambia completamente. I dati sensibili che gestisci non vengono mai trasmessi a server cloud esterni, ma vengono **elaborati in modo sicuro solo all'interno della memoria fisica locale**. Client come Claude Desktop inviano semplicemente una query a localhost e ricevono il risultato in modo sicuro.

Un consiglio fondamentale per l'applicazione immediata nella pratica è il **controllo delle variabili**. Quando inserisci la variabile `[scopo]` nel prompt, non essere vago, ma specifica la forma dello strumento. Ad esempio, invece di scrivere `[funzione per consultare il numero di iscritti di oggi in un database specifico]`, è meglio controllarla chiaramente come `[strumento che esegue una query SELECT per contare gli utenti registrati oggi in base alla colonna date nella tabella users di un database PostgreSQL]`. Più sarai chiaro sui parametri che lo strumento riceverà e sul formato dei dati da restituire, più l'AI scriverà uno schema `zod` sofisticato.

In realtà, applicando questo prompt, ho costruito e sto usando personalmente un potente server MCP che si collega in tempo reale al Jira issue tracker aziendale e alle notifiche Slack interne. Appena arrivo al lavoro la mattina, se scrivo <i>"Riassumi solo i ticket di questo sprint a me assegnati che hanno una percentuale di completamento inferiore al 50%"</i>, l'AI interroga in tempo reale le API di Jira, recupera i dati aggiornati, costruisce il contesto e genera all'istante un briefing perfetto.

Anche tu, all'inizio, prova a cominciare in modo leggero e sicuro con un semplice strumento di 'sola lettura (Read-only)' che legge file di testo in una cartella specifica. Una volta presa confidenza con la struttura del server e compreso il principio di funzionamento dello scambio di dati, potrai gradualmente passare a inviare query direttamente al database o inviare notifiche automatiche ai messenger aziendali, sperimentando un nuovo mondo di produttività in cui dirigi liberamente la tua infrastruttura locale.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Posso usare questo prompt anche se non ho conoscenze di programmazione?**
  - A: Sì, certamente! Anche se scrivi solo in linguaggio naturale nel campo `[scopo]`, come ad esempio "funzione di ricerca documenti wiki aziendali", l'AI scriverà per te il codice strutturalmente perfetto. Dovrai solo copiare il codice generato, incollarlo nell'ambiente di esecuzione e avviare lo script.

- **Q: Come eseguo il codice del server generato e come lo collego al client LLM?**
  - A: Dopo aver salvato il codice come file `index.ts`, aggiungi il comando di esecuzione per quello script (es. `npx tsx index.ts`) e il percorso assoluto nella sezione `mcpServers` del file di configurazione di Claude Desktop (`claude_desktop_config.json`). Verrà collegato immediatamente e apparirà nella scheda degli strumenti.

- **Q: Il server creato con questo prompt funziona solo con Claude?**
  - A: No. Il Model Context Protocol è uno <b>standard aperto (Open Standard)</b> universale che non dipende da un modello specifico. Pertanto, è perfettamente compatibile senza modifiche con tutti gli ambienti client che supportano lo standard MCP, come Ollama, Cursor, Zed, ecc.

---

## 🧬 Anatomia del prompt (Perché funziona?)

1. **Controllo rigoroso dei vincoli (Constraints):** È stato imposto l'uso delle librerie `@modelcontextprotocol/sdk` e `zod`, e sono stati specificati rigorosamente gli schemi obbligatori (`ListToolsRequestSchema`, `CallToolRequestSchema`). In questo modo si bloccano alla radice le allucinazioni in cui l'AI inventa codice fantasma che non rispetta le specifiche.
2. **Controllo dell'output in file singolo e solo codice:** Invece di un'architettura complessa frammentata in più file, è stata istruita una struttura a file singolo (`index.ts`) e è stato ordinato di rimuovere completamente spiegazioni superflue. Di conseguenza, il tempo necessario per copiare e testare il codice (Time-to-Value) si riduce drasticamente.
3. **Gestione delle eccezioni obbligatoria a runtime:** Per evitare che l'intero processo del server MCP si blocchi (Crash) in caso di errori imprevisti durante l'esecuzione dello strumento in ambiente locale, è stata stabilita preventivamente una logica di difesa con `try/catch`.

---

## 🎯 Conclusione (Epilogo)

L'era del lavoro manuale, in cui si inseriva meccanicamente un vasto contesto nelle chat AI, è finita. Ora è il momento di **collegare (Plug-in) direttamente** i tuoi dati chiave al modello, elevando l'AI da semplice chatbot a potente infrastruttura all'interno del tuo computer.

Bastano solo 5 minuti. Crea subito lo scaffolding del server MCP perfetto che ti farà risparmiare il tempo prezioso sprecato in noiosi copia-incolla. Automatizza il tuo lavoro e goditi il tempo libero che meriti! 🍷
