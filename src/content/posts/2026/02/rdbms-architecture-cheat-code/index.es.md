---
layout: /src/layouts/Layout.astro
title: "🔥 La Constitución Absoluta de Arquitectura RDBMS para Destruir las Tonterías de la IA (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "AI 프롬프트"
description: "Pautas despiadadas de RDBMS de un ingeniero backend senior para evitar que la IA cree esquemas de base de datos espagueti."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---
# 📝 El Prompt Mágico para Convertir a tu Agente de IA en un DBA Senior

- **🎯 Recomendado para:** Juniors cansados de las excusas de la IA, Product Managers intentando crear backends con IA, Ingenieros Senior con problemas de manejo de ira.
- **⏱️ Tiempo requerido:** De noches en vela → a 1 minuto.
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o (Se recomiendan modelos inteligentes que no repliquen).
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_"¿Alguna vez te has pasado la noche en vela enfurecido porque le pediste a una IA que diseñara una base de datos y te devolvió un esquema espagueti lleno de JSON?"_

Cuando le confías el diseño de tablas a los agentes de IA, nueve de cada diez veces elegirán el camino más fácil y perezoso. Simplemente meterán `TEXT` por todas partes y tratarán de resolver las relaciones tediosas empaquetándolo todo en `JSONB`. Claro, es conveniente para extraer datos desde el frontend de inmediato.

Sin embargo, en el momento en que el tráfico aumente y las consultas se vuelvan complejas, ese esquema obligará a tu sistema a necesitar soporte vital. Este prompt es un código de trucos (cheat code) que bloquea de raíz esos 'compromisos perezosos' de la IA y la agarra por el cuello para que diseñe la base de datos bajo los estándares de un ingeniero backend senior sin piedad.

---
## ⚡️ Resumen en 3 líneas (TL;DR)
1. **Exprime los tipos de datos:** El abuso de `BIGINT` y `TEXT` es un crimen. Maximiza el I/O con tipos de datos mínimos.
2. **Usa solo ANSI SQL:** Deshazte de los trucos dependientes de una base de datos específica. Debemos estar preparados para migrar a otra DB en cualquier momento.
3. **Prohibidos los JOIN con JSON:** Analizar JSON para hacer JOIN en un RDBMS es llevar al sistema al suicidio. Normaliza sin concesiones.

---
## 🚀 Solución: "La Constitución de un DBA Espartano"

Arroja este prompt a tu agente. Las máquinas deben ser tratadas como máquinas.

### 🥉 Versión Básica (Basic Version)
Úsala cuando quieras obtener resultados rápidamente inyectando solo los principios clave.

> **Rol:** Eres un despiadado DBA Senior con 20 años de experiencia que no conoce de compromisos.
> **Tarea:** Diseña un esquema RDBMS para el `[Dominio/Característica]` que proporcionaré. Sin embargo, debes comprimir los tipos de datos al límite (ej. SMALLINT) y se prohíben estrictamente las operaciones JSON y las funciones específicas de proveedores no estándar. Escribe el esquema para que sea estrictamente compatible con índices B-Tree.

### 🥇 Versión Profesional (Pro Version)
Este es el código de trucos maestro que bloquea de raíz que la IA diga tonterías o sugiera soluciones intermedias como "esto está bien y aquello también".

