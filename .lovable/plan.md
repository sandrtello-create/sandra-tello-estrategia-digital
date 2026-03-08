

## Plan: Foto del hero visible en móvil/tablet + mejora visual del header de Servicios

### 1. Foto visible en móvil y tablet (`src/components/HeroSection.tsx`)

**Problema:** La foto de Sandra tiene `hidden lg:flex`, así que solo aparece en desktop (≥1024px).

**Solución:** Mostrar la foto también en móvil y tablet, pero con un layout diferente:
- Cambiar `hidden lg:flex` a `flex` para que siempre sea visible
- En móvil/tablet: colocar la foto encima del texto (centrada, tamaño más contenido ~280px max-width en móvil, ~360px en tablet)
- Invertir el orden visual: en móvil foto arriba + texto abajo (con `order-1`/`order-2` ajustados por breakpoint)
- Reducir el padding del contenedor de la foto en móvil para que no ocupe demasiado espacio vertical

### 2. Mejora visual del header de Servicios (`src/components/ServicesSection.tsx`)

**Problema:** La tercera línea ("Para profesionales y empresas...") se pierde visualmente, mismo color y estilo que el subtítulo.

**Solución:** Diferenciarla visualmente:
- Darle un estilo de "badge" o cápsula sutil: fondo `bg-accent/10` con `text-accent` (dorado), `px-4 py-2 rounded-full inline-block` para que destaque como un elemento diferenciado
- O alternativamente: ponerla en itálica con un color ligeramente más oscuro y un separador fino (línea dorada corta) entre el subtítulo y esta línea
- Opción recomendada: línea decorativa dorada corta (40px, centrada) como separador + texto en `text-primary/70` (más oscuro que muted) con `font-medium` para darle más peso

**Estructura resultante del header:**
```text
SERVICIOS
Tu negocio no necesita más ruido. Necesita estrategia.
Estrategia, marketing e inteligencia artificial...
——— (línea dorada decorativa)
Para profesionales y empresas que quieren...
```

### Archivos a modificar
- `src/components/HeroSection.tsx` — hacer la foto responsive
- `src/components/ServicesSection.tsx` — líneas 137-140, añadir separador y ajustar estilo

