---
layout: /src/layouts/Layout.astro
title: "Incubo Regex, ora scaricalo sull'IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Sviluppo"
description: "Non scrivere espressioni regolari criptiche da solo. Un prompt che genera codice semplicemente spiegando il pattern che desideri."
tags: ["Regex", "Espressione Regolare", "Produttività Dev"]
---

# 📝 Incubo Regex, ora scaricalo sull'IA

> **🎯 Consigliato per:** Tutti
> **⏱️ Tempo richiesto:** 5 minuti
> **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Stai decifrando `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$` solo per controllare la validità dell'email?"_

Le Espressioni Regolari (Regex) sono essenziali per gli sviluppatori, ma sono una delle aree con cui odiamo di più avere a che fare. Devi cercare la sintassi ogni volta che la scrivi, e quella scritta dagli altri sembra una lingua aliena. Ora, non soffrire, dì semplicemente all'IA il 'pattern'.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Non affannarti a memorizzare o cercare sintassi regex complesse.
2. Dì semplicemente il pattern che desideri (numero di telefono, email, ecc.) e l'IA scriverà la regex e la interpreterà anche.
3. Richiedi codici di test insieme per verificare immediatamente l'accuratezza della regex.

---

## 🚀 La Soluzione: "Generatore Regex"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

> **Ruolo:** Sei un `[Sviluppatore Senior]`.
> **Richiesta:** Crea un prompt che generi codice per espressioni regolari criptiche semplicemente spiegando il pattern.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei un `[Sviluppatore Senior]`.
>
> **Situazione:** Ho bisogno di un'espressione regolare da usare in `[Python/JavaScript]`.
>
> **Compito:**
>
> 1. Crea un'espressione regolare che soddisfi i requisiti qui sotto.
> 2. Spiega in dettaglio cosa significa ogni simbolo (Interpretazione).
> 3. Mostra codice di esempio (casi corrispondenti/non corrispondenti) per testare questa regex.
>
> **Requisiti:**
>
> - Voglio trovare il formato del numero di telefono USA.
> - Esempio: 123-456-7890 o (123) 456-7890 o 1234567890
> - Il prefisso è facoltativo.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input)

```text
Scrivimi una regex per numeri di telefono USA. Trattini, parentesi o niente.
```

<br>

### ✅ Dopo (Risultato)

```javascript
// Esempio JavaScript

const regex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

// Test
const phone1 = "123-456-7890"; // Match O
const phone2 = "(123) 456-7890"; // Match O
const phone3 = "1234567890"; // Match O

console.log(regex.test(phone1)); // true
```

### 🔍 Spiegazione

- `^`: Inizio della stringa
- `(\(\d{3}\)|\d{3})`: 3 cifre tra parentesi O solo 3 cifre
- `[- ]?`: Trattino o spazio opzionale
- `\d{3}`: 3 cifre
- `\d{4}`: 4 cifre
- `$`: Fine della stringa

---

## 🎯 Conclusione

Non aprire il libro di grammatica Regex. Devi solo sapere chiaramente quale 'pattern' desideri.
