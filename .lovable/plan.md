

## Plan: Añadir recursos gratuitos dentro de la sección de Formación

Entiendo: el **Blog es para anécdotas y reflexiones**, mientras que **Formación debe incluir tanto los programas de pago como recursos gratuitos** (manuales de herramientas IA).

### Estructura propuesta para TrainingSection

```text
┌─────────────────────────────────────────────────────────────┐
│  FORMACIÓN EN IA (header actual)                            │
├─────────────────────────────────────────────────────────────┤
│  Foto + Intro                                               │
│  3 Cards de programas (empresas, ejecutivos, profesionales) │
│  Grid de herramientas                                       │
│  Caso de cliente                                            │
│  Ilustración Pixar + Roadmap                                │
├─────────────────────────────────────────────────────────────┤
│  ═══════════ NUEVO BLOQUE: RECURSOS GRATUITOS ═══════════  │
│                                                             │
│  "Creo que la educación en IA no debería ser un            │
│   privilegio. Por eso comparto recursos gratuitos."         │
│                                                             │
│  Grid de recursos gratuitos:                                │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
│  │ ChatGPT    │ │ Midjourney │ │ Make/Zapier│              │
│  │ Guía básica│ │ Tutorial   │ │ Automatiza │              │
│  └────────────┘ └────────────┘ └────────────┘              │
│                                                             │
│  [CTA: Accede a todos los recursos →]                      │
├─────────────────────────────────────────────────────────────┤
│  [CTA principal: Empieza tu formación →] (programas pago)  │
└─────────────────────────────────────────────────────────────┘
```

### Cambios en `TrainingSection.tsx`

1. **Nuevo bloque visual** entre el roadmap y el CTA con:
   - Mensaje sobre democratización de la educación en IA
   - Grid de 3-4 recursos gratuitos (ChatGPT, Midjourney, automatización, etc.)
   - Cada recurso con icono, título y breve descripción
   - Botón secundario "Accede a los recursos" (puede enlazar a una página futura o #recursos)

2. **Cambiar CTA principal** de "Solicita información" a algo más personal como "Empieza tu formación" o "Quiero aprender contigo"

3. **Completar fase 03 del roadmap** añadiendo:
   - KPIs de redes sociales (alcance, engagement, conversión)
   - Estrategia de contenido RRSS a largo plazo

### Detalle técnico

| Archivo | Cambio |
|---------|--------|
| `src/components/TrainingSection.tsx` | Añadir bloque recursos gratuitos, actualizar CTA, completar roadmap fase 03 |

