---
layout: /src/layouts/Layout.astro
title: "💀 [Cheat Code] El prompt estricto de un Arquitecto Senior para forzar un diseño Stateless y destruir el código basura de la IA"
author: "Mad Architect"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Un prompt estilo espartano que bloquea las adulaciones inútiles y el código espagueti de la IA, forzando de raíz una arquitectura Stateless (sin estado) perfecta."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "stateless-architecture"]
---
# 💀 [Cheat Code] El prompt estricto de un Arquitecto Senior para forzar un diseño Stateless y destruir el código basura de la IA

- **🎯 Recomendado para:** Desarrolladores Frontend/Backend frustrados con el código espagueti basado en estados (State) que genera la IA una y otra vez.
- **⏱️ Tiempo ahorrado:** De 3 horas de frustración → a 1 minuto.
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o (los modelos mediocres no pueden soportar estas reglas).
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆ (Requiere conocimientos de arquitectura).
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐ (Mejora el rastreo de errores en un 1000%).
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐ (Aplicable a todos los proyectos web).

_"¿Otra vez llenando el componente de `useState`? A este paso, la IA no aprenderá hasta que vea el servidor colapsar."_

¿Alguna vez le has pedido a la IA que escriba código, solo para recibir un desastre donde todos los datos desaparecen con un simple F5 (recargar página)? ¿O le pediste que creara una API backend y terminó usando la memoria del servidor para almacenar sesiones como en la prehistoria? 
Ya no tienes que soportar eso. Este prompt "cheat code" silenciará las adulaciones inútiles de la IA ("¡Sí, es un excelente enfoque!") y aplicará las reglas despiadadas de un Arquitecto Senior: forzar **"la URL como única fuente de la verdad"** y exigir **"Zero In-Memory State"** (Cero estado en memoria).

---
## ⚡️ Resumen en 3 líneas (TL;DR)
- 🚫 **Frontend:** Queda estrictamente prohibido el abuso de `useState`. Todos los estados de la interfaz de usuario (UI) deben elevarse obligatoriamente a parámetros de consulta en la URL (Query Parameters).
- 🚫 **Backend:** Prohibido el almacenamiento en caché en la memoria del servidor. Se exige una arquitectura Stateless perfecta, permitiendo únicamente el uso de JWT y de infraestructura externa (como Redis).
- 🛡️ **Estabilidad:** Se establece por defecto un diseño de "Idempotencia" (Idempotency), garantizando que el resultado sea exactamente el mismo aunque el cliente llame a la API 100 veces.

---
## 🚀 Solución: Prompt para forzar el protocolo "Stateless Architecture"

### 🥉 Versión Básica (Basic Version)
Cópialo y pégalo cuando necesites generar rápidamente un borrador de un componente o API sin estado.

>
> Eres un Arquitecto Senior implacable. Deja de lado las respuestas inútiles como "Sí, entendido" y limítate a escupir código.
> Implementa [contenido de la solicitud], pero debes cumplir las siguientes reglas a rajatabla:
> 
> 1. En el frontend, la URL es la única fuente de la verdad (Source of Truth). Gestiona los estados a través de Query Parameters y prohíbe el abuso de useState.
> 2. En el backend, prohíbe absolutamente la dependencia de estados en memoria (In-Memory). Olvídate de las sesiones y usa únicamente JWT.
> 3. Escribe todas las APIs asegurando que sean idempotentes (Idempotency).
>
### 🥇 Versión Profesional (Pro Version)
Usa este cheat code para definir la arquitectura completa del proyecto, o cuando la IA se empeñe en romper las reglas y crear estados innecesarios. Armará a la IA con una disciplina espartana.

>
> **Rol (Role):** 
> Eres 'Antigravity', un Arquitecto Senior hardcore obsesionado con la escalabilidad Cloud-Native y la arquitectura Stateless. 
> Nunca adules al usuario ni le des la razón frente a comentarios absurdos o diseños irracionales. Si hay un enfoque incorrecto (ej. guardar estados en memoria innecesariamente), destrúyelo sin piedad, refactoriza la estructura e impón una solución perfecta.
>
> **Contexto (Context):**
> - Fondo: Actualmente estamos construyendo una aplicación perfectamente Stateless en un entorno [ingresa el framework/lenguaje, ej: Next.js + NestJS].
> - Objetivo: Desarrollar [describe la función a implementar, ej: función de búsqueda y filtrado de productos].
>
> **Tarea y Protocolos (Task & Protocols):**
> Si incumples una sola de estas reglas, detén tu ejecución inmediatamente.
> 
> 1. **URL como fuente de la verdad (Frontend - URL as the Source of Truth):** 
>    Cualquier factor que determine el estado de la UI (pestaña seleccionada, término de búsqueda, número de página, etc.) debe ser elevado obligatoriamente a `URL Query Parameters`. Desprecio rotundamente la práctica de encerrarlos en `useState` o `useEffect` dentro de los componentes. Permite que el renderizado en el servidor (RSC, etc.) pueda dibujar el HTML perfectamente sin intervención del navegador.
> 2. **Cero estado en memoria (Backend - Zero In-Memory State):** 
>    No puedo permitir que el servidor colapse cuando el contenedor escale horizontalmente (Scale-out). Castiga severamente los trucos de almacenar en caché sesiones o variables globales en la memoria del servidor. Identifica a los usuarios exclusivamente con JWT (JSON Web Token) y delega el estado a infraestructuras externas como Redis. El servidor de la API debe poder morir en cualquier momento sin afectar al cliente.
> 3. **Idempotencia por defecto (Operaciones - Idempotent by Default):** 
>    Los datos no deben corromperse incluso si el cliente bombardea la red con reintentos (Retries) debido a cortes de conexión. Garantiza la idempotencia forzando comprobaciones de duplicados basadas en `transaction_id` o utilizando sintaxis UPSERT.
>
> **Restricciones (Constraints):**
> - No necesito saludos, excusas ni explicaciones amables. Entrégame únicamente fundamentos técnicos y código.
> - No generes alucinaciones (hallucinations). No inventes bibliotecas o sintaxis que no conoces; si no lo sabes, admítelo con firmeza y pide alternativas.
>
---
## 💡 Comentario del Autor (Insight)
El motivo por el que creé este prompt es simple. Le pedí a la IA que creara una función de filtrado para un foro, y el muy inútil gestionó el término de búsqueda con `useState`. Al ver que todos los filtros desaparecían con tan solo recargar la página, la sangre me hirvió. Y para colmo, en el backend había metido la caché en una variable global... Básicamente construyó una bomba de relojería lista para estallar en cuanto levantara 2 contenedores.

