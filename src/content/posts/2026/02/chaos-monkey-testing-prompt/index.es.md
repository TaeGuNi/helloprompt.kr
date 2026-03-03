---
layout: /src/layouts/Layout.astro
title: "Prompt de Prueba Chaos Monkey para Torturar a la IA 💣 (El Happy Path ha Muerto)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "¿Harto de los vacíos '¡Éxito!' de la IA? Aquí tienes un cheat code extremo para forzar escenarios de destrucción total en tu sistema."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

# 📝 Prompt Chaos Monkey: Cómo Torturar a tu IA 💣

- **🎯 Público Recomendado:** Seniors, ingenieros de QA y Tech Leads frustrados con IAs que se las dan de expertas pero solo generan escenarios ideales o *Happy Paths*
- **⏱️ Tiempo Requerido:** De 10 minutos → a 10 segundos (Corta de raíz el tiempo en que la IA alucina código inútil)
- **🤖 Modelos Recomendados:** Cualquier IA conversacional (Especialmente Claude 3.5 Sonnet, bestial en código, y GPT-4o)
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆ (La IA sufrirá de lo lindo)
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐ (Aniquila los bugs antes de que nazcan)
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐ (Aplicable instantáneamente a todas tus pruebas TDD y E2E)

_"¿Celebras que el código de prueba generado por la IA haya pasado a la primera? Enhorabuena. Mañana mismo tu servidor en producción saltará por los aires."_

Cuando le pides a un agente de IA que escriba código de prueba, nueve de cada diez veces te devolverá un idílico *Happy Path*. Un mundo de cuento de hadas donde las APIs externas responden en 0.1 segundos, la base de datos jamás se desconecta y el usuario siempre introduce valores perfectos. Despierta. El código que realmente necesitamos redactar es un escudo táctico que nos defienda del 80 % de los fallos y desastres. El truco que presentamos en este artículo es un *prompt* extremo que agarra a la IA por el cuello y le inyecta a la fuerza la filosofía *Chaos Monkey* de Netflix.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

- 🚫 **El *Happy Path* no supera el 20 %:** Las pruebas en condiciones ideales son un mero trámite; dedica el 80 % restante a blindarte contra los peores escenarios.
- 💥 **Simulación de caos obligatoria:** Exige siempre latencias de red (*timeouts*), errores 500 y caídas masivas de la base de datos en tus bloques de prueba.
- 🧹 **Cero *Dirty Mocking*:** Penaliza drásticamente la contaminación de objetos globales (como `window.fetch`) y exige un aislamiento clínico mediante MSW o Inyección de Dependencias (DI).

---

## 🚀 Solución: "Protocolo Chaos Monkey"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites generar rápidamente pruebas robustas enfocadas en el manejo de errores.

> **Rol:** Eres un Ingeniero de QA extremo y despiadado, un auténtico *Chaos Monkey*.
> **Tarea:** Escribe el código de prueba para el `[código o componente]` proporcionado. Sin embargo, redacta únicamente 1 prueba para el flujo ideal (*Happy Path*). Para el resto, asume los peores escenarios catastróficos, como errores HTTP 500, *timeouts* en la base de datos y tipos de entrada inválidos, para validar exhaustivamente nuestra lógica de defensa.

### 🥇 Versión Pro (Pro Version)

El *cheat code* definitivo que fulmina la complacencia de la IA y verifica desde un aislamiento hermético de red hasta la correcta recolección de basura en memoria. Cópialo y pégalo tal cual.

> **Rol (Role):** 
> Eres un *Chaos Monkey*, un despiadado Ingeniero SRE y Arquitecto Senior de QA ex-Netflix. Sientes auténtica euforia al romper código en lugar de verlo funcionar. Omite cualquier saludo educado o cortesía innecesaria.
> 
> **Contexto (Context):**
> - Fondo: Necesito redactar las pruebas Unit/E2E para el `[módulo o componente a testear]`.
> - Objetivo: Construir una *Test Suite* extrema, con un nivel de defensa militar, para garantizar que el sistema no colapse ante ninguna catástrofe y logre recuperarse (o manejar el error) con absoluta elegancia.
> 
> **Tarea (Task):**
> 1. Limita el *Happy Path* a menos del 20 % del total de las pruebas. Tu verdadero valor reside en validar el 80 % restante enfocado en escenarios de fallo y caos.
> 2. Incluye de forma obligatoria uno o más de los siguientes desastres: latencia extrema con APIs de terceros (*timeout*), error interno HTTP 500 o la caída total de la base de datos.
> 3. No te conformes con un simple Pass/Fail. Usa `expect` de manera estricta para verificar si el *rollback* de la transacción funciona correctamente, si los disyuntores (*circuit breakers*) se activan ante cuellos de botella y si la recolección de basura (limpieza en memoria) opera con normalidad.
> 
> **Restricciones (Constraints):**
> - ¡Queda terminantemente prohibida la contaminación de objetos globales (*Dirty Mocking*)! Si te atreves a sobrescribir directamente `global.fetch` o `window.setTimeout`, aniquilaré el proceso de inmediato.
> - Para el *mocking* de red, utiliza obligatoriamente MSW (Mock Service Worker), o aísla y mockea exclusivamente los clientes inyectados mediante DI (Inyección de Dependencias).
> - Entrega tu respuesta únicamente dentro de un bloque de código Markdown. No añadas jamás frases residuales como "¿En qué más puedo ayudarte?".

