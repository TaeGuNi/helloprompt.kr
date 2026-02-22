---
layout: /src/layouts/Layout.astro
title: "Análisis de Viabilidad de Inversión: Excel de Cálculo Automático de VAN y TIR"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatización de Trabajo"
description: "¿Debería invertir en este proyecto? Calcula fácilmente el Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR) en Excel, los indicadores clave para cualquier decisión de inversión."
tags: ["Excel", "AnálisisInversión", "VAN", "TIR"]
---

# 📝 Análisis de Viabilidad de Inversión: Excel de Cálculo Automático de VAN y TIR

- **🎯 Recomendado para:** Analistas financieros, emprendedores, directores de proyecto y cualquier persona que evalúe inversiones
- **⏱️ Tiempo requerido:** 5 minutos → 1 minuto
- **🤖 Modelo recomendado:** Todos los modelos de IA conversacional (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"¿Es rentable invertir 100.000€ hoy para ganar 200.000€ en 5 años? La respuesta no está en la cantidad bruta, sino en el tiempo y la tasa de interés."_

No te dejes llevar solo por el beneficio esperado. El valor del dinero cambia con el tiempo. El **VAN (Valor Actual Neto)** y la **TIR (Tasa Interna de Retorno)** son las reglas de oro indiscutibles para la toma de decisiones financieras empresariales. Aunque los conceptos pueden sonar intimidantes, con las funciones adecuadas de Excel, cualquier persona puede calcularlos. Deja que la IA te genere las fórmulas exactas sin margen de error.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Comprende al instante los conceptos de VAN y TIR basándote en proyecciones de flujo de caja.
2. Genera fórmulas automáticas e infalibles usando las funciones `VNA` y `TIR` de Excel.
3. Obtén criterios de decisión claros sobre si aprobar o rechazar un proyecto de inversión.

---

## 🚀 La Solución: "IA Revisora de Inversiones"

### 🥉 Versión Básica

Úsala cuando necesites la fórmula y el resultado de inmediato sin entrar en detalles complejos.

> **Rol:** Eres un `[Experto en Modelado Financiero]`.
> **Solicitud:** Explícame de forma sencilla cómo calcular el VAN y la TIR en Excel para saber si `[descripción de mi negocio/proyecto]` es rentable o no.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites un análisis estructurado y listo para presentar en una reunión directiva.

> **Rol:** Eres un `[Director Financiero (CFO) Experto en Modelado Financiero]`.
>
> **Contexto:**
>
> - Quiero analizar la viabilidad de inversión de un nuevo proyecto utilizando Excel.
> - **Inversión Inicial (Año 0):** `[-100.000€]` (Celda B2)
> - **Ingresos Esperados (Año 1~5):** `[30.000€]` anuales (Celdas B3~B7)
> - **Tasa de Descuento (Retorno Requerido):** `[10%]` (Celda C2)
>
> **Tarea:**
>
> 1. Proporciona la **fórmula exacta de Excel para calcular el VAN (Valor Actual Neto)** de este proyecto.
> 2. Proporciona la **fórmula exacta de Excel para calcular la TIR (Tasa Interna de Retorno)**.
> 3. Explica los criterios de decisión de forma ejecutiva: ¿Debo invertir si el **VAN > 0** o si la **TIR > Tasa de Descuento**?
>
> **Restricciones:**
>
> - Explica claramente que la función `VNA` (o `NPV` en inglés) de Excel solo debe aplicarse a los flujos de caja del Año 1 en adelante, sumando o restando la inversión inicial fuera de la fórmula.

---

## 💡 Comentario del Autor (Insight)

Uno de los errores más comunes (¡incluso entre analistas junior!) es meter la inversión inicial del Año 0 dentro de la fórmula `VNA` de Excel. Esto arruina todo el cálculo porque Excel asume erróneamente que ese primer desembolso ocurre al final del año 1. Este prompt está diseñado específicamente para prevenir ese error mediante la sección de Restricciones (Constraints). Además, al exigirle a la IA que asuma el rol de un CFO, la explicación que obtienes sobre "por qué" invertir es perfecta para copiarla y pegarla directamente en tu informe ejecutivo o presentación a inversores.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: Mi Excel está en inglés, ¿funcionan estas fórmulas?**
  - A: Sí, pero debes cambiar el nombre de las funciones. Usa `NPV` en lugar de `VNA`, y `IRR` en lugar de `TIR`. Además, dependiendo de tu configuración regional, es posible que debas separar los argumentos con coma (`,`) en lugar de punto y coma (`;`).

- **Q: ¿Qué pasa si el proyecto tiene flujos de caja irregulares (por ejemplo, meses sin ingresos)?**
  - A: Si los flujos no son periódicos o regulares, las funciones `VNA` y `TIR` tradicionales no son precisas. En ese caso, incluye en el prompt que tus ingresos son irregulares y pídele a la IA que te genere las fórmulas usando `VNA.NO.PER` (XNPV) y `TIR.NO.PER` (XIRR), las cuales toman en cuenta las fechas exactas de cada flujo.

- **Q: ¿Por qué la IA me dice que el VAN es negativo pero la TIR es positiva?**
  - A: Un VAN negativo significa que el proyecto no supera tu "Tasa de Descuento" (tu rentabilidad mínima exigida). Es muy posible tener una TIR positiva (ej. 5%) pero un VAN negativo si tú exigías ganar al menos un 10%. En este caso, la recomendación financiera estándar es rechazar el proyecto porque no cumple tus expectativas mínimas de ganancia.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Rol de CFO (Director Financiero):** Al asignar este rol, la IA no te habla como un profesor de matemáticas aburrido, sino con la perspectiva práctica de negocios de un directivo.
2. **Contexto Estructurado:** Dar las celdas exactas (B2, B3~B7, C2) permite que la IA te devuelva una fórmula de Excel lista para copiar y pegar sin que tengas que deducir los rangos manualmente.
3. **Restricción Crítica (VNA):** Aborda proactivamente el "error de novato" más frecuente en Excel con la función VNA, asegurando que el cálculo del valor temporal del dinero sea 100% preciso.

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

```text
Dime cómo calcular el VAN y la TIR en Excel.
```

### ✅ Después (Resultado)

```text
### 📊 Fórmulas de Excel para tu Análisis de Inversión

**1. Cálculo del VAN (Valor Actual Neto)**
- **Fórmula a usar:** `=B2 + VNA(C2; B3:B7)`  *(Nota: En versiones en inglés de Excel usa `NPV`)*
- **Interpretación:** La función VNA descuenta los flujos de caja del Año 1 al 5. La inversión inicial (B2) se suma por fuera de la función porque ocurre en el Año 0.
- **Criterio de Decisión:** Como el resultado del VAN es **> 0** (mayor que cero), el proyecto generará valor para la empresa. **Recomendación: Invertir.**

**2. Cálculo de la TIR (Tasa Interna de Retorno)**
- **Fórmula a usar:** `=TIR(B2:B7)` *(Nota: En versiones en inglés usa `IRR`)*
- **Interpretación:** Calcula la rentabilidad porcentual promedio anual que ofrece el proyecto por sí mismo.
- **Criterio de Decisión:** Si la TIR (ej. 15,2%) es **> a la Tasa de Descuento (10%)**, el retorno esperado supera el coste de oportunidad. **Recomendación: Invertir.**

**💡 Resumen Ejecutivo:**
El VAN te dice **cuánto dinero** extra ganarás en valor actual, mientras que la TIR te dice el **porcentaje de rendimiento**. Cuando ambos indicadores son positivos (VAN > 0 y TIR > Tasa de Descuento), el proyecto es luz verde.
```

---

## 🎯 Conclusión

La inversión no debe basarse en corazonadas, sino en matemáticas aplicadas a los negocios. Evita cometer errores multimillonarios y asegúrate de respaldar tus decisiones con cálculos precisos y profesionales.

¡Ahora, a tomar decisiones rentables y salir temprano del trabajo! 🍷
