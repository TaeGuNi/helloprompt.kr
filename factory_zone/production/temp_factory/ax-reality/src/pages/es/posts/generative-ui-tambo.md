---
layout: ../../../layouts/PostLayout.astro
title: "Empezando con UI Generativa usando Tambo SDK"
date: 2024-05-20
description: "Cómo implementar interfaces dinámicas generadas por IA en aplicaciones React. Construye UI Generativa fácilmente con Tambo SDK."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

Más allá de la generación de texto e imágenes por IA, ahora hemos entrado en la era donde la IA genera **Interfaces de Usuario (UI)** en tiempo real. A esto se le llama **UI Generativa (Generative UI)**.

Hoy exploraremos **Tambo SDK**, una herramienta que te ayuda a implementar UI Generativa de la manera más fácil en un entorno React, y construiremos un ejemplo sencillo.

## ¿Qué es la UI Generativa?

El desarrollo de UI tradicional implicaba que los desarrolladores definían todas las pantallas y componentes de antemano y utilizaban renderizado condicional basado en datos. La UI Generativa es diferente.

*   **Generación Dinámica:** La IA decide y renderiza los componentes de UI más apropiados sobre la marcha basándose en la intención del usuario o el contexto de la conversación.
*   **Personalización:** Puede proporcionar interfaces personalizadas completamente diferentes para cada usuario o situación.
*   **Flexibilidad:** Puede manejar escenarios no definidos basándose en el juicio de la IA.

## ¿Por qué Tambo?

Tambo es un SDK que te permite integrar esta UI Generativa en tu aplicación inmediatamente sin configuraciones complejas.

1.  **Amigable con React:** Perfectamente compatible con el sistema de componentes de React.
2.  **Seguridad de Tipos:** Soporte nativo de TypeScript para un desarrollo seguro.
3.  **Fácil Integración:** Se integra fácilmente con las principales bibliotecas de IA como Vercel AI SDK.

## Empezando con Tambo SDK

Imagina construir un chatbot asistente de planificación de viajes simple. Cuando un usuario dice "Planea un viaje a la isla de Jeju", en lugar de solo responder con texto, quieres mostrar una UI rica como **mapas, tarjetas de reserva de vuelos y listas de hoteles**.

### 1. Instalación

Primero, instala el paquete.

```bash
npm install @tambo/sdk ai
```

### 2. Definir Componentes

Define los componentes de UI que la IA puede usar. Por ejemplo, un componente de tarjeta para mostrar lugares recomendados.

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from '@tambo/ui';

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">{name}</Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>Reservar</Button>
    </Card>
  );
}
```

### 3. Configurar el Registro de Tambo

Ahora necesitas informar a la IA sobre este componente como una "Herramienta". Tambo hace este proceso muy intuitivo.

```tsx
// lib/tambo.ts
import { createTambo } from '@tambo/sdk';
import { PlaceCard } from '../components/PlaceCard';
import { z } from 'zod';

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: 'Muestra información sobre un lugar en formato de tarjeta.',
      schema: z.object({
        name: z.string().describe('Nombre del lugar'),
        description: z.string().describe('Descripción del lugar'),
        rating: z.number().describe('Calificación (1-5)'),
      }),
    },
  },
});
```

### 4. Renderizando UI desde la Respuesta de la IA

Finalmente, usa Tambo en la interfaz de tu chatbot para convertir la respuesta de la IA en UI.

```tsx
// app/chat/page.tsx
import { useChat } from 'ai/react';
import { TamboProvider, GenerativeUI } from '@tambo/sdk/react';
import { tambo } from '@/lib/tambo';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <TamboProvider registry={tambo}>
      <div className="chat-container">
        {messages.map((m) => (
          <div key={m.id}>
            <strong>{m.role}:</strong>
            {/* La UI generada se renderiza aquí junto con los mensajes de texto */}
            <GenerativeUI content={m.content} />
          </div>
        ))}
        
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>Enviar</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## Conclusión

Con Tambo SDK, puedes dejar que la IA manipule libremente tus componentes de React sin lógica compleja. La ventana de chat ya no es solo un espacio para texto. Lleva las funciones de tu aplicación a la conversación ahora.

Para más detalles, consulta la [Documentación Oficial de Tambo](https://tambo.dev).
