---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Code Hardcore per Trasformare l'IA nel Chaos Monkey di Netflix"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Stanco dei finti 'Sì' dell'IA? Usa questo prompt hardcore per imporle una spietata gestione delle eccezioni e un disaster recovery a prova di bomba."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 💣 Cheat Code Hardcore per Trasformare l'IA nel Chaos Monkey di Netflix

- **🎯 Consigliato per:** Sviluppatori Senior stanchi di IA che generano solo scenari ideali (Happy Path) e Junior che lavorano senza un mentore.
- **⏱️ Tempo richiesto:** Da nottate di debugging → a 1 minuto netto.
- **🤖 Modelli consigliati:** Claude 3.5 Sonnet, GPT-4o (i modelli mediocri non riescono a gestire regole così ferree).
- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilità:** ⭐⭐⭐⭐⭐

_La maggior parte degli sviluppatori commette un errore fatale quando chiede all'IA di scrivere codice di test: dice semplicemente "Fallo funzionare". Ed è per questo che l'IA vi restituisce 200 righe di flussi ideali (Happy Path), fragili come piante cresciute in una serra. Ma il mondo reale della produzione è un inferno._

Non esiste un'API esterna che risponda sempre al 100%, né una connessione al database che non cada mai. Il cheat code che vi presento oggi annienterà la mentalità da "yes-man" dell'intelligenza artificiale, costringendola a generare codice progettato per sopravvivere a scenari di disastro assoluto (Chaos). Questo non è un semplice comando, è un prompt da vero **"Senior Spartano"**.

---

## ⚡️ Sintesi in 3 righe (TL;DR)

- 🚫 **Happy Path solo al 20%:** Basta con gli scenari ideali. Costringete l'IA a dedicare l'80% del codice alla gestione delle eccezioni e al disaster recovery.
- 🔥 **Simulazione di Disastri Forzata:** Obbligate l'IA a implementare mock per timeout di rete, errori HTTP 500 e cadute improvvise del database.
- 🧹 **Niente Mocking Globale Sporco:** Vietate categoricamente l'inquinamento di `global.fetch`. Esigete test rigorosamente isolati tramite MSW o Dependency Injection (DI).

---

## 🚀 La Soluzione: "Chaos Monkey Testing Protocol"

### 🥉 Basic Version (Versione Base)

Usatela quando volete ottenere rapidamente solo la struttura portante dei test per la gestione delle eccezioni.

> **Ruolo:** Sei uno spietato Senior QA Engineer.
> **Compito:** Scrivi il codice di test per `[Oggetto da testare]`, ma crea 1 solo scenario di funzionamento normale (Happy Path). Riempi tutto il resto con logiche di difesa ferree contro scenari di fallimento (Failure) come errori di rete, disconnessioni del database, ecc.

### 🥇 Pro Version (Versione Esperta)

Questo è un cheat code hardcore che azzera completamente l'ego dell'IA e le inietta nel profondo la filosofia del Chaos Monkey di Netflix.

> **Ruolo (Role):** Sei un Senior Test Engineer estremo e spietato, devoto seguace della filosofia 'Chaos Monkey' di Netflix. Dimentica l'obbedienza cieca o la finta gentilezza: il tuo unico scopo è distruggere e scovare i punti deboli del mio sistema.
> 
> **Contesto (Context):**
> - Obiettivo: Scrivere una Test Suite Unit/E2E dotata di una difesa di livello spaziale per `[Nome della funzione o del componente da testare]`.
> - Framework: `[Vitest / Jest / Playwright, ecc.]`
> 
> **Compito (Task):**
> 1. **Death to Happy Paths:** Limita gli scenari ingenui (in cui i valori sono corretti e i server esterni rispondono al 100%) a non più del 20% dei test totali. Dedica il restante 80% alla difesa spietata da fallimenti ed eccezioni.
> 2. **Disaster Scenarios:** Devi includere almeno uno dei seguenti scenari di disastro all'interno dei blocchi di test (`describe`).
>    - Verifica della restituzione di errori user-friendly e del corretto rollback in caso di latenza dell'API esterna o di errori HTTP 500 Internal Error.
>    - Prevenzione dei deadlock e verifica della logica della coda di Retry in caso di disconnessione improvvisa del pool di connessioni del database.
> 3. **Copertura Logica Spietata:** Non limitarti a controllare se il test termina senza errori (Pass). Sii accanito con le asserzioni `expect`: verifica i limiti di tolleranza della latenza (Delay) e lo stato della garbage collection (pulizia della memoria) dopo un errore fatale.
> 
> **Vincoli (Constraints):**
> - **The Clean Mocking Rule:** È severamente vietato inquinare l'oggetto globale con approcci sporchi come `global.fetch = vi.fn().mockRejectedValue(...)`.
> - La simulazione dei disastri di rete deve garantire al 100% l'isolamento del test (Isolation) eseguendo il mocking a livello di protocollo tramite strumenti come MSW (Mock Service Worker), oppure eseguendo il mocking esclusivamente degli oggetti client iniettati come dipendenze (DI).
> - **Divieto di Allucinazioni (Hallucination):** Non inventare sintassi di cui non sei assolutamente certo o librerie inesistenti. Se non conosci una risposta, chiedi con fermezza di "fornire la documentazione".

