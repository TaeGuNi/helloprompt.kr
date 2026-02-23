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

- **🎯 Recomendado para:** Desarrolladores Frontend/Backend, Ingenieros de Datos
- **⏱️ Tiempo requerido:** 30 minutos → 1 minuto
- **🤖 Modelo recomendado:** ChatGPT (GPT-4o), Claude 3.5 Sonnet

- ⭐ **Dificultad:** ⭐☆☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"La respuesta de la API backend es tan compleja, ¿cuándo terminaré de escribir todas estas interfaces a mano?"_

¿Todavía estás escribiendo `interface User { ... }` uno por uno?
Objetos anidados, matrices, valores opcionales... es el escenario perfecto para cometer errores tipográficos o dejar tipos inseguros como `any`.
Con este prompt, solo necesitas copiar y pegar el JSON de respuesta de la API. La IA generará instantáneamente definiciones de tipo TypeScript perfectas, así como esquemas de Zod para una validación en tiempo de ejecución robusta.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **De JSON a TypeScript al instante:** Convierte respuestas de API complejas en tipos estrictos sin esfuerzo manual.
2. **Validación con Zod incluida:** Genera esquemas de Zod para asegurar que los datos en tiempo de ejecución coincidan con tus tipos estáticos.
3. **Manejo inteligente de estructuras:** Separa automáticamente objetos anidados y detecta valores opcionales o nulos (`null`).

---

## 🚀 La Solución: "Type Master"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites un resultado rápido sin configuraciones complejas.

> **Rol:** Eres un Desarrollador Senior experto en el ecosistema TypeScript.
> **Solicitud:** Convierte el siguiente JSON en interfaces de TypeScript y esquemas de Zod. JSON: `[Pega tu JSON aquí]`

<br>

### 🥇 Versión Pro (Pro Version)

Úsala para obtener un código de calidad de producción, con inferencia de tipos y comentarios automáticos.

> **Rol (Role):** Eres un Desarrollador Senior experto en el ecosistema de TypeScript y validación de datos.
>
> **Contexto (Context):**
>
> - Fondo: He recibido una respuesta JSON de una API externa.
> - Objetivo: Necesito crear definiciones de tipo robustas y esquemas de validación para consumir estos datos de forma segura en mi aplicación.
>
> **Solicitud (Task):**
>
> 1. Analiza el JSON proporcionado a continuación y genera las **Interfaces de TypeScript** correspondientes usando PascalCase.
> 2. Crea los **Esquemas de Zod** equivalentes para la validación en tiempo de ejecución.
> 3. Utiliza `z.infer` para derivar automáticamente los tipos de TypeScript a partir de los esquemas de Zod (evitando la duplicación de código).
>
> **Datos JSON:**
>
> `[Pega los datos JSON aquí]`
>
> **Restricciones (Constraints):**
>
> - Asume que todos los campos son obligatorios por defecto. Sin embargo, si un campo contiene `null` en el JSON de ejemplo, defínelo explícitamente como opcional y nullable (`z.string().nullable().optional()`).
> - Si hay objetos o matrices anidadas, extráelos en sus propios esquemas/interfaces independientes antes de referenciarlos en el objeto principal.
> - Añade comentarios JSDoc descriptivos para cada propiedad deduciendo su propósito basándote en el nombre de la clave.
>
> **Formato de Salida (Output Format):**
>
> - Devuelve únicamente el bloque de código en TypeScript, sin explicaciones adicionales.

---

## 💡 Comentario del Autor (Insight)

En el desarrollo frontend moderno, no basta con tener tipos estáticos; los datos que llegan de la API en tiempo de ejecución pueden ser impredecibles. Usar Zod junto con TypeScript es el estándar de la industria hoy en día, pero escribir ambos manualmente rompe la regla DRY (Don't Repeat Yourself) y consume mucho tiempo.

Este prompt es increíblemente útil porque aprovecha la capacidad analítica de la IA para hacer el trabajo pesado. Al exigir el uso de `z.infer`, garantizamos que tu código fuente se mantenga limpio y con una única fuente de verdad. Personalmente, utilizo este prompt cada vez que integro un nuevo endpoint de API, ahorrando horas de tipeo tedioso y evitando bugs en producción.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Qué pasa si el JSON de ejemplo no incluye todos los casos posibles (ej. un campo opcional que justo en este JSON viene con datos)?**
  - A: La IA solo puede inferir basándose en lo que ve. Te recomiendo revisar rápidamente el esquema generado y añadir manualmente un `.optional()` en aquellos campos que sepas que podrían no venir siempre desde el backend.

- **Q: ¿Puedo usar Yup o Joi en lugar de Zod?**
  - A: ¡Por supuesto! Solo cambia las menciones de "Zod" por "Yup" o "Joi" en la directiva del prompt. Sin embargo, Zod ofrece la mejor integración de inferencia de tipos directamente con TypeScript.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Preferencia por la Inferencia (`z.infer`):** Obliga a la IA a seguir las mejores prácticas modernas, evitando crear interfaces y esquemas separados que puedan desincronizarse.
2. **Manejo explícito de Nulos:** La instrucción sobre cómo tratar los valores `null` previene errores muy comunes en TypeScript (`Object is possibly 'null'`).
3. **Modularidad forzada:** Al pedir que separe las estructuras anidadas, el código resultante es mucho más legible y reutilizable en otras partes del proyecto.

---

## 📊 Prueba: Antes y Después

### ❌ Antes (JSON de Entrada)

```json
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

### ✅ Después (Resultado Generado)

```typescript
import { z } from "zod";

/** Esquema de información de contacto */
export const ContactSchema = z.object({
  /** Dirección de correo electrónico del usuario */
  email: z.string().email(),
  /** Número de teléfono (opcional) */
  phone: z.string().nullable().optional(),
});

/** Esquema principal del usuario */
export const UserSchema = z.object({
  /** Identificador único */
  id: z.number(),
  /** Nombre completo del usuario */
  name: z.string(),
  /** Información de contacto detallada */
  contact: ContactSchema,
  /** Etiquetas de roles asignadas al usuario */
  tags: z.array(z.string()),
});

// Inferir tipos automáticamente
export type Contact = z.infer<typeof ContactSchema>;
export type User = z.infer<typeof UserSchema>;
```

---

## 🎯 Conclusión

Definir tipos es tu mejor red de seguridad, pero crearlos no debería ser un dolor de cabeza.
¡Construye un sistema de tipos seguro, robusto y validado en tiempo de ejecución con un simple "copiar y pegar"! 🍷
