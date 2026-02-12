---
layout: /src/layouts/Layout.astro
title: "Lo que te perdiste tomando notas, la IA lo organiza por ti"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "Automatización del Trabajo"
description: "No te preguntes '¿qué dijeron?' después de la reunión. Resumen listo en 1 minuto con solo la grabación."
tags: ["Reunión", "Resumen", "Productividad"]
---

# 📝 Lo que te perdiste tomando notas, la IA lo organiza por ti

- **🎯 Público Objetivo:** Todos los empleados, PM, Asistentes
- **⏱️ Tiempo:** 30 min → Reducido a 1 min
- **🤖 Modelo Recomendado:** Clova Note (STT), ChatGPT (GPT-4), Claude 3

- ⭐ **Dificultad:** ⭐☆☆☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"No te preguntes '¿qué dijeron?' después de la reunión. Resumen listo en 1 minuto con solo la grabación."_

Registrar todo el contenido de una reunión es ineficiente. Lo importante son las 'decisiones tomadas' y las 'tareas pendientes (Action Items)'. Este prompt transforma el contenido disperso de la reunión en una lista de tareas clara.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1.  Resumen de actas largas y extracción de puntos clave
2.  Generación automática de Action Items (Responsable/Plazo)
3.  Especificación de decisiones y planes futuros

---

## 🚀 Solución: "Meeting Minutes Master"

### 🥉 Basic Version (Versión Básica)

Úsalo cuando quieras captar rápidamente solo lo esencial.

> **Rol:** Eres un asistente competente.
> **Solicitud:** Resume estas actas de la reunión y dime solo los 3 puntos clave.
> **Entrada:** `[Texto de las actas]`

<br>

### 🥇 Pro Version (Versión Pro)

Úsalo cuando necesites compartir actas de manera sistemática.

> **Role (Rol):** Eres un Project Manager (PM) meticuloso.
>
> **Context (Contexto):**
>
> - Tipo de reunión: `[Reunión semanal / Kick-off / Brainstorming]`
> - Asistentes: `[Lista de asistentes]`
>
> **Task (Tarea):**
>
> 1.  Organiza las actas de la reunión según la siguiente plantilla.
>     - **📅 Fecha:** `[Fecha de la reunión]`
>     - **👥 Asistentes:** `[Asistentes]`
>     - **🗣️ Agenda Principal (Agenda):** `[Lista de temas]`
>     - **✅ Decisiones (Decisions):** `[Contenido decidido]`
>     - **📝 Tareas (Action Items):**
>       - `[Responsable]` : `[Tarea]` (~`[Plazo]`)
>     - **⏭️ Próxima reunión:** `[Fecha prevista]`
>
> **Constraints (Restricciones):**
>
> - Elimina las charlas innecesarias (bromas, clima, etc.).
> - Escribe los Action Items como acciones lo más concretas posible (ej: "Revisar" -> "Redactar informe y enviar correo").
>
> **Warning (Advertencia):**
>
> - Verifica las fechas y los números con exactitud.

---

## 💡 Comentario del Autor (Insight)

Especialmente si extraes primero el texto con una herramienta STT (Speech-to-Text) como Clova Note y luego usas este prompt, el efecto se maximiza. Si lo compartes dentro de los 5 minutos posteriores a la reunión, serás reconocido como alguien que "trabaja bien".

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Qué hago si las actas son demasiado largas?**
  - R: En el caso de ChatGPT, hay un límite de entrada, así que divide el texto o sube el archivo (usando Code Interpreter) para solicitar el análisis. Claude es ventajoso para procesar contextos largos.

- **P: ¿Funciona con texto donde no se distinguen los hablantes?**
  - R: Sí, deduce quién dijo qué a través del contexto hasta cierto punto, pero para mayor precisión es mejor tener indicadores de hablante.

---

## 🧬 Anatomía del Prompt (Why it works?)

1.  **Propuesta de Plantilla:** Se dio un formato de salida claro a la IA para reducir el tiempo de re-procesamiento.
2.  **Instrucción Explícita:** Se dieron instrucciones claras como "eliminar charlas innecesarias", "escribir acciones concretas" para mejorar la calidad.

---

## 📊 Demostración: Before & After

### ❌ Before (Entrada)

```text
(중구난방인 회의 녹취록 텍스트...)
김대리: 아, 그 건은 제가 이번 주까지 할게요.
박부장: 그래, 그거 중요하니까 빨리 처리해. 그리고 다음 주 워크샵 장소 섭외는?
이사원: 제가 몇 군데 알아보고 있는데 강남 쪽으로...
```

### ✅ After (Resultado)

```markdown
**📝 할 일 (Action Items):**

- 김대리 : 중요 안건 처리 (~이번 주)
- 이사원 : 워크샵 장소(강남 인근) 섭외 및 리스트 보고 (~다음 주)
```

---

## 🎯 Conclusión

¡El registro para la IA, el pensamiento para los humanos! 🍷