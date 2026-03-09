

## Plan: Mantener el caso de ejemplo y añadir roadmap de 3 fases debajo

Conservar el bloque "Caso de ejemplo" actual (líneas 219-242) tal cual, y añadir justo después un nuevo bloque con la hoja de ruta visual en 3 fases.

### Nuevo bloque: Roadmap

Se insertará entre el caso de ejemplo y el CTA. Diseño en 3 columnas (1 en móvil) con estilo coherente con el resto de la sección:

**Fase 01 — Mes 1: Diseño y estrategia**
- Definición del proyecto y objetivos
- Arquitectura del ecosistema IA
- Creación de textos y contenidos base
- Selección de herramientas y plataformas

**Fase 02 — Meses 2-3: Implementación**
- Desarrollo e integración de herramientas
- Pruebas y ajustes con usuarios reales
- Formación del equipo en el uso diario
- Lanzamiento progresivo por canales

**Fase 03 — Meses 4-6: Resultados y optimización**
- Medición de KPIs y análisis de rendimiento
- Optimización basada en datos reales
- Escalado a nuevos canales o funcionalidades
- Informe de impacto y ROI

### Estilo visual

- Cada fase con número grande ("01", "02", "03") en tono accent sutil, icono (Pencil, Cog, TrendingUp), título serif y lista de bullets
- Fondo y bordes consistentes con las program cards (fondo sutil, borde accent en hover)
- Línea conectora horizontal entre fases (visible en desktop)
- Subtítulo "De la idea al impacto" con el mismo formato de label que el resto

### Archivo a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/TrainingSection.tsx` | Añadir imports (Pencil, Cog, TrendingUp). Insertar bloque roadmap entre el caso de ejemplo y el CTA (después de línea 243). |

