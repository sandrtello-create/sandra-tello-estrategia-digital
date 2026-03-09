
## Objetivo
Añadir un sistema de páginas de portfolio por servicio, empezando por "Auditoría de presencia digital". Cada servicio podrá tener opcionalmente una página de trabajo/casos con su propio slug.

## Arquitectura elegida

```text
/servicios/auditoria-presencia-digital   ← nueva ruta
```

Mismo patrón que `/perfiles/:slug` pero para servicios. Datos en `src/data/services.ts` (nuevo).

---

## Estructura de datos — `src/data/services.ts` (nuevo)

Interfaz:
```ts
interface ServicePortfolio {
  slug: string;           // "auditoria-presencia-digital"
  serviceTitle: string;   // "Auditoría de presencia digital"
  headline: string;       // Título hero de la página
  intro: string;
  cases: {
    title: string;        // "Sector Turismo Castilla-La Mancha"
    sector: string;
    challenge: string;
    solution: string;
    results: { label: string; value: string }[];
    bannerImages?: string[];  // URLs de banners LinkedIn
    beforeAfter?: { before: string; after: string };
  }[];
}
```

---

## Páginas y componentes a crear/modificar

### 1. `src/data/services.ts` (nuevo)
Datos de portfolio con contenido placeholder para el servicio de Auditoría. Incluye:
- 2 casos de ejemplo (Turismo Castilla-La Mancha + otro genérico)
- Métricas ficticias para sustituir
- Imágenes placeholder para banners y antes/después

### 2. `src/pages/ServicioPortfolio.tsx` (nuevo)
Página completa con:
- **Hero** oscuro (mismo estilo que `/perfiles`) con título y descripción del servicio
- **Casos de éxito** en cards: contexto, reto, solución, métricas (grid de stats)
- **Galería de banners LinkedIn** si el caso tiene `bannerImages`
- **Antes / Después** si el caso tiene `beforeAfter`: dos columnas con etiquetas
- **CTA final** "¿Quieres una auditoría para tu proyecto?" → link a contacto o WhatsApp

### 3. `src/App.tsx`
Añadir ruta: `<Route path="/servicios/:slug" element={<ServicioPortfolio />} />`

### 4. `src/components/ServicesSection.tsx`
En el servicio de Auditoría (index 2), añadir `portfolioSlug: "auditoria-presencia-digital"` al objeto de datos, y en el componente `ServiceItem` leer ese campo opcional. Si existe, mostrar **después del texto `closing`** un pequeño CTA card:

```text
┌─────────────────────────────────────────────────┐
│  📁  Ver casos de trabajo                        │
│  Banners, proyectos de sector turismo y más.  →  │
└─────────────────────────────────────────────────┘
```

Estilo: borde izquierdo dorado, fondo accent/5, enlace a `/servicios/auditoria-presencia-digital`. Mismo lenguaje visual que el resto de la web.

---

## Flujo completo

```text
Home /#servicios → Auditoría → "Saber más" → expandido → card "Ver casos" → /servicios/auditoria-presencia-digital
```

---

## Archivos a tocar
- Nuevo: `src/data/services.ts`
- Nuevo: `src/pages/ServicioPortfolio.tsx`
- Editar: `src/App.tsx` (añadir ruta)
- Editar: `src/components/ServicesSection.tsx` (añadir `portfolioSlug` en datos + CTA card en ServiceItem)

El sistema queda preparado para que en el futuro cualquier otro servicio tenga su portfolio añadiendo `portfolioSlug` a su objeto de datos y un nuevo entry en `services.ts`.
