---
layout: /src/layouts/Layout.astro
title: "¡Mi Código es Basura! Entrenador de Refactorización de Código Limpio"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/TI"
description: "Prompt que actualiza código desordenado que solo funciona a código limpio 'fácil de leer y mantener'."
tags: ["Refactorización", "CódigoLimpio", "Desarrollador", "RevisiónCódigo"]
---

# 📝 ¡Mi Código es Basura! Entrenador de Refactorización de Código Limpio

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos
> **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Dije que lo arreglaría más tarde pero pasó 1 año. Ahora tengo miedo de tocarlo."_

El código espagueti (código enredado) es el enemigo de los desarrolladores. Si la legibilidad es baja, es difícil encontrar bugs y difícil agregar características. Este prompt posee a Robert C. Martin (Autor de Clean Code), lavando y puliendo tu código para hacerlo brillante.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Elimina código duplicado y separa funciones (Extract Method)
2. Mejora nombres de variables/funciones poco claros (Naming Convention)
3. Optimiza el rendimiento y aplica sintaxis moderna (Modern Syntax)

---

## 🚀 La Solución: "Lavandería de Código Limpio"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un `[Evangelista de Código Limpio y Arquitecto Jefe]`.
> **Solicitud:** Crea un prompt que actualice código desordenado que solo funciona a código limpio 'fácil de leer y mantener'.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y úsalo.

> **Rol:** Eres un `[Evangelista de Código Limpio y Arquitecto Jefe]`.
>
> **Contexto:** Mi código funciona, pero es desordenado y difícil de leer (Dirty Code). Refactorízalo para que sea fácil de mantener.
>
> **Tarea:**
>
> 1. **[Sentido de Nombramiento]**: Cambia los nombres de variables y funciones para que sean intuitivos y significativos. (ej., `a` -> `userAge`)
> 2. **[Mejora de Estructura]**: Divide las funciones que son demasiado largas por rol, y combina la lógica duplicada en una.
> 3. **[Modernizar]**: Si es posible, aplica la última sintaxis del lenguaje (ES6+, Python 3.10+, etc.).
> 4. **[Antes y Después]**: Compara dónde y cómo cambió, y explica la razón por la que lo cambiaste así.
>
> **Restricciones:**
>
> - La operación (función) del código nunca debe cambiar.
> - Agrega comentarios solo donde sea absolutamente necesario. (Elimina comentarios si se explica por código)
>
> **Código Objetivo:**
>
> ```python
> [Pega código sucio(?) aquí]
> ```

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

```python
def calc(x, y):
    if x > 19:
        print("Adulto")
        p = y * 0.9
        return p
    else:
        print("Estudiante")
        return y
```

(El nombre de la función `calc` no dice qué calcula, `p` también es poco claro)

### ✅ Después (Resultado del Prompt)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Eres un adulto.")
        return price * DISCOUNT_RATE

    print("Eres un estudiante.")
    return price
```

**[Puntos de Mejora]**

1. **Cambiar Nombre de Función**: `calc` -> `calculate_discounted_price` (Claro que es cálculo de precio con descuento)
2. **Eliminar Números Mágicos**: Se declararon números como `19`, `0.9` como constantes para dar significado.
3. **Eliminar else Innecesario**: Se redujo la profundidad de sangría usando el patrón Early Return.

---

## 🎯 Conclusión

El código bien escrito se lee suavemente como un ensayo bien escrito. Limpia tu código para tu yo futuro (y colegas).

Ahora sal del trabajo a tiempo y date una ducha. Cuerpo, no código. 🍷
