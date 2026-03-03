---
title: " \"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\""
description: "El MCP (Model Context Protocol) es el nuevo 'USB' para los LLMs. Olvídate de copiar y pegar esquemas JSON interminables: descubre el prompt definitivo para crear un servidor personalizado y conectar tus datos locales directamente a Claude u Ollama."
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

# 📝 Deja de copiar y pegar contexto: crea tu primer servidor MCP en 5 minutos

- **🎯 Recomendado para:** Desarrolladores hartos de copiar y pegar esquemas de bases de datos o documentación de APIs en cada prompt, y usuarios que manejan datos locales.
- **⏱️ Tiempo requerido:** 5 minutos → Ahorro de tiempo permanente.
- **🤖 Modelos recomendados:** Cualquier modelo compatible con MCP (Claude Desktop, Ollama, etc.).

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> *"¿Abres Claude y pegas el esquema de tu base de datos? ¿Diez minutos después abres un chat nuevo y te toca volver a pegarlo? Es hora de poner fin a este bucle infinito y agotador."*

En pleno 2026, el **MCP (Model Context Protocol)** se ha coronado como el estándar indiscutible para conectar modelos de lenguaje (LLMs) con tus fuentes de datos. Imagínalo como un "puerto USB" universal para tu IA. En lugar de inyectar contexto a mano en cada interacción, conectas el servidor una sola vez y dejas que el modelo "lea" tus archivos, bases de datos o APIs internas de forma autónoma y en tiempo real.

Si bien ya existen excelentes servidores MCP de uso general para integrar GitHub o tu sistema de archivos local, el verdadero salto cuántico ocurre cuando conectas la **"lógica de negocio exclusiva de tu empresa"** directamente al LLM.

Hoy, en lugar de perder el tiempo picando código repetitivo (*boilerplate*) desde cero, te traemos el prompt definitivo para que la IA genere toda la estructura base (*scaffolding*) de un servidor MCP robusto y hecho a medida en TypeScript. ¿Lo mejor? Estará listo en apenas 5 minutos.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **El fin del copia y pega:** Permite que el LLM acceda directamente a tus datos locales (bases de datos, logs, APIs) a través de MCP.
2. **Despliegue con un solo prompt:** Genera el código completo de tu servidor MCP de forma automática, sin configuraciones iniciales tediosas.
3. **Privacidad absoluta:** Tus datos nunca salen de tu máquina; se transmiten de forma segura y directa a la ventana de contexto del modelo, siempre dentro de tu propio entorno.

---

## 🚀 La Solución: "MCP Server Scaffolder"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites levantar la estructura inicial de un servidor MCP en tiempo récord.

> **Rol:** Eres un desarrollador Senior especializado en TypeScript.
> **Tarea:** Utilizando `@modelcontextprotocol/sdk`, escribe el código para un servidor MCP sencillo que cumpla con el siguiente propósito: `[Tu objetivo, ej: consultar el clima en tiempo real de una ciudad específica]`.

### 🥇 Versión Profesional (Pro Version)

Ideal para cuando necesitas un código sólido, escalable y listo para un entorno de producción.

> **Rol (Role):** Eres un Ingeniero de Software Senior en TypeScript, experto absoluto en el ecosistema del Model Context Protocol (MCP).
>
> **Contexto (Context):**
>
> - Fondo: Necesito crear un servidor MCP personalizado para conectar mis datos locales o una API interna directamente a un LLM.
> - Objetivo: Debes generar el código fuente de un servidor MCP completo y funcional en un único archivo (`index.ts`) que se ajuste milimétricamente a mis requerimientos.
>
> **Tarea (Task):**
>
> 1. Escribe el código del servidor MCP asegurando que cumpla con este requisito:
>    - **Propósito:** `[Describe aquí en detalle lo que debe hacer el servidor. Ej: Leer y analizar las últimas 50 líneas de un archivo de log específico de mi servidor]`
> 2. Estructura el código generado para que sea "llegar y pegar" (plug-and-play). Incluye comentarios explicativos claros para que pueda ejecutarlo en mi terminal inmediatamente.
>
> **Restricciones (Constraints):**
>
> - Es obligatorio utilizar el SDK oficial `@modelcontextprotocol/sdk`.
> - Si los parámetros de entrada de la herramienta son complejos, emplea la librería `zod` para validar el esquema (altamente recomendado).
> - La implementación del servidor debe cumplir a la perfección con las interfaces `ListToolsRequestSchema` y `CallToolRequestSchema`.
> - Incluye siempre lógica de manejo de errores (`try/catch`) dentro del *handler* de la herramienta para evitar caídas del servidor.
> - **Devuelve única y exclusivamente el bloque de código en TypeScript. Cero explicaciones adicionales.**
>
> **Advertencias (Warning):**
>
> - No inventes ni alucines métodos del SDK que no existen. Si tienes dudas sobre alguna función, utiliza la API nativa de Node.js como alternativa segura.

