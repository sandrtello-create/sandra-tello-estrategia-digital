

## Plan: Rediseñar sección de Testimonios con fondo azul marino y tarjetas

### Cambios en `src/components/TestimonialsSection.tsx`

1. **Fondo azul marino** para toda la sección (`bg-[#1B2A4A]`)
2. **Añadir campo `photo`** a cada testimonio (usando pravatar u otra URL placeholder)
3. **Diseño tipo tarjeta** para cada testimonio visible: fondo blanco/semitransparente con padding, sombra sutil
4. **Avatar circular** encima o dentro de la tarjeta con la foto de la persona
5. **Textos en blanco/claro** para el título y subtítulo de la sección (adaptados al fondo oscuro)
6. **Mantener las comillas decorativas** (Quote icon) en dorado
7. **Controles de navegación** adaptados al fondo oscuro (bordes claros, flechas blancas)
8. **Indicadores de puntos** adaptados (dorado activo, blanco/30 inactivo)

### Estructura visual de cada tarjeta

```text
┌─────────────────────────────┐
│         ┌─────┐             │
│         │ 📷  │  ← avatar   │
│         └─────┘             │
│      ❝ Quote text ❞        │
│      Nombre                 │
│      Rol, Empresa           │
└─────────────────────────────┘
```

Tarjeta con `bg-white/10 backdrop-blur` o `bg-white` con texto oscuro — depende de contraste. Usaré `bg-white` para máximo contraste y legibilidad, con sombra sutil sobre el fondo azul.

