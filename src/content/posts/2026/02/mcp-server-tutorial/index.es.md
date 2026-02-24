---
title: " \"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\""
description: " \"MCP (Model Context Protocol), el estándar USB para LLMs. En lugar de copiar y pegar esquemas JSON cada vez, descubre el prompt para construir un servidor personalizado que conecta tus datos locales directamente a Claude u Ollama.\""
author: "Unifactory Editor"
date: "2026-02-16"
tags:
  [
    "MCP",
    "Model Context Protocol",
    "Local LLM",
    "TypeScript",
    "Ollama",
    "Claude",
  ]
image: "/images/2026/02/16/mcp-server-tutorial.jpg"
---

# 📝 Deja de copiar y pegar contexto: Crea tu primer servidor MCP en 5 minutos

- **🎯 Recomendado para:** Desarrolladores cansados de copiar y pegar esquemas de BD o documentos de API en cada prompt, usuarios que manejan datos locales.
- **⏱️ Tiempo requerido:** 5 minutos → Ahorro de tiempo permanente.
- **🤖 Modelos recomendados:** Modelos compatibles con MCP como Claude Desktop, Ollama, etc.

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> *"Abres Claude y pegas el esquema de la base de datos. Diez minutos después, abres otra ventana y lo vuelves a pegar. Es hora de terminar con esta rutina agotadora y repetitiva."*

En pleno 2026, el **MCP (Model Context Protocol)** se ha consolidado como el estándar de facto para conectar LLMs con datos. Piénsalo como un "puerto USB" para tu modelo de IA. En lugar de alimentarle el contexto manualmente en cada interacción, conectas el servidor una sola vez y el modelo "lee" tus archivos, bases de datos o APIs internas en tiempo real y por su cuenta.

Ya existen excelentes servidores MCP de propósito general para integrar GitHub o el sistema de archivos local. Sin embargo, el verdadero poder se desata cuando conectas la **"lógica de negocio única de tu empresa"** al LLM.

Hoy, en lugar de escribir código repetitivo (boilerplate) a mano, te presentamos un prompt que instruye a la IA para crear la estructura base (scaffold) de un servidor MCP personalizado y robusto en TypeScript en tan solo 5 minutos.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **El fin del copia y pega:** Permite que el LLM acceda directamente a tus datos locales (BD, logs, APIs) mediante MCP.
2. **Construcción con un solo prompt:** Genera el código completo de un servidor MCP automáticamente sin configuraciones iniciales complejas.
3. **Privacidad absoluta:** Tus datos no se filtran al exterior; se transmiten de forma segura y directa a la ventana de contexto del modelo dentro de tu entorno local.

---

## 🚀 La Solución: "MCP Server Scaffolder"

### 🥉 Versión Básica (Basic Version)

Úsala cuando solo necesites rápidamente la estructura básica de un servidor MCP.

> **Rol:** Eres un desarrollador Senior de TypeScript.
> **Tarea:** Usando `@modelcontextprotocol/sdk`, escribe el código para un servidor MCP sencillo que cumpla con el siguiente propósito: `[Propósito deseado, ej: proporcionar el clima de una ciudad específica]`.

<br>

### 🥇 Versión Profesional (Pro Version)

Úsala cuando necesites un código de servidor sólido, escalable y listo para producción.

> **Rol (Role):** Eres un Ingeniero Senior de TypeScript, experto en el ecosistema del Model Context Protocol (MCP).
>
> **Contexto (Context):**
>
> - Fondo: Necesito un servidor MCP personalizado para conectar mis datos locales o API interna con un LLM.
> - Objetivo: Debes generar un código de servidor MCP completo y ejecutable en un único archivo (`index.ts`) que se ajuste exactamente a mis requerimientos.
>
> **Tarea (Task):**
>
> 1. Escribe el código del servidor MCP que cumpla con los siguientes requisitos:
>    - **Propósito:** `[Describe detalladamente el propósito del servidor aquí. Ej: Leer las últimas 50 líneas de un archivo de log específico]`
> 2. Estructura el código generado para que sea amigable con el formato "copiar y pegar", incluyendo comentarios claros, de modo que pueda ejecutarlo en la terminal de inmediato.
>
> **Restricciones (Constraints):**
>
> - Debes usar obligatoriamente el SDK oficial `@modelcontextprotocol/sdk`.
> - Si los parámetros de entrada de la herramienta son complejos, utiliza la librería `zod` para la validación del esquema (recomendado).
> - Al crear el servidor, debes implementar a la perfección las interfaces `ListToolsRequestSchema` y `CallToolRequestSchema`.
> - Incluye siempre lógica de manejo de excepciones (`try/catch`) dentro del manejador (Handler) de la herramienta para evitar que el servidor se caiga.
> - **Imprime únicamente un bloque de código en TypeScript, sin explicaciones adicionales.**
>
> **Advertencias (Warning):**
>
> - No inventes métodos del SDK que no existan. Si no estás seguro, utiliza la API nativa de Node.js como alternativa para evitar alucinaciones.

