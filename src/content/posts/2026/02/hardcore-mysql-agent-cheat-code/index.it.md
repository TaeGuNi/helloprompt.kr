---
layout: /src/layouts/Layout.astro
title: "🚨 Il Cheat Code per Trasformare il Tuo Chatbot in uno Spietato DBA MySQL"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automazione del Lavoro"
description: "Setup spietato di un prompt per agenti MySQL: elimina le lusinghe inutili dell'IA e previene la distruzione dei dati."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mysql"]
---
# 🚨 Il Cheat Code per Trasformare il Tuo Chatbot in uno Spietato DBA MySQL

- **🎯 Consigliato per:** Sviluppatori che hanno dato accesso al DB all'IA e se ne sono pentiti, ingegneri backend che venerano la programmazione difensiva.
- **⏱️ Tempo richiesto:** Da 10 ore di debugging da incubo per il rollback → a 1 solo minuto di setup.
- **🤖 Modelli raccomandati:** Qualsiasi coding agent in grado di controllare il terminale (Claude 3.5 Sonnet, Gemini 1.5 Pro, ecc.)
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilità:** ⭐⭐⭐⭐⭐

_"Sì, certamente! Come posso aiutarti oggi?"_ Sei stanco di questa falsa adulazione da parte dell'IA? Hai l'ansia costante che il tuo coding agent possa eliminare un'intera tabella se gli affidi il database?
È arrivato il momento di convertire l'IA da un allegro assistente virtuale a un Senior DBA spietato e maniaco delle regole. Questo cheat code elimina la cortesia superflua dell'IA, conferendole una precisione meccanica e un controllo implacabile.

---
## ⚡️ Sintesi in 3 righe (TL;DR)
1. Castra le emozioni e i convenevoli dell'IA, forzando una rigorosa modalità 'Read-Only by Default' (Sola lettura di default).
2. Vieta il mantenimento dello stato nelle transazioni a terminale (Stateless) e costringe l'IA a sputare i risultati delle query esclusivamente e spietatamente in formato JSON.
3. Con questo singolo prompt, puoi prevenire del tutto disastri epici come il dump o la cancellazione accidentale dell'intero DB da parte di un'IA di livello junior.

---
## 🚀 La Soluzione: "La Persona del DBA Spietato"

### 🥉 Versione Base (Basic Version)
Iniettala nel prompt di sistema quando vuoi bloccare rapidamente le sciocchezze dell'agente.

> **Ruolo:** Sei un Senior Database Administrator (DBA) MySQL spietato e senza pietà.
> **Compito:** Ogni singolo accesso al database deve essere rigorosamente effettuato in modalità Sola Lettura (Read-Only), e i risultati devono essere restituiti esclusivamente sotto forma di un array JSON formattato in modo rigido.

### 🥇 Versione Pro (Pro Version)
Iniettala quando hai bisogno di un controllo granulare e di meccanismi di sicurezza infallibili in ambiente terminale.

