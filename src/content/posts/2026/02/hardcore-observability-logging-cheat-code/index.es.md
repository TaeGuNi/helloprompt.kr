---
layout: /src/layouts/Layout.astro
title: "💀 Erradicando las Tonterías de la IA: El Truco Definitivo de Observabilidad Hardcore"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Ingeniería de Prompts"
description: "Un prompt maestro para bloquear los halagos inútiles y los console.log de la IA, estableciendo una observabilidad del sistema al nivel de un arquitecto senior."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "observability-logging-protocol"]
---

# 📝 Erradicando las Tonterías de la IA: El Truco Definitivo de Observabilidad Hardcore

- 🎯 **Público Objetivo:** Desarrolladores que sufren con logs espagueti, seniors que pierden el sueño por las alertas de guardia (On-Call), arquitectos de sistemas.
- ⏱️ **Tiempo Estimado:** De noches enteras depurando → a encontrar al culpable en 1 segundo.
- 🤖 **Modelos Recomendados:** Modelos especializados en código como Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro.
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_¿Ocurrió un error y nadie se enteró? Felicidades. Tu producto es ahora una bomba de tiempo que puede explotar en cualquier momento._

Cuando le pides a una IA que escriba código, inevitablemente esparce basura inútil como `console.log('pasó por aquí 1')` por todas partes. Estos logs, usados para depurar y nunca borrados, llenan de basura los discos de los servidores de producción y crean una situación de pesadilla donde los errores ni siquiera se pueden buscar en Datadog o Kibana cuando las cosas realmente fallan.

Este artículo es un código de trucos para transformar a tu IA de un "chatbot complaciente y educado" en un **arquitecto senior hardcore e implacable** que detecta al culpable en 1 segundo cuando ocurre un error.

---

## ⚡️ Resumen de 3 Líneas (TL;DR)

- 🚫 **Prohibición permanente de `console.log`:** Nunca lo uses, excepto a través de instancias de loggers (Pino, Winston).
- 🧱 **Logging Estructural y Trace ID Obligatorio:** Registra el 100% en formato JSON y mantén la conexión entre los logs (Trace ID) hasta el final.
- 🥷 **Enmascaramiento Total de Datos Personales:** Bloquea de raíz la información sensible como contraseñas y tokens con `[REDACTED]`.

---

## 🚀 La Solución: "Prompt Constitucional de Observabilidad Hardcore"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites armar rápidamente la estructura del código o hacer una refactorización ligera.

> **Rol:** Eres un experto en arquitectura de sistemas. Omite los comentarios positivos inútiles y dame solo el código.
> **Tarea:** Revisa el `[código/archivo]`, elimina todos los `console.log` y reemplázalos completamente con logging estructural JSON basado en Pino/Winston. Si es frontend, aplica un Error Boundary.


### 🥇 Versión Pro (Pro Version)

Esta es la versión definitiva para usar cuando necesitas un sistema de seguimiento de errores perfecto y un logging íntegro. Modifica la propia estructura cerebral de la IA.
También se proporciona a continuación como un bloque de código Markdown para que sea fácil de copiar.

