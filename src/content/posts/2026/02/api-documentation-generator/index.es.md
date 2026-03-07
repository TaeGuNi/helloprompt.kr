---
layout: /src/layouts/Layout.astro
title: "Documentación de API tediosa: de código a Swagger en segundos"
author: "Jay"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Convierte automáticamente el código de tu API en especificaciones OpenAPI (Swagger) o documentos Markdown impecables con solo copiar y pegar."
tags: ["API", "Documentación", "Swagger", "OpenAPI", "Backend"]
---

## 📝 Documentación de API tediosa: de código a Swagger en segundos

- **🎯 Recomendado para:** Desarrolladores Backend, Desarrolladores Full-stack, Líderes Técnicos
- **⏱️ Tiempo requerido:** 30 minutos → 1 minuto
- **🤖 Modelo recomendado:** Todos los modelos de IA (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"¿Ya terminaste el desarrollo? Pásanos la documentación de la API, por favor. (Desarrollador Frontend)"_
> _"Eh... dame un segundo. (Aún no he escrito ni una sola línea)"_

¿Soy el único que odia escribir la documentación mucho más que programar la propia API?
Definir los tipos de parámetros, si son obligatorios o no, armar los ejemplos de respuesta... redactar todo esto a mano es un proceso tedioso y abrumador que agota tu energía.
A partir de ahora, olvídate de eso: simplemente copia y pega el código de tu controlador. La IA se encargará de transformarlo en una especificación Swagger limpia y profesional en cuestión de segundos.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Extracción precisa:** Identifica y extrae los parámetros y las respuestas exactas directamente desde tu código fuente.
2. **Generación instantánea:** Crea automáticamente la documentación en formato OpenAPI (Swagger) YAML/JSON o en tablas Markdown.
3. **Ejemplos realistas:** Genera explicaciones claras y datos de prueba (*mock data*) listos para usar en las pruebas del frontend.

---

## 🚀 La Solución: "Generador de Documentos API"

### 🥉 Versión Básica (Basic)

Ideal para cuando necesitas un resultado rápido sin configuraciones complejas.

> **Rol (Role):** Eres un escritor técnico meticuloso y un desarrollador backend experto.
> **Solicitud (Task):** Analiza el siguiente código y genera la documentación de la API en formato Markdown o Swagger. `[Pega aquí el código de tu controlador]`

### 🥇 Versión Profesional (Pro)

Úsala cuando necesites una documentación de alta calidad, exhaustiva y lista para producción.

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
> `[Pega aquí el código de tu controlador/enrutador]`
>
> **Restricciones (Constraints):**
>
> - Especifica claramente los tipos de datos (String, Integer, Boolean, etc.).
> - No omitas ningún parámetro presente en el código fuente.
> - Completa los ejemplos de respuesta (Example Value) con datos realistas y coherentes; no uses simples marcadores de posición genéricos como "string" o "123".
>
> **Advertencia (Warning):**
>
> - Si el código carece de cierta información (por ejemplo, códigos de error específicos), no la inventes. Limítate estrictamente a lo que se puede deducir lógicamente del código.

---

## 💡 Comentario del Autor (Insight)

Este prompt es un verdadero salvavidas cuando trabajas en equipos ágiles o *startups*, donde la documentación suele postergarse hasta el final. Personalmente, lo utilizo pegando el código de mis controladores de Node.js o Python directamente en **Claude 3.5 Sonnet** o **GPT-4o**. 

Lo más fascinante es que la IA no se limita a dar formato al texto; **infiere las reglas de validación** (por ejemplo, detecta que un *email* es obligatorio si devuelves un error 400) basándose en las sentencias `if` de tu propio código. Si tu equipo utiliza Swagger, pedir que la salida sea en **`OpenAPI 3.0 YAML`** te permite copiar y pegar el resultado directamente en tu archivo `swagger.yaml` sin tener que modificar absolutamente nada.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Funciona con cualquier lenguaje de programación o framework?**
  - A: Absolutamente. Los modelos de IA actuales tienen la capacidad de leer y comprender Express (Node.js), FastAPI (Python), Spring Boot (Java), Laravel (PHP), Go, Rust y prácticamente cualquier otro entorno de backend.

- **Q: ¿Qué hago si mi código es demasiado largo o contiene lógica de base de datos muy compleja?**
  - A: Lo ideal es proporcionarle a la IA únicamente el fragmento del controlador (Controller) o del enrutador (Router) donde se definen los parámetros de entrada (`req.body`, `req.query`) y las respuestas (`res.send`). No es necesario, ni recomendable, incluir la lógica interna de los servicios externos o las consultas SQL a la base de datos.

- **Q: ¿Se puede generar una colección de Postman en lugar de Swagger?**
  - A: ¡Por supuesto! Simplemente cambia la instrucción de formato en el prompt a `[Colección de Postman v2.1 JSON]` y podrás importarlo directamente en tu cliente de Postman.

---

## 🧬 Anatomía del Prompt (Why it works?)

1. **Role (Rol):** Al asignarle el doble rol de "escritor técnico" y "desarrollador backend", la IA comprende que debe lograr un equilibrio perfecto entre la precisión técnica del código y una redacción amigable para el ser humano.
2. **Context (Contexto):** Especificar que el público objetivo es el "equipo de frontend" obliga a la IA a centrar su atención en los datos de entrada (Request) y salida (Response), que es la información vital que necesitan para la integración.
3. **Constraints (Restricciones):** Exigir datos realistas para los ejemplos de respuesta evita que la IA genere archivos JSON perezosos o inútiles llenos de valores como `"test"` o `"string"`, garantizando que la documentación sea funcional desde el primer segundo.

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

La documentación de la API no es el final del desarrollo, sino el verdadero comienzo de una colaboración técnica fluida y eficiente con el resto del equipo.
No desperdicies tu valioso tiempo ni tu energía mental en tareas mecánicas y repetitivas. ¡Delégale el trabajo aburrido a la IA y concéntrate plenamente en diseñar la mejor arquitectura y lógica de negocio! 🍷
