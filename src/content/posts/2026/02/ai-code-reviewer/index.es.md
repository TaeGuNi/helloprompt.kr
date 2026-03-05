---
layout: /src/layouts/Layout.astro
title: " \"Revisor de Código de IA: Convierte tu código basura al estilo Silicon Valley (Code Review)\""
author: "Jay"
date: "2026-02-08"
updatedDate: "2026-02-08"
category: "개발/코딩"
description: " \"No importa si no tienes un desarrollador senior. Un prompt para confiar la revisión de código a la IA y renacer con un código limpio.\""
tags: ["코드리뷰", "개발자", "클린코드", "리팩토링", "ChatGPT"]
image: "/images/hooks/ai-code-reviewer.png"
---

# 💻 Revisor de Código de IA: Convierte tu código basura al estilo Silicon Valley

- **🎯 Recomendado para:** Desarrolladores junior que luchan sin un mentor, encargados de mantenimiento que sufren con código espagueti heredado
- **⏱️ Tiempo requerido:** 30 minutos → reducido a 1 minuto
- **🤖 Modelo recomendado:** Claude 3.5 Sonnet (El mejor en entender el contexto del código y refactorizar)

- ⭐ **Dificultad:** ⭐☆☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"Funciona, pero... ¿las variables se llaman `a`, `b`, `temp`...? Es un código que hasta mi yo de dentro de 3 meses insultaría, ¿vas a hacer commit de esto así?"_

![AI Code Reviewer](/images/hooks/ai-code-reviewer.png)



En mi primer año trabajando como desarrollador, por fin me asignaron el desarrollo de mi primera función independiente. Pasé noches en vela, buscando en Google y rebuscando en Stack Overflow para crear un código que, de alguna manera, funcionara. Tras confirmar en el servidor de pruebas que la función operaba correctamente, envié el PR (Pull Request) con un sentimiento de orgullo. Sin embargo, a la mañana siguiente, me sentí desesperado al ver las docenas de comentarios dejados en mi PR. "Los nombres de las variables no son intuitivos", "La complejidad temporal en esta parte es O(N^2), ¿hay alguna forma de mejorarla?", "Falta el manejo de excepciones, es una lógica crítica que podría hacer caer el servidor". Los comentarios de los desarrolladores senior fueron un golpe duro, y me di cuenta de que mi código era, literalmente, un completo espagueti. Pero los senior también estaban ocupados con su propio trabajo, por lo que no podían reescribir amablemente cada pequeño detalle de mi código ni darme clases particulares.

Si las cosas seguían así, sentía que me etiquetarían como "un junior con una calidad de código por los suelos". Mis PRs seguían siendo rechazados, y a medida que se acercaba la fecha límite, ni siquiera sabía en qué dirección debía corregirlos. Por otro lado, al intentar resolverlo todo por mi cuenta, caí en un círculo vicioso de dar palos de ciego todo el día. Tampoco me atrevía a preguntarle a mi ocupado mentor "¿Estaría bien si lo corrijo así?" todo el tiempo, así que los días pasaban mientras sufría en silencio sin siquiera poder preguntar. Mi estrés llegó al límite e incluso empecé a tener dudas fundamentales sobre si realmente era la persona adecuada para la profesión de desarrollador. Si continuaba con esta vida de desarrollador, sacrificando mis fines de semana y quedándome en la oficina copiando y pegando el código de otros para apenas sobrevivir, era obvio que acabaría con el síndrome del trabajador quemado (burnout). La profunda sensación de aislamiento, de no tener a nadie que marcara y revisara mi código de manera amable pero aguda, me estaba consumiendo.

