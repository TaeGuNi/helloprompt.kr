---
layout: /src/layouts/Layout.astro
title: "내 코드가 스파게티? 리팩토링 전문가에게 맡겨보세요"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "개발"
description: "돌아가는 쓰레기(Working Garbage)를 만들지 마세요. 읽기 좋은 코드가 좋은 코드입니다."
tags: ["코딩", "리팩토링", "클린코드"]
---

# 📝 ¿Tu código es un espagueti? Déjaselo a un experto en refactorización

- **🎯 Público objetivo:** Desarrolladores junior, ingenieros de software, programadores autodidactas.
- **⏱️ Tiempo ahorrado:** De 2 horas de revisión a 2 minutos.
- **🤖 Modelo recomendado:** Claude 3.5 Sonnet o GPT-4o (Excelentes para lógica de código).

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"No construyas 'basura funcional' (Working Garbage). El código que no se puede leer hoy, será tu pesadilla de mantenimiento mañana."_

¿Alguna vez has escrito código que funciona perfectamente, pero que te da vergüenza mostrar en una revisión de código (Code Review)? Variables con nombres confusos, funciones de 200 líneas y condicionales anidados que parecen un laberinto sin salida.

El código espagueti no solo ralentiza a tu equipo de desarrollo, sino que también introduce bugs ocultos difíciles de rastrear. Con los prompts adecuados, puedes transformar ese caos en "Clean Code" elegante, modular y fácil de mantener en cuestión de segundos, aprendiendo mejores prácticas en el proceso.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. El código que simplemente funciona no es suficiente; debe ser legible y mantenible para ti y para tu equipo.
2. Un buen prompt de refactorización asigna a la IA el rol de un "Ingeniero de Software Senior".
3. Transforma bloques de código incomprensibles aplicando principios SOLID y patrones de diseño de manera automática y segura.

---

## 🚀 Solución: "Prompt de Refactorización Clean Code"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites una limpieza rápida y sugerencias de nombres de variables para un fragmento pequeño de código.

> **Rol:** Eres un Ingeniero de Software Senior experto en Clean Code.
> **Tarea:** Refactoriza el siguiente código para que sea más legible y eficiente, mejorando los nombres de variables y eliminando la redundancia.
>
> [Inserta tu código aquí]

<br>

### 🥇 Versión Pro (Advanced Version)

Úsala para lógica de negocio compleja, funciones largas o cuando necesites aplicar principios arquitectónicos específicos (SOLID, DRY) sin romper tu aplicación.

> **Rol (Role):** Eres un Arquitecto de Software Senior y un revisor de código (Code Reviewer) implacable, experto en los principios de "Clean Code" de Robert C. Martin.
>
> **Contexto (Context):**
>
> - Fondo: Estoy trabajando en `[lenguaje de programación o framework, ej: React/TypeScript]` y este fragmento de código maneja `[lógica de negocio principal, ej: la autenticación de usuarios]`.
> - Objetivo: Quiero refactorizar este código para que sea altamente modular, testeable y fácil de leer para los desarrolladores junior de mi equipo, sin alterar su comportamiento actual en absoluto.
>
> **Tarea (Task):**
>
> 1. Analiza el código e identifica los "Code Smells" (malos olores en el código).
> 2. Refactoriza el código aplicando principios SOLID y DRY.
> 3. Extrae funciones grandes en funciones más pequeñas y puras (Pure Functions) con una única responsabilidad.
> 4. Añade comentarios JSDoc/Docstring solo donde la lógica de negocio sea compleja de entender; el código debe explicarse por sí mismo mediante buenos nombres de variables y métodos.
>
> **Restricciones (Constraints):**
>
> - Mantén exactamente la misma funcionalidad (Input/Output no debe cambiar).
> - Presenta el código final en un bloque de código Markdown.
> - Explica los cambios clave que realizaste utilizando una lista de viñetas estructurada y concisa para que pueda aprender de ellos.
>
> **Código a refactorizar:**
> `[Pega tu código aquí]`

