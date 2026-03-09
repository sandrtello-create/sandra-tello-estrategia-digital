

## Plan: Difuminar el contenido de las pantallas en la foto de Sandra

### Qué hacer

Añadir un overlay con `backdrop-filter: blur()` sobre las zonas de las pantallas de los monitores en la foto, para que el texto que aparece en ellas no sea legible.

### Enfoque técnico

En el contenedor de la foto (líneas 156-170 de `TrainingSection.tsx`), añadir uno o dos `div` posicionados absolutamente sobre las zonas donde están las pantallas de los monitores, con:
- `backdrop-filter: blur(6px)` para difuminar sutilmente
- Bordes redondeados y opacidad baja para que se integre de forma natural
- Posicionamiento con porcentajes (`top`, `left`, `width`, `height`) ajustados a la ubicación de las pantallas en la imagen

### Archivo a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/TrainingSection.tsx` | Añadir divs con `backdrop-blur` posicionados sobre las pantallas dentro del contenedor de la foto |

