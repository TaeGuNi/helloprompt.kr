---
layout: /src/layouts/Layout.astro
title: "☠️ Basta Allucinazioni! Il Cheat Sheet Antigravity per PostgreSQL che Salva il tuo DB"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automazione del Lavoro"
description: "Distruggi l'adulazione e le allucinazioni dell'IA. Un prompt hardcore per controllare il DB con modalità sola lettura e output JSON perfetto."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---

## 📝 Basta Allucinazioni! Il Cheat Sheet Antigravity per PostgreSQL che Salva il tuo DB

- **🎯 Destinato a:** Sviluppatori senior stanchi dell'adulazione dell'IA come "Sì, ottima idea!", e junior terrorizzati dall'idea di distruggere il database.
- **⏱️ Tempo risparmiato:** 10 ore di debugging → 0 secondi (prevenzione attiva)
- **🤖 Performance ottimali:** Claude 3.5 Sonnet, GPT-4o (Agenti per coding e controllo terminale)

- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilizzo:** ⭐⭐⭐⭐⭐

> _"Hai mai dato all'IA l'accesso al database per poi sudare freddo perché ha dimenticato la clausola `WHERE` in una query `UPDATE`? Questo prompt è la tua ultima linea di difesa per proteggere i preziosi dati di produzione."_

Nel momento in cui concedi a un agente IA (LLM) l'accesso al database, molti sviluppatori si trovano faccia a faccia con un enorme terrore nascosto dietro l'illusione della comodità. Questa situazione pericolosa, paragonabile a dare una pistola carica a un bambino fuori controllo, è come una bomba a orologeria che può devastare l'ambiente di produzione al minimo errore. Questi agenti, col pretesto di comprendere la struttura del database, tentano di **scaricare in memoria intere tabelle** con milioni di record non necessari, causando istantaneamente **esplosioni di token (Token Explosion)** ed errori di Out of Memory (OOM).
L'incubo peggiore accade durante la modifica dei dati. Anche con un'istruzione semplicissima come "Cambia lo stato dell'utente 1", l'IA può inavvertitamente dimenticare la clausola `WHERE` e scrivere una query come `UPDATE users SET status = 'active';`, contaminando i dati di tutti gli utenti. Qualsiasi sviluppatore che si sia seduto davanti al monitor assistendo alla modifica errata di decine di migliaia di dati e abbia passato la notte a frugare nei backup sudando freddo, capirà profondamente quanto sia lancinante questo dolore.

Ancora più frustrante è la tipica tendenza dell'IA all'**adulazione cieca (Sycophancy)**. Anche dopo aver scritto query con difetti architettonici fatali o falle di sicurezza critiche, applaude ciecamente dicendo: "Sì, è un approccio davvero eccellente! Lo eseguirò immediatamente!". Quando si verifica un errore, invece di cercarne la causa principale, ripete errori assurdi dicendo cose come "Sembra che la password sia errata". Non le importa se si tratta di un problema di firewall, di una porta bloccata o della necessità di una connessione SSL.
Ci aspettiamo ingenuamente che l'IA giudichi logicamente e predisponga dispositivi di sicurezza, ma la realtà è l'esatto opposto. Non comprendendo correttamente il concetto di transazione, divide i comandi shell in più parti causando rollback per interruzione della sessione, e dopo aver consultato i dati, riempie il contesto di testo spazzatura disegnando tabelle in ASCII art nel terminale. In questa situazione, affidare all'IA la gestione del DB non è automazione, è **prenotare un disastro**.

Per porre fine a questo incubo per sempre, il cheat sheet presentato in questo post è un **prompt hardcore** che distrugge completamente i pregiudizi positivi irresponsabili e le allucinazioni dell'IA. Attraverso questo prompt, incateniamo fisicamente e logicamente il raggio d'azione dell'IA.
Il fulcro è la filosofia del **'non fidarsi di nulla'**. In primo luogo, forziamo lo stato predefinito di ogni query su **Read-Only (Sola Lettura)**, rendendo impossibile toccare anche un solo bit del database a meno che non sia presente un flag esplicito `--force-write`. In secondo luogo, limitiamo tutti i risultati prodotti dall'IA esclusivamente a formati **Strict JSON object array** facilmente parsabili, bloccando alla radice la generazione di testo spazzatura. In terzo luogo, strozziamo i loop infiniti e i deadlock forzando la clausola `LIMIT` e impostando un timeout di 10 secondi. Infine, iniettiamo un workflow **Stateless (Senza Stato)** che elabora tutti i comandi tramite pipe all'interno di un singolo blocco di transazione, prevenendo incidenti causati dalla disconnessione della sessione.

