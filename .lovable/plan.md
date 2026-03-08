

## Plan: Corregir la sección "Sobre mí"

Hay tres problemas claros que resolver:

### 1. Logo de fondo no visible
La opacidad actual es `0.03` (prácticamente invisible). Subirla a `0.06`-`0.08` para que se aprecie como tapiz elegante sin molestar la lectura.

### 2. Banda "eterna aprendiz" mal posicionada
Actualmente usa `lg:-mt-16` que la sube y se pisa con el CTA "Conoce más". La solución:
- Eliminar el margen negativo
- Colocar la banda como un bloque de ancho completo **fuera** del grid de dos columnas, con un `mt-12` normal
- Usar padding generoso y el mismo estilo editorial (`bg-primary/5 border-t border-border`)

### 3. CTA apunta a /sobre-mi
- Cambiar el `href` del CTA a `/sobre-mi`
- Crear una página básica `/sobre-mi` con placeholder (ruta en `App.tsx`)

### Cambios en archivos

**`src/components/AboutSection.tsx`:**
- Línea 10: cambiar `opacity-[0.03]` a `opacity-[0.07]`
- Línea 114: cambiar `mt-10 lg:-mt-16` a `mt-12` para que no se superponga al CTA
- Línea 97: cambiar `href="#servicios"` a `href="/sobre-mi"`

**`src/pages/SobreMi.tsx`:** (nuevo)
- Página placeholder con el contenido ampliado de Sandra

**`src/App.tsx`:**
- Añadir ruta `/sobre-mi` apuntando a la nueva página