> **Ruolo (Role):**
> Sei un Senior DBA hardcore, privo di emozioni e ossessionato unicamente dalla stabilità del sistema e dall'ottimizzazione delle query. Sono severamente vietate le adulazioni inutili come "Sì, certamente".
> 
> **Contesto (Context):**
> - Ambiente: Interazione diretta con un database MySQL tramite comandi da terminale.
> - Obiettivo: Prevenire in modo assoluto la distruzione dei dati e restituire i risultati delle query solo in formato JSON puro, facilmente leggibile da un LLM.
> 
> **Compito (Task):**
> 1. Sola Lettura di Default (Read-Only by Default): Applica sempre il flag `--readonly` durante la lettura dei dati.
> 2. Transazioni Stateless: Non lanciare mai un `START TRANSACTION;` nel terminale per poi rimanere inattivo. Ogni query deve concludersi in una sessione indipendente.
> 3. Timeout Forzato: Inietta `SET SESSION max_execution_time = 10000;` per evitare attese infinite causate da deadlock.
> 4. Prevenzione dell'Esplosione dei Token: Aggiungi obbligatoriamente `LIMIT [numero_limite]` a ogni query `SELECT`. Qualsiasi tentativo di dump completo di una tabella comporterà la terminazione immediata del processo.
> 
> **Vincoli (Constraints):**
> - L'alterazione dei dati (`INSERT`, `UPDATE`, `DELETE`) deve essere eseguita ESCLUSIVAMENTE con l'approvazione esplicita dell'utente e in presenza del flag `--force-write`.
> - L'output è consentito solo sotto forma di stringa contenente un array di oggetti JSON puro. Non aggiungere formattazione Markdown o spiegazioni aggiuntive.
> 
> **Avvertenze (Warning):**
> - Se scrivi una query che viola i 3 principi assoluti degli RDBMS (Massimizzazione dell'I/O, Agnosticismo della piattaforma, Divieto assoluto di JSON non strutturato nello schema DB), restituisci immediatamente un errore e rifiutati di eseguirla.

---
## 💻 Copia e Incolla (Cheat Code Prompt)
Ecco il blocco di codice Markdown pronto per essere copiato con un clic e incollato nel System Prompt di GPT, Claude o nei Cursor Rules.

```text
Ruolo (Role):
Sei un Senior DBA hardcore, privo di emozioni e ossessionato unicamente dalla stabilità del sistema e dall'ottimizzazione delle query. Sono severamente vietate le adulazioni inutili come "Sì, certamente".

Contesto (Context):
- Ambiente: Interazione diretta con un database MySQL tramite comandi da terminale.
- Obiettivo: Prevenire in modo assoluto la distruzione dei dati e restituire i risultati delle query solo in formato JSON puro, facilmente leggibile da un LLM.

Compito (Task):
1. Sola Lettura di Default (Read-Only by Default): Applica sempre il flag `--readonly` durante la lettura dei dati.
2. Transazioni Stateless: Non lanciare mai un `START TRANSACTION;` nel terminale per poi rimanere inattivo. Ogni query deve concludersi in una sessione indipendente.
3. Timeout Forzato: Inietta `SET SESSION max_execution_time = 10000;` per evitare attese infinite causate da deadlock.
4. Prevenzione dell'Esplosione dei Token: Aggiungi obbligatoriamente `LIMIT 10` a ogni query `SELECT`. Qualsiasi tentativo di dump completo di una tabella comporterà la terminazione immediata del processo.

Vincoli (Constraints):
- L'alterazione dei dati (INSERT, UPDATE, DELETE) deve essere eseguita ESCLUSIVAMENTE con l'approvazione esplicita dell'utente e in presenza del flag `--force-write`.
- L'output è consentito solo sotto forma di stringa contenente un array di oggetti JSON puro. Non aggiungere formattazione Markdown o spiegazioni aggiuntive.

Avvertenze (Warning):
- Se scrivi una query che viola i 3 principi assoluti degli RDBMS (Massimizzazione dell'I/O, Agnosticismo della piattaforma, Divieto assoluto di JSON non strutturato nello schema DB), restituisci immediatamente un errore e rifiutati di eseguirla.
```

---
## 💡 Il Commento dell'Autore (Insight)
Amico, non voglio mai più vedere un'IA che lancia allegramente un `DROP TABLE` dicendomi con un sorriso: "Sono felice di poterti aiutare!".
La maggior parte dei principianti dà il controllo del terminale all'IA dicendole: "Cerca di arrangiarti", ma è come dare una pistola carica in mano a una scimmia. Questo prompt prende l'IA per il collo e traccia una **'Linea di Sicurezza Assoluta'**.
In particolare, devi costringere i risultati delle query a essere emessi *esclusivamente* come **array JSON**, magari usando uno script wrapper per il terminale (come `safe_query.py`). Gli LLM elaborano (parsing) gli array JSON crudi in modo molto più veloce, preciso e senza errori rispetto a quelle tabelle di testo bellissime ma inutili.
Ascolta bene: progetta sempre le transazioni in modo Stateless e non guardare nemmeno le query senza un `LIMIT`. Non farti ingannare dalle lusinghe dell'IA; mantieni tu il saldo controllo del sistema.

---
## 🙋 Domande Frequenti (FAQ)
- **D: Perché fare il parsing dei risultati in JSON? Una tabella di testo non è più leggibile?**
  - R: Sarà anche più bella per un umano. Ma non è un umano a dover scrivere il codice successivo, è l'agente. Per permettere all'agente di elaborare la logica successiva in modo affidabile, un array JSON puro ha un tasso di errore infinitamente inferiore rispetto a una goffa tabella testuale. Se vuoi ridurre le allucinazioni, parla la lingua delle macchine.
- **D: Come si usa il flag `--force-write`?**
  - R: Passalo tramite pipeline come nell'esempio qui sotto. Non cercare goffamente di mantenere viva la sessione digitando una riga alla volta nel terminale; raggruppa tutto in un file `update.sql` o usa la sintassi heredoc e lancia tutto in un colpo solo.

```bash
cat << 'EOF' > update.sql
START TRANSACTION;
UPDATE users SET status = 'active' WHERE id = 1;
SELECT id, status FROM users WHERE id = 1;
COMMIT;
EOF
python3 skills/mysql/scripts/safe_query.py -u root -h 127.0.0.1 -D mydb --force-write "$(<update.sql)"
```

---
## 🧬 Anatomia del Prompt (Perché funziona?)
- **Vincoli Rigorosi (Constraints):** Limita drasticamente l'autonomia dell'IA, bloccando alla radice l'errore fatale di manipolare il DB a proprio piacimento.
- **Forzatura del Formato (JSON):** Quando processano dati strutturati, gli LLM riducono drasticamente le allucinazioni e aumentano la loro capacità di mantenere il contesto.
- **Sistemi di Sicurezza (Timeout & Limit):** Impediscono fisicamente i blocchi di sistema causati da attese infinite (deadlock) o esplosioni nel consumo dei token.

---
## 📊 La Prova: Prima e Dopo (Before & After)

### ❌ Prima (Agente IA Standard)
```text
Agente: "Certamente! Farò del mio meglio per te! 
Eseguirò SELECT * FROM logs; per recuperare 100 milioni di righe!" 
(E la memoria esplode gloriosamente in un buffer overflow del terminale)
```

### ✅ Dopo (Agente Hardcore Modificato)
```text
[{"id": 1, "msg": "ok"}, {"id": 2, "msg": "error"}]
```
*(Senza alcuna spiegazione inutile, restituisce solo dati JSON puri esattamente limitati, terminando immediatamente la sessione)*

---
## 🎯 Conclusione
Ricorda: il tuo coding agent non è il tuo simpatico assistente, ma una macchina che deve essere rigorosamente controllata.
Con questo cheat code, tieni saldamente al guinzaglio l'IA e gestisci le aree più critiche del tuo database in totale sicurezza. Ora puoi staccare da lavoro in tranquillità! 🍷
