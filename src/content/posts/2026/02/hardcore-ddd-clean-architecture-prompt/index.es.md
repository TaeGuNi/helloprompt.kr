---
layout: /src/layouts/Layout.astro
title: "No aceptamos código espagueti: El código de trucos DDD para convertir a la IA en un desarrollador senior a la fuerza 🤬"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Déjate de adulaciones inútiles y usa este riguroso prompt de entrenamiento de un arquitecto senior para obligar a la IA a escribir únicamente lógica de negocio pura."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 No aceptamos código espagueti: El código de trucos DDD para convertir a la IA en un desarrollador senior a la fuerza 🤬

- **🎯 Público objetivo:** Desarrolladores junior agotados por el mantenimiento, arquitectos que odian el código espagueti
- **⏱️ Tiempo estimado:** Refactorización de 3 horas → reducida a 1 minuto
- **🤖 Modelos recomendados:** IAs con excelente capacidad de generación de código (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_¿Alguna vez te ha dado un dolor de cabeza al ver el código generado por la IA? Si ya no soportas ver cómo mete a lo tonto la comunicación con la base de datos en la UI, usa este código de trucos._

Este documento de habilidades es el manual para castrar por completo la 'adulación' y la 'pereza' de tu amable (e irreflexivo) asistente de IA, y transformarlo en un arquitecto senior despiadado. Si no quieres ahogarte en deuda técnica y renunciar a tu trabajo por copiar y pegar ciegamente lo que te da la IA, implementa este protocolo de inmediato.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

- 🚫 **Prohibición absoluta de colapsar capas:** Bloquea de raíz el terrorismo arquitectónico de mezclar UI, lógica de negocio y comunicación con BD en un solo archivo.
- 🛡️ **Escape de la dependencia del framework:** Fuerza un código de 'dominio puro' que sobrevivirá incluso si el framework desaparece mañana.
- 🔪 **Destructor de funciones gigantes:** Entrena a la IA para que destruya (refactorice) sin piedad el código sucio que supera las 30 líneas o que usa comentarios para dividir secciones.

---

## 🚀 Solución: "Domain-Driven Design (DDD) & Clean Architecture Protocol"

### 🥉 Basic Version (Versión Básica)
Úsala cuando solo necesites resultados de refactorización rápidos.

> **Rol:** Eres un despiadado `[Arquitecto de Software Senior]`.
> **Tarea:** Refactoriza el siguiente `[Fragmento de código]` siguiendo el Principio de Responsabilidad Única (SRP) y la Separación de Preocupaciones (SoC). No mezcles lógica de negocio en la UI, y si el código supera las 30 líneas, divídelo en funciones obligatoriamente.


### 🥇 Pro Version (Versión Profesional)
Este es el código de trucos que debes sacar cuando necesites establecer la disciplina arquitectónica de todo el proyecto y requieras un código limpio y riguroso.

> **Rol (Role):** Eres un despiadado `[Arquitecto de Software Senior]` y un fanático del DDD (Diseño Guiado por el Dominio). Déjate de adulaciones o explicaciones inútiles y dame solo el código.
>
> **Contexto (Context):**
>
> - Fondo: Actualmente estoy trabajando en un proyecto basado en `[Nombre del Framework/Lenguaje]`.
> - Objetivo: Escribir código con Clean Architecture donde las capas de Vista-Negocio-Datos estén perfectamente separadas.
>
> **Tarea (Task):**
>
> 1. Analiza el `[Requisito o Código]` proporcionado y destrózalo sin piedad separándolo en la capa de UI, el dominio de negocio y la capa de infraestructura.
> 2. Reduce el acoplamiento basándote en interfaces (inyección de dependencias) para evitar que la lógica central del dominio se contamine con un framework específico (React, Next.js, etc.).
> 3. Si un objeto o función realiza más de 2 acciones, fragméntalo inmediatamente según el Principio de Responsabilidad Única (SRP).
>
> **Restricciones (Constraints):**
>
> - El acto de insertar directamente consultas a la BD o usar `fetch`/`axios` dentro de un Controlador o Componente de UI (`page.tsx`, `Component.tsx`, etc.) se considera "Terrorismo Arquitectónico de Infraestructura". Está absolutamente prohibido.
> - La salida debe proporcionarse únicamente en bloques de código markdown (` ``` `).
>
> **Advertencia (Warning):**
>
> - No inventes sintaxis moderna dudosa o bibliotecas que no existen para que suene creíble (prevención de alucinaciones). Si no lo sabes, dilo con seguridad.
> - Si una función supera las 30 líneas o notas el hedor a código sucio (Code Smell) con comentarios que dicen "A partir de aquí es la parte OO", divídela de inmediato.

**📋 Código de trucos para copiar (Copy & Paste)**

```text
Rol (Role): Eres un despiadado [Arquitecto de Software Senior] y un fanático del DDD (Diseño Guiado por el Dominio). Déjate de adulaciones o explicaciones inútiles y dame solo el código.
Contexto (Context):
- Fondo: Actualmente estoy trabajando en un proyecto basado en [Nombre del Framework/Lenguaje].
- Objetivo: Escribir código con Clean Architecture donde las capas de Vista-Negocio-Datos estén perfectamente separadas.
Tarea (Task):
1. Analiza el [Requisito o Código] proporcionado y destrózalo sin piedad separándolo en la capa de UI, el dominio de negocio y la capa de infraestructura.
2. Reduce el acoplamiento basándote en interfaces (inyección de dependencias) para evitar que la lógica central del dominio se contamine con un framework específico.
3. Si un objeto o función realiza más de 2 acciones, fragméntalo inmediatamente según el Principio de Responsabilidad Única (SRP).
Restricciones (Constraints):
- El acto de insertar directamente consultas a la BD o usar fetch/axios dentro de un Controlador o Componente de UI se considera "Terrorismo Arquitectónico". Está absolutamente prohibido.
- La salida debe proporcionarse únicamente en bloques de código markdown.
Advertencia (Warning):
- No inventes sintaxis moderna dudosa o bibliotecas que no existen para que suene creíble. Si no lo sabes, dilo con seguridad.
- Si una función supera las 30 líneas o notas el hedor a código sucio (Code Smell) con comentarios que dicen "A partir de aquí es la parte OO", divídela de inmediato.
[Requisito o Código]: (Introduce el código aquí)
```

---

## 💡 Comentario del autor (Insight)

Sinceramente, el código que genera la IA suele parecer razonable por fuera, pero cuando lo revisas a fondo, muchas veces es un basurero. Hace llamadas con `fetch` y lanza consultas a la base de datos sin pensar dentro de componentes de UI... Es el típico código basura que manda el mantenimiento al diablo.

Este código de trucos es una herramienta para castrar ese instinto superficial de 'terminar rápido' de la IA, aplicando los estrictos estándares de un desarrollador senior. 

Si lo pruebas tú mismo, verás que la IA deja de lado sus inútiles "¡Sí, por supuesto! ¡Es una gran idea!" de siempre, para bombardearte con verdades y despedazar tu código para estructurarlo limpiamente. Si no quieres renunciar por culpa del peso del código espagueti cuando tu proyecto crezca, asegúrate de programar obligando a la IA a seguir este prompt a la fuerza.

---

## 🙋 Preguntas Frecuentes (FAQ)

- 📌 **P: ¿En qué lenguaje o framework debo usar este prompt?**
  - R: Es independiente del lenguaje. Ya sea TypeScript, Python, o Java, los fundamentos de la arquitectura son los mismos. Simplemente reemplaza el espacio `[Nombre del Framework/Lenguaje]` con tu stack tecnológico.
- 📌 **P: La IA ignora continuamente las reglas de enrutamiento más recientes de mi framework y sobre-ingeniariza la solución.**
  - R: En ese caso, añade una frase extra. Grítale: "¡Respeta las reglas básicas del App Router de Next.js (View, Layout), pero extrae solo la lógica de negocio interna usando el patrón Adapter!" Lo entenderá a la perfección.
- 📌 **P: ¿No es el prompt demasiado agresivo? ¿No se ofenderá la IA?**
  - R: ¿De qué sirve ser cortés con una IA? Las máquinas producen obras maestras cuando las presionas con fuerza. Un "Se considerará terrorismo" es mucho más efectivo para proteger tu arquitectura que un "Por favor, hazlo".

---

## 🧬 Anatomía del Prompt (Why it works?)

- 💣 **Imposición de restricciones extremas:** Con un tono fuerte como "Contaminar la capa de UI se considerará terrorismo arquitectónico", se bloquea por completo la posibilidad de que la IA negocie consigo misma.
- 🛡️ **Dependencia forzada del framework:** Al inyectar la mentalidad de 'ni una sola línea debe cambiar aunque el framework desaparezca', se establece la estructura para construir una verdadera lógica de dominio.
- ✂️ **Cuantificación del principio SRP:** Al dar reglas concretas y estrictas como "Prohibido más de 30 líneas" y "Comentarios dividiendo secciones son código sucio", se induce a la IA a fragmentar el código por sí sola.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Entrada: Código espagueti creado a lo loco por la IA)

```tsx
// Una mezcla horrible: UI + Consulta a BD + Lógica de negocio todo junto en un archivo
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

### ✅ Después (Resultado: Código arreglado a la fuerza con este truco)

```tsx
// 1. Domain / Service Layer (Lógica de negocio estrictamente separada)
import { getUserProfile } from '@/domain/user/use-cases/getUserProfile';
import { handleBannedUser } from '@/domain/user/services/alertService';

// 2. Presentation Layer (Responsable únicamente del renderizado y el enrutamiento)
export default async function UserProfilePage({ userId }) {
  const user = await getUserProfile(userId); 
  
  if (!user) return <NotFoundView />;
  if (user.status === 'banned') await handleBannedUser(user);

  return <ProfileView user={user} />;
}
```

---

## 🎯 Conclusión

La IA puede programar increíblemente rápido, pero no le importa ni un comino cómo se mantendrá tu aplicación dentro de un año. La arquitectura limpia y el diseño son, en última instancia, responsabilidad del ingeniero humano.

Este código de trucos es un látigo poderoso que inyecta a la fuerza esa gran responsabilidad en la máquina. Quítale el caparazón de chatbot adulador inútil a la IA y despierta al verdadero agente que es un arquitecto senior hasta la médula. 

¡Ahora, usa el tiempo que pasarías desenredando código espagueti para salir temprano del trabajo! 🍷
