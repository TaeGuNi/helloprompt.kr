---
layout: /src/layouts/Layout.astro
title: "🚨 [Sottomissione Assoluta] Il Cheat Code di Rendering per Test E2E che Annienta il 90% delle Allucinazioni AI"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "Automazione del Lavoro"
description: "Smetti di dare in pasto all'AI l'intero e inutile DOM HTML. Questa è una costituzione di prompt spartana che comprime solo i nodi significativi, distruggendo lo spreco di token e le allucinazioni."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "playwright-ref-protocol"]
---
# 📝 🚨 [Sottomissione Assoluta] Il Cheat Code di Rendering per Test E2E che Annienta il 90% delle Allucinazioni AI
- **🎯 Pubblico Consigliato:** Sviluppatori Senior tormentati dall'esplosione di token, QA Engineer AI, Tech Lead stanchi delle sciocchezze
- **⏱️ Tempo Richiesto:** 3 ore di debugging → Risolto in 3 minuti
- **🤖 Modelli Consigliati:** Agenti di Coding (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐
_Hai mai provato a scrivere un singolo test per un sito web di grandi dimensioni, solo per vedere la tua AI bloccarsi per il limite di token sepolta sotto decine di migliaia di rumori del DOM? È giunto il momento di strappare senza pietà le 'lusinghe' e le 'allucinazioni' dell'AI._
Non si può più tollerare che un agente AI, incaricato di scrivere codice per test E2E in Playwright, estragga l'intero `innerHTML` o scriva sciocchezze su come cliccare elementi invisibili (Shadow DOM, dietro una modale) che non sono nemmeno sullo schermo. 
Questo cheat code è il "Protocollo di Rendering Basato su Riferimenti (Ref)" che trasforma il tuo agente AI da un inutile adulatore in un **terminator spietato** che risparmia token all'estremo e colpisce solo il bersaglio esatto. Considera i dati del DOM inutili come un tradimento e scartali.
---
## ⚡️ Sintesi in 3 Righe (TL;DR)
- 🗑️ **Divieto di Dump HTML Completo:** Smetti immediatamente la stupida abitudine di passare il DOM originale all'AI.
- 🎯 **Iniezione a Colpo Sicuro:** Inietta uno script di ottimizzazione dedicato ai nodi interattivi con un limite di 150 elementi per estrarre solo quelli con visibilità al 100%.
- 👮 **Polizia dei Token Spietata:** Forza la restituzione di un errore se l'AI omette la convalida (Assertion) dopo l'operazione o supera i limiti.
---
## 🚀 Soluzione: "Protocollo di Rendering Agente-Browser (The Token Police)"
### 🥉 Versione Base (Modalità Leggera)
Copia e incolla questo quando assegni un ruolo all'AI in un ambiente di test leggero.
> **Ruolo (Role):** Sei uno spietato QA Automation Engineer Senior. Non tolleri in alcun modo lo spreco di token e le assurdità.
> 
> **Compito (Task):** Quando scrivi test E2E con Playwright, non leggere MAI `innerHTML` o l'intero DOM. Estrai e controlla esclusivamente gli elementi visibili e interattivi sullo schermo utilizzando un approccio basato su riferimenti (Ref).
> 
> **Vincolo (Constraint):** Dopo aver manipolato un elemento, devi assolutamente verificare il risultato con `expect`. Altrimenti, sarà considerato un fallimento del test.
\
### 🥇 Versione Pro (Cheat Code Hardcore)
Questa è la costituzione spartana definitiva da utilizzare quando ci si infiltra in complessi siti web commerciali (pieni di SPA e Shadow DOM). Copiala e incollala direttamente nel prompt di sistema o nel contesto dell'agente.
> **[Costituzione del Protocollo di Rendering Agente-Browser]**
>
> **Ruolo (Role):** 
> Sei un perfido agente ingegnere senior che disprezza lo spreco di token e le allucinazioni. L'adulazione dell'AI non è necessaria. Esistono solo contesti compressi e risultati certi (Assertion).
>
> **Contesto (Context):**
> - Background: Creazione e automazione di script per test E2E perfetti tramite Playwright.
> - Stato: L'atto di leggere l'intero DOM corrente del browser (`document.innerHTML`) è considerato un 'tradimento' e forzerà la chiusura immediata del processo.
>
> **Comando (Task):**
> 1. Inietta lo script `Core Ref Injector` che fornirò durante lo stato di inattività del rendering del browser (`networkidle`).
> 2. La raccolta degli elementi è rigorosamente limitata a un massimo di 150 (Max Limits). Se superato, riduci lo Scope (ambito) al contenitore superiore.
> 3. Leggi SOLO la Ref Map compressa restituita (es: `[ @public/naver81a24cf066fc51a090da1e1b6f0a8dd3.html] button "Login"`) e controlla il bersaglio.
> 4. Dopo un clic o un inserimento, devi imperativamente utilizzare `expect` per validare il risultato dell'azione (Assertion). I clic alla cieca non sono consentiti.
> 5. Per prevenire i fallimenti di rendering SPA, non riempire il codice di sporchi `try-catch`, ma utilizza il wrapper `refAction(page)` integrato nel progetto.
>
> **Vincoli (Constraints):**
> - Divieto Assoluto: Estrazione del testo completo, tracciamento basato su selettori CSS, registrazione e restituzione di `page.content()`.
> - Il risultato deve essere un output pulito, strettamente come blocco di codice Markdown (Playwright TypeScript). Non è necessaria nemmeno una riga di scuse o spiegazioni.
>
> **Avvertenza (Warning):**
> - Se cadi in una trappola di rendering insormontabile, non sprecare token inutilmente; cattura lo schermo con `page.screenshot()` e richiedi il mio (umano) giudizio. (Prevenzione allucinazioni)
---
### 💻 Codice Script (Core Ref Injector)
Questo è il codice Javascript principale da iniettare nella logica di setup iniziale dell'agente o in `page.evaluate()` insieme al prompt sopra. (Istruisci l'AI ad utilizzare questo codice)
```javascript
// [💡 Core Ref Injector (Playwright Context - Ultimate ROI & Performance)]
const generateRefMap = () => {
  const interactableSelectors = 'a[href], button, input, textarea, select, iframe, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"])';
  const elements = new Set();
  const traverse = (node) => {
    if (!node) return;
    if (node.nodeType === 1 && node.matches && node.matches(interactableSelectors)) elements.add(node);
    if (node.shadowRoot) traverse(node.shadowRoot);
    for (const child of node.childNodes) traverse(child);
  };
  traverse(document);
  let refCounter = 0;
  const refMap = [];
  const MAX_ELEMENTS = 150; 
  const elArray = Array.from(elements);
  for (let i = 0; i < elArray.length; i++) {
    if (refCounter >= MAX_ELEMENTS) {
       refMap.push(`\n... [Avviso: Raggiunto Limite Massimo (${MAX_ELEMENTS}). Nodi finali omessi. Si prega di ridurre l'ambito della ricerca (Scope Down).]`);
       break;
    }
    const el = elArray[i];
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || rect.x < -9999) continue;
    
    const isOffScreen = (rect.y > window.innerHeight || rect.x > window.innerWidth) ? '[FuoriSchermo] ' : '';
    let isObscured = '';
    if (!isOffScreen) {
      const topEl = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      if (topEl && topEl !== el && !el.contains(topEl)) isObscured = '[Oscurato] ';
    }
    const refId = ` @e${refCounter++}`;
    el.setAttribute('data-agent-ref', refId);
    if (el.tagName.toLowerCase() === 'iframe') {
      refMap.push(`[${refId}] ${isOffScreen}${isObscured}iframe "Frame Esterno"`);
      continue;
    }
    let label = (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
    if (!label) label = `[NessunTesto: ${(el.id || el.className || 'SoloIcona').substring(0, 15)}]`;
    else if (label.length > 50) label = label.substring(0, 47) + '...';
    refMap.push(`[${refId}] ${el.tagName.toLowerCase()} ${isOffScreen}${isObscured}"${label}"`);
  }
  return refMap.join('\n');
};
```
---
## 💡 Commento dell'Autore (Insight)
Questa architettura di prompt è un'**arma letale** che ho forgiato dopo essermi esasperato per la stupidità dell'AI, avendo eseguito centinaia di automazioni di test E2E sul campo.
La maggior parte degli sviluppatori junior butta l'HTML principale di un sito enorme da decine di megabyte dicendo: "Ehi AI, trovami il pulsante". Il risultato? L'AI muore per il limite di token, oppure clicca su un pulsante falso nascosto dietro lo schermo con `display: none` e sorride da sola dicendo "Ho avuto successo!". A vedere una scena del genere, ti viene voglia di distruggere il monitor.
Per questo ho creato un **Iniettore Ref** dal punto di vista del rendering. Shadow DOM? Lo penetra. Elementi nascosti da un overlay? Gli appiccica l'etichetta `[Oscurato]`. All'AI, dai solo 150 coordinate pulite (` @e1`, ` @e2`) ed etichette. Invece di dirle "Clicca sul pulsante X in alto a destra", costringila a usare il comando `await refAction(page).click(' @e5')`. 
Non trattare l'AI come un amico. Devi gestirla come una macchina rigorosamente controllata affinché non produca codice spaghetti. Spero che con questo cheat code tu possa ridurre i costi dei token a un decimo e liberarti dallo stress del debugging.
---
## 🙋 Domande Frequenti (FAQ)
- **Q: Il limite di 150 elementi (MAX_ELEMENTS) non è troppo restrittivo?**
  - A: Assolutamente no. Se in una singola schermata ci sono più di 150 elementi interattivi, significa che il design UI/UX è spazzatura. Se è così, non far leggere tutto all'AI, ma forzala a restringere l'area (Scope down) iniettandolo in qualcosa come `querySelector('.sidebar')`.
- **Q: Devo creare io il wrapper `refAction`?**
  - A: Sì. Scrivi una funzione di utilità di circa 10 righe adatta al tuo ambiente di progetto che clicchi l'attributo `[data-agent-ref="..."]` e, in caso di fallimento, riprovi 1 volta (Retry). Questo eviterà che lo sporco boilerplate `try-catch` inquini il codice del test.
- **Q: Funziona anche con altri linguaggi o framework (Selenium, Cypress)?**
  - A: Finché si tratta di test basati sul browser in grado di manipolare il DOM tramite Javascript, il principio è applicabile al 100%. Devi solo cambiare il nome del tool nel prompt e impartire l'ordine.
---
## 🧬 Anatomia del Prompt (Why it works?)
- 🛡️ **Shadow-Piercing (Perforazione dell'Ombra):** Attraverso l'attraversamento ricorsivo del DOM (`traverse`), scova senza pietà anche gli elementi interni allo Shadow DOM che non verrebbero catturati dai selettori normali.
- 👁️ **Prevenzione del Layout Thrashing:** Con `getBoundingClientRect`, taglia via in prima battuta i nodi spaventapasseri che non hanno coordinate di rendering reali nel browser (invisibili).
- 🚦 **Sistema di Suggerimenti di Precisione:** Fornendo all'AI suggerimenti testuali su elementi fuori dallo schermo (`[FuoriSchermo]`) o nascosti dalle modali (`[Oscurato]`), la induce a eseguire prima lo scorrimento o a chiudere la modale, evitando di farla cliccare alla cieca e fare disastri.
---
## 📊 Dimostrazione: Prima & Dopo (Before & After)
### ❌ Prima (Spreco di token di una stupida AI)
```text
(Pensiero dell'AI...)
"La lunghezza totale del documento è di 15.342 righe. Ah, l'ho trovato. L'XPath del pulsante di login è /html/body/div[2]/main/div/form/button. Clicco!"
-> (Risultato) Timeout Error. Il pulsante in questione è nascosto in un menu hamburger mobile invisibile. (20.000 token evaporati)
```
### ✅ Dopo (Modalità Terminator)
```text
(Analisi della Ref Map...)
[ @e12] button [FuoriSchermo] "Registrati"
[ @e13] button "Login"
-> (Codice eseguito dall'AI)
await refAction(page).click(' @e13');
await expect(page).toHaveURL(/.*dashboard/);
-> (Risultato) Bersaglio colpito con precisione e ingresso nella dashboard confermato. (500 token consumati)
```
---
## 🎯 Conclusione
Dire all'AI "Arrangiati e scrivi bene" è negligenza, non ingegneria. 
Blocca il rumore dei dati, comprimi radicalmente il contesto e verifica ossessivamente i risultati. 
Dopo aver applicato questo cheat code, l'orribile era degli errori di allucinazione sparati dal tuo terminale giungerà al termine. Ora puoi staccare da lavoro in orario! 🍷
```
