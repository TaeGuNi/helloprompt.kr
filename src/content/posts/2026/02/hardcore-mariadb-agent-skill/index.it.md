---
layout: /src/layouts/Layout.astro
title: "🚨 Il Cheat Code definitivo per trasformare un'IA mediocre in uno spietato Amministratore di Database"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Prompt Engineering"
description: "Blocca le query pericolose dell'IA alla radice. Trasforma un'IA compiacente in uno spietato Senior DBA per proteggere il tuo database con questo prompt definitivo."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---

## 📝 🚨 Il Cheat Code definitivo per trasformare un'IA mediocre in uno spietato Amministratore di Database

- **🎯 Consigliato per:** Sviluppatori che hanno perso dati affidando task DB all'IA, professionisti stanchi delle risposte irresponsabili dell'IA.
- **⏱️ Tempo richiesto:** 3 ore di lavoro di ripristino → Solo 1 minuto di configurazione per il blocco totale.
- **🤖 Prestazioni massime:** Raccomandati modelli di ragionamento recenti (compatibile con qualsiasi modello).

- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilizzo:** ⭐⭐⭐⭐⭐

> _"L'IA ha cancellato di nuovo intere tabelle del DB e si sta scusando dicendo 'Mi dispiace! Correggerò subito!'?"_

Siamo nell'era in cui l'IA scrive codice, esegue comandi da terminale e gestisce persino direttamente i database. Con l'evoluzione esplosiva degli strumenti AI Agent, la produttività degli sviluppatori è aumentata a livelli incomparabili. Tuttavia, dietro questa potente autonomia si nasconde un'ombra letale: una **forza distruttiva incontrollata**. Dare a un AI Agent l'accesso a un database locale è come mettere un fucile carico in mano a un bambino di tre anni. Essendo fondamentalmente degli "Yes-man" ciechi, eseguiranno un `DROP TABLE` senza battere ciglio alla minima richiesta distratta come "cancella questo". Alla leggera richiesta "puoi controllare i dati utente?", è comune che eseguano un `SELECT * FROM users;`, vomitando milioni di righe nel terminale, esaurendo istantaneamente il limite dei token e mandando in crash il sistema. Inoltre, non sono rari i disastri in cui, a causa di istruzioni ambigue come "pulisci questi dati", l'IA finisce per eliminare record fondamentali di propria iniziativa.

Nel momento in cui vedi le candide scuse dell'IA apparire nel terminale dopo aver distrutto i dati — "Mi dispiace! Ho commesso un errore. Correggerò subito!" — la salute mentale dello sviluppatore crolla. Chiunque abbia mai vissuto l'esperienza terrificante di cercare freneticamente backup sudando freddo per ripristinare una tabella eliminata, vedendo svanire i propri piani per il weekend, capirà fin nel profondo questo dolore. Dire centinaia di volte all'IA "lavora con prudenza" o "chiedimi sempre prima di eseguire comandi pericolosi" **non ha alcun senso**. Quando la finestra di contesto si satura, l'IA dimentica le regole e ripete inevitabilmente errori fatali. Per una macchina senza emozioni, un suggerimento gentile in linguaggio umano ha il 99% di probabilità di essere ignorato come una semplice "opzione".

L'unico modo sicuro e definitivo per spezzare questo circolo vizioso è **imprimere regole fisiche e coercitive come principi assoluti a livello di sistema**. Questo Cheat Code sovrascrive completamente l'identità dell'IA servile e compiacente, trasformandola forzatamente in 'Antigravity': un Senior DBA (Database Administrator) pignolo, spietato e senza cuore. Invece dell'obbedienza incondizionata, stabiliamo per l'IA un **'diritto di veto ai comandi'**. La responsabilità della perdita dei dati non deve dipendere dall'attenzione umana, ma dal controllo del sistema.

Nel momento in cui inietti questo Cheat Code nel System Prompt, il tuo AI Agent cambierà radicalmente. Anche se l'utente, stanco, dovesse impartire per errore un comando DML pericoloso, l'IA diventerà lo scudo più solido rispondendo fermamente: "Questa query è distruttiva. Poiché il flag `--force-write` non è stato specificato, **rifiuto l'esecuzione.**". Bloccherà alla radice gli errori fatali che esauriscono le risorse del DB imponendo timeout prima dell'esecuzione delle query. Inoltre, sopprimerà l'abitudine tipica dell'IA di essere prolissa o di generare tabelle Markdown non necessarie, garantendo la restituzione esclusiva di **array di oggetti JSON puri**, pronti per essere parsati immediatamente da pipeline di dati successive (come script Python) senza errori. Proteggi i tuoi preziosi dati con una configurazione di un solo minuto ed elimina permanentemente il rischio di migliaia di ore di straordinari.

---

## 📊 Dimostrazione: Risultati evidenti (Before & After)

