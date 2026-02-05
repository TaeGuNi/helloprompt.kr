---
layout: /src/layouts/Layout.astro
title: '¿La IA no te entiende? Ponle una "Valla" (Delimiters)'
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Ingeniería de Prompts"
description: "¿La IA se confunde al resumir textos largos o corregir código? Aumenta la precisión al doble usando la técnica de Delimitadores para dividir secciones con caracteres especiales."
tags: ["Delimitadores", "Legibilidad", "Etiquetas XML"]
lang: es
---

# 🚧 ¿La IA no te entiende? Ponle una "Valla"

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo estimado:** 5 minutos
> **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

Cuando le das un texto largo a la IA y le dices "resume esto", a veces la IA se confunde sobre dónde empieza el texto a resumir y dónde termina la instrucción.

Al igual que las personas dividen los **párrafos** al leer, debes marcar una **línea fronteriza (Delimiter)** clara para la IA diciendo **"es de aquí a aquí"**.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. La IA puede tener dificultades para distinguir entre instrucciones y datos en textos largos.
2. Establece límites claros usando etiquetas XML (`< >`) o caracteres especiales (`"""`).
3. El hábito de dividir secciones reduce los errores de reconocimiento de la IA y aumenta la precisión del trabajo.

---

## 🚀 Solución: "Usar etiquetas XML o caracteres especiales"

### 🥉 Versión Básica

Úsala cuando necesites resultados rápidos.

> **Rol:** Eres un **Editor** competente.
> **Solicitud:** ¿La IA se confunde al resumir textos largos o corregir código? Aumenta la precisión al doble usando la técnica de Delimitadores para dividir secciones con caracteres especiales.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

La mejor manera es usar etiquetas `< >` o `"""` (tres comillas).

> **Rol:** Eres un **Editor** competente.
>
> **Solicitud:** Resume el contenido envuelto en las etiquetas `<text>` de abajo en 3 oraciones.
>
> **Datos de entrada:**
> <text>
> `[Aquí va el artículo de noticias o informe extremadamente largo]`
> </text>

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Sin distinción)

IA: Puede incluir la instrucción "resúmeme" dentro del resumen, o leer solo el principio del texto y terminar apresuradamente.

```text
(Confusión por la mezcla de instrucciones y datos)
```

<br>

### ✅ Después (Envolviendo con etiquetas)

La IA reconoce solo el contenido dentro de `<text>` como **"datos a procesar"**, y distingue claramente el resto como **"instrucciones"**.

```text
(Extrae exactamente solo el contenido dentro de <text> y lo resume perfectamente)
```

---

## 🎯 Conclusión

Los expertos suelen dividir **secciones (Section)** habitualmente al escribir prompts.

- `<context>` (Contexto)
- `<instruction>` (Instrucciones)
- `<data>` (Datos)

Este pequeño hábito reduce la tasa de error del prompt al 0%. 🧱
