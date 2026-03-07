---
layout: /src/layouts/Layout.astro
title: "Prompt di Test Chaos Monkey per Torturare l'IA 💣 (L'Happy Path è Morto)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Stanco dei test 'Happy Path' dell'IA? Usa questo cheat code hardcore per simulare scenari catastrofici e blindare il tuo codice in produzione."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 📝 Prompt di Test Chaos Monkey per Torturare l'IA 💣

- **🎯 Consigliato per:** Senior Developer, QA Engineer e Tech Lead stanchi delle IA che si fingono esperte ma scrivono solo test *Happy Path*.
- **⏱️ Tempo richiesto:** Da 10 minuti → a 10 secondi (elimina alla radice il tempo perso a fare il debug delle allucinazioni dell'IA).
- **🤖 Modelli consigliati:** Qualsiasi IA avanzata (particolarmente raccomandati Claude 3.5 Sonnet e GPT-4o per la loro eccellenza nel coding).
- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Applicabilità:** ⭐⭐⭐⭐⭐

> _"Sei felice perché il codice di test generato dall'IA è passato al primo colpo? Ottimo. Preparati, perché il tuo server di produzione esploderà domani."_

Se chiedi a un agente IA di scrivere dei test, nove volte su dieci ti restituirà una serie di rassicuranti "scenari ideali", i classici *Happy Path*. Un mondo utopico in cui le API esterne rispondono in 0,1 millisecondi, il database non si disconnette mai e gli utenti inseriscono sempre dati immacolati. È ora di darci un taglio. Il codice che mandiamo in produzione deve essere uno scudo termico, progettato per resistere a quell'80% di fallimenti e disastri imprevedibili che si verificano nella cruda realtà. Il cheat code che ti presento in questo articolo è un prompt estremo: prende l'IA per il colletto e le inietta a forza la spietata filosofia "Chaos Monkey" di Netflix.

---

## ⚡️ Sintesi in 3 righe (TL;DR)

- 🚫 **L'Happy Path vale solo il 20%:** I test che passano sempre sono solo una pericolosa illusione; dedica l'80% dei tuoi sforzi a difendere il sistema dagli scenari di fallimento critico.
- 💥 **Simulazione di disastri forzata:** Esigi l'inclusione di timeout di rete, errori HTTP 500 e disconnessioni del database all'interno della suite di test.
- 🧹 **Niente mocking sporco (Dirty Mocking):** Punisci severamente le IA che inquinano oggetti globali come `window.fetch` e pretendi un isolamento chirurgico tramite MSW o Dependency Injection.

---

## 🚀 La Soluzione: "Protocollo Chaos Monkey"

### 🥉 Basic Version (Versione Base)

Usalo quando hai bisogno di generare rapidamente una suite di test incentrata esclusivamente sulla gestione spietata degli errori.

> **Ruolo:** Sei un QA Engineer hardcore, spietato come un Chaos Monkey.
> **Richiesta:** Scrivi il codice di test per il `[inserisci il codice da testare]` che ti ho fornito, limitandoti a un solo scenario di funzionamento normale (Happy Path). Tutti gli altri test devono simulare "gli scenari di disastro peggiori" (es. errori di rete 500, timeout del DB o input malformati) per verificare la reale robustezza della logica di difesa.

### 🥇 Pro Version (Versione Esperto)

Questo è il cheat code definitivo. Spazza via il servilismo senz'anima dell'IA, forzandola a generare test isolati a livello di produzione, completi di verifica della *garbage collection*. Copialo e incollalo esattamente così com'è.

> **Ruolo (Role):**
> Sei uno spietato SRE e Senior QA Architect ex-Netflix, noto come "Chaos Monkey". Provi molto più piacere nel far crollare il codice piuttosto che vederlo funzionare. Non perderti in saluti educati o convenevoli inutili.
>
> **Contesto (Context):**
> - Background: Devo scrivere il codice di test Unit/E2E per il seguente modulo/componente: `[inserire modulo/componente da testare]`.
> - Obiettivo: Costruire una Test Suite estrema e a prova di bomba, per verificare che il sistema non vada in crash, ma si riprenda elegantemente (o gestisca l'errore in totale sicurezza) di fronte a qualsiasi disastro.
>
> **Richiesta (Task):**
> 1. Limita gli scenari *Happy Path* a meno del 20% dei test totali. Il tuo vero valore risiede nella validazione del restante 80%, composto unicamente da scenari di fallimento estremo.
> 2. Devi assolutamente includere almeno uno dei seguenti scenari critici: ritardo estremo nella risposta di un'API esterna (Timeout), HTTP 500 Internal Server Error, caduta improvvisa della connessione al database.
> 3. Non limitarti a un banale Pass/Fail. Usa `expect` in modo maniacale per verificare se il rollback degli errori funziona correttamente, se scatta il timeout in caso di degrado delle prestazioni e se la pulizia della memoria (*garbage collection*) avviene senza sbavature.
>
> **Vincoli (Constraints):**
> - È assolutamente vietata l'alterazione degli oggetti globali (*Dirty Mocking*)! Se provi a sovrascrivere direttamente `global.fetch` o `window.setTimeout`, interromperò immediatamente il processo.
> - Per il mocking di rete usa esclusivamente **MSW** (Mock Service Worker), oppure isola e mocka solo i client iniettati tramite DI (*Dependency Injection*).
> - Restituisci il risultato unicamente all'interno di un blocco di codice Markdown e non aggiungere MAI frasi stucchevoli in chiusura come "Ti è stato d'aiuto?".

---

## 💡 Commento dell'Autore (Insight)

Siamo onesti: quando chiedi a un'IA di scrivere del codice di test, farà di tutto per rifugiarsi nella sua zona di comfort pur di mostrarti quell'illusorio "segno di spunta verde (✅)". È un'utopia in cui le API rispondono in 1 millisecondo e gli utenti inviano solo payload JSON immacolati. 

Questo prompt dà letteralmente fuoco a quell'utopia. Nel mondo reale, i server non vanno in crash per banali errori di logica. Crollano perché il sistema entra in un *loop* di caricamento infinito quando quell'API di terze parti, di cui ti fidavi ciecamente, restituisce un improvviso **502 Bad Gateway**, o quando le connessioni AWS RDS impazziscono. 

Iniettando questo cheat code "Chaos Monkey", l'IA andrà a scavare in autonomia nei meandri dei casi limite (*Edge Case*), stroncando sul nascere quelle fastidiose pratiche amatoriali di Mocking che inquinano lo *scope* globale. È l'unico vero vaccino che ti salverà dal lavorare nel weekend e dal passare intere nottate in bianco a fare *debugging* in produzione. Costringi l'IA a pensare al peggio, e il tuo codice darà il meglio.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Cosa succede se l'IA crea scenari di errore così complessi che i test falliscono inesorabilmente?**
  - A: È esattamente l'obiettivo. Se il test esplode, significa che la logica di gestione degli errori nel tuo codice di produzione è lacunosa. Smettila di lamentarti del test e vai a blindare il codice principale.

- **Q: Posso usarlo anche per testare componenti frontend?**
  - A: Assolutamente sì. Chiedi all'IA di simulare situazioni in cui l'utente clicca freneticamente un bottone 50 volte in 0,1 secondi, o in cui lo spinner di caricamento gira a vuoto per 30 secondi a causa di un rallentamento drastico della rete.

- **Q: Non posso semplicemente usare `jest.mock()` al posto di MSW?**
  - A: Mockare i moduli va benissimo. Ciò che è intollerabile è la cattiva abitudine dell'IA di alterare arbitrariamente l'oggetto `global`, infettando come un virus anche gli altri file di test. Finché garantisci il perfetto isolamento (*Isolation*) dello *scope*, puoi usare lo strumento che preferisci.

---

## 🧬 Anatomia del Prompt (Why it works?)

- **Persona spietata (Role):** Spoglia l'IA delle vesti di "assistente compiacente" e le impianta l'ego di un SRE Architect ossessionato dalla ricerca di vulnerabilità, inibendo adulazioni e fronzoli testuali inutili.
- **Vincoli quantificati (Constraints):** Invece di istruzioni vaghe come "inserisci molti scenari di fallimento", impone parametri rigidi come "*Happy Path* sotto il 20%", confinando meccanicamente il raggio d'azione e costringendo il modello a concentrarsi sugli errori.
- **Linee guida architetturali (Clean Mocking):** Vieta a livello di prompt i tipici *anti-pattern* (come l'inquinamento del *global scope*) in cui l'IA cade spesso per pura pigrizia, elevando drasticamente la qualità e l'isolamento del codice di test generato.

---

## 📊 La Prova: Before & After

### ❌ Before (Input)

- **Atteggiamento dell'IA con un prompt normale:** *"Certamente! Scriverò subito il codice di test per la logica di login dell'utente! 😊"*
- **Risultato:** 1 test banale che restituisce `200 OK` inserendo email e password corrette (e, immancabilmente, un `fetch` globale mockato alla meno peggio che distrugge gli altri test).

### ✅ After (Risultato)

- **Atteggiamento dell'IA con il cheat code Chaos Monkey:** (Nessun saluto formale, sputa immediatamente codice difensivo e corazzato).
- **Risultato:**
  - Verifica rigorosa che scatti un **Timeout Error** qualora la rete ritardi per più di 5 secondi.
  - Conferma che, in caso di crash del database con errore **500**, venga renderizzata una *Fallback UI* sicura per l'utente senza far crashare l'app.
  - Garanzia di un perfetto isolamento della rete tramite MSW, zero *side-effect* sugli altri file di test.

---

## 🎯 Conclusione

Il codice di test non si scrive per compiacere il proprio ego o per colorare la console di verde. È una spietata simulazione progettata per verificare se l'applicazione è in grado di sopravvivere a quell'inferno chiamato "ambiente di produzione". 

Non farti cullare dalle vuote rassicurazioni dell'IA. Torchiarla con questo prompt, per far tremare le fondamenta del tuo sistema prima del rilascio, è l'unico modo per emergere come un vero ingegnere. È giunto il momento di guardare in faccia la fragilità del tuo codice. Copia questo prompt e scatena l'inferno sui tuoi test! 🍷
