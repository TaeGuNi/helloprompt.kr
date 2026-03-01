---
layout: /src/layouts/Layout.astro
title: "Test E2E che si bloccano per errori? Risolvi in 1 minuto con il prompt Auto-healing di Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Rilasciamo un prompt pratico per ripristinare automaticamente con l'IA i test Playwright che si interrompono a causa della modifica dei selettori."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 Test E2E che si bloccano per errori? Risolvi in 1 minuto con il prompt Auto-healing di Playwright 🛠️

- **🎯 Consigliato per:** Ingegneri QA, Sviluppatori Frontend, Specialisti di Test Automation
- **⏱️ Tempo richiesto:** Da 2 ore → ridotto a 1 minuto
- **🤖 Modelli consigliati:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

_"I test E2E che funzionavano perfettamente fino a ieri, stamattina sono falliti tutti solo perché è cambiata una classe CSS di un pulsante. Devo andare di nuovo a cercare i selettori?"_
Se ti occupi di sviluppo frontend o QA, i test E2E (End-to-End) che si rompono a causa di modifiche alla UI sono all'ordine del giorno. Specialmente quando si usano strumenti come Playwright o Cypress, se la struttura del DOM o i nomi delle classi cambiano, il codice di test genera inesorabilmente degli errori. Il processo di andare a cercare ogni test fallito, aprire i DevTools e copiare i nuovi selettori è un'enorme perdita di tempo. Ora, proviamo a fornire all'IA il log degli errori e la struttura HTML modificata, lasciando che se ne occupi lei tramite l'"Auto-healing" (ripristino automatico).
---
## ⚡️ Riepilogo in 3 righe (TL;DR)
1. Questo è un prompt in cui l'IA analizza e ripristina autonomamente i selettori Playwright rotti a causa di modifiche alla UI.
2. Oltre a correggere semplicemente il codice, puoi ricevere suggerimenti su strategie per scrivere selettori robusti (Resilient) e resistenti ai cambiamenti.
3. Fornendo solo il log degli errori e l'ultimo snapshot del DOM, puoi ottenere il codice ripristinato in meno di 1 minuto.
---
## 🚀 La Soluzione: "Prompt Auto-healing per Playwright"

### 🥉 Versione Basic (Base)
Usala quando vuoi semplicemente fornire il codice rotto e il messaggio di errore per ottenere rapidamente il codice corretto.
> **Ruolo:** Sei un `[Senior QA Engineer]`.
> **Richiesta:** Basandoti sul log degli errori di Playwright fornito e sul nuovo HTML, correggi il `[codice di test rotto]`.
### 🥇 Versione Pro (Esperto)
Usala quando vuoi andare oltre la semplice correzione e rifattorizzare il codice rendendolo robusto e facile da manutenere.
> **Ruolo (Role):** Sei un `[Senior SDET (Software Development Engineer in Test)]` specializzato in test automation. Comprendi perfettamente le Best Practice di Playwright.
> 
> **Contesto (Context):**
> 
> - Background: A causa di un recente aggiornamento della UI, i test E2E esistenti in Playwright stanno fallendo. La causa principale è la modifica dei selettori (Selector).
> - Obiettivo: Ripristinare il codice di test fallito e migliorarlo verso una struttura di selettori robusta (Resilient) e meno incline a rompersi con i futuri cambiamenti della UI.
> 
> **Richiesta (Task):**
> 
> 1. Analizza il `[Log degli errori]` e la `[Struttura HTML modificata]` forniti di seguito per identificare la causa principale dell'errore.
> 2. Correggi il `[Codice di test esistente]` in modo che il test passi nuovamente.
> 3. Durante la correzione, invece di dipendere da classi CSS o XPath, dai priorità agli attributi User-Facing (testo, attributi ARIA, data-testid, ecc.).
> 4. Aggiungi un breve commento al codice spiegando "perché hai effettuato questa modifica" nella parte corretta.
> 
> **Dati di input:**
> - Log degli errori: `[Copia/Incolla l'intero log degli errori]`
> - Struttura HTML modificata: `[Frammento HTML rilevante copiato dai DevTools]`
> - Codice di test esistente: `[Frammento di codice Playwright fallito]`
> 
> **Vincoli (Constraints):**
> 
> - L'output deve essere fornito sotto forma di un blocco di codice completo, pronto per essere copiato e incollato immediatamente.
> - Utilizza con la massima priorità i Locator integrati di Playwright (es. `getByRole`, `getByText`, `getByTestId`).
> 
> **Avvertenze (Warning):**
> 
> - Se non riesci a trovare un elemento appropriato nel frammento HTML fornito, non forzare un'ipotesi, ma rispondi: "A causa della mancanza di informazioni HTML, non è possibile trovare il selettore esatto. Si prega di fornire ulteriori informazioni sul DOM."
---

## 💡 Il commento dell'autore (Insight)
Questo approccio mostra il suo vero valore quando decine di test falliscono contemporaneamente in un ambiente di produzione. In passato, quando cambiava un singolo selettore, aprivo 30 file di test e li correggevo uno per uno usando `Ctrl + F`. Tuttavia, registrando questo prompt nell'IA integrata dell'IDE o su Claude, e fornendo semplicemente il log degli errori e una copia della scheda Elements del browser, puoi esternalizzare completamente la noiosa estrazione dei selettori. 
In particolare, il punto chiave è il vincolo: "Usa attributi User-Facing". Di default, l'IA tende a puntare alle classi CSS più semplici, ma imponendo questo vincolo, scriverà un codice eccellente come `getByRole('button', { name: 'Submit' })`. È un'arma che anticiperà il tuo orario di uscita dal lavoro di almeno un'ora. Provalo subito!
---

## 🙋 Domande Frequenti (FAQ)
- **D: Cosa faccio se la struttura HTML è troppo lunga?**
  - R: Non c'è bisogno di copiare l'intera pagina; è sufficiente copiare e fornire l'HTML fino al tag padre dell'elemento che ha causato l'errore (es. un pulsante o un form).
- **D: Oltre a Playwright, posso usarlo anche con Cypress o Selenium?**
  - R: Sì, basta sostituire la parola 'Playwright' nel prompt con il nome dello strumento che stai utilizzando e funzionerà altrettanto bene.
- **D: Funzionerà bene anche in progetti che non usano `data-testid`?**
  - R: Sì, l'IA troverà in modo intelligente alternative basate sull'accessibilità, come `getByRole` o `getByText`.
---
## 🧬 Anatomia del Prompt (Why it works?)
1. **Assegnazione della Persona SDET:** Invece di un normale sviluppatore, abbiamo dato all'IA la prospettiva di un ingegnere specializzato nei test, inducendola a generare codice che non si limiti a funzionare, ma che rispetti le Best Practice di Playwright.
2. **Forzatura dei Locator User-Facing:** Abbiamo forzato a livello di prompt la filosofia principale di Playwright, che riduce fondamentalmente l'instabilità (Flakiness) dei test, aumentandone così la qualità.
3. **Misure di sicurezza anti-allucinazione:** Per evitare il fenomeno in cui la generazione di codice senza senso in mancanza di informazioni complica ulteriormente il debugging, abbiamo imposto un vincolo esplicito: "Se non lo sai, di' che non lo sai".
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
Il codice di test è lo scudo che protegge il codice di produzione, ma non dovresti sprecare troppo tempo a lucidare quello scudo. Fuggi dall'inferno della manutenzione con il prompt Auto-healing basato sull'IA. 
Ora lascia all'IA il tempo di correggere i test e goditi una tazza di caffè mentre esci in orario! 🍷
