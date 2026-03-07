---
layout: /src/layouts/Layout.astro
title: "Calendario de Pago de Préstamos: Cuota Constante vs. Amortización Constante"
author: "Jay"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatización de Trabajo"
description: "Crea tu propia plantilla en Excel para calcular los intereses de tu préstamo al instante y deja de depender de los simuladores bancarios."
tags: ["Excel", "InterésPréstamo", "FunciónFinanciera", "PMT"]
---

## 📝 Calendario de Pago de Préstamos: Cuota Constante vs. Amortización Constante

- **🎯 Recomendado para:** Oficinistas, asesores financieros y cualquier persona con una hipoteca o préstamo personal
- **⏱️ Tiempo de ejecución:** De 30 minutos buscando simuladores → 1 minuto en Excel
- **🤖 Modelo recomendado:** Cualquier IA conversacional (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"¿Pagas 1.000 € al mes de hipoteca y no sabes qué parte se destina a intereses y cuánto amortiza tu deuda? Deja de regalar dinero al banco por falta de visibilidad financiera."_

Al solicitar un préstamo, nos enfrentamos principalmente a dos sistemas de pago: el de **Cuota Constante** (el popular sistema francés, donde la mensualidad nunca cambia) y el de **Amortización Constante** (donde la cuota va disminuyendo con el tiempo). ¿Cuál te beneficia más? En lugar de confiar ciegamente en los simuladores genéricos y opacos de los bancos, puedes diseñar tu propio cuadro de amortización utilizando las funciones financieras nativas de Excel (`PAGO`, `PAGOINT`, `PAGOPRIN`). De este modo, podrás visualizar de inmediato el impacto real de los intereses a largo plazo y tomar decisiones más inteligentes.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Calcula de forma automática tu cuota mensual total (capital + intereses) utilizando la función `PAGO` (`PMT`).
2. Desglosa qué porcentaje de tu dinero paga intereses y qué parte reduce tu deuda con `PAGOINT` (`IPMT`) y `PAGOPRIN` (`PPMT`).
3. Genera un cuadro de amortización completo para observar cómo disminuye tu saldo pendiente en cada mensualidad (desde la cuota 1 hasta la 360).

---

## 🚀 La Solución: "Calculadora Automática de Préstamos"

### 🥉 Versión Básica (Basic Prompt)

Utiliza este prompt cuando necesites estructurar un cuadro de amortización rápidamente sin profundizar en demasiados detalles técnicos.

> **Rol:** Eres un experto financiero y un especialista avanzado en Excel.
>
> **Solicitud:** Crea una plantilla en Excel para calcular los intereses y la amortización de un préstamo. Explica paso a paso cómo utilizar las funciones financieras básicas para no tener que depender de los simuladores del banco.

### 🥇 Versión Experta (Pro Prompt)

Úsala cuando necesites configurar un cuadro de amortización extremadamente preciso, escalable y con fórmulas exactas listas para copiar y pegar en tu hoja de cálculo.

> **Rol (Role):** Eres un consultor financiero experto y un analista de datos especializado en Excel.
>
> **Contexto (Context):**
>
> - Situación: Necesito crear un cuadro de amortización de préstamos utilizando el sistema de **Cuota Constante** (método francés) en Excel.
> - Datos iniciales:
>   - Importe del Préstamo: 100.000 € (Celda B1)
>   - Tipo de Interés Anual: 4,5% (Celda B2)
>   - Plazo de Amortización: 10 Años o 120 Meses (Celda B3)
>
> **Tarea (Task):**
>
> 1. Proporciona la **fórmula con la función `PAGO` (`PMT`)** para calcular la cuota mensual total (capital + intereses).
> 2. Proporciona las fórmulas para calcular la porción de **Intereses con `PAGOINT` (`IPMT`)** y la porción de **Capital con `PAGOPRIN` (`PPMT`)** para el mes `[Número de Mes]` (por ejemplo, el mes 1).
> 3. Asegúrate de aplicar correctamente las **referencias absolutas (`$`)** para poder arrastrar la fórmula hacia abajo y autocompletar desde la cuota 1 hasta la 120.
>
> **Restricciones (Constraints):**
>
> - Explica las funciones utilizando la nomenclatura de Excel en español (`PAGO`, `PAGOINT`, `PAGOPRIN`).
> - Recuerda dividir el tipo de interés anual entre 12 y multiplicar los años por 12, ya que los pagos son mensuales.
> - Presenta las fórmulas finales en bloques de código para que resulte fácil copiarlas y pegarlas.
>
> **Advertencia (Warning):**
>
> - Si existe alguna particularidad sobre los signos (positivo/negativo) en las fórmulas de Excel, explícalo con claridad para evitar confusiones. No inventes funciones que no existan.

---

## 💡 Comentario del Autor (Insight)

La verdadera magia de este prompt no reside únicamente en obtener unas fórmulas de Excel, sino en **recuperar el control total de tus finanzas**. Los simuladores web que ofrecen las entidades bancarias suelen ser cajas negras que no te permiten proyectar escenarios alternativos (como, por ejemplo, realizar amortizaciones anticipadas).

Al utilizar esta plantilla generada por IA, descubrirás rápidamente que durante los primeros años de un préstamo a tipo fijo (bajo el sistema francés), la mayor parte de tu cuota se destina casi en exclusiva a pagar intereses. Tener este desglose en Excel te permite añadir una columna de "Amortización Anticipada" simulada y descubrir cómo podrías ahorrar miles de euros a largo plazo. Se trata de una herramienta indispensable que deberías consultar siempre antes de firmar cualquier hipoteca o crédito.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Estas fórmulas funcionan igual en Google Sheets?**
  - A: Sí, absolutamente. Las funciones `PAGO` (`PMT`), `PAGOINT` (`IPMT`) y `PAGOPRIN` (`PPMT`) mantienen la misma sintaxis tanto en Excel como en Google Sheets. Solo debes asegurarte de usar la configuración regional correcta en tu documento (utilizando comas o puntos para separar los decimales según corresponda a tu país).

- **Q: ¿Por qué el resultado de la función PAGO aparece en negativo?**
  - A: Por convención contable, Excel considera los pagos de préstamos como un "flujo de salida de efectivo" (dinero que sale de tu bolsillo), por lo que siempre devuelve un valor negativo. Si prefieres visualizarlo en positivo, simplemente añade un signo menos `-` delante de la función (ejemplo: `=-PAGO(...)`) o aplícale el signo negativo al importe inicial del préstamo en tu celda de referencia.

- **Q: ¿Puedo adaptar este modelo si mi préstamo tiene un interés variable?**
  - A: Este modelo está diseñado asumiendo un tipo de interés fijo. Para adaptarlo a un interés variable, necesitarás estructurar tu Excel en distintos bloques temporales, actualizando la celda del Tipo de Interés Nominal (TIN) en los meses donde toque revisión (por ejemplo, cada 12 meses) y recalculando la nueva cuota sobre el capital pendiente que tengas en ese preciso momento.

---

## 🧬 Anatomía del Prompt (Why it works?)

1.  **Contexto con Referencias Exactas:** Al indicarle a la IA exactamente en qué celdas concretas (B1, B2, B3) se encuentran tus datos, el modelo te devuelve fórmulas 100% listas para copiar y pegar. Esto elimina por completo el tedioso paso de tener que adaptar las referencias de forma manual.
2.  **Prevención de Errores Comunes (Constraints):** Recordarle explícitamente a la inteligencia artificial que divida el tipo de interés anual entre 12 evita el error más típico al crear cuadros de amortización: calcular intereses anuales para pagos mensuales, lo que resultaría en una cuota mensual desproporcionadamente astronómica.
3.  **Localización de Nomenclatura:** Al exigir que las fórmulas se entreguen en español (`PAGO` en lugar del inglés `PMT`), garantizamos que funcionen de forma nativa y directa en las versiones hispanohablantes de Excel, evitándonos el molesto error de `#¿NOMBRE?`.

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

Visualizar con exactitud cuánto dinero le estás regalando al banco mes a mes puede resultar impactante al principio, pero es el primer paso —y el más importante— para empezar a tomar decisiones financieras verdaderamente inteligentes. Dibuja tu propio mapa de amortización y planifica cómo y cuándo alcanzarás tu libertad financiera.

¡Ahora, a optimizar esos ahorros y salir temprano de la oficina! 🍷
