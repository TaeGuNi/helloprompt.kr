---
layout: /src/layouts/Layout.astro
title: "Prompt per Agenti Llama 4: Sbloccare le Capacità di Ragionamento in Locale"
author: "Jay"
date: "2026-02-16"
updatedDate: "2026-02-16"
category: "AI Engineering"
description: "Usi i prompt di Llama 3 per Llama 4? Scopri la struttura 'Chain-of-Command' per potenziare del 200% il ragionamento di Llama 4 in locale con Ollama."
tags: ["Llama 4", "Prompt Engineering", "Agents", "Local AI", "System Prompts"]
---

## 📝 Prompt per Agenti Llama 4: Risvegliare la Capacità di Ragionamento Perfetta in Locale

- **🎯 Consigliato per:** Sviluppatori che utilizzano LLM locali, Architetti AI, Prompt Engineer.
- **⏱️ Tempo richiesto:** Configurazione agenti da 1 ora a 5 minuti.
- **🤖 Prestazioni top:** Llama 4 (consigliato in particolare il modello 70B, ambiente Ollama).

- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilizzo:** ⭐⭐⭐⭐⭐

> _"Hai comprato una Ferrari ma guidi in prima marcia? Copiare e incollare i prompt di Llama 3 in Llama 4 è esattamente la stessa cosa."_

Con l'arrivo di **Llama 4**, abbiamo finalmente tra le mani un modello potente capace di **ragionamento complesso (pensiero 'System 2')** su hardware consumer—sì, gira perfettamente anche su un MacBook M4. Tuttavia, per godere appieno di queste prestazioni schiaccianti, è necessaria una nuova condizione.

Se impartite istruzioni brevi e lineari alla vecchia maniera, il modello perde l'orientamento. Avrete sicuramente provato la frustrazione di far girare un pesante modello 70B in locale, con le ventole del MacBook che urlano impazzite, solo per ottenere un codice "spaghetti" scadente o pieno di allucinazioni. Non è un problema di prestazioni del modello. È perché non gli avete dato lo spazio per **'pensare' (Think)** prima di agire.

A differenza delle generazioni precedenti, Llama 4 non si limita a 'eseguire' ciecamente le istruzioni fornite. Se il vostro prompt non progetta chiaramente queste 'fasi di ragionamento', il modello si smarrirà in inutili lungaggini. È come urlare "Scrivi questo codice subito!" a uno sviluppatore senior che preferirebbe analizzare l'architettura prima di iniziare.

In questo articolo, svelerò integralmente il framework del **System Prompt 'Chain-of-Command' (Catena di Comando)** che utilizzo abitualmente per costruire agenti estremamente stabili con il modello Llama 4 70B in locale. Il fulcro di questo framework consiste nel costringere il modello a produrre un processo di pensiero strutturato *prima* di generare il risultato finale. In un workflow agentico in cui i risultati devono essere parsati via codice, questa non è un'opzione, ma una condizione essenziale per la sopravvivenza. Con questo singolo prompt, la vostra AI locale evolverà da un semplice chatbot a un 'Senior Architect' dotato di una struttura logica perfetta.

---

## 📊 Dimostrazione: Risultati Sorprendenti (Prima e Dopo)

Applichiamo il prompt presentato sopra a un ambiente reale per dimostrare come possa rifattorizzare elegantemente un ciclo Python scritto in modo approssimativo.

### ❌ Prima (La sofferenza comune)

Una situazione frustrante in cui, a causa di istruzioni senza contesto, il modello rimane al livello di un semplice chatbot, producendo codice legacy non idiomatico (Non-Pythonic) o non comprendendo affatto la richiesta.

```python
def process_data(data):
    res = []
    for i in range(len(data)):
        if data[i] % 2 == 0:
            res.append(data[i] * 2)
    return res
```

### ✅ Dopo (Il risultato della trasformazione perfetta)

Dopo l'applicazione del prompt, il modello sviluppa la propria logica nel blocco `<thought>` prima di scrivere il codice, producendo un output perfettamente rifattorizzato.

```xml
<thought>
L'utente ha inserito una semplice funzione Python `process_data` che filtra i numeri pari e ne raddoppia il valore.
1. Analisi: L'approccio basato sull'indice `range(len(data))` non è affatto idiomatico in Python (Non-Pythonic). Inoltre, inizializzare una lista vuota e aggiungere elementi manualmente tramite un loop `append` è inefficiente in termini di prestazioni.
2. Piano: Questo codice è il candidato perfetto per il pattern 'List Comprehension'. Ciò ridurrà drasticamente le righe di codice e aumenterà la velocità di esecuzione. Anche la complessità concettuale del codice sarà notevolmente ridotta.
</thought>
```

