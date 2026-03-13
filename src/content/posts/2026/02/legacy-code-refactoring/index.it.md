---
layout: /src/layouts/Layout.astro
title: " \"ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기\""
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "General"
description: "Una guida completa per utilizzare l'IA come uno sviluppatore senior con 10 anni di esperienza: refactoring di codice e generazione di test automatici."
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

## 🧹 Aspirapolvere per Codice Legacy: Refactoring & Automazione dei Test

- **🎯 Consigliato per:** Sviluppatori junior, manutentori di progetti legacy, code reviewer
- **⏱️ Tempo richiesto:** Da 1 ora per l'analisi del codice → a meno di 5 minuti
- **🤖 Modelli consigliati:** Claude 3.5 Sonnet, GPT-4o (Claude è fortemente raccomandato per logiche complesse e contesti lunghi)

- ⭐ **Difficoltà:** ⭐⭐☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Ma chi diavolo ha scritto questo codice? (...Ah, ero io un anno fa.)"_

Ti sei mai trovato di fronte a un **codice legacy** così intricato, con `if-else` annidati all'infinito, nomi di variabili incomprensibili e gestioni delle eccezioni del tutto assenti, da temere che l'intero sistema potesse crollare solo a toccarlo?

Non temere più. Ti presento la tecnica di Prompt Engineering definitiva per trasformare l'IA nel tuo personale **Pair Programmer Senior**. Sarai in grado di eseguire un refactoring elegante di quel codice "spaghetti" e, contemporaneamente, costruire uno scudo impenetrabile di test unitari.

---

## ⚡️ Sintesi in 3 punti (TL;DR)

1. **Richiedi prima un'analisi:** Invece di modificare il codice alla cieca, chiedi all'IA di analizzarne il flusso di esecuzione e lo scopo originario.
2. **Applica i principi del Clean Code:** Esegui un refactoring sicuro della struttura e della nomenclatura, basandoti rigorosamente sui principi SOLID e massimizzando la leggibilità.
3. **Costruisci uno scudo di test:** Genera automaticamente test unitari, coprendo anche gli edge case, per garantire che il comportamento del sistema rimanga invariato dopo le modifiche.

---

## 🚀 La Soluzione: "Senior Dev Simulator" (Simulatore di Sviluppatore Senior)

### 🥇 Versione Pro (Esperti)

Chiedere semplicemente "Fai il refactoring" comporta un altissimo rischio di corrompere le funzionalità esistenti. Questo prompt applica la tecnica del **Chain-of-Thought** per obbligare l'IA a ragionare per passaggi logici e strutturati.

> **Ruolo (Role):** Sei uno `[Sviluppatore Backend Senior con 10 anni di esperienza]` che ha lavorato in colossi tech come Google o Meta. Sei un fervente sostenitore della filosofia del Clean Code e applichi rigorosamente il TDD (Test-Driven Development).
>
> **Contesto (Context):**
> Ho appena ereditato un codice legacy disastroso scritto in `[Linguaggio di programmazione, es. Python/Java]`. La leggibilità è pessima e la manutenzione risulta quasi impossibile.
>
> **Compito (Task):**
> Esegui i seguenti passaggi in ordine, analizzando il codice in modo approfondito:
>
> **Step 1. Analisi e Diagnosi:** Riassumi in una frase l'obiettivo di business di questo codice e individua in modo specifico 3 problemi critici (Code Smell).
> **Step 2. Refactoring Sicuro:** Mantieni intatta al 100% la logica di business originale e i Side Effect, ma massimizza la leggibilità separando le funzioni secondo il Principio di Singola Responsabilità (SRP) e rinominando variabili e metodi in modo chiaro. Aggiungi obbligatoriamente Docstring e commenti esplicativi per le logiche di business più complesse.
> **Step 3. Verifica Difensiva (Test Code):** Scrivi dei test unitari per garantire in modo assoluto che il codice sottoposto a refactoring funzioni esattamente come l'originale. Devi includere non solo i casi di successo (Happy Path), ma almeno 2 situazioni limite (Edge Case) possibili.
>
> **Codice di Input:**
>
>
> `[Incolla qui il codice legacy da analizzare]`
>

