---
layout: /src/layouts/Layout.astro
title: "Scrivere Codice di Test, Un Prompt Che Finisce in 5 Minuti"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Sviluppo"
description: "Affida la noiosa stesura dei Test Unitari all'IA e punta al 100% di test coverage in soli 5 minuti."
tags: ["Codice di Test", "TDD", "Jest", "PyTest", "QA"]
---

# 📝 Scrivere Codice di Test: Il Prompt Che Ti Fa Finire in 5 Minuti

- **🎯 Consigliato per:** Sviluppatori, Ingegneri QA, Tech Lead
- **⏱️ Tempo richiesto:** 30 minuti → 5 minuti
- **🤖 Modello consigliato:** Claude 3.5 Sonnet, GPT-4o (Eccellenti per il codice)

- ⭐ **Difficoltà:** ⭐⭐☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Scrivo codice tutto il giorno, come faccio a trovare il tempo anche per i test unitari?"_

Tutti sappiamo quanto sia cruciale avere una buona suite di test, ma ammettiamolo: scriverli spesso richiede più tempo della logica di business stessa. Pensare ai casi limite (edge cases), configurare i mock, gestire le dipendenze... ti fa passare la voglia prima ancora di iniziare, vero?

Ora, tutto ciò che devi fare è incollare la tua logica di business. L'Intelligenza Artificiale scriverà per te dei test unitari meticolosi e pronti all'uso.

---

## ⚡️ 3 Cose da Sapere (TL;DR)

1. **Copertura Totale:** Non solo _Happy Path_, ma anche gestione avanzata delle eccezioni e dei casi limite.
2. **Supporto Universale:** Si adatta perfettamente a qualsiasi framework (Jest, PyTest, JUnit, ecc.).
3. **Mocking Automatico:** Genera automaticamente i dati fittizi e i mock per le dipendenze esterne.

---

## 🚀 La Soluzione: "Generatore Supremo di Test Unitari"

### 🥉 Basic Version (Versione Base)

Usala quando hai bisogno di un risultato immediato senza troppe configurazioni.

> **Ruolo:** Sei un Ingegnere QA Senior esperto in automazione dei test.
> **Richiesta:** Scrivi i test unitari per il seguente frammento di codice. Assicurati di coprire i casi di successo e gli errori principali.
> **Codice:** `[Incolla il tuo codice qui]`

<br>

### 🥇 Pro Version (Versione Esperto)

Usala per progetti complessi dove hai bisogno di test pronti per la produzione, completi di mock e descrizioni dettagliate.

> **Ruolo (Role):** Sei un Ingegnere QA meticoloso, perfezionista e Senior Software Engineer, massimo esperto in Test-Driven Development (TDD) e automazione.
>
> **Contesto (Context):**
>
> - Linguaggio/Framework: `[Linguaggio/Framework Usato, es. TypeScript/Jest]`
> - Obiettivo: Ho bisogno di test unitari robusti per aumentare l'affidabilità e raggiungere un'alta test coverage su questo modulo.
>
> **Richiesta (Task):**
>
> 1. Analizza il codice fornito e stila prima un elenco puntato dei casi di test (Test Cases) necessari, includendo: percorsi felici (Happy Paths), casi di fallimento attesi e analisi dei valori limite (Edge Cases).
> 2. Scrivi il codice di test eseguibile utilizzando `[Nome Libreria di Test, es. Jest]`.
> 3. Se il codice presenta dipendenze esterne (API, database, altre funzioni), implementa correttamente il Mocking.
> 4. Aggiungi commenti chiari per ogni test block (`it` o `test`), spiegando esattamente cosa viene verificato.
>
> **Codice:**
>
> ```
> [Incolla qui il codice da testare]
> ```
>
> **Vincoli (Constraints):**
>
> - Scrivi le descrizioni dei test (le stringhe dentro i blocchi di test) in italiano chiaro e professionale.
> - Fornisci il codice di test finale all'interno di un unico blocco di codice markdown, in modo che sia copiabile ed eseguibile immediatamente.
> - Evita test ridondanti, ma punta alla massima copertura logica.

---

## 💡 Commento dell'Autore (Insight)

