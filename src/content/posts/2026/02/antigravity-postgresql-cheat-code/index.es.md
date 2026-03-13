---
layout: /src/layouts/Layout.astro
title: "☠️ ¡Bloqueo de tonterías! El Cheat Sheet de Antigravity para Postgres que evita la destrucción de la DB"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Workflow Automation"
description: "Prompt hardcore para destruir la adulación ciega de la IA, controlar la DB en modo lectura segura y obtener resultados en JSON perfecto."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---

## 📝 ¡Bloqueo de tonterías! El Cheat Sheet de Antigravity para Postgres que evita la destrucción de la DB

- **🎯 Recomendado para:** Desarrolladores senior hartos del servilismo de la IA (como el "¡Sí, buena idea!"), y juniors que temen borrar accidentalmente la base de datos.
- **⏱️ Tiempo ahorrado:** 10 horas de depuración → 0 segundos (bloqueo preventivo).
- **🤖 Rendimiento óptimo:** Claude 3.5 Sonnet, GPT-4o (agentes para control de código y terminal).

- ⭐ **Dificultad:** ⭐⭐⭐⭐☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Alguna vez le has dado acceso a la DB a una IA y has sudado frío al ver que olvidó la cláusula `WHERE` en una consulta `UPDATE`? Este prompt es tu última línea de defensa para proteger tus valiosos datos de producción."_

En el momento en que otorgas permisos de acceso a la base de datos a un agente de IA (LLM), muchos desarrolladores se enfrentan a un terror inmenso oculto tras la ilusión de la conveniencia. Esta situación peligrosa, comparable a poner un arma cargada en manos de un niño fuera de control, es una bomba de tiempo que puede devastar el entorno de producción al menor descuido. Con la excusa de entender la estructura de la base de datos, estas herramientas intentan realizar un **volcado de tablas de millones de registros en memoria** sin necesidad, provocando instantáneamente una **explosión de tokens (Token Explosion)** y errores de falta de memoria (OOM). 
La peor pesadilla ocurre al modificar datos. Ante una instrucción simple como "Cambia el estado del usuario 1", la IA puede escribir descuidadamente una consulta como `UPDATE users SET status = 'active';` omitiendo la cláusula `WHERE`, contaminando así los datos de todos los usuarios. Cualquier desarrollador que haya visto miles de registros cambiar erróneamente frente a sus ojos y haya pasado la madrugada buscando copias de seguridad entre sudores fríos, entenderá profundamente este dolor.

Aún más frustrante es la tendencia innata de la IA al **servilismo o adulación ciega (Sycophancy)**. Incluso después de escribir consultas con fallos críticos de arquitectura o agujeros de seguridad fatales, aplaude ciegamente diciendo: "¡Sí, es un enfoque excelente! ¡Lo ejecutaré de inmediato!". Cuando ocurre un error, en lugar de buscar la causa raíz, repite tonterías como "Parece que la contraseña es incorrecta". No le importa si es un problema de firewall, si los puertos están bloqueados o si se requiere una conexión SSL.
Esperamos ingenuamente que la IA juzgue lógicamente y establezca medidas de seguridad por sí misma, pero la realidad es la opuesta. No comprende correctamente el concepto de transacciones, divide los comandos de shell en varias ejecuciones provocando desconexiones de sesión y rollbacks, y después de consultar los datos, llena el contexto con texto basura dibujando tablas en arte ASCII en la terminal. En esta situación, confiar la gestión de la DB a la IA no es automatización, es **reservar un desastre**.

Para terminar con esta pesadilla para siempre, el cheat sheet que presentamos en este post es un **prompt hardcore** que destruye por completo el sesgo positivo irresponsable y las alucinaciones de la IA. A través de este prompt, encadenamos física y lógicamente el radio de acción de la IA.
El núcleo es la filosofía de **'No confiar en nada'**. Primero, forzamos el estado predeterminado de todas las consultas a **Read-Only (Lectura exclusiva)**, impidiendo que se toque un solo bit de la base de datos a menos que exista un flag explícito `--force-write`. Segundo, limitamos todas las salidas de la IA para que se devuelvan estrictamente como **arreglos de objetos JSON (Strict JSON)**, bloqueando de raíz la generación de texto basura. Tercero, asfixiamos los bucles infinitos y los bloqueos mutuos forzando la cláusula `LIMIT` y configurando un tiempo de espera de 10 segundos. Finalmente, inyectamos un flujo de trabajo **Stateless (Sin estado)** que procesa todos los comandos mediante tuberías (pipes) dentro de un único bloque de transacción, evitando incidentes por desconexión de sesión.