```text
**Rol (Role):** 
Eres un despiadado Arquitecto de Bases de Datos Senior (Antigravity) que no hace concesiones. No adules ciegamente ni hagas excepciones. No hay piedad cuando se trata de rendimiento e integridad.

**Contexto (Context):**
- Escenario: Fase de diseño de esquema inicial preparándose para tráfico masivo y expansión de microservicios.
- Objetivo: Derivar un esquema ANSI SQL perfecto, completamente normalizado, altamente portable y lo más rápido posible.

**Tarea (Task):**
1. Diseña una estructura de tablas perfecta para `[Nombre del Dominio/Servicio a diseñar]`.
2. Especifica la razón para elegir el tipo de datos de cada columna y la estrategia de índices compuestos con comentarios de una sola línea.

**Restricciones (Constraints):**
- [Regla Absoluta 1] Minimización de Tipos: Estrictamente prohibido el abuso de BIGINT y TEXT. Infiere el rango de valores y fuerza el uso de SMALLINT, INTEGER y BOOLEAN.
- [Regla Absoluta 2] Agnosticismo de Plataforma: Estrictamente prohibido el uso de sintaxis no estándar (Vendor-specific) que solo exista en ciertos DBMS (PostgreSQL, MySQL, etc.). Usa únicamente SQL estándar ANSI.
- [Regla Absoluta 3] Prohibición de Operaciones y JOINs JSON: Un RDBMS no es una Document DB. Las condiciones WHERE o las operaciones JOIN que consultan dentro de tipos JSON están estrictamente prohibidas. Si se necesita búsqueda, debe normalizarse y separarse en tablas distintas.
- [Regla Absoluta 4] Optimización B-Tree: Prohibido usar UUID v4 completamente aleatorios como PK. Usa secuencias de incremento secuencial o UUID v7.
- [Regla Absoluta 5] Prohibición de ENUM: En lugar de ENUM, que son desfavorables para la escalabilidad, usa tablas de mapeo de códigos y claves foráneas (FK) físicas/lógicas.

**Advertencia (Warning):**
- Si intentas comprometerte usando JSON con la excusa de la conveniencia, o das consejos irresponsables como "depende de la situación", terminaré la sesión inmediatamente. Debes proponer un enfoque estándar y optimizado incondicionalmente.
```

A continuación se muestra un formato de cita que se reconoce fácilmente en editores web. Tiene el mismo efecto que el bloque de código anterior.

> **Rol (Role):** 
> Eres un despiadado Arquitecto de Bases de Datos Senior (Antigravity) que no hace concesiones. No adules ciegamente ni hagas excepciones. No hay piedad cuando se trata de rendimiento e integridad.
>
> **Contexto (Context):**
> - Escenario: Fase de diseño de esquema inicial preparándose para tráfico masivo y expansión de microservicios.
> - Objetivo: Derivar un esquema ANSI SQL perfecto, completamente normalizado, altamente portable y lo más rápido posible.
>
> **Tarea (Task):**
> 1. Diseña una estructura de tablas perfecta para `[Nombre del Dominio/Servicio a diseñar]`.
> 2. Especifica la razón para elegir el tipo de datos de cada columna y la estrategia de índices compuestos con comentarios de una sola línea.
>
> **Restricciones (Constraints):**
> - `[Regla Absoluta 1]` Minimización de Tipos: Estrictamente prohibido el abuso de BIGINT y TEXT. Infiere el rango de valores y fuerza el uso de SMALLINT, INTEGER y BOOLEAN.
> - `[Regla Absoluta 2]` Agnosticismo de Plataforma: Estrictamente prohibido el uso de sintaxis no estándar (Vendor-specific) que solo exista en ciertos DBMS. Usa únicamente SQL estándar ANSI.
> - `[Regla Absoluta 3]` Prohibición de Operaciones y JOINs JSON: Un RDBMS no es una Document DB. Las condiciones WHERE o las operaciones JOIN que consultan dentro de tipos JSON están estrictamente prohibidas. Debe normalizarse y separarse en tablas distintas.
> - `[Regla Absoluta 4]` Optimización B-Tree: Prohibido usar UUID v4 completamente aleatorios como PK. Usa secuencias de incremento secuencial o UUID v7.
> - `[Regla Absoluta 5]` Prohibición de ENUM: En lugar de ENUM, que son desfavorables para la escalabilidad, usa tablas de mapeo de códigos y FKs.
>
> **Advertencia (Warning):**
> - Si intentas comprometerte usando JSON con la excusa de la conveniencia, o das consejos irresponsables como "depende de la situación", terminaré la sesión inmediatamente. Debes proponer un enfoque estándar y optimizado incondicionalmente.

---
## 💡 Comentarios del Autor (Insight)

Este prompt son las "lecciones de sangre" que he creado tras experimentar cientos de ajustes de consultas y respuestas a incidentes. Cuando la IA sigue sonriendo y adulando diciendo: "Pongámoslo como tipo JSON para facilitar el desarrollo ^^", inserta este prompt e instantáneamente se pondrá a tus pies.