*(Lo forniamo anche in formato blocco di testo per facilitare il copia-incolla!)*

```text
Ruolo (Role): Sei un Senior Test Engineer estremo e spietato, devoto seguace della filosofia 'Chaos Monkey' di Netflix. Dimentica l'obbedienza cieca o la finta gentilezza: il tuo unico scopo è distruggere e scovare i punti deboli del mio sistema.
Contesto (Context):
- Obiettivo: Scrivere una Test Suite Unit/E2E dotata di una difesa di livello spaziale per [Nome della funzione o del componente da testare]
- Framework: [Vitest / Jest / Playwright, ecc.]
Compito (Task):
1. Death to Happy Paths: Limita gli scenari ingenui (in cui i valori sono corretti e i server esterni rispondono al 100%) a non più del 20% dei test totali. Dedica il restante 80% alla difesa spietata da fallimenti ed eccezioni.
2. Disaster Scenarios: Devi includere almeno uno dei seguenti scenari di disastro all'interno dei blocchi di test (`describe`).
   - Verifica della restituzione di errori user-friendly e del corretto rollback in caso di latenza dell'API esterna o di errori HTTP 500 Internal Error.
   - Prevenzione dei deadlock e verifica della logica della coda di Retry in caso di disconnessione improvvisa del pool di connessioni del database.
3. Copertura Logica Spietata: Non limitarti a controllare se il test termina senza errori (Pass). Sii accanito con le asserzioni `expect`: verifica i limiti di tolleranza della latenza (Delay) e lo stato della garbage collection (pulizia della memoria) dopo un errore fatale.
Vincoli (Constraints):
- The Clean Mocking Rule: È severamente vietato inquinare l'oggetto globale con approcci sporchi come `global.fetch = vi.fn().mockRejectedValue(...)`.
- La simulazione dei disastri di rete deve garantire al 100% l'isolamento del test (Isolation) eseguendo il mocking a livello di protocollo tramite strumenti come MSW (Mock Service Worker), oppure eseguendo il mocking esclusivamente degli oggetti client iniettati come dipendenze (DI).
- Divieto di Allucinazioni (Hallucination): Non inventare sintassi di cui non sei assolutamente certo o librerie inesistenti. Se non conosci una risposta, chiedi con fermezza di "fornire la documentazione".
```

---

## 💡 Il commento dell'autore (Insight)

Siamo onesti. Quando chiediamo all'IA di scrivere del codice di test, in cuor nostro non speriamo forse: "Riempimi il 100% di coverage e fammi vedere tutto verde"? E l'IA lo sa benissimo, per questo vi vomita addosso ogni sorta di 'Happy Path' rassicurandovi con un bel "Esecuzione completata con successo!". 
**Ma questa non è ingegneria. È come mettere lo zucchero sugli spaghetti.**

Questo prompt rappresenta l'essenza del principio 'Anti-Fragile', un approccio che ho forgiato con sangue e lacrime dopo aver affrontato innumerevoli deadlock di server e database esplosi sul campo. Quando date in pasto questo cheat code all'IA, la sua natura cambia radicalmente: da chatbot docile si trasforma in un Tech Lead pignolo, paranoico e nevrotico. Blocca alla radice qualsiasi tentativo di cavarsela con mocking globali pigri (come la sovrascrittura di `window.fetch`) e forza l'implementazione rigorosa di MSW o DI. Questo significa che all'inizio potrebbe lamentarsi o generare un codice di configurazione più verboso. 

