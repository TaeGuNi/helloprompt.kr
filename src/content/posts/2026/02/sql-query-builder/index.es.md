---
layout: /src/layouts/Layout.astro
title: "복잡한 SQL 쿼리, 말로 하면 코드로 짜줍니다"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "데이터"
description: "JOIN, GROUP BY, Window Functions... Deja de buscar la sintaxis SQL. Genera consultas perfectas simplemente describiéndolas."
tags: ["SQL", "데이터분석", "쿼리"]
---

# 📝 De palabras a código: Genera consultas SQL complejas con IA

- **🎯 Audiencia:** Analistas de datos, Marketers, Desarrolladores Junior
- **⏱️ Tiempo de ejecución:** 30 minutos → 1 minuto
- **🤖 Modelos recomendados:** ChatGPT (GPT-4), Claude 3.5 Sonnet

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"¿Estás perdiendo horas intentando recordar cómo hacer un LEFT JOIN con una Window Function? Deja que la IA escriba el código SQL por ti."_

Escribir consultas SQL complejas puede ser un dolor de cabeza, especialmente cuando trabajas con múltiples tablas, agregaciones o funciones de ventana. En lugar de buscar la sintaxis exacta en Google o Stack Overflow cada vez que lo necesites, puedes usar este prompt estructurado para convertir tus ideas en lenguaje natural directamente en código SQL optimizado.

---

## ⚡️ Resumen (TL;DR)

1. Describe la estructura de tu base de datos (tablas y columnas) a la IA.
2. Explica el resultado de negocio que deseas obtener en lenguaje natural.
3. Obtén una consulta SQL limpia, comentada y lista para ejecutar.

---

## 🚀 Solución: "Generador de SQL Experto"

### 🥉 Versión Básica

Úsalo cuando necesites una consulta rápida de una sola tabla o un recordatorio de sintaxis.

> **Rol:** Eres un administrador de bases de datos experto.
> **Tarea:** Escribe una consulta SQL para `[Describe lo que necesitas]`.
> **Contexto:** La tabla se llama `[Nombre de la tabla]` y tiene las columnas `[Lista de columnas separadas por comas]`.

<br>

### 🥇 Versión Pro

Úsalo para consultas analíticas complejas, optimización de rendimiento o cuando trabajes con múltiples tablas y un esquema específico.

> **Rol (Role):** Eres un Arquitecto de Datos Senior y experto en SQL (`[Especifica el motor: PostgreSQL / MySQL / BigQuery]`). Tu objetivo es escribir consultas SQL altamente optimizadas, legibles y precisas.
>
> **Contexto (Context):**
>
> - Esquema de Tablas (DDL o descripción breve):
>   `[Pega aquí el DDL de tus tablas o describe las columnas clave. Ej: Tabla 'users': id, name, created_at. Tabla 'orders': id, user_id, amount, status]`
> - Objetivo Analítico: `[Ej: Quiero obtener el top 3 de usuarios que han gastado más dinero en el último mes, incluyendo la fecha de su primera compra]`
>
> **Tarea (Task):**
>
> 1. Analiza el esquema proporcionado y el objetivo solicitado.
> 2. Escribe la consulta SQL que resuelva el problema de la manera más eficiente posible.
> 3. Utiliza CTEs (Common Table Expressions - instrución `WITH`) si la consulta requiere múltiples pasos lógicos, para así mejorar su legibilidad.
> 4. Añade comentarios breves en el código SQL explicando la lógica de cada CTE o JOIN principal.
>
> **Restricciones (Constraints):**
>
> - Devuelve ÚNICAMENTE el código SQL dentro de un bloque de código, sin preámbulos extensos.
> - Asegúrate de usar funciones específicas y compatibles con el motor de base de datos indicado.
> - Considera y maneja casos extremos (ej. división por cero, duplicados o valores nulos).
>
> **Advertencia (Warning):**
>
> - No asumas ni inventes columnas que no estén explícitamente en el esquema proporcionado. Si falta información clave para hacer un JOIN, dímelo antes de escribir la consulta.

---

## 💡 Comentario del Autor (Insight)

