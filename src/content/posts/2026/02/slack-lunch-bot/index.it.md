---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: " \"개발 지식 없이도 슬랙 워크플로우 빌더와 AI를 연결해 우리 팀만의 점심 메뉴 추천 비서를 만드는 방법입니다.\""
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Creare un Bot per Slack: Il Tuo Assistente Aziendale per il Pranzo

- **🎯 Consigliato per:** Il dipendente junior stanco di dover scegliere il menù ogni giorno o il team HR che vuole vivacizzare le chat aziendali.
- **⏱️ Tempo richiesto:** 10 minuti (utilizzando Slack Workflow Builder).
- **🤖 Modello consigliato:** ChatGPT-4o (eccellente per raccomandazioni creative e consapevolezza del contesto).

- ⭐ **Difficoltà:** ⭐⭐☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Cosa mangiamo oggi a pranzo? Qualsiasi cosa. Allora pasta? Mmm, i carboidrati oggi no... Metti fine all'estenuante gioco di sguardi quotidiano: affida la scelta al tuo assistente IA e risparmia le energie per uscire in orario."_

Il più grande dilemma di ogni lavoratore: scegliere cosa mangiare a pranzo. Da oggi, basta indecisioni: chiedilo direttamente al bot del messenger aziendale! Scopri come creare un bot geniale capace di rispondere a domande come "Oggi piove, cosa mangiamo?" con suggerimenti del tipo "Con questa pioggia, che ne dici di un bel piatto di ramen fumante?", il tutto senza scrivere una sola riga di codice, sfruttando semplicemente Slack Workflow.

---

## ⚡️ In Sintesi (TL;DR)

1. Configura un bot automatizzato senza alcuna competenza di programmazione utilizzando il **Workflow Builder** di Slack.
2. Imposta parole chiave (es. "consiglio pranzo") o reazioni con emoji come Trigger per richiamare il bot.
3. Integra un connettore IA (come ChatGPT) per eseguire un prompt personalizzato che suggerisca il menù perfetto in base alla situazione e al meteo.

---

## 🚀 La Soluzione: Il Prompt "Lunch Buddy" (Assistente per il Pranzo)

### 🥉 Versione Base

Il prompt di raccomandazione casuale perfetto per sconfiggere rapidamente l'indecisione.

> **Ruolo (Role):** Sei un assistente cordiale e simpatico, incaricato di scegliere il menù del pranzo per i colleghi.

> **Richiesta (Task):**
Scegli casualmente una categoria tra cucina italiana, asiatica, messicana, fast food o healthy/insalate. Quindi, raccomanda 3 piatti rappresentativi all'interno di quella categoria che siano generalmente apprezzati dai lavoratori in pausa pranzo.


### 🥇 Versione Pro

Ideale per ricevere suggerimenti intelligenti e personalizzati tenendo conto di dettagli specifici come il meteo, l'umore generale e il numero di persone.

