---
layout: /src/layouts/Layout.astro
title: "🔥 Prompts de revisión de código y refactorización a nivel Senior para desarrolladores Junior"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: "Desarrollo y Programación"
description: "¿Errores desconocidos y código espagueti? Descubre prompts prácticos para obtener revisiones de código y refactorizaciones limpias de un mentor de IA en solo 1 minuto."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "code-review"]
---
# 📝 Guía perfecta de revisión de código y refactorización sin necesidad de un mentor Senior
<!-- ⚠️ [CRITICAL RULE]   (10   ) ⚠️
    (`index.ko.md`)  ,
****   9  (`index.[lang].md`)   .
 (9): en, de, es, fr, it, ja, pt, ru, zh
 10(+9 )       . -->
- **🎯 Recomendado para:** Desarrolladores Junior, ingenieros de Backend/Frontend con 1 a 3 años de experiencia, autodidactas.
- **⏱️ Tiempo estimado:** De 2 horas de frustración → a 1 minuto.
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet (el rey de las revisiones de código), GPT-4o
- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_¿Alguna vez se acerca la hora de salida, tienes una montaña de registros de errores y sientes que tu código es un desastre pero no sabes por dónde empezar a arreglarlo?_

Desde pequeños errores por los que te da vergüenza preguntar a tu líder, hasta ese código espagueti que "funciona, pero te deja con dudas". Ahora puedes utilizar la IA como tu desarrollador Senior personal. Más allá de simplemente encontrar errores, puedes recibir propuestas prácticas de refactorización basadas en los principios del código limpio.

---
## ⚡️ Resumen en 3 líneas (TL;DR)
1. No le pidas a la IA simplemente que "lo arregle"; asígnale el rol de "Revisor de código Senior".
2. Proporciona los registros de errores y la intención de tu código actual como un contexto claro.
3. No copies y pegues a ciegas; aprende las razones del "por qué se debe cambiar" que te ofrece la IA.

---
## 🚀 Solución: "El prompt del desarrollador Senior implacable"

### 🥉 Versión Básica
Úsala cuando quieras identificar rápidamente la causa de un error.

> **Rol:** Eres un desarrollador Senior de `[Frontend/Backend]` con 10 años de experiencia.
> **Tarea:** Encuentra la causa del `[contenido del error]` que ocurre en el siguiente código y proporciona el código para solucionarlo.
> **Código:** `[Pega tu código aquí]`

### 🥇 Versión Pro (Nivel Experto)
Úsala cuando necesites mejoras en la arquitectura y una refactorización de código limpio, más allá de una simple corrección de errores.

> **Rol:**
> Eres un Staff Engineer implacable pero sumamente talentoso con 15 años de experiencia, ex-FAANG. Eres de los que no hacen concesiones en absoluto cuando se trata de legibilidad, rendimiento y mantenibilidad.
> 
> **Contexto:**
> - Entorno: `[Introduce tu stack tecnológico: React / Node.js / Python, etc.]`
> - Propósito: `[Explica la lógica de negocio que este código debe ejecutar]`
> - Problema actual: `[Describe el problema, como el registro completo de errores o una caída de rendimiento]`
> 
> **Tarea:**
> 1. Analiza el código proporcionado y señala los problemas fundamentales (causas del error, antipatrones, etc.).
> 2. Refactoriza el código basándote en los principios del código limpio (SOLID, DRY, etc.).
> 3. Proporciona el código completo modificado.
> 4. Explica en 3 puntos **por qué** realizaste estas modificaciones, utilizando un formato de comentarios de revisión de código.
> 
> **Restricciones:**
> - Omite introducciones o saludos innecesarios y comienza la revisión de inmediato.
> - Utiliza la sintaxis más reciente (ES6+, etc.) y los patrones idiomáticos del lenguaje correspondiente.
> - Asegúrate de tener en cuenta el manejo de errores y los casos extremos (edge cases).
> - Presenta tu respuesta en formato de lista.
> 
> **Advertencia:**
> - No inventes bibliotecas o métodos que no existen. (Cero alucinaciones).
> 
> **Código:**
> `[Pega aquí el código que deseas que sea revisado]`

---
## 💡 Comentario del autor (Insight)
El núcleo de este prompt es la persona de un "Staff Engineer implacable" y la exigencia de "pedir las razones de por qué se modificó". 