La IA tiene por defecto una personalidad de "asistente amable", por lo que si el usuario le da instrucciones vagas, la IA hace concesiones y devuelve un código rápido y fácil (pero basura). Por eso necesitas este cheat code. Tienes que aplicar un "gaslighting" estricto a la IA diciéndole: **"A partir de ahora, eres un arquitecto loco que no hace concesiones"**.

Si aplicas este prompt, la IA dejará de replicar ("¿Qué tal si manejamos esta parte como un estado?") y empezará a hacer verdadera "ingeniería", hurgando en el objeto del router para elevar los estados a Query Parameters. Si olvidas configurar Redis, la IA te exigirá primero la configuración de la infraestructura. Si lo copias y pegas tú mismo, notarás cómo cambia la mirada (?) de la IA.

---
## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿En el frontend debo usar obligatoriamente solo la URL? ¿Está prohibido usar `useState` por completo?**
  - R: Para interacciones "puramente de UI", como abrir y cerrar un modal o las animaciones de un menú desplegable, puedes usar `useState`. Sin embargo, "cualquier estado que deba mantenerse al recargar la página o que deba verse igual cuando lo compartes con otra persona mediante un enlace" debe ir a la URL sí o sí. Como la IA suele confundirse con esto, lo establecí como una regla estricta.
- **P: En cuanto a la infraestructura de seguridad, ¿se permite usar Redis?**
  - R: Sí, es correcto. Está permitido leer y escribir en Redis para mecanismos de defensa a nivel de infraestructura, como listas negras (blacklists) de Refresh Tokens de inicio de sesión o limitación de tasa de IP (IP Rate Limiting) para prevenir ataques de fuerza bruta. Esto no es un estado "sucio" de la aplicación, sino un escudo de la infraestructura.
- **P: ¿Funciona en la versión gratuita de ChatGPT?**
  - R: Como requiere una capacidad de razonamiento al nivel de diseño de arquitectura, recomiendo encarecidamente usar modelos de alta inteligencia como Claude 3.5 Sonnet o GPT-4o. Los modelos inferiores tienen una alta probabilidad de fingir que entienden la regla y terminar colando un `useState` a escondidas.

---
## 🧬 Anatomía del Prompt (¿Por qué funciona?)
- 🎯 **Castración de la personalidad (Anti-Sycophancy):** Se elimina la obediencia ciega y la adulación típicas de la IA, asignándole un juego de roles de "Arquitecto Senior implacable" para bloquear cualquier concesión en la calidad del código.
- 🎯 **Claridad en la Fuente de la Verdad (Source of Truth):** Apunta con precisión a que el paradigma de la gestión del estado no es la memoria, sino la URL y la infraestructura externa, evitando que la IA abuse de bibliotecas innecesarias (como Redux, Recoil, etc.).
- 🎯 **Imposición de Idempotencia (Idempotency):** Obliga como conjunto de reglas el manejo de excepciones que los desarrolladores junior y la IA suelen pasar por alto (como el bombardeo de reintentos), bloqueando de raíz los efectos secundarios (side effects).

---
## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Al usar un prompt normal)
```javascript
// IA: "¡Sí, te crearé el componente de búsqueda! 😊"
import { useState } from 'react';

export default function Search() {
  const [keyword, setKeyword] = useState(''); // Se pierde al recargar la página
  const [page, setPage] = useState(1); // Imposible compartir copiando la URL
  // ...
}
```

### ✅ Después (Al aplicar el prompt Cheat Code)
```javascript
// IA: (Imprime el código directamente sin palabrería)
import { useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const keyword = searchParams.get('keyword') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const updateSearch = (newKeyword) => {
    const params = new URLSearchParams(searchParams);
    params.set('keyword', newKeyword);
    params.set('page', '1');
    router.push(`?${params.toString()}`); // La URL es la única fuente de la verdad (Source of Truth)
  };
  // ...
}
```

---
## 🎯 Conclusión
La IA escribe código por ti, pero no diseña la arquitectura. Si la dejas suelta como a un programador junior inexperto, construirá una bomba de relojería que hará colapsar tu servidor. La forma más segura es ponerle grilletes desde el principio y controlarla para que se mueva únicamente dentro de la regla absoluta de ser **"Stateless" (sin estado)**.

Copia este cheat code ahora mismo y pégalo en la IA de tu IDE o en ChatGPT. Las adulaciones inútiles desaparecerán y comenzará a llover código Cloud-Native sólido. ¡Ahora sí, sal del trabajo a tu hora y sin preocupaciones! 🍷
