---
layout: /src/layouts/Layout.astro
title: "Test E2E falliti? Ripristinali in 1 minuto con il prompt di Auto-healing per Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Scopri il prompt definitivo per riparare automaticamente i test E2E in Playwright. Lascia che l'IA aggiorni i selettori rotti al posto tuo."
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

Chi lavora nello sviluppo frontend o nel QA lo sa bene: i test E2E (End-to-End) che falliscono per una banale modifica alla UI sono il pane quotidiano. Soprattutto utilizzando framework come Playwright o Cypress, basta un piccolo cambiamento nella struttura del DOM o nel nome di una classe per far crollare l'intera pipeline di test. Mettersi a cercare manualmente ogni test fallito, aprire i DevTools e ricavare i nuovi selettori è una colossale perdita di tempo. La soluzione? Deleghiamo il lavoro sporco all'IA fornendole semplicemente il log degli errori e la nuova struttura HTML. Benvenuti nell'era dell'"Auto-healing".

---

## ⚡️ Riepilogo in 3 righe (TL;DR)

1. Un prompt ottimizzato che permette all'IA di analizzare e riparare in autonomia i selettori Playwright corrotti dagli aggiornamenti della UI.
2. Non si limita a correggere il codice: ti suggerisce la strategia migliore per scrivere selettori "resilienti" e a prova di bomba.
3. Incolla il log degli errori e lo snapshot aggiornato del DOM per ottenere il codice fixato in meno di 60 secondi.

---

## 🚀 La Soluzione: "Prompt Auto-healing per Playwright"

### 🥉 Versione Basic (Base)

Utilizza questa versione per dare in pasto all'IA il codice rotto e l'errore, ottenendo un fix istantaneo.

> **Ruolo:** Sei un `[Senior QA Engineer]`.
> **Richiesta:** Basandoti sul log degli errori di Playwright e sul nuovo HTML forniti di seguito, correggi il `[codice di test fallito]`.

### 🥇 Versione Pro (Esperto)

Perfetta per andare oltre la semplice "toppa": rifattorizza il codice rendendolo manutenibile e strutturalmente solido.

> **Ruolo (Role):** Sei un `[Senior SDET (Software Development Engineer in Test)]` specializzato in test automation. Conosci alla perfezione le Best Practice di Playwright.
> 
> **Contesto (Context):**
> 
> - Background: A causa di un recente aggiornamento della UI, i nostri test E2E in Playwright stanno fallendo. La causa principale è l'invalidazione dei selettori (Selector).
> - Obiettivo: Riparare il codice di test fallito e migliorarlo adottando una struttura di selettori resiliente (Resilient), capace di resistere alle future modifiche della UI.
> 
> **Richiesta (Task):**
> 
> 1. Analizza il `[Log degli errori]` e la `[Struttura HTML aggiornata]` forniti di seguito per individuare la causa esatta del fallimento.
> 2. Correggi il `[Codice di test esistente]` in modo che il test torni a passare con successo.
> 3. Durante il refactoring, evita di dipendere da fragili classi CSS o XPath; dai invece priorità assoluta agli attributi User-Facing (testo visibile, attributi ARIA, data-testid, ecc.).
> 4. Aggiungi un breve commento in linea al codice corretto spiegando "il motivo tecnico di questa modifica".
> 
> **Dati di input:**
> - Log degli errori: `[Incolla qui l'intero log degli errori]`
> - Struttura HTML aggiornata: `[Incolla qui il frammento HTML ispezionato dai DevTools]`
> - Codice di test esistente: `[Incolla qui lo snippet di codice Playwright che fallisce]`
> 
> **Vincoli (Constraints):**
> 
> - L'output deve consistere unicamente in un blocco di codice completo e pronto per essere copiato e incollato.
> - Utilizza in via prioritaria i Locator integrati e raccomandati da Playwright (es. `getByRole`, `getByText`, `getByTestId`).
> 
> **Avvertenze (Warning):**
> 
> - Se non riesci a individuare un target valido nel frammento HTML fornito, non inventare soluzioni. Rispondi esplicitamente: "A causa della mancanza di contesto HTML, non è possibile determinare il selettore esatto. Fornire una porzione di DOM più ampia."

---

## 💡 Il commento dell'autore (Insight)

Questo workflow esprime il suo massimo potenziale quando decine di test si schiantano simultaneamente in CI/CD. Un tempo, per un singolo selettore globale modificato, bisognava aprire 30 file di test e correggerli a mano a colpi di `Ctrl + F`. Oggi, salvando questo prompt nel tuo IDE dotato di IA (o su Claude) e fornendogli il log degli errori accompagnato da un rapido copia-incolla dalla tab Elements del browser, puoi delegare in toto questa estenuante caccia al tesoro.

Il vero colpo di genio risiede nel vincolo: "Usa attributi User-Facing". Lasciata a sé stessa, l'IA punterebbe per pigrizia alla classe CSS più ovvia. Imponendo questa regola, invece, la costringi a generare un codice semanticamente perfetto come `getByRole('button', { name: 'Submit' })`. È un'arma tattica che ti farà chiudere il laptop almeno un'ora prima del solito. Mettila alla prova oggi stesso!

---

## 🙋 Domande Frequenti (FAQ)

- **D: Come mi comporto se la struttura HTML è gigantesca?**
  - R: Non serve dumpare l'intero DOM. È sufficiente copiare il frammento HTML che include l'elemento incriminato e il suo tag contenitore padre (es. il `div` del form o l'header).
- **D: Funziona solo con Playwright o posso adattarlo per Cypress e Selenium?**
  - R: Assolutamente sì. Ti basterà sostituire la parola "Playwright" nel prompt con il framework di tuo interesse e la logica rimarrà invariata ed efficace.
- **D: Il mio progetto non fa uso di `data-testid`. L'IA andrà in confusione?**
  - R: Per nulla. Il prompt è progettato per dare priorità all'accessibilità; l'IA ripiegherà intelligentemente su `getByRole`, `getByText` o `getByLabel`, garantendoti comunque selettori robusti.

---

## 🧬 Anatomia del Prompt (Why it works?)

1. **Iniezione della Persona SDET:** Non l'abbiamo trattata come un semplice bot, ma le abbiamo conferito l'autorevolezza di un ingegnere del QA. Questo la forza a produrre codice che non solo "gira", ma che aderisce maniacalmente alle Best Practice di Playwright.
2. **Priorità assoluta ai Locator User-Facing:** Abbiamo cablato nel prompt la filosofia core di Playwright: testare l'applicazione come farebbe un utente reale. Questo abbatte drasticamente la fragilità (Flakiness) dei test.
3. **Kill-switch Anti-Allucinazione:** Niente è peggio di un codice fixato male che genera un nuovo errore. Il vincolo esplicito ("Se non hai contesto, rifiutati di inventare") previene frustranti loop di debugging.

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

Il codice di test è l'armatura che difende il tuo ambiente di produzione, ma non ha senso passare le giornate a lucidare quell'armatura. Sfuggi all'inferno della manutenzione continua sfruttando il potere dell'Auto-healing guidato dall'IA.

Affida la riparazione dei test al tuo agente AI, goditi un buon caffè e preparati a chiudere le task in perfetto orario! 🍷
