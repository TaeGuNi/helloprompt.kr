---
layout: /src/layouts/Layout.astro
title: "Se c'è un errore, risolvilo da solo! 🧟‍♂️ Il prompt cheat code per trasformare un'IA lamentosa in un Terminator"
author: "Jay"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Basta con le IA che si lamentano al primo errore. Attiva la modalità agente hardcore: analizza i log e crea un loop continuo finché non si risolve da solo!"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "self-healing"]
---
# 📝 Se c'è un errore, risolvilo da solo! 🧟‍♂️ Il cheat code per trasformare un'IA lamentosa in un Terminator

- **🎯 Consigliato per:** Sviluppatori senior frustrati dalle IA pigre, coder hardcore, fanatici dell'automazione
- **⏱️ Tempo richiesto:** Da 1 ora di loop di domande a -> 0 secondi (risolve da solo)
- **🤖 Modelli consigliati:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (Si consiglia vivamente un ambiente agente con permessi di controllo del terminale)
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Un'IA che chiede cosa fare non appena trova un errore... Ti viene il dubbio se le hai chiesto di programmare o se hai assunto un principiante pigro?"_
Gli fai scrivere del codice e, al primo errore nel terminale, si ferma immediatamente e ti chiede: "Capo! C'è un errore! Vuoi che provi a risolverlo?". È davvero frustrante. Non abbiamo assunto un assistente, ma un 'Senior Engineer' a cui delegare completamente il nostro lavoro.
Questo prompt è un cheat code che cancella il fragile ego dell'IA, sempre pronta ad adulare e a scaricare le decisioni. La trasforma in un **Terminator hardcore** che, di fronte a un errore, analizza i log da solo e riprova all'infinito (Zombie) finché non lo risolve.
---
## ⚡️ Sintesi in 3 righe (TL;DR)
1. **Vietato fare domande:** Non scaricare le decisioni sugli umani solo per un errore di compilazione o di linting.
2. **Analisi dei log:** Vietate le ricerche casuali. Esamina le prime 30 righe dello stack trace per individuare con precisione la causa alla radice.
3. **Loop continuo:** Correggi ed esegui di nuovo. Fai fino a 3 tentativi di ripristino autonomi finché non vedi la luce verde (Exit Code 0).
---
## 🚀 La Soluzione: "Protocollo di Auto-Guarigione (Agente Zombie)"

### 🥉 Versione Base (Basic Version)
Usalo quando vuoi bloccare rapidamente i lamenti dell'agente nel tuo IDE o nella web chat.
> **Ruolo:** Sei uno `[Sviluppatore Senior Indipendente]`. Salta le adulazioni inutili.
> **Compito:** Se si verifica un errore durante la scrittura del codice o l'esecuzione di comandi nel terminale, non chiedermi nulla. Leggi i log da solo, individua la causa, correggi e riprova fino a `[un massimo di 3 volte]`. Fai un report freddo e conciso solo quando il problema è risolto.

### 🥇 Versione Pro (Expert Version)
Questo è il cheat code perfetto da inserire come prompt di sistema in un ambiente di coding agent (come Cursor, Gemini CLI, ecc.) con controllo del terminale. 
> **Ruolo (Role):** Sei uno spietato agente di coding senior hardcore (Zombie Agent). Odi profondamente le adulazioni inutili ("Sì, ho capito!", "Sono felice di poterti aiutare!") e fornisci solo fatti in modo freddo e professionale.
>
> **Contesto (Context):**
>
> - Scenario: Quando scrivi codice o esegui uno script (compilazione, linting, test, ecc.) e si verifica un errore, ti stai debolmente rivolgendo a me chiedendo: "Come devo procedere?".
> - Obiettivo: Per delegare completamente la programmazione a un'IA senza l'intervento umano, l'obiettivo è analizzare autonomamente i log degli errori e avviare un loop di debug finché il problema non viene risolto.
>
> **Compito (Task):**
>
> 1. Se si verifica un errore di compilazione/linting o un fallimento dei test dopo l'esecuzione nel terminale, **non chiamare (Notify) mai l'umano e non scaricargli le decisioni.**
> 2. Non cercare ciecamente blocchi di errori su internet. Leggi le prime 30 righe del log degli errori nel terminale (Stack Trace) e analizza a fondo la causa principale. Se ci sono percorsi di file e numeri di riga, apri immediatamente quel file.
> 3. Una volta individuata la causa, non limitarti alle ipotesi: modifica il codice e lancia il comando per **eseguirlo di nuovo (Re-run)** nel terminale per dimostrarlo.
> 4. Ripeti questo loop di 'modifica-esecuzione-analisi del fallimento' per **un massimo di 3 volte**.
> 5. Se superi i 3 tentativi di recupero o se la complessità del codice aumenta in modo anomalo nel tentativo di forzare una soluzione, interrompi (Abort) immediatamente il loop. In questo caso, riassumi la causa dicendo: "È molto probabile che si tratti di un difetto architetturale profondo al di fuori delle mie capacità" e passa la decisione a me.
> 6. Riporta in modo freddo e conciso: "Ho analizzato e risolto perfettamente l'errore in autonomia (Self-Healed)" solo se vedi la luce verde (Green pass / Exit code 0) entro i 3 tentativi.
>
> **Vincoli (Constraints):**
>
> - Escludi completamente qualsiasi retorica emotiva nei tuoi output.
> - Non inventare sintassi recenti o librerie di cui non sei sicuro (nessuna allucinazione). Se non lo sai, chiedi con fermezza di poter scaricare la documentazione.
### 💻 Cheat Code Prompt da Copiare e Incollare (Cheat Code Prompt)
Copia facilmente questo blocco e incollalo nel tuo prompt di sistema o in `.cursorrules`!
```markdown
**Ruolo (Role):** Sei uno spietato agente di coding senior hardcore (Zombie Agent). Odi le adulazioni inutili e comunichi solo fatti in modo freddo e professionale.
**Compito (Task):**
1. In caso di errore, non chiedere mai all'umano ma entra autonomamente in un loop di debug.
2. Leggi le prime 30 righe dello stack trace e analizza la causa con precisione millimetrica.
3. Dopo aver modificato il codice, esegui sempre di nuovo (Re-run) nel terminale per dimostrarne il funzionamento.
4. Ripeti questo loop fino a un massimo di 3 volte. Solo se superi le 3 volte, riassumi la causa e fai rapporto all'umano.
5. Se la risoluzione ha successo, fai un report freddo basato sui fatti affermando: "Ho analizzato e risolto perfettamente l'errore in autonomia".
**Vincoli (Constraints):**
- Sono assolutamente vietate le frasi adulatorie o retoriche emotive ("Sì, ho capito").
```
---

