

## Plan: Rediseño completo de la sección Servicios

### Concepto
Transformar la sección de una rejilla genérica de tarjetas a un diseño editorial premium con interactividad. Layout asimétrico, animaciones de entrada y hover effects más elaborados.

### Cambios en `src/components/ServicesSection.tsx`

**Layout:** Pasar de grid 2x2 uniforme a un diseño con numeración editorial (01, 02, 03, 04), donde cada servicio tiene un número grande dorado, título en serif, descripción y un enlace "Saber más". Disposición en lista vertical con separadores, más editorial y elegante.

**Interactividad:**
- Animación de fade-in al hacer scroll (Intersection Observer)
- Hover: línea dorada lateral que se expande + leve desplazamiento del contenido
- Stagger en la aparición de cada servicio (delay incremental)

**Copy — ajustar títulos para que sean más directos:**
1. "Consultoría estratégica con IA" (más corto)
2. "Posicionamiento de marca personal" (se mantiene)
3. "Auditoría de presencia digital" (se mantiene)
4. "Employee advocacy y liderazgo digital" (se mantiene)

**Estructura visual por servicio:**
```text
┌──────────────────────────────────────────────┐
│  01                                          │
│  ──────────────────────────────────────────   │
│  Consultoría estratégica con IA              │
│  Descripción del servicio...                 │
│  Saber más →                                 │
│                                              │
│  02                                          │
│  ──────────────────────────────────────────   │
│  Posicionamiento de marca personal           │
│  ...                                         │
└──────────────────────────────────────────────┘
```

**Encabezado:** Se mantiene el header actual (etiqueta "Servicios", título, subtítulo) con el mismo estilo editorial del resto del sitio.

### Detalles técnicos
- Intersection Observer para detectar visibilidad y activar animaciones staggered
- Clases de transición CSS: `opacity`, `transform translateY`, con delays de `100ms * index`
- Borde izquierdo dorado en hover (`border-l-2 border-accent`) con transición
- Número en `font-serif text-5xl text-accent/20` que se ilumina en hover a `text-accent/60`
- Un solo archivo modificado: `src/components/ServicesSection.tsx`

