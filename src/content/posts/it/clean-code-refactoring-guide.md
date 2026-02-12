---
title: "Rifattorizzare Codice Sporco in Codice Pulito in 1 Secondo"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Sviluppo"
description: "Un prompt che trasforma codice spaghetti complesso in codice pulito facile da leggere e mantenere."
tags: ["Refactoring", "Clean Code", "Manutenzione", "Produttività Dev"]
---

# 📝 Rifattorizzare Codice Sporco in Codice Pulito in 1 Secondo

**🎯 Consigliato per:** Tutti
**⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Non riesco nemmeno a riconoscere il codice che ho scritto... Come districo questi spaghetti?"_

Abbiamo tutti avuto l'esperienza di scrivere nomi di variabili disordinati perché avevamo fretta, o di avere una singola funzione che supera le 100 righe.
E se ci fosse una segretaria che rifattorizzasse il codice che ti vergogni di mostrare ai colleghi in **standard 'Clean Code'**?
Con solo questo prompt, puoi catturare leggibilità, prestazioni e manutenibilità tutto in una volta.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Cambia intuitivamente nomi di variabili/funzioni
2. Rimuovi codice duplicato e separa funzioni
3. Applica sintassi recente e ottimizza le prestazioni

---

## 🚀 La Soluzione: "Rifattorizzatore Clean Code"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

**Ruolo:** Sei un Senior Software Engineer con 20 anni di esperienza e un esperto di 'Clean Code'.
**Richiesta:** Trasforma codice spaghetti complesso in codice pulito facile da leggere e mantenere.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei un Senior Software Engineer con 20 anni di esperienza e un esperto di 'Clean Code'.
>
> **Contesto:** Il codice che ho scritto funziona, ma ha una scarsa leggibilità ed è difficile da mantenere. I nomi delle variabili non sono chiari e c'è molta logica duplicata.
>
> **Compito:**
> Rifattorizza il codice fornito di seguito secondo i seguenti criteri:
>
> 1. **Naming:** Cambia i nomi di variabili e funzioni in modo che il loro intento sia chiaramente noto.
> 2. **Separazione Funzioni:** Suddividi le funzioni in pezzi più piccoli in modo che una funzione faccia solo una cosa (SRP).
> 3. **Rimuovi Duplicati:** Estrai la logica ripetuta in funzioni o utilità separate.
> 4. **Commenti:** Aggiungi commenti solo alle parti in cui è necessaria una spiegazione sul 'Perché' il codice è stato scritto in quel modo.
> 5. **Sintassi Moderna:** Applica l'ultima sintassi moderna del linguaggio.
>
> **Codice:**

> [Incolla qui il codice da rifattorizzare]

> **Vincoli:**
>
> - Non cambiare mai la logica aziendale (comportamento) del codice esistente.
> - Riassumi le modifiche principali prima e dopo il refactoring in un elenco.
> - Mostra l'output diviso in un blocco di codice e un blocco di spiegazione.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input)

```javascript
function calc(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i].price > 100) {
      t += d[i].price * 0.9;
    } else {
      t += d[i].price;
    }
  }
  return t;
}
```

### ✅ Dopo (Risultato)

```javascript
/**
 * Calcola l'importo totale del carrello.
 * Applica uno sconto del 10% per articoli sopra i 100 won.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((total, item) => {
    const finalPrice =
      item.price > DISCOUNT_THRESHOLD ? item.price * DISCOUNT_RATE : item.price;
    return total + finalPrice;
  }, 0);
}
```

_Cambiamenti: `calc` -> `calculateTotalPrice`, `d` -> `items`, numeri magici in costanti, usato `reduce`._

---

## 🎯 Conclusione

Non procrastinare dicendo "Lo aggiusterò dopo" più.
Trasforma il codice puzzolente in codice profumato in 3 secondi con questo prompt e vai a casa! 🍷
