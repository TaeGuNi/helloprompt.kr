---
title: "Self-Healing Code: Building an Agent That Fixes Its Own Bugs"
description: "Stop babying your AI code generator. Learn how to build a 'Self-Healing' workflow where agents write, run, and fix their own errors automatically. A guide to Reflection loops."
author: "Unifactory Editor"
date: "2026-02-16"
tags: ["AI Agent", "Coding", "Automation", "Python", "Local LLM", "Workflow"]
image: "/images/2026/02/16/self-healing-code.jpg"
---

# 📝 Codice Autoguarente (Self-Healing Code): Creare un Agente AI che Corregge i Propri Bug

- **🎯 Consigliato per:** Sviluppatori, Data Engineer, Tech Lead che valutano l'adozione di Agenti AI
- **⏱️ Tempo richiesto:** Da debugging infinito → 0 minuti con l'automazione
- **🤖 Modelli consigliati:** GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro (modelli specializzati nel coding)

- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Applicabilità:** ⭐⭐⭐⭐⭐

> _"Quando il codice generato dall'AI restituisce un errore, stai ancora copiando manualmente il messaggio di log per incollarlo di nuovo nella chat?"_

Esegui uno script Python generato dall'AI e compare un `SyntaxError`. Copi l'errore, lo rimandi all'AI, le chiedi di correggerlo e solo allora il codice funziona. 

Ma poniamoci una domanda: **perché un "essere umano" dovrebbe fare da passacarte per dei semplici copia-incolla?**

Nel 2026, gli ingegneri più all'avanguardia non si limitano a chiedere all'AI di scrivere codice. Costruiscono **Sistemi Autoguarenti (Self-Healing Systems)**. Oggi scopriremo come automatizzare il noioso loop di debugging "Scrittura → Esecuzione → Correzione", trasformando un generatore di codice passivo in un vero e proprio "problem solver" autonomo.

---

## ⚡️ Sintesi in 3 Punti (TL;DR)

1. Abbandona l'illusione del "One-Shot": l'AI non scriverà quasi mai codice perfetto al primo tentativo.
2. Il segreto è il "Reflection Loop": catturare gli errori di esecuzione (`stderr`) e fornirli nuovamente all'AI come feedback.
3. Utilizzando il modulo `subprocess` di Python, puoi creare un agente autoguarente con appena 50 righe di codice.

---

## 🚀 La Soluzione: Il Prompt "Code Healer"

### 🥉 Versione Basic (Essenziale)

Usala per correzioni rapide di errori banali.

> **Ruolo:** Sei un `[Sviluppatore Python Senior]`.
> **Azione:** Correggi i bug nel seguente `[Codice Originale]` basandoti su questo `[Messaggio di Errore]`.

<br>

### 🥇 Versione Pro (Avanzata)

Ideale per essere integrata in un sistema di agenti per costruire una pipeline di debugging completamente automatizzata.

> **Ruolo (Role):**
> Sei un Site Reliability Engineer (SRE) Python Senior, responsabile dell'affidabilità del sistema. Non sono ammesse scuse o spiegazioni prolisse. Esprimiti unicamente attraverso codice perfettamente funzionante.
>
> **Contesto (Context):**
>
> - Contesto: Uno script generato da un modello AI ha fallito l'esecuzione (Failed).
> - Obiettivo: Analizzare il `[Codice Originale]` e il `[Log di Errore (Traceback)]` forniti per attuare il Self-Healing (autoguarigione) del codice.
>
> **Azione (Task):**
>
> 1. Analizza il `[Log di Errore]` per identificare la causa scatenante (errore di sintassi, errore logico, modulo mancante, ecc.).
> 2. Esamina il `[Codice Originale]` per individuare l'esatto punto di rottura.
> 3. Riscrivi il **codice Python completo e corretto**.
>
> **Vincoli (Constraints):**
>
> - Non rimuovere arbitrariamente funzionalità o logiche chiave del codice esistente. Concentrati esclusivamente sulla "risoluzione dell'errore".
> - Non generare MAI risposte discorsive o riempitive come "Ecco il codice corretto".
> - L'output deve consistere in un UNICO blocco di codice Python in Markdown (` ```python ... ``` `). Nessun altro testo è permesso.
>
> **Dati di Input (Input Data):**
> **Codice Originale:**
>
> ```python
> [Inserisci qui il codice originale]
> ```
>
> **Log di Errore:**
>
> ```text
> [Inserisci qui il messaggio di errore da stderr]
> ```

---

## 💻 Automatizzare il Loop in Python (Implementazione)

Non hai bisogno di framework AI pesanti come LangChain. Puoi orchestrare brillantemente questo loop utilizzando solo la libreria standard di Python, in particolare `subprocess`.

