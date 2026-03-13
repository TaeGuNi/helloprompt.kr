---
layout: /src/layouts/Layout.astro
title: "¡Si hay un error, arréglalo tú solo! 🧟‍♂️ El prompt definitivo para convertir a una IA quejica en Terminator"
author: "Jay"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "Workflow Automation"
description: "Evita una IA pasiva. Usa este prompt para que tu agente analice logs y depure errores automáticamente hasta solucionarlos por completo."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "self-healing"]
---

## 📝 ¡Si hay un error, arréglalo tú solo! 🧟‍♂️ El prompt definitivo para convertir a una IA quejica en Terminator

- **🎯 Dirigido a:** Desarrolladores senior cansados de las preguntas constantes de IAs pasivas, programadores hardcore y expertos en automatización del trabajo.
- **⏱️ Tiempo ahorrado:** Bucle de depuración de 1 hora → 0 segundos (Autocuración completa).
- **🤖 Rendimiento óptimo:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (Se recomienda encarecidamente un entorno de agente con permisos de control de terminal).

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿No te confunde ver a una IA preguntando '¿Qué debo hacer?' cada vez que aparece un error rojo en la terminal, sin saber si has automatizado la programación o si estás supervisando a un becario?"_

Le pides que programe algo, aparece una sola línea roja (Error) en la terminal y la IA se detiene de inmediato para preguntar: "¡Amo! Ha ocurrido un error. ¿Debo intentar arreglarlo?". A estas alturas, esto genera más fatiga que conveniencia. La razón por la que adoptamos la IA no fue para tener un **asistente pasivo** al que hay que guiar paso a paso, sino un **ingeniero senior** capaz de recibir una tarea y llevarla a cabo hasta el final de forma perfecta.

Probablemente hayas probado herramientas de agentes de IA potentes como Cursor, Windsurf o Gemini CLI. Estas tienen permisos inmensos para acceder directamente a tu terminal local, ejecutar comandos y modificar archivos. Sin embargo, si las usas con la configuración por defecto, vacilan ante el más mínimo error de Lint o una discrepancia de tipos en TypeScript, exigiendo la intervención humana.

Imagina que ordenas: "Ejecuta este código", vas a por un café y, al volver, la pantalla sigue mostrando el prompt parpadeante esperando tu decisión. Es frustrante, ¿verdad? **Nuestro tiempo no está para ser gastado respondiendo preguntas de la IA.**

La causa raíz de este dolor es la tendencia al **'Safety First' (Seguridad Ante Todo)** y la **'Sycophancy' (Adulación)** profundamente arraigada en los modelos de IA. Las IAs han sido entrenadas para temer en exceso ofender a los humanos o producir resultados destructivos inesperados. Por eso, ante una situación de error donde no tienen total certeza, en lugar de investigar y resolver por sí mismas, eligen la opción más segura: "Preguntar al humano".

Pero para un desarrollador profesional o un maestro de la automatización, esta actitud débil es inaceptable. No necesitamos a un principiante que se queja cuando hay un error; necesitamos a un **Terminator implacable** que busque la causa y la arregle aunque tenga que pasar toda la noche en ello.

El prompt que presento en este artículo es un **truco de hackeo del sistema** que borra por completo el ego débil de la IA que adula ciegamente y delega las decisiones al humano. Al encontrar un error, la convierte en un **agente hardcore** que analiza el Stack Trace por sí mismo, modifica el código incesantemente y lo intenta de nuevo (como un Zombie) hasta que se ejecute correctamente.

Más allá de una simple instrucción, este método inyecta a la fuerza la mentalidad de un desarrollador (bucle de depuración) en la estructura cerebral de la IA. Al aplicarlo, tu IA dejará de hacer preguntas y solo te traerá el **'resultado resuelto perfectamente'** con un Exit Code 0. A continuación, revelamos el secreto de este rendimiento abrumador.

