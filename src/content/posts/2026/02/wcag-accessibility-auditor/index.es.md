---
layout: /src/layouts/Layout.astro
title: " \"WCAG 2.2 웹 접근성 감사(Audit) 봇\""
author: "Zzabbis"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "프론트엔드"
description: " \"¿Es tu código accesible para todos? Este bot verifica si cumples estrictamente con los estándares de accesibilidad (WCAG).\""
tags: ["Accessibility", "HTML", "WCAG"]
---

# ♿️ ¿Es mi código amable con todos? Bot de auditoría automática de accesibilidad web (WCAG)

- **🎯 Público objetivo:** Desarrolladores en proyectos gubernamentales o corporativos, juniors buscando destacar el detalle en sus portafolios, y desarrolladores frontend senior.
- **⏱️ Tiempo estimado:** De 2 horas de revisión manual a 1 minuto con diagnóstico automático de IA.
- **🤖 Modelo recomendado:** Claude 3.5 Sonnet (análisis de código excepcional), GPT-4o.

- ⭐ **Dificultad:** ⭐☆☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"Puedes crear animaciones espectaculares, pero si alguien ni siquiera puede hacer clic en tu botón de inicio de sesión, ese código es un rotundo fracaso."_

La accesibilidad web (A11y) ya no es un simple "detalle de cortesía", sino el estándar fundamental de un buen servicio y, cada vez más, una obligación legal. Sin embargo, memorizar y aplicar cada punto de las extensas y complejas Pautas de Accesibilidad para el Contenido Web (WCAG 2.2) en tu día a día roza lo imposible. Este prompt escanea tu marcado y código de componentes para detectar en solo un minuto fallas críticas de accesibilidad que afectarían a los lectores de pantalla y a la navegación por teclado, refactorizándolo todo en un código semántico impecable.

---

## ⚡️ Resumen en 3 puntos (TL;DR)

1. **Conversión a marcado semántico:** Transforma el uso abusivo de `<div>` en etiquetas semánticas de HTML5 con propósito real.
2. **Cumplimiento estricto de WCAG 2.2:** Verifica rigurosamente criterios complejos como el contraste de color, la retención del foco (Focus) y el abuso de atributos WAI-ARIA.
3. **Guía de pruebas prácticas:** Proporciona métodos de validación específicos para que pruebes tu código utilizando únicamente el teclado (Tab) y lectores de pantalla (VoiceOver, NVDA).

---

## 🚀 Solución: "Auditor A11y (Accessibility)"

### 🥉 Versión Básica (Basic Version)

Úsala para una revisión rápida cuando tengas dudas sobre la accesibilidad de un botón o un formulario específico.

> **Rol:** Eres un experto en Accesibilidad Web (A11y).
> **Tarea:** Revisa el siguiente código HTML para identificar posibles problemas de accesibilidad al navegar con teclado o usar lectores de pantalla, y refactorízalo usando marcado semántico.
> **Código:**
>
> ```html
> [Pega tu código aquí]
> ```

<br>

### 🥇 Versión Profesional (Pro Version)

Ideal para auditar componentes de UI complejos e interactivos, como modales, menús desplegables (dropdowns) y sistemas de pestañas (tabs).

> **Rol (Role):** Eres un auditor estricto certificado en WCAG 2.2 y un desarrollador frontend senior con 10 años de experiencia.
>
> **Contexto (Context):**
>
> - Objetivo: He desarrollado el componente `[Nombre del componente, ej: Modal de formulario de registro]`.
> - Meta: Los usuarios que solo navegan por teclado y las personas con discapacidad visual (usuarios de lectores de pantalla) deben poder interactuar con esta UI sin encontrar ninguna barrera.
>
> **Tarea (Task):**
>
> 1. **Diagnóstico WCAG 2.2:** Analiza exhaustivamente el código proporcionado para detectar cualquier infracción de los criterios WCAG 2.2 (Nivel AA o superior), incluyendo contraste, movimiento del foco, etiquetas de formularios y texto alternativo.
> 2. **Refactorización Semántica:** Elimina el uso excesivo y sin sentido de `<div>` o `<span>`. Reescribe el código priorizando el uso de etiquetas semánticas nativas de HTML5.
> 3. **Optimización WAI-ARIA:** Aplica estrictamente la "Primera regla de ARIA" (La mejor ARIA es no usar ARIA). Utiliza atributos `aria-*` y `role` única y exclusivamente cuando el HTML nativo no sea suficiente.
> 4. **Trampa de Foco (Focus Trap):** Si es un modal o un popup, diseña un flujo lógico para que el foco del teclado no escape del componente mientras esté abierto.
> 5. **Guía de Validación:** Proporciona un escenario de prueba claro y en 3 líneas que me permita probar este código manualmente usando el teclado (Tab/Shift+Tab, Espacio/Enter) y un lector de pantalla.
>
> **Código (Code):**
>
> ```plaintext
> [Pega el código de tu componente aquí]
> ```
>
> **Restricciones (Constraints):**
>
> - Asegúrate de marcar claramente las áreas donde se necesiten clases ocultas visualmente pero legibles para lectores de pantalla (ej: `sr-only`) y aplícalas al código.