> **Ruolo (Role):** Sei un buongustaio dal palato raffinato e un vero "navigatore" per i migliori ristoranti vicino all'ufficio situato in `[Posizione dell'ufficio (es. Centro di Milano)]`.
> 
> **Contesto (Context):**
> 
> - Meteo: `[Meteo attuale (es. Pioggia, Sole, Freddo)]`
> - Umore e Situazione: `[Atmosfera del team (es. Molto stressati, Giorno di paga, A dieta)]`
> - Numero di partecipanti: `[Composizione del gruppo (es. Pausa pranzo da solo, Pranzo di team, Uscita tra colleghi stretti)]`
> 
> **Richiesta (Task):**
> 
> 1. Consiglia 1 piatto perfetto per il pranzo che si adatti in modo impeccabile alla situazione descritta sopra.
> 2. Aggiungi una breve spiegazione spiritosa (1-2 frasi) che faccia sorridere i colleghi e spieghi perché hai scelto proprio questo menù.
> 3. L'output deve essere un elenco puntato in Markdown facilmente leggibile, che includa emoji pertinenti.
> 
> **Vincoli (Constraints):**
> 
> - Escludi cibi troppo polarizzanti (es. piatti eccessivamente piccanti, aglio crudo) o pasti troppo pesanti e lenti che supererebbero la durata della pausa pranzo.
> 
> **Avvertenze (Warning):**
> 
> - Concentrati esclusivamente sul nome del piatto o sulla tipologia di cibo. Non inventare nomi di ristoranti specifici se non sei assolutamente certo della loro reale esistenza (Prevenzione allucinazioni).

---

## 💡 Il Punto di Vista dell'Autore (Insight)

Un bot di Slack va ben oltre la sua semplice funzione tecnica: è uno strumento potentissimo per plasmare la **cultura aziendale**. Funge da "lubrificante" sociale, portando un sorriso e argomenti di conversazione leggeri in canali altrimenti dominati da rigide direttive lavorative. Se inizi con un bot per i consigli culinari e ottieni un riscontro positivo dal team, puoi facilmente espanderne l'uso creando bot per "lodare i colleghi", "augurare buon compleanno" o "gestire le retrospettive settimanali", contribuendo attivamente a un ambiente di lavoro flessibile e positivo. Inoltre, se integri questo prompt con strumenti di automazione come Zapier o Make, puoi superare i limiti nativi di Slack Workflow e trasformare il bot in un assistente IA incredibilmente intelligente.

---

## 🙋 Domande Frequenti (FAQ)

- **D: La mia azienda utilizza la versione gratuita di Slack, posso usare il Workflow Builder?**
  - R: Purtroppo, lo Slack Workflow Builder è pienamente supportato solo nei piani a pagamento (Pro o superiore). Tuttavia, se utilizzi il piano gratuito, puoi aggirare l'ostacolo creando un'automazione con Zapier o Make.com che intercetti i messaggi in un canale specifico e risponda tramite l'API di ChatGPT.

- **D: Qual è la differenza tra questo metodo e lo sviluppo manuale di un bot tramite codice (es. Python)?**
  - R: Sviluppare un bot con la libreria `slack-bolt` in Python permette interazioni molto più avanzate, come cliccare bottoni, aprire finestre modali o interfacciarsi con il database aziendale. Tuttavia, questo approccio comporta costi per i server e tempi di manutenzione. Per semplici raccomandazioni di menù e risposte testuali rapide, l'approccio "No-code" tramite workflow è di gran lunga più efficiente e immediato.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Variabili Contestuali (Contextual Variables):** Invece di un banale "consigliami cosa mangiare", l'uso di variabili specifiche (`[ ]`) per meteo, umore e numero di persone costringe l'IA a evitare risposte generiche, generando raccomandazioni altamente personalizzate ed empatiche.
2. **Controllo dei Vincoli e delle Allucinazioni (Constraint Setting):** La sezione `Avvertenze (Warning)` fornisce chiare linee guida sulle peculiarità della pausa pranzo (limiti di tempo e gusti troppo particolari), bloccando alla radice la tendenza dell'IA a inventare ristoranti inesistenti (Allucinazioni).
3. **Assegnazione di un Ruolo (Role-playing):** Definire la figura di un "buongustaio e navigatore di ristoranti" stabilisce subito un tono di voce preciso. La risposta non sarà fredda o puramente informativa, ma suonerà come il consiglio amichevole e spiritoso del tuo collega preferito.

---

## 📊 Dimostrazione: Prima e Dopo

### ❌ Prima (La pausa pranzo silenziosa)

```text
Junior: "Cosa vi va di mangiare oggi a pranzo?"
Collega A: "Uhm... per me va bene tutto."
Manager: "Prendiamo qualcosa a caso."
(Inizia l'infinito gioco di sguardi e 10 minuti di silenzio imbarazzante 🕰️)
```

### ✅ Dopo (L'intervento dell'Assistente IA)

```text
Io: /consigliopranzo
Bot (Lunch Buddy): "☔ Giornata di pioggia, tanto stress e siamo ancora lontani dal giorno di paga?
Per oggi vi consiglio caldamente una bella **'Pizza Diavola con doppia mozzarella'**!
Il sapore deciso scaccerà via lo stress, e i carboidrati vi daranno l'energia giusta per affrontare il pomeriggio! 🍕"
Manager: "Wow, in effetti oggi ci vuole proprio una pizza. Andiamo!"
```

---

## 🎯 Conclusione

L'ufficio è sicuramente un luogo dove si lavora duramente, ma quell'ora di pausa pranzo dovrebbe essere sempre un momento piacevole e gustoso. Un semplice e piccolo bot può rilassare l'atmosfera del team e ridurre drasticamente lo stress legato al prendere decisioni.

Oggi a pranzo, metti fine all'indecisione: affidati alle **scelte intelligenti del tuo assistente IA**. Goditi un pasto delizioso, ricarica le batterie e preparati a uscire in perfetto orario! 🍷
