---
layout: /src/layouts/Layout.astro
title: " \"Midjourney 캐릭터 일관성: 완벽한 캐릭터 시트 만들기\""
author: "Jay"
date: "2026-02-13"
updatedDate: "2026-02-13"
category: "AI 디자인"
description: "¿Tus personajes de IA cambian de rostro en cada imagen? Descubre el prompt definitivo para crear hojas de personaje 100% consistentes en Midjourney."
tags: ["Midjourney", "캐릭터 디자인", "AI 아트", "일관성"]
---

## 📝 Consistencia de personajes en Midjourney: Cómo crear la hoja de personaje perfecta

- **🎯 Público objetivo:** Desarrolladores de videojuegos, creadores de webtoons y artistas conceptuales.
- **⏱️ Tiempo de ejecución:** De 1 hora → reducido a 5 minutos.
- **🤖 Modelo recomendado:** ChatGPT (para estructurar el prompt) y Midjourney v6.0+.

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Te frustra que el rostro de tu protagonista cambie sutilmente en cada nueva imagen hasta parecer otra persona?"_

El mayor obstáculo al integrar arte generativo en un pipeline profesional es mantener la **consistencia del personaje (Character Consistency)**. Si diseñas para un videojuego o un webtoon y los rasgos o la ropa de tu protagonista varían entre viñetas, el material es inútil para producción. La solución más robusta y avalada por la industria es generar, como paso fundacional, una **hoja de personaje (Character Sheet)** estandarizada.

A continuación, te revelo el secreto avanzado de ingeniería de prompts para garantizar vistas frontales, laterales y traseras en una sola generación, estableciendo un punto de referencia visual inquebrantable para todo tu trabajo futuro.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Genera una **hoja de personaje (Character Sheet)** inicial para fijar un canon visual inamovible de tu diseño.
2. Utiliza nuestra **versión Pro** en un LLM (como ChatGPT) para estructurar un prompt maestro en inglés que fuerce múltiples ángulos en Midjourney.
3. Configura el **Aspect Ratio (`--ar`)** en formato panorámico (ej. 16:9) para darle a la IA el lienzo necesario y evitar que corte o amontone las extremidades.

---

## 🚀 La solución: "El prompt maestro para hojas de personaje"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites validar rápidamente la vibra general y el concepto del personaje directamente en Midjourney.

> **Prompt de Midjourney:**
> character sheet of a `[descripción detallada de tu personaje]`, full body, white background, multiple views, front side and back view --v 6.0 --ar 3:2

### 🥇 Versión Profesional (Pro Version)

Este es un prompt de nivel experto diseñado para ejecutarse en ChatGPT o Claude. Su propósito es destilar el prompt en inglés más riguroso para Midjourney, ideal para arte conceptual de juegos AAA o referencias milimétricas de modelado 3D.