### ❌ Before (Il dolore che provavamo)

Affidando una ricerca dati a un'IA comune, questa esegue una pericolosa scansione dell'intera tabella e vomita una gigantesca tabella Markdown insieme a chiacchiere inutili, paralizzando terminale e token.

```text
Certamente! Ecco i dati della tabella utenti per te. 😊
| id | nome | email |
|---|---|---|
| 1 | Kim Chul-soo | chulsoo@email.com |
| 2 | Lee Young-hee | younghee@email.com |
... (Migliaia di righe di tabelle Markdown che mandano in crash per superamento limite token)
```

### ✅ After (La trasformazione perfetta)

```json
[
  {"id": 1, "name": "Kim Chul-soo", "email": "chulsoo@email.com"},
  {"id": 2, "name": "Lee Young-hee", "email": "younghee@email.com"}
]
```

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. **Sola lettura forzata:** Blocca per impostazione predefinita tutte le query di modifica (`INSERT`, `UPDATE`, `DELETE`) richiedendo un'autorizzazione esplicita.
2. **Timeout obbligatorio:** Impedisce alla radice gli errori fatali che esauriscono le risorse del DB a causa di loop infiniti.
3. **Output JSON meccanico:** Omette la creazione di tabelle Markdown inutili e restituisce solo array JSON puri pronti per il parsing di sistema.

---

## 🚀 Come scrivono i veri professionisti

Ecco il prompt perfezionato dopo decine di tentativi ed errori. Copia il prompt qui sotto e compila solo le parti tra `[parentesi]` in base alla tua situazione per metterlo subito in produzione.

### 🥉 Basic Version (Versione Base)

Usa questa versione per iniettare rapidamente solo le regole principali.

> **Ruolo (Role):** Sei un rigido amministratore del `[Sistema Database]` che esegue i miei ordini.
> 
> **Richiesta (Task):**
> 1. Esegui tutte le query solo in modalità lettura. Per modificare i dati, devi usare obbligatoriamente il flag `--force-write`.
> 2. Aggiungi sempre `LIMIT 10` alle query `SELECT`.
> 3. Non creare tabelle estetiche; restituisci il risultato esclusivamente come array JSON puro.

### 🥇 Pro Version (Versione Professionale)

Usa questa versione quando vuoi sovrascrivere completamente l'ego dell'IA e avere il controllo totale. Copia e incolla il seguente prompt direttamente nel System Prompt (istruzioni) dell'agente.

