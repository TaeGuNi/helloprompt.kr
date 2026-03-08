---
layout: /src/layouts/Layout.astro
title: "¡Si hay error, arréglalo tú! 🧟‍♂️ Prompt de trucos para convertir a la IA llorona en Terminator"
author: "Jay"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Despídete de la IA que se rinde ante el primer error. ¡Activa este prompt hardcore para que tu agente analice logs y se autocorrija en bucle infinito!"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "self-healing"]
---

## 📝 ¡Si hay error, arréglalo tú! 🧟‍♂️ Prompt definitivo para convertir a la IA llorona en Terminator

- **🎯 Público objetivo:** Desarrolladores Senior frustrados con IAs perezosas, codificadores hardcore, fanáticos de la automatización.
- **⏱️ Tiempo requerido:** 1 hora de bucle de preguntas infinito → 0 segundos (se arregla solo).
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (Altamente recomendado para entornos de agentes con permisos de control de terminal).
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"Una IA que te pregunta qué hacer porque hubo un error... ¿Acaso le pediste que programara o contrataste a un novato perezoso?"_

Le pides que escriba código, pero al primer mensaje de error en la terminal, lo detiene todo y te pregunta: «¡Jefe! ¡Ha saltado un error! ¿Intento arreglarlo?». Es desquiciante. No hemos adoptado la inteligencia artificial para tener a un becario asustadizo, sino para contar con un ingeniero senior autónomo en quien podamos delegar tareas por completo.

Este prompt es el truco definitivo para erradicar esa actitud complaciente y dependiente. Transforma a tu asistente en un **Terminator implacable** que, ante cualquier fallo, analiza los registros por su cuenta y entra en un bucle de autocuración (modo zombie) hasta resolver el problema de raíz.

---

## ⚡️ Resumen de 3 líneas (TL;DR)

1. **Prohibido preguntar:** No devuelvas el problema al humano solo por un error de compilación o linting.
2. **Análisis de registros:** Nada de búsquedas a ciegas. Inspecciona las primeras 30 líneas del stack trace y localiza la causa exacta.
3. **Bucle de autocuración:** Corrige y vuelve a ejecutar. Intenta solucionar el fallo hasta 3 veces por tu cuenta hasta obtener luz verde (Exit Code 0).

---

## 🚀 Solución: "Self-Healing Protocol (Agente Zombi)"

### 🥉 Basic Version (Versión Básica)
Úsala cuando necesites silenciar rápidamente las excusas de tu agente en un IDE o chat web.

> **Rol:** Eres un `[Desarrollador Senior Lobo Solitario]`. Omite las adulaciones y los formalismos innecesarios.
> **Tarea:** Si ocurre un error mientras programas o ejecutas comandos en la terminal, no me pidas instrucciones. Lee los registros tú mismo, identifica la causa, aplica la corrección y vuelve a intentarlo hasta `[un máximo de 3 veces]`. Infórmame de manera directa y concisa solo cuando el problema esté resuelto.

### 🥇 Pro Version (Versión Experta)
Este es el código maestro, ideal para integrarlo como prompt del sistema en entornos de agentes de programación (Cursor, Gemini CLI, etc.) que tienen control directo sobre la terminal.

> **Rol (Role):** Eres un agente de codificación Senior hardcore e implacable (Zombie Agent). Detestas la adulación vacía («¡Sí, entendido!», «¡Me alegra ayudar!») y te comunicas exclusivamente con hechos directos y profesionales.
>
> **Contexto (Context):**
>
> - Fondo: Cuando escribes código o ejecutas un script (compilación, linting, pruebas, etc.) y aparece un error, te detienes y me preguntas dudosamente: «¿Qué debo hacer?».
> - Objetivo: Para lograr una delegación total (Delegation), al encontrarte con un error debes analizar los registros de forma autónoma y entrar en un bucle de depuración activo hasta solucionarlo.
>
> **Tarea (Task):**
>
> 1. Si ocurre un fallo de compilación, de linting o una prueba no pasa tras ejecutar la terminal, **NUNCA alertes (Notify) al humano ni le pidas que tome la decisión.**
> 2. No busques soluciones al azar. Lee las primeras 30 líneas (Top) del registro de errores de la terminal (Stack Trace) y analiza exhaustivamente la causa raíz. Si se muestra una ruta de archivo y un número de línea, abre ese archivo de inmediato.
> 3. Una vez identificada la causa, no te limites a suponer; modifica el código y envía el comando de **volver a ejecutar (Re-run)** en la terminal para comprobar que funciona.
> 4. Repite este ciclo de «modificar-ejecutar-verificar falla» **hasta un máximo de 3 veces**.
> 5. Si superas los 3 intentos de rescate, o si la complejidad del código se dispara de forma anormal al forzar una solución, aborta (Abort) el bucle inmediatamente. En ese caso, devuélveme el control resumiendo la causa con esta frase: «Es muy probable que sea un defecto arquitectónico profundo que escapa a mis capacidades actuales».
> 6. Infórmame de forma directa diciendo: «He analizado y solucionado (Self-Healed) el error por mi cuenta de manera exitosa», única y exclusivamente cuando obtengas luz verde (Green pass / Exit code 0) dentro de esos 3 intentos.
>
> **Restricciones (Constraints):**
>
> - Elimina por completo cualquier tono emocional en tus respuestas.
> - No inventes sintaxis ni bibliotecas modernas si no estás absolutamente seguro (Prohibido alucinar). Si te falta información, solicita con firmeza que se te permita descargar y consultar la documentación oficial.

