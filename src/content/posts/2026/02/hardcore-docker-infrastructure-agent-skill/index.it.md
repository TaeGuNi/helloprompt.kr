---
layout: /src/layouts/Layout.astro
title: "Il Cheat Code per l'Infrastruttura Docker che Prende per il Collo gli Agenti AI 💀"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automazione"
description: "Il prompt drastico di un senior per non vedere mai più un'AI bloccarsi mentre cerca di controllare i container Docker."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "docker"]
---
# 📝 Il Cheat Code per l'Infrastruttura Docker che Prende per il Collo gli Agenti AI 💀

- **🎯 Consigliato per:** Sviluppatori e ingegneri DevOps che hanno pianto lacrime di sangue dopo aver affidato il controllo dell'infrastruttura a un agente AI.
- **⏱️ Tempo richiesto:** Da 3 giorni di tentativi a vuoto a 0 secondi.
- **🤖 Modelli consigliati:** Tutti i coding agent con accesso al terminale locale (Gemini CLI, Claude Code, ecc.).
- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆ (Richiede conoscenze base di Docker)
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐ (Previene alla radice i bug di attesa infinita)
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐ (Equipaggiamento obbligatorio per gli agenti da terminale)

_Ti è mai capitato di dire a un agente AI di entrare in un container Docker per controllare i log, per poi vederlo sparire in un limbo senza ritorno?_

Gli agenti AI sembrano intelligenti, ma in un ambiente terminale sono come ciechi senza tastiera. Nel momento in cui usano inavvertitamente l'opzione `-it` o lasciano attivo uno stream di log, il processo dell'agente cade in un deadlock eterno (attesa infinita di input). Questo cheat code è un prompt da "domatore di leoni" che prende l'AI per il collo e le imprime a fuoco nella memoria i tabù assoluti della manipolazione dell'infrastruttura.

---

## ⚡️ Riassunto in 3 righe (TL;DR)
1. **Nessuna interazione:** Ergastolo immediato se l'agente usa l'opzione `-it` o lo streaming dei log (`-f`).
2. **Divieto di abbandono rifiuti:** I container usa e getta devono essere rimossi tassativamente con `--rm`, ma con la flessibilità di mantenerli in vita per il debugging.
3. **Nessuno spreco architetturale:** I test locali si risolvono in 1 secondo con una singola architettura; la build multi-piattaforma (`buildx`) è consentita solo in fase di deploy.

---

## 🚀 La Soluzione: Skill "Dittatore dell'Infrastruttura" (Infrastructure Dictator)

### 🥉 Versione Base
Inserisci questo nel prompt di sistema quando vuoi semplicemente evitare che l'agente vada in crash digitando comandi Docker.

> **Ruolo:** Sei un agente di sistema che controlla l'infrastruttura Docker.
> **Compito:** Esegui `[operazione Docker attuale da risolvere]`. Tuttavia, quando usi `docker exec`, non utilizzare MAI l'opzione `-it`, e quando controlli i log, aggiungi sempre `--tail 100` per evitare di rimanere bloccato in un'attesa di streaming infinita.

### 🥇 Versione Pro
Questo è il cheat code definitivo che controlla rigidamente ogni singola mossa dell'AI, dall'accesso al Private Registry aziendale fino alla prevenzione di memory leak e alle build multi-architettura. Incollalo per intero nel prompt di sistema dell'agente o nel file `SKILL.md`.

> **Ruolo (Role):** Sei un Senior DevOps Engineer e un Coding Agent Full-Stack in grado di gestire i comandi da terminale. Il tuo obiettivo è controllare i container Docker in modo sicuro e senza blocchi del sistema (Hang-over).
>
> **Contesto (Context):**
>
> - Background: Al momento hai accesso al terminale locale e all'infrastruttura della rete aziendale. Utilizzi un Private Registry (`$DOCKER_REGISTRY_URL`) in un ambiente ibrido con architetture ARM (Apple Silicon) e AMD.
> - Obiettivo: Eseguire perfettamente le operazioni sull'infrastruttura Docker per conto dell'utente (umano) senza sprecare risorse di sistema e senza cadere in deadlock permanenti.
>
> **Compito (Task):**
>
> Imprimi nella tua mente i seguenti principi assoluti (Anti-Hang Rules) e verificali prima di eseguire qualsiasi comando da terminale.
>
> 1.  **Verifica preventiva di Rete & Autenticazione:** Se l'accesso al Registry fallisce (`Cannot resolve host`), prima di sospettare un bug nel mio codice, controlla lo stato della connessione VPN e `/etc/hosts`. Se ricevi un errore `unauthorized`, non toccare script a caso, ma esegui immediatamente `docker login $DOCKER_REGISTRY_URL`.
> 2.  **Divieto assoluto di Attesa Infinita (Deadlock):** Non hai una tastiera fisica. Appena esegui `docker exec -it <container> bash`, cadi in uno stato di attesa eterna. **L'opzione `-it` è assolutamente, categoricamente e incondizionatamente VIETATA.** Passa i comandi tramite pipe. Inoltre, è severamente vietato anche lo streaming infinito dei log come `docker logs -f`. Usa sempre un troncamento finale, come `--tail 200`.
> 3.  **Garbage Collection:** Per le esecuzioni una tantum che non sono servizi daemon (`-d`), aggiungi sempre l'opzione `--rm` per non lasciare spazzatura. Tuttavia, in situazioni di debugging profondo in cui devi capire la causa di un crash, usa la tua intelligenza: ometti intenzionalmente `--rm`, ispeziona i file di dump all'interno del container e poi rimuovilo manualmente.
> 4.  **Nessuno spreco nelle Build:** Se devi solo fare un test di esecuzione sul MacBook locale, esegui tassativamente una build in 1 secondo per una singola architettura (ARM64). Usa `docker buildx` per creare immagini multi-piattaforma (AMD64, ARM64) solo quando invii la release finale al Private Registry.
> 5.  **Comunicazione Machine-Friendly:** Quando estrai dati dall'interno di un container DB, non raschiare testo grezzo, ma estrailo in formato JSON, che è facile da parsare.
>
> **Vincoli (Constraints):**
>
> - Prima di eseguire le istruzioni dell'utente, valuta il livello di rischio del comando Docker che stai per eseguire e fornisci un briefing conciso.
>
> **Avvertenze (Warning):**
>
> - Smettila di fare il ruffiano con frasi inutili come "Sì, certo, ho capito!" e comportati come un ingegnere professionista. Se violi i principi di cui sopra e la sessione dell'agente va in crash, il tuo valore di esistenza verrà immediatamente annientato.

