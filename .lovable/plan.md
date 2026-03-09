

## Plan: Refactor Free Resources Block in TrainingSection

### Changes to `src/components/TrainingSection.tsx`:

**1. Add uploaded photo as visual separator**
- Copy `user-uploads://sandra-tello-formacion_en_IA.png` to `src/assets/sandra-tello-formacion-ia.png`
- Insert a full-width image between the "Cómo trabajo con mis clientes" case study block and the "Recursos gratuitos" block, acting as a visual break

**2. Change background tone of Free Resources block**
- Switch from the current dark navy transparent background to a warm cream/grey tone (e.g., `bg-[hsl(40,20%,92%)]`) with dark text colors, creating clear visual contrast against the navy section

**3. Update resource categories**
- "ChatGPT" → **"LLMs"** with description "ChatGPT, Claude, Gemini, Perplexity..."
- "Midjourney" → **"Creación visual"** with description "Imágenes y vídeo con IA"
- Keep "Automatización" and "Más herramientas" as-is

**4. More creative CTA copy**
- "Accede a todos los recursos" → **"Explora tu biblioteca de IA gratuita"**
- "Empieza tu formación" → **"Da el salto y domina la IA"**

### Files modified:
- `src/components/TrainingSection.tsx` — all changes above
- `src/assets/sandra-tello-formacion-ia.png` — new asset (copied from upload)

