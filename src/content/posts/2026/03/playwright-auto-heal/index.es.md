---
layout: /src/layouts/Layout.astro
title: "¿Pruebas E2E fallando? Repáralas en 1 minuto con este prompt de Auto-Healing para Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Descubre un prompt práctico de IA diseñado para reparar automáticamente las pruebas de Playwright que fallan por cambios en los selectores del DOM."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---

# 📝 ¿Pruebas E2E fallando? Repáralas en 1 minuto con este prompt de Auto-Healing para Playwright 🛠️

- **🎯 Recomendado para:** Ingenieros QA, desarrolladores frontend, especialistas en automatización de pruebas
- **⏱️ Tiempo requerido:** 2 horas → 1 minuto
- **🤖 Modelo recomendado:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_"La prueba E2E que funcionaba perfectamente hasta ayer hoy ha fallado estrepitosamente porque alguien cambió la clase CSS de un botón. ¿En serio tengo que volver a inspeccionar los selectores uno por uno?"_

Si trabajas en desarrollo frontend o en QA, sabes que el pan de cada día son las pruebas E2E (End-to-End) que se rompen tras cualquier cambio en la interfaz de usuario. Especialmente con herramientas como Playwright o Cypress, basta con que varíe la estructura del DOM o el nombre de una clase para que el código empiece a lanzar errores sin piedad. El proceso de ir a la prueba que falló, abrir las DevTools e inspeccionar un nuevo selector cada vez es una fuga de tiempo enorme. A partir de ahora, mejor deleguemos esto: entreguémosle a la IA los registros de errores y la nueva estructura HTML, y dejemos que aplique su magia de *Auto-healing* (autorreparación).

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Es un prompt que permite a la IA analizar y reparar automáticamente los selectores de Playwright que se rompen tras cambios en la UI.
2. No solo arregla el código, sino que sugiere estrategias para crear selectores mucho más robustos (resilientes) frente a futuras modificaciones.
3. Solo necesitas pegarle el registro de errores (log) y una captura del DOM actual para obtener el código corregido en apenas 1 minuto.

---

## 🚀 Solución: "Prompt de Auto-Healing para Playwright"

### 🥉 Versión Básica (Basic Version)

Úsala cuando tienes prisa y solo necesitas arrojar el código roto y el error para obtener una solución rápida.

> **Rol:** Eres un `[Ingeniero de QA Senior]`.
> **Tarea:** Basándote en el registro de errores de Playwright y en el nuevo HTML que te proporciono a continuación, corrige el `[código de prueba fallido]`.

### 🥇 Versión Profesional (Pro Version)

Úsala cuando quieras ir más allá del simple "parche" y busques refactorizar hacia un código robusto y altamente mantenible.

> **Rol (Role):** Eres un `[Ingeniero de Desarrollo de Software en Pruebas Senior (SDET)]` experto en automatización. Dominas a la perfección las mejores prácticas (Best Practices) de Playwright.
> 
> **Contexto (Context):**
> 
> - Antecedentes: Las pruebas E2E existentes en Playwright han empezado a fallar recientemente debido a actualizaciones en la interfaz de usuario. La causa principal radica en cambios en los selectores (Selectors).
> - Objetivo: Recuperar el código de prueba fallido y refactorizarlo hacia una estructura de selectores más robusta (Resilient), minimizando su vulnerabilidad ante futuros cambios en la UI.
> 
> **Tarea (Task):**
> 
> 1. Analiza el `[registro de errores]` y la `[estructura HTML modificada]` proporcionados a continuación para identificar la causa raíz del fallo.
> 2. Modifica el `[código de prueba existente]` para que la prueba vuelva a pasar con éxito.
> 3. Al refactorizar, prioriza el uso de atributos orientados al usuario (User-Facing) (como texto visible, atributos ARIA, data-testid, etc.) en lugar de depender de clases CSS o rutas XPath frágiles.
> 4. Añade un breve comentario en el código explicando la justificación del cambio (es decir, el "por qué" se modificó de esa forma).
> 
> **Datos de entrada:**
> - Registro de errores: `[Pega aquí el registro de errores completo]`
> - Estructura HTML modificada: `[Pega aquí el fragmento de HTML relevante desde las DevTools]`
> - Código de prueba existente: `[Pega aquí el fragmento de código de Playwright que falló]`
> 
> **Restricciones (Constraints):**
> 
> - La respuesta debe ser exclusivamente un bloque de código completo que se pueda copiar y pegar directamente.
> - Es obligatorio priorizar los localizadores integrados (Locators) recomendados por Playwright (por ejemplo, `getByRole`, `getByText`, `getByTestId`).
> 
> **Advertencia (Warning):**
> 
> - Si no logras identificar el elemento correcto con el fragmento HTML proporcionado, no inventes una solución. Responde estrictamente: "No es posible encontrar un selector exacto por falta de contexto en el HTML. Por favor, proporciona más información del DOM".

