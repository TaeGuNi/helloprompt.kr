---
layout: /src/layouts/Layout.astro
title: "Il Mio Codice è Spazzatura! Coach di Refactoring Clean Code"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/IT"
description: "Prompt che aggiorna codice disordinato che funziona solo in codice pulito 'facile da leggere e mantenere'."
tags: ["Refactoring", "CleanCode", "Sviluppatore", "RevisioneCodice"]
---

# 📝 Il Mio Codice è Spazzatura! Coach di Refactoring Clean Code

> **🎯 Consigliato per:** Tutti
> **⏱️ Tempo richiesto:** 5 minuti
> **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Ho detto che l'avrei sistemato dopo ma è passato 1 anno. Ora ho paura a toccarlo."_

Il codice spaghetti (codice aggrovigliato) è il nemico degli sviluppatori. Se la leggibilità è bassa, è difficile trovare bug e difficile aggiungere funzionalità. Questo prompt possiede Robert C. Martin (Autore di Clean Code), lavando e lucidando il tuo codice per renderlo brillante.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Rimuovi codice duplicato e separa funzioni (Estrai Metodo).
2. Migliora nomi di variabili/funzioni poco chiari (Convenzione di Nomenclatura).
3. Ottimizza le prestazioni e applica la sintassi moderna (Sintassi Moderna).

---

## 🚀 La Soluzione: "Lavanderia Clean Code"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

> **Ruolo:** Sei un `[Evangelista Clean Code e Capo Architetto]`.
> **Richiesta:** Crea un prompt che aggiorni codice disordinato che funziona solo in codice pulito 'facile da leggere e mantenere'.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e usalo.

> **Ruolo:** Sei un `[Evangelista Clean Code e Capo Architetto]`.
>
> **Contesto:** Il mio codice funziona, ma è disordinato e difficile da leggere (Codice Sporco). Rifattorizzalo in modo che sia facile da mantenere.
>
> **Compito:**
>
> 1. **[Senso della Nomenclatura]**: Cambia i nomi di variabili e funzioni per essere intuitivi e significativi. (es. `a` -> `userAge`)
> 2. **[Miglioramento Struttura]**: Dividi le funzioni troppo lunghe per ruolo e combina la logica duplicata in una.
> 3. **[Modernizzare]**: Se possibile, applica la sintassi del linguaggio più recente (ES6+, Python 3.10+, ecc.).
> 4. **[Prima & Dopo]**: Confronta dove e come è cambiato, e spiega il motivo per cui lo hai cambiato così.
>
> **Vincoli:**
>
> - L'operazione (funzione) del codice non deve mai cambiare.
> - Aggiungi commenti solo dove assolutamente necessario. (Elimina i commenti se spiegati dal codice)
>
> **Codice Target:**
>
> ```python
> [Incolla il codice sporco(?) qui]
> ```

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input)

```python
def calc(x, y):
    if x > 19:
        print("Adulto")
        p = y * 0.9
        return p
    else:
        print("Studente")
        return y
```

(Il nome della funzione `calc` non dice cosa calcola, `p` è anche poco chiaro)

### ✅ Dopo (Risultato del Prompt)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Sei un adulto.")
        return price * DISCOUNT_RATE

    print("Sei uno studente.")
    return price
```

**[Punti di Miglioramento]**

1. **Cambia Nome Funzione**: `calc` -> `calculate_discounted_price` (Chiaro che è calcolo del prezzo scontato)
2. **Rimuovi Numeri Magici**: Dichiarati numeri come `19`, `0.9` come costanti per dare significato.
3. **Rimuovi else Non Necessario**: Ridotta profondità di indentazione usando il pattern Early Return.

---

## 🎯 Conclusione

Il codice ben scritto si legge scorrevolmente come un saggio ben scritto. Pulisci il tuo codice per il tuo io futuro (e colleghi).

Ora esci dal lavoro in orario e fatti una doccia. Corpo, non codice. 🍷
