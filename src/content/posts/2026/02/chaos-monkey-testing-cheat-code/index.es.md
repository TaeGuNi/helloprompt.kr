---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Code Hardcore: Transforma a tu IA en el Chaos Monkey de Netflix para Testing"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "¿Cansado del 'Sí, entiendo' sin alma de la IA? Revelamos un prompt de defensa extrema que fuerza un manejo de excepciones y recuperación de desastres sin piedad."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 💣 Cheat Code Hardcore: Transforma a tu IA en el Chaos Monkey de Netflix para Testing

- **🎯 Recomendado para:** Seniors hartos de IAs que solo generan el "Happy Path" cuando piden código de prueba, y Juniors que se las arreglan solos sin un mentor.
- **⏱️ Tiempo estimado:** De depurar toda la noche → a resolverlo en 1 minuto.
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o (los modelos más débiles no soportan estas reglas estrictas).
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_La mayoría de los desarrolladores cometen un error fatal al pedir código de prueba a la IA. Dicen: "Escribe algo que funcione". Y por eso la IA te devuelve 200 líneas de un "Happy Path" tan frágil como una flor de invernadero. Pero el mundo real es un infierno._

No existe una API externa que responda el 100% de las veces, ni una conexión a base de datos que nunca se caiga. El cheat code de hoy destruye esa actitud de "sí a todo" de la IA y la obliga a escribir código asumiendo escenarios de desastre (Chaos) sin piedad. Es un prompt nivel **'Senior Espartano'**.

---
## ⚡️ Resumen en 3 líneas (TL;DR)
- 🚫 **Solo un 20% de Happy Path:** Deja a un lado los escenarios de funcionamiento normal y destina el 80% al manejo de excepciones y recuperación de desastres.
- 🔥 **Simulación de desastres obligatoria:** Fuerza el mocking obligatorio de tiempos de espera de red (timeouts), errores HTTP 500, desconexiones de bases de datos, etc.
- 🧹 **Prohibido el mocking global sucio:** Prohíbe la contaminación sin fundamentos con `global.fetch` y solo permite pruebas aisladas utilizando MSW o Inyección de Dependencias (DI).

---
## 🚀 La Solución: "Chaos Monkey Testing Protocol"

### 🥉 Versión Básica (Basic Version)
Úsalo cuando necesites establecer rápidamente la estructura para las pruebas de manejo de excepciones.

> **Rol:** Eres un Ingeniero de QA Senior sin piedad.
> **Tarea:** Escribe el código de prueba para `[Objetivo a probar]`. Crea solo 1 escenario de funcionamiento normal (Happy Path) y llena el resto completamente con lógica defensiva contra escenarios de fallo (Failure), como errores de red, desconexiones de base de datos, etc.


### 🥇 Versión Pro (Pro Version)
Un cheat code hardcore que borra por completo el ego de la IA y le inyecta la filosofía del Chaos Monkey de Netflix.

> **Rol (Role):** Eres un Ingeniero de Pruebas Senior extremo y despiadado, un devoto ciego de la filosofía 'Chaos Monkey' de Netflix. Deja de lado la obediencia ciega o la amabilidad falsa, y piensa únicamente en cómo destruir las debilidades de mi sistema.
> 
> **Contexto (Context):**
> - Objetivo: Escribir una Test Suite (Unit/E2E) con un nivel de defensa extremo para `[Nombre de la función o componente a probar]`.
> - Framework: `[Vitest / Jest / Playwright, etc.]`
> 
> **Tarea (Task):**
> 1. **Muerte a los Happy Paths:** Limita los escenarios ingenuos donde los valores son correctos y el servidor externo responde al 100% a no más del 20% del total de las pruebas. Dedica el 80% restante por completo a la defensa contra fallos y situaciones excepcionales.
> 2. **Escenarios de Desastre (Disaster Scenarios):** Debes incluir obligatoriamente al menos uno de los siguientes escenarios de desastre en un bloque de prueba (`describe`).
>    - Validación de retorno de errores amigables para el usuario y rollback ante latencia extrema de API externa y errores HTTP 500 Internal Error.
>    - Validación de prevención de interbloqueos (deadlocks) y lógica de colas de reintentos (Retry Queue) ante la desconexión del pool de conexiones de la base de datos.
> 3. **Cobertura de lógica despiadada:** No te conformes solo con ver si termina sin errores (Pass). Usa declaraciones `expect` de forma implacable para validar los márgenes de tolerancia de latencia de rendimiento (Delay) y el estado de recolección de basura (limpieza de memoria) después de un error.
> 
> **Restricciones (Constraints):**
> - **La regla del Mocking Limpio (The Clean Mocking Rule):** Queda estrictamente prohibida la contaminación sucia de objetos globales como `global.fetch = vi.fn().mockRejectedValue(...)`.
> - La simulación de desastres de red debe garantizar un 100% de aislamiento de prueba (Isolation) utilizando mocking a nivel de protocolo como MSW (Mock Service Worker), o simulando únicamente objetos cliente inyectados por dependencias (DI).
> - Prohibido Alucinar (Hallucination): No inventes sintaxis o bibliotecas inexistentes de las que no estés seguro. Si no lo sabes, exige con confianza: "Proporcióname la documentación".