Questo prompt è un vero salvavita per noi sviluppatori. La parte più noiosa dello scrivere test non è la sintassi, ma dover immaginare tutti i possibili scenari di rottura (edge cases) e configurare i mock per i servizi esterni.

L'IA eccelle proprio in questo: nell'analisi combinatoria dei possibili input. Personalmente, lo uso non solo per scrivere test per codice legacy non testato, ma anche durante il processo di Code Review per verificare se un collega ha dimenticato di testare un caso specifico. **Un consiglio d'oro:** Se usi Jest o Vitest, specifica nel prompt se preferisci che i mock vengano fatti con `vi.mock()` o `jest.spyOn()`, l'IA si adatterà perfettamente al tuo stile di codice aziendale!

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Funziona anche con codice React o componenti UI?**
  - A: Assolutamente sì! Basta specificare nel framework `[React Testing Library + Jest/Vitest]`. Ricordati di includere il codice del componente e l'IA genererà i test simulando le interazioni dell'utente (click, input, ecc.).

- **Q: Posso usarlo per il codice Backend che fa chiamate al Database?**
  - A: Certamente. Il prompt include già un'istruzione per gestire i Mock. L'IA creerà dei mock per i tuoi repository o servizi ORM (come Prisma o TypeORM) in modo da isolare la logica di business dal database reale.

- **Q: Cosa faccio se il test generato fallisce?**
  - A: Se il test fallisce, passagli l'errore del terminale dicendo: _"Questo test fallisce con questo errore: [Errore]. Correggi il test o dimmi se c'è un bug nel mio codice originale."_ Spesso l'IA troverà un bug reale nel tuo codice che non avevi notato!

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Role Setting (QA Senior):** Imposta l'IA in modalità "critica". Non si limita a far passare il codice, ma cerca di "romperlo" pensando ai casi limite.
2. **Pianificazione Anticipata (Task 1):** Chiedendo all'IA di stilare prima la _lista dei casi di test_, la costringiamo a fare un piano logico (Chain-of-Thought) prima di scrivere il codice effettivo, riducendo drasticamente gli errori o le omissioni.
3. **Gestione dei Mock Implicita:** Affronta direttamente il problema più grande dei test unitari (le dipendenze), obbligando l'IA a isolare la funzione.

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input: Solo logica di business)

```javascript
function calcolaSconto(prezzo, percentualeSconto) {
  if (prezzo < 0) throw new Error("Il prezzo non può essere negativo.");
  if (percentualeSconto < 0 || percentualeSconto > 100)
    throw new Error("Percentuale non valida.");
  return prezzo - prezzo * (percentualeSconto / 100);
}
```

### ✅ Dopo (Output: Test Suite Completa)

```javascript
import { calcolaSconto } from "./calcolaSconto";

describe("Test per la funzione calcolaSconto", () => {
  // Caso Felice
  it("dovrebbe calcolare correttamente uno sconto del 20% su 100", () => {
    expect(calcolaSconto(100, 20)).toBe(80);
  });

  // Valori Limite (Edge Cases)
  it("dovrebbe restituire il prezzo originale se lo sconto è 0%", () => {
    expect(calcolaSconto(50, 0)).toBe(50);
  });

  it("dovrebbe restituire 0 se lo sconto è del 100%", () => {
    expect(calcolaSconto(200, 100)).toBe(0);
  });

  // Gestione Eccezioni (Error Handling)
  it("dovrebbe lanciare un errore se il prezzo è negativo", () => {
    expect(() => calcolaSconto(-10, 20)).toThrow(
      "Il prezzo non può essere negativo.",
    );
  });

  it("dovrebbe lanciare un errore se la percentuale di sconto è maggiore di 100", () => {
    expect(() => calcolaSconto(100, 150)).toThrow("Percentuale non valida.");
  });
});
```

---

## 🎯 Conclusione

Se i bug vengono scoperti in produzione, il costo e lo stress per risolverli si moltiplicano a dismisura.
Stermina i bug alla radice durante la fase di sviluppo con questo prompt, e clicca su quel pulsante 'Merge' con assoluta serenità. Buona programmazione! 🍷
