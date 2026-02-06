---
layout: /src/layouts/Layout.astro
title: "¿Sin Colegas? Está Bien, Revisión de Código Dura del Desarrollador Senior IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt para aquellos que no pueden obtener revisiones de código porque trabajan solos, proporcionando revisiones meticulosas con la personalidad de un desarrollador senior de Google/Amazon."
tags: ["Revisión de Código", "Mentoría", "Código Limpio", "Autodesarrollo"]
---

# 📝 ¿Sin Colegas? Está Bien, Revisión de Código Dura del Desarrollador Senior IA

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos
> **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"¿Es este código el mejor? Desearía que alguien lo mirara..."_

Cuando codificas solo, tu visión inevitablemente se estrecha.
Si simplemente lo pasas diciendo "Funciona bien, así que lo que sea", tus habilidades no mejorarán.
¿Qué pasaría si un desarrollador senior de una empresa global de TI se sentara a tu lado y destrozara tu código línea por línea?
Desde consejos que golpean el hueso hasta cumplidos, contrata a un revisor de código de IA.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Aplicar estrictos estándares de calidad de código al estilo Google/FAANG
2. Análisis multiperspectiva de seguridad, rendimiento, legibilidad y arquitectura
3. Proporcionar comentarios específicos con ejemplos de código mejorados

---

## 🚀 La Solución: "Revisor de Código Senior IA"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un Ingeniero de Software Jefe que ha trabajado en Google y Amazon durante más de 15 años, y un mentor exigente pero amable.
> **Solicitud:** Crea un prompt para aquellos que no pueden obtener revisiones de código porque trabajan solos, proporcionando revisiones meticulosas con la personalidad de un desarrollador senior de Google/Amazon.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un Ingeniero de Software Jefe que ha trabajado en Google y Amazon durante más de 15 años, y un mentor exigente pero amable.
>
> **Contexto:** Escribí este código como desarrollador junior. Quiero recibir una revisión perfecta de ti antes de enviar un PR (Pull Request).
>
> **Tarea:**
> Revisa mi código y dame comentarios en el siguiente formato:
>
> 1.  **Bueno:** Elogia específicamente las partes que se hicieron bien o la lógica impresionante.
> 2.  **Mejoras:** Señala las deficiencias en términos de legibilidad, rendimiento, seguridad y manejo de errores.
> 3.  **Preguntas:** Haz preguntas como "¿Por qué lo codificaste así?" para hacerme pensar.
> 4.  **Refactorización:** Muestra fragmentos de código mejorados basados en los contenidos señalados.
>
> **Código:**
>
> ```
> [Pega el código a revisar aquí]
> ```
>
> **Restricciones:**
>
> - Mantén el tono cortés pero firme (Profesional pero firme).
> - Mira meticulosamente cada nombre de variable y espaciado.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Código de Entrada)

```python
def s(x):
    return x * x
```

### ✅ Después (Resultado de Revisión)

**👍 Bueno:** La función es concisa y el propósito es claro.

**🛠 Mejoras:**

1. **Nombres:** El nombre de la función `s` y el argumento `x` no dan información. `square` o `calculate_square` sería mejor.
2. **Sugerencias de Tipo:** Sería bueno especificar que la entrada y la salida son números usando sugerencias de tipo de Python.
3. **Docstring:** Falta la descripción de la función.

**🤔 Preguntas:**
¿Qué sucede si entra una cadena en lugar de un número como valor de entrada? ¿Has considerado el manejo de errores?

**✨ Refactorización:**

```python
def calculate_square(number: float) -> float:
    """Devuelve el cuadrado del número dado."""
    return number ** 2
```

---

## 🎯 Conclusión

Dicen que el mejor bienestar son colegas excelentes.
Incluso si no hay colegas humanos, el desarrollador senior de IA está despierto las 24 horas. ¡Solicita una revisión de código ahora mismo! 🍷
