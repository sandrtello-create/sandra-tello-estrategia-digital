
## Plan: Mejorar dinamismo visual de "Para profesionales y empresas"

### Análisis actual
La línea "Para profesionales y empresas..." está en `src/components/ServicesSection.tsx` (líneas 140-143) con estilo simple: `text-primary/70 text-[15px] leading-relaxed font-medium`. Visualmente se pierde porque tiene el mismo tratamiento que el subtítulo anterior.

### Solución propuesta
Envolver la línea en una **cápsula estilizada** que le aporte dinamismo visual:

**Opción recomendada:**
- Contenedor `rounded-lg` con `px-6 py-4` (cápsula)
- Fondo sutil: `bg-accent/8` (8% del color dorado)
- Borde fino: `border border-accent/20` (línea dorada muy sutil)
- Mantener el separador dorado anterior (línea) para no perder la jerarquía
- Opcionalmente, añadir un icono pequeño al inicio (checkmark o bullet) para más dinamismo

**Estructura visual resultante:**
```
SERVICIOS
Tu negocio no necesita más ruido. Necesita estrategia.
Estrategia, marketing e inteligencia artificial...
—— (línea dorada separadora, se mantiene)
╔════════════════════════════════════════════════╗
║ ✓ Para profesionales y empresas que quieren... ║
╚════════════════════════════════════════════════╝
```

**Alternativa minimalista** (sin icono):
- Solo la cápsula con fondo y borde, sin icono al inicio
- Más coherente con la estética editorial limpia

### Archivo a modificar
`src/components/ServicesSection.tsx` — líneas 140-143, envolver en un `<div>` con clases Tailwind para crear la cápsula estilizada.
