---
layout: /src/layouts/Layout.astro
title: "Test E2E falliti? Ripristinali in 1 minuto con il prompt di Auto-healing per Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Scopri il prompt definitivo per riparare automaticamente i test E2E in Playwright. Affida all'IA l'aggiornamento dei selettori rotti e risparmia ore di debugging."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 Test E2E falliti? Ripristinali in 1 minuto con il prompt di Auto-healing per Playwright 🛠️

- **🎯 Consigliato per:** QA Engineer, Sviluppatori Frontend, Test Automation Engineer
- **⏱️ Tempo richiesto:** Da 2 ore → ridotto a 1 minuto
- **🤖 Modelli consigliati:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

_"I test E2E che funzionavano perfettamente fino a ieri, stamattina sono esplosi tutti per colpa di una singola classe CSS cambiata. Devo davvero rimettermi a ispezionare il DOM?"_

Chiunque lavori nello sviluppo frontend o nel Quality Assurance conosce fin troppo bene questo incubo: test E2E (End-to-End) che falliscono miseramente a causa di una banale, quasi impercettibile modifica alla UI. È un copione che si ripete costantemente. Soprattutto quando ci si affida a framework moderni come Playwright o Cypress, basta una minuscola variazione nella gerarchia del DOM o la rinomina di una singola utility class per far crollare l'intera pipeline di Continuous Integration come un castello di carte. Il risultato? Ore preziose bruciate a spulciare manualmente decine di test falliti, ispezionare freneticamente i DevTools alla ricerca del nuovo nodo e riscrivere fragili selettori CSS uno ad uno. Una colossale e frustrante perdita di tempo che drena le energie del team, ritarda i rilasci in produzione e trasforma la test automation in una gabbia di manutenzione infinita. Ma la soluzione a questa agonia esiste: smettere di combattere manualmente contro il DOM e delegare l'intero lavoro di ricognizione all'Intelligenza Artificiale. Fornendo semplicemente il log degli errori e il frammento HTML aggiornato, l'IA è in grado di rintracciare il problema e riscrivere il codice in tempo reale. Benvenuti nell'era dell'Auto-healing: il momento in cui la riparazione dei test smette di essere un ostacolo e diventa un processo automatico di pochi secondi.

---

## ⚡️ Riepilogo in 3 righe (TL;DR)

1. Un prompt chirurgico che consente all'IA di analizzare e ripristinare autonomamente i selettori Playwright invalidati dai continui aggiornamenti della UI.
2. Non si limita a una correzione superficiale: rifattorizza il codice applicando strategie avanzate per creare selettori "resilienti" e a prova di bomba.
3. Ti basterà incollare il log degli errori e lo snapshot aggiornato del DOM per ottenere lo snippet di test perfettamente funzionante in meno di 60 secondi.

---

## 🚀 La Soluzione: "Prompt Auto-healing per Playwright"

### 🥉 Versione Basic (Base)

Utilizza questa versione per dare in pasto all'IA il codice rotto e l'errore, ottenendo un fix istantaneo.

> **Ruolo:** Sei un `[Senior QA Engineer]`.
> **Richiesta:** Basandoti sul log degli errori di Playwright e sul nuovo frammento HTML forniti di seguito, correggi il `[codice di test fallito]`.

### 🥇 Versione Pro (Esperto)

Perfetta per andare oltre la semplice "toppa": rifattorizza il codice rendendolo manutenibile e strutturalmente solido.

> **Ruolo (Role):** Sei un `[Senior SDET (Software Development Engineer in Test)]` specializzato in test automation. Padroneggi alla perfezione le Best Practice ufficiali di Playwright.
> 
> **Contesto (Context):**
> 
> - Background: A causa di un recente aggiornamento della UI, i nostri test E2E in Playwright stanno sistematicamente fallendo. La causa principale è l'invalidazione dei selettori (Locator).
> - Obiettivo: Ripristinare il codice di test fallito e rifattorizzarlo adottando una strategia di selezione resiliente, capace di sopravvivere in modo robusto alle future iterazioni della UI.
> 
> **Richiesta (Task):**
> 
> 1. Analizza il `[Log degli errori]` e la `[Struttura HTML aggiornata]` forniti di seguito per isolare la causa esatta della rottura.
> 2. Correggi il `[Codice di test esistente]` affinché l'esecuzione torni a passare con successo.
> 3. Durante il refactoring, è severamente vietato dipendere da classi CSS fragili o XPath complessi. Dai priorità assoluta agli attributi User-Facing (testo visibile, attributi ARIA, data-testid, ecc.).
> 4. Inserisci un conciso commento inline sopra la riga di codice corretta, spiegando "la motivazione tecnica dietro questa scelta architetturale".
> 
> **Dati di input:**
> - Log degli errori: `[Incolla qui il log completo restituito dalla console]`
> - Struttura HTML aggiornata: `[Incolla qui il frammento del DOM estratto tramite DevTools]`
> - Codice di test esistente: `[Incolla qui lo snippet del test Playwright che genera l'errore]`
> 
> **Vincoli (Constraints):**
> 
> - L'output finale deve essere esclusivamente un blocco di codice pulito, formattato e pronto per il copia-incolla, senza chiacchiere superflue.
> - Sfrutta rigorosamente i Locator semantici integrati e raccomandati da Playwright (es. `getByRole`, `getByText`, `getByTestId`).
> 
> **Avvertenze (Warning):**
> 
> - Se il frammento HTML fornito non contiene un target valido o sufficiente contesto, non allucinare una soluzione. Fermati e rispondi testualmente: "Impossibile determinare il selettore esatto a causa della mancanza di contesto HTML. Si prega di fornire una porzione di DOM più ampia."

