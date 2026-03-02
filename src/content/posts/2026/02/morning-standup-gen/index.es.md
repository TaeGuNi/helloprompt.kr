---
layout: /src/layouts/Layout.astro
title: " \"1분 만에 끝내는 어제 업무 요약 & 스탠드업 준비\""
author: "Jay"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "업무 효율화"
description: " \"Atención, desarrolladores que revisan GitHub sin recordar qué hicieron ayer: solo entreguen su registro de commits y obtengan un guion de stand-up perfecto.\""
tags: ["스탠드업", "회의준비", "개발자", "회고"]
---

# 📝 Prepara tu Daily Stand-up en 1 minuto con tus logs de Git

- **🎯 Público objetivo:** Desarrolladores, Product Managers, profesionales junior (1-3 años)
- **⏱️ Tiempo estimado:** 15 minutos → reducido a 1 minuto
- **🤖 Modelo recomendado:** ChatGPT (GPT-4o), Claude 3.5 Sonnet, Gemini 2.5 Pro

- ⭐ **Dificultad:** ⭐☆☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Te quedas en blanco cuando te preguntan 'qué hiciste ayer' en la daily y terminas balbuceando mientras revisas desesperadamente tu historial de GitHub?"_

A todos nos ha pasado. La reunión de _Daily Stand-up_ (o Scrum) está a punto de empezar y tu mente decide borrar por completo las 8 horas de código intensivo que escribiste ayer. Empiezas a rebuscar entre tus _commits_, tickets de Jira o mensajes de Slack para armar un reporte coherente. Con este prompt, podrás transformar un bloque de logs crudos y desordenados en un guion profesional y conciso en cuestión de segundos.

---

## ⚡️ Resumen en 3 puntos (TL;DR)

1. Olvídate de redactar a mano tu progreso diario: deja que la IA organice el caos por ti.
2. Extrae el valor real de tus _git logs_ o notas sueltas, estructurando el qué, el porqué y los bloqueos.
3. Transmite seguridad y profesionalismo en tus reuniones matutinas con un guion claro y directo al grano.

---

## 🚀 Solución: El "Stand-up Script Generator"

### 🥉 Versión Básica (Basic Version)

Úsala cuando tengas prisa y necesites un resumen rápido de tus notas desordenadas.

> **Rol:** Eres un desarrollador de software profesional y conciso.
> **Tarea:** Convierte la siguiente lista de tareas y _commits_ de ayer en un guion claro de 3 puntos para mi reunión de _Daily Stand-up_.
> **Datos:** `[Pega aquí tus notas sueltas o logs de git]`

### 🥇 Versión Profesional (Pro Version)

Úsala para impresionar a tu equipo, detallando el impacto, el contexto y los próximos pasos con precisión quirúrgica.

> **Rol (Role):** Eres un Tech Lead Senior experto en metodologías ágiles y comunicación efectiva.
>
> **Contexto (Context):**
>
> - Fondo: Estoy a punto de entrar a mi reunión diaria de _Stand-up_ (Scrum).
> - Objetivo: Necesito reportar mi progreso de ayer, mi plan para hoy y cualquier impedimento, sonando seguro, técnico pero comprensible, y enfocado en el valor entregado.
>
> **Tarea (Task):**
>
> 1. Analiza los datos de entrada (logs de git, notas, tickets) y agrúpalos por funcionalidad o proyecto.
> 2. Redacta un guion estructurado en tres partes: "Qué hice ayer", "Qué haré hoy" y "Bloqueos/Impedimentos".
> 3. Utiliza un tono profesional, directo y colaborativo.
> 4. Traduce la jerga excesivamente técnica en logros orientados al impacto cuando sea posible (ej. "Arreglé el bug X" -> "Resolví el problema de inicio de sesión, mejorando la retención de usuarios").
>
> **Datos de Entrada:**
>
> - Lo de ayer: `[Pega aquí tus git logs, mensajes de Slack o notas]`
> - Lo de hoy: `[Tus metas principales para hoy]`
> - Bloqueos: `[Cualquier problema que te impida avanzar, o escribe "Ninguno"]`
>
> **Restricciones (Constraints):**
>
> - Mantén el tiempo de lectura del guion por debajo de 1 minuto (aprox. 120-150 palabras).
> - Usa _bullet points_ (viñetas) para facilitar la lectura rápida. No uses tablas.
>
> **Advertencia (Warning):**
>
> - No inventes tareas que no estén en los datos de entrada. Si los datos son confusos, pide aclaraciones o cíñete estrictamente a lo proporcionado. (Evita alucinaciones).

