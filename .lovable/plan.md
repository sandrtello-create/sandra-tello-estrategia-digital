

## Plan: Ajustes en la sección de Formación (TrainingSection)

Hay varios cambios solicitados. Los resumo:

### 1. Reducir opacidad del fondo decorativo (NeuralNetworkSVG)
Bajar la opacidad del SVG de red neuronal de `opacity-[0.04]` a `opacity-[0.02]` para que sea más sutil.

### 2. Añadir icono de cerebro (Brain) a la sección
Importar `Brain` de lucide-react y añadirlo como elemento decorativo en el header de la sección (junto al subtítulo o como icono destacado), ya que parece que se perdió en alguna iteración.

### 3. Cambiar "Caso de ejemplo" por "Cómo he trabajado con clientes"
- Label: cambiar de "Caso de ejemplo" → "Cómo trabajo con mis clientes"
- Título: mantener o ajustar ligeramente para SEO (más descriptivo, posiciona mejor)

### 4. Ajustar el roadmap: enfoque formación/mentoría, no implementación propia
- Label "De la idea al impacto" → algo como "Así es el proceso de formación" o "Tu recorrido de aprendizaje"
- Ajustar periodos:
  - **Fase 01 — Meses 1-2**: Diseño y estrategia (definición, arquitectura, contenidos base, selección de herramientas)
  - **Fase 02 — Meses 3-4**: Implementación y formación (el alumno/cliente implementa con mentoría, pruebas, lanzamiento)
  - **Fase 03 — Mes 5 en adelante**: Resultados y optimización (KPIs, contenido a largo plazo, escalado, ROI)
- Ajustar el lenguaje para que quede claro que Sandra forma y mentoriza, y el cliente implementa

### 5. Generar ilustración estilo Pixar con IA
Usar la API de generación de imágenes para crear una ilustración estilo Pixar/3D que acompañe el roadmap, similar a las que se han usado en otras secciones del sitio.

### Archivo a modificar
| Archivo | Cambios |
|---------|---------|
| `src/components/TrainingSection.tsx` | Todos los cambios anteriores: opacidad SVG, import Brain, textos caso de ejemplo, textos y periodos del roadmap, imagen Pixar generada |

