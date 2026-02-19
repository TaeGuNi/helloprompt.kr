---
layout: /src/layouts/Layout.astro
title: "Il mio codice è spazzatura! Coach per il Refactoring Clean Code"
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Programmazione/IT"
description: "Un prompt che trasforma il codice disordinato che 'funziona a malapena' in un codice pulito, 'facile da leggere e manutenibile'."
tags: ["Refactoring", "Clean Code", "Sviluppatore", "Code Review"]
---

# 📝 Il mio codice è spazzatura! Coach per il Refactoring Clean Code

- **🎯 Destinatari:** Chiunque
- **⏱️ Tempo richiesto:** 5 minuti
- **🤖 Modello consigliato:** Tutti i modelli AI

- **📊 Difficoltà:** ⭐⭐☆☆☆
- **⚡️ Efficacia:** ⭐⭐⭐⭐⭐
- **🛠️ Utilità:** ⭐⭐⭐⭐☆

_"Ho detto che l'avrei sistemato più tardi, ma è passato un anno. Ora ho paura di toccarlo."_

Lo "Spaghetti code" (codice aggrovigliato) è il nemico degli sviluppatori. Se la leggibilità è scarsa, è difficile trovare bug e aggiungere funzionalità. Questo prompt fa sì che Robert C. Martin (l'autore di Clean Code) prenda il controllo e pulisca il tuo codice facendolo brillare.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Rimozione del codice duplicato e separazione delle funzioni (Extract Method)
2. Miglioramento di nomi di variabili/funzioni poco chiari (Naming Convention)
3. Ottimizzazione delle prestazioni e applicazione della sintassi moderna (Modern Syntax)

---

## 🚀 Soluzione: "Lavanderia Clean Code"

### 🥉 Versione Base (Basic Version)

Usala quando hai bisogno solo del risultato velocemente.

> **Ruolo:** Sei un `[Evangelista del Clean Code e Chief Architect]`.
> **Richiesta:** Aggiorna questo codice disordinato che funziona appena in un codice pulito, 'facile da leggere e manutenibile'.

<br>

### 🥇 Versione Pro (Pro Version)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto per utilizzarlo.

> **Ruolo (Role):** Sei un `[Evangelista del Clean Code e Chief Architect]`.
>
> **Contesto (Context):** Il mio codice funziona, ma è disordinato e difficile da leggere (Dirty Code). Esegui un refactoring per renderne facile la manutenzione.
>
> **Compito (Task):**
>
> 1. **[Senso del Naming]**: Cambia i nomi di variabili e funzioni in modo che siano intuitivi e significativi. (es: `a` -> `userAge`)
> 2. **[Miglioramento Struttura]**: Suddividi le funzioni troppo lunghe per ruolo e unifica la logica duplicata.
> 3. **[Modernize]**: Se possibile, applica la sintassi del linguaggio più recente (ES6+, Python 3.10+, ecc.).
> 4. **[Before & After]**: Confronta cosa è cambiato e spiega perché lo hai cambiato.
>
> **Vincoli (Constraints):**
>
> - Il comportamento (funzionalità) del codice non deve assolutamente cambiare.
> - Aggiungi commenti (Comment) solo dove strettamente necessario. (Se il codice si spiega da solo, rimuovi i commenti)
>
> **Codice Target:**

> [Incolla qui il codice sporco(?)]

---

## 🧬 Analisi del Prompt (Why it works?)

Questo prompt è progettato per far comprendere esattamente all'AI le tue intenzioni combinando una chiara impostazione della persona e istruzioni specifiche (Task). Inducendo un pensiero passo-passo (Chain of Thought), puoi ottenere una risposta logica.

---

## 📊 Prova: Before & After

La differenza tra un semplice comando e un prompt ottimizzato è chiara. Utilizzando il prompt fornito, puoi ottenere risposte più specifiche e strutturate, risparmiando tempo nelle correzioni (Re-prompting).

### ❌ Prima (Input)

```python
def calc(x, y):
    if x > 19:
        print("성인")
        p = y * 0.9
        return p
    else:
        print("학생")
        return y
```

(Il nome della funzione `calc` non dice cosa calcola e anche `p` non ha un significato chiaro)

### ✅ Dopo (Risultato del Prompt)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("성인입니다.")
        return price * DISCOUNT_RATE

    print("학생입니다.")
    return price
```

**[Punti di miglioramento]**

1. **Cambio nome funzione**: `calc` -> `calculate_discounted_price` (Diventa chiaro che calcola un prezzo scontato)
2. **Rimozione Magic Number**: Numeri come `19`, `0.9` sono stati dichiarati come costanti per dare loro significato.
3. **Rimozione else inutile**: Utilizzato il pattern Early Return per ridurre la profondità dell'indentazione.

---

## 💡 Commento dell'autore (Insight)

Questo prompt si concentra sulla praticità per essere utilizzato immediatamente nel lavoro reale.
Se il risultato non è soddisfacente, prova a impostare le variabili di input o la situazione (Context) in modo un po' più specifico.

---

## 🙋 Domande Frequenti (FAQ)

**Q. Il risultato non mi piace.**
A. Aggiungi esempi specifici o descrivi la situazione (Context) in modo più dettagliato.

**Q. È possibile usarlo con altri linguaggi?**
A. Sì, è possibile traducendo le istruzioni del prompt nella lingua desiderata (o adattandole al linguaggio di programmazione).

---

## 🎯 Conclusione

Un codice ben scritto si legge scorrevolmente come un buon saggio. Pulisci il codice per il te stesso del futuro (e per i colleghi).

Ora stacca dal lavoro e fatti una doccia. Il corpo, non il codice. 🍷