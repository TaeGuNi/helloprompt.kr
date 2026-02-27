---
layout: /src/layouts/Layout.astro
title: " \"ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기\""
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "개발/코딩"
description: " \"Una guida completa per utilizzare l'IA come uno sviluppatore senior con 10 anni di esperienza: refactoring sicuro di codice legacy incomprensibile e generazione automatica di test in un solo colpo.\""
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

# 🧹 Aspirapolvere per Codice Legacy: Refactoring & Automazione dei Test

- **🎯 Consigliato per:** Sviluppatori junior, manutentori di progetti legacy, code reviewer
- **⏱️ Tempo richiesto:** Da 1 ora per l'analisi del codice → a meno di 5 minuti
- **🤖 Modelli consigliati:** Claude 3.5 Sonnet, GPT-4o (Claude è fortemente consigliato per logiche complesse e contesti lunghi)

- ⭐ **Difficoltà:** ⭐⭐☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Ma chi diavolo ha scritto questo codice? (...Ah, ero io un anno fa.)"_

Ti sei mai trovato di fronte a un **Codice Legacy (Legacy Code)** così intricato, con `if-else` annidati all'infinito, nomi di variabili incomprensibili e gestioni delle eccezioni non documentate, da temere che l'intero sistema potesse crollare solo a toccarlo?

Non avere più paura. Ti presento la tecnica perfetta di Prompt Engineering per assumere l'IA come tuo **Pair Programmer Senior** personale: sarai in grado di fare un refactoring elegante di quel codice "spaghetti" e costruire contemporaneamente un solido scudo di test unitari.

---

## ⚡️ Sintesi in 3 punti (TL;DR)

1. **Richiedi prima una spiegazione:** Invece di modificare alla cieca, chiedi all'IA di analizzare prima il flusso di esecuzione e l'intento del codice.
2. **Applica i principi del Clean Code:** Esegui un refactoring sicuro della struttura e della nomenclatura basandoti sui principi SOLID e sulla leggibilità.
3. **Costruisci uno scudo con i Test:** Genera automaticamente test unitari (Unit Test), inclusi gli edge case, per garantire che le funzionalità rimangano identiche prima e dopo il refactoring.

---

## 🚀 La Soluzione: "Senior Dev Simulator" (Simulatore di Sviluppatore Senior)

### 🥇 Versione Pro (Esperti)

Chiedere semplicemente "Fai il refactoring" comporta un alto rischio di rompere le funzionalità esistenti. Questo prompt applica la tecnica del **Chain-of-Thought (Catena di Pensieri)** per costringere l'IA a ragionare per passaggi logici.

> **Ruolo (Role):** Sei uno `[Sviluppatore Backend Senior con 10 anni di esperienza]` che ha lavorato in colossi tech come Google o Meta. Sei un fervente sostenitore della filosofia del Clean Code e applichi rigorosamente il TDD (Test-Driven Development).
>
> **Contesto (Context):**
> Ho appena ereditato un codice legacy disastroso scritto in `[inserisci linguaggio, es. Python/Java]`. La leggibilità è pessima e la manutenzione è quasi impossibile.
>
> **Compito (Task):**
> Esegui i seguenti passaggi in ordine, in modo approfondito:
>
> **Step 1. Analisi e Diagnosi:** Riassumi in una frase il ruolo di business di questo codice e individua in modo specifico 3 problemi critici (Code Smell).
> **Step 2. Refactoring Sicuro:** Mantieni al 100% la logica di business originale e gli effetti collaterali (Side Effect), ma massimizza la leggibilità separando le funzioni secondo il Principio di Singola Responsabilità (SRP) e rinominando variabili/metodi in modo chiaro. Aggiungi obbligatoriamente Docstring e commenti per le logiche di business complesse.
> **Step 3. Verifica Difensiva (Test Code):** Scrivi dei test unitari (Unit Test) per garantire in modo assoluto che il tuo codice refattorizzato funzioni esattamente come l'originale. Devi includere non solo i casi di successo, ma almeno 2 situazioni limite (Edge Case) possibili.
>
> **Codice di Input:**
>
>
> [Incolla qui il codice legacy da analizzare]
>
---

## 💡 Commento dell'Autore (Insight)

Il vero valore di questo prompt non sta semplicemente nel creare un codice "bello", ma nel **costruire prima una rete di sicurezza (i test)**. Ho utilizzato personalmente questo prompt sul campo quando ho ereditato un vecchio modulo di pagamento in Java scritto 5 anni prima.

La cosa più sorprendente è stata che l'IA ha individuato preventivamente, tramite i test, alcuni edge case nascosti che non avevo notato (ad esempio, come gestire la ramificazione quando l'importo del pagamento è pari a 0).