---

## 💡 Comentario del Autor (Insight)

El secreto de este prompt no radica en pedirle genéricamente a la IA que "escriba código", sino en imponerle de forma estricta las **especificaciones clave del protocolo (el manejo impecable de las peticiones ListTools y CallTool)** que todo servidor MCP debe respetar a rajatabla.

La mayor ventaja de construir tu propio servidor MCP es su **"privacidad inquebrantable"**. Mientras que las herramientas de búsqueda web tradicionales envían tus consultas a través de servidores de terceros, un servidor MCP personalizado conectado a tu base de datos PostgreSQL local o a tu API interna garantiza que los datos viajen de forma segura y bajo tu control absoluto. Se acabó el riesgo de exponer documentos confidenciales al pegarlos accidentalmente en la ventana del chat.

Te recomiendo empezar usando este prompt para crear una herramienta sencilla de "solo lectura" (*read-only*), como un analizador de logs locales. Una vez que domines el flujo de trabajo, podrás escalar la arquitectura y añadir funciones de escritura en la base de datos, construyendo así tu asistente de IA definitivo.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Puedo usar este prompt si no sé programar?**
  - R: ¡Totalmente! Solo tienes que describir lo que necesitas en lenguaje natural dentro del campo `[Propósito]` (por ejemplo: "una herramienta que me dé el clima de Madrid"). Claude generará el código perfecto para ti; tú solo tendrás que copiarlo y ejecutarlo.

- **P: ¿Cómo ejecuto y conecto el servidor que me da la IA?**
  - R: Guarda el código generado en un archivo llamado `index.ts` y añade la ruta de ese script en la sección `mcpServers` del archivo de configuración de Claude Desktop (`claude_desktop_config.json`). Se conectará mágicamente de forma automática.

- **P: ¿Este servidor funciona únicamente con Claude?**
  - R: Para nada. El Model Context Protocol es un estándar abierto, lo que significa que tu servidor funcionará exactamente igual en cualquier plataforma o cliente compatible con MCP, como Ollama, Cursor y muchos más.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Control férreo mediante Restricciones (Constraints):** Al exigir explícitamente el uso de `@modelcontextprotocol/sdk` y `zod`, y al fijar los esquemas obligatorios (`ListToolsRequestSchema`, `CallToolRequestSchema`), cortamos de raíz cualquier posibilidad de que la IA alucine y rompa las reglas del protocolo.
2. **Un solo archivo, solo código:** Al solicitar una estructura monolítica (`index.ts`) en lugar de fragmentarla en múltiples archivos, y al prohibir las explicaciones extra, maximizamos la velocidad de iteración y el valor inmediato (*Time-to-Value*).
3. **Manejo de excepciones a prueba de balas:** Imponemos la lógica de `try/catch` desde el inicio para garantizar que un fallo puntual durante la ejecución de una herramienta no provoque un *crash* fatal en todo el servidor MCP.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada manual)

```text
Usuario:
(Copia y pega un archivo my_database_schema.sql gigantesco de miles de líneas)
(Copia y pega un documento internal_api_docs.md interminable)

Basándote en este esquema, escribe una consulta SQL para obtener el número de usuarios registrados hoy e indícame cómo llamarla siguiendo esta documentación de la API.
```

### ✅ Después (Resultado con MCP)

```text
Usuario:
¿Cuántos usuarios se han registrado hoy? (Claude invoca automáticamente la herramienta MCP en segundo plano)

Claude:
Tras consultar la base de datos interna, el número total de nuevos usuarios registrados el día de hoy es de 150.
```

---

## 🎯 Conclusión

La era de inyectar contexto a la fuerza en la ventana de chat de tu IA ha llegado a su fin. Es el momento de transformar la inteligencia artificial en una verdadera infraestructura, "enchufando" tus datos locales directamente al modelo.

En solo 5 minutos puedes sentar las bases perfectas para un servidor MCP que te ahorrará cientos de horas de copiar y pegar. ¡Termina tu trabajo temprano y a disfrutar! 🍷
