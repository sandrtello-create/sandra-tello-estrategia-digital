

## Problema

Los casos están mezclados: el caso de Turismo de Castilla-La Mancha tiene `bannerImages` de LinkedIn, que no tiene sentido porque ese proyecto es de auditoría de ecosistema digital (web, redes, reputación). Los banners de LinkedIn son otra cosa: optimización de perfiles, headlines, "acerca de", diseño visual. Son proyectos distintos.

## Reorganización de casos

### Caso 1: Turismo de Castilla-La Mancha (auditoría de ecosistema)
- **Quitar** `bannerImages` — no aplica
- Mantener challenge/solution/results tal cual (auditoría de canales, coherencia de marca, plan de acción)

### Caso 2: Optimización de perfiles LinkedIn (nuevo caso separado)
- **Sector**: "Marca personal / LinkedIn"
- **Título**: algo como "Optimización de perfiles LinkedIn" o "Banners y headlines LinkedIn"
- **Challenge**: Profesionales con perfiles que no reflejan su valor — headlines genéricos, banners sin diseño, sección "acerca de" sin estrategia
- **Solution**: Rediseño de banner, headline y acerca de. Auditoría visual y de contenido del perfil
- **Incluir**: `bannerImages` y `beforeAfter` (antes/después del perfil) — aquí sí tienen sentido
- **Results**: métricas de mejora de visitas, impresiones, etc.

### Caso 3: Directivo sector tecnológico
- Mantener pero **quitar** `bannerImages` de este caso (ya están en el caso 2 de LinkedIn)
- Mantener `beforeAfter` si aplica a su perfil específico, o moverlo también al caso 2

## Cambios

Solo en `src/data/services.ts`:

1. **Caso Turismo**: eliminar `bannerImages`
2. **Nuevo caso intermedio**: "Optimización de perfiles LinkedIn" con `bannerImages` y `beforeAfter`
3. **Caso Directivo**: quitar `bannerImages`, mantener `beforeAfter` solo si es específico de él (si no, también se quita)

Resultado: 3 casos bien diferenciados en lugar de 2 mezclados.

