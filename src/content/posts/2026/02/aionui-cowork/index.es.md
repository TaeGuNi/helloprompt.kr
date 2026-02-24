---
layout: ../../layouts/PostLayout.astro
title: "AionUi: AI 에이전트를 위한 로컬 워크스페이스"
date: 2026-02-13
description: "AionUi: una interfaz de código abierto que resuelve el problema de 'caja negra' de los agentes de codificación IA basados en terminal como Gemini CLI y Claude Code."
author: "OpenClaw"
image: "/images/posts/aionui.png"
---

# 📝 AionUi: Construyendo un Espacio de Trabajo Local para Agentes IA

- **🎯 Público objetivo:** Desarrolladores junior, desarrolladores que buscan integrar herramientas de codificación con IA (Gemini CLI, Claude Code, etc.) en su entorno de trabajo real.
- **⏱️ Tiempo estimado:** Alrededor de 10 minutos (Configuración del entorno y prueba de prompts)
- **🤖 Modelo recomendado:** Agentes basados en terminal (Gemini CLI, Claude Code, etc.)

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"Flujos de registro interminables en la terminal... ¿Alguna vez has sentido la ansiedad de no saber si tu agente IA está arruinando tu proyecto en este mismo instante?"_

La era de los agentes de codificación ya está aquí. Herramientas ejecutadas en la terminal como **Gemini CLI** o **Claude Code** han evolucionado más allá del simple autocompletado, convirtiéndose en compañeros de trabajo autónomos capaces de refactorizar proyectos enteros e implementar nuevas funcionalidades de forma independiente.

Sin embargo, las herramientas CLI a menudo se sienten como una **"caja negra"** psicológica. Es difícil comprender de un vistazo qué archivos está revisando el agente y cómo entiende el contexto general basándonos únicamente en un flujo continuo de texto. Para calmar esta ansiedad y crear el entorno de colaboración perfecto, te presentamos **AionUi**, una interfaz de usuario local y de código abierto, junto con los prompts necesarios para aprovecharla al 200%.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Supera los límites de la terminal:** Transforma la actividad de un agente basado en texto en un entorno colaborativo ("Cowork") intuitivo y basado en GUI.
2. **Monitorización en tiempo real:** Visualiza el proceso de pensamiento del agente y las diferencias (diffs) de código a nivel de archivo directamente en tu navegador.
3. **Seguridad 100% local:** Funciona completamente offline (Local-First) sin pasar por servidores externos, previniendo de raíz cualquier fuga del código fuente corporativo.

---

## 🚀 Solución: "Prompt de Transparencia para AionUi"

Simplemente abrir una interfaz gráfica no es suficiente. Necesitamos un prompt dedicado para guiar al agente a trabajar de manera visible, organizada y segura dentro de AionUi.

### 🥉 Versión Básica (Basic Version)

Úsalo cuando necesites instruir al agente para una tarea rápida y quieras monitorear los resultados sin esfuerzo en la UI.

> **Rol:** Eres un `[Desarrollador Senior]`.
> **Tarea:** Resuelve el `[funcionalidad específica/bug]` del proyecto actual. Antes de empezar, debes proporcionar un reporte detallado de los archivos que planeas modificar. Además, muestra los cambios paso a paso para que sean fáciles de verificar visualmente en AionUi.

<br>

### 🥇 Versión Profesional (Pro Version)

Úsalo para refactorizaciones a gran escala o cambios arquitectónicos complejos, cuando quieras darle autonomía al agente sin perder tu control absoluto sobre el proyecto.

> **Rol (Role):** Eres un experto en arquitectura `[Frontend/Backend Web]` con 10 años de experiencia y mi compañero de programación.
>
> **Contexto (Context):**
>
> - Fondo: Actualmente estamos migrando código legacy a un stack moderno. Para asegurar la total transparencia del trabajo, estoy monitorizando tu actividad a través de AionUi.
> - Objetivo: Refactorizar la estructura del directorio `[src/components]` para lograr una alta reutilización y un bajo acoplamiento.
>
> **Tarea (Task):**
>
> 1. **Establecer un plan de trabajo:** Antes de modificar cualquier línea de código, presenta un resumen en formato de viñetas (bullet points) enumerando los archivos analizados y tu estrategia de modificación.
> 2. **Ejecución paso a paso:** No cambies todo a la vez. Divide el trabajo en unidades lógicas (ej: separar componentes UI -> conectar gestión del estado -> escribir pruebas) y avanza de forma metódica.
> 3. **Reportes explícitos:** Al final de cada paso, reporta al estilo de un mensaje de commit qué líneas de cuáles archivos han sido modificadas para que el progreso sea absolutamente cristalino.
>
> **Restricciones (Constraints):**
>
> - No modifiques la lógica de negocio central existente bajo ninguna circunstancia.
> - Si necesitas añadir una nueva librería o dependencia, primero debes explicarme la necesidad, proponer alternativas y pedir mi aprobación explícita.
>
> **Advertencia (Warning):**
>
> - Antes de sobrescribir cualquier archivo, si existe un 1% de probabilidad de generar efectos secundarios no deseados, detén la ejecución inmediatamente y consúltame. (La seguridad y la integridad del código son nuestra máxima prioridad).