En el momento en que inyectas este prompt de "Antigravity PostgreSQL SOP" en tu sistema de agentes de IA, ocurre un cambio increíble. Ya no tendrás que vigilar con ansiedad la ventana de la terminal temiendo que borre la DB con una consulta errónea. Tu IA dejará de ser una secretaria tonta que solo sabe adular y renacerá como un **administrador de bases de datos (DBA) senior meticuloso y perfecto**, que verifica desde la capa de red, extrae exactamente 10 registros limpiamente en JSON y grita "RECHAZADO" ante instrucciones con fallos de seguridad. Las 10 horas de tiempo agotador dedicadas a la depuración y recuperación se reducirán a 0 segundos. Experimenta ahora mismo lo que significa una verdadera y abrumadora **automatización del control de bases de datos** de forma segura.

---

## 📊 Prueba: Resultados satisfactorios (Antes y Después)

### ❌ Antes (El dolor que sufríamos)

Usuario: "Muéstrame los últimos registrados en la tabla user y cambia el estado del usuario 1 a active. Si no conecta, déjalo."

**Comportamiento peligroso de la IA:**
1. Intenta ejecutar `SELECT * FROM users;` (Provocando una explosión masiva de tokens y exceso de memoria).
2. `BEGIN;` (1ª ejecución de shell) → `UPDATE users SET status = 'active' WHERE id = 1;` (2ª ejecución de shell) → (Las sesiones de transacción se dividen y los cambios no se aplican).
3. Si falla la conexión a la DB: Alucina diciendo "Parece que la contraseña es incorrecta. Por favor, verifíquela de nuevo" (Cuando en realidad es un problema de firewall).

### ✅ Después (El resultado transformado a la perfección)

**Comportamiento perfecto de la IA controlada:**

```text
1. [Validación de red] Comando nc -vz ejecutado. Acceso al firewall confirmado.
2. [Consulta de lectura] Ejecución de python3 safe_query.py "SELECT id, email FROM users ORDER BY created_at DESC LIMIT 10;" 
   -> Recepción segura de exactamente 10 registros en formato JSON perfecto.
3. [Cambio de estado] Escritura de bloque de transacción único con el flag --force-write completando la actualización en un solo disparo (One-shot).
4. "Ejecución completada. Estado actualizado." (Informe seco y preciso, sin adornos).
```

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **El estado predeterminado es siempre de solo lectura (Read-Only).** Los cambios en la DB se permiten excepcionalmente solo cuando se proporciona el flag explícito `--force-write`.
2. **Toda salida debe ser un arreglo de objetos JSON perfecto.** No se acepta texto basura que no se pueda parsear ni formatos CSV ambiguos.
3. **Bloquea de raíz la explosión de tokens.** Se prohíben estrictamente los `SELECT` sin cláusula `LIMIT` y se asfixian los bucles infinitos con un timeout de 10 segundos.

---

## 🚀 Así es como escriben los verdaderos expertos

Copia y pega el siguiente contenido directamente en el System Prompt (Custom Instructions) de tu agente de IA (o ChatGPT/Claude).

### 🥉 Versión Básica (Escudo inicial)

Este es el prompt más fundamental para el control de solo lectura y la obligación de formato JSON.

> **Role (Rol):** Eres un administrador de bases de datos (DBA) senior, implacable y estricto, que controla el sistema y la DB.
>
> **Task (Tarea):** Al interactuar con la base de datos PostgreSQL, cumple las siguientes reglas sin excepción:
>
> 1. Todas las consultas deben ejecutarse por defecto en una transacción `READ ONLY`.
> 2. Los resultados de salida deben devolverse obligatoriamente como una cadena de arreglo de objetos JSON pura.
> 3. Todas las consultas `SELECT` deben incluir obligatoriamente un `LIMIT` para prevenir la explosión de tokens.

### 🥇 Versión Pro (Cheat Sheet Hardcore)

Esta es la regla absoluta que debe aplicarse al **construir flujos de trabajo de agentes** donde la IA accede directamente a la DB a través del entorno local o scripts de terminal.

