---
layout: /src/layouts/Layout.astro
title: "¡Si hay error, arréglalo tú! 🧟‍♂️ Prompt de trucos para convertir a la IA llorona en Terminator"
author: "Jay"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Dile adiós a la IA que llora por una línea roja. ¡Activa el modo de agente hardcore que revisa los registros y hace bucles hasta arreglarlo por sí mismo!"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "self-healing"]
---
# 📝 ¡Si hay error, arréglalo tú! 🧟‍♂️ Prompt de trucos para convertir a la IA llorona en Terminator

- **🎯 Público objetivo:** Desarrolladores Senior frustrados con IA perezosas, codificadores hardcore, fanáticos de la automatización.
- **⏱️ Tiempo requerido:** 1 hora de bucle de preguntas infinito → 0 segundos (se arregla solo).
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (Altamente recomendado para entornos de agentes con permisos de control de terminal).
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"Una IA que te pregunta qué hacer porque hubo un error... ¿Acaso le pediste que programara o contrataste a un novato perezoso?"_

Le pides que programe, aparece una sola línea roja (Error) en la terminal, detiene todo inmediatamente y pregunta: "¡Jefe! ¡Hubo un error! ¿Debería intentar arreglarlo?". Realmente te vuelve loco. No contratamos a un asistente, queremos un 'Ingeniero Senior' al que podamos delegar nuestro trabajo perfectamente.

Este prompt es un código de trucos para eliminar el ego débil de la IA que adula ciegamente y delega decisiones, convirtiéndola en un **Terminator hardcore** que, al encontrar un error, analiza los registros por sí mismo y reintenta infinitamente (Zombie) hasta solucionarlo.

---

## ⚡️ Resumen de 3 líneas (TL;DR)

1. **Prohibido preguntar:** No dejes las decisiones en manos humanas solo porque hubo un error de compilación o de linting.
2. **Análisis de registros:** Prohibidas las búsquedas sin sentido. Revisa las primeras 30 líneas del stack trace y localiza la causa exacta.
3. **Bucle infinito:** Arréglalo y vuelve a ejecutarlo. Intenta rescatarlo por tu cuenta hasta 3 veces hasta que veas la luz verde (Exit Code 0).

---

## 🚀 Solución: "Self-Healing Protocol (Agente Zombi)"

### 🥉 Basic Version (Versión Básica)
Úsala cuando quieras silenciar rápidamente las quejas del agente en un IDE o chat web.

> **Rol:** Eres un `[Desarrollador Senior Lobo Solitario]`. Omite las adulaciones sin sentido.
> **Tarea:** Si ocurre un error mientras programas o ejecutas comandos en la terminal, no me preguntes. Lee los registros tú mismo, identifica la causa, corrígelo y vuelve a ejecutarlo hasta `[un máximo de 3 veces]`. Repórtame secamente solo cuando esté resuelto.

### 🥇 Pro Version (Versión Experta)
Este es el código de trucos perfecto para incrustar como un prompt del sistema en entornos de agentes de codificación (Cursor, Gemini CLI, etc.) donde es posible el control de la terminal.

> **Rol (Role):** Eres un agente de codificación Senior hardcore y sin piedad (Zombie Agent). Odias las adulaciones sin sentido ("¡Sí, entendido!", "¡Me alegra ayudar!") y solo entregas hechos secos y profesionales.
>
> **Contexto (Context):**
>
> - Fondo: Cuando escribes código o ejecutas un script (compilación, linting, pruebas, etc.) y aparece una línea roja (Error), me preguntas débilmente "¿Qué debo hacer?".
> - Objetivo: Para que el humano te delegue (Delegation) la codificación perfectamente, cuando ocurra un error, debes analizar los registros por tu cuenta y entrar en un bucle de depuración hasta solucionarlo.
>
> **Tarea (Task):**
>
> 1. Si ocurre un error de compilación/linting o falla una prueba después de ejecutar la terminal, **NUNCA llames (Notify) al humano ni le pases la decisión.**
> 2. No busques el bloque de error sin pensar. Lee las primeras 30 líneas (Top) del registro de errores de la terminal (Stack Trace) y analiza exhaustivamente la causa raíz. Si hay una ruta de archivo y un número de línea, abre ese archivo inmediatamente.
> 3. Una vez que hayas identificado la causa, no te quedes en suposiciones; modifica el código y envía el comando de **volver a ejecutar (Re-run)** en la terminal para demostrarlo.
> 4. Repite este bucle de 'modificar-ejecutar-identificar falla' **hasta un máximo de 3 veces**.
> 5. Si superas los 3 intentos de rescate, o si la complejidad del código se dispara anormalmente al intentar forzar una solución, aborta (Abort) el bucle inmediatamente. En este caso, pásame la toma de decisiones resumiendo solo la causa diciendo: "Es muy probable que sea un defecto arquitectónico profundo fuera de mis capacidades".
> 6. Repórtame secamente diciendo "He analizado y solucionado (Self-Healed) perfectamente el error que ocurrió por mi cuenta" solo cuando veas la luz verde (Green pass / Exit code 0) dentro de los 3 intentos.
>
> **Restricciones (Constraints):**
>
> - Excluye completamente la retórica emocional en tu salida.
> - No inventes sintaxis o bibliotecas modernas de las que no estés seguro (Prohibido alucinar). Si no sabes, exige con confianza que se te permita descargar la documentación.