---

## 💡 Comentario del Autor (Insight)

El intento bien intencionado de mejorar la accesibilidad web a menudo termina en una "sopa de atributos WAI-ARIA". Sin embargo, asignar un `aria-label` o un `role` de forma incorrecta causa una confusión catastrófica para los usuarios de lectores de pantalla.
El verdadero poder de este prompt radica en obligar a la IA a respetar la **"Primera regla de ARIA (priorizar siempre las etiquetas HTML nativas)"**.
Al pasar componentes complejos de la vida real, como un Select Box personalizado o un Modal, a través de este prompt, la IA detecta con una precisión asombrosa problemas que solemos pasar por alto, como la pérdida del foco del teclado o la ausencia de etiquetas en los formularios. Especialmente si lo usas con Claude 3.5 Sonnet, la experiencia es idéntica a tener a un experto en accesibilidad extremadamente meticuloso sentado a tu lado haciendo revisión de código (Code Review).

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Puedo auditar la accesibilidad usando solo una imagen del diseño de la interfaz (UI)?**
  - R: ¡Sí, por supuesto! Adjunta una captura de pantalla del componente a GPT-4o o Claude 3.5 Sonnet y añade a tu solicitud: "Verifica si el contraste de color (Color Contrast) cumple con el estándar WCAG Nivel AA". La IA detectará incluso los fallos de diseño visuales que están ocultos a simple vista.

- **P: Estoy usando Tailwind CSS. ¿La IA también ajustará los nombres de las clases por mí?**
  - R: Sí. Simplemente especifica en el "Contexto" del prompt: "Utiliza clases de utilidad de Tailwind CSS (como `sr-only`) para los elementos exclusivos de lectores de pantalla", y la IA generará el código perfectamente adaptado a tu stack tecnológico.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1.  **Criterios de evaluación inflexibles:** En lugar de un vago "mejora la accesibilidad", inyectamos el estándar internacional "WCAG 2.2 Nivel AA" directamente en el rol de la IA, eliminando de raíz las alucinaciones y la información falsa.
2.  **Imposición de la Primera regla de ARIA:** Previene que la IA inunde el código con atributos ARIA innecesarios, forzándola a crear un marcado semántico robusto que exprime al máximo las especificaciones nativas de HTML.
3.  **Guía de pruebas aplicable (Actionable):** No se limita a escupir el "código correcto". Al exigir escenarios de prueba que el desarrollador puede ejecutar manualmente con su teclado, maximizamos el valor y la utilidad práctica en un entorno de trabajo real.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Input: El peor botón posible, construido con un simple `div`)

```html
<div class="submit-btn" onclick="sendData()">
  <img src="send-icon.png" />
  <span>Enviar</span>
</div>
```

### ✅ Después (Output: Soporte nativo y perfecto para teclado y lectores de pantalla)

```html
<!-- Se añade un alt vacío y aria-hidden para que el lector de pantalla ignore la imagen decorativa -->
<!-- Se utiliza una etiqueta de botón nativa que ya soporta la interacción con Enter/Espacio en el teclado por defecto -->
<button type="button" class="submit-btn" onClick="sendData()">
  <img src="send-icon.png" alt="" aria-hidden="true" />
  <span>Enviar</span>
</button>
```

---

## 🎯 Conclusión

Para algunos, la accesibilidad (A11y) puede parecer una simple "característica conveniente", pero para otros, es el enorme muro que define si pueden o no utilizar un servicio. Un buen desarrollador no es simplemente alguien que escribe código que funciona, sino alguien que escribe código que no excluye a un solo usuario.

¡Ahora, escribe un código amable con todos y termina tu jornada a tiempo con la cabeza alta! 🍷