---

## 💡 Commento dell'Autore (Insight)

Il vero valore di questo prompt non risiede semplicemente nell'ottenere un codice esteticamente "bello", ma nel **costruire prima una rete di sicurezza tramite i test unitari**. Ho utilizzato personalmente questo approccio sul campo quando ho ereditato un vecchio modulo di pagamento in Java, scritto ben 5 anni fa e privo di qualsiasi documentazione.

La scoperta più sorprendente è stata che l'IA ha individuato preventivamente, proprio durante la stesura dei test, alcuni **edge case** nascosti che mi erano completamente sfuggiti (come, ad esempio, la corretta gestione del flusso quando l'importo della transazione è esattamente pari a 0).

**🔥 Suggerimento per l'ottimizzazione sul lavoro:**
Se provi a copiare e incollare un'intera classe di centinaia di righe in una sola volta, l'IA potrebbe perdere il contesto o generare "allucinazioni". L'approccio migliore è **suddividere il codice in metodi più piccoli (sotto le 100 righe)**, partendo da quelli che presentano la maggiore complessità ciclomatica. In questo modo, la profondità dell'analisi e l'accuratezza dei test generati aumenteranno in modo esponenziale.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Quale modello IA è più adatto per gestire logiche di programmazione complesse?**
  - A: Attualmente, nel 2026, **Claude 3.5 Sonnet** e **GPT-4o** dominano incontrastati il campo del coding e del refactoring. Tra i due, Claude 3.5 Sonnet mostra prestazioni leggermente superiori nel mantenere contesti lunghi e nello scrivere codice pulito, modulare e "human-friendly".

- **Q: È sicuro fornire all'IA il codice sorgente aziendale riservato?**
  - A: **Assolutamente no.** Informazioni sensibili come chiavi API, IP della rete aziendale, dati reali dei clienti o algoritmi proprietari devono essere rigorosamente mascherati (`[MASKED]`) o sostituiti con dati fittizi (Dummy Data) prima di eseguire il prompt. In alternativa, utilizza esclusivamente ambienti Enterprise AI isolati e certificati all'interno della tua infrastruttura aziendale.

- **Q: Come devo comportarmi se si verificano errori o regressioni dopo il refactoring?**
  - A: È molto probabile che l'IA abbia trascurato una dipendenza specifica del tuo dominio. Copia l'intero log dell'errore insieme al contesto rilevante del codice originale e fornisci un feedback mirato, ad esempio: _"Si è verificato questo errore in questa sezione. Sembra che tu abbia omesso la `[Condizione Specifica]` della logica originale. Per favore, correggi."_

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Assegnazione del Ruolo Senior (Role):** Imponendo la rigorosa persona di uno "Sviluppatore Senior con 10 anni di esperienza, fervente sostenitore del Clean Code", alziamo drasticamente gli standard dell'IA. La forziamo a produrre non solo codice che compila, ma software di altissima qualità ed estremamente manutenibile.
2. **Chain-of-Thought (Catena di Pensieri):** Invece di ordinare ciecamente "Correggi questo script", abbiamo strutturato un processo logico e sequenziale in tre fasi: **[Analisi → Modifica → Verifica]**. Questo è il meccanismo chiave che spinge l'IA a migliorare l'architettura senza alterare in alcun modo l'intento originale del codice.
3. **Imposizione degli Edge Case (Constraints):** Richiedendo esplicitamente la stesura di test per gestire le situazioni limite, garantiamo una robustezza del codice tale da poter essere impiegato quasi immediatamente in un ambiente di produzione reale.

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

Smetti di disperarti davanti a schermi invasi da codice legacy incomprensibile.
Con il prompt corretto e l'IA al tuo fianco, il refactoring cessa di essere una sofferenza frustrante e si trasforma in una **soddisfacente operazione di pulizia**.

Perché non provi oggi stesso a ristrutturare quella funzione che detesti, lavorando in coppia con l'IA? 💻 L'orario di fine turno si avvicinerà in modo sorprendentemente rapido!
