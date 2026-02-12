---
title: "Documentación de API Molesta, Swagger Aparece con Solo Código"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt que convierte automáticamente código API en especificaciones OpenAPI (Swagger) o documentos Markdown cuando lo pegas."
tags: ["API", "Documentación", "Swagger", "OpenAPI", "Backend"]
---

# 📝 Documentación de API Molesta, Swagger Aparece con Solo Código

**🎯 Recomendado para:** Todos
**⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Si terminaste de desarrollar, deberías darnos la documentación también, ¿verdad? (Desarrollador Frontend)"_
_"Ah... Un momento. (Aún no he escrito ni una sola línea)"_

¿Soy solo yo quien odia escribir documentación más que el desarrollo de API?
Tipos de parámetros, estado requerido, ejemplos de respuesta... escribirlos uno por uno hace que la realidad se derrumbe.
Ahora solo copia y pega el código del controlador. La IA lo convertirá en una especificación Swagger limpia.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Extraer especificaciones precisas de parámetros/respuestas basadas en el código
2. Generación automática de formato OpenAPI (Swagger) YAML/JSON
3. Incluye explicaciones fáciles de entender y datos de ejemplo

---

## 🚀 La Solución: "Generador de Documentos API"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

**Rol:** Eres un escritor técnico meticuloso y desarrollador backend.
**Solicitud:** Un prompt que convierte automáticamente código API en especificaciones OpenAPI (Swagger) o documentos Markdown cuando lo pegas.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un escritor técnico meticuloso y desarrollador backend.
>
> **Contexto:** Tengo código API que desarrollé, y necesito documentarlo para compartirlo con desarrolladores frontend.
>
> **Tarea:**
> Analiza el código API proporcionado a continuación y escribe la documentación en formato **[Seleccionar Formato Deseado: OpenAPI 3.0 YAML / Markdown Table]**.
> Debe incluir los siguientes contenidos:
>
> 1. **Endpoint & Method:** Ruta URL y método HTTP
> 2. **Summary:** Breve resumen de lo que hace la API
> 3. **Request Parameters:** Parámetros de Body, Query, Path (incluyendo tipo, estado requerido, descripción)
> 4. **Response:** Estructura de respuesta y JSON de ejemplo para éxito (200) y fallo (400, 500, etc.)
>
> **Código:**

> [Pega el código del controlador/enrutador aquí]

> **Restricciones:**
>
> - Especifica claramente los tipos de datos (String, Integer, etc.).
> - Rellena los ejemplos de respuesta (Example Value) con datos realistas.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Código de Entrada - Node.js Express)

```javascript
app.post("/users", (req, res) => {
  const { username, email } = req.body;
  if (!email) return res.status(400).send({ msg: "no email" });
  // DB save logic...
  res.status(201).send({ id: 1, username, email });
});
```

### ✅ Después (Resultado - Ejemplo Markdown)

### **POST /users**

User Sign-up API

**Request Body**
| Nombre de Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `username` | String | O | Apodo de Usuario |
| `email` | String | O | Correo de Usuario (Único) |

**Response (201 Created)**

```json
{
  "id": 1,
  "username": "jay_dev",
  "email": "jay@example.com"
}
```

---

## 🎯 Conclusión

La documentación no es el final del desarrollo sino el comienzo de la colaboración.
Pero no gastes demasiada energía para ese comienzo. ¡Déjaselo a la IA y concéntrate en la lógica de negocio! 🍷