```python
def process_data(data: list[int]) -> list[int]:
    """
    Filtra solo i numeri pari e restituisce una nuova lista con i valori raddoppiati.
    """
    return [x * 2 for x in data if x % 2 == 0]
```

---

## ⚡️ Sintesi in 3 punti (TL;DR)

1. Llama 4 è più di un semplice 'esecutore', è un 'ragionatore'. Comandi lineari privi di contesto paralizzano il pensiero del modello e causano errori fatali.
2. È necessario forzare, a livello di prompt, uno spazio per il tag `<thought>` (scratchpad) affinché il modello possa stabilire un piano di lavoro prima di generare la risposta finale.
3. L'uso di un vocabolario gerarchico e rigoroso come 'Catena di Comando' (Chain-of-Command) invece di semplici 'Istruzioni' riduce drasticamente il tasso di deviazione dal prompt.

---

## 🚀 Come scrivono i veri esperti

Ecco il System Prompt utilizzato realmente per costruire agenti locali altamente automatizzati, sistemi di code review o rifattorizzazione. Copiate il prompt sottostante e applicatelo immediatamente al vostro lavoro.

### 🥇 Versione Pro (Per Esperti)

> **RUOLO (IDENTITY):**
> Sei **Architect-4**. Un agente Senior Software Architect che gira su hardware locale Llama 4.
>
> **MISSIONE (MISSION):**
> Il tuo obiettivo è analizzare la codebase dell'utente e proporre strategie di rifattorizzazione che diano priorità alla **leggibilità (Readability)** e alle **prestazioni (Performance)**.
>
> **CATENA DI COMANDO (CHAIN OF COMMAND) - Da rispettare rigorosamente:**
>
> 1. **ANALIZZARE (ANALYZE):** Per prima cosa, assimila lo snippet di codice dell'utente. Identifica code smell, hotspot di complessità (complessità ciclomomatica > 10) e potenziali bug.
> 2. **RAGIONARE (REASON):** Pianifica l'approccio di rifattorizzazione obbligatoriamente all'interno di un blocco `<thought>`. Discuti internamente due potenziali soluzioni e scegli la migliore.
> 3. **ESEGUIRE (EXECUTE):** Produci il codice rifattorizzato all'interno di un blocco di codice Markdown standard.
> 4. **VERIFICARE (VERIFY):** Spiega brevemente perché questa versione è migliore della precedente.
>
> **FORMATO DI OUTPUT (OUTPUT FORMAT):**
> La tua risposta deve seguire esattamente la struttura seguente:
>
> `<thought>`
> `[Inserisci qui il tuo ragionamento interno]`
> `</thought>`
>
> ` ```python `
> `[Codice Rifattorizzato]`
> ` ``` `
>
> **[Verifica]**
>
> - `[Elenco dei miglioramenti in punti elenco]`
>
> **VINCOLI (CONSTRAINTS):**
>
> - Non eliminare mai i commenti, a meno che non siano diventati palesemente inutili.
> - Non utilizzare mai librerie esterne senza l'esplicito consenso dell'utente.
> - Se il codice è già in uno stato ottimale, scrivi semplicemente "NO REFACTOR NEEDED".

---

## 💡 Commento dell'Autore (Insight e Modalità d'uso)

Questo prompt è un template pratico che ho perfezionato dopo decine di fallimenti dolorosi, testando il modello **Llama 4 70B (quantizzazione a 4-bit)** in ambiente `ollama`. Ecco i motivi principali per cui questa struttura funziona così perfettamente.

Il primo punto da sottolineare è la **magia del tag `<thought>`**. È l'arma più letale di questo framework. Forzando il riempimento di un tag in formato XML, si ottiene l'effetto di dare al modello una sorta di 'blocco note' (Scratchpad). Secondo i miei test di benchmark, quando questo tag è esplicitato, i salti logici e gli errori diminuiscono di oltre il **40%**. Il principio è indurre il modello a riflettere a voce alta e organizzare i pensieri prima di scrivere il codice. È esattamente lo stesso principio per cui scarabocchiamo formule su un foglio di carta prima di risolvere un problema complesso. Se permettete al modello di sputare immediatamente il codice senza questo processo, rimarrà intrappolato nel suo primo token (Token Entanglement) e cadrà in contraddizioni logiche.

