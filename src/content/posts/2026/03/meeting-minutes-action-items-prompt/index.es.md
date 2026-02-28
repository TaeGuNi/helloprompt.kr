---
layout: /src/layouts/Layout.astro
title: "🎙️ Prompt Estructurado para Resumir Reuniones Caóticas en 1 Minuto"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: "업무 자동화"
description: "Un prompt práctico que transforma instantáneamente el texto desordenado del audio de una reunión en un resumen claro y action items."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Estructura tus reuniones caóticas en 1 minuto
<!-- ⚠️ [CRITICAL RULE] 다국어 지원 (10개 언어 번역 필수) ⚠️
이 템플릿을 사용하여 새로운 포스트(`index.ko.md`)를 작성한 직후,
**반드시** 동일한 디렉토리에 9개의 번역 파일(`index.[lang].md`)을 추가로 생성해야 합니다.
지원 언어(9개): en, de, es, fr, it, ja, pt, ru, zh
총 10개(한국어+9개 외국어)의 파일이 한 폴더에 있어야 배포가 정상적으로 완료됩니다. -->
<!-- ⚠️ [Lint Rule] 이모지 리스트를 사용하세요. 표(Table) 사용 시 모바일에서 깨질 수 있습니다. -->
- **🎯 Recomendado para:** Trabajadores junior, Gestores de proyectos (PM), Especialistas en marketing
- **⏱️ Tiempo requerido:** De 30 minutos → reducido a 1 minuto
- **🤖 Modelo recomendado:** Cualquier IA conversacional (ChatGPT, Claude, Gemini, etc.)
- ⭐ **Dificultad:** ⭐☆☆☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐
<!-- ⚠️ [Lint Rule] 인용구(>)는 Basic/Pro 섹션 외에는 이탤릭체(_..._)와 함께 사용해야 에러가 나지 않습니다. -->
> _"¿Has perdido toda la tarde de hoy intentando organizar las actas de la reunión?"_
Incluso si conviertes el audio grabado a texto inmediatamente después de la reunión (Clova Note, Whisper, etc.), extraer los puntos clave de una conversación desordenada es otra pesadilla. Este prompt extrae de manera precisa y directa solo las **'decisiones clave'** y **'quién debe hacer qué (Action Items)'** de un montón de texto sin contexto. Simplemente copia y pega.
---
## ⚡️ Resumen en 3 líneas (TL;DR)
1. Copia el texto sin procesar convertido del audio y envíaselo a la IA.
2. La IA filtrará las conversaciones irrelevantes y extraerá solo las decisiones clave.
3. Extraerá claramente los "Próximos pasos por responsable (Action Items)" más importantes.
---
## 🚀 Solución: "Prompt de Estructuración Automática de Actas de Reunión"
<!-- ⚠️ [Lint Rule] 인용구(>)는 이곳(Prompt 섹션)에서만 프롬프트 박스로 변환됩니다. -->
### 🥉 Versión Básica (Básica)
Úsala cuando necesites resultados rápidos.
> **Rol:** Eres un `[Gestor de Proyectos Senior]`.
> **Tarea:** Lee la siguiente `[Transcripción de la reunión]` y resume solo los puntos clave: las principales decisiones y los próximos pasos (Action Items).
### 🥇 Versión Pro (Profesional)
Úsala cuando necesites un nivel de calidad detallado.
> **Rol (Role):** Eres un `[Planificador de Servicios IT y PM con 10 años de experiencia]`. Eres un experto en captar el contexto de las reuniones y organizar claramente quién debe hacer qué y para cuándo.
>
> **Contexto (Context):**
> - Fondo: Tenemos una transcripción desordenada convertida a texto después de una `[Reunión de informe de trabajo semanal o sesión de ideación]`.
> - Objetivo: Crear un resumen limpio y estructurado para que los asistentes comprendan rápidamente el contenido de la reunión y ejecuten sus tareas (Action Items) sin confusión.
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
> - Nunca inventes información que no esté en la transcripción. (Prevención de alucinaciones).
>
> **Entrada (Input):**
> - Transcripción de la reunión: `[Pega aquí el texto copiado de la transcripción]`
---
<!-- ✅ [Lint Rule] 필수 섹션입니다. 누락 시 CI 에러가 발생합니다. -->
## 💡 Comentario del Autor (Insight)
El núcleo de este prompt es **'extraer los Action Items'** y **'suprimir las alucinaciones (Hallucination)'**. 
El verdadero propósito de redactar actas de reuniones no es 'registrar lo que se dijo', sino 'dejar claro qué hacer a continuación'. 
Al usarlo en la práctica, a veces la IA inventa plazos plausibles que no se mencionaron en la reunión. Para evitar esto, incluí restricciones como "nunca inventes información que no exista" y una directiva defensiva de "si el responsable no está claro, márcalo como [Requiere confirmación]". Intenta pasar el texto extraído por herramientas de voz a texto (STT) como Clova Note junto con este prompt a Claude 3.5 Sonnet o GPT-4o. Una tarea de edición de texto que tomaría 30 minutos se reduce a 1 minuto. Disfruta de una taza de café extra con el tiempo libre ahorrado.
---
<!-- ⚠️ [Lint Rule] 권장 섹션입니다. 누락 시 경고가 발생합니다. -->
## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿Puedo introducir la transcripción completa de una reunión de 1 hora?**
  - R: Sí, los modelos más recientes (Claude 3.5 Sonnet, GPT-4o, etc.) tienen una excelente capacidad para comprender el contexto y pueden manejar fácilmente una hora de texto. Sin embargo, si alcanzas el límite de tokens, divídelo por la mitad e introdúcelo en partes.
- **P: ¿Funciona en la versión gratuita de ChatGPT?**
  - R: Es posible, pero la capacidad de captar el contexto y seguir las instrucciones con precisión puede ser un poco menor en los modelos gratuitos (como GPT-3.5). Se recomienda usar los modelos más recientes siempre que sea posible.
---
## 🧬 Análisis del Prompt (¿Por qué funciona?)
1. **Asignación de Rol:** A través de la persona de un PM con 10 años de experiencia, forzamos un tono y estilo que 'aclara las instrucciones de trabajo' en lugar de simplemente resumir el texto para reducirlo.
2. **Estructuración de la Tarea:** Al dividir el formato de salida en temas, decisiones, asuntos pendientes y action items, evitamos que la IA responda en formatos inapropiados.
3. **Restricciones (Constraints):** Bloqueamos por completo el uso de tablas (Table) Markdown, que perjudican la legibilidad móvil, y forzamos el formato de lista con emojis.
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
No desperdicies tu energía organizando actas de reuniones complejas. 
Deja que la IA se encargue de limpiar el desorden de texto y concéntrate en ejecutar los Action Items decididos. 
¡Ahora sal del trabajo a tiempo! 🍷
