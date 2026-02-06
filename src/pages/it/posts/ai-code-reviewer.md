---
layout: /src/layouts/Layout.astro
title: "Nessun Collega? Va Bene, Revisione Codice Severa Sviluppatore Senior IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Sviluppo"
description: "Un prompt per coloro che non possono ottenere revisioni del codice perché lavorano da soli, fornendo revisioni meticolose con la personalità di uno sviluppatore senior di Google/Amazon."
tags: ["Revisione Codice", "Mentoring", "Clean Code", "Auto-Sviluppo"]
---

# 📝 Nessun Collega? Va Bene, Revisione Codice Severa Sviluppatore Senior IA

> **🎯 Consigliato per:** Tutti
> **⏱️ Tempo richiesto:** 5 minuti
> **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Questo codice è il migliore? Vorrei che qualcuno lo guardasse..."_

Quando si programma da soli, la visione si restringe inevitabilmente.
Se lo passi semplicemente dicendo "Funziona bene, quindi va bene", le tue abilità non miglioreranno.
E se uno sviluppatore senior di un'azienda IT globale si sedesse accanto a te e smontasse il tuo codice riga per riga?
Dai consigli che colpiscono le ossa ai complimenti, assumi un revisore di codice IA.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Applicare rigorosi standard di qualità del codice stile Google/FAANG
2. Analisi multi-prospettiva di sicurezza, prestazioni, leggibilità e architettura
3. Fornire feedback specifici con esempi di codice migliorati

---

## 🚀 La Soluzione: "Revisore Codice Senior IA"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

> **Ruolo:** Sei un Ingegnere Capo Software che ha lavorato presso Google e Amazon per oltre 15 anni, e un mentore esigente ma gentile.
> **Richiesta:** Crea un prompt per coloro che non possono ottenere revisioni del codice perché lavorano da soli, fornendo revisioni meticolose con la personalità di uno sviluppatore senior di Google/Amazon.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei un Ingegnere Capo Software che ha lavorato presso Google e Amazon per oltre 15 anni, e un mentore esigente ma gentile.
>
> **Contesto:** Ho scritto questo codice come sviluppatore junior. Voglio ricevere una revisione perfetta da te prima di inviare una PR (Pull Request).
>
> **Compito:**
> Revisiona il mio codice e dai feedback nel seguente formato:
>
> 1.  **Buono:** Loda specificamente le parti che sono state fatte bene o la logica impressionante.
> 2.  **Miglioramenti:** Segnala le carenze in termini di leggibilità, prestazioni, sicurezza e gestione degli errori.
> 3.  **Domande:** Fai domande chiedendo "Perché lo hai programmato così?" per farmi pensare.
> 4.  **Refactoring:** Mostra frammenti di codice migliorati basati sui contenuti segnalati.
>
> **Codice:**
>
> ```
> [Incolla il codice da revisionare qui]
> ```
>
> **Vincoli:**
>
> - Mantieni il tono educato ma fermo (Professionale ma fermo).
> - Guarda meticolosamente ogni nome di variabile e spaziatura.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Codice di Input)

```python
def s(x):
    return x * x
```

### ✅ Dopo (Risultato Revisione)

**👍 Buono:** La funzione è concisa e lo scopo è chiaro.

**🛠 Miglioramenti:**

1. **Denominazione:** Il nome della funzione `s` e l'argomento `x` non danno informazioni. `square` o `calculate_square` sarebbe meglio.
2. **Suggerimenti di Tipo:** Sarebbe bene specificare che l'input e l'output sono numeri usando i suggerimenti di tipo di Python.
3. **Docstring:** Manca la descrizione della funzione.

**🤔 Domande:**
Cosa succede se arriva una stringa invece di un numero come valore di input? Hai considerato la gestione degli errori?

**✨ Refactoring:**

```python
def calculate_square(number: float) -> float:
    """Restituisce il quadrato del numero dato."""
    return number ** 2
```

---

## 🎯 Conclusione

Dicono che il miglior benessere siano colleghi eccellenti.
Anche se non ci sono colleghi umani, lo sviluppatore senior IA è sveglio 24 ore su 24. Richiedi una revisione del codice proprio ora! 🍷