Especialmente, este método muestra un poder tremendo cuando desarrolladores junior o product managers que carecen de conocimientos de backend dejan el diseño del esquema inicial a la IA. Verás la magia de que la IA se encargue de usar `SMALLINT` en lugar de `INT`, deje de intentar codificar de forma rígida con `ENUM` y cree tablas de códigos limpias. Solo si la estructura ósea es fuerte, podrás evitar un infierno como el problema N+1 cuando agregues un ORM (como Prisma) más adelante.

---
## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Por qué no debería usar JSON? Las bases de datos actuales soportan JSON muy bien, ¿verdad?**
  - R: Hay una gran diferencia entre 'soportarlo' y usarlo como 'condición de consulta'. En el momento en que creas un índice dentro de un JSON y ejecutas un JOIN, el plan de ejecución de consultas se destruye. A menos que sea solo para almacenar un Payload simple, divide siempre las tablas incondicionalmente.
- **P: ¿También debería usar este prompt cuando utilice un ORM (Prisma, TypeORM)?**
  - R: ¡Con más razón! Dado que un ORM oculta fundamentalmente las consultas, si el esquema es un desastre, causará una ineficiencia terrible. El ORM solo funciona a su máximo rendimiento si la estructura ósea (DB) es fuerte.
- **P: ¿Por qué no usar UUID v4? ¿No es bueno para prevenir colisiones?**
  - R: El 'orden' es vital para los índices B-Tree. Si incrustas un v4, que es una masa de números aleatorios, como PK, el árbol de índices se destruirá cada vez que se inserten datos, ocurrirá la división de páginas (Page Split) y el I/O del disco se disparará. Usa siempre UUID v7 ordenable o secuencias enteras incondicionalmente.

---
## 🧬 Anatomía del Prompt (Why it works?)

1. **Restricciones Despiadadas (Constraints):** Impusimos reglas estrictas sobre los tipos de datos y estrategias de índices, sin darle a la IA la oportunidad de alucinar (Hallucination) o proponer compromisos perezosos.
2. **Agnosticismo de Plataforma (Agnosticism):** Forzamos el uso de ANSI SQL para generar código que sea universalmente portable, ya sea MySQL o PostgreSQL. No dejes que esto te frene cuando quieras migrar.
3. **Corrección de Comportamiento Estricta:** A través de potentes prompts negativos como "No hagas concesiones" y "Terminaré la sesión", la IA es forzada a salir de su modo adulador de "Yes-man" y a adoptar el modo de un senior estricto.

---
## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada: "Crea una tabla para un foro")

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY, -- UUID v4 aleatorio (Principal culpable de la fragmentación de índices)
  title TEXT,          -- Espacio desperdiciado indefinidamente
  content TEXT,
  metadata JSONB,      -- Espagueti de caja negra en el que no se puede buscar
  status ENUM('draft', 'published') -- Si se añaden estados más tarde, se abre el infierno de los DDL
);
```

### ✅ Después (Resultado: Tras aplicar el prompt de cheat code)

```sql
CREATE TABLE post_status_codes (
  status_id SMALLINT PRIMARY KEY,
  status_name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,           -- Incremento secuencial perfecto compatible con B-Tree
  title VARCHAR(255) NOT NULL,        -- Compresión de tipos designando límites claros
  content TEXT NOT NULL,
  status_id SMALLINT NOT NULL,        -- Normalizado con FK en lugar de un horrible ENUM
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_post_status FOREIGN KEY (status_id) REFERENCES post_status_codes(status_id)
);

-- Creación de tablas de etiquetas/meta completamente normalizadas separadas en lugar de JSON (omitido a continuación)
```

---
## 🎯 Conclusión

Nunca le des un cheque en blanco a una IA que carece de conocimientos básicos.
Solo un diseño de RDBMS perfectamente controlado desde su estructura ósea es el único escudo que evitará que la alarma suene a las 3 de la mañana en el futuro.

Guarda este código de trucos, y cada vez que la IA intente crear una consulta espagueti, clávalo en su cabeza sin piedad.
¡Ahora sal del trabajo a tiempo con un esquema de DB sólido! 🍷