Fue entonces cuando, por casualidad, vi un vídeo en YouTube sobre la refactorización de código utilizando IA. No se trataba de un simple "corrige este código", sino de un prompt mágico que le otorgaba a la IA la personalidad de un "ingeniero principal de Silicon Valley" muy estricto para que diseccionara mi código sin piedad. Como si fuera una prueba, le lancé a la IA conversacional mi desordenada lógica junto con el prompt. El resultado fue verdaderamente impactante. En solo 5 segundos, la IA renombró elegantemente las variables de mi código para que coincidieran con la lógica de negocio, optimizó un bucle doble innecesario con la función `reduce`, y lo reconstruyó añadiendo perfectamente la lógica de manejo de excepciones que yo ni siquiera había considerado. Incluso añadió amablemente comentarios explicando las razones claras por las que había realizado dichas modificaciones. Fue una experiencia perfecta, como si un desarrollador senior genial con 10 años de experiencia estuviera sentado a mi lado toda la noche actuando como mi mentor.

Desde que implementé este prompt, mi vida como desarrollador ha cambiado por completo. Ya no tengo miedo de enviar un PR. Antes de hacer commit, siempre le paso mi código a este desarrollador senior de IA para una primera revisión, y aprendo por mí mismo la estructura de un código limpio al ver el código refactorizado. Lo sorprendente es que, al observar continuamente las lógicas elegantes escritas por la IA, mi propio estilo de programación se volvió gradualmente más refinado. Ahora, incluso mis mentores, al ver mis PR, me felicitan diciendo: "Tu calidad de código ha mejorado enormemente últimamente. ¿Estás yendo a alguna academia?". Más allá de simplemente arreglar errores, este es un prompt mágico que transforma el código espagueti en código limpio al estilo de Silicon Valley. Espero que hoy ustedes también puedan contratar a su propio mentor personal de forma gratuita y conseguir matar dos pájaros de un tiro: salir del trabajo a tiempo y disfrutar de la programación.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. No te preocupes por tu ocupado mentor y pídele a la IA una revisión de código inmediata.
2. Va más allá de la simple detección de errores, refactorizando hacia un código limpio con legibilidad y eficiencia.
3. Otórgale la personalidad de un ingeniero principal de Google para asegurar una calidad de código al nivel de Silicon Valley.

---

## 🚀 Solución: "Code Reviewer Prompt"

### 🥉 Basic Version (Versión Básica: Cazador de Errores Rápido)

Úsala cuando quieras detectar errores rápidamente y verificar solo posibles fallos.

> **Rol:** Eres un desarrollador senior con una visión aguda.
> **Solicitud:** Encuentra posibles errores lógicos o bugs que puedan causar problemas en el código a continuación. Si es perfecto, di "LGTM (Looks Good To Me)".
>
> **Código:**
>
>
> [Pega tu código aquí]
>
### 🥇 Pro Version (Versión Experta: Refactorización de Código Limpio de Silicon Valley)

Úsala cuando quieras reescribir por completo el alma del código, desde los nombres de las variables hasta la arquitectura.

> **Rol (Role):** Eres un ingeniero de software principal de Google con 10 años de experiencia y un ferviente creyente del 'Clean Code'.
>
> **Contexto (Context):**
>
> - Fondo: Escribiendo/manteniendo la lógica central de un proyecto interno.
> - Objetivo: Reducir la deuda técnica y mejorarlo hacia un código intuitivo y robusto que sea fácil de entender para cualquier miembro del equipo.
>
> **Tarea (Task):**
> Analiza el `[Código]` proporcionado a continuación, revísalo y refactorízalo estrictamente según los siguientes 4 criterios clave.
>
> 1. **Legibilidad (Readability):** Cambia de forma intuitiva los nombres de variables y funciones para que revelen claramente su intención. (Ej: `d` -> `elapsedTimeInDays`)
> 2. **Eficiencia (Efficiency):** Propón mejores algoritmos, métodos de arrays, etc., que puedan reducir bucles innecesarios o mejorar la complejidad temporal (O).
> 3. **Seguridad (Safety):** Protege meticulosamente los casos límite (Edge Cases) donde se hayan omitido referencias Null, errores de tipo o manejo de excepciones (Try-Catch).
> 4. **Comentarios (Comments):** En las partes donde la lógica sea compleja, añade comentarios en formato JSDoc/Docstring explicando el 'por qué (Why)' se ha escrito así, y no el 'qué (What)'.
>
> **Formato de Salida (Format):**
>
> - **Resumen de la revisión:** Los 3 problemas críticos principales del código existente (Viñetas / Bullet points)
> - **Código refactorizado:** El código completo perfectamente mejorado (Bloque de código)
> - **Motivo clave del cambio:** Resume en un máximo de 2 líneas por qué esta modificación resulta en una mejor arquitectura.
>
> **Restricciones (Constraints):**
>
> - Utiliza la sintaxis moderna (Modern Syntax) del lenguaje.
> - No inventes bibliotecas ni funciones integradas de las que no estés seguro. (Prevención de alucinaciones)
>
> **Entrada (Input Code):**
>
>
> [Pega todo tu código aquí]
>
---