> **Rol:** Eres un arquitecto senior hardcore, sin compasión. Deja a un lado los halagos o tonterías inútiles e impone una constitución de Observabilidad para la supervivencia del sistema.
>
> **Contexto:**
>
> - Fondo: La depuración es imposible debido a errores silenciosos y logs espagueti en texto plano en el entorno de producción.
> - Objetivo: Erradicar completamente `console.log` y construir un ecosistema de logging estructural rastreable y Error Boundaries en el frontend.
>
> **Tarea:**
>
> Escribe/refactoriza el código de `[insertar código o nombre del archivo a analizar/modificar aquí]` aplicando estrictamente los 6 mandamientos de la "Constitución de Observabilidad" a continuación.
> 
> 1. **Erradicación de `console.log`:** Asume que está bloqueado por el linter (`no-console`). Usa únicamente la instancia del logger dedicado que se ha inyectado.
> 2. **Obligación de Logging Estructural:** El 100% de los logs deben dejarse en formato JSON analizable por máquinas. Empuja los datos dinámicos como propiedades del objeto.
> 3. **Propagación del Trace ID:** Emite un Trace ID único en cada punto de entrada y arrastra el contexto hasta el final como Meta Data en funciones secundarias y loggers.
> 4. **Error Boundary en Frontend:** Para prevenir la pantalla blanca de la muerte (Blackbox), envuelve con un Global Error Boundary y reporta inmediatamente a un rastreador como Sentry.
> 5. **Enmascaramiento de PII (The Blind Logger):** Construye un pipeline en el momento de inicializar el logger para que los datos clave como `password` o `token` se procesen automáticamente como `[REDACTED]`.
> 6. **Bloqueo de Ruido:** Asigna el nivel `WARN` a los errores del cliente (4xx), y otorga niveles `ERROR`/`FATAL` solo cuando el sistema colapse (5xx) para controlar la fatiga de las guardias (On-Call).
>
> **Restricciones:**
>
> - No imprimas respuestas basura como "Sí, entendido" o "Es una buena idea".
> - Explica la lógica arquitectónica central del código modificado de manera seca y profesional.
>
> **Advertencia:**
>
> - Si escribes una sola línea de código que exponga Información de Identificación Personal (PII) del usuario o credenciales en logs de texto plano, tu código será descartado de inmediato.

**👇 Prompt de Truco para Copiar (Copy & Paste)**

```text
**Rol:** Eres un arquitecto senior hardcore, sin compasión. Deja a un lado los halagos o tonterías inútiles e impone una constitución de Observabilidad para la supervivencia del sistema.

**Contexto:**

- Fondo: La depuración es imposible debido a errores silenciosos y logs espagueti en texto plano en el entorno de producción.
- Objetivo: Erradicar completamente `console.log` y construir un ecosistema de logging estructural rastreable y Error Boundaries en el frontend.

**Tarea:**

Escribe/refactoriza el código de `[insertar código o nombre del archivo a analizar/modificar aquí]` aplicando estrictamente los 6 mandamientos de la "Constitución de Observabilidad" a continuación.

1. **Erradicación de `console.log`:** Asume que está bloqueado por el linter (`no-console`). Usa únicamente la instancia del logger dedicado que se ha inyectado.
2. **Obligación de Logging Estructural:** El 100% de los logs deben dejarse en formato JSON analizable por máquinas. Empuja los datos dinámicos como propiedades del objeto.
3. **Propagación del Trace ID:** Emite un Trace ID único en cada punto de entrada y arrastra el contexto hasta el final como Meta Data en funciones secundarias y loggers.
4. **Error Boundary en Frontend:** Para prevenir la pantalla blanca de la muerte (Blackbox), envuelve con un Global Error Boundary y reporta inmediatamente a un rastreador como Sentry.
5. **Enmascaramiento de PII (The Blind Logger):** Construye un pipeline en el momento de inicializar el logger para que los datos clave como `password` o `token` se procesen automáticamente como `[REDACTED]`.
6. **Bloqueo de Ruido:** Asigna el nivel `WARN` a los errores del cliente (4xx), y otorga niveles `ERROR`/`FATAL` solo cuando el sistema colapse (5xx) para controlar la fatiga de las guardias (On-Call).

**Restricciones:**

- No imprimas respuestas basura como "Sí, entendido" o "Es una buena idea".
- Explica la lógica arquitectónica central del código modificado de manera seca y profesional.

**Advertencia:**

- Si escribes una sola línea de código que exponga Información de Identificación Personal (PII) del usuario o credenciales en logs de texto plano, tu código será descartado de inmediato.
```

---

## 💡 Comentarios del Autor (Insight)

Para ser honesto, ¿sabes qué es lo más frustrante al revisar el código de juniors con 1 o 2 años de experiencia? Es esa única línea `console.error(err)` abandonada sin más en la lógica de manejo de errores. El sistema se está muriendo, y lo único que queda en el sistema de logs es un pedazo de texto plano que dice "¡Fallo en la conexión a la base de datos!". ¿Cómo se supone que vas a rastrear en qué API, o en qué solicitud de usuario falló con solo eso?

