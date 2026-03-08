

## Plan: Acordeón expandible con detalle concreto en cada servicio

### Cambio
Convertir "Saber más" en un toggle que despliega un acordeón animado con los puntos concretos de cada servicio.

### Contenido de cada servicio

**01 — Consultoría estratégica con IA**
- Intro: "Analizo tu negocio para entender en qué punto está y qué oportunidades tiene."
- Puntos: Análisis del mercado y sector · Estudio de competencia · Posicionamiento del negocio · Oportunidades de crecimiento y diferenciación · Integración estratégica de inteligencia artificial
- Cierre: "A partir de ese diagnóstico, diseño una estrategia clara para que tu negocio crezca con dirección."

**02 — Posicionamiento de marca personal**
- Intro: "Trabajamos tu identidad profesional para que comuniques con claridad quién eres y qué te diferencia."
- Puntos: Definición de propuesta de valor · Narrativa y mensaje diferenciador · Estrategia de contenidos · Presencia digital coherente en todos tus canales · Plan de visibilidad y posicionamiento
- Cierre: "Que cuando alguien busque lo que tú haces, te encuentre a ti."

**03 — Auditoría de presencia digital**
- Intro: "Reviso tu ecosistema digital al completo para detectar qué funciona, qué falta y qué sobra."
- Puntos: Análisis de web y SEO básico · Revisión de redes sociales · Coherencia de marca en canales · Reputación online · Informe con recomendaciones priorizadas
- Cierre: "Un diagnóstico honesto con un plan de acción claro."

**04 — Employee advocacy y liderazgo digital**
- Intro: "Ayudo a las empresas a convertir a sus directivos y equipos en embajadores de marca."
- Puntos: Diagnóstico de presencia digital de los líderes · Formación en marca personal · Estrategia de contenidos para ejecutivos · Programa de employee advocacy · Medición de impacto y resultados
- Cierre: "Que la voz de tu empresa no dependa solo del logo."

### Implementación técnica (`src/components/ServicesSection.tsx`)

1. Añadir campo `details` (con `intro`, `points[]`, `closing`) al array `services`
2. En `ServiceItem`, añadir estado `expanded` (boolean)
3. Cambiar "Saber más" de enlace `<a>` a botón que alterna `expanded`, con flecha que rota
4. Bloque expandible con transición CSS (`max-height` + `overflow-hidden` + `transition`):
   - Texto introductorio en cursiva
   - Lista de puntos con bullet dorado (`text-accent`)
   - Frase de cierre en itálica/`font-medium`

### Archivo a modificar
- `src/components/ServicesSection.tsx`