**🔥 Suggerimento per l'ottimizzazione sul lavoro:**
Se copi e incolli un'intera classe di centinaia di righe in una volta sola, l'IA potrebbe soffrire di "allucinazioni" o perdere il contesto. Poni la domanda **suddividendo il codice in metodi (meno di 100 righe)**, partendo da quelli che sembrano più complessi. La profondità dell'analisi e la precisione dei test aumenteranno in modo esponenziale.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Quale modello IA è più adatto per gestire la logica di programmazione?**
  - A: Attualmente, nel 2026, **Claude 3.5 Sonnet** e **GPT-4o** dominano il campo del coding e del refactoring. Tra i due, Claude 3.5 Sonnet mostra prestazioni leggermente superiori nel mantenere contesti complessi e nello scrivere codice pulito e "human-friendly".

- **Q: È sicuro dal punto di vista della sicurezza fornire all'IA il codice interno dell'azienda?**
  - A: **Assolutamente no.** Informazioni sensibili come chiavi API, IP della rete aziendale, dati reali dei clienti o algoritmi di sicurezza fondamentali devono essere obbligatoriamente mascherati (`[MASKED]`) o sostituiti con dati fittizi (Dummy Data) prima di eseguire il prompt. In alternativa, utilizzalo solo in ambienti Enterprise AI isolati configurati all'interno della tua azienda.

- **Q: Come mi comporto se si verificano errori dopo il refactoring?**
  - A: È molto probabile che l'IA abbia trascurato una dipendenza (Dependency). Copia l'intero log dell'errore insieme al contesto rilevante del codice originale e fornisci un feedback specifico, ad esempio: _"Si è verificato questo errore in questa sezione. Sembra che tu abbia omesso la [condizione specifica] della logica originale. Per favore, correggi."_

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Assegnazione del Ruolo Senior (Role):** Imponendo la rigorosa persona di uno "Sviluppatore Senior con 10 anni di esperienza, sostenitore del Clean Code", alziamo gli standard dell'IA per farle produrre non solo codice che funziona, ma codice di alta qualità ed estremamente manutenibile.
2. **Chain-of-Thought (Catena di Pensieri):** Invece di ordinare ciecamente "Correggi questo", abbiamo imposto un processo logico in tre fasi: **[Analisi → Modifica → Verifica]**. Questo è il meccanismo chiave che spinge l'IA a migliorare la struttura senza alterare l'intento originale del codice.
3. **Imposizione degli Edge Case (Constraints):** Richiedendo esplicitamente di scrivere test per gli edge case, garantiamo una qualità del codice solida e immediatamente utilizzabile in un ambiente di produzione reale.

---

## 📊 Dimostrazione: Prima e Dopo (Before & After)

### ❌ Prima (Input: Il codice legacy da incubo)

```python
def calc_trx(a, t, f=False):
    # a: amount, t: type
    if t == 1:
        if f: return a * 1.1 + 500
        else: return a * 1.1
    elif t == 2:
        return a - (a * 0.05)
    else: return 0 # errore
```

### ✅ Dopo (Output: Clean Code e Test scritti dal Senior)

```python
from enum import Enum
import unittest

class TransactionType(Enum):
    DEPOSIT = 1
    WITHDRAWAL = 2

def calculate_transaction_amount(amount: float, transaction_type: TransactionType, apply_fee: bool = False) -> float:
    """
    Calcola l'importo finale applicando tasse e commissioni in base al tipo di transazione (Deposito/Prelievo).
    """
    if amount < 0:
        raise ValueError("L'importo della transazione deve essere maggiore di 0.")

    if transaction_type == TransactionType.DEPOSIT:
        taxed_amount = amount * 1.1
        return taxed_amount + 500 if apply_fee else taxed_amount

    elif transaction_type == TransactionType.WITHDRAWAL:
        return amount * 0.95

    return 0.0

# ----------------- Unit Tests ----------------- #
class TestCalculateTransaction(unittest.TestCase):
    def test_deposit_with_fee(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.DEPOSIT, True), 1600.0)

    def test_withdrawal_amount(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.WITHDRAWAL), 950.0)

    def test_negative_amount_raises_error(self):
        with self.assertRaises(ValueError):
            calculate_transaction_amount(-500, TransactionType.DEPOSIT)
```

---

## 🎯 Conclusione

Smetti di sospirare davanti a schermi pieni di codice legacy incomprensibile.
Con il giusto prompt e l'IA al tuo fianco, il refactoring non è più una sofferenza frustrante, ma una **piacevole pulizia** ricca di soddisfazioni.

Perché non provi oggi stesso a fare il refactoring di quella funzione che odi tanto, lavorando insieme all'IA? 💻 L'orario di fine turno si avvicinerà in modo evidente!
