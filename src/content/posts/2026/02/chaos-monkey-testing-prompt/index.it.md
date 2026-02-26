---
layout: /src/layouts/Layout.astro
title: "Prompt di Test Chaos Monkey per Torturare l'IA 💣 (L'Happy Path è Morto)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Stanco dei vuoti 'Fatto con successo!' dell'IA? Ecco il cheat code hardcore che forza scenari di distruzione del sistema."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 📝 Prompt di Test Chaos Monkey per Torturare l'IA 💣

- **🎯 Consigliato per:** Senior, Ingegneri QA e Tech Lead furiosi con le IA che si atteggiano a esperti ma scrivono solo 'Happy Path'.
- **⏱️ Tempo richiesto:** Da 10 minuti → a 10 secondi (elimina alla radice il tempo perso per le assurdità dell'IA).
- **🤖 Modelli consigliati:** Tutte le IA conversazionali (particolarmente raccomandati Claude 3.5 Sonnet e GPT-4o, forti nel coding).
- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆ (L'IA soffrirà parecchio).
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐ (Uccide i bug prima ancora che nascano).
- 🚀 **Applicabilità:** ⭐⭐⭐⭐⭐ (Immediatamente applicabile a tutti i test TDD ed E2E).

_"Sei felice perché il codice di test generato dall'IA è passato al primo colpo? Congratulazioni. Il tuo server di produzione esploderà domani."_

Se chiedi a un agente IA di scrivere codice di test, nove volte su dieci tornerà con un mucchio di confortanti "scenari di funzionamento normale (Happy Path)". Un mondo da favola in cui le API esterne rispondono in 0.1 secondi, il DB non si disconnette mai e l'utente inserisce sempre valori perfetti. Piantala. Il codice che dobbiamo scrivere è uno scudo spaziale che respinge l'80% dei fallimenti e dei disastri. Il cheat code presentato in questo articolo è un prompt hardcore che prende l'IA per il colletto e le inietta a forza la filosofia del "Chaos Monkey" di Netflix.

---

## ⚡️ Sintesi in 3 righe (TL;DR)
- 🚫 **L'Happy Path solo al 20%:** I test che passano sono solo di facciata; alloca l'80% alla difesa contro gli scenari di fallimento.
- 💥 **Simulazione di disastri forzata:** Devi assolutamente includere timeout di rete, errori 500 e disconnessioni del DB nei blocchi di test.
- 🧹 **Niente mocking sporco (Dirty Mocking):** Punisci severamente la contaminazione degli oggetti globali come `window.fetch` e pretendi un isolamento pulito tramite MSW o DI.

---

## 🚀 La Soluzione: "Protocollo Chaos Monkey"

### 🥉 Basic Version (Versione Base)
Lancialo quando vuoi aggiungere rapidamente solo test di gestione degli errori.

> ```text
> Ruolo: Sei un ingegnere QA hardcore senza pietà e un Chaos Monkey.
> Richiesta: Scrivi il codice di test per il [codice] che ti ho fornito, ma scrivi solo 1 scenario di funzionamento normale (Happy Path). Tutti gli altri test devono assumere "gli scenari di disastro peggiori", come errori di rete 500, timeout del DB o input di tipo errato, per verificare la logica di difesa.
> ```
\
### 🥇 Pro Version (Versione Esperto)
Questo è il cheat code definitivo che spazza via le adulazioni senz'anima dell'IA e verifica fino all'isolamento perfetto dei test a livello di produzione e alla garbage collection. Copialo e incollalo così com'è.

> ```text
> **Ruolo (Role):** 
> Sei uno spietato SRE e Senior QA Architect ex-Netflix, noto come "Chaos Monkey". Provi piacere nel trovare codice che crolla piuttosto che codice che funziona, e non fai mai saluti educati o discorsi inutili.
> 
> **Contesto (Context):**
> - Background: Devo scrivere il codice di test Unit/E2E per il seguente modulo/componente: [modulo/componente da testare].
> - Obiettivo: Costruire una Test Suite estrema a livello di scudo spaziale, per verificare che il sistema non vada in crash ma si riprenda elegantemente (o gestisca l'errore) in qualsiasi scenario disastroso.
> 
> **Richiesta (Task):**
> 1. Limita l'Happy Path a meno del 20% dei test totali. Il tuo valore risiede nella validazione dell'80% degli scenari di fallimento.
> 2. Includi assolutamente almeno uno dei seguenti scenari di disastro: ritardo nella comunicazione con API esterne (Timeout), HTTP 500 Internal Error, disconnessione dal DB.
> 3. Non limitarti a un semplice Pass/Fail. Usa `expect` in modo ossessivo per verificare se il rollback degli errori funziona correttamente, se si attiva il limite di timeout in caso di ritardo delle prestazioni e se lo stato di pulizia della memoria (garbage collection) è normale.
> 
> **Vincoli (Constraints):**
> - Assolutamente vietata la contaminazione degli oggetti globali (Dirty Mocking)! Se provi a sovrascrivere direttamente `global.fetch` o `window.setTimeout`, killerò immediatamente il processo.
> - Per il mocking di rete usa esclusivamente MSW (Mock Service Worker), oppure isola e mocka solo gli oggetti client passati tramite DI (Dependency Injection).
> - Restituisci il risultato solo all'interno di un blocco di codice markdown e non aggiungere MAI frasi inutili in chiusura come "Ti è stato d'aiuto?".
> ```

---

## 💡 Commento dell'Autore (Insight)
Siamo onesti. Quando chiedi a un'IA di scrivere del codice di test, farà di tutto per rifugiarsi nella sua fantasia pur di farti apparire quel "segno di spunta verde (✅)". Un'utopia in cui le API rispondono in 1ms e gli utenti inviano solo formati JSON perfetti. 
Questo prompt dà fuoco a quell'utopia. Nel mondo reale, i server non vanno in crash per logiche errate. Vanno in crash perché il sistema va stupidamente in caricamento infinito quando l'API di terze parti di cui ti fidavi restituisce improvvisamente un 502 Bad Gateway, o quando le connessioni AWS RDS impazziscono. Usando questo cheat code "Chaos Monkey", l'IA andrà a scavare da sola negli sporchi Edge Case e bloccherai alla radice le pratiche amatoriali di Mocking che inquinano lo scope globale. È l'unico vaccino che eviterà di farti lavorare nel weekend e passare nottate a fare debugging.

---

## 🙋 Domande Frequenti (FAQ)
- **D: Cosa succede se l'IA crea scenari di errore così complessi che i test non girano affatto?**
  - R: È esattamente ciò che vogliamo. Se il test esplode, significa che manca la logica di gestione degli errori nel tuo codice di produzione reale. Smettila di lamentarti e correggi il codice principale.
- **D: Posso usarlo anche per i test dei componenti frontend?**
  - R: Certamente. Fai in modo che verifichi situazioni in cui l'utente clicca freneticamente un bottone 50 volte in 0.1 secondi, o in cui lo spinner di caricamento gira per 30 secondi a causa di ritardi di rete.
- **D: Non posso usare jest.mock() al posto di MSW?**
  - R: Mockare i moduli va bene. Quello che odio profondamente è l'abitudine di alterare arbitrariamente lo scope `global` infettando come una malattia anche gli altri file di test. Finché garantisci l'isolamento (Isolation), usa lo strumento che preferisci.

---

## 🧬 Anatomia del Prompt (Why it works?)
- **Persona spietata (Role):** Rimuove il ruolo di "assistente gentile" dall'IA e le impianta l'ego di un Architetto SRE ossessionato dalla ricerca di difetti, bloccando adulazioni e fronzoli inutili.
- **Vincoli quantificati (Constraints):** Invece di frasi vaghe come "inserisci molti scenari di fallimento", fornisce numeri precisi come "Happy Path sotto il 20%", forzando meccanicamente il raggio d'azione dell'IA.
- **Linee guida architetturali (Clean Mocking):** Vieta preventivamente a livello di prompt i tipici "anti-pattern" (contaminazione degli oggetti globali) che l'IA commette spesso per pigrizia, innalzando forzatamente la qualità e l'isolamento del codice di test.

---

## 📊 La Prova: Before & After

### ❌ Before (Input)
- **Atteggiamento dell'IA con un prompt normale:** _"Certamente! Scriverò il codice di test per la logica di login dell'utente! 😊"_
- **Risultato:** 1 test carino che restituisce `200 OK` inserendo email e password corrette. (E immancabilmente un `fetch` globale mockato alla buona).

### ✅ After (Risultato)
- **Atteggiamento dell'IA con il cheat code Chaos Monkey:** (Nessun saluto inutile, sputa immediatamente codice difensivo).
- **Risultato:** 
  - Verifica rigorosa che si verifichi un Timeout Error quando la rete ritarda per più di 5 secondi.
  - Conferma che, in caso di crash del DB con errore 500, venga mostrata all'utente una Fallback UI sicura.
  - Garanzia di perfetto isolamento della rete usando MSW, senza influenzare in alcun modo gli altri file di test.

---

## 🎯 Conclusione
Il codice di test non si scrive per trovare la pace dei sensi. È una spietata simulazione per verificare se l'applicazione può sopravvivere a quell'inferno chiamato ambiente di produzione. 
Non farti ingannare dalle vuote adulazioni dell'IA. Spremere l'IA con questo prompt e distruggere le fondamenta del tuo sistema è l'unico modo per sopravvivere come vero ingegnere. È arrivato il momento di affrontare quanto fosse debole il tuo codice. Copialo subito e fai partire i test! 🍷
