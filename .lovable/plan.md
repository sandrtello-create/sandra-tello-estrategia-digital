

## Diagnóstico

El código ya incluye:
- **Caso 1 (Turismo)**: `galleryImages` con 3 placeholders
- **Caso 2 (LinkedIn)**: `bannerBeforeAfter` con 3 pares de placeholders  
- **Caso 3 (Transporte)**: `galleryImages` con 2 placeholders
- **Caso 4 (Mystery Shopper)**: `galleryImages` con 3 placeholders

El problema es que todos usan `/placeholder.svg` (el SVG gris genérico), así que visualmente parece que no hay imágenes.

## Plan: Mejorar visualmente con imágenes de ejemplo

Para que se vea mejor mientras no subas las imágenes reales, puedo:

1. **Usar imágenes de ejemplo de alta calidad** de servicios como Unsplash (gratuitas, sin atribución requerida):
   - Caso 1: Fotos de hoteles/turismo
   - Caso 2: Ejemplos de banners LinkedIn (o mockups)
   - Caso 3: Imágenes de logística/transporte
   - Caso 4: Tiendas retail/comercios

2. **Añadir el logo de LinkedIn** en el caso 2 para reforzar visualmente de qué se trata.

3. **Mejorar el diseño de las tarjetas** añadiendo un icono o badge visual en el header de cada caso según el sector.

### Archivos a modificar
- `src/data/services.ts`: Reemplazar `/placeholder.svg` por URLs de Unsplash relevantes
- `src/pages/ServicioPortfolio.tsx`: Opcional - añadir iconos de sector en el header

### Opción alternativa
Si prefieres subir tus propias imágenes reales ahora mismo, puedes hacerlo y yo las integro directamente en lugar de usar imágenes de ejemplo.

