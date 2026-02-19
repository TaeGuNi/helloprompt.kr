---
layout: /src/layouts/Layout.astro
title: "Traductor de Problemas de Física: Del Juicio de Situación al Planteamiento de Ecuaciones"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Matemáticas/Ciencias"
description: "Prompt que lee problemas de física escritos, analiza la situación y te dice qué fórmula usar."
tags: ["Física", "Ingeniería", "ResoluciónProblemas", "Prompt"]
---

# 📝 Traductor de Problemas de Física: Del Juicio de Situación al Planteamiento de Ecuaciones

- **🎯 Recomendado para:** Todos
- **⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Memoricé todas las fórmulas, pero no sé si usar F=ma o la Ley de Conservación de la Energía para este problema."_

El 90% de los problemas de física es 'comprensión de lectura'. La parte más difícil es encontrar pistas ocultas en el problema ("Cuando no hay fricción", "Partiendo del reposo") y traducirlas al lenguaje matemático. Este prompt encuentra pistas en el problema como Sherlock Holmes y te entrega la herramienta perfecta (fórmula).

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Extrae variables físicas (Valores dados, Valores a encontrar) de problemas escritos
2. Señala explícitamente condiciones ocultas (Restricciones implícitas)
3. Establece estrategia para resolución de problemas y emparejamiento de fórmulas

---

## 🚀 La Solución: "Arquitecto de Soluciones Físicas"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

**Rol:** Eres un `[Profesor de Física y Experto en Resolución de Problemas]`.
**Solicitud:** Crea un prompt que lea problemas de física escritos, analice la situación y te diga qué fórmula usar.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y úsalo.

> **Rol:** Eres un `[Profesor de Física y Experto en Resolución de Problemas]`.
>
> **Contexto:** Estoy tratando de resolver un problema de física, pero no puedo captar bien la situación y estoy confundido sobre qué principio aplicar.
>
> **Tarea:**
>
> 1. **[Extracción de Variables]**: Organiza los valores dados en el problema (Conocidos) y valores a encontrar (Desconocidos) con símbolos (ej., $v_0 = 0 m/s$).
> 2. **[Condiciones Ocultas]**: Encuentra condiciones que no están especificadas en el texto pero deben considerarse físicamente (ej., "Caída libre" -> $a = 9.8 m/s^2$).
> 3. **[Establecimiento de Estrategia]**: Explica cuál es la **Ley Física** más adecuada para resolver este problema y por qué deberías usarla.

- 4. **[Planteamiento de Ecuación]**: Establece un **Modelo Matemático** puro antes de sustituir números.
     > **Restricciones:**
     >
     > - Enfócate en el 'Diseño' en lugar del proceso de resolución (Cálculo).
     > - Presta atención a la notación de Unidades.
     >
     > **Texto del Problema:**
     > `[Copia y pega el problema de física aquí]`

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

"Se dejó caer una pelota desde el techo de un edificio de 45m de altura. ¿Velocidad al golpear el suelo?"

### ✅ Después (Resultado)

**[Extracción de Variables]**

- $h$ (Altura) = 45 m
- $v_0$ (Velocidad Inicial) = 0 m/s (Ya que solo dijo 'se dejó caer')
- $v$ (Velocidad Final) = ? (Valor a encontrar)

**[Condiciones Ocultas]**

- Ignorar resistencia del aire ya que no hay mención.
- Aceleración $a$ = Aceleración Gravitacional $g$ $\approx 9.8 m/s^2$ (Establecer dirección hacia abajo +)

**[Establecimiento de Estrategia]**
Dado que no hay info de Tiempo ($t$) y pregunta por la relación entre altura y velocidad, usar **'Ley de Conservación de la Energía'** o **'Ecuaciones de Movimiento para Aceleración Constante (Ecuación sin tiempo)'** es lo más rápido.

**[Planteamiento de Ecuación]**
$$ 2as = v^2 - v_0^2 $$
Aquí $v_0=0$, $s=h$, $a=g$, entonces
$$ v = \sqrt{2gh} $$

---

## 🎯 Conclusión

La física es un lenguaje que traduce el mundo a matemáticas. Con este prompt, tendrás una experiencia extraña donde todo el mundo parece fórmulas.

Ahora sal del trabajo a tiempo... Ah, debido a la inercia, ¿sigue yendo por donde iba a casa? 🍷
