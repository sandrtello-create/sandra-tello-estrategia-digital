

## Plan: Corregir estadísticas cortadas en móvil + optimizar carrusel de logos

### Problema 1: Números cortados en móvil
En `src/components/HeroSection.tsx`, las 3 tarjetas de estadísticas (Experiencia +15, Formación +500, Impacto +300) están en un `grid grid-cols-3` (línea 201) sin adaptación móvil. En pantallas pequeñas, el texto se desborda y se corta porque las columnas son demasiado estrechas para los números grandes (especialmente "+500" y "+300" con texto `text-4xl`).

**Solución:**
- Reducir el tamaño de fuente de los números en móvil: cambiar `text-4xl md:text-5xl` a `text-3xl md:text-5xl` (línea 70)
- Reducir el padding de las tarjetas en móvil: `p-3 md:p-5` (línea 60)
- Reducir el gap del grid en móvil: `gap-3 md:gap-6` (línea 201)
- Asegurar que el texto descriptivo no se desborde con `text-[10px] md:text-xs` (línea 73)

### Problema 2: Carrusel de logos lento en móvil
En `src/components/BrandsSection.tsx` y `src/index.css`, la animación `scroll-brands` dura 18 segundos y mueve 36 logos (18 duplicados). En móvil esto es excesivamente lento porque el viewport es pequeño pero el contenido es enorme.

**Solución:**
- Reducir el tamaño de los logos en móvil: `width: 80px` en móvil vs `120px` en desktop
- Reducir el gap entre logos en móvil: `16px` vs `32px`
- Acelerar la animación en móvil usando una media query en CSS: `12s` en móvil vs `18s` en desktop
- Añadir `will-change: transform` para activar aceleración por GPU

### Archivos a modificar
- `src/components/HeroSection.tsx` — tamaños responsivos en StatCard y grid
- `src/components/BrandsSection.tsx` — tamaños responsivos de logos
- `src/index.css` — media query para velocidad del carrusel en móvil + `will-change`