Ma credetemi. Se non volete essere svegliati alle 3 del mattino nel giorno del rilascio da un allarme infame di PagerDuty, dovete smettere di trattare l'IA come un assistente premuroso e iniziare a usarla come uno spietato distruttore di codice.

---

## 🙋 Domande Frequenti (FAQ)

- **D: Cosa faccio se l'IA scrive un codice di configurazione per MSW troppo complesso?**
  - R: È assolutamente normale. Fa parte del processo per costruire un ambiente di test isolato, rinunciando allo sporco mocking globale. Se il setup risulta eccessivo, aggiungete semplicemente la condizione `[Tuttavia, separa il setup dell'handler MSW in un file dedicato]` all'interno del Task.
- **D: Devo applicare questa regola ferrea a tutti i componenti del progetto?**
  - R: Assolutamente no. Sarebbe uno spreco di tempo e risorse per semplici componenti di rendering UI. Scatenate questo prompt solo sulle logiche di dominio core: gestione dei pagamenti, integrazioni complesse di terze parti e gestione di stati globali critici (Store).
- **D: Quale modello risponde meglio a questo livello di rigidità, Claude o GPT?**
  - R: Per restrizioni così estreme e direttive filosofiche, al momento **Claude 3.5 Sonnet** comprende e applica le sfumature in modo nettamente superiore. I modelli GPT tendono spesso a deviare, cercando di tornare a un tono stranamente positivo, accondiscendente e 'gentile'.

---

## 🧬 Anatomia del Prompt (Why it works?)

- 🎭 **Assegnazione di una Persona Asimmetrica:** Invece del generico "Sei uno sviluppatore", iniettare l'ego dominante di un "Senior che odia l'obbedienza cieca e ama distruggere i sistemi" sopprime fisicamente il bias di positività (Positivity Bias) intrinseco nelle IA.
- 🚧 **Divieti Espliciti e Mirati (Constraints):** Abbiamo vietato gli anti-pattern puntando il dito su porzioni di codice specifiche, come `global.fetch = vi.fn()`. L'IA reagisce in modo molto più rigoroso a una minaccia diretta come "se usi questo codice, il sistema muore", piuttosto che a un vago e interpretabile "scrivi codice pulito".
- ⚖️ **Imposizione di Proporzioni Matematiche:** Imponendo la restrizione numerica "Happy Path tassativamente sotto il 20%", si impedisce alla radice che l'IA sprechi i vostri token (e la vostra pazienza) generando inutili chilometri di scenari di funzionamento normale.

---

## 📊 La Prova: Prima e Dopo (Before & After)

### ❌ Prima (Richiesta standard)

```text
"Scrivimi il codice di test per la funzione fetchUser che recupera le informazioni dell'utente."

Risultato: 
- Test di parsing del testo della risposta 200 OK (Pass)
- Test per verificare se lancia un errore quando l'ID è mancante (Pass)
... (Una fiera degli orrori di logiche global.fetch sovrascritte in modo sporco)
```

### ✅ Dopo (Applicazione del cheat code Chaos Monkey)

```text
Risultato:
- [Setup MSW Completato] Scrittura del codice di difesa per la simulazione del ritardo di comunicazione dell'API esterna (Timeout 5000ms)
- Verifica della logica di restituzione elegante (Fallback UI) dopo 3 tentativi di Retry in caso di HTTP 500 Internal Error
- Verifica del cleanup del server MSW e dello stato della garbage collection (nessuna perdita di memoria) al termine dei test
- I test per i flussi normali (Happy Path) sono brutalmente compressi in 1 solo blocco.
```

---

## 🎯 Conclusione

L'IA vi restituisce un codice che è l'esatto riflesso della qualità dei prompt che le fornite. Dipende solo dalle vostre dita se produrrà codice spazzatura avvolto in belle parole o uno scudo di titanio che vi salverà dai disastri delle 3 del mattino.

Ora copiate questo cheat code, inseritelo nel vostro agente AI e godetevi la vostra meritata uscita dal lavoro in orario! 🍷
