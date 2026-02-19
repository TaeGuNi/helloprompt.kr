---
layout: /src/layouts/Layout.astro
title: "Troppo pigro per scrivere codice di test? L'IA lo farà per te"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Sviluppo"
description: "Un prompt che genera automaticamente codici di Test Unitari ingombranti considerando anche i casi limite."
tags: ["Codice di Test", "TDD", "Jest", "JUnit"]
---

# 📝 Troppo pigro per scrivere codice di test? L'IA lo farà per te

**🎯 Consigliato per:** Tutti
**⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Impegnato a implementare funzionalità e anche codice di test? Ma senza test, devi tremare di ansia ad ogni distribuzione."_

Il Test Unitario è essenziale per servizi stabili, ma scriverli è laborioso e noioso. È particolarmente difficile curare meticolosamente i Casi Limite. Lascia questo compito noioso all'IA e concentrati sull'implementazione della logica.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Se lasci la scrittura ingombrante di test unitari all'IA, si prende cura meticolosamente anche dei casi eccezionali.
2. Genera test robusti considerando non solo i Percorsi Felici ma anche i Casi Limite.
3. Assegna il ruolo di Ingegnere QA per aumentare la copertura dei test e garantire la stabilità del codice.

---

## 🚀 La Soluzione: "Guardiano Copertura Test"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

**Ruolo:** Sei un `[Responsabile Ingegneria QA]`.
**Richiesta:** Crea un prompt che generi automaticamente codici di Test Unitari ingombranti considerando anche i casi limite.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei un `[Responsabile Ingegneria QA]`.
>
> **Situazione:** Devo scrivere codice di test unitario per la `[Funzione/Classe]` che ho scritto. Uso `[Framework di Test Usato]`.
>
> **Compito:**
>
> 1. Scrivi un test per caso di successo (Percorso Felice) per input normale.
> 2. Identifica almeno 3 potenziali situazioni di eccezione e Casi Limite, e scrivi test di fallimento per essi.
> 3. Aggiungi commenti al codice di test spiegando cosa verifica ogni caso.
>
> **Codice da Testare:**
> `[Incolla qui il tuo codice]`

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input: Funzione Calcolo Semplice)

```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Impossibile dividere per 0.");
  return a / b;
}
```

<br>

### ✅ Dopo (Risultato)

```javascript
// Esempio Framework Jest

describe("test funzione divide", () => {
  // 1. Percorso Felice: Divisione normale
  test("Dividere 10 per 2 dovrebbe restituire 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Caso Limite: Divisione numeri negativi
  test("Dividere numeri negativi dovrebbe gestire correttamente il segno", () => {
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(-10, -2)).toBe(5);
  });

  // 3. Caso Eccezione: Dividere per 0
  test("Dividere per 0 dovrebbe lanciare un errore", () => {
    expect(() => divide(10, 0)).toThrow("Impossibile dividere per 0.");
  });

  // 4. Caso Limite: Gestione decimali
  test("Dovrebbe essere accurato quando il risultato della divisione è un decimale", () => {
    expect(divide(5, 2)).toBe(2.5);
  });
});
```

---

## 🎯 Conclusione

Il codice di test è un'assicurazione per il tuo io futuro. Abbassa drasticamente il premio assicurativo (tempo di scrittura) attraverso l'IA.