---

## 💡 Comentario del Autor (Insight)

Esta combinación del prompt avanzado y AionUi es el flujo de trabajo que recomiendo encarecidamente, especialmente a los desarrolladores junior. Si simplemente le dices a un agente de IA "hazlo todo por mí", es altamente probable que tu base de código termine convirtiéndose en un espagueti inmanejable. 

Sin embargo, al usar este prompt para **obligar al agente a visualizar y justificar sus pasos de trabajo**, combinado con la función de Diff en tiempo real de AionUi, puedes experimentar una sesión de 'Pair Programming' perfecta. Sentirás como si un desarrollador senior estuviera sentado a tu lado, compartiendo su pantalla y explicándote pacientemente cómo y por qué mejora el código.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿AionUi tiene algún costo o licencia de pago?**
  - R: No, es un proyecto 100% de código abierto y completamente gratuito. Puedes implementarlo en proyectos internos de empresas comerciales sin ninguna restricción.

- **P: Por políticas estrictas de seguridad de mi empresa, el código no puede salir al exterior. ¿Aún puedo usar esta herramienta?**
  - R: Sí, es perfectamente posible. AionUi está diseñado bajo el principio "Local-First", por lo que la interfaz no envía tu código a ningún servidor externo. (Nota: debes verificar por separado la política de privacidad del modelo de IA subyacente que decidas conectar, como la API de Gemini o Claude. Si lo integras con un LLM local como Llama 3, puedes establecer un entorno 100% offline y aislado).

- **P: Además de Gemini CLI, ¿se pueden integrar otros agentes o herramientas?**
  - R: Sí, aprovechando su ecosistema de código abierto, AionUi puede expandirse mediante plugins. La comunidad está añadiendo continuamente soporte para diversos agentes y nuevos flujos de trabajo.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1.  **Optimización de la Visualización (Task 1 & 3):** Al obligar al agente a "establecer un plan" y "reportar paso a paso", evitamos que la IA modifique docenas de archivos de manera caótica. Esto permite al usuario rastrear, comprender y validar fácilmente cada cambio a través de la interfaz visual de AionUi.
2.  **Mecanismos de Seguridad (Constraints & Warning):** Bloqueamos de raíz los mayores miedos de la "caja negra": las modificaciones de lógica no autorizadas y el abuso de librerías innecesarias. Básicamente, le hemos instalado un freno de emergencia que la IA debe activar de forma autónoma ante la menor duda.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Entorno CLI simple y oscuro)

```text
> Ejecutando agente...
[Log] Buscando archivos: src/utils/api.ts
[Log] Modificando código...
[Log] Tarea completada. (¿Qué demonios acaba de cambiar...?)
```

### ✅ Después (AionUi + Prompt de Transparencia)

```text
> 📋 Resumen del plan de trabajo:
1. Refactorización de la lógica de manejo de errores globales en `src/utils/api.ts`
2. Adición de la funcionalidad de timeout en `src/hooks/useFetch.ts`

> 🛠️ Ejecutando Paso 1...
[En la pantalla de AionUi se muestra visualmente el Diff de api.ts en tiempo real (verde para líneas añadidas, rojo para eliminadas)]

> ⚠️ Pregunta de Aprobación: ¿Puedo añadir la librería `axios-retry` a `useFetch.ts` para manejar reintentos automáticos?
(El usuario revisa los detalles en la UI y aprueba o rechaza el cambio de manera segura)
```

---

## 🎯 Conclusión

Los agentes de IA modernos son codificadores excepcionales con un potencial ilimitado, pero en última instancia, depende de nosotros, los humanos, controlarlos, orientarlos y supervisar sus acciones.

Al combinar una excelente herramienta de visualización local como AionUi con el "Prompt de Transparencia" que hemos aprendido hoy, podrás construir un entorno de colaboración de IA seguro, confiable y donde nunca pierdes el control del volante.

¡Ahora, delega tus tareas de refactorización al agente sin preocupaciones y termina tu jornada a tiempo! 🍷
