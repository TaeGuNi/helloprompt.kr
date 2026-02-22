---
layout: /src/layouts/Layout.astro
title: "¡Mi Código es Basura! Entrenador de Refactorización de Código Limpio"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/TI"
description: "Prompt que transforma código desordenado que apenas funciona en código limpio, legible y fácil de mantener."
tags: ["Refactorización", "CódigoLimpio", "Desarrollador", "RevisiónCódigo"]
---

# 📝 ¡Mi Código es Basura! Entrenador de Refactorización de Código Limpio

- **🎯 Recomendado para:** Desarrolladores de todos los niveles, Ingenieros de Software, Estudiantes de TI
- **⏱️ Tiempo requerido:** 5 minutos → Reducido a 1 minuto
- **🤖 Modelo recomendado:** Todos los modelos de IA conversacional (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"Dije que lo arreglaría más tarde, pero ya pasó un año. Ahora me aterra siquiera tocar ese archivo."_

El código espagueti es el enemigo público número uno de cualquier equipo de desarrollo. Cuando la legibilidad es pobre, encontrar _bugs_ se convierte en una pesadilla y agregar nuevas funcionalidades es casi imposible. Este _prompt_ invoca el espíritu de Robert C. Martin (autor de _Clean Code_), analizando, lavando y puliendo tu código hasta dejarlo impecable.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Extracción de métodos:** Elimina el código duplicado y modulariza funciones extensas.
2. **Nomenclatura semántica:** Reemplaza nombres de variables y funciones ambiguos por términos descriptivos y claros.
3. **Sintaxis moderna:** Optimiza el rendimiento aplicando las características más recientes de tu lenguaje de programación.

---

## 🚀 La Solución: "Lavandería de Código Limpio"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites un resultado rápido sin demasiados detalles.

> **Rol:** Eres un experto Evangelista de Clean Code y Arquitecto Jefe de Software.
> **Solicitud:** Refactoriza el siguiente código desordenado para que sea limpio, legible, eficiente y fácil de mantener, respetando las mejores prácticas del lenguaje.

<br>

### 🥇 Versión Pro (Pro Version)

Úsala cuando necesites un análisis profundo y una refactorización de alta calidad.

> **Rol (Role):** Eres un `[Evangelista de Clean Code y Arquitecto Jefe de Software]`.
>
> **Contexto (Context):**
>
> - Antecedentes: Mi código funciona, pero es un desastre y resulta muy difícil de leer (_Dirty Code_).
> - Objetivo: Refactorizarlo para que cumpla con los más altos estándares de calidad, asegurando que sea fácil de mantener y escalar.
>
> **Tarea (Task):**
>
> 1. **Nomenclatura Intuitiva**: Cambia los nombres de variables y funciones para que revelen su intención de forma clara (ej., `a` -> `userAge`).
> 2. **Mejora de Estructura**: Divide las funciones que son demasiado largas basándote en el Principio de Responsabilidad Única (SRP) y consolida la lógica duplicada.
> 3. **Modernización**: Si es posible, aplica la sintaxis más reciente y eficiente del lenguaje (ES6+, Python 3.10+, Java 17+, etc.).
> 4. **Análisis Comparativo**: Proporciona una explicación detallada de _qué_ cambiaste y _por qué_, comparando el estado anterior con el nuevo.
>
> **Restricciones (Constraints):**
>
> - La lógica de negocio y la funcionalidad del código **jamás** deben alterarse.
> - Agrega comentarios únicamente donde sea absolutamente necesario para explicar decisiones arquitectónicas complejas. El código debe ser autodescriptivo.
> - La respuesta debe estructurarse de forma clara usando bloques de código Markdown.
>
> **Código Objetivo (Target Code):**
>
> `[Pega tu código sucio aquí]`

---

## 💡 Comentarios del Autor (Insight)

Este _prompt_ es un salvavidas absoluto cuando heredas un proyecto _legacy_ o cuando tienes que hacer una revisión de código (_Code Review_) rápida. La clave aquí es el enfoque en el **Principio de Responsabilidad Única** y la **eliminación de números mágicos**. A diferencia de pedirle a la IA simplemente "mejora este código", al asignarle el rol de un Arquitecto Jefe y exigirle que explique sus decisiones, obtienes no solo un código limpio, sino también una mini lección de ingeniería de software. Es ideal para desarrolladores que buscan aprender o consolidar mejores prácticas de codificación en su día a día.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿La IA puede romper mi código al refactorizarlo?**
  - A: Aunque hemos incluido una restricción estricta ("la funcionalidad jamás debe alterarse"), los modelos de IA pueden alucinar. Siempre es obligatorio tener pruebas unitarias (_Unit Tests_) cubriendo el código original para verificar que el resultado refactorizado pase las pruebas sin problemas.

- **Q: ¿Funciona bien con fragmentos de código muy largos?**
  - A: Los modelos de IA tienen un límite de contexto y atención. Si el archivo tiene miles de líneas de código, es mucho más efectivo y seguro refactorizar función por función o clase por clase en lugar de enviar todo el archivo de una sola vez.

- **Q: ¿Qué pasa si uso un lenguaje de programación muy antiguo o con reglas específicas?**
  - A: Solo necesitas especificar la versión de tu lenguaje o las convenciones de tu equipo en la sección de Modernización o Restricciones (ej., "Usa sintaxis compatible con Java 8 y sigue la guía de estilo de Google").

---

## 🧬 Anatomía del Prompt (Why it works?)

1.  **Rol de Autoridad:** Al establecer a la IA como un "Arquitecto Jefe", el modelo descarta soluciones superficiales y se enfoca en patrones de diseño robustos y convenciones de la industria.
2.  **Restricciones de Comentarios:** Evita la tendencia de la IA a sobre-comentar cada línea obvia, forzándola a escribir código que se explique a sí mismo mediante nombres semánticos.
3.  **Explicación Requerida:** Obligar a la IA a justificar el "Antes y Después" garantiza que no se limitará a alterar el código de manera arbitraria, sino que aplicará un razonamiento lógico estructurado a cada cambio.

---

## 📊 Prueba: Before & After

### ❌ Before (Entrada)

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

_(El nombre de la función `calc` es ambiguo, la variable `p` no aporta ninguna información semántica y hay lógica anidada innecesaria)._

### ✅ After (Resultado)

```python
def calculate_discounted_price(age: int, base_price: float) -> float:
    """Calcula el precio final aplicando un descuento según la edad."""
    ADULT_AGE_THRESHOLD = 20
    ADULT_DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Eres un adulto.")
        return base_price * ADULT_DISCOUNT_RATE

    print("Eres un estudiante.")
    return base_price
```

**[Puntos de Mejora]**

1. **Nomenclatura Semántica**: `calc` se convirtió en `calculate_discounted_price`. Ahora la intención es obvia.
2. **Eliminación de "Magic Numbers"**: Se extrajeron los valores `19` y `0.9` en constantes autodescriptivas como `ADULT_AGE_THRESHOLD`.
3. **Patrón _Early Return_**: Se eliminó la cláusula `else` innecesaria, reduciendo la anidación y mejorando la legibilidad.
4. **Tipado Estático**: Se añadieron sugerencias de tipo (_Type Hints_) para `age` y `base_price`, mejorando la seguridad y predictibilidad del código.

---

## 🎯 Conclusión

El código bien escrito se lee de manera fluida, casi como un buen ensayo. Limpia tu código no solo para impresionar a tu jefe, sino por pura compasión hacia tu "yo" del futuro y tus compañeros de equipo.

¡Ahora cierra la laptop y sal de la oficina a tiempo! Ve a ducharte; limpia tu cuerpo, no solo tu código. 🍷
