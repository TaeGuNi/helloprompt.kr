---
layout: /src/layouts/Layout.astro
title: "Documentación de API Molesta, Swagger Aparece con Solo Código"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt que convierte automáticamente tu código API en especificaciones OpenAPI (Swagger) o documentos Markdown con solo copiar y pegar."
tags: ["API", "Documentación", "Swagger", "OpenAPI", "Backend"]
---

# 📝 Documentación de API Molesta: Genera Swagger con Solo Código

- **🎯 Recomendado para:** Desarrolladores Backend, Desarrolladores Full-stack, Líderes Técnicos
- **⏱️ Tiempo requerido:** 30 minutos → 1 minuto
- **🤖 Modelo recomendado:** Todos los modelos de IA (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"¿Ya terminaste el desarrollo? Entonces pásanos la documentación de la API. (Desarrollador Frontend)"_
> _"Ah... un momento. (Todavía no he escrito ni una sola línea)"_

¿Soy el único que odia escribir documentación más que el propio desarrollo de la API?
Definir los tipos de parámetros, si son obligatorios o no, los ejemplos de respuesta... escribir todo esto uno por uno puede ser un proceso tedioso y abrumador que drena tu energía.
A partir de ahora, simplemente copia y pega el código de tu controlador. La IA se encargará de convertirlo en una especificación Swagger limpia y profesional en cuestión de segundos.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Extracción precisa:** Identifica y extrae parámetros y respuestas exactas directamente desde tu código fuente.
2. **Generación automática:** Crea documentación en formato OpenAPI (Swagger) YAML/JSON o tablas Markdown al instante.
3. **Ejemplos realistas:** Incluye explicaciones claras y datos de prueba autogenerados listos para usar en tus pruebas frontend.

---

## 🚀 La Solución: "Generador de Documentos API"

### 🥉 Basic Version (Versión Básica)

Úsala cuando necesites un resultado rápido sin configuraciones complejas.

> **Rol:** Eres un escritor técnico meticuloso y desarrollador backend.
> **Solicitud:** Analiza el siguiente código y genera la documentación de la API en formato Markdown o Swagger. `[Pega tu código aquí]`

<br>

### 🥇 Pro Version (Versión Profesional)

Úsala cuando necesites documentación de alta calidad, detallada y lista para producción.

> **Rol (Role):** Eres un escritor técnico experto y un desarrollador backend senior.
>
> **Contexto (Context):**
>
> - Fondo: He terminado de desarrollar el código de una API y necesito documentarla para compartirla con el equipo de frontend.
> - Objetivo: Generar una documentación técnica precisa, clara y estandarizada basada en el código proporcionado.
>
> **Solicitud (Task):**
> Analiza el código de la API proporcionado a continuación y redacta la documentación en formato **[Selecciona uno: Markdown Table / OpenAPI 3.0 YAML]**.
> La documentación debe incluir estrictamente las siguientes secciones:
>
> 1. **Endpoint & Method:** Ruta de la URL y método HTTP (GET, POST, PUT, DELETE, etc.).
> 2. **Summary:** Un resumen breve de la función principal de la API.
> 3. **Request Parameters:** Parámetros de Body, Query y Path (especificando el tipo de dato, si es obligatorio/opcional y una breve descripción).
> 4. **Response:** Estructura de la respuesta y un ejemplo en formato JSON para casos de éxito (200/201) y fallos (400, 401, 500, etc.).
>
> **Código:**
> `[Pega el código de tu controlador/enrutador aquí]`
>
> **Restricciones (Constraints):**
>
> - Especifica claramente los tipos de datos (String, Integer, Boolean, etc.).
> - No omitas ningún parámetro presente en el código fuente.
> - Completa los ejemplos de respuesta (Example Value) con datos realistas y coherentes, no uses simples marcadores de posición como "string" o "123".
>
> **Advertencia (Warning):**
>
> - Si el código carece de cierta información (por ejemplo, códigos de error específicos), no la inventes. Limítate a lo que se puede deducir lógicamente del código.

---

## 💡 Comentario del Autor (Insight)

Este prompt es un verdadero salvavidas cuando trabajas en equipos ágiles o startups donde la documentación suele quedarse para el final. Personalmente, lo utilizo integrando el código de mis controladores en Node.js o Python directamente en Claude 3.5 Sonnet o GPT-4o. Lo más destacable es que la IA no solo formatea el texto, sino que infiere reglas de validación (por ejemplo, si un email es requerido enviando un 400) basándose en las declaraciones lógicas `if` de tu código. Si trabajas con Swagger, pedir la salida en `OpenAPI 3.0 YAML` te permite copiar y pegar el resultado directamente en tu archivo `swagger.yaml` sin tocar una sola coma.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Funciona con cualquier lenguaje de programación o framework?**
  - A: Sí, los modelos de IA actuales pueden leer y entender Express (Node.js), FastAPI (Python), Spring Boot (Java), Laravel (PHP), Go, Rust y casi cualquier otro entorno de backend.

- **Q: ¿Qué pasa si mi código es demasiado largo o tiene lógica de base de datos compleja?**
  - A: Es mejor pasar solo el fragmento del controlador (Controller) o enrutador (Router) donde se definen los parámetros de entrada (`req.body`, `req.query`) y las respuestas (`res.send`). No necesitas incluir la lógica compleja de los servicios externos o consultas a la base de datos.

- **Q: ¿Puede generar colecciones de Postman en lugar de Swagger?**
  - A: ¡Por supuesto! Solo cambia la parte de formato en el prompt por `[Postman Collection v2.1 JSON]` e impórtalo directamente en tu cliente de Postman.

---

## 🧬 Anatomía del Prompt (Why it works?)

1. **Role (Rol):** Al asignar el rol dual de "escritor técnico" y "desarrollador backend", la IA entiende que debe equilibrar la precisión técnica del código con una redacción fácil de entender para humanos.
2. **Context (Contexto):** Especificar que el público objetivo es el "equipo de frontend" obliga a la IA a enfocarse en los datos de entrada (Request) y salida (Response), que es lo que realmente les importa para su integración.
3. **Constraints (Restricciones):** Exigir datos realistas para los ejemplos de respuesta evita que la IA genere JSON inútiles o perezosos llenos de valores `"test"`, haciendo que la documentación sea utilizable desde el primer momento.

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

API para el registro de nuevos usuarios en el sistema.

**Request Body**

- `username` (String) [Opcional] - Nombre de usuario o apodo.
- `email` (String) [Requerido] - Correo electrónico del usuario (debe ser único).

**Response (201 Created)**

```json
{
  "id": 1,
  "username": "jay_dev",
  "email": "jay@example.com"
}
```

**Response (400 Bad Request)**

```json
{
  "msg": "no email"
}
```

---

## 🎯 Conclusión

La documentación no es el final del desarrollo, sino el comienzo de una colaboración técnica fluida y eficiente.
No desperdicies tu valiosa energía y tiempo en tareas mecánicas y repetitivas. ¡Déjale el trabajo aburrido a la IA y concéntrate en construir la mejor arquitectura y lógica de negocio! 🍷