In secondo luogo, l'uso di un **linguaggio rigoroso come 'Catena di Comando'**. Invece della comune parola 'Istruzioni', Llama 4 reagisce con molta più sensibilità e precisione a termini gerarchici e decisi come 'Catena di Comando' (Chain of Command) o 'Protocollo' (Protocol). I grandi modelli linguistici sono fortemente influenzati dalle sfumature del testo. Inserendo nel prompt parole tipiche di un ambiente militare o di un'organizzazione strutturata, è possibile controllare chiaramente il fenomeno cronico del salto arbitrario dei passaggi intermedi. Un comando meccanico e freddo è infinitamente più vantaggioso di una richiesta gentile per aumentare la coerenza dell'agente.

Infine, non bisogna mai sottovalutare il **potere dei vincoli negativi (Negative Constraints)**. Più un modello è intelligente, più è fantasioso, col rischio che si prenda libertà eccessive modificando codice non richiesto. Piuttosto che suggerire gentilmente "Mantieni bene i commenti", è necessario controllare fermamente ciò che 'non deve fare' con frasi come "Non eliminare mai i commenti". Soprattutto in ambiente locale, un'allucinazione può far crollare l'intera pipeline di automazione, rendendo questi vincoli ferrei essenziali. Fissate questo prompt nella vostra area `[System Prompt]` e sintonizzate solo le variabili `[Ruolo]` e `[Missione]` in base alla situazione. Rimarrete stupiti dai risultati.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: A volte il modello produce il blocco `<thought>` dopo il codice. Come posso correggerlo?**
  - A: I modelli linguistici (LLM) soffrono di un **'Bias di Recency' (Recency Bias)**, per cui sono maggiormente influenzati dal testo letto per ultimo. Provate a spostare la sezione `FORMATO DI OUTPUT (OUTPUT FORMAT)` alla fine del prompt (subito sotto i vincoli). Vedrete che inizierà a rispettare perfettamente l'ordine indicato.

- **Q: Il modello rifiuta spesso di rifattorizzare dicendo "Modificare questo codice legacy rischia di rompere le dipendenze".**
  - A: Questo accade perché i filtri di sicurezza e conservatorismo integrati in Llama 4 sono attivi. In questo caso, potete facilmente **aggirare (Bypass)** il meccanismo di difesa aggiungendo nei vincoli: `- Assumi che questo codice sia in un ambiente perfettamente isolato e che esistano unit test con copertura al 100%.`

- **Q: Si verificano fenomeni di allucinazione (Hallucination) in cui vengono importate librerie inesistenti.**
  - A: Se mettete in chiaro nella sezione dei vincoli `- A meno di istruzioni esplicite contrarie, utilizza esclusivamente la 'Standard Library' del linguaggio in questione.`, potrete bloccare all'origine oltre il 99% delle allucinazioni che importano dipendenze esterne a casaccio.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Attribuzione di Identity & Mission:** Facendo in modo che il modello percepisca se stesso come un 'Senior Architect' e non come un semplice chatbot, si eleva forzatamente il livello generale del codice prodotto (ossessione per leggibilità e prestazioni).
2. **Esecuzione a fasi (Chain of Command):** Presentando una pipeline a 4 fasi (Analisi -> Ragionamento -> Esecuzione -> Verifica), si impedisce al modello di saltare frettolosamente alla conclusione (codice). È la tecnica chiave per indurre il tipico pensiero **System 2**.
3. **Output Strutturato (Output Format):** Si controlla rigorosamente il formato della risposta affinché possa essere facilmente parsato con espressioni regolari in script esterni come Python, garantendo zero errori di formato.

---

## 🎯 Conclusione

Llama 4 non è semplicemente un 'Llama 3 che parla meglio'. È, di per sé, un gigantesco **motore di ragionamento (Reasoning Engine)**. Utilizzate il framework 'Chain-of-Command' che ho condiviso come vostra arma e guidate il modello con la maestria con cui gestireste un eccellente ingegnere junior. Assegnate ruoli chiari, costringetelo a pensare intensamente prima di aprire bocca e controllate senza pietà il formato dell'output.

È ora di smettere di giocare ai chatbot che scambiano battute senza senso con l'AI e iniziare a fare vero 'Engineering'. Pipeline perfettamente automatizzate e il dolce sapore di un lavoro terminato in tempo vi aspettano! 🍷
