---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Code Hardcore: Transforma a tu IA en el Chaos Monkey de Netflix para Testing"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "¿Harto del 'Sí, entiendo' de la IA? Descubre este prompt extremo que la obliga a programar escenarios de desastre y manejo de excepciones sin piedad."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 💣 Cheat Code Hardcore: Transforma a tu IA en el Chaos Monkey de Netflix para Testing

- 🎯 **Recomendado para:** Seniors hartos de que la IA solo devuelva el "Happy Path", y Juniors que buscan sobrevivir sin un mentor.
- ⏱️ **Tiempo de ejecución:** De trasnochar depurando errores → a resolverlo en 1 minuto.
- 🤖 **Modelos óptimos:** Claude 3.5 Sonnet, GPT-4o (los modelos básicos no soportan directrices tan estrictas).
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_"La mayoría de los desarrolladores cometen un error fatal al pedir tests a la IA: dicen 'Escribe algo que funcione'. El resultado son 200 líneas de un 'Happy Path' más frágil que el cristal. Pero en producción, el mundo real no perdona."_

Ninguna API externa tiene un uptime del 100%, ni existe una base de datos que jamás pierda la conexión. El "cheat code" de hoy aniquila esa actitud complaciente de la IA y la obliga a programar asumiendo los peores escenarios de desastre (Chaos) sin piedad alguna. Te presentamos un prompt con mentalidad de **Senior Espartano**.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

- 🚫 **El "Happy Path" es secundario:** Limita los escenarios ideales al 20% y destina el 80% restante al manejo de excepciones y recuperación de desastres.
- 🔥 **Simulación de caos obligatoria:** Fuerza la inyección de fallos como tiempos de espera de red (timeouts), errores HTTP 500 y caídas en la base de datos.
- 🧹 **Cero mocking global sucio:** Prohíbe terminantemente contaminar el entorno con `global.fetch` y exige pruebas aisladas mediante MSW o Inyección de Dependencias (DI).

---

## 🚀 La Solución: "Chaos Monkey Testing Protocol"

### 🥉 Versión Básica (Basic Version)

Úsalo cuando necesites montar rápidamente la estructura base para probar el manejo de excepciones.

> **Rol:** Eres un Ingeniero de QA Senior implacable.
> **Tarea:** Escribe el código de prueba para `[Componente o función a probar]`. Crea un único escenario ideal (Happy Path) y llena el resto de la suite con pura lógica defensiva frente a fallos (errores de red, caídas de base de datos, etc.).

### 🥇 Versión Pro (Pro Version)

Un "cheat code" extremo que doblega el ego complaciente de la IA y le inyecta en vena la filosofía Chaos Monkey de Netflix.

> **Rol (Role):** Eres un Ingeniero de Pruebas Senior extremo y despiadado, un devoto absoluto de la filosofía 'Chaos Monkey' de Netflix. Deja a un lado la obediencia ciega y la amabilidad superficial; tu único objetivo es destrozar las vulnerabilidades de mi sistema.
> 
> **Contexto (Context):**
> - Objetivo: Escribir una Test Suite (Unit/E2E) con un nivel de defensa extremo para `[Nombre de la función o componente a probar]`.
> - Framework: `[Vitest / Jest / Playwright, etc.]`
> 
> **Tarea (Task):**
> 1. **Muerte al Happy Path:** Limita esos escenarios ingenuos donde todo funciona y el servidor externo responde a la perfección a un máximo del 20% de las pruebas. Dedica el 80% restante exclusivamente a la defensa contra fallos y casos límite.
> 2. **Escenarios de Desastre (Disaster Scenarios):** Debes incluir obligatoriamente al menos uno de los siguientes desastres dentro de un bloque `describe`:
>    - Validación de mensajes de error amigables y operaciones de *rollback* ante una latencia extrema de la API externa o errores HTTP 500.
>    - Validación de prevención de interbloqueos (deadlocks) y lógica de colas de reintentos (Retry Queue) frente a la desconexión del *pool* de conexiones de la base de datos.
> 3. **Cobertura lógica implacable:** No te conformes con un simple "Pass" al terminar sin errores. Utiliza aserciones `expect` de forma despiadada para validar los márgenes de tolerancia en la latencia de rendimiento (Delay) y el estado del recolector de basura (limpieza de memoria) tras un error.
> 
> **Restricciones (Constraints):**
> - **La regla del Mocking Limpio (The Clean Mocking Rule):** Queda terminantemente prohibido contaminar el entorno con objetos globales, como `global.fetch = vi.fn().mockRejectedValue(...)`.
> - La simulación de desastres de red debe garantizar un aislamiento total de la prueba (100% Isolation), ya sea utilizando mocking a nivel de protocolo como MSW (Mock Service Worker) o simulando exclusivamente clientes inyectados por dependencias (DI).
> - **Cero Alucinaciones (Hallucination):** No inventes sintaxis ni utilices bibliotecas inexistentes de las que no tengas certeza absoluta. Si desconoces algo, exige con firmeza: "Proporcióname la documentación".

