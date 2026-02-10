---
layout: /src/layouts/Layout.astro
title: "Regex Tipo Alieno, Ordina in Linguaggio Naturale"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Sviluppo"
description: "Non lottare con espressioni regolari complesse come decifrare codici. Dì semplicemente il pattern che vuoi, e l'IA creerà la regex."
tags: ["Regex", "Espressione Regolare", "Elaborazione Stringhe", "Validazione"]
---

# 📝 Regex Tipo Alieno, Ordina in Linguaggio Naturale

**🎯 Consigliato per:** Tutti
**⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Qual era di nuovo la regex per la validazione email... Ah, e come metto i trattini nei numeri di telefono?"_

Espressione Regolare (Regex), nuova ogni volta che la usi e sembra una lingua aliena ogni volta che la vedi, giusto?
Digitare `^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`... da solo è una tortura.
Ora dì semplicemente "Trova formato email" in linguaggio naturale.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Richiedi corrispondenza di pattern complessi in linguaggio naturale
2. Fornisci spiegazione dettagliata per la regex generata
3. Verifica con casi di test

---

## 🚀 La Soluzione: "Interprete Regex"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

**Ruolo:** Sei un Maestro Regex.
**Richiesta:** Non lottare con espressioni regolari complesse come decifrare codici. Dì semplicemente il pattern che vuoi, e l'IA creerà la regex.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei un Maestro Regex.
>
> **Contesto:** Devo estrarre o convalidare pattern specifici da dati di testo. Ma la sintassi regex è troppo difficile.
>
> **Compito:**
>
> 1. Scrivi un'**Espressione Regolare (Regex)** che si adatti perfettamente al pattern che descrivo.
> 2. Spiega come funziona la regex scritta scomponendola in parti.
> 3. Mostra 3 esempi che corrispondono (Match) e 3 esempi che non corrispondono (Non-match) a questa regex rispettivamente.
>
> **Pattern che voglio trovare:**
> `[Descrivi qui il pattern che vuoi in linguaggio naturale. es.: "Numero di cellulare nel formato 010-1234-5678"]`
>
> **Linguaggio/Ambiente:** `[es.: JavaScript / Python / Java]`
>
> **Vincoli:**
>
> - Assicurati che l'elaborazione di escape dei caratteri speciali sia eseguita correttamente.
> - Crea un'espressione che sia il più concisa ma accurata possibile.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input)

**Pattern:** "La password deve essere lunga almeno 8 caratteri, contenere almeno una lettera maiuscola, una lettera minuscola, un numero e un carattere speciale."

### ✅ Dopo (Risultato)

**Regex (JavaScript):**

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

**Spiegazione:**

- `^`: Inizio della stringa
- `(?=.*[a-z])`: Contiene almeno una lettera minuscola
- `(?=.*[A-Z])`: Contiene almeno una lettera maiuscola
- `(?=.*\d)`: Contiene almeno un numero
- `{8,}`: 8 caratteri o più

**Test:**

- ✅ `Pass1234!` (Match)
- ❌ `pass1234` (Nessun carattere speciale/maiuscola)

---

## 🎯 Conclusione

La regex è potente ma troppo ostile per essere letta dagli umani.
Ora lascia quella complessa decifrazione del codice all'IA, e goditi solo la magia dell'elaborazione del testo! 🍷
