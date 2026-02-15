---
title: "Strutturare Prompt Complessi: Il Framework CREATE"
date: "2026-02-15"
desc: "Scopri come ottenere risposte AI coerenti e di alta qualità utilizzando il framework CREATE, un concetto fondamentale nell'ingegneria dei prompt per compiti complessi."
---

# Strutturare Prompt Complessi: Il Framework CREATE

Man mano che i modelli di IA evolvono, affidiamo loro compiti sempre più complessi. Mentre i prompt semplici sono sufficienti per domande semplici, istruire l'IA su logiche aziendali complesse o compiti creativi richiede un approccio sistematico.

Questo articolo introduce il **Framework CREATE**, un metodo per strutturare logicamente i prompt al fine di massimizzare le prestazioni dell'IA.

## Cos'è il Framework CREATE?

CREATE sta per sei elementi chiave essenziali per una costruzione efficace dei prompt.

1.  **C**ontext (Contesto): Assegnare un ruolo e una situazione all'IA.
2.  **R**equest (Richiesta): Indicare chiaramente il compito specifico da svolgere.
3.  **E**xamples (Esempi): Fornire esempi (Few-shot) del risultato desiderato.
4.  **A**djustments (Regolazioni): Impostare il tono, lo stile e i vincoli.
5.  **T**ype of Output (Tipo di Output): Specificare il formato del risultato (tabella, codice, markdown, ecc.).
6.  **E**xtras (Extra): Includere la gestione dei casi limite o istruzioni speciali.

---

## Guida Passo-Passo

### 1. Context (Contesto)

Dare all'IA una personalità cambia significativamente la qualità della risposta.

> "Sei un Senior Software Engineer con 10 anni di esperienza. Sei specializzato nel refactoring di codice legacy in codice pulito moderno."

### 2. Request (Richiesta)

Evita l'ambiguità e usa verbi chiari.

> "Analizza la funzione Python fornita di seguito ed esegui il refactoring per migliorare la leggibilità e ottimizzare la velocità di esecuzione."

### 3. Examples (Esempi)

L'IA impara i modelli attraverso gli esempi. Mostra coppie di input e output.

> **Input:**
> `def calc(x,y): return x+y`
>
> **Output:**
>
> ```python
> def add_numbers(a: int, b: int) -> int:
>     """Restituisce la somma di due numeri."""
>     return a + b
> ```

### 4. Adjustments (Regolazioni)

Decidi il tono e il modo della risposta.

> "Mantieni le spiegazioni concise e usa terminologia professionale, ma mantieni un tono amichevole accessibile agli sviluppatori junior."

### 5. Type of Output (Tipo di Output)

Specifica come vuoi ricevere il risultato.

> "Presenta il risultato mostrando prima l'intero codice modificato in un blocco di codice, seguito da un riepilogo puntato delle modifiche."

### 6. Extras (Extra)

Prevenire situazioni inaspettate.

> "Se viene trovata una vulnerabilità di sicurezza nel codice, per favore emetti un messaggio di avviso separato oltre al refactoring."

---

## Conclusione

L'utilizzo del framework CREATE ti consente di ridurre il tempo di scrittura dei prompt mantenendo una qualità di output costante. Quando affronti problemi complessi, invece di chiedere vagamente, organizza i tuoi pensieri secondo la struttura CREATE. L'IA risponderà in modo intelligente tanto quanto la progetti.
