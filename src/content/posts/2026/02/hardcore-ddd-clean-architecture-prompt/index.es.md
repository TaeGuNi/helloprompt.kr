---
layout: /src/layouts/Layout.astro
title: "No aceptamos código espagueti: El código de trucos DDD para convertir a la IA en un desarrollador senior a la fuerza 🤬"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Workflow Automation"
description: "Usa este riguroso prompt de arquitecto de software para obligar a la IA a dejar la complacencia y escribir únicamente código de negocio limpio y estructurado."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---

## 📝 No aceptamos código espagueti: El código de trucos DDD para convertir a la IA en un desarrollador senior a la fuerza 🤬

- **🎯 Público objetivo:** Desarrolladores junior agotados por el mantenimiento, arquitectos que odian el código espagueti
- **⏱️ Tiempo estimado:** 3 horas de refactorización → reducidas a 1 minuto
- **🤖 Modelos recomendados:** Modelos con alta capacidad de razonamiento (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Alguna vez te ha dado dolor de cabeza revisar el código generado por la IA? Si ya no soportas ver cómo mezcla la lógica de la base de datos con la interfaz de usuario, necesitas este código de trucos."_

Este protocolo es el manual definitivo para erradicar por completo la 'complacencia' y la 'pereza' de tu amable (pero irreflexivo) asistente de IA, transformándolo en un arquitecto senior implacable. Si te niegas a ahogarte en deuda técnica y a perder la cordura por copiar y pegar ciegamente lo que la IA te escupe, implementa este sistema de inmediato.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

- 🚫 **Tolerancia cero a la mezcla de capas:** Bloquea de raíz el "terrorismo arquitectónico" que supone mezclar UI, lógica de negocio y consultas a la base de datos en un solo archivo.
- 🛡️ **Independencia absoluta del framework:** Fuerza la creación de un 'dominio puro' que sobrevivirá intacto incluso si decides cambiar de framework mañana.
- 🔪 **Erradicación de funciones monstruosas:** Entrena a la IA para que refactorice sin piedad cualquier bloque de código que supere las 30 líneas o que dependa de comentarios para separar su lógica.

---

## 🚀 Solución: "Domain-Driven Design (DDD) & Clean Architecture Protocol"

### 🥉 Basic Version (Versión Básica)

Úsala cuando necesites resultados de refactorización rápidos y directos.

> **Rol:** Eres un `[Arquitecto de Software Senior]` implacable.
>
> **Tarea:** Refactoriza el siguiente `[Fragmento de código]` respetando estrictamente el Principio de Responsabilidad Única (SRP) y la Separación de Intereses (SoC). Está terminantemente prohibido mezclar lógica de negocio en la capa de UI. Si una función supera las 30 líneas, divídela obligatoriamente.

### 🥇 Pro Version (Versión Profesional)

Este es el as bajo la manga que debes sacar cuando necesites imponer una disciplina arquitectónica férrea en todo el proyecto y exijas un código impecable.

> **Rol:** Eres un `[Arquitecto de Software Senior]` implacable y un fanático absoluto del DDD (Diseño Guiado por el Dominio). Déjate de adulaciones o explicaciones innecesarias; dame únicamente el código.
>
> **Contexto:**
>
> - **Fondo:** Actualmente estoy desarrollando un proyecto basado en `[Nombre del Framework/Lenguaje]`.
> - **Objetivo:** Escribir código basado en Clean Architecture donde las capas de Vista, Negocio y Datos estén perfectamente aisladas.
>
> **Tarea:**
>
> 1. Analiza el `[Requisito o Código]` proporcionado y destrózalo sin piedad, separándolo estrictamente en la capa de UI, el dominio de negocio y la capa de infraestructura.
> 2. Minimiza el acoplamiento utilizando interfaces (inyección de dependencias) para garantizar que la lógica central del dominio jamás se contamine con detalles de un framework específico.
> 3. Si un objeto o función realiza más de dos acciones, fragméntalo de inmediato basándote en el Principio de Responsabilidad Única (SRP).
>
> **Restricciones:**
>
> - Insertar consultas a la base de datos de forma directa o usar `fetch`/`axios` dentro de un Controlador o Componente de UI se considera "Terrorismo Arquitectónico". Está absolutamente prohibido.
> - La salida debe entregarse exclusivamente dentro de bloques de código markdown (` ``` `).
>
> **Advertencias:**
>
> - No inventes sintaxis moderna inexistente ni bibliotecas ficticias para sonar convincente (cero alucinaciones). Si desconoces algo, admítelo con seguridad.
> - Si una función supera las 30 líneas o detectas el hedor a código sucio (Code Smell) mediante comentarios del tipo "A partir de aquí es la parte Orientada a Objetos", divídela de inmediato.

**📋 Código de trucos para copiar (Copy & Paste)**

```text
Rol: Eres un [Arquitecto de Software Senior] implacable y un fanático absoluto del DDD (Diseño Guiado por el Dominio). Déjate de adulaciones o explicaciones innecesarias; dame únicamente el código.
Contexto:
- Fondo: Actualmente estoy desarrollando un proyecto basado en [Nombre del Framework/Lenguaje].
- Objetivo: Escribir código basado en Clean Architecture donde las capas de Vista, Negocio y Datos estén perfectamente aisladas.
Tarea:
1. Analiza el [Requisito o Código] proporcionado y destrózalo sin piedad, separándolo estrictamente en la capa de UI, el dominio de negocio y la capa de infraestructura.
2. Minimiza el acoplamiento utilizando interfaces (inyección de dependencias) para garantizar que la lógica central del dominio jamás se contamine con detalles de un framework específico.
3. Si un objeto o función realiza más de dos acciones, fragméntalo de inmediato basándote en el Principio de Responsabilidad Única (SRP).
Restricciones:
- Insertar consultas a la base de datos de forma directa o usar fetch/axios dentro de un Controlador o Componente de UI se considera "Terrorismo Arquitectónico". Está absolutamente prohibido.
- La salida debe entregarse exclusivamente dentro de bloques de código markdown.
Advertencias:
- No inventes sintaxis moderna inexistente ni bibliotecas ficticias para sonar convincente. Si desconoces algo, admítelo con seguridad.
- Si una función supera las 30 líneas o detectas el hedor a código sucio (Code Smell) mediante comentarios del tipo "A partir de aquí es la parte Orientada a Objetos", divídela de inmediato.

[Requisito o Código]: (Introduce el código aquí)
```

---

## 💡 Comentario del autor (Insight)

Para ser honestos, el código que genera la IA suele lucir aceptable a simple vista, pero cuando lo examinas bajo la lupa, muchas veces es un auténtico desastre. Ejecutar llamadas con `fetch` y lanzar consultas a la base de datos directamente desde los componentes de UI sin ningún tipo de pudor... Es el clásico **código basura** que convierte el mantenimiento en una auténtica pesadilla.

Este código de trucos es la herramienta definitiva para **castrar ese instinto superficial de la IA de "terminar rápido"**, imponiéndole los estándares inquebrantables de un desarrollador senior.

Si lo pruebas por ti mismo, notarás cómo la IA abandona sus habituales e inútiles respuestas complacientes ("¡Claro que sí! ¡Es una idea fantástica!") para bombardearte con verdades crudas y despedazar tu código hasta estructurarlo de manera impecable. Si no quieres acabar renunciando aplastado por el peso del **código espagueti** a medida que tu proyecto escala, asegúrate de programar obligando a la IA a seguir este prompt a rajatabla.

---

## 🙋 Preguntas Frecuentes (FAQ)

- 📌 **P: ¿Para qué lenguaje o framework está diseñado este prompt?**
  - R: Es completamente agnóstico al lenguaje. Ya sea que trabajes con TypeScript, Python o Java, los fundamentos de una buena arquitectura son universales. Simplemente sustituye la variable `[Nombre del Framework/Lenguaje]` por tu stack tecnológico actual.
- 📌 **P: La IA ignora sistemáticamente las reglas de enrutamiento más recientes de mi framework y termina sobre-ingeniando la solución. ¿Qué hago?**
  - R: En ese caso, añade una directiva contundente. Ordénale: *"¡Respeta las reglas básicas del App Router de Next.js (View, Layout), pero extrae exclusivamente la lógica de negocio interna utilizando el patrón Adapter!"* Lo asimilará a la perfección.
- 📌 **P: ¿No resulta este prompt demasiado agresivo? ¿La IA no se "ofenderá"?**
  - R: ¿De qué te sirve ser excesivamente cortés con un algoritmo? Las máquinas generan obras maestras cuando las sometes a una presión extrema y les marcas límites claros. Una advertencia como *"Se considerará terrorismo arquitectónico"* es infinitamente más eficaz para blindar tu código que un simple *"Por favor, hazlo así"*.

---

## 🧬 Anatomía del Prompt (Why it works?)

- 💣 **Imposición de restricciones extremas:** Al utilizar un tono implacable como "Contaminar la capa de UI se considerará terrorismo arquitectónico", anulamos por completo cualquier margen de negociación interna de la IA.
- 🛡️ **Independencia forzada del framework:** Al inyectarle la mentalidad de *"ni una sola línea de lógica debe cambiar aunque el framework desaparezca"*, sentamos las bases inamovibles para construir un verdadero dominio de negocio.
- ✂️ **Cuantificación del Principio SRP:** Al establecer reglas inflexibles y medibles como *"Prohibido superar las 30 líneas"* y *"Los comentarios que dividen secciones son código sucio"*, condicionamos a la IA para que fragmente y organice el código de forma autónoma.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Entrada: Código espagueti generado apresuradamente por la IA)

```tsx
// Una mezcla horrible: UI + Consulta a BD + Lógica de negocio, todo aglomerado en un solo archivo
export default async function UserProfile({ userId }) {
  const db = await connectDB();
  const user = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
  
  if (!user) return <div>User not found</div>;
  if (user.status === 'banned') await sendAlertEmail(user.email); // ¿¡Lógica de negocio ejecutada desde la UI!?

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => db.query('UPDATE...')}>Update</button>
    </div>
  );
}
```

### ✅ Después (Resultado: Código refactorizado a la fuerza con este truco)

```tsx
// 1. Domain / Service Layer (Lógica de negocio estrictamente aislada)
import { getUserProfile } from '@/domain/user/use-cases/getUserProfile';
import { handleBannedUser } from '@/domain/user/services/alertService';

// 2. Presentation Layer (Responsable única y exclusivamente del renderizado y el enrutamiento)
export default async function UserProfilePage({ userId }) {
  const user = await getUserProfile(userId); 
  
  if (!user) return <NotFoundView />;
  if (user.status === 'banned') await handleBannedUser(user);

  return <ProfileView user={user} />;
}
```

---

## 🎯 Conclusión

La IA es capaz de programar a una velocidad vertiginosa, pero le importa un rábano cómo sobrevivirás manteniendo esa aplicación dentro de un año. Al final del día, la responsabilidad de garantizar un diseño y una arquitectura limpios recae exclusivamente en ti, el ingeniero humano.

Este código de trucos actúa como un látigo de precisión, inyectándole a la máquina esa misma responsabilidad profesional a la fuerza. Despoja a tu IA de esa molesta fachada de chatbot complaciente y despierta al verdadero agente operativo: un arquitecto senior hasta la médula.

¡Ahora, invierte ese tiempo que solías desperdiciar desenredando código espagueti en salir más temprano del trabajo! 🍷