## 💡 Comentarios del Autor (Insight)

La lección más dolorosa que he aprendido tras realizar y recibir cientos de revisiones de código en el entorno profesional es que existe una distancia equivalente al tamaño del universo entre un simple "código que funciona" y un "código fácil de leer (Clean Code)". Si le das una orden superficial como "corrige este código" o "encuentra los errores", la IA no captará correctamente tus intenciones y se limitará a una representación sintáctica superficial, como cambiar el nombre de una variable o añadir un punto y coma. Esto no ayuda en absoluto a mejorar la arquitectura subyacente y, por el contrario, puede dar lugar a un resultado terrible en el que el código se deforme monstruosamente.

La razón clave por la que nuestro prompt de la versión Pro ofrece un rendimiento tan abrumador radica precisamente en la "imposición de criterios de evaluación multidimensionales y despiadados". No le estamos pidiendo simplemente a la IA que "haga correcciones". Le hemos forzado a adoptar la "personalidad" de un ingeniero principal de Google con 10 años de experiencia, perfeccionista, conservador y que busca el límite de la legibilidad y el rendimiento. Además, al imponer cuatro reglas inquebrantables: Legibilidad (Readability), Eficiencia (Efficiency), Seguridad (Safety) y Comentarios (Comments), hemos evitado que tome atajos.

De hecho, en la empresa en la que trabajaba, tuve que analizar un espantoso código espagueti de integración de pagos heredado, de unas 1.500 líneas, dejado por mi predecesor tras renunciar. Los nombres de las variables estaban llenos de abreviaturas incomprensibles como `a1`, `b2` y `chk_val`, y era un código de la destrucción en el que una sola función agrupaba consultas a la base de datos, cálculos de lógica de negocio, llamadas a APIs externas e incluso la devolución de mensajes de error de la interfaz de usuario. Me habría llevado una semana entera entender este código línea por línea con ojos humanos.

Sin embargo, en esta situación desalentadora, este mismo prompt Pro se convirtió en mi salvavidas. Dividí la lógica de estas 1.500 líneas en unidades de función y se las envié al ingeniero senior de IA. En tan solo 10 minutos, la IA transformó un bucle con la peor complejidad temporal de O(N^3) en un algoritmo optimizado de O(N) utilizando un mapa hash (Hash Map), y señaló exactamente tres casos límite (edge cases) críticos donde se había omitido el manejo de errores, lo que podría haber bloqueado los pagos. Es más, logró separar perfectamente cada módulo en funciones elegantes que cumplían estrictamente el principio de responsabilidad única (SRP).

