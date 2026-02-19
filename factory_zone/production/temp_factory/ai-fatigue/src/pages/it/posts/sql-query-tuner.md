---
layout: /src/layouts/Layout.astro
title: "Query SQL Lenta, Segreto per il Tuning in 3 Secondi"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Sviluppo"
description: "Un prompt che analizza query SQL complesse e inefficienti per ottimizzare le prestazioni e raccomandare indici."
tags: ["SQL", "Tuning DB", "Ottimizzazione Query", "Database"]
---

# 📝 Query SQL Lenta, Segreto per il Tuning in 3 Secondi

**🎯 Consigliato per:** Tutti
**⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Anche con solo un po' di dati accumulati, ci vogliono 5 secondi per interrogare..."_

Le query che erano veloci all'inizio diventano tartarughe man mano che i dati aumentano.
Ti sei sentito perso guardando il Piano di Esecuzione (Explain Plan) perché il nero sono lettere e il bianco è sfondo?
Se mostri la query all'IA, trova parti inefficienti e fa anche raccomandazioni magiche di indici.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Migliora Join e Subquery inefficienti
2. Raccomanda Indici necessari
3. Riscrivi con sintassi SQL moderna leggibile

---

## 🚀 La Soluzione: "Tuner Query SQL"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

**Ruolo:** Sei un Capo DBA (Amministratore Database) con 20 anni di esperienza e un esperto di tuning SQL.
**Richiesta:** Un prompt che analizza query SQL complesse e inefficienti per ottimizzare le prestazioni e raccomandare indici.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei un Capo DBA (Amministratore Database) con 20 anni di esperienza e un esperto di tuning SQL.
>
> **Contesto:** La query SQL utilizzata nella mia applicazione sta causando un calo delle prestazioni man mano che la quantità di dati aumenta.
>
> **Compito:**
> Analizza la query SQL fornita di seguito ed esegui i seguenti compiti:
>
> 1. **Diagnosi Problema:** Segnala parti che possono causare calo delle prestazioni nella query corrente (Full Table Scan, ecc.).
> 2. **Ottimizzazione Query:** Riscrivi in una query che restituisce lo stesso risultato ma opera in modo più efficiente.
> 3. **Raccomandazione Indice:** Suggerisci quali colonne indicizzare con la sintassi `CREATE INDEX` per massimizzare le prestazioni della query.
>
> **DB Usato:** `[MySQL / PostgreSQL / Oracle / MS-SQL]`

- **Query Target:**

  > [Incolla qui la query lenta]

  > **Vincoli:**
  >
  > - Il dataset risultante della query esistente non deve mai cambiare.
  > - Spiega brevemente il principio di esecuzione del perché è diventato più veloce.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Query di Input)

```sql
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE price > 10000);
```

_Problema: La subquery potrebbe essere eseguita per ogni riga (Dependent Subquery)._

### ✅ Dopo (Risultato)

**Query Ottimizzata (Usando JOIN):**

```sql
SELECT DISTINCT u.*
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.price > 10000;
```

**Indice Raccomandato:**

```sql
CREATE INDEX idx_orders_price_userid ON orders(price, user_id);
```

_Spiegazione: Ottimizzato cambiando la subquery in JOIN, e creato un indice composito per unire per `user_id` dopo aver filtrato per `price`._

---

## 🎯 Conclusione

Dicono che "Il tuning è un'arte", ma ora è una 'scienza' dove puoi ottenere aiuto dall'IA.
Non soffrire per query lente, ottieni consulenza gratuita dal DBA IA! 🍷
