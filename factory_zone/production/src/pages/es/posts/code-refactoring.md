---
layout: /src/layouts/Layout.astro
title: "¡Mi código es basura! Entrenador de refactorización de código limpio"
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Programación/TI"
description: "Un prompt para actualizar código sucio que solo funciona a código limpio, 'fácil de leer y mantener'."
tags: ["refactorización", "código limpio", "desarrollador", "revisión de código"]
---

# 📝 ¡Mi código es basura! Entrenador de refactorización de código limpio

- **🎯 Recomendado para:** Todos
- **⏱️ Tiempo requerido:** 5 minutos
- **🤖 Modelo recomendado:** Todos los modelos de IA

- **📊 Dificultad:** ⭐⭐☆☆☆
- **⚡️ Eficacia:** ⭐⭐⭐⭐⭐
- **🛠️ Utilidad:** ⭐⭐⭐⭐☆

_"Dije que lo arreglaría más tarde y ya pasó un año. Ahora me da miedo tocarlo."_

El código espagueti (código enredado) es el enemigo de los desarrolladores. Si la legibilidad es mala, es difícil encontrar errores y agregar funciones. Este prompt hace que Robert C. Martin (autor de Clean Code) te posea, lavando y puliendo tu código hasta dejarlo brillante.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Eliminación de código duplicado y separación de funciones (Extract Method)
2. Mejora de variables/nombres de funciones poco claros (Naming Convention)
3. Optimización del rendimiento y aplicación de sintaxis moderna (Modern Syntax)

---

## 🚀 Solución: "Lavandería de Código Limpio"

### 🥉 Versión Básica (Basic Version)

Úsalo cuando solo necesites resultados rápidos.

> **Rol:** Eres un `[evangelista de código limpio y arquitecto jefe]`.
> **Solicitud:** Actualiza este código sucio que solo funciona a un código limpio, 'fácil de leer y mantener'.

<br>

### 🥇 Versión Pro (Pro Version)

Úsalo cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación para usarlo.

> **Rol (Role):** Eres un `[evangelista de código limpio y arquitecto jefe]`.
>
> **Contexto (Context):** Mi código funciona, pero está sucio y es difícil de leer (Dirty Code). Refactorízalo para que sea fácil de mantener.
>
> **Tarea (Task):**
>
> 1. **[Sentido de Nombramiento]**: Cambia los nombres de variables y funciones para que sean intuitivos y significativos. (Ej: `a` -> `userAge`)
> 2. **[Mejora de Estructura]**: Divide las funciones demasiado largas por roles y combina la lógica duplicada en una sola.
> 3. **[Modernize]**: Si es posible, aplica la sintaxis de lenguaje más reciente (ES6+, Python 3.10+, etc.).
> 4. **[Before & After]**: Compara qué cambió y cómo, y explica por qué lo cambiaste.
>
> **Restricciones (Constraints):**
>
> - El comportamiento (función) del código nunca debe cambiar.
> - Añade comentarios (Comment) solo donde sea absolutamente necesario. (Si el código se explica por sí mismo, elimina el comentario)
>
> **Código objetivo:**

> [Pega tu código sucio(?) aquí]

---

## 🧬 Anatomía del Prompt (Why it works?)

Este prompt está diseñado para captar con precisión la intención de la IA combinando una configuración de persona clara e instrucciones específicas (Task). Induce el pensamiento paso a paso (Chain of Thought) para obtener respuestas lógicas.

---

## 📊 Prueba: Antes y Después (Before & After)

La diferencia entre comandos simples y prompts optimizados es clara. Al usar el prompt proporcionado, puedes obtener respuestas más específicas y estructuradas, ahorrando tiempo en volver a preguntar (Re-prompting).

### ❌ Antes (Entrada)

```python
def calc(x, y):
    if x > 19:
        print("성인")
        p = y * 0.9
        return p
    else:
        print("학생")
        return y
```

(El nombre de la función `calc` no dice qué calcula, y `p` tampoco tiene un significado claro)

### ✅ Después (Resultado del Prompt)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("성인입니다.")
        return price * DISCOUNT_RATE

    print("학생입니다.")
    return price
```

**[Puntos de mejora]**

1. **Cambio de nombre de función**: `calc` -> `calculate_discounted_price` (Queda claro que calcula un precio con descuento)
2. **Eliminación de números mágicos**: Se asignó significado a números como `19` y `0.9` declarándolos como constantes.
3. **Eliminación de else innecesario**: Se usó el patrón Early Return para reducir la profundidad de la sangría.

---

## 💡 Comentario del Autor (Insight)

Este prompt se centró en la practicidad para ser utilizado inmediatamente en el trabajo real.
Si el resultado no es satisfactorio, intenta configurar las variables de entrada o la situación (Context) con un poco más de detalle.

---

## 🙋 Preguntas Frecuentes (FAQ)

**P. No me gusta el resultado.**
R. Agrega ejemplos concretos o describe la situación (Context) con más detalle.

**P. ¿Es posible en otros idiomas?**
R. Sí, es posible traduciendo las instrucciones del prompt al idioma correspondiente.

---

## 🎯 Conclusión

Un código bien escrito se lee tan fácilmente como un buen ensayo. Limpia tu código para tu yo futuro (y tus colegas).

Ahora sal del trabajo a tiempo y date una ducha. Tu cuerpo, no el código. 🍷