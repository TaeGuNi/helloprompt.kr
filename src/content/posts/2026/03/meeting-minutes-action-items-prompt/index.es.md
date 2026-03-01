---
layout: /src/layouts/Layout.astro
title: "🎙️ Prompt Estructurado: Resume Reuniones Caóticas en 1 Minuto"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: " "
description: "Un prompt práctico que transforma al instante transcripciones caóticas de reuniones en resúmenes claros con pasos a seguir (action items)."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Estructura tus reuniones caóticas en 1 minuto

- **🎯 Recomendado para:** Profesionales junior, Project Managers (PM), Marketers
- **⏱️ Tiempo requerido:** 30 minutos → 1 minuto
- **🤖 Modelo recomendado:** Cualquier IA conversacional (ChatGPT, Claude, Gemini, etc.)
- ⭐ **Dificultad:** ⭐☆☆☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Otra tarde entera desperdiciada intentando dar sentido a las actas de la reunión?"_

Incluso si transcribes el audio inmediatamente después de la reunión (con Clova Note, Whisper, etc.), extraer los puntos clave de una conversación desestructurada es una auténtica pesadilla. Este prompt aísla de forma precisa y directa las **'decisiones clave'** y **'quién debe hacer qué' (Action Items)** de una maraña de texto sin contexto. Solo tienes que copiar y pegar.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Copia la transcripción en bruto del audio y envíasela a la IA.
2. La IA filtrará la charla irrelevante y aislará únicamente las decisiones clave.
3. Extraerá con total claridad los "Próximos pasos por responsable" (Action Items).

---

## 🚀 Solución: "Prompt de Estructuración Automática de Actas de Reunión"

### 🥉 Versión Básica

Ideal para cuando necesitas resultados rápidos.

> **Rol:** Eres un `[Project Manager Senior]`.
> **Tarea:** Lee la siguiente `[Transcripción de la reunión]` y resume únicamente los puntos clave: decisiones principales y próximos pasos (Action Items).

### 🥇 Versión Pro

Úsala cuando necesites un nivel de detalle y calidad superior.

> **Rol (Role):** Eres un `[Planificador de Servicios IT y Project Manager con 10 años de experiencia]`. Eres un experto en captar el contexto de las reuniones y estructurar con claridad quién debe hacer qué y para cuándo.
>
> **Contexto (Context):**
> - Contexto: Tenemos una transcripción caótica generada tras una `[Reunión de reporte semanal o sesión de brainstorming]`.
> - Objetivo: Crear un resumen limpio y estructurado para que los asistentes comprendan rápidamente lo tratado y puedan ejecutar sus tareas (Action Items) sin confusión.
>
> **Tarea (Task):**
> 1. Lee la `[Transcripción de la reunión]` a continuación y resúmela siguiendo esta estructura:
>   - 📌 Tema principal de la reunión (Main Topic)
>   - 🎯 Decisiones clave (Key Decisions)
>   - 🚨 Asuntos pendientes/sin resolver (Pending Issues)
>   - ✅ Action Items (Especificar responsable, fecha límite y tarea)
> 2. Elimina por completo los saludos, las charlas innecesarias y el contenido duplicado.
> 3. Mantén un tono y estilo profesional (lenguaje escrito formal y claro).
>
> **Restricciones (Constraints):**
> - El formato de salida debe ser en forma de lista utilizando símbolos Markdown (-, *, backticks, etc.) y emojis.
> - Nunca utilices tablas (Table) de Markdown.
> - Si el responsable de un Action Item no está claro, márcalo como '[Requiere confirmación]'.
>
> **Advertencia (Warning):**
> - Bajo ninguna circunstancia inventes información que no figure en la transcripción. (Prevención de alucinaciones).
>
> **Entrada (Input):**
> - Transcripción de la reunión: `[Pega aquí el texto copiado de la transcripción]`

---

## 💡 Comentario del Autor (Insight)