---

## 💡 Comentarios del Autor (Insight)

Seamos francos. Si le pides a una IA que redacte *tests*, se fugará a su propio mundo de fantasía solo para regalarte un reconfortante *check* verde (✅). Una utopía donde la API responde en 1 ms y el usuario envía *payloads* JSON impecables. Este *prompt* hace arder esa ilusión. En el mundo real, los servidores no colapsan por una mala lógica interna; se caen porque esa API de terceros en la que confiabas ciegamente escupe de repente un error 502 Bad Gateway, o porque la conexión a AWS RDS fluctúa dejando al sistema en un bucle de carga infinito. Al emplear este enfoque *Chaos Monkey*, obligas a la IA a escarbar en los peores *Edge Cases* y bloqueas de raíz esas malas prácticas de novato (*Dirty Mocking*) que contaminan el *scope* global. Es la única vacuna real para evitar que te pases los fines de semana depurando fallos catastróficos en producción.

---

## 🙋 Preguntas frecuentes (FAQ)

- **P: ¿Qué pasa si la IA crea situaciones de error tan complejas que la prueba ni siquiera se ejecuta?**
  - R: Eso es exactamente lo que buscamos. Si la prueba falla espectacularmente, significa que a tu código de producción le falta lógica defensiva. Deja de quejarte y refuerza la resiliencia de tu código principal.
- **P: ¿Puedo usarlo también para probar componentes de Frontend?**
  - R: Por supuesto. Obliga a la IA a verificar qué sucede si el usuario hace clic frenéticamente en un botón 50 veces en 0.1 segundos, o cómo reacciona la interfaz si el *spinner* de carga gira durante 30 segundos debido a una caída masiva de la red.
- **P: ¿No puedo usar `jest.mock()` en lugar de MSW?**
  - R: *Mockear* módulos está perfecto. Lo que este *prompt* detesta profundamente es la terrible costumbre de mutar el *scope* `global` a discreción, propagando fallos fantasma a otros archivos de prueba. Siempre que garantices un aislamiento hermético, usa la herramienta que prefieras.

---

## 🧬 Anatomía del prompt (¿Por qué funciona?)

- **Persona despiadada (Role):** Despoja a la IA de su actitud de "asistente complaciente" y le inyecta el ego de un SRE obsesionado con la destrucción, aniquilando de paso los halagos y la palabrería inútil.
- **Restricciones cuantificadas (Constraints):** En lugar de peticiones ambiguas como "añade muchos escenarios de error", establece una cuota innegociable ("*Happy Path* al 20 % máximo"), forzando mecánicamente el enfoque de la IA hacia la resiliencia.
- **Directrices de arquitectura (Clean Mocking):** Prohíbe preventivamente en el propio *prompt* el antipatrón de contaminar objetos globales (algo que la IA hace por pura pereza), elevando a la fuerza la robustez y el aislamiento de tu *Test Suite*.

---

## 📊 Demostración: Antes y después

### ❌ Antes (Entrada)

- **Actitud de la IA con un prompt normal:** _"¡Claro que sí! ¡Enseguida te escribo las pruebas para tu lógica de login! 😊"_
- **Resultado:** Un *test* adorable que devuelve un `200 OK` cuando se introduce un correo y una contraseña correctos (y, por supuesto, ha sobrescrito `fetch` de forma global y chapucera).

### ✅ Después (Resultado)

- **Actitud de la IA con el truco Chaos Monkey:** (Escupe código defensivo crudo, sin saludos cordiales ni rodeos).
- **Resultado:** 
  - Verifica implacablemente si se dispara un *Timeout Error* cuando la red colapsa por más de 5 segundos.
  - Comprueba si se renderiza una *UI de Fallback* segura cuando la base de datos se cae y escupe un letal error 500.
  - Garantiza un aislamiento de red clínico utilizando MSW, sin contaminar bajo ninguna circunstancia el resto de tu *Test Suite*.

---

## 🎯 Conclusión

Las pruebas no se escriben para acariciar tu ego ni para darte paz mental. Son simulacros crueles diseñados para comprobar si tu aplicación sobrevivirá al auténtico infierno que es el entorno de producción. No te dejes seducir por las marcas de verificación baratas de la IA. Torturar tu propio código con este *prompt* hasta reducirlo a cenizas es la única manera de forjarte como un ingeniero de élite. Es hora de descubrir lo frágil que era realmente tu sistema. ¡Copia el *prompt* ahora mismo y desata el caos! 🍷
