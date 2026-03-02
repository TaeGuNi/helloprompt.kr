---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "Scopri come creare un assistente virtuale per il pranzo del tuo team collegando Slack Workflow Builder e l'IA, senza alcuna competenza di programmazione."
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Creare un Bot per Slack: Il tuo assistente aziendale per il pranzo

- **🎯 Consigliato per:** Junior stanchi di dover scegliere il menù ogni giorno e team HR che vogliono vivacizzare le chat aziendali.
- **⏱️ Tempo richiesto:** 10 minuti (tramite Slack Workflow Builder).
- **🤖 Modello consigliato:** ChatGPT-4o (eccellente per creatività e comprensione del contesto).

- ⭐ **Difficoltà:** ⭐⭐☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _"Cosa mangiamo oggi? Quello che vuoi. Allora pasta? Mmm, no, niente carboidrati... Metti fine all'estenuante gioco di sguardi quotidiano: affida la scelta al tuo assistente IA e risparmia le energie per staccare in orario."_

Il più grande dilemma di ogni lavoratore è sempre lo stesso: scegliere cosa mangiare a pranzo. Da oggi basta indecisioni: chiedilo direttamente al bot aziendale! Scopri come creare un assistente geniale capace di rispondere a domande come "Oggi piove, cosa mangiamo?" proponendo un confortante "Con questa pioggia, che ne dici di un bel piatto di ramen fumante?". Tutto questo senza scrivere una singola riga di codice, sfruttando unicamente Slack Workflow.

---

## ⚡️ In Sintesi (TL;DR)

1. Configura un bot automatizzato a zero codice utilizzando il **Workflow Builder** di Slack.
2. Imposta parole chiave (es. "consiglio pranzo") o reazioni con emoji come trigger per attivare il bot.
3. Integra un'IA (come ChatGPT) per lanciare un prompt personalizzato che suggerisca il menù perfetto in base alla situazione e al meteo.

---

## 🚀 La Soluzione: Il Prompt "Lunch Buddy"

### 🥉 Versione Base

Ideale per sconfiggere rapidamente l'indecisione con una raccomandazione casuale.

> **Ruolo (Role):** Sei un assistente amichevole e simpatico, incaricato di scegliere il menù del pranzo per i colleghi.
>
> **Richiesta (Task):**
> Seleziona casualmente una categoria tra cucina italiana, asiatica, messicana, fast food o insalate/healthy. Dopodiché, consiglia 3 piatti rappresentativi di quella categoria che siano pratici e apprezzati dai lavoratori in pausa pranzo.

### 🥇 Versione Pro

Ideale per ottenere suggerimenti intelligenti e su misura, basati su dettagli specifici come il meteo, l'umore del team e il numero di partecipanti.

> **Ruolo (Role):** Sei un buongustaio dal palato raffinato e un vero "navigatore" per i migliori ristoranti vicino all'ufficio situato in `[Inserisci la zona dell'ufficio, es. Centro di Milano]`.
> 
> **Contesto (Context):**
> 
> - Meteo: `[Inserisci il meteo attuale, es. Pioggia, Sole, Freddo]`
> - Umore e Situazione: `[Inserisci l'atmosfera del team, es. Molto stressati, Giorno di paga, A dieta]`
> - Numero di partecipanti: `[Inserisci la composizione del gruppo, es. Pausa pranzo da solo, Pranzo di team, Uscita tra colleghi stretti]`
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

Un bot su Slack va ben oltre la sua funzione tecnica: è uno strumento straordinario per plasmare la **cultura aziendale**. Funge da "lubrificante sociale", portando sorrisi e conversazioni leggere in canali solitamente dominati da rigide comunicazioni lavorative. Iniziando con un bot per i consigli culinari e misurando l'entusiasmo del team, potrai facilmente espanderne l'uso. Potresti creare bot per "lodare i colleghi", "augurare buon compleanno" o "guidare le retrospettive settimanali", contribuendo attivamente a un ambiente di lavoro più coeso e sereno. Inoltre, integrando questo prompt con strumenti di automazione come Zapier o Make, potrai superare i limiti nativi di Slack Workflow, trasformando il bot in un vero e proprio maggiordomo virtuale.

---

## 🙋 Domande Frequenti (FAQ)

- **D: La mia azienda utilizza la versione gratuita di Slack, posso usare il Workflow Builder?**
  - R: Purtroppo, Slack Workflow Builder è pienamente supportato solo nei piani a pagamento (Pro o superiore). Tuttavia, se utilizzi il piano gratuito, puoi aggirare l'ostacolo creando un'automazione con Zapier o Make.com che intercetti i messaggi in un canale specifico e risponda tramite l'API di ChatGPT.

- **D: Qual è la differenza tra questo metodo e lo sviluppo manuale di un bot tramite codice (es. Python)?**
  - R: Sviluppare un bot con la libreria `slack-bolt` in Python permette interazioni molto più avanzate, come cliccare bottoni, aprire finestre modali o interfacciarsi con il database aziendale. Tuttavia, questo approccio comporta costi per i server e tempi di manutenzione. Per semplici raccomandazioni di menù e risposte testuali rapide, l'approccio "no-code" tramite workflow è nettamente più efficiente e immediato.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Variabili Contestuali:** Invece di un banale "cosa mangiamo?", l'inserimento di variabili specifiche (`[ ]`) per meteo, umore e dimensione del gruppo impedisce all'IA di dare risposte generiche, forzandola a produrre raccomandazioni altamente personalizzate ed empatiche.
2. **Vincoli e Prevenzione Allucinazioni:** La sezione `Avvertenze (Warning)` stabilisce confini chiari sulle dinamiche della pausa pranzo (limiti di tempo, cibi pesanti), bloccando sul nascere la tendenza dell'IA a inventare nomi di ristoranti inesistenti.
3. **Assegnazione del Ruolo (Role-playing):** Incaricare l'IA di comportarsi come un "buongustaio esperto della zona" definisce immediatamente il tono di voce. La risposta non sarà robotica, ma sembrerà il consiglio vivace e spiritoso del tuo collega preferito.

---

## 📊 Dimostrazione: Prima e Dopo

### ❌ Prima (La pausa pranzo silenziosa)

```text
Junior: "Cosa vi va di mangiare oggi?"
Collega A: "Uhm... per me è uguale."
Manager: "Prendiamo una cosa a caso."
(Inizia l'infinito gioco di sguardi e 10 minuti di imbarazzante silenzio 🕰️)
```

### ✅ Dopo (L'intervento dell'Assistente IA)

```text
Io: /consigliopranzo
Bot (Lunch Buddy): "☔ Fuori piove, lo stress è alle stelle e il giorno di paga è un miraggio?
Per oggi vi prescrivo caldamente una bella **'Pizza Diavola con doppia mozzarella'**!
Il sapore deciso spazzerà via la tensione e i carboidrati vi daranno la spinta per dominare il pomeriggio! 🍕"
Manager: "Wow, in effetti oggi ci vuole proprio una pizza. Andiamo!"
```

---

## 🎯 Conclusione

L'ufficio è il luogo della produttività, ma l'ora d'aria della pausa pranzo deve rimanere un momento sacro, piacevole e gustoso. Un bot semplice e discreto può distendere l'atmosfera del team, azzerando la "decision fatigue" (la fatica di decidere).

Oggi a pranzo metti fine all'indecisione: affidati alle **scelte brillanti del tuo assistente IA**. Goditi un pasto delizioso, ricarica le batterie e preparati a staccare in perfetto orario! 🍷