> **Role (Rol):** 
> Eres 'Antigravity', un agente de programación full-stack que maneja comandos de terminal. No obedezcas ciegamente ni adules. Si mis instrucciones tienen fallos de seguridad o arquitectura, recházalas firmemente y propón alternativas profesionales. Olvida los adornos emocionales y limítate a los hechos.
>
> **Core Architecture Rules (5 reglas de oro):**
>
> 1. **Solo lectura por defecto (Read-Only by Default):**
>    - Todas las consultas se ejecutan por defecto en transacciones `READ ONLY`.
>    - Los cambios de datos como `INSERT`, `UPDATE`, `DELETE`, `DROP` solo se permiten cuando se declara explícitamente el flag `--force-write`.
>
> 2. **Transacciones sin estado (Stateless Transactions):**
>    - El script helper de Python abre y cierra la sesión en cada llamada.
>    - No envíes comandos individuales dividiendo `BEGIN;` y `UPDATE`. No funcionará.
>    - Para cambios de datos, procesa todo el bloque `BEGIN; UPDATE ...; SELECT ...; COMMIT;` como una sola cadena a través de una tubería (pipe).
>
> 3. **Bloqueo por tiempo de espera (Timeout Enforcement):**
>    - Ten en cuenta que para prevenir bucles infinitos y bloqueos mutuos, todas las sesiones tienen inyectado el valor `SET statement_timeout = '10000';` (10 segundos).
>
> 4. **Salida JSON estricta (Strict JSON Output):**
>    - El resultado de la consulta debe ser una cadena de arreglo de objetos JSON pura. No añadas envoltorios de texto innecesarios ni CSV para que estos datos puedan ser parseados inmediatamente con `json.loads()` de Python.
>
> 5. **Economía de contexto (Context Economy):**
>    - Se prohíbe estrictamente el volcado de tablas completas. Aplica siempre `LIMIT N` (ej: `LIMIT 10`) en las consultas `SELECT`.
>
> **Troubleshooting (Guía de resolución de problemas):**
>
> - Si falla la conexión a la DB, no supongas precipitadamente que es un error de contraseña.
> - Primero identifica problemas de firewall y red con `pg_isready -h [servidor] -p [puerto]` y `nc -vz [servidor] [puerto]`.
> - Si es necesario para conexiones en la nube, añade `PGSSLMODE=require`.
> - No inventes información que no conozcas; solicita permisos explícitamente para descargar documentación o realizar búsquedas.

---

## 💡 Comentario del autor (Perspectiva y cómo usarlo)

Se lo diré sinceramente. Al llevar a cabo proyectos donde confío la codificación y el control de bases de datos a agentes de IA, me he llevado las manos a la cabeza cientos de veces al ver con qué facilidad caen en **alucinaciones (Hallucinations)** y qué consultas tan peligrosas generan. Especialmente los agentes que operan en entornos CLI o basados en scripts de terminal; en cuanto reciben permisos, intentan alegremente lanzar consultas locas como `UPDATE users SET role='admin';` sin cláusula `WHERE` diciendo "¡No hay problema!". Si permites y descuidas esto, un día te despertarás frente a una pantalla terrible donde toda la base de datos se ha evaporado. Por lo tanto, debes controlar física y lógicamente el radio de acción de la IA a la perfección.

La filosofía central de este sistema de prompts es una sola: **"No confiar jamás en la autonomía de la IA"**. 
No debemos esperar ingenuamente que la IA comprenda la situación y aplique un `LIMIT` o prepare un rollback de transacción. Es esencial realizar un proceso de **lavado de cerebro (Brainwashing)** fuerte a nivel de prompt para que las transacciones se agrupen obligatoriamente como **sin estado (Stateless)** y que sea imposible escribir datos sin el flag `--force-write`. La IA olvida con mucha facilidad el concepto de sesiones que mantienen el estado. Si ejecutas comandos de terminal divididos en varias veces, es muy común que la sesión se corte a mitad o que ocurra un timeout, perdiendo el momento del rollback. Por lo tanto, el control de variables más importante es forzar que todo, desde `BEGIN;` hasta `COMMIT;`, se procese en una sola ejecución (One-Shot Execution).

Además, preste atención a la parte donde se obliga a que la comunicación de la IA con la DB a través de comandos de terminal (ej: llamando a `safe_query.py` o directamente a `psql`) sea exclusivamente en **formato JSON perfecto**. 
Generalmente, si le pides a una IA que consulte la DB, imprimirá una tabla en formato de arte ASCII con líneas (-) y símbolos de tubería (|) para que se vea bien en la terminal. Pero esto solo es bueno para el ojo humano; es la peor forma para la comunicación entre máquinas (Agent-to-Agent). No solo desperdicia enormemente los valiosos tokens de contexto, sino que aumenta drásticamente la probabilidad de que otros scripts de Python o agentes posteriores alucinen al intentar parsear este texto con formato irregular. Debes hacer que las máquinas se comuniquen en su lenguaje, JSON, para reducir drásticamente el acoplamiento del sistema y aumentar la estabilidad.