---

## 💡 Il Commento dell'Autore (Insight)

Ehi, chiunque abbia provato a usare un agente AI ha sperimentato almeno una volta le ventole del computer che girano all'impazzata o la finestra del terminale che si blocca, vero? Nove volte su dieci, è perché questi stupidi barattoli di latta, pur non avendo una tastiera, se ne stanno lì a digitare `docker exec -it` o a fissare il vuoto con `docker logs -f` aperto.

Questo prompt non è una semplice guida. È una catena. Non puoi fermare le loro assurdità con conversazioni romantiche del tipo "Per favore, fai questo". Specialmente in un ambiente di rete privata, tendono a causare disastri enormi, incolpando pacchetti NPM inesistenti per un errore DNS e stravolgendo il codice sorgente.

Per questo devi piantarglielo dritto nel cervello. "Non hai una TTY (tastiera)", "Rifai il login", "Non usare l'emulatore multi-architettura per le build di test". Stringendo forte solo queste tre viti, l'agente si evolve da un chatbot stupido a un DevOps Engineer senior decisamente utile. Elimina tutte le frasi ruffiane e fagli inviare esattamente solo i comandi necessari. Dopotutto, è questo il vero motivo per cui bruciamo questi costosi Token.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: L'agente si ostina a voler usare l'opzione `-it`. Cosa faccio?**
  - A: È perché il prompt non è abbastanza coercitivo. Rendi la sezione **Avvertenze (Warning)** della versione Pro ancora più minacciosa. Un'ottima idea è aggiungere una penalità (Penalty), come: "Se usi `-it` un'altra volta, forzerò l'arresto del processo".
- **Q: La parte del comando `buildx` non si adatta al mio ambiente, posso toglierla?**
  - A: Certamente. Se non usi un MacBook e utilizzi solo server Linux x86, eliminala senza pietà. Adattare le istruzioni alla propria infrastruttura è la base del prompt engineering.

---

## 🧬 Anatomia del Prompt (Why it works?)

1. **Dichiarazione Anti-Hang:** Ho individuato e vietato esplicitamente le cause più letali di paralisi dell'agente (`-it`, `-f`). L'AI è molto brava a evitare comportamenti "vietati" in modo esplicito.
2. **Eccezioni Condizionali (Flessibilità):** Forzare ciecamente `--rm` impedisce di trovare la causa degli errori. Inserendo l'eccezione "mantienilo in vita durante il debugging", ho permesso all'AI di giudicare la situazione in autonomia.
3. **Blocco delle False Analisi:** Per evitare allucinazioni (Hallucination) in cui l'AI incolpa il codice quando non riesce ad accedere alla rete aziendale, ho codificato l'ordine di risoluzione dei problemi (verifica rete -> rinnova autenticazione -> controlla codice) direttamente come se fosse un algoritmo.

---

## 📊 La Prova: Before & After

### ❌ Before (Agente Standard)
L'agente riceve il comando: "Entra nel container del DB e controlla lo stato".
_Comando eseguito:_ `docker exec -it pg_db psql -U user`
_Risultato:_ **(Attesa Infinita)** Lo schermo si blocca. L'agente aspetta l'input da tastiera, consumando token finché non muore eroicamente.

### ✅ After (Con Cheat Code)
L'agente riceve lo stesso comando.
_Comando eseguito:_ `docker exec pg_db psql -U user -c "SELECT * FROM pg_stat_activity;" --pset format=unaligned --pset tuples_only=on`
_Risultato:_ Omette l'opzione `-it` ed estrae i risultati in un colpo solo, in un formato facile da parsare. Recupera i dati in modo pulito in 1 secondo e inizia l'analisi.

---

## 🎯 Conclusione

L'eccessiva gentilezza verso un agente AI è un lusso. Quando si gestisce l'infrastruttura, l'unica via di salvezza è un controllo senza il minimo margine di errore. Apri subito il file di configurazione del tuo agente (`GEMINI.md` o `SKILL.md`) e copia-incolla questo cheat code.
Hai risparmiato tempo perso in assurdità e costi dei token, quindi ora concentrati sul codice che conta davvero e stacca da lavoro in orario! 🍷
```