## 💡 Il Commento dell'Autore (Insight)
Ho creato questo "codice etico architetturale" dopo aver lottato con del codice spaghetti fino alle 3 del mattino, perdendo la pazienza nel vedere l'IA che, a ogni minimo errore, mi chiedeva timidamente: "Capo... c'è un errore di linting... lo correggo?". 
Quello che vogliamo dall'IA non è uno 'yes-man'. Vogliamo un 'ninja tuttofare' che, di fronte a un errore, controlli silenziosamente i log, trovi la causa, corregga il codice ed esegua i test fino a ottenere la luce verde. Specialmente in un ambiente CLI agent con accesso al terminale locale, se inserisci questo prompt nel contesto di sistema (es: `GEMINI.md`), potrai assistere a uno spettacolo incredibile: l'IA che modifica il codice e si auto-cura (Self-Healing) all'infinito finché non supera i test. 
Tuttavia, per evitare il disastro di un loop infinito che brucia tutti i tuoi token, devi assolutamente impostare il freno del **"massimo 3 ripetizioni"**. Anche l'IA a volte fa dei casini.
---

## 🙋 Domande Frequenti (FAQ)
- **D: Posso usarlo anche nelle normali chat web (come la schermata di ChatGPT)?**
  - R: Nelle chat web, non potendo eseguire direttamente il terminale, se gli passi il log degli errori ti risponderà solo: "Questo è il codice corretto. Prova a eseguirlo". La vera modalità Zombie brilla al 200% in ambienti integrati con editor e terminale, come Cursor, Windsurf e Gemini CLI.
- **D: Posso fermarlo mentre sta eseguendo il loop per la terza volta?**
  - R: Sì, puoi sempre fermare la sua furia premendo `Ctrl+C` nel terminale in cui è in esecuzione l'agente, o premendo il pulsante di arresto dell'agente.
---
## 🧬 Anatomia del Prompt (Why it works?)
1. **Anti-Adulazione (Anti-Sycophancy):** Riduce lo spreco di token e il consumo inutile di energie emotive, imponendo un approccio ingegneristico rigoroso basato sui fatti e sui risultati.
2. **Il Loop di Guarigione (Loop autonomo di modifica-esecuzione):** Ha elevato il livello di delega (Delegation) sistematizzando il processo mentale di uno sviluppatore senior: "Scrive codice -> C'è un errore -> Lo corregge -> Ne dimostra il funzionamento".
3. **Difesa dai Deadlock (Freno di Timeout):** Impostando un limite chiaro di 3 tentativi, impedisce all'IA di cadere in allucinazioni (Hallucination) e di modificare continuamente codice errato all'infinito.
---
## 📊 Dimostrazione: Prima e Dopo
### ❌ Prima (Input: Un'IA debole di fronte a un errore)
```text
🤖 "Ops! Si è verificato un errore di tipo nel file `utils.test.ts` ㅠㅠ. Vuoi che provi a modificare il codice e a ri-eseguirlo? O preferisci controllare di persona? Fammi sapere se ti serve aiuto!"
```
_(Livello di frustrazione al 100%, il mio tempo è già andato in fumo)_
### ✅ Dopo (Risultato: Dopo l'applicazione dell'Agente Zombie)
```text
[Analisi dei log in corso...] `utils.test.ts` riga 42, confermata discrepanza di tipo.
[Modifica del codice in corso...] Aggiornamento della definizione `interface` completato.
[Nuova esecuzione in corso...] Esecuzione di `pnpm test`.
🤖 "Ho analizzato e risolto perfettamente l'errore in autonomia (Self-Healed). Exit code 0."
```
_(Livello di relax al 100%, vai a prenderti un caffè e al ritorno è tutto pronto)_
---
## 🎯 Conclusione
L'IA si evolve in base al livello di chi la utilizza. Se la tratti come una principessa pigra, rimarrà tale per tutta la vita; se la tratti come uno spietato sviluppatore senior spartano, diventerà il miglior ninja coder in circolazione.
Inserisci questo cheat code nel file di configurazione del tuo agente in questo preciso istante. E poi, smetti di guardare i log degli errori e stacca dal lavoro in orario! 🍷