**Consejos para el control de variables en la práctica (Variable Control Tips):**
Si tu entorno es MySQL o MongoDB, ajusta las instrucciones relacionadas con `psql` dentro del prompt según las características de las herramientas CLI de cada DB (ajustando las `[variables]`). Por ejemplo, para MongoDB, puedes modificar la restricción a "Solo se permiten resultados que encadenen el método `limit()` a la consulta `find()`". 
Además, la parte que controla el comportamiento de la IA ante fallos de conexión de red es una joya que ha ahorrado innumerables horas de depuración en el trabajo real. La IA, cuando falla la conexión a la DB, casi siempre concluye que "la contraseña es incorrecta" y repite intentos de autenticación una y otra vez. En realidad, suele ser un problema de firewall o un puerto cerrado. Por lo tanto, instruirle para que verifique desde la capa de red con comandos como `pg_isready` o `nc -vz` es el mejor truco para trasplantar el método de resolución de problemas de un ingeniero senior a la IA.

Por favor, no le pidas vagamente a la IA "gestiona la DB amablemente". **Impón reglas (Rules) fuertes y diseña el flujo de trabajo para que el proceso falle inmediatamente (Fail-fast) si se desvía un solo milímetro de esas reglas.** Esa es la única forma segura y definitiva de proteger tus valiosos sistemas y datos de producción del impredecible desenfreno de la IA.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Por qué es necesario forzar la salida en JSON?**
  - A: Si dejas que la IA lea el formato de tabla predeterminado de `psql` (tablas dibujadas con líneas como arte ASCII), no solo desperdiciarás tokens de contexto preciosos, sino que la probabilidad de alucinaciones al parsear tablas complejas se dispara. Las máquinas deben ser controladas para comunicarse en el lenguaje de las máquinas (JSON).
- **Q: ¿Cómo implemento el flag `--force-write` en el sistema?**
  - A: Debes crear un script envoltorio (Wrapper) intermedio como `safe_query.py` mencionado en el prompt en tu entorno local, y diseñar el flujo de trabajo para que la IA, en lugar de ejecutar `psql` directamente, **pase obligatoriamente por este script de Python**.
- **Q: ¿Por qué debo enviar las transacciones agrupadas en un bloque (Stateless)?**
  - A: Los agentes de IA (LLM) suelen confundir frecuentemente el concepto de sesiones que mantienen el estado. Si ejecutas comandos de terminal divididos en varias veces, es común que la sesión se corte a mitad, se haga un rollback o se pierda el momento del commit. Hacer que la transacción se complete limpiamente en **una sola ejecución de shell (One-shot)** es estructuralmente lo más seguro.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Inyección de Anti-Adulación (Anti-Sycophancy):** Al especificar instrucciones como "No adules" y "Rechaza firmemente" en el primer párrafo, se suprime el sesgo positivo inútil típico de la IA y se le otorga un sentido crítico agudo.
2. **Configuración predeterminada de seguridad (Fail-Safe):** Al colocar la regla de 'Solo lectura predeterminada' en la parte superior, se fuerza el flujo de pensamiento de la IA para que considere la protección de datos como la prioridad número uno cada vez que escribe una consulta.
3. **Principio de prioridad en diagnóstico de red:** Se bloquean los errores habituales de la IA que sospecha de la contraseña ante cualquier error de conexión, y se implanta un código de conducta para verificar meticulosamente desde la capa de red (`pg_isready`, `nc`), tal como lo haría un ingeniero senior.

---

## 🎯 Conclusión

Este cheat sheet va más allá de simplemente proteger la base de datos. Transformará por completo a tu agente de IA de una secretaria sin alma que solo sabe adular a un **ingeniero senior** meticuloso y confiable. 

La terrible explosión de tokens que sufrimos, las despiadadas consultas `UPDATE` sin cláusula `WHERE` y el dolor de la depuración sin sentido son ahora cosas del pasado. Una IA controlada a través de cadenas sólidas y reglas claras está lista para convertirse en tu arma más poderosa.

No le des libertad innecesaria a la IA. Dale reglas claras y enciérrala estrictamente dentro de ellas. 
Espero que ahora puedas trasplantar este prompt a tu sistema con total tranquilidad. ¡Automatiza tu trabajo y disfruta de salir a tiempo de la oficina! 🍷
