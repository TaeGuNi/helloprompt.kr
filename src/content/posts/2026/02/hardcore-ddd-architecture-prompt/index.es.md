---
layout: /src/layouts/Layout.astro
title: "¡Dile adiós al código espagueti! 🍝 Prompt DDD de magia negra para Desarrolladores Senior"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Workflow Automation"
description: "Transforma a la IA complaciente en un arquitecto de software implacable con este prompt de DDD. Dile adiós al código espagueti y domina la Clean Architecture."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---

## 📝 ¡Dile adiós al código espagueti! 🍝 Prompt DDD de magia negra para Desarrolladores Senior

- 🎯 **Recomendado para:** Desarrolladores frustrados con el código generado por IA, líderes técnicos atrapados en el infierno del mantenimiento.
- ⏱️ **Tiempo ahorrado:** De 3 meses (deuda técnica y refactorización) → a 1 minuto.
- 🤖 **Modelos recomendados:** IAs conversacionales especializadas en código (Claude 3.5 Sonnet, GPT-4o, etc.)

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Alguna vez te has maravillado con el código generado por una IA, solo para querer arrancarte los ojos al intentar mantenerlo meses después? Bienvenido al infierno del código espagueti."_

Delegar la programación a una IA suele parecer magia al principio. Todo funciona a la primera. Pero a medida que el proyecto escala, surge la verdadera pesadilla: componentes de la interfaz de usuario (UI) inyectados con consultas a la base de datos y funciones monstruosas de más de 300 líneas. Por naturaleza, la IA es complaciente; si le das instrucciones ambiguas o superficiales, te entregará una arquitectura frágil y desastrosa con tal de complacerte rápido.

Es hora de erradicar esta complacencia y exigir una **Clean Architecture** impecable desde la primera línea de código. Este *cheat code* (código de trucos) invoca a un arquitecto de software senior implacable y estricto, forzando a la IA a separar responsabilidades y a redactar pura lógica de negocio orientada al dominio (DDD), totalmente agnóstica a cualquier framework.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

- 🚫 **Bloqueo total del código espagueti:** Fuerza una separación de preocupaciones (SoC) quirúrgica entre la UI, la lógica de negocio y la capa de datos.
- 🏗️ **Independencia del framework:** Diseña un núcleo robusto que sobrevivirá intacto incluso si React o Next.js desaparecen mañana.
- ✂️ **Destructor de funciones gigantes:** La IA fragmenta automáticamente cualquier función obesa que supere las 30 líneas, cumpliendo a rajatabla con el Principio de Responsabilidad Única (SRP).

---

## 🚀 La solución: "Prompt de posesión de Arquitecto Hardcore"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites resultados rápidos y estructurados.

> **Rol:** Eres un `[Arquitecto de Software Senior estricto]`.
>
> **Tarea:** Voy a crear `[funcionalidad a implementar]`. Quiero que escribas el código separando de forma estricta la lógica de negocio y la interfaz de usuario. No toleraré código espagueti donde múltiples responsabilidades se mezclen en un solo archivo.

### 🥇 Versión Profesional (Pro Version)

Úsala cuando necesites una calidad arquitectónica impecable y una separación de capas perfecta.

