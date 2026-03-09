
## Plan: Página de detalle por perfil con métricas y prueba de trabajo

### Objetivo
Cuando el usuario pinche en una tarjeta de perfil (tanto en el carrusel de la home como en `/perfiles`), en vez de ir directamente a LinkedIn, abrirá una página interna `/perfiles/:slug` con información detallada, métricas y posts virales como prueba de trabajo. El enlace a LinkedIn se mantendrá dentro de esa página.

### Estructura de la nueva página

```
/perfiles/:slug
┌─────────────────────────────────────────────────┐
│  HEADER (fondo primary/navy)                    │
│  Foto · Nombre · Cargo · Botón LinkedIn          │
├─────────────────────────────────────────────────┤
│  MÉTRICAS (fila de KPIs)                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │Seguidores│ │Impresiones│ │Interacc. │        │
│  └──────────┘ └──────────┘ └──────────┘        │
├─────────────────────────────────────────────────┤
│  POSTS VIRALES (grid de tarjetas)               │
│  Imagen · Título · Impresiones · Fecha          │
├─────────────────────────────────────────────────┤
│  TESTIMONIO (cita del cliente, si existe)       │
└─────────────────────────────────────────────────┘
```

### Cambios necesarios

**1. `src/data/profiles.ts`** — Ampliar la interfaz y datos:
- Añadir `slug` (ej. `"alfonso-bastida"`) para construir la URL
- Añadir `metrics`: seguidores, impresiones mensuales, tasa de interacción
- Añadir `viralPosts`: array con título, imagen placeholder, impresiones y fecha
- Añadir `testimonial` (opcional): cita y texto

**2. `src/pages/PerfilDetalle.tsx`** — Nueva página:
- Recibe el `slug` via `useParams()`
- Busca el perfil en el array y muestra un 404 si no existe
- Secciones: hero con foto + datos, KPIs, grid de posts virales, cita
- Botón "← Volver a perfiles" para navegar de vuelta

**3. `src/App.tsx`** — Nueva ruta:
```tsx
<Route path="/perfiles/:slug" element={<PerfilDetalle />} />
```

**4. `src/pages/Perfiles.tsx`** — Cambiar `<a href>` por `<Link to>`:
- Las tarjetas del grid pasan de enlazar a LinkedIn a enlazar a `/perfiles/:slug`
- Se añade un pequeño icono/indicador de "ver caso" para no perder el acceso a LinkedIn (dentro de la página de detalle)

**5. `src/components/ProfilesTeaser.tsx`** — Igual que arriba:
- El carrusel de la home también navega a `/perfiles/:slug` en vez de a LinkedIn directamente

### Datos de ejemplo (placeholders)
Los datos de métricas y posts serán ficticios por ahora para que puedas rellenarlos con los reales. Ejemplo:
```
seguidores: 12.400
impresiones/mes: 85.000
tasa de interacción: 4,2%
posts: ["Post sobre liderazgo — 24k impresiones", "Post sobre ventas — 18k impresiones"]
```

### Diseño visual
Misma paleta navy + gold del resto del sitio. KPIs con número grande en dorado y etiqueta debajo. Tarjetas de posts con borde accent/30 y hover gold igual que las tarjetas de perfiles.
