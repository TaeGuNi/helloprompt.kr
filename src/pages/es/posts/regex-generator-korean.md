---
layout: /src/layouts/Layout.astro
title: "Regex Tipo Alienígena, Ordena en Lenguaje Natural"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "No luches con expresiones regulares complejas como descifrar códigos. Solo di el patrón que quieres, y la IA creará la regex."
tags: ["Regex", "Expresión Regular", "Procesamiento de Cadenas", "Validación"]
---

# 📝 Regex Tipo Alienígena, Ordena en Lenguaje Natural

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"¿Cuál era la regex de validación de correo electrónico otra vez... Ah, y cómo pongo guiones en los números de teléfono?"_

Expresión Regular (Regex), nueva cada vez que la usas y parece lenguaje alienígena cada vez que la ves, ¿verdad?
Escribir `^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`... tú mismo es una tortura.
Ahora solo di "Encuentra formato de correo electrónico" en lenguaje natural.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Solicita coincidencia de patrones complejos en lenguaje natural
2. Proporciona explicación detallada para la regex generada
3. Verifica con casos de prueba

---

## 🚀 La Solución: "Intérprete de Regex"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un Maestro de Regex.
> **Solicitud:** No luches con expresiones regulares complejas como descifrar códigos. Solo di el patrón que quieres, y la IA creará la regex.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un Maestro de Regex.
>
> **Contexto:** Necesito extraer o validar patrones específicos de datos de texto. Pero la sintaxis regex es demasiado difícil.
>
> **Tarea:**
>
> 1. Escribe una **Expresión Regular (Regex)** que se ajuste perfectamente al patrón que describo.
> 2. Explica cómo funciona la regex escrita desglosándola en partes.
> 3. Muestra 3 ejemplos que coincidan (Match) e 3 ejemplos que no coincidan (Non-match) con esta regex respectivamente.
>
> **Patrón que quiero encontrar:**
> `[Describe el patrón que quieres en lenguaje natural aquí. ej.: "Número de teléfono móvil en formato 010-1234-5678"]`
>
> **Lenguaje/Entorno:** `[ej.: JavaScript / Python / Java]`
>
> **Restricciones:**
>
> - Asegúrate de que el procesamiento de escape de caracteres especiales se realice correctamente.
> - Crea una expresión que sea lo más concisa pero precisa posible.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

**Patrón:** "La contraseña debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una minúscula, un número y un carácter especial."

### ✅ Después (Resultado)

**Regex (JavaScript):**

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

**Explicación:**

- `^`: Inicio de la cadena
- `(?=.*[a-z])`: Contiene al menos una letra minúscula
- `(?=.*[A-Z])`: Contiene al menos una letra mayúscula
- `(?=.*\d)`: Contiene al menos un número
- `{8,}`: 8 caracteres o más

**Prueba:**

- ✅ `Pass1234!` (Coincide)
- ❌ `pass1234` (Sin carácter especial/mayúscula)

---

## 🎯 Conclusión

Regex es poderoso pero demasiado antipático para que los humanos lo lean.
Ahora deja ese descifrado de código complejo a la IA, ¡y tú solo disfruta de la magia del procesamiento de texto! 🍷
