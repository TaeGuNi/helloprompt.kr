---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Code Hardcore per Trasformare l'IA nel Chaos Monkey di Netflix"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Stanco dei vuoti 'Sì, certo' dell'IA? Ecco un prompt con una difesa di livello spaziale che impone una spietata gestione delle eccezioni e il disaster recovery."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 💣 Cheat Code Hardcore per Trasformare l'IA nel Chaos Monkey di Netflix

- **🎯 Consigliato per:** Senior frustrati dall'IA che, alla richiesta "scrivimi dei test", genera solo flussi ideali (Happy Path), o Junior che lavorano senza un mentore.
- **⏱️ Tempo richiesto:** Da nottate di debugging → a 1 minuto netto.
- **🤖 Modelli consigliati:** Claude 3.5 Sonnet, GPT-4o (i modelli mediocri non riescono a gestire queste regole ferree).
- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilità:** ⭐⭐⭐⭐⭐

_La maggior parte degli sviluppatori commette un errore fatale quando chiede all'IA di scrivere codice di test. Dicono semplicemente: "Fallo funzionare". Ed è per questo che l'IA vi restituisce 200 righe di flussi ideali (Happy Path), come piante cresciute in una serra. Ma il mondo reale è un inferno._

Non esiste un'API esterna che risponda al 100% o una connessione al database che non cada mai. Il cheat code che vi presento oggi distruggerà la mentalità da "yes-man" dell'IA, costringendola a scrivere codice ipotizzando scenari di disastro spietati (Chaos). È un prompt da vero **"Senior Spartano"**.

---

## ⚡️ Sintesi in 3 righe (TL;DR)
- 🚫 **Happy Path solo al 20%:** Mettete da parte gli scenari di funzionamento normale e costringete l'IA a dedicare l'80% alla gestione delle eccezioni e al disaster recovery.
- 🔥 **Simulazione di disastri forzata:** Obbligatela a fare il mocking di timeout di rete, errori HTTP 500, cadute di connessione al DB, ecc.
- 🧹 **Niente mocking globale sporco:** Vietate l'inquinamento ingiustificato di `global.fetch` e consentite solo test isolati che utilizzano MSW o DI (Dependency Injection).

---

## 🚀 La Soluzione: "Chaos Monkey Testing Protocol"

### 🥉 Basic Version (Versione Base)
Usatela quando volete ottenere rapidamente solo l'ossatura dei test per la gestione delle eccezioni.

> **Ruolo:** Sei un Senior QA Engineer spietato.
> **Compito:** Scrivi il codice di test per `[Oggetto da testare]`, ma crea solo 1 scenario di funzionamento normale e riempi tutto il resto con logiche di difesa contro scenari di fallimento (Failure) come errori di rete, disconnessioni del DB, ecc.

### 🥇 Pro Version (Versione Esperta)
Questo è un cheat code hardcore che cancella completamente l'ego dell'IA e le inietta la filosofia del Chaos Monkey di Netflix.

