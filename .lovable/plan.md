

## Problema identificado

El elemento "Ver casos de trabajo" tiene dos issues principales:

1. **Copy poco profesional**: "Ver casos de trabajo" suena demasiado informal/educativo
2. **Diseño tipo "curso online"**: El cuadradito con icono de carpeta, fondo de color y flecha parece más un call-to-action de plataforma educativa que de una web corporativa/profesional

La estética del sitio es editorial minimalista (sin bordes redondeados, espacios amplios, paleta sobria), y el elemento actual rompe esa coherencia.

## Propuesta de rediseño

### Opción A: Link editorial discreto (RECOMENDADA)
Eliminar el box completamente. En su lugar:
- Línea divisoria horizontal dorada sutil (1px, opacity 0.3)
- Debajo, texto del enlace en formato discreto:
  - "Portfolio: Auditorías de presencia digital" 
  - O "Casos de estudio y proyectos"
- Flecha pequeña inline, no separada
- Sin fondo, sin padding grande, sin iconos
- Hover: subrayado dorado

```
────────────────  (línea dorada fina)

Portfolio: Auditorías de presencia digital →
```

### Opción B: Integrado en el flujo de texto
Añadir el link como parte natural del párrafo `closing`, sin separarlo en un elemento especial:

```
Un diagnóstico honesto con un plan de acción claro. 
Consulta proyectos realizados →
```

### Opción C: Link tipo nota al margen
Estilo más editorial, alineado a la izquierda con borde vertical dorado fino (1px en lugar de 2px), sin fondo de color:

```
│  Proyectos de auditoría: banners LinkedIn, 
│  análisis sector turismo y más →
```

## Copy alternativo más profesional

Reemplazar "Ver casos de trabajo" por:
- "Portfolio: Auditorías digitales"
- "Casos de estudio"
- "Proyectos realizados"
- "Ver portfolio de auditorías"

## Implementación

Modificar líneas 180-197 de `ServicesSection.tsx`:
- Eliminar `bg-accent/5`, `rounded-r-md`, `p-4`
- Cambiar icono `FolderOpen` por nada o por algo más sutil
- Reducir tamaño y complejidad visual
- Ajustar copy a algo más profesional
- Mantener coherencia con estética minimalista del resto del sitio

