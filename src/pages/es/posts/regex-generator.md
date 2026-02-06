---
layout: /src/layouts/Layout.astro
title: "Pesadilla de Regex, ahora déjaselo a la IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Desarrollo"
description: "No escribas expresiones regulares crípticas tú mismo. Un prompt que genera código simplemente explicando el patrón que deseas."
tags: ["Regex", "Expresión Regular", "Productividad Dev"]
---

# 📝 Pesadilla de Regex, ahora déjaselo a la IA

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos
> **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"¿Estás descifrando `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$` solo para verificar la validez de un correo electrónico?"_

Las Expresiones Regulares (Regex) son esenciales para los desarrolladores, pero son una de las áreas con las que más odiamos lidiar. Tienes que buscar la sintaxis cada vez que la escribes, y lo que otros escribieron parece lenguaje alienígena. Ahora, no sufras, solo dile a la IA el 'patrón'.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. No te esfuerces por memorizar o buscar sintaxis complejas de regex.
2. Solo di el patrón que deseas (número de teléfono, correo electrónico, etc.), y la IA escribirá la regex e incluso la interpretará.
3. Solicita códigos de prueba juntos para verificar inmediatamente la precisión de la regex.

---

## 🚀 La Solución: "Generador de Regex"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un `[Desarrollador Senior]`.
> **Solicitud:** Crea un prompt que genere código para expresiones regulares crípticas simplemente explicando el patrón.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un `[Desarrollador Senior]`.
>
> **Situación:** Necesito una expresión regular para usar en `[Python/JavaScript]`.
>
> **Tarea:**
>
> 1. Crea una expresión regular que satisfaga los requisitos a continuación.
> 2. Explica en detalle qué significa cada símbolo (Interpretación).
> 3. Muestra código de ejemplo (casos coincidentes/casos no coincidentes) para probar esta regex.
>
> **Requisitos:**
>
> - Quiero encontrar el formato de número de teléfono de EE. UU.
> - Ejemplo: 123-456-7890 o (123) 456-7890 o 1234567890
> - El código de área es opcional.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

```text
Escríbeme una regex para números de teléfono de EE. UU. Guiones, paréntesis o nada.
```

<br>

### ✅ Después (Resultado)

```javascript
// Ejemplo en JavaScript

const regex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

// Prueba
const phone1 = "123-456-7890"; // Coincide O
const phone2 = "(123) 456-7890"; // Coincide O
const phone3 = "1234567890"; // Coincide O

console.log(regex.test(phone1)); // true
```

### 🔍 Explicación

- `^`: Inicio de la cadena
- `(\(\d{3}\)|\d{3})`: 3 dígitos dentro de paréntesis O solo 3 dígitos
- `[- ]?`: Guion o espacio opcional
- `\d{3}`: 3 dígitos
- `\d{4}`: 4 dígitos
- `$`: Fin de la cadena

---

## 🎯 Conclusión

No abras el libro de gramática Regex. Solo necesitas saber claramente qué 'patrón' deseas.
