

## Plan: Botón más visible + Formulario de leads (sin base de datos)

Perfecto, vamos rápido. Creamos todo el diseño ahora y la base de datos la conectamos después.

### Cambios:

**1. Botón CTA destacado** (`src/components/TrainingSection.tsx`)
- Fondo sólido navy oscuro (`bg-[hsl(232,28%,22%)]`)
- Texto blanco, hover en dorado
- Más grande y visible sobre el fondo crema

**2. Modal de captura de leads** (`src/components/LeadCaptureModal.tsx` - nuevo)
- Ventana emergente al hacer clic en el botón
- Campos: Nombre, Email, Empresa (opcional)
- Al enviar: muestra mensaje de éxito + guarda en localStorage (temporal)
- Diseño acorde al estilo de la web

**3. Integración**
- El botón abre el modal
- Por ahora los datos se guardan localmente en el navegador
- Cuando conectes la base de datos, solo hay que añadir la llamada a Supabase

### Archivos:
- `src/components/TrainingSection.tsx` - mejorar botón + importar modal
- `src/components/LeadCaptureModal.tsx` - crear nuevo componente

