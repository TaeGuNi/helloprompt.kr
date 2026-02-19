---
layout: /src/layouts/Layout.astro
title: "¿La IA no te entiende? Usa 'Delimitadores'"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Ingeniería de Prompts"
description: "¿La IA se confunde al resumir textos largos o corregir código? Usa la técnica de Delimitadores para separar secciones y duplicar tu precisión."
tags: ["Delimitadores", "Legibilidad", "Etiquetas XML"]
---

# 🚧 ¿La IA no te entiende? Usa "Delimitadores"

**🎯 Recomendado para:** Todos
**⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

Cuando le lanzas un texto largo a una IA y le dices "Resume esto", la IA a veces se confunde sobre dónde termina el texto a resumir y dónde comienzan las instrucciones.

Así como los humanos dividen el texto en **párrafos** al leer, necesitas trazar un **límite (Delimitador)** claro para la IA, diciendo **"De aquí a aquí es el contenido."**

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. La IA puede tener dificultades para distinguir entre comandos y datos en textos largos.
2. Usa etiquetas XML (`< >`) o símbolos especiales (`"""`) para establecer límites claros.
3. El hábito de dividir secciones reduce los errores de reconocimiento de la IA y aumenta la precisión de la tarea.

---

## 🚀 La Solución: "Usar etiquetas XML o símbolos especiales"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

**Rol:** Eres un **Editor** competente.
**Solicitud:** ¿La IA se confunde al resumir textos largos o corregir código? Usa la técnica de Delimitadores para separar secciones y duplicar tu precisión.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

La mejor manera es usar etiquetas `< >` o `"""` (tres comillas).

> **Rol:** Eres un **Editor** competente.
>
> **Solicitud:** Resume el contenido envuelto en las etiquetas `<text>` a continuación en 3 oraciones.
>
> **Datos de entrada:**
> <text>
> `[Inserta aquí un artículo de noticias o informe increíblemente largo]`
> </text>

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada sin delimitadores)

IA: Podría incluir la instrucción "Resume esto" como parte del resumen en sí, o simplemente leer el principio del texto y terminar apresuradamente.

```text
(Mezcla confusa de instrucciones y datos)
```

<br>

### ✅ Después (Envolviendo con etiquetas)

La IA reconoce solo el contenido dentro de `<text>` como **"datos a procesar"** y distingue claramente el resto como **"comandos"**.

```text
(Extrae con precisión solo el contenido dentro de <text> y lo resume perfectamente)
```

---

## 🎯 Conclusión

Los expertos dividen habitualmente las **Secciones** al crear prompts.

- `<context>` (Situación)
- `<instruction>` (Instrucciones)
- `<data>` (Datos)

Este pequeño hábito hace que la tasa de error de tus prompts sea del 0%. 🧱
