

## Resumen de cambios solicitados

### 1. Galerías con 2 imágenes: hacerlas más grandes y centradas
Cuando una galería tiene solo 2 imágenes, el grid de 3 columnas deja un hueco. Cambiar `GalleryGrid` para usar `grid-cols-2` cuando hay 2 imágenes o menos, y hacerlas más grandes (aspect ratio más amplio).

### 2. Caso Turismo: reemplazar gastronomía
Regenerar la imagen de gastronomía: en vez de copa cortada, crear una imagen de un restaurante/hotel rural manchego elegante, que transmita turismo gastronómico de calidad.

### 3. Caso LinkedIn: logo en el header + huecos para banners
- Poner el logo de LinkedIn en la barra azul del header de la tarjeta (reemplazar el icono Lucide por la imagen real del logo).
- Eliminar `galleryImages` del caso LinkedIn.
- Mantener `bannerBeforeAfter` vacío como placeholder visual: renderizar huecos vacíos (izquierda "Antes" / derecha "Después") con borde punteado para que la usuaria pueda rellenarlos después.

### 4. Caso Transporte: añadir tercera imagen (página web)
Generar una imagen de mockup de página web corporativa de empresa de transporte y añadirla como tercera imagen con caption "Página web".

### 5. Caso Mystery Shopper: añadir tercera imagen
Generar una imagen relacionada con mystery shopping, por ejemplo un "Informe de resultados" o "Llamada telefónica de evaluación", en español y con tonos de marca.

### Archivos a modificar
1. **`src/pages/ServicioPortfolio.tsx`**:
   - `GalleryGrid`: grid adaptativo (2 cols si ≤2 imágenes, 3 cols si ≥3)
   - `CaseCard` header del caso LinkedIn: mostrar imagen del logo en lugar del icono Lucide
   - Renderizar placeholders vacíos con borde punteado cuando `bannerBeforeAfter` es un array vacío

2. **`src/data/services.ts`**:
   - Caso Turismo: actualizar imagen gastronomía
   - Caso LinkedIn: eliminar `galleryImages`, mantener `bannerBeforeAfter: []`
   - Caso Transporte: añadir tercera imagen (web)
   - Caso Mystery: añadir tercera imagen

3. **Assets nuevos a generar** (4 imágenes):
   - `turismo-gastronomia.jpg` (v2): restaurante/hotel rural manchego
   - `logistica-web.jpg`: mockup página web empresa transporte
   - `mystery-informe.jpg`: informe de resultados mystery en español

