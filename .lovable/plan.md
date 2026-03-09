

## Plan: Imágenes por caso + Renombrar servicio a "Auditoría de negocio"

### 1. Renombrar el servicio

El Mystery Shopper es auditoría presencial, no solo digital. Cambios en:

- **`src/data/services.ts`**: Cambiar slug a `auditoria-de-negocio`, serviceTitle a "Auditoría de negocio", headline y intro actualizados para cubrir tanto digital como presencial.
- **`src/components/ServicesSection.tsx`**: Actualizar título y portfolioSlug a `auditoria-de-negocio`.

### 2. Añadir campo `galleryImages` al modelo de datos

Nuevo campo opcional en `ServiceCase`:
```typescript
galleryImages?: { src: string; alt: string }[];
```

Esto permite a cada caso tener una galería de imágenes genérica (hoteles, camiones, tiendas, etc.), independiente de los banners y antes/después.

### 3. Imágenes por caso

- **Caso 1 (Turismo)**: Añadir `galleryImages` con 3-4 placeholders (serán fotos de hoteles que puedes subir después). Carrusel horizontal o grid.
- **Caso 2 (LinkedIn)**: Eliminar la sección `beforeAfter` separada. Convertir `bannerImages` en pares de antes/después de banners (6 imágenes: 3 antes + 3 después en grid comparativo). Renombrar la sección a "Banners: antes y después".
- **Caso 3 (Transporte)**: Añadir `galleryImages` con 2-3 placeholders (imágenes de logística/transporte).
- **Caso 4 (Mystery Shopper)**: Añadir `galleryImages` con 2-3 placeholders (imágenes de tiendas/retail).

### 4. Componente CaseCard actualizado

Añadir nueva sección en `ServicioPortfolio.tsx` para renderizar `galleryImages` como grid responsive (2-3 columnas) con aspect-ratio 16:9.

### 5. Caso LinkedIn: banners antes/después

Reemplazar las dos secciones separadas (bannerImages + beforeAfter) por una sola sección "Banners: antes y después" que muestre pares lado a lado (antes | después) en filas. Cambiar el modelo:
```typescript
bannerBeforeAfter?: { before: string; after: string }[];
```

Esto elimina la duplicación que mencionas.

### Archivos a modificar
1. `src/data/services.ts` — modelo + datos
2. `src/pages/ServicioPortfolio.tsx` — renderizado de galería + banners antes/después
3. `src/components/ServicesSection.tsx` — título y slug del servicio

Todas las imágenes usarán `/placeholder.svg` por ahora. Podrás reemplazarlas subiendo fotos reales después.

