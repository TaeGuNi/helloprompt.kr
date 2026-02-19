---
layout: /src/layouts/Layout.astro
title: "L'IA non ti capisce? Usa i 'Delimitatori'"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "L'IA si confonde quando riassume testi lunghi o corregge il codice? Usa la tecnica dei Delimitatori per separare le sezioni e raddoppiare la tua precisione."
tags: ["Delimitatori", "Leggibilità", "Tag XML"]
---

# 🚧 L'IA non ti capisce? Usa i "Delimitatori"

**🎯 Consigliato per:** Tutti
**⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

Quando lanci un lungo testo a un'IA e dici "Riassumi questo", l'IA a volte si confonde su dove finisce il testo da riassumere e dove iniziano le istruzioni.

Proprio come gli umani dividono il testo in **paragrafi** durante la lettura, devi tracciare un chiaro **confine (Delimitatore)** per l'IA, dicendo **"Da qui a qui è il contenuto."**

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. L'IA può avere difficoltà a distinguere tra comandi e dati in testi lunghi.
2. Usa tag XML (`< >`) o simboli speciali (`"""`) per stabilire confini chiari.
3. L'abitudine di dividere le sezioni riduce gli errori di riconoscimento dell'IA e aumenta la precisione dell'attività.

---

## 🚀 La Soluzione: "Usare Tag XML o Simboli Speciali"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

**Ruolo:** Sei un **Editor** competente.
**Richiesta:** L'IA si confonde quando riassume testi lunghi o corregge il codice? Spiega come usare la tecnica dei Delimitatori per separare le sezioni e raddoppiare la precisione.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Il modo migliore è usare tag `< >` o `"""` (tre virgolette).

> **Ruolo:** Sei un **Editor** competente.
>
> **Richiesta:** Riassumi il contenuto racchiuso nei tag `<text>` qui sotto in 3 frasi.
>
> **Dati di Input:**
> <text>
> `[Inserisci qui un articolo di notizie o un rapporto incredibilmente lungo]`
> </text>

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input senza delimitatori)

IA: Potrebbe includere l'istruzione "Riassumi questo" come parte del riassunto stesso, o semplicemente leggere l'inizio del testo e finire frettolosamente.

```text
(Mix confuso di istruzioni e dati)
```

<br>

### ✅ Dopo (Racchiudere con tag)

L'IA riconosce solo il contenuto all'interno di `<text>` come **"dati da elaborare"** e distingue chiaramente il resto come **"comandi"**.

```text
(Estrae con precisione solo il contenuto all'interno di <text> e lo riassume perfettamente)
```

---

## 🎯 Conclusione

Gli esperti dividono abitualmente le **Sezioni** durante la creazione dei prompt.

- `<context>` (Situazione)
- `<instruction>` (Istruzioni)
- `<data>` (Dati)

Questa singola piccola abitudine porta il tasso di errore dei tuoi prompt allo 0%. 🧱
