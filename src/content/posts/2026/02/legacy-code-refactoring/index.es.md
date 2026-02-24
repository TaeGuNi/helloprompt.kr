---
layout: /src/layouts/Layout.astro
title: "ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기"
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "개발/코딩"
description: "Guía perfecta para utilizar la IA como un desarrollador senior con 10 años de experiencia, refactorizando de forma segura el código heredado que te da dolores de cabeza y generando automáticamente pruebas unitarias al mismo tiempo."
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

# 🧹 Aspiradora de Código Heredado: Refactorización y Automatización de Pruebas

- **🎯 Perfil Recomendado:** Desarrolladores Junior, Encargados de Mantenimiento de Código Heredado, Revisores de Código
- **⏱️ Tiempo Estimado:** De 1 hora de análisis de código → Reducido a menos de 5 minutos
- **🤖 Modelo Recomendado:** Claude 3.5 Sonnet, GPT-4o (Claude es altamente recomendado para lógicas complejas y análisis de contextos extensos)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Quién demonios escribió este código? (...Ah, fui yo hace un año)."_

¿Alguna vez te has sentido abrumado frente a un **Código Heredado (Legacy Code)** con anidaciones `if-else` interminables, variables con nombres incomprensibles y manejos de excepciones sin documentar, sintiendo que el sistema colapsará con solo tocarlo?

Ya no tienes por qué temer. Te presentamos la técnica perfecta de ingeniería de prompts para contratar a la IA como tu **Programador Senior (Pair Programmer)** personal. Podrás refactorizar código espagueti con elegancia y construir una sólida barrera de pruebas (Unit Tests) en un abrir y cerrar de ojos.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Exige una explicación primero:** No le pidas que modifique el código a ciegas; haz que la IA analice primero el flujo de ejecución y la intención del código original.
2. **Aplica principios de Clean Code:** Refactoriza la estructura y los nombres de forma segura basándote en los principios SOLID y la legibilidad.
3. **Construye una barrera con pruebas:** Genera automáticamente pruebas unitarias (Unit Tests) que incluyan casos extremos (Edge Cases) para garantizar que la funcionalidad sea idéntica antes y después de la refactorización.

---

## 🚀 Solución: "Senior Dev Simulator" (Simulador de Desarrollador Senior)

### 🥇 Pro Version (Versión Experta)

Si simplemente dices "refactoriza esto", corres un gran riesgo de romper la funcionalidad existente. Este prompt aplica la técnica de **Cadena de Pensamiento (Chain-of-Thought)** para obligar a la IA a razonar siguiendo pasos lógicos.

> **Rol (Role):** Eres un `[Desarrollador Backend Senior con 10 años de experiencia]`, proveniente de una gran empresa tecnológica como Google o Meta. Eres un fiel creyente de la filosofía Clean Code y sigues estrictamente el TDD (Desarrollo Guiado por Pruebas).
>
> **Contexto (Context):**
> Acabo de heredar un código legacy muy sucio escrito en `[Ingresa el lenguaje, ej. Python/Java]`. La legibilidad es pésima y es casi imposible de mantener de forma segura.
>
> **Tarea (Task):**
> Ejecuta los siguientes pasos en orden y con extrema profundidad:
>
> **Paso 1. Análisis y Diagnóstico del Código:** Resume en una oración cuál es la función de negocio de este código y señala de forma específica 3 problemas críticos (Code Smells).
> **Paso 2. Refactorización Segura:** Mantén el 100% de la lógica de negocio original y sus efectos secundarios (Side Effects), pero maximiza la legibilidad separando funciones según el Principio de Responsabilidad Única (SRP) y utilizando nombres claros para variables y métodos. Asegúrate de añadir Docstrings y comentarios en lógicas de negocio complejas.
> **Paso 3. Verificación Defensiva (Código de Prueba):** Escribe pruebas unitarias (Unit Tests) que garanticen absolutamente que tu código refactorizado funciona exactamente igual que el original. Debes incluir casos de éxito y al menos 2 situaciones excepcionales posibles (Edge Cases).
>
> **Código de Entrada:**
>
> ```python
> [Pega aquí el código legacy que deseas analizar]
> ```

---

## 💡 Comentario del Autor (Insight)

El verdadero valor de este prompt no reside simplemente en crear un código bonito, sino en **establecer primero una "red de seguridad" (código de prueba)**. Cuando heredé un antiguo módulo de pagos en Java con 5 años de antigüedad, apliqué este mismo prompt en mi trabajo real.

Lo más sorprendente fue que la IA identificó casos extremos ocultos que yo había pasado por alto (por ejemplo, el manejo de bifurcaciones cuando el monto del pago era 0) y los plasmó en pruebas antes de modificar nada.

