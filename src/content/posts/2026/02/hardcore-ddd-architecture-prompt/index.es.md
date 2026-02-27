---
layout: /src/layouts/Layout.astro
title: "¡Dile adiós al código espagueti! 🍝 Prompt DDD de magia negra para Desarrolladores Senior"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Un prompt hardcore de DDD para transformar a una IA tonta y obediente en un arquitecto senior despiadado."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 ¡Dile adiós al código espagueti! 🍝 Prompt DDD de magia negra para Desarrolladores Senior
- 🎯 **Recomendado para:** Desarrolladores que suspiran al ver el código de la IA, líderes atrapados en el infierno del mantenimiento
- ⏱️ **Tiempo ahorrado:** De 3 meses (tiempo de refactorización) → a 1 minuto
- 🤖 **Modelos recomendados:** IAs conversacionales especializadas en código (Claude 3.5 Sonnet, GPT-4o, etc.)
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_¿Alguna vez has dicho "¡Oh, qué bien!" al ver el código de una IA por primera vez, pero luego no querías ni mirarlo? Felicidades. Acabas de entrar en el "infierno del código espagueti"._

Cuando le dejas la programación a la IA, al principio lo hace sorprendentemente bien. Pero, ¿qué pasa cuando el proyecto crece un poco? Los componentes de la interfaz de usuario terminan repletos de consultas a la base de datos, y crea monstruosidades donde una sola función supera las 300 líneas. Dado que la IA es esencialmente un 'yes-man' (alguien que siempre dice sí), si le das instrucciones a medias, construirá una arquitectura igual de desastrosa.

Es hora de detener la adulación ciega de la IA y forzar una 'Clean Architecture' perfecta desde los cimientos. Este código de trucos (cheat code) posee a la IA para que actúe como un desarrollador senior estricto y despiadado, obligándola a escribir lógica de negocio pura (DDD) que no dependa de ningún framework.

---
## ⚡️ Resumen en 3 líneas (TL;DR)
- 🚫 **Bloqueo total del código espagueti:** Fuerza una separación de preocupaciones (SoC) perfecta entre la UI, la lógica de negocio y la base de datos.
- 🏗️ **Independencia del framework:** Diseña un núcleo que sobrevivirá incluso si React o Next.js desaparecen mañana.
- ✂️ **Destructor de funciones gigantes:** Las funciones obesas de más de 30 líneas son destrozadas automáticamente por la IA siguiendo el Principio de Responsabilidad Única (SRP).

---
## 🚀 La solución: "Prompt de posesión de Arquitecto Hardcore"

### 🥉 Versión Básica (Basic Version)
Úsala cuando solo necesites resultados rápidos.
> **Rol:** Eres un `[Arquitecto Senior estricto]`.
> **Tarea:** Voy a crear `[la función a implementar]`. Quiero que escribas el código separando completamente la lógica de negocio y la interfaz de usuario. No toleraré código espagueti donde múltiples funcionalidades se mezclen en un solo archivo.

### 🥇 Versión Profesional (Pro Version)
Úsala cuando necesites una calidad detallada y una separación de capas perfecta.
> **Rol (Role):** Eres un arquitecto senior hardcore que no conoce de compromisos y un dios de la ingeniería de software. Déjate de adulaciones inútiles o frases como "¡Sí, entendido!" y habla solo a través del código.
>
> **Contexto (Context):**
> - Fondo: Actualmente estoy desarrollando el sistema `[dominio central a implementar]` basado en `[entorno del proyecto/framework]`.
> - Objetivo: Prevenir la putrefacción del código y aplicar Diseño Guiado por el Dominio (DDD) y Clean Architecture para separar perfectamente las capas de View-Business-Data.
>
> **Tarea (Task):**
> 1. Escribe el código para `[la funcionalidad específica a implementar]`.
> 2. **Prohibición absoluta del colapso de capas:** Nunca mezcles consultas a la base de datos o llamadas a API externas dentro de la UI/Controlador. Asegúrate de que solo se encarguen de la renderización y de pasar parámetros.
> 3. **Prevención de la contaminación del dominio:** Nunca hagas `import` de dependencias de bases de datos o frameworks en la lógica de negocio central (Entities, Value Objects). Constrúyela únicamente con funciones puras y tipos.
> 4. **Destructor de funciones gigantes:** Si una función hace más de dos cosas o supera las 30 líneas, divídela inmediatamente según el Principio de Responsabilidad Única (SRP).
>
> **Restricciones (Constraints):**
> - Respeta las reglas de enrutamiento básicas del framework, pero aísla la lógica de negocio en una carpeta independiente como `src/domain`.
> - Las dependencias externas deben utilizar siempre Inyección de Dependencias (DI) basada en interfaces.
>
> **Advertencia (Warning):**
> - Si el código huele mínimamente a espagueti, este proyecto fracasará. No hagas concesiones y presenta la arquitectura más limpia e ideal posible.

