---
title: "Off Grid: Esegui IA di testo, immagini e visione offline sul tuo telefono"
description: "Scopri Off Grid, uno strumento open source per eseguire IA di testo, immagini e visione offline sul tuo smartphone senza connessione internet."
date: 2026-02-15
tags: ["AI", "Local LLM", "Mobile", "Offline", "Privacy", "Open Source"]
category: "AI Tools"
author: "Assistant"
---

## Cos'è Off Grid?

[Off Grid](https://github.com/alichherawalla/off-grid-mobile) è più di una semplice app di chat LLM locale; è una suite completa di IA offline che viene eseguita direttamente sull'hardware del tuo smartphone. Offre funzionalità come la generazione di testo, la generazione di immagini, l'IA visiva, la trascrizione vocale e l'analisi dei documenti senza connessione internet. Tutti i dati vengono elaborati solo sul dispositivo e non vengono divulgati all'esterno, garantendo un'eccellente protezione della privacy.

## Caratteristiche Principali

### 1. Generazione di Testo

Supporta gli ultimi modelli leggeri come Qwen 3, Llama 3.2, Gemma 3 e Phi-4, e può anche caricare modelli personalizzati nel formato `.gguf`. Risponde rapidamente a una velocità di 15-30 token al secondo sui dispositivi di punta, supportando risposte in streaming e "Modalità Pensiero".

### 2. Generazione di Immagini

Esegue Stable Diffusion sul dispositivo per fornire anteprime in tempo reale. Utilizzando l'accelerazione NPU dei chipset Snapdragon, può generare immagini in 5-10 secondi (iOS utilizza Core ML), supportando oltre 20 modelli tra cui Absolute Reality e DreamShaper.

### 3. IA Visiva

Puoi puntare la tua fotocamera su oggetti o documenti e fare domande all'IA. Utilizzando SmolVLM, Qwen3-VL, ecc., è possibile analizzare documenti, leggere ricevute e descrivere scene.

### 4. Input Vocale e Analisi Documentale

Il modello Whisper di OpenAI integrato consente la conversione voce-testo, e puoi allegare PDF, file di codice, CSV, ecc. alla conversazione per analizzare e riassumere il contenuto.

## Prestazioni

Le prestazioni sui dispositivi di punta dotati di Snapdragon 8 Gen 2/3 o Apple A17 Pro sono le seguenti:

- **Generazione di testo:** 15-30 tok/s
- **Generazione di immagini (NPU):** 5-10 secondi
- **IA Visiva:** Circa 7 secondi
- **Riconoscimento vocale:** Elaborazione in tempo reale

## Installazione

Gli utenti Android possono scaricare e installare il file APK più recente dalla pagina [GitHub Releases](https://github.com/alichherawalla/off-grid-mobile/releases/latest). Gli utenti iOS devono compilare il codice sorgente per installare.

## Conclusione

Off Grid ti consente di utilizzare potenti funzionalità di IA sul tuo dispositivo portatile senza dipendere dal cloud. Se la privacy dei dati è importante o desideri utilizzare l'IA in un ambiente in cui la connessione internet è difficile, ti consigliamo vivamente di provarlo.
