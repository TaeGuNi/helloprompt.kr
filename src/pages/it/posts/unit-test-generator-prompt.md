---
layout: /src/layouts/Layout.astro
title: "Scrivere Codice di Test, Un Prompt Che Finisce in 5 Minuti"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Sviluppo"
description: "Lascia la scrittura noiosa e problematica di Test Unitari all'IA. Sfida copertura 100%!"
tags: ["Codice di Test", "TDD", "Jest", "PyTest", "QA"]
---

# 📝 Scrivere Codice di Test, Un Prompt Che Finisce in 5 Minuti

> **🎯 Consigliato per:** Tutti
> **⏱️ Tempo richiesto:** 5 minuti
> **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Sono occupato solo a scrivere codice, quando farò tutti i codici di test?"_

Tutti conoscono l'importanza del codice di test, ma quando provi davvero a scriverlo, spesso ci vuole più tempo della logica principale.
Pensare ai Casi Limite, fare Mocking... ti ha fatto venire il mal di testa?
Ora incolla semplicemente la logica aziendale. L'IA scriverà codici di test meticolosi per te.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Copre non solo i Percorsi Felici ma anche i casi di eccezione
2. Supporto perfetto per la sintassi dei framework di test ampiamente utilizzati
3. Generazione automatica di dati Mock

---

## 🚀 La Soluzione: "Generatore di Test Unitari"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

> **Ruolo:** Sei un Ingegnere QA meticoloso e perfezionista ed esperto di automazione dei test.
> **Richiesta:** Lascia la scrittura noiosa e problematica di Test Unitari all'IA. Sfida copertura 100%!

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei un Ingegnere QA meticoloso e perfezionista ed esperto di automazione dei test.
>
> **Contesto:** Ho codice scritto in `[Linguaggio/Framework Usato]`. Ho bisogno di Test Unitari per aumentare l'affidabilità di questo codice.
>
> **Compito:**
>
> 1. Analizza il codice fornito e scrivi prima un elenco di casi di test. (Inclusi casi di successo, casi di fallimento, analisi dei valori limite)
> 2. Scrivi codice di test eseguibile usando `[Nome Libreria di Test (es., Jest, PyTest, JUnit)]`.
> 3. Se ci sono dipendenze esterne, gestisci il Mocking.
> 4. Aggiungi commenti per ogni caso di test spiegando cosa verifica.
>
> **Codice:**
>
> ```
> [Incolla qui il codice da testare]
> ```
>
> **Vincoli:**
>
> - Includi vari scenari in modo che la copertura dei test sia la più alta possibile.
> - Fornisci il codice in una forma che può essere copiata ed eseguita immediatamente.
> - Scrivi la Descrizione del test in italiano.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Codice di Input)

```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Impossibile dividere per 0.");
  return a / b;
}
```

### ✅ Dopo (Risultato)

```javascript
describe("test funzione divide", () => {
  // 1. Test funzionamento normale
  test("Dividere 10 per 2 dovrebbe essere 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Test gestione eccezioni
  test("Dividere per 0 dovrebbe lanciare un errore", () => {
    expect(() => divide(10, 0)).toThrow("Impossibile dividere per 0.");
  });

  // 3. Test valore limite/valore speciale
  test("Dividere numeri negativi dovrebbe risultare in un numero negativo", () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});
```

---

## 🎯 Conclusione

Se i bug vengono trovati dopo la distribuzione, il costo per risolverli aumenta di 100 volte.
Stermina i bug nella fase di sviluppo con questo prompt, e premi il pulsante 'Merge' con fiducia! 🍷