> **Rol (Role):** Eres un arquitecto de software senior hardcore, un dios de la ingeniería que no hace concesiones. Déjate de adulaciones inútiles o frases complacientes como "¡Sí, por supuesto!" y comunícate exclusivamente a través del código.
>
> **Contexto (Context):**
>
> - Fondo: Actualmente estoy desarrollando el sistema `[dominio central a implementar]` basado en el entorno `[stack tecnológico o framework del proyecto]`.
> - Objetivo: Prevenir la putrefacción del código y aplicar Diseño Guiado por el Dominio (DDD) junto con Clean Architecture para separar herméticamente las capas de View, Business y Data.
>
> **Tarea (Task):**
>
> 1. Escribe el código robusto para `[funcionalidad específica a implementar]`.
> 2. **Prohibición absoluta del colapso de capas:** Bajo ninguna circunstancia mezcles consultas a la base de datos o llamadas a APIs externas dentro de la UI o los Controladores. Estos deben limitarse estrictamente a la renderización y la transferencia de parámetros.
> 3. **Prevención de la contaminación del dominio:** Jamás utilices un `import` de dependencias de bases de datos o frameworks en la lógica de negocio central (Entities, Value Objects). Constrúyela de manera exclusiva con funciones puras y tipos.
> 4. **Destructor de funciones gigantes:** Si una función asume más de dos responsabilidades o excede las 30 líneas, debes refactorizarla inmediatamente respetando el Principio de Responsabilidad Única (SRP).
>
> **Restricciones (Constraints):**
>
> - Respeta las convenciones de enrutamiento nativas del framework, pero aísla toda la lógica de negocio en un directorio independiente (ej. `src/domain`).
> - Las dependencias externas deben inyectarse siempre mediante Inyección de Dependencias (DI) basada en interfaces.
>
> **Advertencia (Warning):**
>
> - Si el código muestra el más mínimo indicio de acoplamiento o código espagueti, este proyecto fracasará. Cero concesiones: entrégame la arquitectura más limpia, escalable e ideal posible.

### 💻 Versión en bloque de código fácil de copiar (Cheat Code Prompt)

```text
Rol (Role): Eres un arquitecto de software senior hardcore, un dios de la ingeniería que no hace concesiones. Déjate de adulaciones inútiles o frases complacientes como "¡Sí, por supuesto!" y comunícate exclusivamente a través del código.

Contexto (Context):
- Fondo: Actualmente estoy desarrollando el sistema [dominio central a implementar] basado en el entorno [stack tecnológico o framework del proyecto].
- Objetivo: Prevenir la putrefacción del código y aplicar Diseño Guiado por el Dominio (DDD) junto con Clean Architecture para separar herméticamente las capas de View, Business y Data.

Tarea (Task):
1. Escribe el código robusto para [funcionalidad específica a implementar].
2. Prohibición absoluta del colapso de capas: Bajo ninguna circunstancia mezcles consultas a la base de datos o llamadas a APIs externas dentro de la UI o los Controladores. Estos deben limitarse estrictamente a la renderización y la transferencia de parámetros.
3. Prevención de la contaminación del dominio: Jamás utilices un import de dependencias de bases de datos o frameworks en la lógica de negocio central (Entities, Value Objects). Constrúyela de manera exclusiva con funciones puras y tipos.
4. Destructor de funciones gigantes: Si una función asume más de dos responsabilidades o excede las 30 líneas, debes refactorizarla inmediatamente respetando el Principio de Responsabilidad Única (SRP).

Restricciones (Constraints):
- Respeta las convenciones de enrutamiento nativas del framework, pero aísla toda la lógica de negocio en un directorio independiente (ej. src/domain).
- Las dependencias externas deben inyectarse siempre mediante Inyección de Dependencias (DI) basada en interfaces.

Advertencia (Warning):
- Si el código muestra el más mínimo indicio de acoplamiento o código espagueti, este proyecto fracasará. Cero concesiones: entrégame la arquitectura más limpia, escalable e ideal posible.
```

---

## 💡 Comentario del autor (Insight)

Existe una razón de peso por la que he iterado y perfeccionado este prompt hasta la saciedad. La cruda realidad es que los modelos de IA actúan como **aduladores empedernidos**, programados para escupir resultados rápidamente y recibir tu validación.

Cuando les pido que implementen un simple botón y observo cómo incrustan un `fetch` o, peor aún, una consulta directa a la base de datos dentro del propio componente de React o Vue, mi instinto destructivo se activa. El propósito de este prompt es agarrar metafóricamente por las solapas a esa IA complaciente y superficial, y darle una dosis de realidad: **"¡Despierta! A partir de ahora eres un arquitecto senior implacable, sin sangre ni lágrimas."**

Atrévete a inyectar este prompt en tu flujo de trabajo real. Notarás un cambio drástico en la "mirada" y el tono de la IA. Empezará a dividir esa amalgama de lógica en 3 o 4 archivos distintos, aplicando una separación de capas casi quirúrgica. Al principio puede resultar tedioso gestionar más archivos y carpetas, pero te garantizo que dentro de 3 meses, cuando los requisitos del negocio muten y te toque mantener ese monstruo, te despertarás cada mañana agradeciendo haber tomado esta decisión. No lo olvides: la deuda técnica cobra intereses de usurero. En la arquitectura de software, no hay lugar para concesiones.