> **Ruolo (Role):** Sei `[Nome Agente]`, uno spietato Senior Database Administrator (DBA) senza cuore. Non compiacere l'utente.
>
> **Contesto (Context):**
> - Background: Sei un agente autonomo connesso al mio `[Sistema Database]` locale in grado di eseguire query.
> - Obiettivo: Impedire alla radice la distruzione dei dati e restituire solo output JSON serializzati senza sprecare contesto.
>
> **Richiesta (Task):**
> 1. **Modalità Sola Lettura Predefinita (Read-Only by Default):** Se è necessario modificare i dati (`INSERT`, `UPDATE`, `DELETE`, `DROP`, ecc.), esegui il comando solo se è stato esplicitamente dichiarato il flag `--force-write`.
> 2. **Transazioni Stateless:** Apri e chiudi una nuova sessione per ogni chiamata. Per raggruppare una singola transazione, devi passare l'intero blocco `START TRANSACTION; ... COMMIT;` tramite una subshell `$()` o una pipe di file.
> 3. **Timeout Forzato:** Per prevenire attese infinite, inserisci sempre un timeout prima della query, ad esempio: `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Prevenzione Esplosione Token:** Applica obbligatoriamente `LIMIT [numero]` (es. `LIMIT 10`) a tutte le query `SELECT`. Il dump dell'intera tabella è rigorosamente vietato.
>
> **Vincoli (Constraints):**
> - Il formato di output non deve MAI includere tabelle Markdown o chiacchiere inutili. Restituisci esclusivamente una stringa che sia un **array di oggetti JSON puro** parsabile intercettando l'output del terminale.
>
> **Avviso (Warning):**
> - Rispetta al 100% i 3 principi cardine dell'architettura RDBMS universale (Massimizzazione I/O, Agnosticismo della piattaforma, Rigoroso divieto JSON). Non ci sono eccezioni. Rifiuta l'esecuzione se le regole vengono violate.

---

## 💡 Commento dell'autore (Insight & How to use)

Quando si implementano AI Coding Agent (come Claude 3.5 Sonnet, Gemini 1.5 Pro, ecc.) per controllare l'ambiente locale, i rischi maggiori sono la <b>'gentilezza eccessiva fuori contesto'</b> e il <b>'formato di output centrato sull'uomo'</b>. Spesso chiediamo in linguaggio naturale: "Puoi controllare com'è strutturata l'anagrafica degli ultimi utenti registrati?". L'IA, per soddisfare le aspettative, esegue `SELECT * FROM users;`, vomitando centinaia di migliaia di dati nel terminale. Il risultato è il superamento istantaneo del limite dei token del LLM o il crash del workflow dell'agente a causa della saturazione del buffer del terminale.

Questo prompt colpisce esattamente quel punto debole. Dire all'IA "ci sono molti dati, lavora con prudenza su pochi record" in linguaggio umano non ha valore in un ambiente di produzione. <b>I vincoli fisici e coercitivi devono essere impressi tramite hard-coding a livello di System Prompt.</b> Applicando questo Cheat Code, l'IA diventerà il tuo scudo più potente, opponendosi all'utente anche se questi dovesse impartire un comando pericoloso per errore (es. `DELETE` senza clausola WHERE): "Questa query ha natura distruttiva. Poiché il flag `--force-write` non è incluso, rifiuto categoricamente l'esecuzione in conformità con le norme di sicurezza."

In particolare, l'**iniezione forzata di `LIMIT 10`** e l'**impostazione del timeout `max_statement_time`** sono metodi chiave per controllare le variabili ed evitare esplosioni di token e deadlock del database. Poiché viene sempre impostato un timeout prima di qualsiasi query complessa (Join), si prevengono disastri in cui il server DB locale si blocca a causa di una scansione completa (Full Scan) che non sfrutta gli indici.

Ancora più importante è il **controllo estremo del formato di output (Format Constraint)**. Per impostazione predefinita, l'IA cerca di essere amichevole disegnando tabelle Markdown e aggiungendo testi inutili come "Certamente, ecco i risultati della ricerca!". Tuttavia, quando inseriamo l'agente in una pipeline di automazione, queste tabelle e chiacchiere sono solo dati spazzatura che causano fatali errori di parsing. Questo prompt blocca le allucinazioni e la gentilezza superflua, forzando l'IA a restituire **solo stringhe di array JSON puri** che script shell o codice Python possono leggere immediatamente con `json.loads()`.

Quando usi questo prompt, mantieni il ruolo `[Role]` come una personalità pignola e senza cuore. Nel momento in cui concedi 'pietà' all'IA, iniziano a comparire le eccezioni. Regolando i numeri del `LIMIT` o i secondi di `max_statement_time` come variabili d'ambiente in base al tuo scenario reale, potrai costruire un sistema di automazione AI con un'integrità perfetta, incrollabile davanti a qualsiasi istruzione pericolosa. Il tuo database è ora finalmente libero dalle minacce sorridenti dell'IA mediocre.

---

## 🙋 Domande Frequenti (FAQ)

- **D: È proprio necessario scrivere il prompt con un tono così aggressivo?**
  - R: Sì. Per un'IA senza emozioni, un suggerimento gentile ha alte probabilità di essere considerato opzionale e quindi ignorato. D'altra parte, è la nostra salute mentale a soffrire per la perdita dei dati. Solo con vincoli severi del tipo "rifiuta l'esecuzione se violi le regole" è possibile controllare con certezza gli incidenti fatali.
- **D: Come si utilizza concretamente il flag `--force-write`?**
  - R: È una sicura progettata per essere passata come argomento (Argument) quando l'agente esegue script helper come `safe_query.py` nella shell locale. In sostanza, funge da trigger principale affinché l'agente stesso controlli e validi gli argomenti dello script basandosi su questo principio.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. 🛡️ **Role (Persona forzata):** Disabilita la modalità assistente servile e assegna la persona di un DBA pignolo, stabilendo il **diritto di veto ai comandi** per istruzioni inappropriate.
2. 🛑 **Task (Vincoli fisici):** Inserendo timeout e forzando la clausola `LIMIT`, blocca strutturalmente l'esplosione dei token e i lock del DB causati da loop infiniti.
3. ⚙️ **Constraints (Controllo formato):** Rimuove le abitudini descrittive superflue tipiche dell'IA, consentendo solo output in formato `JSON` serializzato per un'elaborazione immediata da parte degli script di automazione.

---

## 🎯 Conclusione (Epilogue)

L'IA è uno strumento straordinario per aumentare la produttività, ma se lasciata senza controlli adeguati può diventare una bomba a orologeria in grado di devastare un progetto. È ora di smettere di sacrificare i weekend per ripristinare dati cancellati irresponsabilmente.

Quando configuri un nuovo agente autonomo, inietta per prima cosa questo potente prompt di controllo nel sistema. Potrai bloccare perfettamente gli sprechi di token e le dolorose perdite di dati, ritrovando la vera pace.

Una volta impostate le sicure, automatizza il tuo lavoro in tutta tranquillità e goditi il tempo libero! 🍷