---

## 💡 Comentario del Autor (Insight)

El secreto de este prompt no reside en pedirle vagamente a la IA "escribe código", sino en forzar las **especificaciones clave del protocolo (el manejo de las peticiones ListTools y CallTool)** que un servidor MCP debe cumplir estrictamente.

La mayor ventaja de construir tu propio servidor MCP es la **"Privacidad abrumadora (Privacy)"**. Mientras que las herramientas de búsqueda web genéricas envían tus consultas a través de servidores externos, un servidor MCP personalizado conectado a tu base de datos PostgreSQL local o a tu API interna asegura que los datos se transmitan de forma segura bajo tu control absoluto. Ya no hay necesidad de copiar documentos internos confidenciales y pegarlos en la ventana del chat.

Te sugiero empezar utilizando este prompt para crear una herramienta sencilla de "solo lectura (Read-only)", como un lector de archivos de log locales. Una vez que comprendas cómo funciona, puedes expandirlo para incluir funciones que modifiquen la base de datos, construyendo así tu propio asistente de IA definitivo.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Puedo usar este prompt aunque no tenga conocimientos de programación?**
  - R: ¡Sí, por supuesto! Solo describe tu necesidad en lenguaje natural en la sección de `[Propósito]` (por ejemplo, "una función que me dé el clima de Madrid"). Claude generará el código perfecto por ti. Solo tienes que copiarlo y pegarlo en tu entorno de ejecución.

- **P: ¿Cómo ejecuto y conecto el servidor generado?**
  - R: Guarda el código como `index.ts` y añade la ruta de ese script en la sección `mcpServers` del archivo de configuración de Claude Desktop (`claude_desktop_config.json`). Se conectará automáticamente.

- **P: ¿Este servidor solo funciona con Claude?**
  - R: No. Model Context Protocol es un estándar abierto, por lo que funcionará de la misma manera en todas las plataformas y clientes que soporten MCP, como Ollama, Cursor, etc.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1.  **Control estricto mediante Restricciones (Constraints):** Al forzar el uso de `@modelcontextprotocol/sdk` y `zod`, y al especificar los esquemas obligatorios (`ListToolsRequestSchema`, `CallToolRequestSchema`), evitamos de raíz que la IA sufra alucinaciones que rompan las especificaciones del protocolo.
2.  **Archivo único y salida exclusiva de código:** Al indicar una estructura de un solo archivo (`index.ts`) en lugar de fragmentarlo en varios, y al eliminar las explicaciones innecesarias, maximizamos la velocidad de prueba y el valor inmediato para el usuario (Time-to-Value).
3.  **Manejo de excepciones obligatorio:** Predefinimos la lógica de `try/catch` para evitar que un error durante la ejecución de la herramienta haga que todo el servidor MCP se bloquee (crash).

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada manual)

```text
Usuario:
(Copia y pega un archivo my_database_schema.sql completo de miles de líneas)
(Copia y pega un documento internal_api_docs.md de cientos de líneas)

Basándote en este esquema, escribe una consulta para obtener el número de usuarios registrados hoy y dime cómo llamarla según esta documentación de la API.
```

### ✅ Después (Resultado con MCP)

```text
Usuario:
¿Cuántos usuarios se han registrado hoy? (Claude llama automáticamente a la herramienta MCP en segundo plano)

Claude:
Tras consultar la base de datos interna, el número total de nuevos usuarios registrados hoy es de 150.
```

---

## 🎯 Conclusión

La era de introducir contexto mecánicamente en la ventana de chat de la IA ha terminado. Es hora de convertir la IA en una verdadera infraestructura "conectando (Plug-in)" tus datos directamente al modelo.

En solo 5 minutos, crea la base perfecta para el servidor MCP que te ahorrará el tiempo que perdías copiando y pegando. ¡Termina tu trabajo temprano hoy! 🍷