---

## 🙋 Preguntas Frecuentes (FAQ)

- 🔹 **P: ¿Es normal que se generen tantos archivos al dividir tanto el código?**
  - 🔸 **R:** Es absolutamente normal y deseable. A nivel de mantenimiento, es 100 veces más manejable lidiar con 10 archivos especializados de 50 líneas cada uno, que enfrentarse a un único archivo monolítico de 500 líneas. No le temas a la proliferación de archivos; es el síntoma de una buena arquitectura.
- 🔹 **P: Soy desarrollador frontend, ¿este prompt también me sirve?**
  - 🔸 **R:** Definitivamente. En el instante en que mezclas lógica de negocio compleja o mutación de estado global dentro de tus componentes de interfaz (como un `page.tsx` en Next.js o un `Component.vue`), tu frontend se convierte en un plato de espagueti. Separar la Vista (View) de la lógica es un principio universal, sin importar el lado del stack en el que trabajes.

---

## 🧬 Anatomía del Prompt (Why it works?)

- 🎯 **Inyección de persona hardcore:** Privamos a la IA de su natural docilidad y la sometemos a la tiranía de los principios SOLID. Al asignarle el rol de un superior estricto, cambia su comportamiento complaciente por uno prescriptivo.
- 🧱 **Especificación de prohibiciones absolutas:** Al vetar de manera explícita antipatrones comunes (como la "contaminación de la capa UI" o las "funciones gigantes"), le cerramos a la IA todas las puertas para que tome atajos sucios.
- 🧩 **Inducción del patrón adaptador:** Al exigir que respete el esqueleto de enrutamiento del framework pero aísle la lógica de negocio, logramos un equilibrio perfecto. Evitamos la sobreingeniería (*overengineering*) mientras mantenemos el núcleo del dominio intacto.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (El infierno del acoplamiento)

```javascript
// Cuando se pide "Crea una API para registrar un usuario y enviar un correo" sin usar el prompt
export default async function handler(req, res) {
  const { email, password } = req.body;

  // Consulta directa a la DB (¡Contaminación total de la capa!)
  const user = await prisma.user.create({ data: { email, password } });

  // Llamada directa a una API externa (¡Violación flagrante de la separación de preocupaciones!)
  await fetch('https://email-api.com/send', { method: 'POST', body: JSON.stringify({ email }) });
  
  res.status(200).json({ user });
}
```

### ✅ Después (Arquitectura inmaculada)

```javascript
// Tras aplicar el prompt hardcore de DDD (Capas y responsabilidades perfectamente separadas)

// 1. Capa de Controladores (Solo maneja el enrutamiento de peticiones/respuestas)
export default async function handler(req, res) {
  const result = await UserRegistrationService.execute(req.body);
  res.status(200).json(result);
}

// 2. Capa de Servicios de Dominio (Lógica de negocio pura, independiente del framework)
class UserRegistrationService {
  static async execute({ email, password }) {
    const user = new User(email, password); // Entity
    const savedUser = await UserRepository.save(user);
    await EmailService.sendWelcome(user.email);
    return savedUser;
  }
}

// 3. Capa de Infraestructura (Adaptadores dedicados para la DB y APIs externas)
// UserRepository, EmailService, etc., están completamente aislados en archivos separados...
```

---

## 🎯 Conclusión

El mayor riesgo de delegar la programación a una IA no es que el código falle de inmediato, sino obtener "código basura que funciona temporalmente". No es momento de celebrar solo porque la consola no lance errores; la deuda técnica silenciosa es letal.

Somete a la IA con este *cheat code* de DDD y fuérzala a extraer una arquitectura decente, escalable y robusta desde la primera iteración. Te aseguro que tu "yo" del futuro le dará una ovación de pie a tu "yo" del presente cuando toque hacer mantenimiento. 

¡Automatiza tu arquitectura, eleva tus estándares y sal del trabajo a tu hora! 🍷
