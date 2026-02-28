---
layout: /src/layouts/Layout.astro
title: " \"¡Mi código es basura! Entrenador de refactorización de código limpio\""
author: "Jay"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Programación/TI"
description: " \"Un prompt para transformar código espagueti en código limpio, legible y fácil de mantener.\""
tags:
  ["refactorización", "código limpio", "desarrollador", "revisión de código"]
---

# 📝 ¡Mi código es basura! Entrenador de refactorización de código limpio

- **🎯 Recomendado para:** Desarrolladores de todos los niveles, líderes técnicos, revisores de código
- **⏱️ Tiempo requerido:** 5 minutos → 1 minuto
- **🤖 Modelo recomendado:** Todos los modelos de IA conversacional (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"Dije que lo arreglaría más tarde y ya pasó un año. Ahora, cada vez que abro ese archivo, me da pánico tocarlo."_

El código espagueti es el mayor enemigo de la productividad de cualquier desarrollador. Cuando la legibilidad es pobre, encontrar un simple error o añadir una nueva funcionalidad se convierte en una pesadilla. Este prompt invocará el espíritu de Robert C. Martin (autor de _Clean Code_) directamente en tu IA, lavando y puliendo tu código hasta dejarlo impecable, estructurado y fácil de mantener.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Eliminación de duplicados:** Extrae métodos y separa responsabilidades de forma automática.
2. **Convenciones de nomenclatura:** Transforma nombres de variables y funciones crípticos en identificadores claros y semánticos.
3. **Sintaxis moderna:** Optimiza el rendimiento aplicando las características más recientes y eficientes de tu lenguaje de programación.

---

## 🚀 Solución: "Lavandería de Código Limpio"

### 🥉 Versión Básica (Basic Version)

Úsalo cuando necesites una mejora rápida sin demasiadas explicaciones.

> **Rol:** Eres un experto arquitecto de software y evangelista del Clean Code.
> **Solicitud:** Refactoriza el siguiente código para que sea limpio, legible y fácil de mantener, aplicando las mejores prácticas de la industria de la programación.


### 🥇 Versión Pro (Pro Version)

Úsalo cuando necesites una reestructuración profunda con justificaciones arquitectónicas.

> **Rol (Role):** Eres un Senior Staff Engineer y un estricto evangelista del Clean Code.
>
> **Contexto (Context):**
>
> - Fondo: Mi código funciona correctamente, pero es código espagueti (Dirty Code) y su mantenimiento es un dolor de cabeza.
> - Objetivo: Refactorizarlo hacia un estándar profesional, haciéndolo altamente legible, modular y fácil de mantener.
>
> **Tarea (Task):**
>
> 1. **[Nomenclatura Semántica]:** Cambia los nombres de variables y funciones para que revelen su intención de forma clara e inequívoca (Ej: `a` -> `userAge`).
> 2. **[Estructura y Modularidad]:** Divide las funciones que hacen demasiadas cosas (SRP) y consolida la lógica duplicada extrayendo métodos (DRY).
> 3. **[Modernización]:** Aplica la sintaxis más moderna e idiomática del lenguaje (ej. ES6+ en JavaScript, Python 3.10+, etc.) para mejorar el rendimiento y la seguridad.
> 4. **[Análisis Before & After]:** Proporciona un breve desglose explicando exactamente qué cambiaste y, lo más importante, _por qué_ lo cambiaste basándote en principios de diseño de software.
>
> **Restricciones (Constraints):**
>
> - La lógica de negocio y el comportamiento del código **NO** deben cambiar bajo ninguna circunstancia.
> - Añade comentarios **solo** cuando sea absolutamente necesario para explicar el "por qué" de una decisión compleja. Si el código se explica por sí mismo, omite los comentarios y deja que las variables hablen.
> - Presenta el código refactorizado en un bloque de código markdown limpio.
>
> **Código Objetivo:**
>
>
> [Pega tu código sucio aquí]
>
---

## 💡 Comentario del Autor (Insight)

La refactorización manual puede consumir horas, especialmente cuando te enfrentas a código heredado (legacy code) escrito por otra persona (o por ti mismo hace 6 meses). Este prompt es una herramienta indispensable en mi flujo de trabajo diario. No solo reescribe el código, sino que el paso de **[Análisis Before & After]** actúa como un mentor personal. He notado que los desarrolladores junior que usan este prompt mejoran drásticamente sus propias habilidades de escritura, ya que aprenden patrones de diseño y convenciones idiomáticas en tiempo real.

_Consejo:_ Si el código a refactorizar es demasiado largo (más de 300 líneas), divídelo en fragmentos lógicos antes de pasárselo a la IA para evitar que alucine u omita detalles importantes.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿La IA podría romper la lógica de mi código al refactorizarlo?**
  - A: Aunque la restricción prohíbe cambiar el comportamiento, los LLMs pueden cometer errores en lógicas muy complejas. Siempre es obligatorio tener pruebas unitarias (Unit Tests) que respalden el código antes de reemplazarlo a ciegas en el entorno de producción.

- **Q: ¿Funciona igual de bien para lenguajes antiguos o menos comunes?**
  - A: Sí, pero la calidad del "Clean Code" generado brillará más en lenguajes populares (JavaScript, Python, Java, C#, Go) debido a la inmensa cantidad de datos de entrenamiento disponibles. Para lenguajes de nicho, te recomiendo especificar el estándar de estilo exacto en el prompt (ej. "Usa la guía de estilo idiomática de Rust").

- **Q: ¿Qué pasa si la IA elimina comentarios importantes que ya tenía?**
  - A: Si tienes comentarios de negocio críticos, añade una regla extra en la sección de restricciones: "- Conserva todos los comentarios existentes que expliquen reglas de negocio específicas."

---

## 🧬 Anatomía del Prompt (Why it works?)

1. **Asignación de Rol Senior:** Al definir a la IA como un _Senior Staff Engineer_, forzamos al modelo a adoptar un estándar de calidad mucho más alto, evitando refactorizaciones perezosas.
2. **Enfoque Educativo:** Pedir un análisis estructurado del "Antes y Después" previene que la IA simplemente escupa código, obligándola a razonar sus pasos (Chain-of-Thought) y garantizando una mayor precisión en el resultado final.
3. **Restricción de Comentarios (Anti-ruido):** Las IAs tienden a sobre-comentar código trivial (ej. `// suma a y b`). La regla estricta de "código autoexplicativo" mantiene el resultado limpio y verdaderamente profesional.

---

## 📊 Prueba: Antes y Después (Before & After)

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

### ✅ Después (Resultado)

```python
def calculate_discounted_price(age: int, price: float) -> float:
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Adulto")
        return price * DISCOUNT_RATE

    print("Estudiante")
    return price
```

**[Desglose de la mejora]**

- **Nomenclatura Semántica:** `calc` se convirtió en `calculate_discounted_price`, revelando exactamente la intención. `x` e `y` pasaron a ser `age` y `price`.
- **Eliminación de Números Mágicos:** `19` y `0.9` ahora son constantes con nombres descriptivos (`ADULT_AGE_THRESHOLD`, `DISCOUNT_RATE`).
- **Retorno Anticipado (Early Return):** Se eliminó el bloque `else` innecesario, reduciendo la anidación lógica y mejorando la legibilidad.
- **Tipado Estático (Type Hints):** Se añadieron anotaciones de tipo modernas en Python para hacer el código más robusto, predecible y fácil de documentar.

---

## 🎯 Conclusión

Un código bien escrito se lee con la misma fluidez que una buena novela. Refactorizar no es un lujo, es una necesidad para la salud a largo plazo de cualquier proyecto. Limpia tu código hoy como un favor a tu yo del futuro (y a la salud mental de tus colegas).

¡Refactoriza, haz tu _commit_, y sal del trabajo a tiempo! 🍷