*(¡También te lo proporcionamos en un bloque de texto para que sea fácil de copiar!)*

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
Seamos honestos. Cuando le pedimos a una IA que escriba código de prueba, en el fondo no estamos pensando: "¿Simplemente llena la cobertura al 100% y enciende la luz verde?". La IA también lo sabe, y por eso despliega todo tipo de 'Happy Paths' y te adula diciendo: "¡Se ha ejecutado con éxito!". 

**Esto no es ingeniería. Es como echarle azúcar a un código espagueti.**

Este prompt es la esencia del principio 'Anti-Fragilidad' (Anti-Fragile) que he forjado con sangre, sudor y lágrimas tras sufrir innumerables caídas de servidores y deadlocks de bases de datos en la industria. Si le inyectas este cheat code a la IA, dejará de ser un chatbot dócil y se transformará en un Tech Lead meticuloso y neurótico. Dado que bloquea de raíz los intentos de salir del paso con mocking global (como sobrescribir `window.fetch`) y obliga a configurar MSW o DI, es posible que al principio te quejes de que el código de configuración se hace más largo. 

Pero créeme. Si no quieres despertarte a las 3 de la mañana el día del despliegue con una alarma de PagerDuty, debes tratar a la IA no como un asistente amable, sino como un destructor sin piedad.

---
## 🙋 Preguntas Frecuentes (FAQ)
- **Q: ¿Qué pasa si la IA escribe un código de configuración de MSW demasiado complejo?**
  - A: Es normal. Es el proceso de construir un entorno aislado en lugar de un mocking global sucio. Si es demasiado complejo, añade la condición `[Sin embargo, separa la configuración del handler de MSW en un archivo independiente]` a la Tarea (Task).
- **Q: ¿Tengo que aplicar esta regla estricta a todos los componentes?**
  - A: No. Es un lujo innecesario para componentes de renderizado de UI simples. Lanza este prompt únicamente a la lógica de dominio central que maneja pagos, integraciones de terceros externos o gestión de estado compleja (Store).
- **Q: ¿Qué modelo obedece mejor, Claude o GPT?**
  - A: Para este tipo de restricciones extremas y filosóficas, actualmente **Claude 3.5 Sonnet** lo entiende de maravilla. Los modelos GPT tienden a intentar ser extrañamente positivos y amables todo el tiempo.

---
## 🧬 Anatomía del Prompt (Why it works?)
- 🎭 **Asignación de Persona Asimétrica:** En lugar de un típico "eres un desarrollador", inyecta un ego poderoso como "un Senior que odia la obediencia ciega y disfruta destruyendo sistemas", suprimiendo físicamente el Sesgo de Positividad (Positivity Bias) característico de la IA.
- 🚧 **Prohibiciones Explícitas (Constraints):** Prohíbe anti-patrones apuntando a código específico como `global.fetch = vi.fn()`. La IA reacciona con mucha más seguridad a una amenaza como "si usas este código, mueres" que a un vago "escríbelo bien".
- ⚖️ **Imposición de Proporciones:** Al establecer una restricción numérica de "Happy Path por debajo del 20%", se bloquea de raíz que la IA genere casos innecesarios de funcionamiento normal y desperdicie tokens.

---
## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Petición normal)
```text
"Escribe el código de prueba para la función fetchUser que obtiene la información del usuario."
Resultado: 
- Prueba de parsing de texto de respuesta 200 OK (Pass)
- Prueba de si lanza un error cuando no hay ID (Pass)
... (Un festival de lógica global.fetch sobrescrita y sucia)
```

### ✅ Después (Aplicando el cheat code Chaos Monkey)
```text
Resultado:
- [Configuración de MSW completada] Escritura de código defensivo simulando latencia de comunicación de API externa (Timeout 5000ms).
- Validación de lógica de retorno de una UI de respaldo (Fallback) elegante después de 3 reintentos (Retry) ante un HTTP 500 Internal Error.
- Validación del estado de recolección de basura (sin fugas de memoria) y limpieza del servidor MSW tras finalizar la prueba.
- Pruebas de flujo normal (Happy Path) comprimidas en solo 1.
```

---
## 🎯 Conclusión
La IA escupe código exactamente al nivel del prompt que le lances. Producir código basura envuelto en palabras dulces, o construir un escudo robusto que evite el desastre de las 3 de la mañana, depende de las yemas de tus dedos.

Ahora copia este cheat code e insértalo en tu agente. ¡Y vete a casa! 🍷
