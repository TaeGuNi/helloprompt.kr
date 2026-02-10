---
layout: /src/layouts/Layout.astro
title: "Refactorizar Código Sucio a Código Limpio en 1 Segundo"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt que transforma código espagueti complejo en código limpio fácil de leer y mantener."
tags: ["Refactorización", "Código Limpio", "Mantenimiento", "Productividad Dev"]
---

# 📝 Refactorizar Código Sucio a Código Limpio en 1 Segundo

**🎯 Recomendado para:** Todos
**⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Ni siquiera puedo reconocer el código que escribí... ¿Cómo desenredo este espagueti?"_

Todos hemos tenido la experiencia de escribir nombres de variables desordenados porque teníamos prisa, o tener una sola función que supera las 100 líneas.
¿Qué pasaría si hubiera un secretario que refactorizara el código que te avergüenza mostrar a tus colegas en **estándares de 'Código Limpio'**?
Con solo este prompt, puedes capturar la legibilidad, el rendimiento y la mantenibilidad de una vez.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Cambiar intuitivamente nombres de variables/funciones
2. Eliminar código duplicado y separar funciones
3. Aplicar sintaxis reciente y optimizar el rendimiento

---

## 🚀 La Solución: "Refactorizador de Código Limpio"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

**Rol:** Eres un Ingeniero de Software Senior con 20 años de experiencia y un experto en 'Código Limpio'.
**Solicitud:** Transforma código espagueti complejo en código limpio fácil de leer y mantener.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un Ingeniero de Software Senior con 20 años de experiencia y un experto en 'Código Limpio'.
>
> **Contexto:** El código que escribí funciona, pero tiene poca legibilidad y es difícil de mantener. Los nombres de variables no son claros y hay mucha lógica duplicada.
>
> **Tarea:**
> Refactoriza el código proporcionado a continuación de acuerdo con los siguientes criterios:
>
> 1. **Nombres:** Cambia los nombres de variables y funciones para que su intención sea claramente conocida.
> 2. **Separación de Funciones:** Divide las funciones en partes más pequeñas para que una función haga solo una cosa (SRP).
> 3. **Eliminar Duplicados:** Extrae la lógica repetida en funciones o utilidades separadas.
> 4. **Comentarios:** Agrega comentarios solo a las partes donde se necesita explicación sobre 'Por qué' el código fue escrito de esa manera.
> 5. **Sintaxis Moderna:** Aplica la última sintaxis moderna del lenguaje.
>
> **Código:**
>
> ```
> [Pega el código a refactorizar aquí]
> ```
>
> **Restricciones:**
>
> - Nunca cambies la lógica de negocio (comportamiento) del código existente.
> - Resume los cambios principales antes y después de la refactorización en una lista.
> - Muestra la salida dividida en un bloque de código y un bloque de explicación.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

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

### ✅ Después (Resultado)

```javascript
/**
 * Calcula el monto total del carrito.
 * Aplica un descuento del 10% para artículos de más de 100 wones.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((total, item) => {
    const finalPrice =
      item.price > DISCOUNT_THRESHOLD ? item.price * DISCOUNT_RATE : item.price;
    return total + finalPrice;
  }, 0);
}
```

_Cambios: `calc` -> `calculateTotalPrice`, `d` -> `items`, números mágicos a constantes, uso de `reduce`._

---

## 🎯 Conclusión

No procrastines diciendo "Lo arreglaré más tarde" nunca más.
¡Convierte el código maloliente en código fragante en 3 segundos con este prompt y vete a casa! 🍷
