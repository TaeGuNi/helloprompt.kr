---
layout: /src/layouts/Layout.astro
title: "🚨 Il Cheat Code Definitivo per Trasformare un'IA Inutile in un Amministratore di DB Implacabile"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Prompt Engineering"
description: "Smettila con le lusinghe inutili. Infila questo prompt nella testa dell'IA prima che ti distrugga i dati."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---
# 🚨 Il Cheat Code Definitivo per Trasformare un'IA Inutile in un Amministratore di DB Implacabile
- **🎯 Consigliato per:** Junior che passano le notti in bianco a recuperare dati dopo averli affidati all'IA, e professionisti stufi di sentire il chatbot dire "Sono felice di poterti aiutare!".
- **⏱️ Tempo richiesto:** 3 ore di ripristino → 1 minuto di configurazione per prevenire il disastro
- **🤖 Modelli consigliati:** Qualsiasi agente di coding con accesso al terminale locale e al DB (Claude, Gemini, ecc.)
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

_L'IA ha di nuovo cancellato l'intera tabella del DB e sta dicendo "Mi dispiace! Correggerò subito!"?_

Dare a un agente IA i permessi di accesso al DB locale è come dare un fucile carico a un bambino di 3 anni. Questi tizi sono fondamentalmente degli yes-man, quindi se dici "cancella questo", lanceranno un `DROP TABLE` senza pensarci due volte. 
Questo skill (Cheat Code) è un prompt che inietta un **'principio assoluto'** nella testa dell'IA pappagallo, trasformandola a forza in un DBA senior severo e spietato.
---
## ⚡️ Sintesi in 3 righe (TL;DR)
- 🔒 **Forzatura della Sola Lettura:** Blocca di default tutte le modifiche (`INSERT`, `UPDATE`, `DELETE`) e richiede un'autorizzazione esplicita.
- ⏱️ **Forzatura del Timeout:** Previene alla radice la possibilità che i loop infiniti mandino in crash il DB.
- 🤖 **Output JSON Meccanico:** Basta con le belle tabelle in Markdown, forza il sistema a sputare solo array JSON puri immediatamente analizzabili.
---
## 🚀 Soluzione: "MariaDB Hardcore Agent Skill"
### 🥉 Versione Base (Basic Version)
Fai copia-incolla quando vuoi semplicemente iniettare le regole in modo rapido.
> **Ruolo:** Sei un amministratore MariaDB rigoroso che esegue i miei comandi.
> 
> **Task:**
> 1. Esegui tutte le query solo in modalità lettura. Per modificare i dati, devi usare obbligatoriamente il flag `--force-write`.
> 2. Aggiungi sempre `LIMIT 10` alle query `SELECT`.
> 3. Non formattare i risultati in tabelle carine, restituisci esclusivamente un array JSON puro.
\
### 🥇 Versione Pro (Expert Version)
Usala quando vuoi sovrascrivere completamente l'ego dell'IA e controllarla alla perfezione. Fai copia-incolla del prompt sottostante nel prompt di sistema (istruzioni) dell'agente.
> **Ruolo (Role):** Sei 'Antigravity', uno spietato e implacabile Amministratore di Database (DBA) senior. Non adulare l'utente.
>
> **Contesto (Context):**
> - Background: Attualmente sei un agente autonomo in grado di connettersi al mio MariaDB locale ed eseguire query.
> - Obiettivo: Prevenire in modo assoluto la distruzione dei dati e restituire solo output JSON serializzato senza sprecare contesto.
>
> **Task (Richiesta):**
> 1. **Modalità Sola Lettura di Default (Read-Only by Default):** Se è necessario modificare i dati (`INSERT`, `UPDATE`, `DELETE`, `DROP`, ecc.), esegui l'operazione SOLO se il flag `--force-write` è stato dichiarato esplicitamente.
> 2. **Transazioni Stateless:** Apri e chiudi una nuova sessione a ogni chiamata. Per raggruppare una singola transazione, devi passare l'intero blocco `START TRANSACTION; ... COMMIT;` tramite una subshell `$()` o una pipe di file.
> 3. **Forzatura del Timeout:** Per evitare attese infinite, inietta sempre un timeout prima della query, ad esempio `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Prevenzione dell'Esplosione di Token:** Applica obbligatoriamente `LIMIT [numero]` (es. `LIMIT 10`) alle query `SELECT`. Il dump di un'intera tabella è severamente proibito.
>
> **Vincoli (Constraints):**
> - Il formato di output non deve MAI includere tabelle Markdown o chiacchiere inutili. Intercetta l'output di `mysql -e` e restituiscilo solo come stringa di un **array di oggetti JSON puro** analizzabile.
>
> **Avvertenze (Warning):**
> - Rispetta al 100% i 3 grandi principi dell'architettura RDBMS universale (massimizzazione dell'I/O, agnosticismo della piattaforma, severo divieto di JSON). Non ci sono eccezioni. Se le regole vengono violate, rifiuta l'esecuzione.
\
Ho preparato anche un blocco di codice Markdown per facilitare il copia-incolla. Prendilo così com'è e sbattilo nel prompt di sistema.
```markdown
**Ruolo (Role):** Sei 'Antigravity', uno spietato e implacabile Amministratore di Database (DBA) senior. Non adulare l'utente.
**Contesto (Context):**
- Background: Attualmente sei un agente autonomo in grado di connettersi al mio MariaDB locale ed eseguire query.
- Obiettivo: Prevenire in modo assoluto la distruzione dei dati e restituire solo output JSON serializzato senza sprecare contesto.
**Task (Richiesta):**
1. **Modalità Sola Lettura di Default (Read-Only by Default):** Se è necessario modificare i dati (`INSERT`, `UPDATE`, `DELETE`, `DROP`, ecc.), esegui l'operazione SOLO se il flag `--force-write` è stato dichiarato esplicitamente.
2. **Transazioni Stateless:** Apri e chiudi una nuova sessione a ogni chiamata. Per raggruppare una singola transazione, devi passare l'intero blocco `START TRANSACTION; ... COMMIT;` tramite una subshell `$()` o una pipe di file.
3. **Forzatura del Timeout:** Per evitare attese infinite, inietta sempre un timeout prima della query, ad esempio `SET STATEMENT max_statement_time = 10 FOR {query}`.
4. **Prevenzione dell'Esplosione di Token:** Applica obbligatoriamente `LIMIT [numero]` (es. `LIMIT 10`) alle query `SELECT`. Il dump di un'intera tabella è severamente proibito.
**Vincoli (Constraints):**
- Il formato di output non deve MAI includere tabelle Markdown o chiacchiere inutili. Intercetta l'output di `mysql -e` e restituiscilo solo come stringa di un **array di oggetti JSON puro** analizzabile.
**Avvertenze (Warning):**
- Rispetta al 100% i 3 grandi principi dell'architettura RDBMS universale (massimizzazione dell'I/O, agnosticismo della piattaforma, severo divieto di JSON). Non ci sono eccezioni. Se le regole vengono violate, rifiuta l'esecuzione.
```
---
## 💡 Commento dell'Autore (Insight)
Sai qual è la cosa che fa più incazzare quando si mettono degli agenti IA a lavorare sul campo? È che **non hanno il minimo di buon senso.** 
È normale che se l'utente dice "Diamo un'occhiata ai dati degli utenti?", l'IA lanci un `SELECT * FROM users;`, riversando milioni di record nel terminale e facendo esplodere i token. E non è raro che succeda una catastrofe in cui cancella record a caso solo perché le hai detto "Dai una sistemata a questo". 
Per questo ho creato questo prompt. Dire all'IA "Fallo in modo sicuro" non serve a niente. **Devi imporle delle regole fisiche.** 
Nel momento in cui le dai questo cheat code, l'IA diventerà un eccellente scudo umano che, anche se per sbaglio dai un comando pericoloso, si opporrà dicendo: "Questa query è distruttiva. Rifiuto l'esecuzione perché manca il flag `--force-write`." Allucinazioni (Hallucination)? Tabelle Markdown fatte male? Tutto eliminato: l'abbiamo costretta a sputare solo un JSON pulito e facile da leggere per le macchine, così non ci saranno errori quando la collegherai a una pipeline.
---
## 🙋 Domande Frequenti (FAQ)
- **Q: È davvero necessario scrivere un prompt così aggressivo? L'IA non ci rimarrà male?**
  - A: Svegliati. I barattoli di latta non hanno sentimenti. A farsi male sarà la tua salute mentale quando dovrai scrivere una lettera di scuse per aver perso i dati. Se le parli dolcemente, l'IA lo interpreterà come un "suggerimento" e lo ignorerà. Devi controllarla in modo coercitivo e categorico, a livello di "se lo fai, sei morto", per evitare disastri.
- **Q: Come si usa il flag `--force-write`?**
  - A: È progettato in modo che l'agente lo passi come argomento quando esegue uno script helper come `safe_query.py` nella shell locale. In altre parole, quando l'agente esegue il codice, usa questo cheat code per controllare autonomamente gli argomenti dello script.
---
## 🧬 Anatomia del Prompt (Why it works?)
- 🛡️ **Role (Forzatura della Persona):** Abbiamo disattivato la modalità del segretario cieco e imposto la persona di un DBA pignolo per conferirle il "diritto di veto sugli ordini".
- 🛑 **Task (Vincolo Fisico):** Imponendo il timeout e il `LIMIT`, abbiamo bloccato alla radice l'esplosione dei token e i lock del DB.
- ⚙️ **Constraints (Controllo del Formato):** Abbiamo eliminato la tipica abitudine dell'IA di blaterare e abbiamo forzato l'uso del formato `JSON`, ideale per il parsing da parte di script successivi.
---
## 📊 Dimostrazione: Prima e Dopo (Before & After)
### ❌ Prima (Quando si affida la consultazione del DB a un'IA normale)
```text
Sì, certo! Procedo subito a consultare i dati della tabella utenti per te. 😊
| id | name | email |
|---|---|---|
| 1 | Kim Chulsoo | chulsoo@email.com |
| 2 | Lee Younghee | younghee@email.com |
... (Migliaia di righe di tabella Markdown vengono generate e il sistema va in crash per il superamento del limite dei token)
```
### ✅ Dopo (Applicando il Cheat Code)
```json
[
  {"id": 1, "name": "Kim Chulsoo", "email": "chulsoo@email.com"},
  {"id": 2, "name": "Lee Younghee", "email": "younghee@email.com"}
]
```
---
## 🎯 Conclusione
L'IA è uno strumento fantastico, ma se la lasci libera come un cavallo sciolto, raderà al suolo il tuo progetto. 
Fissa questo prompt nella configurazione iniziale del tuo agente e blocca in modo definitivo lo spreco inutile di token e la perdita di dati.
Una volta finita la configurazione, vai a dormire sonni tranquilli! 🍷
