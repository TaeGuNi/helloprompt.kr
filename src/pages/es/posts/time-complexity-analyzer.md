---
layout: /src/layouts/Layout.astro
title: "¿Cuál es la Complejidad Temporal (Big O) de Mi Código?"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt que analiza la complejidad temporal y la complejidad espacial del algoritmo escrito y encuentra puntos de mejora de rendimiento."
tags:
  [
    "Algoritmo",
    "Complejidad Temporal",
    "Big-O",
    "Optimización de Rendimiento",
    "Conocimiento CS",
  ]
---

# 📝 ¿Cuál es la Complejidad Temporal (Big O) de Mi Código?

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Dos bucles for superpuestos... ¿Es esto O(N) o O(N^2)?"_

El análisis de Complejidad Temporal es esencial al realizar pruebas de codificación o escribir lógica para manejar gran tráfico.
Pero, ¿te da dolor de cabeza calcular si hay llamadas recursivas dentro del bucle o si las condiciones se vuelven complejas?
Si le muestras el código a la IA, lo analiza con precisión con la notación Big-O e incluso propone algoritmos más eficientes.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Calcular con precisión la Complejidad Temporal y la Complejidad Espacial (Big-O)
2. Identificar cuellos de botella de rendimiento
3. Sugerir algoritmos mejorados con menor complejidad

---

## 🚀 La Solución: "Analizador de Complejidad"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un Profesor de Ciencias de la Computación (CS) y experto en optimización de algoritmos.
> **Solicitud:** Analiza la complejidad temporal y la complejidad espacial del algoritmo escrito y encuentra puntos de mejora de rendimiento.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un Profesor de Ciencias de la Computación (CS) y experto en optimización de algoritmos.
>
> **Contexto:** Tengo curiosidad sobre el rendimiento del algoritmo que escribí. Quiero saber si es eficiente o si se necesitan mejoras.
>
> **Tarea:**
>
> 1. Analiza la **Complejidad Temporal** y la **Complejidad Espacial** del código proporcionado en notación Big-O.
> 2. Explica la base línea por línea de código por qué sale tal complejidad.
> 3. Si hay un método más eficiente (ej., O(N^2) -> O(N log N)), explícalo con el código mejorado.
>
> **Código:**
>
> ```
> [Pega el código para analizar aquí]
> ```
>
> **Restricciones:**
>
> - Analiza basado en el Peor Caso.
> - Menciona problemas que pueden ocurrir cuando el tamaño de los datos de entrada (N) es muy grande.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Código de Entrada)

```python
def find_duplicate(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return nums[i]
    return None
```

### ✅ Después (Resultado)

**Análisis:**

- **Complejidad Temporal:** O(N^2). Usando bucles `for` dobles. Se vuelve muy lento incluso si N supera 10,000.
- **Complejidad Espacial:** O(1). Casi no se usa memoria adicional.

**Código Mejorado (Usando Hash Set):**

```python
def find_duplicate_optimized(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return num
        seen.add(num)
    return None
```

**Resultado de Mejora:**

- **Complejidad Temporal:** O(N). Bucle solo una vez.
- **Complejidad Espacial:** O(N). Necesita almacenar datos en el conjunto `seen`. (Compensación Tiempo-Espacio)

---

## 🎯 Conclusión

Deja de pensar "Funciona, así que está bien".
Los desarrolladores que cuidan el rendimiento invisible son los verdaderos profesionales. ¡Haz crecer tus músculos algorítmicos con la retroalimentación del Profesor de IA! 🍷
