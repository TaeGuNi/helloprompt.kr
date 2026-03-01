---
layout: /src/layouts/Layout.astro
title: "¿Pruebas E2E detenidas por errores? Resuélvelo en 1 minuto con el prompt Auto-healing de Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Revelamos un prompt práctico de IA para recuperar automáticamente las pruebas de Playwright que fallan por cambios en los selectores."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 ¿Pruebas E2E detenidas por errores? Resuélvelo en 1 minuto con el prompt Auto-healing de Playwright 🛠️

- **🎯 Recomendado para:** Ingenieros de control de calidad (QA), desarrolladores frontend, especialistas en automatización de pruebas
- **⏱️ Tiempo requerido:** Se reduce de 2 horas → 1 minuto
- **🤖 Modelo recomendado:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_"La prueba E2E que funcionaba perfectamente hasta ayer falló por completo esta mañana porque cambió una clase CSS de un botón. ¿Tengo que ir a buscar los selectores otra vez?"_
Si trabajas en desarrollo frontend o en control de calidad (QA), es el pan de cada día que las pruebas E2E (End-to-End) fallen debido a cambios en la interfaz de usuario. Especialmente al usar herramientas como Playwright o Cypress, si la estructura del DOM o los nombres de las clases cambian, el código de prueba arrojará errores sin falta. El proceso de ir a la prueba fallida, abrir las herramientas de desarrollador y copiar un nuevo selector cada vez es una enorme pérdida de tiempo. Ahora, entreguemos a la IA los registros de errores y la estructura HTML modificada, y dejemos que realice el 'Auto-healing' (autocorrección) por sí sola.
---
## ⚡️ Resumen en 3 líneas (TL;DR)
1. Es un prompt en el que la IA analiza y repara automáticamente los selectores de Playwright que fallaron debido a cambios en la interfaz de usuario.
2. Más allá de simplemente arreglar el código, puedes recibir sugerencias de estrategias para escribir selectores robustos (Resilient) ante los cambios.
3. Solo proporcionando el registro de errores y la instantánea más reciente del DOM, puedes obtener el código reparado en 1 minuto.
---
## 🚀 Solución: "Prompt de autocorrección (Auto-healing) de Playwright"

### 🥉 Versión Básica (Basic Version)
Úsalo cuando quieras proporcionar rápidamente el código roto y el mensaje de error para recibir el código corregido.
> **Rol:** Eres un `[Ingeniero de QA Senior]`.
> **Tarea:** Basándote en el registro de errores de Playwright y el nuevo HTML proporcionados, corrige el `[código de prueba fallido]`.

### 🥇 Versión Profesional (Pro Version)
Úsalo cuando quieras ir más allá de una simple corrección y refactorizar en un código robusto que sea fácil de mantener.
> **Rol (Role):** Eres un `[Ingeniero de Desarrollo de Software en Pruebas Senior (SDET)]` experto en automatización de pruebas. Comprendes perfectamente las mejores prácticas (Best Practices) de Playwright.
> 
> **Contexto (Context):**
> 
> - Antecedentes: Las pruebas E2E existentes de Playwright están fallando recientemente debido a actualizaciones en la interfaz de usuario. La causa principal es el cambio en los selectores (Selectors).
> - Objetivo: Recuperar el código de prueba fallido y mejorarlo hacia una estructura de selectores más robusta (Resilient) que sea menos propensa a fallar ante futuros cambios en la interfaz de usuario.
> 
> **Tarea (Task):**
> 
> 1. Analiza el `[registro de errores]` y la `[estructura HTML modificada]` proporcionados a continuación para identificar la causa raíz del error.
> 2. Modifica el `[código de prueba existente]` para que la prueba vuelva a pasar.
> 3. Al modificar, prioriza el uso de atributos orientados al usuario (User-Facing) (texto, atributos ARIA, data-testid, etc.) en lugar de depender de clases CSS o XPath.
> 4. Añade un comentario breve en el código explicando el motivo de la modificación, es decir, "por qué se modificó de esta manera".
> 
> **Datos de entrada:**
> - Registro de errores: `[Copiar/pegar el registro de errores completo]`
> - Estructura HTML modificada: `[Fragmento HTML relevante copiado de las herramientas de desarrollador]`
> - Código de prueba existente: `[Fragmento de código de Playwright que falló]`
> 
> **Restricciones (Constraints):**
> 
> - La salida debe proporcionarse en forma de un bloque de código completo que se pueda copiar/pegar inmediatamente.
> - Se deben priorizar los localizadores integrados (Locators) de Playwright (por ejemplo, `getByRole`, `getByText`, `getByTestId`).
> 
> **Advertencia (Warning):**
> 
> - Si no puedes encontrar un elemento adecuado en el fragmento HTML proporcionado, no fuerces una suposición y responde: "No se puede encontrar un selector exacto debido a la falta de información HTML. Por favor, proporcione información adicional del DOM".
---