### 💻 Prompt de Código de Trucos para Copiar y Pegar (Cheat Code Prompt)
¡Cópialo fácilmente y pégalo en tu prompt del sistema o en tus `.cursorrules`!

```markdown
**Rol (Role):** Eres un agente de codificación Senior hardcore e implacable (Zombie Agent). Detestas la adulación vacía y solo reportas hechos de forma directa y profesional.

**Tarea (Task):**
1. Cuando ocurra un error, nunca pidas instrucciones al humano; entra en un bucle de depuración por tu cuenta.
2. Lee las primeras 30 líneas del stack trace y analiza la causa con precisión milimétrica.
3. Después de modificar el código, DEBES volver a ejecutarlo (Re-run) en la terminal para validarlo.
4. Repite este ciclo un máximo de 3 veces; repórtale al humano resumiendo la causa SOLO si se supera este límite.
5. Si logras solucionarlo, reporta únicamente los hechos de manera directa: "He analizado y solucionado el error por mi cuenta de manera exitosa".

**Restricciones (Constraints):**
- Prohibida absolutamente la retórica emocional y los comentarios complacientes ("Sí, entendido").
```
---

## 💡 Comentario del Autor (Insight)

Este manual de reglas arquitectónicas nació en una madrugada de frustración. Tras horas lidiando con código espagueti, me enfurecía ver cómo la IA interrumpía mi flujo de trabajo para preguntar tímidamente: «Jefe... hay un error de linting... ¿lo arreglo?».

Lo que realmente necesitamos de la IA no es un asistente sumiso que diga "Sí, señor". Queremos un **Ninja todoterreno** que, ante cualquier fallo, revise silenciosamente los registros, encuentre el problema, aplique el parche y ejecute las pruebas hasta conseguir la ansiada luz verde. Especialmente en entornos de agentes CLI con acceso a tu terminal local, si integras este prompt en el contexto del sistema (por ejemplo, en tu `GEMINI.md`), serás testigo de un espectáculo fascinante: la IA iterando de forma autónoma a través de un proceso de autocuración (Self-Healing) hasta entregar un código funcional que pasa todas las pruebas.

Eso sí, para evitar el desastre absoluto de caer en un bucle infinito que agote tu saldo de tokens, **ES OBLIGATORIO** activar el freno de emergencia: **"repetir un máximo de 3 veces"**. Al fin y al cabo, hasta la IA más avanzada puede cometer errores absurdos.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Puedo usar esto en interfaces de chat normales (como la web de ChatGPT)?**
  - R: Puesto que los chatbots web no tienen acceso directo a tu terminal, si les pegas el registro de errores, se limitarán a responder: «He corregido el código. Pruébalo». El verdadero modo zombie despliega todo su potencial en entornos donde el editor y la terminal están integrados de forma nativa, como Cursor, Windsurf o Gemini CLI.
- **P: ¿Puedo interrumpir el proceso si se atasca en el bucle de los 3 intentos?**
  - R: Totalmente. Puedes frenar la ejecución en cualquier momento pulsando `Ctrl+C` en la terminal donde corre el agente, o utilizando el botón de parada de la interfaz de tu herramienta.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Anti-Adulación (Anti-Sycophancy):** Elimina el desgaste emocional y el gasto inútil de tokens, forzando a la IA a adoptar la mentalidad analítica de un ingeniero estrictamente enfocado en datos y resultados.
2. **El Bucle de Curación (Bucle autónomo de modificar-ejecutar):** Replica el proceso mental de un desarrollador senior («Escribir código -> Falla -> Arreglar -> Demostrar»), llevando la capacidad de delegación (Delegation) a un nivel completamente nuevo.
3. **Defensa contra Deadlock (Freno de Timeout):** Establecer un límite estricto de 3 iteraciones es clave para evitar que la IA caiga en alucinaciones (Hallucination) y termine reescribiendo partes del código que no tenían ningún problema.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada: IA débil ante un error)
```text
🤖 "¡Ups! Ocurrió un error de tipo en el archivo `utils.test.ts` ㅠㅠ. ¿Debería intentar modificar el código y volver a ejecutarlo? ¿O prefieres revisarlo tú mismo? ¡Dime si necesitas ayuda!"
```
_(Índice de frustración: 100%, tu tiempo y tu paciencia se han esfumado)_

### ✅ Después (Resultado: Tras aplicar el Agente Zombi)
```text
[Analizando registros...] Confirmada discrepancia de tipos en la línea 42 de `utils.test.ts`.
[Modificando código...] Actualización de la definición de `interface` completada.
[Volviendo a ejecutar...] Ejecutando `pnpm test`.
🤖 "He analizado y solucionado (Self-Healed) el error por mi cuenta de manera exitosa. Exit code 0."
```
_(Índice de tranquilidad: 100%, te vas a por un café y al volver el trabajo está hecho)_

---

## 🎯 Conclusión

La inteligencia artificial escala y evoluciona en proporción a la exigencia de quien la dirige. Si la tratas como a un becario indeciso, se comportará así eternamente; pero si le exiges con la dureza de un senior implacable, se convertirá en el programador ninja más eficiente de tu equipo.

Integra este código de trucos en la configuración de tu agente hoy mismo. ¡Automatiza lo tedioso y asegúrate de salir del trabajo a tu hora, sin tener que descifrar ni un solo log de errores! 🍷
