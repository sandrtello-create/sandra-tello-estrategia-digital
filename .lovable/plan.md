

## Plan: Rediseño visual de la sección "Sobre mí"

### Problemas identificados
1. **Negritas/bolds inconsistentes** — "marca personal", "eterna aprendiz", "curiosidad, criterio y humanidad" destacados sin criterio claro
2. **Rectángulo de "Tu valor no se improvisa"** — caja con `bg-gold/15` poco elegante
3. **CTA apunta a contacto** — debería invitar a conocer más sobre Sandra (página Sobre mí)
4. **Diseño general monótono** — todo es texto corrido en una columna, falta ritmo visual

### Cambios propuestos en `src/components/AboutSection.tsx`

**1. Limpiar negritas:**
- Eliminar todos los `<strong>` y `font-semibold` de palabras sueltas dentro de párrafos
- Mantener solo el destacado en la frase clave "Cuando no decides tu posicionamiento..."
- Usar un estilo uniforme `text-muted-foreground text-[17px]` para todo el cuerpo de texto

**2. Rediseñar la frase "Tu valor no se improvisa. Se decide.":**
- En lugar del rectángulo con fondo, usar un estilo más editorial: texto grande serif con una línea dorada vertical a la izquierda (`border-l-2 border-gold pl-6`)
- Tipografía: `font-serif text-2xl md:text-3xl font-medium text-foreground`

**3. Cambiar el CTA:**
- Reemplazar `href="#contacto"` por `href="#servicios"` o un enlace a página "Sobre mí"
- Cambiar copy de "¿Hablamos? Si no quieres que otros sigan decidiendo tu valor" a algo como:
  - Subtítulo: "Conoce más"
  - Título: "Descubre cómo puedo ayudarte"
- Guardar el copy actual ("Si no quieres que otros sigan decidiendo tu valor") para moverlo al `FinalCTA`

**4. Mejoras de diseño general:**
- Añadir más espacio entre bloques temáticos (separar visualmente el "giro narrativo" del resto)
- La frase "Día tras día. Año tras año." con más peso visual: `text-foreground font-medium` en vez de `italic`
- "Desde ahí trabajo." como frase de cierre con más presencia: `text-lg font-semibold`
- Las dos frases finales ("Porque el marketing sin estrategia...") con estilo editorial: mayor tamaño o peso

### Resultado esperado
Sección más limpia, con ritmo visual claro, sin negritas aleatorias, con una frase destacada elegante estilo editorial y un CTA que invite a explorar más sobre Sandra en vez de saltar directamente a contacto.