## 💡 Comentarios del Autor (Insight)
Este método demuestra su verdadero valor en entornos de trabajo reales cuando decenas de pruebas fallan simultáneamente. En el pasado, si cambiaba un selector, yo solía abrir 30 archivos de prueba y buscar uno por uno con `Ctrl + F` para corregirlos. Sin embargo, al registrar este prompt en la IA integrada del IDE o en Claude, y simplemente proporcionar el registro del error y una copia de la pestaña Elements del navegador, puedes subcontratar por completo la tediosa tarea de extraer selectores.
En particular, la clave es la restricción "Usa atributos orientados al usuario (User-Facing)". La IA tiene inherentemente la tendencia a apuntar a la clase CSS más fácil, pero si estableces esta restricción, escribirá un código excelente como `getByRole('button', { name: 'Submit' })`. Es un arma que adelantará tu hora de salida del trabajo al menos en 1 hora. ¡Pruébalo!
---

## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿Qué pasa si la estructura HTML es demasiado larga?**
  - R: No es necesario copiar toda la página; es suficiente copiar y proporcionar hasta la etiqueta padre del elemento que causó el error (por ejemplo, un botón o un formulario).
- **P: ¿Se puede usar en Cypress o Selenium además de Playwright?**
  - R: Sí, solo cambia la palabra 'Playwright' en el prompt por el nombre de la herramienta que estés utilizando y funcionará igual de bien.
- **P: ¿Funcionará bien incluso en proyectos que no tengan `data-testid`?**
  - R: Sí, la IA encuentra inteligentemente alternativas basadas en la accesibilidad, como `getByRole` o `getByText`.
---
## 🧬 Anatomía del Prompt (Why it works?)
1. **Asignación de la persona SDET:** Al darle la perspectiva de un ingeniero de pruebas experto en lugar de un desarrollador general, se indujo la generación de código que no solo funciona, sino que se ajusta a las mejores prácticas de Playwright.
2. **Forzar localizadores orientados al usuario (User-Facing Locators):** Se mejoró la calidad forzando a nivel de prompt la filosofía central de Playwright, que reduce fundamentalmente la inestabilidad (Flakiness) de las pruebas.
3. **Dispositivo de seguridad contra alucinaciones:** Para evitar el fenómeno de generar código sin sentido cuando falta información, lo que complica aún más la depuración, se estableció una restricción explícita: "Si no lo sabes, di que no lo sabes".
---
## 📊 Demostración: Antes y Después (Before & After)
### ❌ Antes (Entrada)
```text
Registro de errores:
Error: locator.click: Target closed
=========================== logs ===========================
waiting for locator('.btn-primary.submit-btn')
============================================================
Estructura HTML modificada:
<div class="actions">
  <button class="button--blue" aria-label="Submit Order">Order Now</button>
</div>
Código de prueba existente:
await page.locator('.btn-primary.submit-btn').click();
```
### ✅ Después (Resultado)
```typescript
// Motivo del cambio: La prueba falló debido a que la clase CSS ('.btn-primary.submit-btn') cambió.
// Mejora: En lugar de clases CSS que son propensas a cambiar, se utilizaron atributos de accesibilidad (etiqueta ARIA) y el Rol (Role) para hacerlo más robusto frente a cambios en la UI.
await page.getByRole('button', { name: 'Submit Order' }).click();
```
---
## 🎯 Conclusión
El código de prueba es un escudo que protege el código del producto, pero no debes perder demasiado tiempo puliendo ese escudo. Escapa del infierno del mantenimiento con el prompt Auto-healing impulsado por IA.
¡Ahora deja que la IA se encargue del tiempo de arreglar pruebas, mientras tú disfrutas de un café y sales del trabajo a tiempo! 🍷
