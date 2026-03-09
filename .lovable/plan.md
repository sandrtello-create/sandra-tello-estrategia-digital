

## Plan: Reorganizar la sección de Formación — foto debajo del título

### Problema
La foto es horizontal (paisaje) y en el layout de dos columnas se recorta demasiado porque la columna izquierda es vertical/alta.

### Solución
Cambiar a layout de una sola columna:
1. **Título + descripción** arriba
2. **Foto horizontal** debajo, a ancho completo, con aspect ratio que respete la imagen (ej: `aspect-video` o similar)
3. **3 tarjetas** debajo de la foto
4. **Botón CTA** al final

### Archivo a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/TrainingSection.tsx` | Eliminar grid de 2 columnas. Layout vertical: título → foto horizontal a ancho completo → tarjetas → botón. Mantener elementos decorativos de fondo (neural network, gradiente). |