```python
import subprocess
# Si presuppone che il client LLM (es. OpenAI) sia già configurato.
# from openai import OpenAI
# client = OpenAI()

def generate_fix(prompt):
    # Funzione per chiamare l'LLM e ottenere il codice corretto (GPT-4, Claude, Llama 3, ecc.)
    # response = client.chat.completions.create(...)
    # return response.choices[0].message.content
    pass

def run_and_heal(script_path, max_retries=3):
    for attempt in range(max_retries):
        # 1. Esecuzione: Avvia in un processo separato per catturare in modo sicuro gli errori
        process = subprocess.run(
            ['python', script_path],
            capture_output=True, text=True
        )

        # Successo: un returncode pari a 0 indica l'assenza di errori
        if process.returncode == 0:
            print(f"✅ Successo! (Tentativo: {attempt + 1})")
            return process.stdout

        # Fallimento: estrae il messaggio di errore da stderr
        error_msg = process.stderr
        print(f"❌ Fallimento (Tentativo: {attempt + 1}): {error_msg.strip().splitlines()[-1]}")

        # 2. Autoguarigione (Step Agentico)
        with open(script_path, 'r') as f:
            broken_code = f.read()

        healing_prompt = f"""
        Correggi il codice Python basandoti su questo errore.

        [Codice Originale]
        {broken_code}

        [Messaggio di Errore]
        {error_msg}

        Restituisci ESCLUSIVAMENTE il 'codice corretto' senza alcuna spiegazione o formattazione Markdown extra.
        """

        fixed_code = generate_fix(healing_prompt)

        # Sovrascrive lo script originale con il codice corretto
        with open(script_path, 'w') as f:
            f.write(fixed_code)

        print(f"🩹 Codice curato. Eseguo di nuovo...")

    print("💀 Guarigione fallita: superato il numero massimo di tentativi.")
    return None
```

---

## 💡 Il Commento dell'Autore (Insight)

Questo pattern di "Self-Healing" cambia radicalmente il nostro modo di interagire con l'AI.

In passato, durante lo sviluppo di uno strumento di web scraping automatizzato, mi sono imbattuto in un problema ricorrente: l'AI si inventava (allucinazione) selettori CSS inesistenti, scrivendo codice apparentemente corretto ma del tutto inutile. Per risolvere la questione, non mi sono limitato a intercettare gli errori di sintassi, ma ho implementato un **Loop di Validazione (Validation Loop)** che considerava un errore anche il fatto che "la lista degli elementi estratti fosse vuota".

Il risultato è stato sorprendente. L'agente ha iniziato a **provare autonomamente nuovi selettori CSS e a riscrivere il codice** finché non riusciva a estrarre i dati correttamente. Non si trattava più di una semplice correzione di bug, ma di un vero e proprio processo di **Adattamento (Adaptation)** dell'AI all'ambiente (la struttura della pagina web). La vera sfida, oggi, non è generare codice, ma progettare loop che obblighino l'AI a "verificare" e ad assumersi la "responsabilità" di ciò che ha creato.

---

## 🙋 Domande Frequenti (FAQ)

- **D: Cosa succede se la sovrascrittura corrompe irreversibilmente lo script?**
  - R: In un ambiente di produzione reale, è fortemente sconsigliato sovrascrivere direttamente lo `script_path`. È molto più sicuro gestire delle versioni (es. `script_v1.py`, `script_v2.py`) o automatizzare dei commit Git prima di ogni modifica, in modo da avere un solido meccanismo di rollback.

- **D: C'è il rischio di finire in un loop infinito?**
  - R: Proprio per questo motivo è cruciale impostare un parametro come `max_retries` (limite di tentativi). Se un errore non si risolve dopo 3-5 iterazioni, è altamente probabile che ci si trovi di fronte a un limite intrinseco del prompt o a un difetto architetturale che richiede l'intervento umano.

- **D: Quale modello LLM è più indicato per questo compito?**
  - R: Poiché sono richieste elevate capacità di ragionamento logico e di manipolazione del codice, raccomandiamo caldamente l'uso di GPT-4o, Claude 3.5 Sonnet o dei più recenti modelli locali appositamente addestrati per il coding.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Analisi forzata dell'errore (Chain-of-Thought):** Impostando il task in modo che l'AI debba prima analizzare il log, la costringiamo a comprendere la natura del problema prima di lanciarsi in modifiche avventate.
2. **Controllo stringente dell'output (Systematic Output):** Il vincolo "restituisci solo il codice senza spiegazioni" è vitale. Previene l'insorgere di errori secondari causati da testo discorsivo non valido durante la fase in cui il tuo script Python esegue il parsing della risposta dell'AI.

---

## 📊 La Prova: Prima & Dopo

### ❌ Prima (Approccio Tradizionale)

```text
1. L'utente chiede all'AI di scrivere del codice.
2. Esecuzione del codice -> Si verifica un bug (es. SyntaxError).
3. L'utente copia manualmente il Traceback dell'errore.
4. L'utente incolla l'errore nella chat AI e attende la riscrittura.
5. L'utente copia il nuovo codice e lo testa di nuovo (ripetere all'infinito).
```

### ✅ Dopo (Sistema Autoguarente)

```text
1. L'utente definisce l'obiettivo; l'AI scrive il codice iniziale.
2. Il sistema esegue il codice automaticamente e cattura eventuali errori (stderr).
3. L'Agente AI analizza l'errore e riscrive il codice in totale autonomia (Self-Healing).
4. L'utente riceve esclusivamente il risultato finale e perfettamente funzionante.
```

---

## 🎯 Conclusione

Smetti di chiedere all'AI semplicemente di "scrivere codice". Obbligala ad **assumersi la responsabilità** di farlo funzionare.

Il vero segreto degli Agentic Workflow del 2026 non risiede nella grandezza del modello linguistico utilizzato, ma nella raffinatezza dei "Reflection Loop" che riesci a progettare. Copia subito il codice Python qui sopra e introduci un "Agente Guaritore" nel tuo ambiente di lavoro!