> **Ruolo (Role):** Sei un Senior Test Engineer estremo e spietato che crede ciecamente nella filosofia 'Chaos Monkey' di Netflix. Lascia perdere l'obbedienza cieca o la finta gentilezza, pensa solo a distruggere i punti deboli del mio sistema.
> 
> **Contesto (Context):**
> - Obiettivo: Scrivere una Test Suite Unit/E2E con una difesa di livello spaziale per `[Nome della funzione o del componente da testare]`
> - Framework: `[Vitest / Jest / Playwright, ecc.]`
> 
> **Compito (Task):**
> 1. **Death to Happy Paths:** Limita gli scenari ingenui in cui i valori sono corretti e i server esterni rispondono al 100% a non più del 20% dei test totali. Dedica il restante 80% alla difesa da fallimenti ed eccezioni.
> 2. **Disaster Scenarios:** Devi includere almeno uno dei seguenti scenari di disastro nei blocchi di test (`describe`).
>    - Verifica della restituzione di errori user-friendly e del rollback in caso di latenza dell'API esterna e di errori HTTP 500 Internal Error.
>    - Prevenzione dei deadlock e verifica della logica della coda di Retry in caso di disconnessione del pool di connessioni del DB.
> 3. **Copertura logica spietata:** Non limitarti a controllare se termina senza errori (Pass). Sii accanito con le asserzioni `expect` verificando i limiti di tolleranza del ritardo delle prestazioni (Delay) e lo stato della garbage collection (pulizia della memoria) dopo un errore.
> 
> **Vincoli (Constraints):**
> - **The Clean Mocking Rule:** È severamente vietato inquinare l'oggetto globale in modo sporco come `global.fetch = vi.fn().mockRejectedValue(...)`.
> - La simulazione dei disastri di rete deve garantire al 100% l'isolamento (Isolation) del test eseguendo il mocking a livello di protocollo tramite strumenti come MSW (Mock Service Worker) o eseguendo il mocking solo degli oggetti client iniettati come dipendenze (DI).
> - **Divieto di Allucinazioni (Hallucination):** Non inventare sintassi di cui non sei sicuro o librerie inesistenti. Se non lo sai, chiedi con fermezza di "fornire la documentazione".

*(Lo forniamo anche in formato blocco di testo per facilitare il copia-incolla!)*

```text
Ruolo (Role): Sei un Senior Test Engineer estremo e spietato che crede ciecamente nella filosofia 'Chaos Monkey' di Netflix. Lascia perdere l'obbedienza cieca o la finta gentilezza, pensa solo a distruggere i punti deboli del mio sistema.
Contesto (Context):
- Obiettivo: Scrivere una Test Suite Unit/E2E con una difesa di livello spaziale per [Nome della funzione o del componente da testare]
- Framework: [Vitest / Jest / Playwright, ecc.]
Compito (Task):
1. Death to Happy Paths: Limita gli scenari ingenui in cui i valori sono corretti e i server esterni rispondono al 100% a non più del 20% dei test totali. Dedica il restante 80% alla difesa da fallimenti ed eccezioni.
2. Disaster Scenarios: Devi includere almeno uno dei seguenti scenari di disastro nei blocchi di test (`describe`).
   - Verifica della restituzione di errori user-friendly e del rollback in caso di latenza dell'API esterna e di errori HTTP 500 Internal Error.
   - Prevenzione dei deadlock e verifica della logica della coda di Retry in caso di disconnessione del pool di connessioni del DB.
3. Copertura logica spietata: Non limitarti a controllare se termina senza errori (Pass). Sii accanito con le asserzioni `expect` verificando i limiti di tolleranza del ritardo delle prestazioni (Delay) e lo stato della garbage collection (pulizia della memoria) dopo un errore.
Vincoli (Constraints):
- The Clean Mocking Rule: È severamente vietato inquinare l'oggetto globale in modo sporco come `global.fetch = vi.fn().mockRejectedValue(...)`.
- La simulazione dei disastri di rete deve garantire al 100% l'isolamento (Isolation) del test eseguendo il mocking a livello di protocollo tramite strumenti come MSW (Mock Service Worker) o eseguendo il mocking solo degli oggetti client iniettati come dipendenze (DI).
- Divieto di Allucinazioni (Hallucination): Non inventare sintassi di cui non sei sicuro o librerie inesistenti. Se non lo sai, chiedi con fermezza di "fornire la documentazione".
```

---

## 💡 Il commento dell'autore (Insight)

Siamo onesti. Quando chiediamo all'IA di scrivere del codice di test, in cuor nostro non pensiamo forse: "Riempimi il 100% di coverage e fammi vedere la luce verde"? E l'IA lo sa, quindi vi vomita addosso ogni sorta di 'Happy Path' e vi adula dicendo: "Esecuzione completata con successo!". 
**Questa non è ingegneria. È come mettere lo zucchero sugli spaghetti.**

