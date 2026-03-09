

## Plan: Ajustar tamaño del Visionario

El personaje del Visionario se ve más pequeño que el Estratega y el Comunicador en las tarjetas de liderazgo.

### Cambio

En `src/components/LeadershipCards.tsx`, aplicar una clase de escala mayor solo a la imagen del Visionario para compensar visualmente. Se puede hacer añadiendo un campo `imageClass` opcional al array de arquetipos:

- Visionario: `h-32 w-32` (o `scale-110`) en lugar del `h-28 w-28` estándar
- Alternativa: regenerar la imagen con un personaje más grande

**Archivo:** `src/components/LeadershipCards.tsx` — añadir clase condicional a la imagen del visionario.

