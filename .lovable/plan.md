

## Plan: Foto de fondo + "El Método" en dorado

### Problema
1. **La foto** (`src/assets/sandra-tello-metodo-bg.png`) nunca se integró como fondo de la sección — sigue usando `bg-section-alt` sin imagen.
2. **"El Método"** ya tiene `gold-gradient-text` en el código (línea 41), pero al añadir la foto de fondo con overlay oscuro, los textos deben pasar a tonos claros — el gradiente dorado seguirá visible sobre fondo oscuro.

### Cambios en `src/components/MethodSection.tsx`

**1. Añadir la foto como fondo con overlay:**
- Importar `sandraMetodoBg` desde `src/assets/sandra-tello-metodo-bg.png`
- Cambiar `<section>` de `bg-section-alt` a posición relativa con imagen de fondo + overlay `bg-[#1a1f3d]/75`
- Estructura: imagen absoluta → overlay absoluto → contenido con `relative z-10`

**2. Adaptar colores de texto al fondo oscuro:**
- "El Método": mantener `gold-gradient-text` (dorado, se verá bien sobre oscuro)
- Título "Inteligencia Humana Estratégica™": cambiar a `text-white`
- Subtítulo: cambiar a `text-white/70`
- Cards: fondo `bg-white/10 backdrop-blur-md border border-white/10`
- Iconos, números, títulos de pilares y textos: tonos blancos/dorados
- Frase final: `text-white/80`

**3. Mantener `gap-px bg-border` → cambiar a `gap-3` o `gap-4`** ya que sobre fondo transparente el separador de 1px no funciona bien.

### Archivo afectado
- `src/components/MethodSection.tsx` — reescritura del layout para fondo con foto

