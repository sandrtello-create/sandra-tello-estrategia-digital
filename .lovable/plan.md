

## Plan: Botón CTA dorado con animación de pulso

### Cambios en `src/components/TrainingSection.tsx` (líneas 401-408):

**1. Fondo dorado sólido** en vez de navy oscuro
- `bg-accent text-accent-foreground` (fondo dorado, texto oscuro)
- Hover: `hover:bg-gold-light` (dorado más claro)

**2. Animación de pulso suave** para llamar la atención
- Añadir una sombra dorada pulsante con `animate-pulse` o un keyframe personalizado
- Efecto: `shadow-[0_0_20px_hsl(var(--accent)/0.4)]` que pulsa suavemente

**3. Mayor tamaño y presencia**
- Padding más generoso (`px-10 py-7`)
- Texto ligeramente más grande (`text-[14px]`)

### Resultado visual:
Botón dorado brillante que pulsa con un resplandor suave, imposible de ignorar sobre el fondo crema.

### Archivo:
- `src/components/TrainingSection.tsx` — solo el botón (líneas 401-408)

