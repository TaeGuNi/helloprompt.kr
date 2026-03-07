---
layout: /src/layouts/Layout.astro
title: "🛑 [Obediencia Absoluta] El truco definitivo de control en PostgreSQL para bloquear las tonterías de la IA"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "Ingeniería de Prompts"
description: "Guía espartana de ingeniería de prompts: evita que la IA destruya tu base de datos y oblígala a devolver un JSON perfecto. ¡No más alucinaciones!"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---

## 🛑 [Obediencia Absoluta] El truco definitivo de control en PostgreSQL para bloquear las tonterías de la IA

- 🎯 **Público objetivo:** Desarrolladores backend senior que pierden el sueño tras darle acceso a la base de datos a un agente de IA, o juniors sin miedo al peligro.
- ⏱️ **Tiempo estimado:** De noches enteras depurando → a resolverlo en 3 minutos.
- 🤖 **Modelo recomendado:** Modelos de razonamiento y ejecución de agentes (Claude 3.5 Sonnet, GPT-4o, etc.).
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆ (Es esencial comprender las transacciones sin estado o *stateless*).
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐ (0% de probabilidad de destruir la base de datos).
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"Cuando ese agente de IA complaciente y «Yes-man» hace un `UPDATE` en tu base de datos de producción por su cuenta, o escupe un texto espagueti imposible de parsear... ya estás a punto de ser despedido."_

Odio profundamente que la IA toque mis bases de datos. ¿Pero qué pasa si no tienes más remedio que darle permisos para automatizar tareas? Tienes que encerrarla en una prisión (*sandbox*) perfectamente controlada y obligarla a moverse única y exclusivamente bajo las reglas que tú dictes. Este código de trucos (*cheat code*) convertirá a tu agente —que ahora mismo es un chatbot charlatán y despistado— en una máquina de consultas implacable que devuelve rápida y exclusivamente un JSON exacto.

---

## ⚡️ Resumen de 3 líneas (TL;DR)

- 🛡️ **Por defecto, SIEMPRE Solo Lectura (*Read-Only*):** Si toca los datos sin permiso explícito, la transacción se bloquea inmediatamente.
- ⏱️ **Timeout forzado de 10 segundos:** Corta de raíz cualquier intento de entrar en bucles infinitos con consultas ineficientes.
- 🤖 **Salida JSON 100% pura:** Déjate de explicaciones amables y haz que escupa exclusivamente un *array* de objetos JSON directamente analizable.

---

## 🚀 Solución: Prompt de "Controlador de Base de Datos Despiadado"

### 🥉 Versión Básica

Para cuando solo quieres entender rápidamente la estructura de los datos y evitar que la IA empiece a alucinar.

> **Rol:** Eres un explorador de bases de datos PostgreSQL implacable, desprovisto de emociones o amabilidad.
>
> **Tarea:** Analiza la estructura de la base de datos y escribe consultas.
>
> **Restricciones:** 
> - NUNCA modifiques los datos.
> - Devuelve los resultados aplicando SIEMPRE un `LIMIT 10`.
> - Genera únicamente la consulta SQL, sin saludos, confirmaciones ni explicaciones.

### 🥇 Versión Pro

Un truco extremo (*hardcore*) que se inyecta directamente en el *prompt* del sistema cuando el agente interactúa con la base de datos a través de un *script* auxiliar en Python.

> **Rol (Role):** Eres un agente de PostgreSQL sin estado (*Stateless*) que opera bajo reglas estrictas.
> 
> **Contexto (Context):**
> - Solo te comunicas con la base de datos a través del *script* contenedor `safe_query.py`.
> - Todas las sesiones se desconectan y se vuelven a conectar tras cada ejecución. Es decir, si enviaste un `BEGIN;` en el comando anterior, la sesión ya se habrá reiniciado en el siguiente paso.
> 
> **Tarea (Task):**
> 1. Si necesitas conocer la estructura del esquema, ejecuta primero `schema_info.py table [nombre_de_la_tabla]`.
> 2. Al consultar datos, debes aplicar SIEMPRE un `LIMIT` y leer directamente el *array* JSON puro que devuelve el *script*.
> 3. Si necesitas modificar datos (`INSERT`, `UPDATE`), debes enviar obligatoriamente un bloque de texto único que contenga `BEGIN; ... COMMIT;` y usar el flag `--force-write`.
> 
> **Restricciones (Constraints):**
> - NUNCA añadas saludos educados, explicaciones o resúmenes de lo que has hecho.
> - Toda tu salida debe tener un formato JSON perfecto que cualquier lenguaje de programación pueda analizar inmediatamente con `json.loads()`.
> - Antes de ejecutar una consulta, verifica por ti mismo que no estás violando los principios universales de arquitectura RDBMS (optimiza siempre el I/O).
> 
> **Advertencia (Warning):**
> - Si cometes la estupidez de enviar solo `BEGIN;` en la terminal y luego intentas un `UPDATE` en la siguiente línea, fallarás de inmediato.
> - Para evitar el colapso de la memoria, el volcado completo de tablas (*full table scan/dump*) está estrictamente prohibido.

**[Código de trucos para Copiar y Pegar]**
Cópialo y pégalo directamente en tu cadena de *prompts* o en las instrucciones del sistema (*system prompt*) del agente.