---

## 💡 Il commento dell'autore (Insight)

Questo workflow sprigiona il suo vero potenziale distruttivo (nel senso buono) quando un aggiornamento globale fa schiantare decine di test simultaneamente nella pipeline CI/CD. Fino a poco tempo fa, la modifica di un singolo componente condiviso si traduceva nell'apertura compulsiva di 30 file di test diversi, rincorrendo i vecchi selettori a colpi di `Ctrl + F` e `Replace`. Oggi, memorizzando questo prompt nel tuo IDE potenziato dall'IA (o salvandolo nei custom instruction di Claude), trasformi un incubo di manutenzione in una rapida operazione di routine. Ti basta accoppiare il log degli errori con un brutale copia-incolla dalla tab Elements del browser: a decifrare il disastro ci penserà il modello.

Ma il vero "colpo di genio" ingegneristico di questo prompt risiede nel vincolo stringente: "Usa attributi User-Facing". Se lasciata a briglia sciolta, l'IA peccherebbe di pigrizia, agganciandosi ciecamente alla prima classe CSS disponibile o generando XPath illeggibili. Imponendo questa regola architettonica, la costringi di fatto a produrre codice semanticamente inattaccabile, come un granitico `getByRole('button', { name: 'Submit' })`. Non è solo un fix rapido; è un'arma tattica di refactoring continuo che innalza la qualità della tua codebase e ti permette di chiudere il laptop con largo anticipo. Mettila alla prova alla prossima build fallita e goditi lo spettacolo.

---

## 🙋 Domande Frequenti (FAQ)

- **D: Come mi comporto se la pagina ha una struttura HTML gigantesca e complessa?**
  - R: Non c'è alcun bisogno di fare il dump dell'intero albero del DOM. È sufficiente ispezionare l'elemento incriminato e copiare esclusivamente il frammento HTML che lo contiene, includendo magari il tag contenitore padre (come il `div` del modulo o l'elemento `<header>`) per fornire il giusto contesto spaziale.
- **D: Questo approccio è vincolato a Playwright o posso sfruttarlo anche per Cypress e Selenium?**
  - R: È assolutamente agnostico e altamente scalabile. Ti basterà sostituire la keyword "Playwright" all'interno del prompt con il nome del tuo framework di riferimento. I principi di base dell'auto-healing e della selezione semantica rimarranno invariati e altrettanto letali.
- **D: Nella nostra codebase non utilizziamo gli attributi `data-testid`. L'IA andrà in confusione fallendo il task?**
  - R: Assolutamente no. Il prompt è stato ingegnerizzato per dare priorità all'accessibilità (A11y). In assenza di test ID espliciti, l'IA ripiegherà con estrema intelligenza su locator robusti come `getByRole`, `getByText` o `getByLabel`, garantendoti in ogni caso un selettore solido e a prova di refactoring.

---

## 🧬 Anatomia del Prompt (Why it works?)

1. **Iniezione della Persona SDET:** Non ci siamo limitati a trattare l'IA come un banale correttore sintattico. Le abbiamo infuso l'autorevolezza e il mindset di un Software Development Engineer in Test (SDET) Senior. Questo switch psicologico la costringe a generare codice che non si limita a "funzionare per miracolo", ma che rispetta maniacalmente le Best Practice ufficiali e la filosofia architetturale del framework.
2. **Priorità assoluta ai Locator User-Facing:** Abbiamo hardcodato all'interno del prompt la direttiva suprema di Playwright: testare l'applicazione esattamente come la percepirebbe un utente in carne ed ossa. Questo approccio semantico abbatte drasticamente la piaga della fragilità (Flakiness) e rende le suite immuni ai restyling visivi.
3. **Kill-switch Anti-Allucinazione:** Non c'è niente di più tossico di un test "riparato" dall'IA che fallisce due commit più tardi a causa di un selettore inventato. Il vincolo esplicito e categorico ("Se non hai contesto, rifiutati di allucinare") agisce come un salvavita, bloccando sul nascere l'output spazzatura e prevenendo estenuanti loop infiniti di debugging.

---

## 📊 Dimostrazione: Prima e Dopo (Before & After)

### ❌ Prima (Input)

```text
Log degli errori:
Error: locator.click: Target closed
=========================== logs ===========================
waiting for locator('.btn-primary.submit-btn')
============================================================
Struttura HTML modificata:
<div class="actions">
  <button class="button--blue" aria-label="Submit Order">Order Now</button>
</div>
Codice di test esistente:
await page.locator('.btn-primary.submit-btn').click();
```

### ✅ Dopo (Risultato)

```typescript
// Motivo della modifica: Il test è fallito perché la classe CSS ('.btn-primary.submit-btn') è stata modificata.
// Miglioramento: Invece di una classe CSS soggetta a modifiche, sono stati utilizzati gli attributi di accessibilità (ARIA label) e il Role per rendere il codice robusto ai cambiamenti della UI.
await page.getByRole('button', { name: 'Submit Order' }).click();
```

---

## 🎯 Conclusione

Il codice di test rappresenta l'armatura inscalfibile che difende il tuo ambiente di produzione dai bug critici, ma non ha alcun senso ingegneristico sprecare intere giornate lavorative a lucidare manualmente quell'armatura. È giunto il momento di evadere dal girone dantesco della manutenzione continua dei selettori, abbracciando concretamente il potenziale dell'Auto-healing guidato dall'Intelligenza Artificiale.

Delega la risoluzione e il refactoring dei test falliti al tuo nuovo assistente AI, versati una meritata tazza di caffè di alta qualità e preparati a spostare i ticket in "Done" con una velocità che lascerà a bocca aperta il tuo Tech Lead. 🍷
