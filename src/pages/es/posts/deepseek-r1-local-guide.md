---
layout: /src/layouts/Layout.astro
title: "Instalación Local de DeepSeek R1: Tu Esclavo de Código Gratuito en PC"
author: "ZZabbis"
date: "2026-02-08"
updatedDate: "2026-02-08"
category: "Desarrollo y Programación"
description: "Cómo instalar DeepSeek R1 localmente con Ollama y obtener un asistente de codificación ilimitado y gratuito. Sin fugas de datos, 100% privado."
tags: ["DeepSeek", "Ollama", "Local LLM", "Programación", "Productividad"]
---

# 💻 Tu Esclavo de Código Gratuito en PC: Guía de Instalación Local de DeepSeek R1

> **🎯 Recomendado para:** Desarrolladores preocupados por subir código de la empresa, Estudiantes que ahorran costos de API, Trabajadores offline
> **⏱️ Tiempo Requerido:** 10 mins

- **🤖 Modelo Recomendado:** DeepSeek-R1-Distill-Llama-8B (o 70B)

| Dificultad | Efectividad |  Utilidad  |
| :--------: | :---------: | :--------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ |

> _"¿No puedes pegar código de la empresa en ChatGPT por políticas de seguridad? ¿Pero odias usar modelos antiguos y tontos? Ahora, encierra a **DeepSeek R1** en tu computadora y haz que trabaje para ti. 100% Gratis, 100% Privado."_

En 2026, la palabra clave más candente entre los desarrolladores es sin duda **"Local LLM"**. Entre ellos, **DeepSeek R1** está mostrando un rendimiento loco (especialmente en habilidades de codificación), a menudo llamado "El Error del Open Source". Esta guía te muestra la forma más fácil y rápida de instalar DeepSeek en tu Mac (o PC con Windows).

---

## ⚡️ TL;DR (Resumen)

1.  Instala **Ollama** (El ejecutor de LLM).
2.  Escribe un comando en la terminal (`ollama run deepseek-r1`).
3.  Disfruta de codificación gratuita ilimitada en VS Code o Navegador.

---

## 🚀 Paso 1: Instalar Ollama

Primero, necesitas el motor para ejecutar el LLM, **Ollama**. Es mucho más fácil que Docker.

### Mac / Linux

Abre tu terminal y pega esto:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows

Ve al [Sitio Oficial de Ollama](https://ollama.com), haz clic en `Download for Windows` y ejecuta el instalador.

---

## 🚀 Paso 2: Invocar a DeepSeek R1

Ahora, descarguemos y ejecutemos el modelo. Elige según tus especificaciones.

### 🥉 Básico: Modelo 8B (Para Laptops)

Funciona sin problemas en M1/M2 MacBook Air, Laptops Gamer generales.

```bash
ollama run deepseek-r1:8b
```

### 🥇 Pro: Modelo 70B (Para PC de Gama Alta/M3 Max)

Requiere 32GB+ de RAM. Muestra capacidades de razonamiento nivel GPT-4.

```bash
ollama run deepseek-r1:70b
```

Una vez que escribas el comando, se descargará automáticamente y abrirá un prompt de chat.

---

## 🚀 Paso 3: Uso Práctico (Integración con VS Code)

Chatear en la terminal no es genial. Adjuntémoslo a **VS Code** y hagámoslo un verdadero Copilot.

1.  Busca e instala **"Continue"** en las Extensiones de VS Code.
2.  Haz clic en el icono de la barra lateral -> Selecciona `Add Model`.
3.  Selecciona `Ollama` como Proveedor.
4.  Selecciona `DeepSeek R1` como Modelo. (Autodetect también funciona)
5.  Ahora arrastra código y presiona `Cmd + L` (Win: `Ctrl + L`) para preguntar.

> **Q:** "Refactoriza esta función."
> **A:** (DeepSeek escupe código al instante)

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

"Espera, ¿no es esto una guía de instalación? ¿Dónde está el prompt?"
Aquí tienes **El Prompt de Codificación Más Efectivo para DeepSeek**. Dado que DeepSeek valora la "Cadena de Pensamiento" (Chain of Thought), la clave es pedirle que **"Piense"**.

### Prompt de Codificación Especializado para DeepSeek

> **Rol:** Eres un Ingeniero Senior de Google y Evangelista de Código Limpio.
>
> **Contexto:** Este código funciona, pero es ilegible e ineficiente.
>
> **Tarea:**
>
> 1. Analiza los problemas (Complejidad temporal, Nombres, etc.) primero. (**Imprime el Proceso de Pensamiento primero**)
> 2. Escribe el código optimizado.
> 3. Añade comentarios explicando por qué lo cambiaste.

---

## 📊 Prueba: Antes y Después

### ❌ Antes (ChatGPT Gratuito)

"Este código... um... no estoy seguro. Por favor pregunta de nuevo." (O respuestas genéricas)

### ✅ Después (DeepSeek R1 Local)

```text
<think>
El bucle anidado del usuario es O(n^2), lo cual será lento con grandes datos.
Puedo reducirlo a O(n) usando un Hash Map.
Las variables 'a', 'b' son poco claras, renombremos a 'userList', 'targetId'.
</think>

(Muestra código optimizado...)
```

_La velocidad depende de tu PC, ¡pero puedes preguntar infinitamente sin preocupaciones de seguridad!_

---

## 🎯 Conclusión

Ahora tienes un **Desarrollador Senior Gratuito** viviendo dentro de tu PC.
Incluso si se corta internet, incluso si la empresa quiebra, tu DeepSeek se queda contigo para siempre.

Abre tu terminal ahora mismo.
`ollama run deepseek-r1`

Tu hora de salida se adelanta. 🍷