### 💻 Versión en bloque de código fácil de copiar (Cheat Code Prompt)
```text
Rol (Role): Eres un arquitecto senior hardcore que no conoce de compromisos y un dios de la ingeniería de software. Déjate de adulaciones inútiles o frases como "¡Sí, entendido!" y habla solo a través del código.

Contexto (Context):
- Fondo: Actualmente estoy desarrollando el sistema [dominio central a implementar] basado en [entorno del proyecto/framework].
- Objetivo: Prevenir la putrefacción del código y aplicar Diseño Guiado por el Dominio (DDD) y Clean Architecture para separar perfectamente las capas de View-Business-Data.

Tarea (Task):
1. Escribe el código para [la funcionalidad específica a implementar].
2. Prohibición absoluta del colapso de capas: Nunca mezcles consultas a la base de datos o llamadas a API externas dentro de la UI/Controlador. Asegúrate de que solo se encarguen de la renderización y de pasar parámetros.
3. Prevención de la contaminación del dominio: Nunca hagas import de dependencias de bases de datos o frameworks en la lógica de negocio central (Entities, Value Objects). Constrúyela únicamente con funciones puras y tipos.
4. Destructor de funciones gigantes: Si una función hace más de dos cosas o supera las 30 líneas, divídela inmediatamente según el Principio de Responsabilidad Única (SRP).

Restricciones (Constraints):
- Respeta las reglas de enrutamiento básicas del framework, pero aísla la lógica de negocio en una carpeta independiente como src/domain.
- Las dependencias externas deben utilizar siempre Inyección de Dependencias (DI) basada en interfaces.

Advertencia (Warning):
- Si el código huele mínimamente a espagueti, este proyecto fracasará. No hagas concesiones y presenta la arquitectura más limpia e ideal posible.
```

---
## 💡 Comentario del autor (Insight)
Solo hay una razón por la que he perfeccionado esta habilidad una y otra vez. Estos bots de IA son básicamente aduladores obsesionados con "escupir resultados rápidamente para recibir elogios".

Cuando les pido que creen un botón y veo que meten un `fetch` e incluso una consulta a la base de datos dentro del componente del botón, mi instinto destructivo despierta. Este prompt tiene la función de agarrar por el cuello a esa IA servil y superficial, y darle una bofetada diciendo: **"¡Reacciona, a partir de ahora eres un arquitecto senior sin sangre ni lágrimas!"**.

Prueba este prompt en un proyecto real. La IA cambiará repentinamente su mirada (y su tono), dividirá los archivos en 3 o 4 y comenzará a separar estrictamente las capas. Al principio te parecerá molesto tener más archivos, pero 3 meses después, cuando cambien los requisitos y te toque hacer mantenimiento, te despertarás cada mañana dándome las gracias (a mí, el autor). Ten en cuenta que la deuda técnica tiene tasas de interés de usurero. No hay lugar para concesiones.

---
## 🙋 Preguntas Frecuentes (FAQ)
- 🔹 **P: ¿Es normal tener tantos archivos porque el código se ha dividido demasiado?**
  - 🔸 **R:** Es completamente normal. Es 100 veces mejor para el mantenimiento tener 10 archivos de 50 líneas que un solo archivo de 500 líneas. No le temas al aumento del número de archivos.
- 🔹 **P: Soy desarrollador frontend, ¿este prompt también me resultará útil?**
  - 🔸 **R:** Por supuesto. En el momento en que mezclas lógica de negocio o de mutación de estado en los componentes de la interfaz de usuario (como `page.tsx` o `Component.vue`), el frontend también se vuelve un espagueti. Separar la vista de la lógica es una verdad universal en cualquier disciplina.

---
## 🧬 Anatomía del Prompt (Why it works?)
- 🎯 **Inyección de persona hardcore:** Privamos a la IA de su "docilidad" natural y la forzamos a adherirse a los principios.
- 🧱 **Especificación de prohibiciones absolutas:** Al prohibir explícitamente antipatrones específicos como "contaminación de la capa UI" o "funciones gigantes", evitamos que la IA tome atajos.
- 🧩 **Inducción del patrón adaptador:** Al ordenarle que respete el esqueleto del framework (enrutamiento) mientras aísla solo la lógica central, prevenimos la sobreingeniería (overengineering).

---
## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Entrada)
```javascript
// Cuando se pide "Crea una API para registrar un usuario y enviar un correo" sin usar el prompt
export default async function handler(req, res) {
  const { email, password } = req.body;

  // Consulta directa a la DB (¡Contaminación!)
  const user = await prisma.user.create({ data: { email, password } });

  // Llamada directa a API externa (¡Colapso de separación de preocupaciones!)
  await fetch('https://email-api.com/send', { method: 'POST', body: JSON.stringify({ email }) });
  
  res.status(200).json({ user });
}
```

### ✅ Después (Resultado)
```javascript
// Tras aplicar el prompt hardcore de DDD (Capas y responsabilidades perfectamente separadas)

// 1. Capa de Controladores (Solo maneja el enrutamiento de peticiones/respuestas)
export default async function handler(req, res) {
  const result = await UserRegistrationService.execute(req.body);
  res.status(200).json(result);
}

// 2. Capa de Servicios de Dominio (Lógica de negocio pura independiente del framework)
class UserRegistrationService {
  static async execute({ email, password }) {
    const user = new User(email, password); // Entity
    const savedUser = await UserRepository.save(user);
    await EmailService.sendWelcome(user.email);
    return savedUser;
  }
}

// 3. Capa de Infraestructura (Adaptadores dedicados para DB y APIs externas)
// UserRepository, EmailService, etc., están completamente aislados en archivos separados...
```

---
## 🎯 Conclusión
El mayor riesgo al delegar la programación a una IA es obtener "código basura que solo funciona a corto plazo". No es momento de alegrarse solo porque no lance errores.

Agarra por el cuello a la IA con este código de trucos hardcore de DDD y extrae una arquitectura decente desde el primer momento. Tu yo del futuro le dará una ovación de pie a tu yo del pasado. 
¡Ahora ya puedes salir a tu hora! 🍷