---

## 💡 Comentario del autor (Insight)

Este prompt es un salvavidas absoluto, especialmente los lunes por la mañana, cuando parece que el viernes ocurrió en otra vida. Según mi experiencia, el mayor error en las _dailies_ es recitar una "lista de la compra" de tareas técnicas carentes de contexto. Al usar la Versión Pro, obligas a la IA a centrarse en el **impacto**. En lugar de decir "Hice un refactor en el controlador de usuarios", acabarás diciendo "Optimicé el servicio de usuarios, preparando el terreno para la nueva función de perfiles". Esto no solo te ahorra tiempo, sino que eleva drásticamente tu imagen como desarrollador estratégico ante tus _managers_ y compañeros.

Además, aquí tienes un truco ninja: puedes ejecutar el comando `git log --author="Tu Nombre" --since="yesterday" --pretty=format:"%s"` en tu terminal y pegar el resultado directamente en la variable de entrada del prompt. ¡Magia pura!

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Este prompt funciona bien con modelos de IA gratuitos?**
  - R: ¡Totalmente! La versión gratuita de ChatGPT (GPT-3.5 o GPT-4o mini) o Claude 3 Haiku manejan esta tarea sin despeinarse. El formato estricto de la Versión Pro está diseñado para evitar que cualquier modelo, incluso los menos avanzados, se desvíe del tema.

- **P: ¿Solo sirve para programadores?**
  - R: No. Si eres diseñador, analista o especialista en marketing, simplemente cambia el "Rol" en el prompt (por ejemplo, "Eres un Product Designer Senior") y pega tus actualizaciones de Figma o Jira. El resultado será igual de excelente.

- **P: ¿Qué pasa si mis logs están en inglés pero mi equipo habla español?**
  - R: Puedes añadir una instrucción sencilla en las Restricciones: "- Traduce todas las tareas y el guion final al español de manera natural". La IA superará la barrera del idioma a la perfección y te entregará el guion listo para leer.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Estructura Scrum Nativa:** Obliga a la IA a respetar el formato estándar de la industria (Ayer / Hoy / Bloqueos), garantizando que el resultado sea aplicable de inmediato a tu rutina diaria.
2. **Traducción de Impacto:** La instrucción de convertir "jerga técnica" en "valor entregado" es el núcleo de este prompt. Ayuda a que roles no técnicos (como Product Owners o Scrum Masters) comprendan verdaderamente la importancia de tu trabajo.
3. **Límite de Tiempo (Restricciones):** Al limitar la longitud a menos de 1 minuto de lectura, se evita el mayor pecado de las reuniones diarias: monopolizar el tiempo hablando de detalles innecesarios.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada del usuario - Cruda)

```text
Ayer:
- git commit: fix typo in header
- git commit: update user auth middleware
- git commit: resolve merge conflict in package.json
- tuve una reunion con diseño sobre los nuevos botones
Hoy:
- terminar la integracion de la API de pagos
Bloqueos:
- DevOps todavia no me da los accesos a staging
```

### ✅ Después (Resultado de la IA)

```text
¡Hola equipo! Buen día a todos. Aquí mi reporte:

**Lo que hice ayer:**
- Finalicé la actualización del middleware de autenticación, mejorando directamente la seguridad del inicio de sesión.
- Resolví algunos conflictos de configuración internos y corregí detalles menores en la interfaz del encabezado.
- Me coordiné con el equipo de Diseño para alinear la implementación de los nuevos botones interactivos.

**Lo que haré hoy:**
- Mi enfoque principal será completar la integración de la API de pagos para el nuevo flujo de *checkout*.

**Bloqueos:**
- Sí, tengo un impedimento. Aún necesito los accesos al entorno de *staging* por parte de DevOps para poder probar la API de pagos. ¿Alguien me puede ayudar a agilizar esto con ellos?

Eso es todo de mi parte. ¡Gracias!
```

---

## 🎯 Conclusión

Tu tiempo es demasiado valioso como para malgastarlo intentando recordar a la desesperada qué hiciste el día anterior. Con este prompt, automatizas una preparación tediosa, te presentas a la reunión con total confianza y destacas como un comunicador eficiente y estructurado dentro de tu equipo.

¡Ahora, ve y domina ese _stand-up_! ☕
