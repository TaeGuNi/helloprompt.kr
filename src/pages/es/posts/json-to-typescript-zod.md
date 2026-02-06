---
layout: /src/layouts/Layout.astro
title: "¡Solo Lanza JSON y la Definición de Tipo TypeScript Aparece! (feat. Zod)"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt que convierte automáticamente datos JSON complejos en interfaces TypeScript o esquemas Zod."
tags: ["TypeScript", "Zod", "JSON", "Definición de Tipo", "Productividad"]
---

# 📝 ¡Solo Lanza JSON y la Definición de Tipo TypeScript Aparece! (feat. Zod)

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos
> **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"La respuesta de la API backend es tan compleja, ¿cuándo haré todas estas interfaces?"_

¿Estás escribiendo `interface User { ... }` uno por uno?
Objetos anidados, matrices, valores opcionales... es perfecto para cometer errores.
Solo copia y pega el JSON de respuesta de la API. Crea definiciones de tipo TypeScript perfectas, así como esquemas Zod para la validación en tiempo de ejecución.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Convertir datos JSON a Interfaz/Tipo TypeScript
2. Generar esquema Zod/Yup para validación en tiempo de ejecución
3. Manejo perfecto de estructuras anidadas (Objeto Anidado)

---

## 🚀 La Solución: "Maestro de Tipos"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un Desarrollador Senior que domina el ecosistema TypeScript.
> **Solicitud:** Crea un prompt que convierta automáticamente datos JSON complejos en interfaces TypeScript o esquemas Zod.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un Desarrollador Senior que domina el ecosistema TypeScript.
>
> **Contexto:** Recibí datos JSON de una API externa y necesito definiciones de tipo para usarlos de forma segura en mi proyecto.
>
> **Tarea:**
>
> 1. Escribe una **Interfaz TypeScript** basada en los datos JSON a continuación. (Nombre en PascalCase)
> 2. Escribe un **Esquema Zod** junto para la validación en tiempo de ejecución.
> 3. Incluye código para inferir tipos (`z.infer`) del esquema Zod.
>
> **Datos JSON:**
>
> ```text
> [Pega los datos JSON aquí]
> ```
>
> **Restricciones:**
>
> - Asume que todos los campos son obligatorios por defecto, pero trátalos como opcionales (`?`) solo si se incluye `null`.
> - Separa los objetos dentro de las matrices en interfaces separadas y defínelos.
> - Agrega comentarios JSDoc para explicar qué es cada campo (infiriendo).

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (JSON de Entrada)

```text
{
  "id": 1,
  "name": "Jay",
  "contact": {
    "email": "jay@test.com",
    "phone": null
  },
  "tags": ["developer", "admin"]
}
```

### ✅ Después (Resultado)

```typescript
import { z } from "zod";

// 1. Zod Schema Definition
export const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().nullable().optional(), // Null handling
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  contact: ContactSchema,
  tags: z.array(z.string()),
});

// 2. TypeScript Type Inference
/** User Information Interface */
export type User = z.infer<typeof UserSchema>;
export type Contact = z.infer<typeof ContactSchema>;
```

---

## 🎯 Conclusión

La definición de tipos es un dispositivo de seguridad, pero el proceso de hacerlo no debería ser doloroso.
¡Construye un sistema de tipos seguro y robusto con un solo copiar y pegar! 🍷