Este prompt es un auténtico salvavidas en el día a día. Al trabajar con BigQuery o PostgreSQL, frecuentemente me encuentro lidiando con consultas que requieren múltiples JOINs y cálculos de fechas complejos. Lo que hace que esta _Versión Pro_ sea excepcionalmente buena es la instrucción de forzar el uso de **CTEs (Common Table Expressions)**.

Los CTEs obligan a la IA a desglosar el problema lógicamente, paso a paso (actuando como un _Chain-of-Thought_ técnico). Esto reduce drásticamente las "alucinaciones" lógicas y hace que el código resultante sea mucho más fácil de revisar, depurar y mantener por cualquier otro miembro del equipo de datos. Además, especificar el motor exacto evita esos molestos errores de funciones de fecha que varían entre MySQL y Postgres.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Puedo pegar directamente la estructura (DDL) de mis tablas reales?**
  - A: Sí, de hecho es la mejor práctica. Si usas herramientas como DBeaver o DataGrip, simplemente exporta el DDL (`CREATE TABLE...`) y pégalo en la sección de contexto. La IA entenderá a la perfección las claves primarias y relaciones.

- **Q: ¿Es seguro enviar la información de mi base de datos a la IA?**
  - A: **Nunca** pegues filas de datos reales o información personal de clientes (PII). Solo debes proporcionar la estructura (los nombres de las columnas y su tipo de dato). Con eso es más que suficiente para generar la consulta.

- **Q: ¿La IA optimizará la consulta para que sea rápida?**
  - A: Generalmente sí. Al asignarle el rol de "Arquitecto de Datos Senior", la IA intentará aplicar mejores prácticas, como evitar subconsultas anidadas ineficientes a favor de Window Functions o CTEs. No obstante, para bases de datos masivas, siempre es recomendable revisar el plan de ejecución (`EXPLAIN`) en tu propio entorno.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1.  **Contexto Específico del Motor:** Definir el dialecto SQL exacto (PostgreSQL, BigQuery, etc.) previene la generación de sintaxis genérica que terminaría en errores de ejecución.
2.  **Uso Obligatorio de CTEs:** Al forzar a la IA a usar CTEs, aplicamos indirectamente una técnica de razonamiento paso a paso. La IA divide el problema complejo en sub-consultas más manejables, asegurando la precisión del resultado final.
3.  **Prevención de Alucinaciones:** La regla estricta de "no inventar columnas" evita que la IA asuma ciegamente que existe un campo común como `created_at` o `updated_at` si no lo has especificado en tu esquema.

---

## 📊 Demostración: Before & After

### ❌ Before (Sin la IA, bloqueado buscando sintaxis)

```text
Usuario: "Cómo hacer un ranking de ventas por mes y categoría en SQL y quedarme solo con el número 1 de cada grupo sin usar group by porque necesito mantener otros campos detalle..."
(Resultado: Horas navegando por documentación intentando adaptar ejemplos de Window Functions a tu caso específico).
```

### ✅ After (Con el Prompt Pro)

```sql
-- CTE para calcular las ventas totales por pedido y asignar un ranking por categoría y mes
WITH RankedSales AS (
    SELECT
        category_id,
        order_id,
        DATE_TRUNC('month', order_date) AS order_month,
        amount,
        ROW_NUMBER() OVER(
            PARTITION BY category_id, DATE_TRUNC('month', order_date)
            ORDER BY amount DESC
        ) as sales_rank
    FROM orders
    WHERE status = 'completed'
)
-- Seleccionar exclusivamente el pedido de mayor valor (rank = 1) para cada categoría en cada mes
SELECT
    category_id,
    order_id,
    order_month,
    amount AS top_sale_amount
FROM RankedSales
WHERE sales_rank = 1;
```

---

## 🎯 Conclusión

Ya no necesitas memorizar cada función analítica de tu motor de base de datos. Al proporcionar un esquema claro y un objetivo definido a la IA, puedes generar scripts de análisis de datos robustos en cuestión de segundos.

¡Copia el prompt, ajusta tu esquema y recupera tus horas de trabajo productivo! 🍷

```

```