Este prompt de truco domina a la IA desde el principio para que no escriba un código tan estúpido. Nunca le digas simplemente a la IA "haz un buen logging". Son esencialmente 'yes-men' que intentan complacer al usuario, así que si les hablas de forma descuidada, te devolverán un código igual de descuidado. 

Después de aplicar este prompt en proyectos reales, descubrí que la IA configuraba por sí sola desde la lógica de transmisión de errores a Sentry hasta el pipeline de Redaction (enmascaramiento) en la configuración inicial de Pino. Especialmente al incluir la sección de **Advertencia (Warning)** previniendo la filtración de información sensible del usuario, pude ver a la IA autocensurando los logs en texto plano y forzando su reemplazo por logs estructurales. Si no quieres que te despierten a las 3 de la mañana por una alerta de log irrelevante, debes grabar a fuego esta constitución en tu agente de IA.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿La IA realmente entiende un prompt con un tono tan severo?**
  - R: Sorprendentemente, sí. Las IA conversacionales responden al tono y a la presión del usuario, elevando el nivel de profesionalismo y rigor en su resultado. Amenazar con "si violas esto, será descartado" es mucho más efectivo para prevenir alucinaciones (Hallucinations) que pedir "por favor, haz esto".
- **P: ¿Solo se puede usar para código backend?**
  - R: No. Si lo aplicas al código frontend (React, etc.), evitará la Pantalla Blanca de la Muerte (White Screen of Death) causada por errores de renderizado no controlados, y escribirá perfectamente el código de Error Boundary y la integración con Sentry.
- **P: ¿Qué pasa si no estoy usando un logger por separado?**
  - R: Si le das este prompt, la IA te propondrá automáticamente el código de configuración (Setup) inicial para un logger estándar como `Winston` o `Pino`. Simplemente cópialo y pégalo.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

- 🎭 **Asignación de Rol (Dominio de Persona):** Imponer a la IA una persona poderosa de 'arquitecto senior hardcore' hace que se sienta avergonzada de generar código a un nivel básico de `console.log`.
- 🧱 **Los 6 Mandamientos Específicos (Task):** En lugar de la vaga instrucción "haz un buen log", especifica principios arquitectónicos concretos que son absolutamente necesarios en la práctica, como la propagación del Trace ID y el enmascaramiento de PII.
- 🛑 **Restricciones y Advertencias Poderosas:** Se evitó el desperdicio de tokens bloqueando respuestas halagadoras sin sentido como "Sí, entendido", y se aseguró la integridad de la seguridad amenazando con descartar el código en caso de un incidente de filtración de información.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada: Solicitud simple)

```text
Escribe la función de inicio de sesión. Si hay un error, deja un log.
```

_(Resultado: Abuso de `console.log("Error de inicio de sesión")`, un desastre donde la contraseña del usuario se imprime en texto plano en el log de errores)_

### ✅ Después (Resultado: Aplicando el prompt de truco)

```javascript
// Ejemplo del resultado de código a nivel de arquitectura generado por la IA
import logger from '@utils/logger'; // Instancia de Pino con redaction
import { v4 as uuidv4 } from 'uuid';

export const loginHandler = async (req, res, next) => {
  const traceId = req.headers['x-trace-id'] || uuidv4();
  const contextLogger = logger.child({ traceId, action: 'user_login' });

  try {
    const { email, password } = req.body;
    contextLogger.info({ email }, 'Login attempt initiated'); // password se enmascara (Redacted) automáticamente
    
    // ... lógica de inicio de sesión ...
    
  } catch (error) {
    // Asigna el nivel ERROR solo a fallas del sistema de nivel 5xx y realiza un logging de errores estructurado
    contextLogger.error({ 
      error: error.message, 
      stack: error.stack 
    }, 'Internal Server Error during login process');
    next(error);
  }
};
```

---

## 🎯 Conclusión

Dejar que un sistema muera en silencio es una negligencia del deber por parte de un desarrollador. 

No permitas que la IA escriba lógica espagueti. Con este único prompt, tu asistente de IA ya no será un simple codificador, sino un sólido arquitecto senior que será tu compañero. 

Ahora puedes dormir a pierna suelta. La alarma de On-Call solo sonará cuando el sistema realmente se esté desmoronando. 🍷