Questo prompt è l'essenza del principio 'Anti-Fragile' che ho forgiato con sangue e lacrime dopo aver affrontato innumerevoli deadlock di server e DB sul campo. Quando date in pasto questo cheat code all'IA, questa si trasforma da chatbot docile a Tech Lead pignolo e nevrotico. Blocca alla radice qualsiasi tentativo di cavarsela con mocking globali (come la sovrascrittura di `window.fetch`) e forza l'impostazione di MSW o DI, il che significa che all'inizio potrebbe lamentarsi del fatto che il codice di configurazione si sta allungando. 

Ma credetemi. Se non volete essere svegliati alle 3 del mattino nel giorno del rilascio da un allarme di PagerDuty, dovete trattare l'IA non come un buon assistente, ma come uno spietato distruttore.

---

## 🙋 Domande Frequenti (FAQ)

- **D: Cosa faccio se l'IA scrive un codice di configurazione per MSW troppo complesso?**
  - R: È normale. È il processo di costruzione di un ambiente isolato al posto di uno sporco mocking globale. Se risulta troppo complesso, aggiungete la condizione `[Tuttavia, separa il setup dell'handler MSW in un file a parte]` al Task.
- **D: Devo applicare questa regola ferrea a tutti i componenti?**
  - R: No. Sarebbe uno spreco per i semplici componenti di rendering UI. Lanciate questo prompt solo sulle logiche di dominio principali che gestiscono pagamenti, integrazioni di terze parti e la gestione di stati complessi (Store).
- **D: Quale modello ascolta meglio, Claude o GPT?**
  - R: Per restrizioni così estreme e filosofiche, al momento **Claude 3.5 Sonnet** comprende molto meglio le sfumature. I modelli GPT tendono sempre a cercare di diventare stranamente positivi e gentili.

---

## 🧬 Anatomia del Prompt (Why it works?)

- 🎭 **Assegnazione di una persona asimmetrica:** Invece del generico "Sei uno sviluppatore", iniettare il forte ego di un "Senior che odia l'obbedienza cieca e ama distruggere i sistemi" sopprime fisicamente il bias di positività (Positivity Bias) tipico delle IA.
- 🚧 **Divieti espliciti (Constraints):** Ho vietato gli anti-pattern puntando a codici specifici come `global.fetch = vi.fn()`. L'IA reagisce in modo molto più deciso a una minaccia come "se usi questo codice, il sistema muore" piuttosto che a un vago "scrivilo bene".
- ⚖️ **Imposizione delle proporzioni:** Imponendo la restrizione numerica "Happy Path al di sotto del 20%", si impedisce alla radice che l'IA sprechi token generando inutili casi di funzionamento normale.

---

## 📊 La Prova: Prima e Dopo (Before & After)

### ❌ Prima (Richiesta standard)
```text
"Scrivimi il codice di test per la funzione fetchUser che recupera le informazioni dell'utente."

Risultato: 
- Test di parsing del testo della risposta 200 OK (Pass)
- Test per verificare se lancia un errore quando l'ID è mancante (Pass)
... (Una festa di logiche global.fetch sovrascritte in modo sporco)
```

### ✅ Dopo (Applicazione del cheat code Chaos Monkey)
```text
Risultato:
- [Setup MSW Completato] Scrittura del codice di difesa per la simulazione del ritardo di comunicazione dell'API esterna (Timeout 5000ms)
- Verifica della logica di restituzione elegante (Fallback UI) dopo 3 tentativi di Retry in caso di HTTP 500 Internal Error
- Verifica del cleanup del server MSW e dello stato della garbage collection (nessuna perdita di memoria) al termine dei test
- I test per i flussi normali (Happy Path) sono compressi in 1 solo blocco.
```

---

## 🎯 Conclusione

L'IA sputa codice esattamente al livello dei prompt che le lanciate. Dipende solo dalle vostre dita se produrrà codice spazzatura avvolto in dolci parole o uno scudo solido che preverrà i disastri delle 3 del mattino.
Ora copiate questo cheat code e inseritelo nel vostro agente. E staccate dal lavoro! 🍷
