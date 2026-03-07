---
title: " \"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\""
description: "MCP es el nuevo 'USB' para LLMs. Olvida copiar y pegar esquemas: usa este prompt para crear un servidor y conectar datos locales a Claude u Ollama en 5 min."
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

## 📝 Deja de copiar y pegar contexto: crea tu primer servidor MCP en 5 minutos

- **🎯 Recomendado para:** Desarrolladores hartos de copiar y pegar esquemas de bases de datos o documentación de APIs en cada prompt, y usuarios que manejan datos locales.
- **⏱️ Tiempo requerido:** 5 minutos → Ahorro de tiempo permanente.
- **🤖 Modelos recomendados:** Cualquier modelo compatible con MCP (Claude Desktop, Ollama, etc.).

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> *"¿Abres Claude y pegas el esquema de tu base de datos? ¿Diez minutos después inicias un nuevo chat y tienes que volver a pegarlo? Ha llegado el momento de poner fin a este bucle infinito y agotador."*

En pleno 2026, el **MCP (Model Context Protocol)** se ha consolidado como el estándar definitivo para conectar modelos de lenguaje (LLMs) con tus fuentes de datos. Piensa en él como un «puerto USB» universal para tu IA. En lugar de inyectar contexto manualmente en cada interacción, conectas el servidor una única vez y dejas que el modelo «lea» tus archivos, bases de datos o APIs internas de forma autónoma y en tiempo real.

Aunque ya existen excelentes servidores MCP de uso general para integrar GitHub o tu sistema de archivos local, el verdadero salto cuántico se produce al conectar la **lógica de negocio exclusiva de tu empresa** directamente al LLM.

Hoy, para que no pierdas más tiempo escribiendo código repetitivo (*boilerplate*) desde cero, te traemos el prompt definitivo. Con él, la IA generará toda la estructura base (*scaffolding*) de un servidor MCP robusto y a medida en TypeScript. ¿La mejor parte? Lo tendrás listo en apenas 5 minutos.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **El fin del copia y pega:** Permite que el LLM acceda directamente a tus datos locales (bases de datos, logs, APIs) mediante MCP.
2. **Despliegue con un solo prompt:** Genera el código completo de tu servidor MCP automáticamente, olvidándote de las tediosas configuraciones iniciales.
3. **Privacidad absoluta:** Tus datos jamás salen de tu equipo; se transmiten de forma segura y directa a la ventana de contexto del modelo, manteniéndose siempre en tu entorno local.

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

El verdadero poder de este prompt no reside en pedirle a la IA de forma genérica que «escriba código», sino en exigirle con rigurosidad las **especificaciones clave del protocolo**. Al imponer un manejo impecable de las peticiones `ListTools` y `CallTool`, garantizamos que el servidor MCP respete el estándar a rajatabla.

La mayor ventaja de construir tu propio servidor MCP es su **privacidad inquebrantable**. Mientras que las herramientas de búsqueda web tradicionales envían tus consultas a servidores de terceros, un servidor MCP personalizado —conectado a tu base de datos PostgreSQL local o a tu API interna— asegura que la información viaje de manera segura y bajo tu control absoluto. Dile adiós al riesgo de exponer documentos confidenciales por pegarlos accidentalmente en la ventana de chat.

Te sugiero empezar utilizando este prompt para crear una herramienta sencilla de solo lectura (*read-only*), como un analizador de logs locales. Una vez que domines este flujo de trabajo, podrás escalar la arquitectura para incluir funciones de escritura en la base de datos, forjando así tu asistente de IA definitivo.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Puedo usar este prompt si no sé programar?**
  - A: ¡Por supuesto! Solo necesitas describir lo que buscas en lenguaje natural dentro de la variable `[Propósito]` (por ejemplo: «una herramienta que me dé el clima de Madrid»). La IA generará el código perfecto para ti; tú únicamente tendrás que copiarlo y ejecutarlo.

- **Q: ¿Cómo ejecuto y conecto el servidor generado por la IA?**
  - A: Guarda el código en un archivo llamado `index.ts` y añade la ruta de ese script en la sección `mcpServers` de tu archivo de configuración en Claude Desktop (`claude_desktop_config.json`). La conexión se establecerá de forma automática y transparente.

- **Q: ¿Este servidor funciona exclusivamente con Claude?**
  - A: En absoluto. El *Model Context Protocol* es un estándar abierto. Esto significa que tu servidor funcionará a la perfección en cualquier plataforma o cliente compatible con MCP, como Ollama, Cursor y muchos otros.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Control férreo mediante restricciones (Constraints):** Al exigir explícitamente el uso de `@modelcontextprotocol/sdk` y `zod`, junto con los esquemas obligatorios (`ListToolsRequestSchema`, `CallToolRequestSchema`), eliminamos de raíz cualquier riesgo de que la IA alucine e incumpla las reglas del protocolo.
2. **Un solo archivo, cero rodeos:** Solicitar una estructura monolítica (`index.ts`) sin fragmentarla en múltiples archivos, prohibiendo además las explicaciones innecesarias, maximiza la velocidad de iteración y acelera la obtención de resultados (*Time-to-Value*).
3. **Manejo de excepciones a prueba de balas:** Imponer la lógica `try/catch` desde el principio garantiza que un fallo puntual al ejecutar una herramienta no provoque un *crash* fatal que tumbe todo el servidor MCP.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada manual)

```text
Usuario:
(Copia y pega un archivo my_database_schema.sql gigantesco de miles de líneas)
(Copia y pega un documento internal_api_docs.md interminable)

Basándote en este esquema, escribe una consulta SQL para obtener el número de usuarios registrados hoy e indícame cómo llamarla siguiendo la documentación de esta API.
```

### ✅ Después (Resultado con MCP)

```text
Usuario:
¿Cuántos usuarios se han registrado hoy? 
(Claude invoca automáticamente la herramienta MCP en segundo plano, sin necesidad de contexto adicional)

Claude:
Tras consultar la base de datos interna, el número total de nuevos usuarios registrados el día de hoy es de 150.
```

---

## 🎯 Conclusión

La era de inyectar contexto a la fuerza en la ventana de chat de tu IA ha llegado a su fin. Es el momento de transformar la inteligencia artificial en una verdadera infraestructura, «enchufando» tus datos locales directamente al modelo.

En tan solo 5 minutos puedes asentar las bases perfectas para un servidor MCP que te ahorrará cientos de horas de copiar y pegar esquemas. Automatiza tu flujo de trabajo, termina tus tareas más temprano y ¡a disfrutar de tu tiempo libre! 🍷
