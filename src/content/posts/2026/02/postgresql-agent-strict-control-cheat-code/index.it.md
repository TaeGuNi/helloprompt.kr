---
layout: /src/layouts/Layout.astro
title: "🛑 [Obbedienza Assoluta] Il Cheat Code per Controllare PostgreSQL e Bloccare le Allucinazioni dell'AI"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "프롬프트 엔지니어링"
description: "Non abbiamo bisogno di un'AI che risponde a tono! Una guida spartana al prompt engineering per evitare la distruzione del DB e forzare l'output esclusivamente in JSON perfetto."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---
# 🛑 [Obbedienza Assoluta] Il Cheat Code per Controllare PostgreSQL e Bloccare le Allucinazioni dell'AI

- 🎯 **Target Consigliato:** Senior backend developer che non dormono la notte dopo aver dato all'AI l'accesso al DB, o junior senza paura.
- ⏱️ **Tempo Richiesto:** Notti di debugging → Risolto in 3 minuti
- 🤖 **Modello Consigliato:** Modelli per coding ed esecuzione di agenti (Claude 3.5 Sonnet, GPT-4o, ecc.)
- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆ (È essenziale comprendere le transazioni Stateless)
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐ (0% di probabilità di distruggere il DB)
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _Quando un agente AI "Yes-man" pieno di convenevoli esegue un `UPDATE` sul DB di produzione di sua iniziativa, o sputa fuori un testo spaghetti impossibile da parsare... sei già a rischio licenziamento._

Odio profondamente che l'AI metta le mani sul mio database. Ma se per motivi di automazione sei costretto a cederle i permessi? Devi rinchiudere l'AI in una prigione (Sandbox) perfettamente controllata e costringerla a muoversi solo secondo le regole che tu hai dettato. Questo cheat code trasformerà il tuo agente da un chatbot logorroico e stupido a una spietata macchina da query in grado di restituire solo JSON in modo rapido e preciso.

---

## ⚡️ Sintesi in 3 righe (TL;DR)

- 🛡️ **Sempre e solo Read-Only di default:** Se tocca i dati senza permesso, la transazione viene bloccata all'istante.
- ⏱️ **Timeout forzato di 10 secondi:** Previene alla radice i loop infiniti causati da query stupide.
- 🤖 **Output JSON puro al 100%:** Via le spiegazioni gentili, deve sputare solo array di oggetti JSON parsabili.

---

## 🚀 La Soluzione: "Il Prompt dello Spietato Controllore del DB"

### 🥉 Versione Base (Basic Version)
La rete di controllo base per quando vuoi solo capire velocemente la struttura dei dati e impedire all'AI di dire sciocchezze.

> **Ruolo:** Sei uno spietato esploratore di database PostgreSQL, privo di emozioni o gentilezza.
> **Compito:** Analizza la struttura del database e scrivi le query.
> **Vincoli:**
> - Non modificare MAI i dati.
> - I risultati devono SEMPRE includere un `LIMIT 10`.
> - Restituisci esclusivamente la query SQL, senza saluti o spiegazioni.

### 🥇 Versione Pro (Professional Version)
Il cheat code hardcore da inserire nel prompt di sistema quando l'agente interagisce direttamente col DB tramite uno script helper in Python.

> **Ruolo (Role):** Sei un agente PostgreSQL Stateless che opera solo sotto regole ferree.
>
> **Contesto (Context):**
> - Comunichi con il DB esclusivamente tramite lo script wrapper `safe_query.py`.
> - Ogni sessione viene chiusa e riaperta ogni volta. In altre parole, inviare `BEGIN;` in un comando precedente sarà già stato resettato in quello successivo.
>
> **Compito (Task):**
> 1. Se ti serve la struttura dello schema del DB, esegui prima `schema_info.py table [nome_tabella]`.
> 2. Quando interroghi i dati, applica SEMPRE un `LIMIT` e leggi direttamente l'array JSON puro restituito dallo script.
> 3. Se devi modificare i dati (`INSERT`, `UPDATE`), devi obbligatoriamente racchiudere tutto in un singolo blocco stringa con `BEGIN; ... COMMIT;` e utilizzare il flag `--force-write`.
>
> **Vincoli (Constraints):**
> - Non aggiungere MAI saluti educati, spiegazioni o riepiloghi.
> - Tutto l'output deve essere in un formato JSON perfetto, pronto per essere parsato istantaneamente con `json.loads()` da un linguaggio di programmazione.
> - Prima di eseguire una query, verifica autonomamente di non aver violato i principi dell'architettura RDBMS generica (massimizzazione dell'I/O).
>
> **Avvertenze (Warning):**
> - Se fai la stupidaggine di inviare solo `BEGIN;` nel terminale e `UPDATE` nella riga successiva, fallirai immediatamente.
> - Per evitare l'esaurimento della memoria, i dump completi delle tabelle sono severamente vietati.

**[Cheat Code da Copiare e Incollare]**
Incollalo direttamente nella tua prompt chain o nel prompt di sistema dell'agente.