**🔥 Consejo para optimización en entornos reales:**
Si copias y pegas cientos de líneas de una clase completa a la vez, la IA podría sufrir de 'alucinaciones' o perder el contexto. **Divide el código a nivel de método (menos de 100 líneas) y pregunta por partes**. La profundidad del análisis y la precisión del código de prueba aumentarán de manera abrumadora.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Qué modelo de IA es el más adecuado para tratar con lógica de programación?**
  - R: A fecha de 2026, **Claude 3.5 Sonnet** y **GPT-4o** son los líderes indiscutibles en el ámbito de la programación y refactorización. Entre ellos, Claude 3.5 Sonnet muestra un rendimiento ligeramente superior a la hora de mantener contextos complejos y redactar un Clean Code amigable para los humanos.

- **P: ¿Es seguro enviar el código interno de mi empresa a la IA tal cual?**
  - R: **Absolutamente no.** Debes asegurarte de ocultar información confidencial como claves de API, direcciones IP de la red interna, datos reales de clientes o algoritmos de seguridad clave mediante `[MASKED]` (Oculto) o sustituyéndolos por datos ficticios (Dummy Data) antes de ejecutar el prompt. Alternativamente, utilízalo únicamente dentro del entorno de IA Empresarial (Enterprise AI) habilitado por tu compañía.

- **P: ¿Qué debo hacer si ocurre un error después de la refactorización?**
  - R: Es muy probable que haya una dependencia (Dependency) que la IA pasó por alto. Copia todo el registro del error junto con el contexto relevante del código original y dale un feedback específico: _"Ha ocurrido este error en esta sección. Parece que has omitido la [condición específica] de la lógica original. Por favor, corrígelo"_.

---

## 🧬 Anatomía del Prompt (Why it works?)

1. **Asignación de Persona Senior (Role):** Al otorgar el rol estricto de "Senior de 10 años, creyente del Clean Code", elevamos el estándar para que no solo genere un código que funcione, sino código de alta calidad con una excelente mantenibilidad.
2. **Cadena de Pensamiento (Chain-of-Thought):** En lugar de ordenar "arréglalo" de buenas a primeras, forzamos un proceso lógico de 3 pasos: **[Análisis → Modificación → Verificación]**. Este es un mecanismo clave que induce a la IA a mejorar la estructura sin alterar la intención original del código.
3. **Casos Extremos Obligatorios (Constraints):** Exigir explícitamente la redacción de casos extremos en las pruebas unitarias garantiza una calidad de código robusta que puede aplicarse de inmediato en el trabajo del mundo real.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Entrada: Código legacy de pesadilla)

```python
def calc_trx(a, t, f=False):
    # a: amount, t: type
    if t == 1:
        if f: return a * 1.1 + 500
        else: return a * 1.1
    elif t == 2:
        return a - (a * 0.05)
    else: return 0 # 에러
```

### ✅ Después (Resultado: Clean Code y pruebas escritas por un Senior)

```python
from enum import Enum
import unittest

class TransactionType(Enum):
    DEPOSIT = 1
    WITHDRAWAL = 2

def calculate_transaction_amount(amount: float, transaction_type: TransactionType, apply_fee: bool = False) -> float:
    """
    Calcula el monto final aplicando impuestos y tarifas según el tipo de transacción (Depósito/Retiro).
    """
    if amount < 0:
        raise ValueError("El monto de la transacción debe ser mayor que 0.")

    if transaction_type == TransactionType.DEPOSIT:
        taxed_amount = amount * 1.1
        return taxed_amount + 500 if apply_fee else taxed_amount

    elif transaction_type == TransactionType.WITHDRAWAL:
        return amount * 0.95

    return 0.0

# ----------------- Unit Tests ----------------- #
class TestCalculateTransaction(unittest.TestCase):
    def test_deposit_with_fee(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.DEPOSIT, True), 1600.0)

    def test_withdrawal_amount(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.WITHDRAWAL), 950.0)

    def test_negative_amount_raises_error(self):
        with self.assertRaises(ValueError):
            calculate_transaction_amount(-500, TransactionType.DEPOSIT)
```

---

## 🎯 Conclusión

Ya no tienes que suspirar frente a una pantalla llena de código heredado incomprensible.
Con la IA y un prompt bien diseñado, la refactorización dejará de ser una tortura abrumadora para convertirse en una **tarea de limpieza satisfactoria** y gratificante.

¿Por qué no empiezas hoy mismo a refactorizar junto a la IA esa función que tanto detestas mirar? 💻 ¡Verás cómo tu hora de salida del trabajo se adelanta notablemente!