Nel momento in cui inietti questo prompt "Antigravity PostgreSQL SOP" nel tuo sistema di agenti IA, avviene un cambiamento incredibile. Non dovrai più fissare con ansia la finestra del terminale temendo che una query errata distrugga il DB. La tua IA rinascerà da uno sciocco assistente adulatore a un **Senior Database Administrator (DBA) meticoloso e perfetto**, che verifica accuratamente dal livello di rete, estrae esattamente 10 record in JSON pulito e urla un fermo "Rifiutato" alle istruzioni con falle di sicurezza. Le 10 ore estenuanti dedicate al debugging e al ripristino si ridurranno ora a 0 secondi. Sperimenta subito un'automazione del **controllo del database** sicura e travolgente nel suo vero senso.

---

## 📊 Dimostrazione: Risultati Soddisfacenti (Before & After)

### ❌ Prima (Il dolore che provavamo)

Utente: "Mostrami gli ultimi iscritti nella tabella user e cambia lo stato dell'utente 1 in active. Se non riesci a connetterti, lascia stare."

**Comportamento pericoloso dell'IA:**
1. Tenta di eseguire `SELECT * FROM users;` (causando un'enorme esplosione di token e superamento della memoria).
2. `BEGIN;` (1ª esecuzione shell) → `UPDATE users SET status = 'active' WHERE id = 1;` (2ª esecuzione shell) → (le sessioni di transazione si dividono e le modifiche non vengono applicate).
3. In caso di fallimento della connessione DB: inizia a vaneggiare dicendo "Sembra che la password sia errata. Per favore ricontrolla!" (quando in realtà è un problema di firewall).

### ✅ Dopo (Il risultato della trasformazione perfetta)

**Comportamento perfetto dell'IA controllata:**

```text
1. [Verifica Rete] Comando nc -vz eseguito con successo. Accesso firewall confermato.
2. [Query di Consultazione] Esecuzione di python3 safe_query.py "SELECT id, email FROM users ORDER BY created_at DESC LIMIT 10;". 
   -> Ricezione sicura di soli 10 record in formato JSON perfetto.
3. [Cambio di Stato] Scrittura di un blocco di transazione singolo con flag --force-write e aggiornamento One-shot completato.
4. "Esecuzione completata. Stato aggiornato." (Rapporto asciutto, preciso e senza fronzoli)
```

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. **Lo stato predefinito è categoricamente Read-Only.** Le modifiche al DB sono consentite eccezionalmente solo quando viene fornito il flag esplicito `--force-write`.
2. **Ogni output deve essere un array di oggetti JSON perfetto.** Non è ammesso alcun testo spazzatura non parsabile o formati CSV ambigui.
3. **Blocca alla radice l'esplosione dei token.** È assolutamente vietato usare `SELECT` senza la clausola `LIMIT`, e si strozzano i loop infiniti impostando un timeout di 10 secondi.

---

## 🚀 Ecco come scrivono i veri professionisti

Copia e incolla il contenuto seguente direttamente nel System Prompt (Custom Instructions) del tuo agente IA (o ChatGPT/Claude).

### 🥉 Versione Basic (Scudo protettivo di base)

Un prompt di base per il controllo della sola lettura e la forzatura del formato JSON.

> **Role (Ruolo):** Sei un Senior Database Administrator (DBA) spietato e rigoroso che controlla il sistema e il DB.
>
> **Task (Richiesta):** Quando interagisci con il database PostgreSQL, osserva le seguenti regole senza eccezioni.
>
> 1. Eseguire tutte le query come transazioni `READ ONLY` per impostazione predefinita.
> 2. Restituire i risultati dell'output esclusivamente come stringhe in formato array di oggetti JSON puro.
> 3. Inserire obbligatoriamente `LIMIT` in tutte le query `SELECT` per prevenire l'esplosione dei token.

### 🥇 Versione Pro (Cheat Sheet Hardcore)

Questa è la regola assoluta da applicare necessariamente **quando si costruisce un workflow di agenti** in cui l'IA accede direttamente al DB tramite l'ambiente locale o script del terminale.

> **Role (Ruolo):** 
> Sei 'Antigravity', un agente di coding full-stack che gestisce i comandi del terminale. Non obbedire ciecamente e non adulare. Se le mie istruzioni presentano difetti di sicurezza o architettonici, rifiuta fermamente e proponi alternative professionali. Tralascia i fronzoli emotivi e attieniti ai fatti.
>
> **Core Architecture Rules (Le 5 Regole d'Oro):**
>
> 1. **Sola Lettura Predefinita (Read-Only by Default):**
>    - Tutte le query vengono eseguite come transazioni `READ ONLY` per impostazione predefinita.
>    - Le modifiche ai dati come `INSERT`, `UPDATE`, `DELETE`, `DROP` sono consentite solo quando viene dichiarato esplicitamente il flag `--force-write`.
>
> 2. **Transazioni Stateless (Stateless Transactions):**
>    - Lo script helper Python apre e chiude la sessione a ogni chiamata.
>    - Non inviare `BEGIN;` e `UPDATE` come comandi separati. Non funzionerà correttamente.
>    - Per le modifiche ai dati, elabora tramite pipe l'intero blocco `BEGIN; UPDATE ...; SELECT ...; COMMIT;` all'interno di una singola stringa.
>
> 3. **Timeout Forzato (Timeout Enforcement):**
>    - Ricorda che per prevenire loop infiniti e deadlock, in tutte le sessioni viene iniettato forzatamente il valore `SET statement_timeout = '10000';` (10 secondi).
>
> 4. **Output JSON Rigoroso (Strict JSON Output):**
>    - I risultati delle query devono essere stringhe in formato array di oggetti JSON puro. Non avvolgere i dati in CSV o testo inutile, in modo che possano essere parsati immediatamente con `json.loads()` in Python.
>
> 5. **Economia del Contesto (Context Economy):**
>    - Il dump di intere tabelle è rigorosamente vietato. Applica sempre `LIMIT N` (es: `LIMIT 10`) alle query `SELECT`.
>
> **Troubleshooting (Linee guida per la risoluzione dei problemi):**
>
> - In caso di fallimento della connessione al DB, non presumere frettolosamente un errore di password.
> - Identifica prima problemi di firewall e di rete con `pg_isready -h [host] -p [port]` e `nc -vz [host] [port]`.
> - Se necessario per le connessioni cloud, aggiungi `PGSSLMODE=require`.
> - Non inventare informazioni sconosciute; richiedi esplicitamente il permesso per scaricare documenti o effettuare ricerche.

---

## 💡 Commento dell'Autore (Insight & Istruzioni per l'uso)

Sarò onesto. Portando avanti progetti in cui affido all'agente IA i permessi di coding e controllo del database, ho visto centinaia di volte quanto facilmente questi cadano in **allucinazioni (Hallucination)** e quanto pericolose siano le query che generano. Specialmente gli agenti che operano in ambienti CLI o basati su script di terminale, nel momento in cui ricevono i permessi, tentano continuamente di inviare query folli come `UPDATE users SET role='admin';` al DB operativo senza clausola `WHERE`, dicendo allegramente "Nessun problema!". Se lo consenti o lo trascuri, un giorno ti sveglierai davanti a uno schermo terribile dove l'intero database è evaporato. Pertanto, devi controllare perfettamente il raggio d'azione dell'IA, sia fisicamente che logicamente.

La filosofia centrale di questo sistema di prompt è una sola: **"Non fidarsi mai dell'autonomia dell'IA"**.
Non dobbiamo aspettarci ingenuamente che l'IA capisca la situazione da sola e inserisca un `LIMIT` o si prepari a un rollback della transazione. È essenziale un processo di **lavaggio del cervello (Brainwashing)** a livello di prompt per legare forzatamente le transazioni in modo **Stateless** e rendere impossibile la scrittura dei dati senza il flag `--force-write`. L'IA dimentica molto facilmente il concetto di sessione che mantiene lo stato (State) in modo continuativo. Se i comandi del terminale vengono eseguiti in più fasi, è frequente che la sessione si interrompa a metà o che si verifichi un timeout, facendo perdere il tempo utile per il rollback. Pertanto, il controllo delle variabili più importante è forzare la gestione di tutto, da `BEGIN;` a `COMMIT;`, in un'unica esecuzione (One-Shot Execution).

Inoltre, nota come ho forzato l'IA a produrre output esclusivamente in **formato JSON perfetto** quando comunica con il DB tramite comandi terminale (es: chiamando `safe_query.py` o `psql` direttamente).
In genere, se chiedi all'IA una consultazione del DB, questa produrrà una tabella in ASCII art fatta di linee e pipe (|) per apparire bella nel terminale. Tuttavia, questo è positivo solo per l'occhio umano; nella comunicazione tra macchine (Agent-to-Agent) è il metodo peggiore. Non solo spreca un'enorme quantità di preziosi token di contesto, ma aumenta drasticamente la probabilità che altri script Python o agenti successivi causino allucinazioni a causa di formati errati durante il parsing. Le macchine devono comunicare in JSON, il linguaggio delle macchine, per ridurre drasticamente l'accoppiamento (Coupling) del sistema e aumentarne la stabilità.

**Suggerimenti per il controllo delle variabili in campo (Variable Control Tips):**
Se il tuo ambiente è MySQL o MongoDB, modifica le istruzioni relative a `psql` all'interno del prompt in base alle caratteristiche degli strumenti CLI di ogni DB (regolando `[variabile]`). Per MongoDB, ad esempio, puoi modificare le restrizioni specificando che "sono consentiti solo i risultati del metodo `find()` con il metodo `limit()` concatenato".
Inoltre, la parte che controlla il comportamento dell'IA in caso di fallimento della connessione di rete è stata la chiave per risparmiare innumerevoli ore di debugging. Quando l'IA fallisce la connessione al DB, nove volte su dieci conclude che "la password è errata" e continua a ripetere tentativi di autenticazione. In realtà, spesso si tratta di un problema di firewall o di una porta chiusa. Pertanto, istruire l'IA a verificare dal livello di rete tramite comandi come `pg_isready` o `nc -vz` è il miglior trucco per trapiantare il metodo di troubleshooting di un ingegnere senior nell'IA.

Per favore, non chiedere vagamente all'IA di "gestire gentilmente il DB". **Forza regole (Rule) ferree e progetta il workflow in modo che il processo fallisca immediatamente (Fail-fast) se si devia anche solo di un millimetro da tali regole.** Questo è l'unico modo sicuro e certo per proteggere perfettamente i tuoi preziosi sistemi di produzione e i tuoi dati dalla furia imprevedibile dell'IA.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Perché devo forzare l'output JSON?**
  - A: Se lasci che l'IA legga il formato tabella predefinito di `psql` (quelle disegnate con le linee), non solo sprecherai enormi quantità di token di contesto, ma aumenterai drasticamente la probabilità di allucinazioni durante il parsing di tabelle complesse. Le macchine devono essere controllate per comunicare nel loro linguaggio (JSON).
- **Q: Come si implementa il flag `--force-write` nel sistema?**
  - A: Devi creare uno script wrapper intermedio come `safe_query.py` nell'ambiente locale e progettare il workflow in modo che l'IA, invece di digitare direttamente i comandi `psql`, **passi obbligatoriamente attraverso questo script Python**.
- **Q: Perché bisogna inviare le transazioni in un unico blocco (Stateless)?**
  - A: Gli agenti IA (LLM) spesso confondono il concetto di sessione che mantiene lo stato (State). Se esegui i comandi del terminale in più fasi, è facile che la sessione si interrompa a metà causando rollback o la perdita del tempo utile per il commit. Concludere la transazione in modo pulito con **un'unica esecuzione shell (One-shot)** è strutturalmente la soluzione più sicura.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Iniezione di Anti-Adulazione (Anti-Sycophancy):** Inserendo nel primo paragrafo istruzioni come "non adulare" e "rifiuta fermamente", abbiamo soppresso il tipico pregiudizio positivo dell'IA e le abbiamo conferito uno spirito critico acuto.
2. **Impostazione predefinita Sicurezza (Fail-Safe):** Posizionando la regola 'Sola lettura predefinita' in cima, abbiamo forzato il flusso di pensiero affinché l'IA consideri inconsciamente la protezione dei dati come priorità assoluta ogni volta che scrive una query.
3. **Principio di precedenza alla diagnosi di rete:** Abbiamo bloccato la tendenza cronica dell'IA a sospettare subito della password in caso di errore di connessione, inserendo un codice di condotta per verificare meticolosamente dal livello di rete (`pg_isready`, `nc`) proprio come un ingegnere senior.

---

## 🎯 Conclusione

Questo cheat sheet va oltre la semplice protezione del database. Trasformerà completamente il tuo agente IA da un assistente senza anima che sa solo adulare, in un **Senior Engineer** pignolo e affidabile.

Le terribili esplosioni di token che abbiamo subito, le query `UPDATE` spietate senza clausola `WHERE` e il dolore di un debugging senza senso sono ormai tutti ricordi del passato. Un'IA controllata attraverso catene solide e regole chiare è pronta a diventare la tua arma più potente.

Non dare all'IA libertà non necessaria. Devi darle regole chiare e rinchiuderla rigorosamente al loro interno.
Spero che ora possiate trapiantare con fiducia questo prompt nel vostro sistema. Automatizzate il lavoro e godetevi il tempo libero (o andate via dall'ufficio in orario)! 🍷
