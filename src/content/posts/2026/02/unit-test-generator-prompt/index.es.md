---
layout: /src/layouts/Layout.astro
title: "Escribe código de prueba en 5 minutos con este Prompt"
author: "Jay"
date: "2026-02-07T09:10:33.155Z"
updatedDate: "2026-02-07T09:10:33.155Z"
category: "Codificación/Desarrollo"
description: "Delega a la IA la tediosa tarea de escribir Unit Tests. Descubre el secreto para alcanzar el 100% de cobertura en solo 5 minutos."
tags: ["테스트코드", "TDD", "Jest", "PyTest", "QA"]
image: "/images/hooks/unit-test-generator-prompt.jpg"
---

## 📝 Escribe código de prueba en 5 minutos con este Prompt

- **🎯 Dirigido a:** Desarrolladores junior, ingenieros frontend/backend, QA
- **⏱️ Tiempo de ejecución:** Reducción de 30 minutos → 5 minutos
- **🤖 Mejor rendimiento:** Modelos especializados en código (Claude 3.5 Sonnet, GPT-4o, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"La implementación es mañana, apenas tengo tiempo para la lógica de negocio principal, ¿cuándo se supone que debo escribir el código de prueba?"_

Cualquier desarrollador ha sentido ese escalofrío alguna vez. Es viernes por la tarde, acabas de desplegar una nueva funcionalidad en producción con mucha ambición, y de repente surge un error crítico en el lugar menos esperado. Abres el código para aplicar un hotfix, pero con una lógica de negocio tan extensa, ni siquiera es fácil identificar dónde ocurrió el problema. El arrepentimiento de _"Si tan solo hubiera escrito pruebas minuciosas..."_ llega demasiado tarde. Todos conocemos la importancia vital del código de prueba. Conceptos como Clean Architecture, TDD y 100% de cobertura siempre aceleran el corazón de un desarrollador.

Sin embargo, la realidad es cruel. Cuando el lanzamiento es mañana y estás abrumado por los requisitos de planificación, son muy pocos los desarrolladores que pueden permitirse el lujo de invertir dos o tres veces más tiempo en escribir pruebas que en la propia lógica principal. Especialmente cuando se trata de código legado con extensas dependencias de APIs externas o lógica fuertemente ligada a bases de datos, configurar docenas de líneas de código de <b>Mocking</b> y boilerplate puede resultar agotador.

Al final, tras cansarte de pensar en los complicados casos de borde (Edge Cases), terminas haciendo un compromiso peligroso: "Por ahora, confiemos en las pruebas manuales del equipo de QA y sigamos adelante". Esta <b>deuda técnica (Technical Debt)</b> acumulada se convierte en un lastre gigante que acaba haciendo imposible incluso el refactorizado. Comienza la ansiedad de temer que cada vez que toques algo, otra función se rompa. Es hora de detener este circo de caminar por la cuerda floja sin red de seguridad.

Ahora, olvida todo ese proceso doloroso y las dudas aburridas; simplemente copia y pega la lógica principal en la que tanto has trabajado. Desde los casos excepcionales más sutiles que un desarrollador suele pasar por alto hasta las líneas de defensa contra Null Pointers, <b>la IA escribirá instantáneamente código de pruebas unitarias (Unit Test) impecable y funcional</b>.

Solo 5 minutos. Desde la creación de complejos objetos Mock hasta la obtención de escenarios de prueba limpios bajo el patrón GIVEN-WHEN-THEN, contrata a un ingeniero senior de QA perfeccionista como tu compañero de Pair Programming. <b>Llena perfectamente los puntos ciegos</b> que la intuición humana suele ignorar con una meticulosidad mecánica. Te ofrecemos la experiencia gratificante de pulsar el botón 'Merge' con la tranquilidad mental que da una cobertura del 100%.

---

## 📊 Prueba: Resultados contundentes (Antes y Después)

### ❌ Antes (El dolor que sufríamos)

Ese momento de escribir lógica que causa el dolor de un lienzo en blanco frustrante o un método manual descuidado. Una lógica peligrosa dejada a su suerte sin código de prueba.

```javascript
// 단순한 입력 코드 예시
function calculateDiscount(price, discountRate) {
  if (price < 0 || discountRate < 0) {
    throw new Error("유효하지 않은 값입니다.");
  }
  if (discountRate > 100) {
    return 0; // 100% 이상 할인은 무료
  }
  return price - price * (discountRate / 100);
}
```

### ✅ Después (Transformación perfecta)

!["Escribe código de prueba en 5 minutos con este Prompt"](/images/hooks/unit-test-generator-prompt.jpg)

```javascript
describe("calculateDiscount 함수 테스트", () => {
  // 1. 정상 동작 테스트 (Happy Path)
  it("정상적인 가격과 할인율이 주어지면 할인이 적용된 가격을 반환해야 한다", () => {
    // GIVEN
    const price = 10000;
    const discountRate = 20;
    // WHEN
    const result = calculateDiscount(price, discountRate);
    // THEN
    expect(result).toBe(8000);
  });

  // 2. 경계값 테스트 (Edge Case)
  it("할인율이 100%를 초과하면 0원을 반환해야 한다", () => {
    // GIVEN & WHEN
    const result = calculateDiscount(10000, 110);
    // THEN
    expect(result).toBe(0);
  });

  // 3. 예외 처리 테스트 (Failure Case)
  it("가격이 음수일 경우 에러를 던져야 한다", () => {
    // GIVEN, WHEN & THEN
    expect(() => calculateDiscount(-5000, 10)).toThrow(
      "유효하지 않은 값입니다."
    );
  });
});
```

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Del Happy Path al Edge Case:** Genera automáticamente escenarios de prueba que verifican no solo el flujo normal, sino también situaciones excepcionales difíciles de predecir para la mente humana.
2. **Personalizado para tu Framework:** Crea código listo para ejecutar reflejando con precisión la sintaxis del framework de pruebas de tu proyecto (Jest, PyTest, JUnit, etc.).
3. **Automatización de Mocking Complejo:** La IA identifica por sí misma las llamadas a APIs externas o dependencias de bases de datos, configurando perfectamente los datos Mock y Stubs adecuados para cada situación.

---

## 🚀 Así es como escriben los verdaderos expertos

Este es un prompt perfeccionado tras docenas de pruebas y errores. Copia el siguiente prompt y rellena los paréntesis en la sección `[variable]` según tu situación para aplicarlo inmediatamente al trabajo real.

### 🥉 Versión Básica (Basic Version)

Úsala cuando quieras establecer rápidamente la estructura básica de las pruebas.

> **Rol:** Eres un ingeniero senior de QA con mentalidad perfeccionista y experto en automatización de pruebas.
>
> **Petición:** Analiza el siguiente código y escribe código de pruebas unitarias (Unit Test) que incluya casos de excepción.

### 🥇 Versión Pro (Pro Version)

Emplea este prompt en tu trabajo cuando necesites validar lógica de negocio compleja, realizar mocks de dependencias difíciles y alcanzar una cobertura de prueba perfecta.

> **Rol (Role):** Eres un ingeniero senior de QA con 10 años de experiencia que no permite ni el más mínimo error y eres experto en automatización de pruebas.
>
> **Situación (Context):**
>
> - Antecedentes: Actualmente estoy desarrollando un proyecto en un entorno `[Lenguaje y Framework de uso (ej: TypeScript, Jest)]`.
> - Objetivo: Debo escribir pruebas unitarias (Unit Test) muy minuciosas para garantizar totalmente la fiabilidad de la lógica de negocio recién implementada y alcanzar el 100% de cobertura (Test Coverage).
>
> **Tarea (Task):**
>
> 1. Analiza profundamente el código proporcionado y organiza primero una **lista de casos de prueba** en formato de lista Markdown. (Debes incluir el Happy Path, casos de excepción y fallo, y análisis de valores límite).
> 2. Basándote en `[Librería de pruebas a usar (ej: Jest)]`, escribe código de prueba impecable que pueda copiarse y ejecutarse de inmediato.
> 3. Si existen dependencias externas en el código (llamadas a API, conexiones a DB, funciones de fecha y hora, etc.), realiza el Mocking correspondiente de forma perfecta.
> 4. Aplica el patrón GIVEN-WHEN-THEN dentro de cada bloque `it` o `test` e incluye comentarios claros.
>
> **Código:**
>
> `[Pega aquí el código que quieres probar]`
>
> **Restricciones (Constraints):**
>
> - El resultado debe entregarse dentro de un bloque de código Markdown.
> - Escribe las descripciones de las pruebas (Description) en oraciones claras en español que cualquiera pueda entender. (Ej: "Debe lanzar un error si se intenta dividir por cero").
> - No omitas partes del código (sin placeholders); proporciónalo en su forma completa y ejecutable tras copiarlo.
>
> **Advertencia (Warning):**
>
> - No inventes librerías o métodos que no existan. (Absolutamente prohibidas las alucinaciones).

---

## 💡 Comentario del autor (Insight & How to use)

Este prompt es mucho más que un simple autocompletado que "escribe las pruebas por ti"; es un potente <b>socio de Garantía de Calidad (QA)</b>. Especialmente, el primer paso indicado en las instrucciones, <b>'obtener una lista de casos de prueba'</b>, es el verdadero valor central y diferencial de este prompt. Antes de que la IA escriba código a ciegas, puedes verificar visualmente en una lista Markdown cómo ha analizado e interpretado dicha lógica de negocio. Esto permite defenderse preventivamente contra casos de borde críticos (Edge Cases: entradas nulas extremas, discrepancias de tipos inesperadas, problemas de concurrencia, etc.) que incluso el propio desarrollador podría no haber considerado, cerrando cualquier brecha lógica.

En un entorno real, aunque se use el mismo framework (ej: Jest, JUnit, PyTest), el <b>método de Mocking</b> o el estilo de código preferido varía inevitablemente según el equipo de desarrollo o las convenciones internas. Algunos equipos prefieren `jest.spyOn`, mientras que otros optan por la creación de objetos falsos (Fake Objects) mediante inyección de dependencias (DI). Si el código generado por la IA no encaja con los estándares estrictos de tu proyecto, intenta añadir un solo snippet en la sección de restricciones del prompt: <b>`[Ejemplo de código de Mocking de nuestro equipo]`</b>. Como los modelos de IA actuales tienen una capacidad de aprendizaje Few-Shot excelente, aprenderán instantáneamente el estilo y la sintaxis únicos de tu equipo para producir código perfecto que se puede integrar directamente sin modificaciones adicionales.

Además, el código de prueba no es algo que se escribe una vez y se olvida, sino un documento vivo que debe mantenerse cada vez que cambia la lógica principal. Este prompt está diseñado para forzar el patrón estándar de la industria <b>GIVEN-WHEN-THEN</b> mediante comentarios. Esto no es solo para que el código se vea bonito. Es la herramienta de comunicación más poderosa para ayudarte a ti mismo en el futuro, o a otros compañeros que hereden el código meses después, a comprender de forma intuitiva y en un segundo la intención y el flujo de una lógica compleja.

Al escribir pruebas, inevitablemente te encontrarás con conexiones a bases de datos o comunicaciones con APIs de terceros. Los principiantes suelen cometer el error de escribir pruebas de integración (Integration Test) que llaman a la DB o API real. Sin embargo, este prompt incluye la instrucción estricta de <b>'procesar perfectamente el Mocking de dependencias externas'</b>. La IA detecta inteligentemente las secciones donde ocurre comunicación de red o tareas de I/O y las reemplaza por objetos simulados (Stub/Mock) que no requieren ninguna conexión real. Gracias a esto, puedes evitar pruebas inestables (Flaky Tests) que a veces pasan y a veces fallan dependiendo del estado de la red, y construir un entorno de pruebas unitarias robusto que garantice un éxito consistente en 0.1 segundos, dondequiera que se ejecute.

Finalmente, antes de pasar el código completo, recuerda una vez más el <b>Principio de Responsabilidad Única (SRP)</b>. Si introduces una función gigante tipo "espagueti" de cientos de líneas en el prompt, incluso la mejor IA podría perder el contexto central o mitigar la validación de casos de borde importantes. La mejor forma de usarlo es solicitar la creación de pruebas para unidades de funciones independientes y bien divididas. Esto servirá como un excelente indicador de refactorización, dándote feedback sobre si tu lógica principal actual está suficientemente modularizada y diseñada con una estructura fácil de probar (Testable Code).

---

## 🙋 Preguntas frecuentes (FAQ)

- **Q: El código es muy largo y la respuesta de la IA se corta a la mitad, ¿qué debo hacer?**
  - A: Recomendamos encarecidamente solicitar las pruebas dividiendo el código en funciones o clases pequeñas. Si introduces un archivo gigante, aumenta la probabilidad de que la IA pase por alto casos de borde clave. Intenta solicitar las pruebas para funciones que cumplan estrictamente con el Principio de Responsabilidad Única (SRP).

- **Q: Mi código incluye conexión a base de datos, ¿es posible generar pruebas unitarias en este caso?**
  - A: ¡Sí, es perfectamente posible! Este prompt incluye instrucciones potentes para el 'Mocking de dependencias externas'. La IA detectará inteligentemente las llamadas al repositorio de la DB o al ORM y las reemplazará por objetos Mock que no requieren una conexión real.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Asignación de Persona (Role):** Se le otorga el rol específico de 'ingeniero senior de QA perfeccionista'. Esto induce a la generación de código de prueba de alta calidad que indaga obsesivamente hasta en los valores límite (Boundary), no conformándose con un código que simplemente "cumpla".
2. **Obligatoriedad del patrón GIVEN-WHEN-THEN:** Se fuerza mediante comentarios el uso del patrón estándar que maximiza la legibilidad. Esto establece una estructura sólida para que incluso otros miembros del equipo entiendan la intención y el flujo de la prueba a primera vista.
3. **Instrucción de automatización de Mocking:** Al delegar explícitamente a la IA la tarea de 'inyección de dependencias y mocking', que es el mayor cuello de botella al escribir pruebas unitarias, se reduce drásticamente el tiempo necesario para completar las pruebas.

---

## 🎯 Conclusión (Epílogo)

Si se descubre un error crítico después de que se haya desplegado en producción, el coste de solucionarlo se dispara al menos 100 veces en comparación con el momento del desarrollo. Los intereses de la deuda técnica crecen como una bola de nieve.

Ahora puedes dejar de lado la excusa de que "no hubo tiempo para escribir pruebas". La presión del aburrido mocking y el lienzo en blanco que tanto temíamos ahora es responsabilidad de tu socio de IA. Tú solo tienes que concentrarte en la lógica de negocio y ponerte el chaleco antibalas que se completa en solo 5 minutos.

Espero que utilices este prompt activamente para erradicar errores desde las primeras etapas del desarrollo y pulses con orgullo el botón 'Merge' con un 100% de confianza.

¡Automatiza tu trabajo y disfruta de tu tiempo libre! 🍷