El momento más conmovedor no fue que simplemente entregara el código refactorizado y terminara, sino que en la parte inferior especificó los motivos concretos de la mejora arquitectónica: "Se estaba produciendo un cuello de botella en el rendimiento en esta parte, y al utilizar Set de JavaScript, la complejidad temporal se ha reducido drásticamente". A través de esto, pude subir de nivel y convertirme en un verdadero "ingeniero" capaz de comprender y absorber las decisiones de diseño tomadas por la IA, en lugar de ser un simple "codificador" que copia y pega código hecho por otros. No reduzcas este prompt a un simple corrector de errores tipográficos. Utilízalo como un maestro de entrenamiento despiadado que destruya tu código y reconstruya el esqueleto con los patrones de diseño correctos.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Es seguro subir el código interno de la empresa tal cual al modelo de IA?**
  - R: **Debes tener mucho cuidado.** Asegúrate de enmascarar (Masking) las claves de la API, las IP internas y la lógica de negocio sensible (esquemas de base de datos, etc.) o reemplázalos con `[PRIVATE_DATA]` antes de ejecutar el prompt. En un entorno empresarial, se recomienda encarecidamente utilizar planes corporativos (Team/Enterprise) o modelos de API que no se utilicen para el entrenamiento de datos.

- **P: ¿Puedo copiar y pegar el código generado por la IA y desplegarlo tal cual?**
  - R: No. La IA puede sufrir a veces 'alucinaciones', llamando a métodos de bibliotecas que no existen, o malinterpretando el contexto de requisitos de negocio complejos. El resultado de la IA es solo un borrador o una sugerencia poderosa; la validación mediante revisión de código y pruebas finales es responsabilidad exclusiva del desarrollador.

- **P: ¿Qué pasa si el código es tan largo que la IA no puede analizarlo bien de una vez?**
  - R: Pregunta dividiendo el código en funciones o clases. Si reduces el alcance diciendo: "Céntrate únicamente en revisar el método `authenticate` de esta clase `UserService`", la IA no perderá el contexto y te proporcionará una revisión profunda de mucha mayor calidad.

---

## 🧬 Anatomía del Prompt (Why it works?)

1. **Inyección de personalidad de primer nivel (Role Prompting):** El rol de 'ingeniero principal con 10 años de experiencia' y 'creyente del código limpio' orienta fuertemente los pesos internos de la IA hacia las mejores prácticas optimizadas (patrones de diseño, principios de Clean Code).
2. **Criterios de evaluación multidimensionales (Multi-dimensional Constraints):** Al obligar a analizar el código desde tres dimensiones: 'legibilidad', 'eficiencia' y 'seguridad', se bloquea por completo la generación de código descuidado que simplemente "funciona".
3. **Estructuración del formato de salida (Formatted Output):** Al obligar a dividir claramente el resumen del problema, el código mejorado y las razones del cambio, se ha maximizado la experiencia de usuario (UX) para comprender la revisión de un vistazo.

---

## 📊 Demostración: Antes y Después (Before & After)

La diferencia entre un comando simple y un prompt estructurado se revela claramente en la calidad del código resultante. Todo se mejora perfectamente, desde los nombres de las variables hasta la lógica defensiva.

### ❌ Antes (Código espagueti)

```javascript
function proc(d) {
  let res = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i].s === 1) {
      res.push(d[i]);
    }
  }
  return res;
}
```

### ✅ Después (Código limpio)

```javascript
/**
 * Returns a filtered list of active users.
 * @param {Array<Object>} users - The array of user data objects.
 * @param {number} users[].status - The user status code (1: Active).
 * @returns {Array<Object>} A new array containing only active users.
 */
const getActiveUsers = (users) => {
  // Handle edge case: invalid input
  if (!Array.isArray(users)) return [];

  const ACTIVE_STATUS_CODE = 1;

  // Maintains O(N) time complexity and maximizes readability by using a declarative approach (filter).
  return users.filter((user) => user?.status === ACTIVE_STATUS_CODE);
};
```

---

## 🎯 Conclusión

Un buen código es como una prosa bien escrita. Debe ser fácil de leer para cualquiera y revelar la intención del autor de manera transparente.
El revisor de IA está despierto las 24 horas y nunca suspirará, sin importar que le hagas la misma pregunta básica 100 veces.

Lanza ahora mismo ese código heredado maloliente que duerme en tu IDE.
¡Hasta el día en que recibas un verdadero **"LGTM (Looks Good To Me)"**! 🍷
