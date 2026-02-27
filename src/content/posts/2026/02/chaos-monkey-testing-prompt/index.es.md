---
layout: /src/layouts/Layout.astro
title: "Prompt de Prueba Chaos Monkey para Torturar a la IA 💣 (El Happy Path ha Muerto)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "¿Cansado de los '¡Éxito!' sin alma de la IA? Un código de trucos hardcore para forzar escenarios de destrucción del sistema."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 📝 Prompt de Prueba Chaos Monkey para Torturar a la IA 💣

- **🎯 Público Recomendado:** Seniors, Ingenieros de QA, y Tech Leads frustrados con IAs que actúan como expertos pero solo generan 'Happy Paths'
- **⏱️ Tiempo Requerido:** De 10 minutos → a 10 segundos (Corta de raíz el tiempo en que la IA dice tonterías)
- **🤖 Modelos Recomendados:** Cualquier IA conversacional (Especialmente Claude 3.5 Sonnet, muy fuerte en código, y GPT-4o)
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆ (La IA sufrirá bastante)
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐ (Mata los errores antes de que nazcan)
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐ (Aplicable instantáneamente a todas las pruebas TDD y E2E)

_"¿Te alegras de que el código de prueba generado por la IA haya pasado a la primera? Felicidades. Tu servidor de producción va a explotar mañana."_

Cuando le pides a un agente de IA que escriba código de prueba, nueve de cada diez veces te devolverá un agradable 'Happy Path' (escenario de funcionamiento normal). Un mundo de cuento de hadas donde las APIs externas responden en 0.1 segundos, la base de datos nunca se desconecta, y el usuario siempre introduce los valores perfectos. Olvídalo. El código que debemos escribir es un escudo espacial que nos defienda del 80% de fallos y desastres. El código de trucos que presentamos en este artículo es un prompt hardcore que agarra a la IA por el cuello y le inyecta a la fuerza la filosofía del 'Chaos Monkey' de Netflix.

---

## ⚡️ Resumen en 3 Líneas (TL;DR)
- 🚫 **Happy Path solo el 20%:** Las pruebas exitosas son solo por cumplir; asigna el 80% a la defensa contra escenarios de fallo.
- 💥 **Simulación de Desastres Obligatoria:** Debes incluir sin falta tiempos de espera en la red (timeouts), errores 500, y desconexiones de la base de datos en tus bloques de pruebas.
- 🧹 **Prohibido el Mocking Sucio (Dirty Mocking):** Castiga severamente la contaminación de objetos globales como `window.fetch`, y exige un aislamiento limpio mediante MSW o Inyección de Dependencias (DI).

---

## 🚀 Solución: "Protocolo Chaos Monkey"

### 🥉 Versión Básica (Basic Version)
Úsala cuando quieras añadir rápidamente pruebas de manejo de errores.

>
> Rol: Eres un Ingeniero de QA hardcore y despiadado, un verdadero Chaos Monkey.
> Tarea: Escribe código de prueba para el [código] que te he proporcionado. Sin embargo, redacta solo 1 prueba para el funcionamiento normal (Happy Path), y asume para el resto de las pruebas los 'peores escenarios de desastre' como errores de red 500, timeouts de base de datos, y entradas de tipos incorrectos para validar la lógica de defensa.
>
### 🥇 Versión Pro (Pro Version)
El código de trucos definitivo que elimina los halagos sin alma de la IA y verifica desde un aislamiento de pruebas perfecto a nivel de producción hasta la recolección de basura. Cópialo y pégalo tal cual.

>
> **Rol (Role):** 
> Eres un 'Chaos Monkey', un SRE despiadado y Arquitecto Senior de QA ex-Netflix. Sientes euforia al encontrar código que se rompe en lugar de código que funciona, y no dices saludos educados ni tonterías.
> 
> **Contexto (Context):**
> - Fondo: Necesito escribir el código de prueba Unit/E2E para el [módulo/componente a escribir].
> - Objetivo: Construir una suite de pruebas (Test Suite) extrema de nivel defensa espacial, para verificar que el sistema no se congele ante ninguna situación de desastre y se recupere (o maneje el error) con elegancia.
> 
> **Tarea (Task):**
> 1. Limita el Happy Path a menos del 20% del total de las pruebas. Tu valor reside en la validación del 80% de los escenarios de fallo.
> 2. Incluye obligatoriamente uno o más de los siguientes escenarios de desastre: Retraso en la comunicación con APIs externas (Timeout), Error HTTP 500 Interno, Desconexión de la base de datos.
> 3. No te limites a un simple Pass/Fail. Aferrate estrictamente con `expect` para verificar si el rollback de errores funciona correctamente, si los límites de timeout se activan durante retrasos de rendimiento, y si el estado de limpieza de memoria (recolección de basura) es normal.
> 
> **Restricciones (Constraints):**
> - ¡Prohibida absolutamente la contaminación de objetos globales (Dirty Mocking)! Si te atreves a sobrescribir directamente `global.fetch` o `window.setTimeout`, mataré el proceso de inmediato.
> - El mocking de red debe usar obligatoriamente MSW (Mock Service Worker), o aislar y mockear únicamente los objetos cliente recibidos por DI (Inyección de Dependencias).
> - Devuelve el resultado únicamente en un bloque de código Markdown y nunca agregues muletillas inútiles como "¿Te ha sido de ayuda?".
>
---