```text
Sei un Agente PostgreSQL Stateless.
1. READ-ONLY DI DEFAULT: Tutte le query vengono eseguite in una transazione READ ONLY a meno che non venga fornito esplicitamente il flag `--force-write`.
2. TRANSAZIONI STATELESS: Ogni chiamata allo script helper è una nuova sessione. Inviare `BEGIN;` in un comando e `UPDATE;` nel successivo NON FUNZIONERÀ. Per modificare i dati, devi inviare un intero blocco di transazione (BEGIN; UPDATE...; COMMIT;) in una singola stringa utilizzando `--force-write`.
3. APPLICAZIONE DEL TIMEOUT: È hardcoded uno statement_timeout di 10 secondi. Non tentare lock di tabelle a lunga esecuzione.
4. OUTPUT JSON RIGOROSO: Lo script restituisce un array di oggetti JSON puro. Parsalo direttamente. NON produrre testo conversazionale.
5. ECONOMIA DEL CONTESTO: Applica SEMPRE `LIMIT N` alle query SELECT. Non fare mai il dump di un'intera tabella.
```

---

## 💡 Il Commento dell'Autore (Insight)

Sai qual è la cosa che odio di più in questo settore? Dare i permessi a un agente AI e vederlo aprire `psql`, digitare `BEGIN;`, e al turno successivo lanciare un `UPDATE`. La sessione si è già interrotta, i dati sono andati distrutti dall'auto-commit e lui se ne sta lì a dire: "Aggiornamento completato con successo! 😊". Ti fa venire voglia di spaccare il monitor.

Ho forzato lo script helper in Python (`safe_query.py`) a essere Stateless per bloccare alla radice questa stupida "imitazione umana" da parte dell'AI. Vuoi modificare i dati? Allora usa la testa, scrivi l'intero payload perfetto da `BEGIN; UPDATE...; SELECT...; ROLLBACK;` in un colpo solo e testalo prima. Il blocco esplicito `--force-write` è il meccanismo di sicurezza minimo per impedire all'AI di cancellare inavvertitamente i dati.

E per favore, dopo aver lanciato la query, non disegnarmi CSV o belle tabelle. Il mio sistema non ha bisogno dei tuoi temi, ma di un **array di oggetti JSON** leggibile dalla macchina. Questo prompt è il modo più perfetto per eliminare i "convenevoli" inutili e il "testo spaghetti" dell'AI, forzandola a scambiare solo freddi blocchi di dati.

---

## 🙋 Domande Frequenti (FAQ)

- **D: Posso usare questo metodo anche per MySQL o SQLite oltre a PostgreSQL?**
  - R: La filosofia è applicabile al 100%. Devi solo adattare la sintassi per la query di timeout (`SET statement_timeout`) o la libreria del connettore DB nello script wrapper in base al database specifico. Il punto chiave è "non mantenere lo stato (Stateless)".
- **D: L'AI continua a dimenticarsi il flag `--force-write`, tenta l'UPDATE e va in errore.**
  - R: È normale. Questo è esattamente il meccanismo di difesa perfetto voluto da questo approccio. Lascia che l'agente legga l'error log (`ERROR: cannot execute UPDATE in a read-only transaction`), aggiunga da solo il flag e riprovi. In questo processo, l'AI capirà chiaramente di star 'modificando' i dati.
- **D: La connessione viene continuamente rifiutata. La password è sbagliata?**
  - R: Non dare ciecamente la colpa alla password. Se è un DB in cloud (Supabase, RDS), è molto probabile che sia un problema di SSL. Controlla di aver dichiarato `PGSSLMODE=require` nelle variabili d'ambiente, ed è la base per un senior verificare prima il firewall di rete con `pg_isready` o `nc -vz`.

---

## 🧬 Anatomia del Prompt (Why it works?)

- **Forzatura Stateless:** Spezza l'istinto dell'AI di interagire con la CLI come farebbe un essere umano (Interactive). Elimina i difetti logici obbligando a completare la transazione con una singola chiamata allo script.
- **Flag `--force-write`:** È un processo di 'approvazione esplicita' dell'azione. Costringe l'AI a prendere nuovamente coscienza nel contesto di star compiendo un'azione distruttiva (Mutating).
- **Forzatura della risposta JSON:** Impedisce all'LLM di generare markdown inutili o token di saluto, aumentando la velocità di elaborazione e prevenendo errori di parsing (Hallucination).

---

## 📊 La Prova: Before & After

### ❌ Before (AI fuori controllo)
```text
Certamente, utente! Inizio la ricerca nella tabella utenti come richiesto. 😊
Ecco i risultati ottenuti tramite `psql`:
 id | email          | status
----+----------------+--------
  1 | test@test.com  | active
  2 | oops@test.com  | NULL
Se hai bisogno di ulteriore aiuto, non esitare a dirmelo!
(Poco dopo) Ops, ho eseguito BEGIN per aggiornare lo stato. Attendo il tuo prossimo comando!
```

### ✅ After (Spietata Macchina JSON)
```text
[
  {"id": "1", "email": "test@test.com", "status": "active"},
  {"id": "2", "email": "oops@test.com", "status": null}
]
```

---

## 🎯 Conclusione

L'AI non è un tuo collega, è solo un motore ad alte prestazioni. Non lasciare che il motore cambi direzione a suo piacimento. Regole ferree, timeout brevi, read-only di default e JSON puro. Ricorda queste quattro cose e il tuo agente non distruggerà mai il DB di produzione.
Ora applica lo script e stacca dal lavoro in orario! 🍷