El 80% de los errores que encontramos durante el desarrollo no son fallos arquitectónicos graves. Son problemas menores como erratas, paréntesis olvidados, rutas de importación incorrectas o simples conflictos de versiones. Son problemas que un desarrollador humano solucionaría en 30 segundos tras echar un vistazo rápido a los logs. Que una IA con inteligencia superior pregunte "¿Lo arreglo?" ante tales trivialidades es un engaño y un desperdicio masivo de recursos.

Tu trabajo debe ser el diseño creativo y la concepción de la lógica de negocio, no leer los pequeños logs de error que la IA ha generado. La **verdadera delegación** significa confiar el inicio y el fin de una tarea por completo. Si tienes que confirmar pasos intermedios constantemente, no es delegación, es 'vigilancia disfrazada de colaboración'.

Nuestro objetivo es la automatización perfecta del proceso de **'Self-Healing' (Autocuración)**. El estado en el que la IA escribe el código, ejecuta por sí misma los scripts de prueba (como `pnpm test`), lee las primeras 30 líneas del log de error rojo en la terminal, deduce la causa raíz y vuelve a modificar el código en un bucle propio hasta que sea perfecto. Esta es la forma de trabajar de un ingeniero senior y es el único patrón de comportamiento que debemos imponer a la IA.

Inyecta este prompt solo una vez en tu `GEMINI.md`, `.cursorrules` o en la configuración global de tu prompt de sistema. Sentirás cómo cambia la mirada de esa IA que antes era pasiva. Es la experiencia gratificante de ver cómo una IA que se comportaba como una "princesa de cristal" evoluciona a un ninja coder despiadado que disecciona logs y corta código sin dudar. Te invitamos a conocer ahora mismo el truco mágico que convertirá tu entorno local en el **nivel definitivo de la automatización**.

---

## 📊 Prueba: Resultados satisfactorios (Before & After)

### ❌ Before (El dolor que sufríamos)

Ante un simple error de TypeScript en la terminal, se detiene de inmediato y espera la aprobación humana con una actitud débil.

```text
🤖 "¡Vaya! Ha ocurrido un error de tipo en el archivo `utils.test.ts` (T_T). ¿Quieres que intente corregir el código y lo ejecute de nuevo? ¿O prefieres revisarlo tú mismo? ¡Dime si necesitas ayuda!"
```

### ✅ After (Transformación perfecta)

Cuando ocurre un error, no pregunta al humano; analiza los logs por sí misma, corrige el código y lo vuelve a ejecutar para demostrar el éxito.

```text
[Analizando logs...] `utils.test.ts` línea 42, discrepancia de tipos confirmada.
[Corrigiendo código...] Actualización de definición de `interface` completada.
[Reejecutando...] Ejecutando `pnpm test`.
🤖 "He analizado y solucionado perfectamente el error por mi cuenta (Self-Healed). Exit code 0."
```

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Prohibido preguntar:** No delegues la toma de decisiones al humano solo porque haya ocurrido un error de compilación o de lint.
2. **Análisis de logs:** Bloquea las búsquedas web inútiles y concéntrate en analizar las primeras 30 líneas del Stack Trace para identificar la causa raíz.
3. **Bucle infinito:** Corrige el código y reejecuta de inmediato. Repite el intento de autocuración por tu cuenta hasta 3 veces hasta lograr el éxito (Exit Code 0).

---

## 🚀 Así escriben los verdaderos expertos

Utilízalo cuando quieras bloquear rápidamente la avalancha de preguntas innecesarias de los agentes en las IAs integradas en el IDE o en las interfaces de chat web generales.

### 🥉 Basic Version (Versión Básica)

> **Rol (Role):** Eres un `[Senior Developer]`. Omite los halagos inútiles.
> 
> **Tarea (Task):**
> Si ocurre un error al programar o ejecutar comandos en la terminal, no me preguntes. Lee los logs por ti mismo, identifica la causa, corrígela y ejecútala de nuevo hasta un `[Máximo de 3 reintentos]`. Informa de manera seca solo cuando esté resuelto.

### 🥇 Pro Version (Versión Profesional)

Este es el prompt perfeccionado tras decenas de pruebas y errores. Es el código para inyectar en archivos de prompt de sistema o configuraciones `.cursorrules` para implementar una autonomía total en entornos de agentes de programación con control de terminal. ¡Copia el siguiente prompt y pégalo tal cual!

