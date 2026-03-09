

## Plan: Generar imágenes con IA y mejorar galerías

### 1. Generar imágenes fotorealistas con IA (Nano banana)

Usar el modelo `google/gemini-2.5-flash-image` para crear imágenes personalizadas en los tonos de la marca (navy + dorado). Se generarán y guardarán como assets en el proyecto:

**Caso 1 — Turismo de Castilla-La Mancha** (3 imágenes):
- Molinos de viento de La Mancha con paisaje manchego
- Gastronomía manchega (queso, vino, mesa elegante)
- Vista panorámica de la llanura manchega / campo de azafrán

**Caso 2 — LinkedIn**: 
- Eliminar las imágenes de `bannerBeforeAfter` (dejar vacío para que pongas los banners reales). Solo poner el logo de LinkedIn como imagen representativa del caso.

**Caso 3 — Transporte / Logística** (2-3 imágenes):
- Mockup de pantalla de Google Business de una empresa de transporte
- Vista de Instagram / página web de empresa logística (enfoque presencia digital, no camiones)

**Caso 4 — Mystery Shopper** (2-3 imágenes):
- Interior de tienda retail con tono profesional (auditoría)
- Persona evaluando experiencia de cliente (escena discreta)

### 2. Añadir captions a las galerías

Actualizar el modelo de datos para soportar texto bajo cada imagen:

```typescript
galleryImages?: { src: string; alt: string; caption?: string }[];
```

Actualizar `GalleryGrid` en `ServicioPortfolio.tsx` para mostrar caption debajo de cada imagen (texto pequeño, estilo listado).

Captions de ejemplo:
- Caso 1: "Molinos de La Mancha", "Gastronomía manchega", "Paisaje rural"
- Caso 3: "Google Business", "Instagram", "Página web"
- Caso 4: "Punto de venta", "Evaluación de experiencia"

### 3. Limpiar caso LinkedIn

Eliminar el array `bannerBeforeAfter` del caso 2 (dejarlo vacío o eliminarlo). Añadir una sola imagen del logo de LinkedIn o un mockup de perfil optimizado.

### Archivos a modificar
1. `src/data/services.ts` — actualizar imágenes + captions + limpiar banners LinkedIn
2. `src/pages/ServicioPortfolio.tsx` — añadir caption al componente GalleryGrid

Las imágenes se generarán con la API de IA y se guardarán en `src/assets/portfolio/`.