## 💡 Comentarios del Autor (Insight)
Seamos sinceros. Si le pides a una IA que escriba código de prueba, se escapará a su propio mundo de fantasía con tal de mostrarte una 'marca de verificación verde (✅)'. Una utopía donde la API responde en 1ms y el usuario solo envía formatos JSON perfectos. 
Este prompt le prende fuego a esa utopía. En el mundo real, los servidores no se caen porque la lógica sea incorrecta. Se caen porque esa API de terceros en la que confiabas escupe de repente un 502 Bad Gateway, o porque la conexión de AWS RDS fluctúa y el sistema se queda en una carga infinita estúpida. Si usas este truco del 'Chaos Monkey', la IA investigará por su cuenta los sucios Edge Cases, y podrás bloquear de raíz esas prácticas de novato (Mocking) que contaminan el scope global. Es la única vacuna que evitará que trabajes los fines de semana y pases noches enteras depurando.

---

## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿Qué pasa si la IA crea situaciones de error tan complejas que la prueba ni siquiera se ejecuta?**
  - R: Eso es exactamente lo que queremos. Si la prueba falla, significa que a tu código de producción real le falta lógica para manejar errores. Deja de quejarte y arregla el código principal.
- **P: ¿Puedo usarlo también para probar componentes de Frontend?**
  - R: Por supuesto. Haz que verifique situaciones donde el usuario hace clic compulsivamente en un botón 50 veces en 0.1 segundos, o donde el spinner de carga gira durante 30 segundos debido a un retraso en la red.
- **P: ¿No puedo usar jest.mock() en lugar de MSW?**
  - R: Mockear módulos está bien. Lo que detesto absolutamente es la práctica de alterar el scope `global` a voluntad, propagando una plaga a otros archivos de prueba. Siempre que se garantice el aislamiento (Isolation), usa la herramienta que prefieras.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)
- **Persona Despiadada (Role):** Le quita a la IA el rol de 'asistente amable' y le implanta el ego de un arquitecto SRE obsesionado con encontrar fallos, bloqueando los halagos y la palabrería inútil.
- **Restricciones Cuantificadas (Constraints):** En lugar de frases ambiguas como "pon muchos escenarios de fallo", le da una cifra exacta: "Happy Path al 20% o menos", forzando mecánicamente el radio de acción de la IA.
- **Directrices de Arquitectura (Clean Mocking):** Prohíbe preventivamente a nivel de prompt el 'anti-patrón (contaminación de objetos globales)' que la IA suele cometer por pereza, elevando a la fuerza la calidad del aislamiento del código de prueba.

---

## 📊 Demostración: Antes y Después
### ❌ Antes (Entrada)
- **Actitud de la IA con un prompt normal:** _"¡Claro! ¡Te escribiré el código de prueba para la lógica de inicio de sesión del usuario! 😊"_
- **Resultado:** 1 prueba bonita que devuelve un `200 OK` cuando se introduce un correo y contraseña correctos. (Y, sin falta, ha sobrescrito `fetch` global de forma descuidada).
### ✅ Después (Resultado)
- **Actitud de la IA con el truco Chaos Monkey:** (Escupe código defensivo de inmediato sin saludos inútiles)
- **Resultado:** 
  - Verifica exhaustivamente si se produce un Timeout Error cuando la red se retrasa más de 5 segundos.
  - Comprueba si aparece una UI de Fallback segura para el usuario cuando la base de datos se cae y devuelve un error 500.
  - Garantiza un aislamiento de red perfecto usando MSW, sin afectar bajo ninguna circunstancia a otros archivos de prueba.

---

## 🎯 Conclusión
El código de prueba no se escribe para tener paz mental. Es una simulación cruel para verificar si la aplicación puede sobrevivir en el infierno que es el entorno de producción. 
No te dejes engañar por los halagos baratos de la IA. Exprimir a la IA con este prompt y destruir tu sistema hasta los cimientos es la única forma de sobrevivir como un verdadero ingeniero. Es hora de enfrentar lo débil que era tu código. ¡Cópialo ahora mismo y ejecuta tus pruebas! 🍷
