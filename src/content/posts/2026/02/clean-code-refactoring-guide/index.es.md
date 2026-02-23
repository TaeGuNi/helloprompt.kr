---
layout: /src/layouts/Layout.astro
title: "Refactorizar Código Sucio a Código Limpio en 1 Segundo"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt que transforma código espagueti complejo en un código limpio, fácil de leer y mantener."
tags: ["Refactorización", "Código Limpio", "Mantenimiento", "Productividad Dev"]
---

# 📝 Refactorizar Código Sucio a Código Limpio en 1 Segundo

- **🎯 Recomendado para:** Desarrolladores Junior, Ingenieros de Software, Líderes Técnicos
- **⏱️ Tiempo requerido:** 5 minutos → Reducido a 1 minuto
- **🤖 Modelo recomendado:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (Modelos avanzados de codificación)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"Ni siquiera puedo reconocer el código que escribí hace un mes... ¿Cómo desenredo este espagueti sin romper todo el sistema?"_

Todos hemos pasado por esto: variables con nombres incomprensibles creadas bajo la presión de una fecha de entrega, o funciones monolíticas que superan las 100 líneas y hacen de todo.
¿Qué pasaría si tuvieras a un ingeniero senior a tu lado, listo para refactorizar ese código del que te avergüenzas, llevándolo a los más estrictos **estándares de 'Clean Code'**?
Con este prompt, puedes mejorar drásticamente la legibilidad, el rendimiento y la mantenibilidad de tu código en un abrir y cerrar de ojos, sin alterar su lógica de negocio.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Renombrado Intuitivo:** Transforma variables crípticas en nombres descriptivos que revelan su intención.
2. **Principio de Responsabilidad Única (SRP):** Divide funciones gigantes en unidades pequeñas y testeables.
3. **Modernización de Sintaxis:** Actualiza código heredado a los estándares y mejores prácticas de los lenguajes modernos.

---

## 🚀 La Solución: "Refactorizador de Código Limpio"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites un arreglo rápido para un fragmento pequeño de código.

> **Rol:** Eres un Ingeniero de Software Senior experto en 'Clean Code'.
> **Solicitud:** Refactoriza el siguiente código para que sea limpio, legible y fácil de mantener, sin cambiar su comportamiento.

<br>

### 🥇 Versión Pro (Pro Version)

Úsala para refactorizaciones profundas y detalladas donde la calidad arquitectónica es primordial.

