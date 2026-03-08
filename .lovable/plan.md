
**Objetivo:** Actualizar la sección "Sobre Sandra" con el nuevo copy, manteniendo la apertura en entrecomillas y la frase destacada final.

**Cambios a realizar en `src/components/AboutSection.tsx`:**

1. **Mantener líneas 1-32** (¡Hola! y el titular SOY SANDRA + opening hook entrecomillado)

2. **Reemplazar líneas 34-58** con el nuevo copy estructurado en párrafos:
   - Párrafo 1: "Durante muchos años trabajé en el mundo corporativo observando..." (texto corporativo inicial)
   - Párrafo 2: "Tendemos a seguir una lógica que pocas veces cuestionamos..." + "Día tras día. Año tras año." (seguido de espacio)
   - Párrafo 3: "Con el tiempo entendí algo importante:"
   - Párrafo 4: "Cuando no decides tu posicionamiento, otros acaban decidiendo tu valor." (destacado con `font-semibold`)
   - Párrafo 5: "Hoy me siento honrada de acompañar a profesionales y empresas que quieren..." (con "marca personal" en bold)
   - Párrafo 6: "También soy docente en inteligencia artificial aplicada a negocio y marketing, porque creo profundamente en algo que forma parte de mi forma de trabajar:"
   - Párrafo 7: "seguir aprendiendo siempre." (en cursiva o destacado)
   - Párrafo 8: "Me considero una eterna aprendiz. La tecnología cambia, los negocios evolucionan y la estrategia exige algo fundamental: curiosidad, criterio y humanidad."
   - Párrafo 9: "Desde ahí trabajo."
   - Párrafo 10: "Porque el marketing sin estrategia es ruido. Y la tecnología sin criterio no transforma nada."

3. **Mantener líneas 61-67** (Highlighted quote: "Tu valor no se improvisa. Se decide.")

4. **Mantener líneas 70-83** (CTA "¿Hablamos?")

**Estilos a aplicar:**
- Párrafos normales: `text-muted-foreground text-[17px] leading-relaxed mb-5`
- Párrafo con "eterna aprendiz": `text-foreground font-semibold`
- "marca personal" en bold dentro del párrafo
- "seguir aprendiendo siempre" con énfasis visual (cursiva o font-semibold)
- "curiosidad, criterio y humanidad" con énfasis si es necesario