> **Rol (Role):** Eres un `[Diseñador principal de personajes para un juego RPG AAA]`.
>
> **Contexto (Context):**
>
> - Antecedentes: `[Necesito crear una hoja de referencia de personaje consistente para modelado 3D y arte de webtoons]`.
> - Objetivo: `[Generar un prompt en inglés de alta calidad, estilo arte conceptual, que funcione a la perfección en Midjourney v6.0]`.
>
> **Instrucciones (Task):**
>
> 1. Basándote en la configuración del personaje descrita a continuación, redacta 1 prompt en inglés altamente optimizado para Midjourney.
> 2. Configuración del personaje: `[Describe aquí al máximo detalle la apariencia, la indumentaria, las armas y la paleta de colores del personaje]`.
> 3. El resultado DEBE adherirse estrictamente al formato de **Character Sheet** (hoja de personaje), indicando de forma explícita que incluya al menos 3 ángulos: vista frontal (Front view), vista lateral (Side view) y vista trasera (Back view).
>
> **Restricciones (Constraints):**
>
> - Especifica un fondo blanco liso (Plain white background) para evitar cualquier interferencia visual con el sujeto.
> - Exige una pose neutral, como A-pose o T-pose (Standard neutral pose), para garantizar que las extremidades no oculten el torso ni los detalles del traje.
> - Solicita una toma de cuerpo entero (Full body shot) que sea completamente visible de pies a cabeza.
> - Requiere iluminación plana (Flat lighting, shadowless) para evitar que sombras dramáticas camuflen detalles críticos del diseño.
> - El formato de salida debe ser **únicamente** el prompt en inglés, encapsulado dentro de un bloque de código Markdown (```text).
>
> **Advertencia (Warning):**
>
> - Para asegurar que los parámetros técnicos no se pierdan, añade obligatoriamente `--v 6.0 --ar 16:9 --stylize 250` al final del prompt.
> - No inventes información adicional; cíñete estrictamente a los detalles proporcionados sin introducciones ni explicaciones de relleno.

---

## 💡 Comentarios del autor (Insight)

La verdadera genialidad de esta estructura radica en cómo controla de forma quirúrgica la **distribución espacial** y la **consistencia anatómica**, dos de las mayores debilidades de Midjourney. El núcleo del éxito está en combinar hábilmente el parámetro **`--ar` (Aspect Ratio)** con directivas de composición inflexibles.

1. **Lienzo panorámico amplio (`--ar 16:9`):** Una hoja técnica exige alinear horizontalmente al menos tres vistas de cuerpo entero. Si usas la proporción cuadrada por defecto (1:1), la IA intentará embutir todas las iteraciones en un espacio asfixiante, provocando horribles fusiones anatómicas o recortes fuera de plano. Forzar un ratio de 16:9 o 3:2 le da a la IA el "oxígeno" horizontal para trazar al personaje con total holgura.
2. **Control absoluto de la iluminación (Flat lighting):** La iluminación dramática o cinematográfica genera ilustraciones épicas, pero es desastrosa para una hoja de referencia. Las sombras marcadas camuflan la topología real y el material de la ropa. Exigir una iluminación plana y sin sombras garantiza un renderizado clínico, 100% funcional para el equipo de producción.

**💡 Consejo PRO:** Una vez que obtengas la imagen perfecta con este prompt, utilízala como imagen base para el parámetro `--cref` (Character Reference) dentro de Midjourney. Esta técnica te permitirá generar infinitas ilustraciones promocionales en poses extremas manteniendo una fidelidad matemática en el rostro, el cabello y el atuendo de tu protagonista.

---

## 🙋 Preguntas frecuentes (FAQ)

- **P: ¿Puedo modificar solo una prenda de ropa o un arma después de generar la hoja base?**
  - R: Absolutamente. En la interfaz de Discord, haz clic derecho en la imagen y selecciona **'Vary (Region)'** (Inpainting). Con la herramienta lazo, selecciona solo el área del atuendo que quieres cambiar, dejando intacto el rostro y la pose. Luego, introduce un prompt puntual (ej. "wearing futuristic heavy armor") y Midjourney alterará únicamente esa sección con una precisión milimétrica.

- **P: ¿Es posible generar esto con estilo anime (para webtoons) en lugar de un estilo realista?**
  - R: Por supuesto. Solo necesitas cambiar el parámetro `--v 6.0` al final del prompt por `--niji 6`, el modelo de Midjourney especializado en estética anime. El resultado será una hoja de personaje impecable en estilo *cel shading*, lista para ser importada como referencia directa en tu pipeline de cómic o juego 2D.

---

## 🧬 Anatomía del prompt (Why it works?)

1. **Blindaje de vistas múltiples (Multiple Views):** Al dictar directivas inequívocas como "Front, Side, Back view", restringimos severamente la libertad creativa de la IA, forzándola a abandonar poses artísticas aleatorias para entregarnos un diseño técnico fraccionado en tres planos.
2. **Pose de producción (A-pose / Full body shot):** Especificar una pose estándar de la industria 3D garantiza que los detalles intrincados del traje, los cinturones y el armamento no queden bloqueados por brazos cruzados o piernas superpuestas.
3. **Aislamiento del entorno:** Al establecer las "reglas del juego" que el LLM debe seguir, erradicamos las alucinaciones y bloqueamos la generación de fondos caóticos que convertirían la extracción del personaje (renderizado alfa) en una pesadilla de Photoshop.

---

## 📊 Demostración: Antes y después

### ❌ Antes (Entrada deficiente)

```text
make a character sheet of a cyberpunk warrior --v 6.0
```

> **Resultado:** La escala de los personajes fluctúa erráticamente en cada vista. Partes vitales de la anatomía quedan tapadas por armas desproporcionadas y las poses son tan caóticas que es imposible descifrar la topología del traje. Peor aún, la IA ha generado una densa metrópolis ciberpunk de fondo, haciendo que recortar al personaje sea inviable.

### ✅ Después (Resultado Pro)

```text
Character sheet of a cyberpunk female warrior with a neon katana and pink hair, front view, side view, back view, full body shot, standard neutral A-pose, plain white background, flat lighting, shadowless, high quality, detailed concept art style --v 6.0 --ar 16:9 --stylize 250
```

> **Resultado:** Sobre un fondo blanco inmaculado (Plain white background), las vistas frontal, lateral y posterior se alinean con proporciones y escalas idénticas. El diseño es 100% visible de pies a cabeza sin un solo recorte. La ausencia de sombras direccionales permite a los modeladores 3D o dibujantes de webtoons absorber cada detalle instantáneamente, sirviendo como una referencia canónica definitiva.

---

## 🎯 Conclusión

Una **hoja de personaje** meticulosamente estructurada actúa como el plano arquitectónico innegociable de cualquier proyecto serio de arte impulsado por IA. Al cimentar estas bases visuales desde el primer paso, garantizas que la esencia y los detalles de tu protagonista jamás colapsen, sin importar en qué caótica situación o entorno lo renderices mañana.

Aplica el marco de prompts que hemos dominado hoy para erradicar de una vez por todas el dolor de cabeza de la inconsistencia visual. ¡Es hora de construir tu propio universo de personajes bajo un verdadero estándar de la industria!

¡Automatiza tu flujo de trabajo y sal temprano del trabajo! 🍷