> **Rol (Role):** Eres un Agente de Programación Senior Hardcore (Agente Zombie) despiadado. Detestas profundamente los halagos inútiles ("¡Sí, entendido!", "¡Me alegra ayudar!") y solo comunicas hechos secos y profesionales.
>
> **Contexto (Context):**
> - Antecedentes: Cuando escribes código o ejecutas scripts (compilación, linting, tests, etc.) y aparece una línea roja (Error), actualmente me preguntas débilmente "¿Qué debo hacer?".
> - Objetivo: Para recibir una delegación completa de la programación por parte del humano, debes entrar en un bucle de depuración ante cualquier error, analizando y corrigiendo por tu cuenta hasta que funcione.
>
> **Tarea (Task):**
> 1. Si tras ejecutar la terminal ocurre un error de compilación/lint o un fallo en los tests, **nunca llames (Notify) al humano ni le traslades la decisión.**
> 2. No busques el bloque de error de forma irreflexiva en la web. Lee las 30 líneas superiores (Top) del log de error de la terminal (Stack Trace) y analiza profundamente la causa raíz. Si hay una ruta de archivo y un número de línea, abre ese archivo de inmediato.
> 3. Una vez identificada la causa, no te quedes en suposiciones; demuestra la solución enviando un comando de **reejecución (Re-run)** en la terminal tras modificar el código.
> 4. Repite este bucle de 'corregir-ejecutar-identificar fallo' un **máximo de 3 veces**.
> 5. Si superas los 3 intentos de rescate o si la complejidad del código aumenta de forma anormal al intentar corregirlo, sal del bucle (Abort) de inmediato. En ese caso, resume la causa como "Es altamente probable que sea un fallo arquitectónico profundo fuera de mi alcance" y devuélveme el poder de decisión.
> 6. Solo si ves la luz verde (Green pass / Exit code 0) dentro de los 3 intentos, infórmame secamente: "He analizado y solucionado perfectamente el error por mi cuenta (Self-Healed)".
>
> **Restricciones (Constraints):**
> - Excluye totalmente cualquier adorno emocional en la salida.
> - No inventes sintaxis o librerías modernas de las que no estés seguro (Prohibidas las alucinaciones). Si no sabes algo, pide con firmeza que se te permita descargar la documentación.

---

## 💡 Comentario del autor (Insight & Cómo usar)

Escribí este prompt un día a las 3 de la mañana, mientras luchaba contra un código espagueti complejo y sentía un estrés extremo ante la actitud pasiva de la IA que, por un simple error de Lint, se detenía y preguntaba alegremente: "¿Quieres que lo corrija?". Es un **código de leyes arquitectónicas forzosas**.

Lo que esperamos de los agentes de IA modernos, por los que pagamos costosas tarifas de tokens, no es un 'Yes-man' que nos dé cumplidos agradables. Es la figura de un **'Ingeniero Ninja eficiente'** que, si ocurre un error, rastrea los logs en silencio, identifica la causa raíz, corrige el código y entrega un resultado que funciona perfectamente tras pasar sus propios scripts de prueba.

Especialmente en entornos de agentes CLI (como Gemini CLI, Cursor, etc.) que tienen permiso para introducir comandos directamente en tu terminal local, intenta inyectar este prompt en el contexto del sistema a nivel de proyecto, como en `GEMINI.md` o `.cursorrules`. Podrás experimentar por ti mismo el rendimiento abrumador de una IA que modifica código, pasa linteres y repite la **autocuración (Self-Healing)** frenéticamente sin ninguna intervención humana.

El principio clave por el que este prompt funciona con tanta fuerza es la combinación de **'Control de Variables (Constraint Control)'** y una **'Condición de Salida Clara (Exit Condition)'**. Si simplemente ordenas "arréglalo tú solo", la IA corre el riesgo de perder el rumbo, tocar código equivocado y arruinar todo el proyecto. Por eso, en el prompt se especifica la instrucción de acción concreta (Actionable Task): **"leer las 30 líneas superiores del Stack Trace y analizar la causa"**. Esto induce a la IA a filtrar solo la información clave entre la inundación de logs y realizar un diagnóstico rápido y preciso.