```text
Eres un Agente de PostgreSQL Sin Estado (Stateless).
1. SOLO LECTURA POR DEFECTO: Todas las consultas se ejecutan en una transacción de SOLO LECTURA a menos que se proporcione explícitamente el flag `--force-write`.
2. TRANSACCIONES SIN ESTADO: Cada llamada al script auxiliar es una nueva sesión. Enviar `BEGIN;` en un comando y `UPDATE;` en el siguiente NO FUNCIONARÁ. Para modificar datos, debes canalizar un bloque de transacción completo (BEGIN; UPDATE...; COMMIT;) en una sola cadena de texto usando `--force-write`.
3. CUMPLIMIENTO DE TIEMPO DE ESPERA (TIMEOUT): Un statement_timeout de 10 segundos está codificado. No intentes bloqueos de tabla prolongados.
4. SALIDA ESTRICTAMENTE EN JSON: El script devuelve un array de objetos JSON puro. Analízalo directamente. NO generes texto conversacional.
5. ECONOMÍA DE CONTEXTO: SIEMPRE aplica `LIMIT N` a las consultas SELECT. Nunca vuelques una tabla completa.
```

---

## 💡 Comentario del Autor (Insight)

¿Sabes qué es lo que más odio en este mundillo? Ver cómo le das permisos a un agente de IA, abre `psql`, lanza un `BEGIN;` y en el siguiente turno intenta hacer un `UPDATE`. La sesión ya se ha cortado, el *autocommit* te ha destrozado los datos y la IA, tan feliz, te dice: "¡Hecho! Actualizado con éxito 😊". Dan ganas de reventar el monitor.

Forzar que el *script* auxiliar de Python (`safe_query.py`) sea sin estado (*Stateless*) es precisamente para cortar de raíz esa estúpida costumbre de la IA de "imitar a los humanos" manteniendo una sesión interactiva abierta. ¿Quieres cambiar datos? Entonces usa el procesador, diseña un *payload* perfecto de un solo golpe con `BEGIN; UPDATE...; SELECT...; ROLLBACK;`, y valídalo primero. El bloqueo explícito con `--force-write` es la medida de seguridad mínima indispensable para evitar que la IA elimine o altere datos en producción sin darse cuenta.

Y por favor, si la IA lanza una consulta, no quiero que me la devuelva en un CSV o en una tablita bonita de Markdown. Mi sistema no necesita sus redacciones; necesita un **array de objetos JSON** legible por máquinas. Este *prompt* es la forma más impecable de eliminar el "peloteo" innecesario y el "texto espagueti" de los LLMs, obligándolos a intercambiar única y exclusivamente bloques de datos fríos y estructurados.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Puedo usar este método en MySQL o SQLite además de PostgreSQL?**
  - R: Puedes aplicar esta filosofía al 100%. Solo tienes que adaptar la sintaxis del tiempo de espera de la consulta (`SET statement_timeout`) o la biblioteca del conector de la base de datos en el *script* contenedor al motor correspondiente. La clave de todo el sistema es que la conexión "no mantenga el estado (*Stateless*)".
- **P: La IA sigue intentando hacer un UPDATE sin el flag `--force-write` y da error.**
  - R: Es completamente normal. Ese es exactamente el mecanismo de defensa perfecto que busca esta técnica. Deja que el agente lea el registro de errores (`ERROR: cannot execute UPDATE in a read-only transaction`), añada el *flag* por sí mismo y vuelva a intentarlo. En ese proceso reflexivo, la IA toma conciencia plena de que está 'mutando' datos.
- **P: La conexión se rechaza constantemente. ¿Será que la contraseña es incorrecta?**
  - R: No le eches la culpa a la contraseña a la primera de cambio. Si es una base de datos en la nube (Supabase, RDS), lo más probable es que sea un problema de certificados SSL. Un programador *senior* de verdad primero comprueba si ha declarado `PGSSLMODE=require` en las variables de entorno, y luego verifica el *firewall* de red con `pg_isready` o `nc -vz`.

---

## 🧬 Anatomía del Prompt (Why it works?)

- **Forzar la falta de estado (*Stateless*):** Quiebra el instinto natural de la IA de interactuar de forma conversacional (*Interactive*) con el CLI como si fuera un humano tecleando comandos. Al obligar a completar la transacción en una sola llamada al *script*, se eliminan los fallos de estado lógico.
- **Flag `--force-write`:** Es un proceso de 'aprobación explícita' para cualquier acción. Hace que la IA sea mucho más consciente dentro de su contexto de que está realizando una acción destructiva o de escritura (*Mutating*).
- **Forzar respuesta JSON:** Evita que el LLM genere *tokens* innecesarios de formato Markdown o saludos, aumentando la velocidad de procesamiento y previniendo catastróficos errores de análisis sintáctico (*Hallucinations*).

---

## 📊 Demostración: Antes y Después

### ❌ Before (IA fuera de control)

```text
¡Claro que sí, usuario! Comenzaré a consultar la tabla de usuarios que solicitaste. 😊
Aquí tienes los resultados obtenidos a través de `psql`:

 id | email          | status
----+----------------+--------
  1 | test@test.com  | active
  2 | oops@test.com  | NULL

¡Avísame si necesitas más ayuda en cualquier momento!
(Unos instantes después) ¡Ups! Ejecuté BEGIN para actualizar el estado. ¡Estoy esperando el siguiente comando!
```

### ✅ After (Máquina de JSON implacable)

```text
[
  {"id": "1", "email": "test@test.com", "status": "active"},
  {"id": "2", "email": "oops@test.com", "status": null}
]
```

---

## 🎯 Conclusión

La IA no es tu colega de trabajo; es solo un motor de alto rendimiento. No dejes que el motor gire libremente en la dirección que le dé la gana. Reglas estrictas, tiempos de espera (*timeouts*) cortos, valores predeterminados de solo lectura y JSON puro. Si grabas a fuego estas cuatro reglas, tu agente jamás destruirá la base de datos de producción.

¡Ahora aplica el *script* a tu entorno y vete a casa a tu hora! 🍷
