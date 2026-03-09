

## Plan: Rediseño de la sección "Inteligencia Humana Estratégica™"

### Problema actual
- La sección es pequeña y poco impactante
- Tiene 4 pilares incorrectos (Estrategia, Criterio Humano, Marketing, IA)
- Falta el pilar de **Mentalidad** (autosabotaje, síndrome del impostor, confianza)

### Los 5 pilares correctos del método
Según tu descripción: **Mentalidad · IA · Marketing · VIDA · Negocio**

### Cambios en `src/components/MethodSection.tsx`

**1. Actualizar los pilares a 5:**
- **Mentalidad** — Supera el autosabotaje y el síndrome del impostor. La confianza convierte antes que cualquier algoritmo.
- **Inteligencia Artificial** — Herramientas de IA aplicadas con propósito para multiplicar tu impacto.
- **Marketing** — Posicionamiento, visibilidad y autoridad que genera oportunidades reales.
- **VIDA** — Alineación entre tu proyecto profesional y tu vida personal desde la coherencia.
- **Negocio** — Estrategia, objetivos y un plan de acción para generar resultados reales.

**2. Hacer la sección más grande e impactante:**
- Aumentar el padding vertical (`py-28 lg:py-36`)
- Título más grande (`lg:text-[52px]`)
- Subtítulo actualizado: "Un sistema que alinea mentalidad, IA, marketing, VIDA y negocio para que con la tecnología impulses tu valor. Desde la coherencia."
- Cards más grandes con más padding (`p-10`) y textos más grandes
- Grid de 5 columnas en desktop, con Mentalidad como pilar central/destacado
- Layout: 5 columnas en `lg`, 3+2 en `md`, 1 en móvil

**3. Frase de cierre potente:**
- Añadir debajo de las cards: "Porque la confianza convierte antes que cualquier algoritmo."

### Archivo afectado
- `src/components/MethodSection.tsx` — reescritura completa del componente