---

## 💡 Comentarios del Autor (Insight)

El verdadero valor de este enfoque brilla en entornos reales cuando decenas de pruebas colapsan al mismo tiempo. Antes, si cambiaba un componente base, me tocaba abrir 30 archivos de prueba y buscar con `Ctrl + F` para corregir los selectores uno por uno. Hoy, guardando este prompt en la IA integrada del IDE (o en Claude) y pasándole simplemente el log de error junto a un fragmento de la pestaña *Elements*, delegas por completo la tediosa labor de cazar selectores.

La clave maestra de este prompt es la restricción de "usar atributos orientados al usuario (User-Facing)". Por defecto, la IA tiende a irse por el camino fácil apuntando a la primera clase CSS que encuentra. Al imponer esta regla, la obligamos a generar código de alta calidad como `getByRole('button', { name: 'Submit' })`. Es una herramienta letal que te ahorrará, como mínimo, una hora de tu jornada. ¡Ponla a prueba!

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Qué hago si la estructura HTML es demasiado extensa?**
  - R: No hace falta copiar la página entera. Basta con copiar desde la etiqueta padre que contiene al elemento conflictivo (por ejemplo, el contenedor del formulario o la tarjeta específica).
- **P: ¿Sirve también para Cypress o Selenium?**
  - R: ¡Por supuesto! Solo cambia la palabra 'Playwright' en el prompt por la herramienta que utilices y los resultados serán igual de buenos.
- **P: ¿Funcionará bien en proyectos que no utilizan `data-testid`?**
  - R: Sí, la IA es lo suficientemente inteligente como para encontrar alternativas basadas en accesibilidad, recurriendo a selectores como `getByRole` o `getByText`.

---

## 🧬 Anatomía del Prompt (Why it works?)

1. **Asignación del rol SDET:** Al otorgarle la perspectiva de un ingeniero de pruebas de élite en lugar de un desarrollador genérico, forzamos la generación de código que no solo funciona, sino que respeta estrictamente las mejores prácticas de Playwright.
2. **Imposición de localizadores orientados al usuario (User-Facing Locators):** Elevamos la calidad del resultado obligando a la IA a seguir la filosofía central de Playwright directamente desde el prompt. Esto reduce drásticamente la inestabilidad (Flakiness) de las pruebas.
3. **Escudo contra alucinaciones:** Para evitar que la IA invente código inútil ante la falta de información (lo que solo añadiría más tiempo de depuración), establecimos una regla inquebrantable: "Si no tienes el contexto, di que no lo sabes".

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
// Motivo del cambio: La prueba falló debido a la modificación de la clase CSS ('.btn-primary.submit-btn').
// Mejora: Se reemplazó la dependencia de clases CSS frágiles por atributos de accesibilidad (etiqueta ARIA y Role), garantizando mayor resiliencia ante futuros cambios de UI.
await page.getByRole('button', { name: 'Submit Order' }).click();
```

---

## 🎯 Conclusión

El código de prueba es el escudo que protege al código de producción, pero no deberías perder la mitad de tu día puliendo ese escudo. Escapa del infierno del mantenimiento infinito utilizando este prompt de Auto-Healing potenciado por IA.

¡Deja que la IA lidie con las pruebas rotas mientras tú te tomas un café y cierras tu jornada a tiempo! 🍷
