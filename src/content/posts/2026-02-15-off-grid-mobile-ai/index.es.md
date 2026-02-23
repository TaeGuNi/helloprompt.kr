---
title: "Off Grid: Ejecuta IA de texto, imagen y visión sin conexión en tu móvil"
description: "Descubre Off Grid, una herramienta de código abierto para ejecutar IA de texto, imagen y visión sin conexión en tu smartphone sin internet."
date: 2026-02-15
tags: ["AI", "Local LLM", "Mobile", "Offline", "Privacy", "Open Source"]
category: "AI Tools"
author: "Assistant"
---

## ¿Qué es Off Grid?

[Off Grid](https://github.com/alichherawalla/off-grid-mobile) no es solo una aplicación de chat LLM local; es una suite completa de IA fuera de línea que se ejecuta directamente en el hardware de tu smartphone. Ofrece funciones como generación de texto, generación de imágenes, visión artificial, transcripción de voz y análisis de documentos sin necesidad de conexión a internet. Todos los datos se procesan únicamente en el dispositivo y no se filtran al exterior, garantizando una excelente protección de la privacidad.

## Características Principales

### 1. Generación de Texto

Soporta los últimos modelos ligeros como Qwen 3, Llama 3.2, Gemma 3 y Phi-4, y también puede cargar modelos personalizados en formato `.gguf`. Responde rápidamente a una velocidad de 15-30 tokens por segundo en dispositivos insignia, soportando respuestas en streaming y "Modo Pensamiento".

### 2. Generación de Imágenes

Ejecuta Stable Diffusion en el dispositivo para ofrecer vistas previas en tiempo real. Utilizando la aceleración NPU de los chips Snapdragon, puede generar imágenes en 5-10 segundos (iOS usa Core ML), soportando más de 20 modelos, incluyendo Absolute Reality y DreamShaper.

### 3. Visión Artificial

Puedes apuntar tu cámara a objetos o documentos y hacer preguntas a la IA. Utilizando SmolVLM, Qwen3-VL, etc., es posible analizar documentos, leer recibos y describir escenas.

### 4. Entrada de Voz y Análisis de Documentos

El modelo Whisper de OpenAI integrado permite la conversión de voz a texto, y puedes adjuntar archivos PDF, código, CSV, etc. a la conversación para analizar y resumir el contenido.

## Rendimiento

El rendimiento en dispositivos insignia equipados con Snapdragon 8 Gen 2/3 o Apple A17 Pro es el siguiente:

- **Generación de texto:** 15-30 tok/s
- **Generación de imágenes (NPU):** 5-10 segundos
- **Visión artificial:** Alrededor de 7 segundos
- **Reconocimiento de voz:** Procesamiento en tiempo real

## Instalación

Los usuarios de Android pueden descargar e instalar el último archivo APK desde la página de [GitHub Releases](https://github.com/alichherawalla/off-grid-mobile/releases/latest). Los usuarios de iOS deben compilar el código fuente para instalar.

## Conclusión

Off Grid te permite utilizar potentes funciones de IA en tu dispositivo portátil sin depender de la nube. Si la privacidad de los datos es importante o quieres usar IA en un entorno donde la conexión a internet es difícil, te recomendamos encarecidamente que lo pruebes.