El verdadero núcleo de este prompt radica en **'extraer los Action Items'** y **'suprimir las alucinaciones (Hallucinations)'**. 
El objetivo fundamental de redactar actas de reuniones no es 'registrar todo lo que se dijo', sino 'dejar meridianamente claro qué hay que hacer a continuación'. 
En la práctica, la IA a veces inventa plazos que suenan lógicos pero que jamás se mencionaron en la reunión. Para evitar este problema, he incluido restricciones estrictas como "bajo ninguna circunstancia inventes información que no figure" y una directiva defensiva clave: "si el responsable no está claro, márcalo como [Requiere confirmación]". Te recomiendo introducir el texto generado por herramientas de Speech-to-Text (STT) como Clova Note o Whisper junto con este prompt en Claude 3.5 Sonnet o GPT-4o. Una tarea de edición que te llevaría 30 minutos se reduce a apenas 1 minuto. Disfruta de ese merecido café con el tiempo que acabas de ahorrar.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Puedo introducir la transcripción completa de una reunión de 1 hora?**
  - R: Absolutamente. Los modelos más avanzados (Claude 3.5 Sonnet, GPT-4o, etc.) poseen una excelente retención de contexto y pueden procesar sin problemas una hora de transcripción. No obstante, si superas el límite de tokens, simplemente divide el texto en dos partes.
- **P: ¿Funciona en la versión gratuita de ChatGPT?**
  - R: Sí funciona, aunque la capacidad para captar el contexto y seguir las instrucciones al pie de la letra puede ser inferior en los modelos gratuitos. Siempre es recomendable utilizar las versiones más recientes y avanzadas si están a tu alcance.

---

## 🧬 Análisis del Prompt (¿Por qué funciona?)

1. **Asignación de Rol:** Al establecer la persona de un Project Manager con 10 años de experiencia, forzamos un tono que 'clarifica las directrices de trabajo' en lugar de limitarse a comprimir el texto.
2. **Estructuración de la Tarea:** Al segmentar la salida en temas, decisiones, asuntos pendientes y action items, evitamos que la IA genere respuestas en formatos desorganizados o inapropiados.
3. **Restricciones (Constraints):** Bloqueamos categóricamente el uso de tablas Markdown (que arruinan la legibilidad en dispositivos móviles) y forzamos el uso de listas con emojis para una lectura fluida.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada)

```text
Jefe de equipo Kim: Ah, sí, ¿me escuchan? Hoy nos reunimos para tratar la campaña de marketing de este trimestre. Subgerente Park, ¿cómo va lo de la preparación del plan A y el plan B?
Subgerente Park: Sí, el plan A parece que excederá un poco el presupuesto, así que creo que deberíamos posponerlo e ir con el plan B.
Empleado Choi: Disculpen, si vamos con el plan B, yo me encargaré de hacer la lista de los influencers a contactar para este viernes.
Jefe de equipo Kim: Ok, entonces fijamos el plan B, y el Subgerente Park debe rehacer el presupuesto y reportarlo para el próximo martes. Y el diseño de la página de aterrizaje... ah, ¿esto aún no se ha discutido con el equipo de diseño?
Subgerente Park: Sí, eso todavía no.
```

### ✅ Después (Resultado)

```text
📌 Tema principal de la reunión
- Discusión de la propuesta de campaña de marketing del trimestre actual
🎯 Decisiones clave
- Plan A pospuesto por problemas de presupuesto, Plan B finalmente aprobado
🚨 Asuntos pendientes/sin resolver
- Planificación del diseño de la página de aterrizaje (Requiere discusión con el equipo de diseño)
✅ Action Items
- 👨‍💼 Subgerente Park: Rehacer y reportar el presupuesto basado en el Plan B (Fecha límite: Próximo martes)
- 🧑‍💻 Empleado Choi: Hacer lista de influencers relacionados con el Plan B (Fecha límite: Este viernes)
- ❓ [Requiere confirmación]: Responsable no asignado para la discusión de la página de aterrizaje con el equipo de diseño
```

---

## 🎯 Conclusión

No malgastes tu energía intentando dar sentido a actas de reuniones interminables. 
Deja que la IA limpie el desorden textual y concéntrate exclusivamente en ejecutar los Action Items acordados. 
¡Termina tu jornada a tiempo! 🍷
