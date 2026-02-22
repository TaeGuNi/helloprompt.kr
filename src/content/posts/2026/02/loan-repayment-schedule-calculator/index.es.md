---
layout: /src/layouts/Layout.astro
title: "Calendario de Pago de Préstamos: Principal e Interés Igual vs Principal Igual"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatización de Trabajo"
description: "Plantilla para calcular los intereses de tu préstamo directamente en Excel, sin depender de simuladores bancarios."
tags: ["Excel", "InterésPréstamo", "FunciónFinanciera", "PMT"]
---

# 📝 Calendario de Pago de Préstamos: Cuota Constante vs. Amortización Constante

- **🎯 Recomendado para:** Oficinistas, planificadores financieros, personas con préstamos hipotecarios o personales
- **⏱️ Tiempo de ejecución:** De 30 minutos buscando simuladores → a 1 minuto en Excel
- **🤖 Modelo recomendado:** Cualquier IA conversacional (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"¿Pagando 1.000€ al mes de hipoteca y no sabes cuánto va a los intereses y cuánto amortiza tu deuda? Deja de regalar dinero por falta de visibilidad."_

A la hora de pedir un préstamo, existen principalmente dos sistemas de amortización: **'Cuota Constante'** (sistema francés, donde pagas lo mismo cada mes) y **'Amortización Constante'** (donde la cuota baja con el tiempo). ¿Cuál te conviene más? En lugar de depender de simuladores bancarios genéricos, puedes crear tu propio cuadro de amortización usando las funciones financieras de Excel (`PAGO`, `PAGOINT`, `PAGOPRIN`). Así, verás de un vistazo el impacto total de los intereses a largo plazo.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Calcula automáticamente la cuota mensual total (Capital + Intereses) con la función `PAGO` (`PMT`).
2. Desglosa qué parte va a los intereses y qué parte al capital con `PAGOINT` (`IPMT`) y `PAGOPRIN` (`PPMT`).
3. Genera un cuadro de amortización completo para visualizar cómo disminuye tu deuda en cada cuota (de la 1 a la 360).

---

## 🚀 La Solución: "Calculadora de Préstamos Automática"

### 🥉 Basic Version (Versión Básica)

Úsala cuando necesites crear un cuadro de amortización rápidamente sin entrar en muchos detalles.

> **Rol:** Eres un experto financiero y especialista en Excel avanzado.
> **Solicitud:** Crea una plantilla de cálculo de intereses y amortización de préstamos en Excel, explicando paso a paso cómo usar las funciones financieras básicas para no depender de simuladores bancarios.

<br>

### 🥇 Pro Version (Versión Experta)

Úsala cuando necesites configurar un cuadro de amortización preciso, escalable y con fórmulas exactas listas para copiar.

> **Rol (Role):** Eres un Consultor Financiero Experto y un Analista de Datos especializado en Excel.
>
> **Contexto (Context):**
>
> - Situación: Necesito crear un cuadro de amortización de préstamos utilizando el sistema de **Cuota Constante** (método francés) en Excel.
> - Datos iniciales:
>   - Monto del Préstamo: 100.000 € (Celda B1)
>   - Tasa de Interés Anual: 4,5% (Celda B2)
>   - Plazo de Amortización: 10 Años o 120 Meses (Celda B3)
>
> **Tarea (Task):**
>
> 1. Proporciona la **fórmula con la función `PAGO` (`PMT`)** para calcular la cuota mensual total (Capital + Intereses).
> 2. Proporciona las fórmulas para calcular la porción de **Intereses con `PAGOINT` (`IPMT`)** y la porción de **Capital con `PAGOPRIN` (`PPMT`)** para el mes "N" (ej., mes 1).
> 3. Asegúrate de aplicar **referencias absolutas (`$`)** de manera correcta para que pueda arrastrar la fórmula hacia abajo y autocompletar desde la cuota 1 hasta la 120.
>
> **Restricciones (Constraints):**
>
> - Explica las funciones utilizando la nomenclatura de Excel en español (`PAGO`, `PAGOINT`, `PAGOPRIN`).
> - Recuerda dividir la tasa de interés anual entre 12 y multiplicar los años por 12, ya que los pagos son mensuales.
> - Presenta las fórmulas finales en bloques de código para facilitar el copiar y pegar.
>
> **Advertencia (Warning):**
>
> - Si existe alguna particularidad sobre los signos (positivo/negativo) en las fórmulas de Excel, explícalo claramente para evitar confusiones. No inventes funciones que no existen.

---

## 💡 Comentario del Autor (Insight)

La verdadera magia de este prompt no es solo conseguir unas fórmulas de Excel, sino **recuperar el control de tus finanzas**. Los simuladores web de los bancos suelen ser opacos y no te permiten proyectar escenarios alternativos (como hacer amortizaciones anticipadas).

Al usar esta plantilla generada por IA, descubrirás que en los primeros años de un préstamo a tipo fijo (sistema francés), una gran parte de la cuota se destina exclusivamente a pagar intereses. Tener esto en un Excel te permite añadir una columna de "Amortización Anticipada" simulada y ver cómo ahorrar miles de euros a largo plazo. Es una herramienta indispensable antes de firmar cualquier hipoteca o crédito.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Estas fórmulas funcionan igual en Google Sheets?**
  - A: Sí, absolutamente. Las funciones `PAGO` (`PMT`), `PAGOINT` (`IPMT`) y `PAGOPRIN` (`PPMT`) tienen la misma sintaxis tanto en Excel como en Google Sheets. Solo asegúrate de usar la configuración regional adecuada de tu hoja de cálculo (comas o puntos para separar los decimales).

- **Q: ¿Por qué el resultado de la función PAGO sale en negativo?**
  - A: Por convención contable, Excel considera los pagos de préstamos como un "flujo de salida de caja" (dinero que sale de tu bolsillo), por lo que devuelve un valor negativo. Si quieres verlo en positivo, simplemente añade un signo menos `-` delante de la fórmula (ej: `=-PAGO(...)`) o añade el signo negativo al monto inicial del préstamo.

- **Q: ¿Puedo adaptar esto si mi préstamo tiene interés variable?**
  - A: Este modelo asume un tipo de interés fijo. Para interés variable, necesitarás estructurar el Excel en bloques, actualizando la celda de la tasa de interés (TIN) en los meses donde se revise tu préstamo (ej: cada 12 meses) y recalculando la nueva cuota sobre el capital pendiente en ese momento.

---

## 🧬 Anatomía del Prompt (Why it works?)

1.  **Contexto con Referencias Exactas:** Al decirle a la IA exactamente en qué celdas (B1, B2, B3) están los datos, te devuelve fórmulas 100% listas para copiar y pegar, eliminando el paso de tener que adaptar las referencias tú mismo.
2.  **Prevención de Errores Comunes (Constraints):** Recordarle explícitamente a la IA que divida el tipo de interés anual entre 12 evita el error más típico al crear cuadros de amortización: calcular intereses anuales para pagos mensuales, lo que daría una cuota astronómica.
3.  **Localización de Nomenclatura:** Al exigir las fórmulas en español (`PAGO` en lugar de `PMT`), aseguramos que funcionen directamente en las versiones en español de Excel sin dar molestos errores de `#¿NOMBRE?`.

---

## 📊 Prueba: Before & After

### ❌ Before (Entrada)

```text
¿Cómo calculo la cuota de un préstamo en Excel?
```

### ✅ After (Resultado)

```text
### 🏦 Fórmulas para tu Cuadro de Amortización en Excel

**1. Cuota Mensual Constante (Capital + Intereses)**
=PAGO($B$2/12; $B$3*12; -$B$1)
*Resultado: 1.036,38 € aprox. (Esta es tu cuota mensual fija).*

**2. ¿Cuánto pagas de intereses este mes?**
Asumiendo que el número de la cuota actual (1, 2, 3...) está en la celda A5:
=PAGOINT($B$2/12; A5; $B$3*12; -$B$1)

**3. ¿Cuánto capital amortizas este mes?**
=PAGOPRIN($B$2/12; A5; $B$3*12; -$B$1)

**💡 Análisis del Flujo:**
Si arrastras estas fórmulas, notarás que en las cuotas iniciales el valor de `PAGOINT` (Intereses) es muy alto y `PAGOPRIN` (Capital) es bajo. Esta proporción se invertirá a medida que te acerques a la cuota final.
```

---

## 🎯 Conclusión

Visualizar exactamente cuánto dinero le estás regalando al banco mes a mes puede ser un shock al principio, pero es el primer y más importante paso para tomar decisiones financieras inteligentes. Dibuja tu propio mapa de amortización y planea cómo y cuándo conseguirás tu libertad financiera.

¡Ahora, a optimizar esos ahorros y salir temprano del trabajo! 🍷
