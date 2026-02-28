---
layout: /src/layouts/Layout.astro
title: "📊 Escape del infierno del PPT: Prompt para generar índices y guiones por diapositiva automáticamente"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: "Automatización del trabajo"
description: "No pases la noche en vela preparando tu presentación. Un prompt práctico que genera desde el índice hasta el guion de cada diapositiva en solo 1 minuto."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ppt-outline-scr"]
---
# 📝 Escape del infierno del PPT: Prompt para generar índices y guiones por diapositiva automáticamente
- **🎯 Recomendado para:** Especialistas en marketing, planificadores, empleados en su primer año, desarrolladores con presentaciones pendientes
- **⏱️ Tiempo estimado:** De 3 horas → a 1 minuto
- **🤖 Modelos recomendados:** Cualquier IA conversacional (Claude 3.5 Sonnet, ChatGPT, etc.)
- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_¿Tienes una presentación mañana y llevas 30 minutos mirando una diapositiva en blanco?_
Mucho más doloroso que el diseño del PPT es la fase de planificación: "qué decir, en qué orden y cómo decirlo". Este prompt reúne tus ideas fragmentadas y las transforma instantáneamente en una estructura perfecta por diapositiva, junto con un guion de 1 minuto para cada una. Ahora, solo concéntrate en el diseño.

---
## ⚡️ Resumen en 3 líneas (TL;DR)
1. No empieces desde cero. Solo proporciona el mensaje clave y la IA estructurará el índice por ti.
2. Puedes recibir recomendaciones de elementos visuales (gráficos, imágenes, etc.) necesarios para cada diapositiva.
3. El guion se genera al mismo tiempo, lo que te permite ahorrar tiempo para practicar tu presentación.

---
## 🚀 Solución: "El Creador de Estructuras para Diapositivas"

### 🥉 Versión Básica (Basic Version)
Úsala cuando quieras establecer rápidamente el flujo general de la presentación.

> **Rol:** Eres un `[Experto en planificación y presentaciones con 10 años de experiencia]`.
> **Tarea:** Prepara un índice para un PPT de 10 diapositivas sobre `[El lanzamiento de un nuevo servicio]` y resume el mensaje clave para cada diapositiva.

### 🥇 Versión Profesional (Pro Version)
Úsala cuando necesites una planificación detallada y un guion que cautive a tu audiencia.

> **Rol (Role):** Eres un `[Director de presentaciones]` en una empresa top de Silicon Valley. Eres experto en estructuración y storytelling para cautivar a la audiencia.
>
> **Contexto (Context):**
>
> - Tema: `[Propuesta para la implementación de una solución de automatización de tareas internas basada en IA]`
> - Audiencia: `[Ejecutivos de nivel C (C-level) cuya prioridad es la reducción de costes]`
> - Tiempo de presentación: `[15 minutos (aprox. 10 a 15 diapositivas)]`
> - Objetivo principal: `[Aprobación del presupuesto para implementar la solución]`
>
> **Tarea (Task):**
>
> 1. Crea un índice general para las diapositivas, comenzando con una apertura que capte la atención de la audiencia.
> 2. Asegúrate de incluir los siguientes 4 elementos en cada diapositiva:
>    - Título de la diapositiva (Headline)
>    - Recomendación de elementos visuales para la pantalla (Visual Idea)
>    - Texto principal de la diapositiva (Key Message)
>    - El guion exacto que dirá el presentador (En tono conversacional, de aproximadamente 1 minuto por diapositiva)
> 3. Deja las variables `[Tema]`, `[Audiencia]`, `[Tiempo de presentación]` y `[Objetivo principal]` entre corchetes para que el usuario pueda rellenarlas.
>
> **Restricciones (Constraints):**
>
> - Minimiza la jerga técnica y utiliza un lenguaje empresarial fácil de entender para la audiencia.
> - En lugar del típico "Buenos días", el guion debe comenzar con una pregunta directa que apunte al problema (Pain Point) de la audiencia.
> - El formato de salida debe ser una lista fácil de leer, organizada por número de diapositiva.
>
> **Advertencia (Warning):**
>
> - En lugar de expresiones vagas (ej. "Será de gran ayuda"), presenta beneficios y resultados concretos. (Para evitar alucinaciones).