> **Rol (Role):** Eres un Ingeniero de Software Senior con más de 20 años de experiencia y un purista del 'Clean Code' y los principios SOLID.
>
> **Contexto (Context):**
>
> - **Fondo:** El código que escribí funciona y cumple con los requisitos, pero su legibilidad es pésima y es una pesadilla de mantener. Los nombres de las variables son oscuros y hay demasiada lógica duplicada.
> - **Objetivo:** Transformar este código espagueti en código limpio, profesional y altamente mantenible.
>
> **Tarea (Task):**
> Refactoriza el código proporcionado a continuación siguiendo estrictamente estos criterios:
>
> 1. **Nomenclatura (Naming):** Cambia los nombres de variables y funciones para que revelen claramente su intención.
> 2. **Separación de Responsabilidades (SRP):** Divide las funciones monolíticas en funciones más pequeñas donde cada una haga exactamente una cosa.
> 3. **DRY (Don't Repeat Yourself):** Extrae cualquier lógica repetida en funciones auxiliares o utilidades separadas.
> 4. **Comentarios Estratégicos:** No comentes lo que hace el código (el código debe explicarse por sí mismo). Agrega comentarios solo para explicar el 'Por qué' detrás de decisiones arquitectónicas o de negocio complejas.
> 5. **Sintaxis Moderna:** Refactoriza utilizando las características y convenciones más recientes y eficientes del lenguaje correspondiente.
>
> **Código a refactorizar:**
> [Pega tu código aquí]
>
> **Restricciones (Constraints):**
>
> - ¡CRÍTICO! NO alteres en lo más mínimo la lógica de negocio ni el resultado esperado del código existente.
> - Proporciona una lista de viñetas resumiendo los principales cambios realizados (El "Antes y Después").
> - Presenta tu respuesta dividiendo claramente la sección de explicación y el bloque de código final.

---

## 💡 Comentario del Autor (Insight)

La verdadera magia de este prompt radica en la restricción: _"NO alteres la lógica de negocio"_. Al delegar la refactorización a la IA, el mayor miedo de un desarrollador es que el código deje de funcionar. He utilizado este prompt innumerables veces para "limpiar la casa" antes de abrir un Pull Request. Funciona de manera excepcional con modelos como Claude 3.5 Sonnet, que tienen una comprensión del contexto de código superior. **Un consejo profesional:** si tienes pruebas unitarias (Unit Tests) escritas para el código original, adjúntalas también en el prompt. La IA las usará como garantía para asegurar que la refactorización no rompa absolutamente nada.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿La IA podría introducir errores sutiles o cambiar el comportamiento de mi código?**
  - A: Aunque el prompt prohíbe explícitamente cambiar la lógica, siempre existe un riesgo mínimo. Es fundamental que **nunca confíes ciegamente** en el código generado. Revisa siempre el _diff_ y asegúrate de ejecutar tus pruebas antes de integrar los cambios.

- **Q: ¿Funciona esto para cualquier lenguaje de programación?**
  - A: ¡Sí! Modelos como GPT-4 y Claude son políglotas. Ya sea que uses JavaScript, Python, Go, Java o Rust, la IA aplicará las convenciones idiomáticas específicas del lenguaje (como `snake_case` en Python o `camelCase` en JS).

- **Q: ¿Qué pasa si mi código depende de bibliotecas externas específicas?**
  - A: Si tu código usa hooks de React o métodos de Lodash, menciónalo en el `Contexto` del prompt (ej. "Este código usa React 18 y TailwindCSS"). La IA adaptará la refactorización utilizando las mejores prácticas de esas herramientas.

---

## 🧬 Anatomía del Prompt (Why it works?)

1. **Definición del Purista (Role):** Al especificar "purista de Clean Code y principios SOLID", obligamos a la IA a no solo hacer que el código "se vea bonito", sino a reestructurarlo arquitectónicamente.
2. **Reglas de Comentarios (Task 4):** Evita que la IA llene el código con comentarios inútiles como `// Itera sobre el array`, forzando un código auto-documentado.
3. **Restricción de Seguridad (Constraints):** La instrucción "¡CRÍTICO! NO alteres la lógica de negocio" actúa como una barrera de seguridad (guardrail) vital contra las alucinaciones de la IA.

---

## 📊 Prueba: Before & After

### ❌ Before (Entrada)

```javascript
function calc(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i].price > 100) {
      t += d[i].price * 0.9;
    } else {
      t += d[i].price;
    }
  }
  return t;
}
```

### ✅ After (Resultado)

```javascript
/**
 * Calcula el monto total del carrito de compras.
 * NOTA: Por regla de negocio, los artículos de más de $100 reciben un descuento del 10%.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((total, item) => {
    const isEligibleForDiscount = item.price > DISCOUNT_THRESHOLD;
    const finalPrice = isEligibleForDiscount
      ? item.price * DISCOUNT_RATE
      : item.price;

    return total + finalPrice;
  }, 0);
}
```

_Cambios aplicados: `calc` → `calculateTotalPrice`, variables oscuras `d` → `items`, eliminación de números mágicos mediante constantes, y transición de un bucle `for` imperativo a un método funcional `reduce`._

---

## 🎯 Conclusión

No pospongas la deuda técnica diciendo "Lo arreglaré más tarde".
Con este prompt, puedes transformar ese código maloliente en una obra de arte profesional en cuestión de segundos. ¡Refactoriza sin miedo, aprueba tus revisiones de código (Code Reviews) a la primera y vete a casa temprano! 🍷
