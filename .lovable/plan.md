
# Plan: terminar la web para que posicione

Tienes razón en las tres cosas: SEO real (no decorativo), evitar duplicación entre *Sobre mí* y *Mi historia*, y construir el resto de páginas con la misma estética aprobada de Inicio (Eneagrama + El Método: navy #1B2A4A, dorado #C5A55A, crema).

## 1. Arreglar la duplicación Sobre mí / Mi historia

Cada página con propósito y keyword propia, sin repetir bloques:

- **/sobre-mi** → *Bio profesional*. Quién soy, credenciales, marcas con las que he trabajado, metodología (resumen), CTA. Corta, escaneable. Keyword: "Sandra Tello consultora IA marca personal".
- **/mi-historia** → *Historia personal narrativa* (el diseño diario que aprobaste). Solo relato + fotos + citas. Sin credenciales ni marcas ni métricas. Keyword: "historia Sandra Tello".
- Enlace cruzado: en Sobre mí un CTA "Lee mi historia completa"; en Mi historia un CTA "Trabaja conmigo → Sobre mí".

Se eliminan de *Mi historia* los bloques `CredibilityStats`, marcas y metodología para que no se pisen.

## 2. Páginas nuevas a construir

Cada una como ruta propia, con H1 único, H2/H3 con keywords, meta title/description, canonical, JSON-LD específico, alt descriptivo en imágenes, y CTA final.

| Ruta | Propósito | Keyword principal |
|---|---|---|
| `/metodologia` | Explicar *Inteligencia Humana Estratégica™* (5 pilares en profundidad, para quién es, cómo se aplica) | "metodología marca personal e IA" |
| `/resultados` | Casos, métricas, transformaciones, antes/después | "resultados consultoría IA marca personal" |
| `/testimonios` | Testimonios largos + logos + video (si hay) | "testimonios Sandra Tello" |
| `/formacion` | Programas formativos (IA, marca personal, LinkedIn) tipo landing | "formación IA marca personal" |
| `/marketing-con-factor-humano` | Pillar page: qué es marketing con criterio hoy | "marketing con factor humano" |
| `/inteligencia-artificial-para-profesionales` | Pillar page: IA aplicada con propósito | "IA para profesionales y empresas" |
| `/marca-personal-estrategica` | Pillar page: marca personal con estrategia | "marca personal estratégica" |

Las 3 pillar pages son las que más van a posicionar: contenido largo (1200–1800 palabras), TOC, FAQs (JSON-LD `FAQPage`), enlaces internos a Servicios / Formación / Contacto.

## 3. Estética consistente (obligatorio)

Se toma la paleta y patrones de las secciones **Eneagrama** y **El Método** de Inicio:

- Fondo navy `#1B2A4A` con overlays.
- Acentos dorados `#C5A55A` (títulos de sección, iconos, subrayados).
- Cards con `bg-white/10 backdrop-blur` y borde dorado al hover.
- Playfair Display para H1/H2, Source Sans 3 para cuerpo.
- Sin bordes redondeados marcados. Editorial.

Todas las páginas nuevas usan estos mismos componentes visuales para que se sienta una sola web.

## 4. SEO técnico (transversal)

- Cada página nueva con `<SEO>` (title <60c, description <160c, canonical, og:*, JSON-LD específico: `Service`, `Course`, `Article`, `FAQPage`, `BreadcrumbList` según toque).
- Un único H1 por página, jerarquía H2/H3 real.
- Alt descriptivo con keyword natural en toda imagen relevante.
- Enlaces internos entre pillar pages ↔ Servicios ↔ Formación ↔ Contacto.
- Actualizar `public/sitemap.xml` con las nuevas rutas.
- Actualizar `Navbar` y `Footer` con la nueva estructura de menú.
- Lanzar la **Revisión SEO** al terminar para verificar.

## 5. Orden de ejecución propuesto

1. Arreglar duplicación Sobre mí ↔ Mi historia + añadir SEO on-page fuerte a `/mi-historia`.
2. Crear las 3 pillar pages (Marketing / IA / Marca personal) — son las que posicionan.
3. Crear Metodología, Formación, Resultados, Testimonios.
4. Actualizar Navbar, Footer, sitemap.
5. Lanzar revisión SEO.

Es bastante trabajo; lo hago por bloques y te aviso al terminar cada uno para que revises antes de seguir.

## Dudas antes de empezar

1. **Fotos nuevas**: ¿te espero para tenerlas antes de crear las páginas, o arranco con placeholders del mismo estilo y las cambiamos después?
2. **Contenido**: ¿escribo yo el copy en tu voz (basándome en la memoria de marca que ya tengo) o me pasas texto tú para pillar pages y formación?
3. **Prioridad**: ¿empiezo por el bloque 1 (arreglar duplicación) o prefieres que ataque primero las 3 pillar pages porque es lo que posiciona?