---
## 💡 Comentario del Autor (Insight)
El Síndrome de la Página en Blanco (Blank Canvas Syndrome). Esta es la fase donde los profesionales pierden más tiempo al abrir PowerPoint. Este prompt fue diseñado para completar el 100% de la planificación en un bloc de notas o Word, antes de siquiera abrir la herramienta de diseño.

La clave está en definir claramente la variable `[Audiencia]`. Si va dirigido a técnicos, se generará un guion centrado en "cómo implementarlo"; si va dirigido a ejecutivos, el enfoque será "reducción de costes y mitigación de riesgos".

Por experiencia, no recomiendo leer palabra por palabra el guion generado por la IA. Deja que la IA se encargue del 80% de la estructura y el flujo, y añade tu propia experiencia de campo o métricas internas específicas en el 20% restante. Terminarás tu trabajo 3 horas antes y la calidad de tu presentación se duplicará.

---
## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿Puedo aumentar o reducir el número de diapositivas?**
  - R: Sí. Simplemente cambia la variable `[Tiempo de presentación]` en el Contexto (Context) a 5 minutos (5 diapositivas) o 30 minutos (30 diapositivas), y la IA ajustará automáticamente el ritmo y la longitud del guion.
- **P: ¿Qué hago si el tono conversacional suena poco natural?**
  - R: Puedes darle una instrucción adicional (Follow-up prompt) diciendo: "Modifica el tono del guion para que suene más firme y seguro, con un enfoque más corporativo", y el resultado será mucho más natural.

---
## 🧬 Anatomía del Prompt (Why it works?)
1. **Storytelling orientado al público objetivo:** En lugar de un simple "Hazme un PPT", especificar la `[Audiencia]` y el `[Objetivo principal]` obliga a la IA a centrarse en la 'persuasión' y no en una simple enumeración de información.
2. **Separación de los elementos visuales (Visual Idea):** La IA planifica de antemano la parte más frustrante de crear un PPT ("¿Qué imagen pongo aquí?"), aliviando la carga durante la fase de diseño.
3. **Instrucción de guion conversacional:** Al diseñar la Tarea (Task) para separar el texto en pantalla (resumen) de las palabras del presentador (explicación), se logra una estructura de presentación perfecta.

---
## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Entrada)
```text
Voy a hacer una presentación a los ejecutivos sobre la necesidad de implementar una nueva solución de IA. Escríbeme el contenido para un PPT de 10 diapositivas.
```

### ✅ Después (Resultado)
```text
Diapositiva 2: Los costes ocultos que estamos desperdiciando (Pain Point)
- Visual Idea: Un gráfico que contraste el aumento de los costes laborales en los últimos 3 años frente a una eficiencia operativa estancada.
- Key Message: 4.800 horas anuales desperdiciadas en la creación manual de informes.
- Guion: "Estimados directivos, miremos este gráfico. Cada mes, estamos dedicando 400 horas por departamento solo a la recopilación manual de datos. ¿A cuánto equivale esto en salarios? Esta cifra es el mayor cuello de botella que impide el crecimiento de nuestra empresa y nos mantiene estancados."
... (Y así, una estructura perfecta de 10 diapositivas)
```

---
## 🎯 Conclusión
Si la planificación es sólida, la presentación será un éxito aunque el diseño sea un poco rústico.
No pierdas el tiempo con animaciones llamativas. Usa este prompt para establecer la estructura y luego añade tus propios insights. ¡Es hora de salir del trabajo a tu hora! 🍷