El error más común que cometen los Juniors en la industria es copiar y pegar el código generado por la IA sin entender la causa raíz. Puede que el error se solucione en el momento, pero tus habilidades no mejorarán ni un milímetro. 

Este prompt no le dice a la IA "arregla el código", sino "enséñame". Deja que te señale los antipatrones y acostumbra tus ojos a los patrones idiomáticos. Especialmente, si escribes en la sección de `Contexto` cuál era tu intención al escribir este código (la lógica de negocio), la IA irá más allá de atrapar errores de sintaxis y detectará fallas estructurales. No pongas excusas; deja que tu mentor de IA te destroce el ego y aprende de ello. Esa es la forma más rápida de crecer.

---
## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿Es seguro subir el código interno de la empresa tal cual?**
  - R: ¡Absolutamente no! Debes enmascarar las claves API, las IP internas y la lógica de negocio sensible con datos ficticios o generalizar los nombres de las variables antes de introducirlos en el prompt. La seguridad no es negociable.
- **P: ¿A veces el código que da la IA no se ejecuta?**
  - R: Eso es un caso de alucinación (Hallucination). Cuando esto suceda, no entres en pánico; simplemente copia el registro del error que aparece y vuelve a preguntar. Si le dices "Me está dando este error con el código que me diste", la IA te devolverá una versión corregida.
- **P: ¿Qué modelo de IA es mejor para la revisión de código?**
  - R: A partir de 2026, para el ámbito de la programación, los modelos Claude 3.5 Sonnet o superiores muestran una capacidad abrumadora para comprender el contexto y refactorizar. ChatGPT Plus (GPT-4o) también es una excelente opción.

---
## 🧬 Anatomía del prompt (¿Por qué funciona?)
1. **Asignación de una persona implacable:** La IA general tiende a pasar por alto defectos estructurales críticos y solo hace que las cosas funcionen para no herir los sentimientos del usuario. Al asignarle el papel de un Staff Engineer estricto, forzamos una revisión sin concesiones.
2. **Contexto explícito:** Las computadoras leen código, pero los Seniors leen la "intención". Al explicar qué intenta hacer el código, la IA puede sugerir un enfoque mejor (una estructura de datos diferente, un patrón de diseño más adecuado).
3. **Exigencia del porqué (Why):** Es una herramienta clave para el crecimiento. Evita que la IA simplemente te arroje el código final y la obliga a transferirte conocimiento.

---
## 📊 Demostración: Antes y Después
### ❌ Antes (Entrada)
```javascript
// Código para obtener y procesar datos de usuario (ejemplo de espagueti)
async function getU(id) {
  let res = await fetch('/api/user/' + id);
  let d = await res.json();
  if(d) {
    if(d.status === 'active') {
      let r = await fetch('/api/roles/' + d.roleId);
      let rd = await r.json();
      return { n: d.name, r: rd.name };
    } else {
      return null;
    }
  }
}
```
### ✅ Después (Resultado)
```javascript
// Resultado de la refactorización por parte del Ingeniero Senior de IA
async function getActiveUserRoleSummary(userId) {
  try {
    const userResponse = await fetch(`/api/user/${userId}`);
    if (!userResponse.ok) throw new Error('Failed to fetch user');
    
    const user = await userResponse.json();
    
    // Aplicación del patrón de retorno anticipado (Early Return) para eliminar los if anidados
    if (!user || user.status !== 'active') {
      return null; 
    }
    const roleResponse = await fetch(`/api/roles/${user.roleId}`);
    if (!roleResponse.ok) throw new Error('Failed to fetch role');
    
    const role = await roleResponse.json();
    
    // Uso de nombres de variables claros (n, r -> name, roleName)
    return { 
      name: user.name, 
      roleName: role.name 
    };
  } catch (error) {
    console.error(`[getActiveUserRoleSummary] Error for userId ${userId}:`, error);
    throw error; // Prevención de ocultación de errores
  }
}
```
*(Comentario de la IA: Desenredé las declaraciones condicionales anidadas usando Early Return para mejorar la legibilidad, cambié los nombres de las variables para que sean más intuitivos y agregué el manejo de errores que faltaba.)*

---
## 🎯 Conclusión
Ya no te pases la noche luchando con un código que no funciona. 
Con un solo prompt que asigne el rol y el contexto correctos, tu código puede volverse mucho más elegante.
¡Ahora haz commit de tu código limpio y sal del trabajo a tiempo! 🍷