---

## 💡 Comentario del Autor (Insight)

A menudo veo a desarrolladores junior usando la IA simplemente diciendo: _"Arregla este código"_. El problema es que la IA con frecuencia cambiará la lógica fundamental o introducirá métodos que no son compatibles con la versión actual de tu framework.

Al proporcionar el **Contexto** (el lenguaje exacto) y la **Restricción** estricta de "mantener la misma funcionalidad", aseguras que la IA actúe como un compañero de Pair Programming seguro y preciso. Personalmente, uso la **Versión Pro** antes de abrir cualquier Pull Request (PR) importante. Me ha salvado incontables veces de dejar "Code Smells" vergonzosos, y a menudo la IA sugiere un enfoque más declarativo (como usar métodos de array `map`/`filter` en lugar de bucles `for` mutables) en el que no había pensado en ese momento. Es una herramienta de aprendizaje invaluable.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿La IA cambiará la lógica de mi aplicación y romperá algo?**
  - A: Si usas la Versión Pro con la restricción de mantener el Input/Output intacto, el riesgo se reduce drásticamente. Sin embargo, **siempre** debes ejecutar tus pruebas unitarias (Unit Tests) antes y después de refactorizar para garantizar al 100% que nada se ha roto.

- **P: ¿Puedo pedirle que aplique un estilo de formato específico (como ESLint o Prettier)?**
  - A: ¡Por supuesto! Puedes añadir a las restricciones del prompt: "Asegúrate de que el código cumpla con las reglas de estilo de Airbnb JavaScript" o mencionar la guía de estilo interna de tu empresa.

- **P: Mi código tiene datos sensibles (como claves API o contraseñas). ¿Puedo pegarlo en el prompt?**
  - A: **¡NO!** Nunca pegues secretos, tokens o contraseñas reales en un LLM público (ChatGPT, Claude, etc.). Reemplázalos con variables de entorno simuladas o texto de relleno (ej. `API_KEY_AQUI`) antes de enviar el código para analizar.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1.  **Rol Senior:** Al decirle a la IA que es un "Arquitecto de Software", elevas el estándar de sus respuestas, forzándola a considerar la arquitectura del sistema y la mantenibilidad, no solo la sintaxis básica.
2.  **Identificación de Code Smells:** Pedirle que nombre los errores antes de corregirlos te ayuda a _aprender_ y no solo a copiar y pegar. Esto mejora activamente tus habilidades de ingeniería a largo plazo.
3.  **Preservación de la Funcionalidad:** Es la restricción más crítica. Evita que el modelo intente reescribir características de tu aplicación y lo obliga a concentrarse únicamente en el aspecto estructural (Refactoring puro).

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Código Espagueti)

```javascript
function procesar(d) {
  let res = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i].status == "active") {
      if (d[i].age > 18) {
        let temp = Object.assign({}, d[i]);
        temp.isAdult = true;
        res.push(temp);
      }
    }
  }
  return res;
}
```

### ✅ Después (Clean Code)

```javascript
/**
 * Filtra los usuarios activos que son mayores de edad y les añade el flag isAdult.
 */
const getActiveAdultUsers = (users) => {
  const ADULT_AGE_THRESHOLD = 18;

  return users
    .filter(
      (user) => user.status === "active" && user.age > ADULT_AGE_THRESHOLD,
    )
    .map((user) => ({
      ...user,
      isAdult: true,
    }));
};
```

---

## 🎯 Conclusión

Recuerda siempre esto: tu código se lee muchas más veces de las que se escribe. Invertir solo 2 minutos con este prompt antes de enviar tu trabajo no solo hará inmensamente feliz a tu equipo en la revisión, sino que te convertirá en un desarrollador más profesional, limpio y respetado.

¡Ya puedes enviar ese Pull Request con total confianza! 🚀