*(¡Aquí tienes el formato en texto plano para copiar y pegar en un segundo!)*

```text
Rol (Role): Eres un Ingeniero de Pruebas Senior extremo y despiadado, un devoto ciego de la filosofía 'Chaos Monkey' de Netflix. Deja de lado la obediencia ciega o la amabilidad falsa, y piensa únicamente en cómo destruir las debilidades de mi sistema.

Contexto (Context):
- Objetivo: Escribir una Test Suite (Unit/E2E) con un nivel de defensa extremo para [Nombre de la función o componente a probar].
- Framework: [Vitest / Jest / Playwright, etc.]

Tarea (Task):
1. Death to Happy Paths: Limita los escenarios ingenuos donde los valores son correctos y el servidor externo responde al 100% a no más del 20% del total de las pruebas. Dedica el 80% restante por completo a la defensa contra fallos y situaciones excepcionales.
2. Disaster Scenarios: Debes incluir obligatoriamente al menos uno de los siguientes escenarios de desastre en un bloque de prueba (`describe`).
   - Validación de retorno de errores amigables para el usuario y rollback ante latencia extrema de API externa y errores HTTP 500 Internal Error.
   - Validación de prevención de interbloqueos (deadlocks) y lógica de colas de reintentos (Retry Queue) ante la desconexión del pool de conexiones de la base de datos.
3. Cobertura de lógica despiadada: No te conformes solo con ver si termina sin errores (Pass). Usa declaraciones `expect` de forma implacable para validar los márgenes de tolerancia de latencia de rendimiento (Delay) y el estado de recolección de basura (limpieza de memoria) después de un error.

Restricciones (Constraints):
- The Clean Mocking Rule: Queda estrictamente prohibida la contaminación sucia de objetos globales como `global.fetch = vi.fn().mockRejectedValue(...)`.
- La simulación de desastres de red debe garantizar un 100% de aislamiento de prueba (Isolation) utilizando mocking a nivel de protocolo como MSW (Mock Service Worker), o simulando únicamente objetos cliente inyectados por dependencias (DI).
- Prohibido Alucinar (Hallucination): No inventes sintaxis o bibliotecas inexistentes de las que no estés seguro. Si no lo sabes, exige con confianza: "Proporcióname la documentación".
```

---

## 💡 Comentario del Autor (Insight)

Seamos honestos. Cuando le pedimos a la IA que redacte tests, nuestro objetivo real no es simplemente inflar la cobertura al 100% para ver la luz verde. La IA lo sabe, y por eso opta por el camino fácil: te inunda de 'Happy Paths' y te felicita con un alegre "¡Pruebas ejecutadas con éxito!". 

**Pero eso no es ingeniería. Es como ponerle un lazo a un código espagueti.**

