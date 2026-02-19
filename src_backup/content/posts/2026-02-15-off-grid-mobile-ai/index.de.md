---
title: "Off Grid: Führen Sie Text-, Bild- und Vision-KI offline auf Ihrem Handy aus"
description: "Entdecken Sie Off Grid, ein Open-Source-Tool, um Text-, Bild- und Vision-KI offline auf Ihrem Smartphone ohne Internetverbindung auszuführen."
date: 2026-02-15
tags: ["AI", "Local LLM", "Mobile", "Offline", "Privacy", "Open Source"]
category: "AI Tools"
author: "Assistant"
---

## Was ist Off Grid?

[Off Grid](https://github.com/alichherawalla/off-grid-mobile) ist mehr als nur eine lokale LLM-Chat-App; es ist eine vollständige Offline-KI-Suite, die direkt auf der Hardware Ihres Smartphones läuft. Es bietet Funktionen wie Textgenerierung, Bildgenerierung, Vision-KI, Sprachtranskription und Dokumentenanalyse ohne Internetverbindung. Alle Daten werden nur auf dem Gerät verarbeitet und nicht nach außen weitergegeben, was einen hervorragenden Datenschutz gewährleistet.

## Hauptfunktionen

### 1. Textgenerierung
Unterstützt die neuesten Leichtgewichtsmodelle wie Qwen 3, Llama 3.2, Gemma 3 und Phi-4 und kann auch benutzerdefinierte Modelle im `.gguf`-Format laden. Auf Flaggschiff-Geräten antwortet es schnell mit einer Geschwindigkeit von 15-30 Token pro Sekunde und unterstützt Streaming-Antworten und den „Thinking Mode“.

### 2. Bildgenerierung
Führt Stable Diffusion auf dem Gerät aus, um Echtzeit-Vorschauen bereitzustellen. Durch die Nutzung der NPU-Beschleunigung von Snapdragon-Chipsätzen können Bilder in 5-10 Sekunden generiert werden (iOS verwendet Core ML), wobei über 20 Modelle unterstützt werden, darunter Absolute Reality und DreamShaper.

### 3. Vision-KI
Sie können Ihre Kamera auf Objekte oder Dokumente richten und der KI Fragen stellen. Mit SmolVLM, Qwen3-VL usw. ist es möglich, Dokumente zu analysieren, Quittungen zu lesen und Szenen zu beschreiben.

### 4. Spracheingabe und Dokumentenanalyse
Das integrierte Whisper-Modell von OpenAI ermöglicht die Umwandlung von Sprache in Text, und Sie können PDFs, Codedateien, CSVs usw. an die Konversation anhängen, um den Inhalt zu analysieren und zusammenzufassen.

## Leistung

Die Leistung auf Flaggschiff-Geräten mit Snapdragon 8 Gen 2/3 oder Apple A17 Pro-Chipsätzen ist wie folgt:

- **Textgenerierung:** 15-30 tok/s
- **Bildgenerierung (NPU):** 5-10 Sekunden
- **Vision-KI:** Etwa 7 Sekunden
- **Spracherkennung:** Echtzeitverarbeitung

## Installation

Android-Benutzer können die neueste APK-Datei von der [GitHub Releases](https://github.com/alichherawalla/off-grid-mobile/releases/latest)-Seite herunterladen und installieren. iOS-Benutzer müssen den Quellcode kompilieren, um die App zu installieren.

## Fazit

Off Grid ermöglicht es Ihnen, leistungsstarke KI-Funktionen auf Ihrem Handheld-Gerät ohne Cloud-Abhängigkeit zu nutzen. Wenn Datenschutz wichtig ist oder Sie KI in einer Umgebung nutzen möchten, in der eine Internetverbindung schwierig ist, empfehlen wir Ihnen dringend, es auszuprobieren.