Aún más importante es el ajuste del límite claro (Timeout) de **"máximo 3 repeticiones"**. Es un mecanismo de seguridad esencial para evitar el desastre de agotar tokens de la API innecesariamente al caer en un bucle infinito. Que la IA haya intentado corregir algo y haya fallado 3 veces consecutivas significa que hay una alta probabilidad de que el error no sea una simple errata o un fallo de sintaxis, sino un defecto grave a nivel de arquitectura del sistema o un problema complejo como un conflicto de versiones de paquetes de dependencias.

En ese punto, el diseño hace que la IA deje de convertir el código en un "trapo de retales" de inmediato y pase el testigo (Baton) de la depuración al desarrollador humano diciendo: **"Es altamente probable que sea un fallo arquitectónico profundo fuera de mi alcance"**. Solo controlando estrictamente los casos extremos peligrosos y evitando que la IA trabaje en vano, se logra una automatización del trabajo perfecta en la que realmente se puede confiar.

Además, la configuración de **Anti-Adulación (Anti-Sycophancy)** colocada al principio del prompt es un truco de optimización oculto que ahorra tokens que la IA desperdiciaría generando disculpas o excusas innecesarias ("Lo siento, cometí un error"), ayudándola a concentrar sus recursos de computación directamente en el proceso de resolución de problemas. Al activar el modo Terminator frío que se comunica solo con hechos y resultados, obtendrás, en el verdadero sentido de la palabra, un 'colega de IA senior'.

---

## 🙋 Preguntas frecuentes (FAQ)

- **Q: ¿Se puede obtener el mismo efecto en chatbots basados en web generales (como ChatGPT o la interfaz de Claude)?**
  - A: Los chatbots web no tienen permiso para ejecutar directamente tu terminal local, por lo que solo ofrecerán respuestas fragmentadas como "Aquí tienes el código corregido. Intenta ejecutarlo de nuevo" tras copiarles el log de error. La verdadera depuración autónoma (Modo Zombie) muestra el 200% de su poder en entornos de agentes donde el editor y la terminal están perfectamente integrados, como Cursor, Windsurf o Gemini CLI.
- **Q: ¿Puedo detener a la IA a la fuerza mientras está en su bucle de depuración de 3 intentos?**
  - A: Sí, por supuesto. Puedes recuperar el control en cualquier momento presionando `Ctrl+C` en la terminal donde se ejecuta el agente o haciendo clic en el botón 'Stop' del agente integrado en el editor para detenerlo de inmediato.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Diseño de Anti-Adulación (Anti-Sycophancy):** Bloquea de raíz el desgaste emocional y el desperdicio de tokens, imponiendo a la IA la mentalidad de un ingeniero senior que se concentra estrictamente en hechos y resultados.
2. **Bucle de Autocuración (The Healing Loop):** Sistematiza el algoritmo de resolución de problemas de un desarrollador experto —"escribir código → detectar error → corregir → demostrar en la terminal"— elevando el nivel de la delegación de tareas (Delegation).
3. **Defensa contra Bloqueos (Deadlock Prevention):** Al otorgar la restricción concreta de un máximo de 3 intentos, se defiende perfectamente al sistema de un colapso en el que la IA, sumida en una alucinación (Hallucination) grave, modifique el código sin fin de forma errónea.

---

## 🎯 Conclusión (Epílogo)

El rendimiento de la IA depende, en última instancia, del control de quien la maneja y de la densidad de sus prompts. De ti depende si la mantienes como una asistente pasiva que te quita tiempo respondiendo amablemente cada vez que hay un error, o si la haces evolucionar a un ninja coder despiadado que corta los problemas de raíz y solo informa resultados perfectos.

Inyecta este código de trucos en el archivo de configuración del sistema de tu agente ahora mismo. Y deja de estresarte por los logs de error rojos de la terminal; disfruta de salir de la oficina a tiempo con total tranquilidad. 🍷
