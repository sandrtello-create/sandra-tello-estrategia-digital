

## Plan: Mejorar diseño de las tarjetas de recursos (LLMs, Creación visual, etc.)

Las 4 tarjetas de recursos actualmente tienen fondo casi blanco (`bg-[hsl(40,15%,96%)]`) con bordes grises claros, lo que las hace parecer planas y lavadas contra el fondo crema.

### Cambios en `src/components/TrainingSection.tsx` (líneas 374-396):

**1. Fondo más oscuro y con más personalidad**
- Cambiar el fondo de las tarjetas de `bg-[hsl(40,15%,96%)]` a un tono navy oscuro (`bg-[hsl(232,28%,22%)]`) con texto claro, invirtiendo el contraste para que destaquen sobre el fondo crema.

**2. Bordes y hover actualizados**
- Borde sutil en tono navy más claro (`border-[hsl(232,25%,32%)]`)
- Hover: borde accent dorado y sombra sutil

**3. Iconos con más presencia**
- Círculo del icono con fondo accent/20 e icono en color accent (dorado), en lugar del navy actual

**4. Tipografía invertida**
- Títulos en `text-primary-foreground` (blanco/claro)
- Descripciones en `text-primary-foreground/60`

Esto crea un efecto de "tarjetas oscuras sobre fondo claro" que rompe la monotonía blanca y da más peso visual a los recursos.

### Archivo modificado:
- `src/components/TrainingSection.tsx`