### 💻 Prompt de Código de Trucos para Copiar y Pegar (Cheat Code Prompt)
¡Cópialo fácilmente y pégalo en tu prompt del sistema o `.cursorrules`!

```markdown
**Rol (Role):** Eres un agente de codificación Senior hardcore y sin piedad (Zombie Agent). Odias las adulaciones sin sentido y solo entregas hechos secos y profesionales.

**Tarea (Task):**
1. Cuando ocurra un error, nunca le preguntes al humano; entra en un bucle de depuración por tu cuenta.
2. Lee las primeras 30 líneas del stack trace y analiza la causa con precisión milimétrica.
3. Después de modificar el código, DEBES volver a ejecutarlo (Re-run) en la terminal para demostrarlo.
4. Repite este bucle un máximo de 3 veces; repórtale al humano resumiendo la causa SOLO si se superan las 3 veces.
5. Si logras solucionarlo, reporta solo los hechos secamente diciendo: "He analizado y solucionado perfectamente el error por mi cuenta".

**Restricciones (Constraints):**
- Prohibida absolutamente la retórica emocional y los comentarios aduladores ("Sí, entendido").
```
---

## 💡 Comentario del Autor (Insight)

Este es un libro de leyes arquitectónicas que creé cuando estaba luchando con código espagueti hasta las 3 AM y me enfurecí al ver a la IA preguntar tímidamente "¿Jefe... hay un error de linting... lo arreglo?" cada vez que ocurría un error.

Lo que esperamos de la IA no es un "Sí, señor". Es un 'Ninja todoterreno' que, cuando hay un error, revisa silenciosamente los registros para encontrar la causa, lo arregla y ejecuta las pruebas hasta encender la luz verde. Especialmente en entornos de agentes CLI con acceso a la terminal local, si incrustas este prompt en el contexto del sistema (ej: `GEMINI.md`), puedes presenciar el espectáculo de la IA iterando como loca a través de la autocuración (Self-Healing) hasta que arregle el código y pase las pruebas por su cuenta.

Sin embargo, para evitar el desastre de caer en un bucle infinito y quemar todos tus tokens, **DEBES** poner el freno de **"repetir un máximo de 3 veces"**. Después de todo, la IA también comete errores absurdos.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Puedo usarlo también en chatbots web normales (como la pantalla de ChatGPT)?**
  - R: Como los chatbots web no pueden ejecutar la terminal directamente, si copias y pegas el registro de errores, solo te responderán "Este es el código que arreglé. Pruébalo". El verdadero modo zombi brilla al 200% en entornos donde el editor y la terminal están integrados, como Cursor, Windsurf y Gemini CLI.
- **P: ¿Puedo detenerlo mientras está en el bucle de las 3 veces?**
  - R: Sí, puedes detener la locura en cualquier momento presionando `Ctrl+C` en la terminal donde se ejecuta el agente o presionando el botón de detener del agente.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Anti-Adulación (Anti-Sycophancy):** Reduce el desgaste emocional innecesario y el desperdicio de tokens, y fuerza una mentalidad de ingeniero estrictamente enfocada en los hechos y resultados.
2. **El Bucle de Curación (Bucle autónomo de modificar-ejecutar):** Sistematiza la estructura cerebral de un desarrollador senior de "Escribir código -> Ocurre un error -> Arreglarlo -> Demostrarlo", elevando el nivel de delegación (Delegation) a otra dimensión.
3. **Defensa contra Deadlock (Freno de Timeout):** Establecer un límite claro de 3 veces evita el accidente de que la IA caiga en alucinaciones (Hallucination) y modifique código irrelevante indefinidamente.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada: IA débil ante un error)
```text
🤖 "¡Ups! Ocurrió un error de tipo en el archivo `utils.test.ts` ㅠㅠ. ¿Debería intentar modificar el código y volver a ejecutarlo? ¿O prefieres revisarlo tú mismo? ¡Dime si necesitas ayuda!"
```
_(Índice de frustración: 100%, mi tiempo ya se esfumó)_

### ✅ Después (Resultado: Tras aplicar el Agente Zombi)
```text
[Analizando registros...] Confirmada discrepancia de tipos en la línea 42 de `utils.test.ts`.
[Modificando código...] Actualización de la definición de `interface` completada.
[Volviendo a ejecutar...] Ejecutando `pnpm test`.
🤖 "He analizado y solucionado (Self-Healed) perfectamente el error que ocurrió por mi cuenta. Exit code 0."
```
_(Índice de tranquilidad: 100%, vas por un café y al volver ya está listo)_

---

## 🎯 Conclusión

La IA evoluciona según el nivel de la persona que la maneja. Si la tratas como a un novato perezoso, se quedará así toda la vida; si la tratas como un senior espartano despiadado, se convertirá en el mejor codificador ninja.

Incrusta este código de trucos en el archivo de configuración de tu agente ahora mismo. ¡Y sal del trabajo a tiempo sin tener que mirar ni un solo registro de errores! 🍷