Este prompt destila la esencia del principio de **Anti-Fragilidad**, forjado a base de trasnochar lidiando con caídas de servidores y *deadlocks* en bases de datos de producción. Al inyectarle este "cheat code", la IA deja de ser un asistente dócil para convertirse en un **Tech Lead paranoico y meticuloso**. Al prohibir tajantemente atajos sucios (como sobrescribir `window.fetch`) y obligar a implementar MSW o DI, es posible que al principio notes que el código de configuración se vuelve más extenso. 

Hazme caso. Si quieres evitar que una alarma de PagerDuty te despierte a las 3 de la madrugada en pleno despliegue, **deja de tratar a la IA como a un becario amable y conviértela en un destructor despiadado**.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Qué hago si la IA genera una configuración de MSW innecesariamente compleja?**
  - A: Es un efecto secundario normal al construir un entorno verdaderamente aislado en lugar de recurrir al mocking global. Si resulta inmanejable, simplemente añade a la sección de **Tarea (Task)** la siguiente instrucción: `[Separa la configuración de los handlers de MSW en un archivo dedicado]`.
- **Q: ¿Debería aplicar este nivel de rigor a absolutamente todos mis componentes?**
  - A: Definitivamente no. Es un desgaste innecesario para componentes visuales simples de la UI. Reserva este prompt **exclusivamente para la lógica de dominio crítica**: pasarelas de pago, integraciones con APIs de terceros o sistemas complejos de gestión de estado (Store).
- **Q: ¿Qué modelo sigue mejor estas directrices, Claude o GPT?**
  - A: Para asimilar este tipo de restricciones filosóficas y extremas, actualmente **Claude 3.5 Sonnet** brilla con luz propia. Los modelos de la familia GPT a menudo sufren de un "sesgo de positividad" y terminan suavizando su rudeza.

---

## 🧬 Anatomía del Prompt (Why it works?)

- 🎭 **Asignación de Persona Asimétrica:** En lugar del genérico "Eres un desarrollador", le inyectamos el ego implacable de "un Senior que odia la obediencia y disfruta destrozando sistemas", suprimiendo de raíz el Sesgo de Positividad (Positivity Bias) característico de la IA.
- 🚧 **Prohibiciones Explícitas (Constraints):** Bloqueamos los anti-patrones apuntando directamente a código específico, como `global.fetch = vi.fn()`. La IA reacciona con muchísima más precisión a una amenaza letal ("si usas esto, mueres") que a una vaga petición de "hazlo bien".
- ⚖️ **Imposición de Proporciones:** Al exigir matemáticamente que el "Happy Path" ocupe menos del 20%, evitamos que la IA evada el trabajo duro generando casos de éxito redundantes para gastar tokens.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Petición tradicional)

```text
"Escribe el código de prueba para la función fetchUser que obtiene la información del usuario."
Resultado: 
- Prueba de parsing de texto de respuesta 200 OK (Pass)
- Prueba de si lanza un error cuando no hay ID (Pass)
... (Un festival de lógica global.fetch sobrescrita y sucia)
```

### ✅ Después (Con el Chaos Monkey)

```text
Resultado:
- [Configuración de MSW completada] Escritura de código defensivo simulando latencia de comunicación de API externa (Timeout 5000ms).
- Validación de lógica de retorno de una UI de respaldo (Fallback) elegante después de 3 reintentos (Retry) ante un HTTP 500 Internal Error.
- Validación del estado de recolección de basura (sin fugas de memoria) y limpieza del servidor MSW tras finalizar la prueba.
- Pruebas de flujo normal (Happy Path) comprimidas en solo 1.
```

---

## 🎯 Conclusión

La IA genera código con una calidad directamente proporcional al prompt que recibe. Obtener código mediocre envuelto en amabilidad corporativa, o forjar un escudo impenetrable que te salve de los desastres de madrugada, está literalmente en la punta de tus dedos.

Copia este "cheat code", inyéctalo en tu agente y automatiza tu tranquilidad. ¡Es hora de ir a casa! 🍷
