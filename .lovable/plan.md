

## Plan: Reorganizar casos del portfolio de Auditoría

Se aplicarán los cambios pendientes del plan anterior + el nuevo caso de Mystery Shopper. Resultado final: **4 casos** en `src/data/services.ts`.

### Caso 1: Turismo de Castilla-La Mancha (sin cambios)
Auditoría de ecosistema digital institucional.

### Caso 2: Optimización de perfiles LinkedIn (sin cambios)
Banners, headlines, antes/después. Mantiene `bannerImages` y `beforeAfter`.

### Caso 3: Reemplazar "Directivo sector tecnológico" → Empresa de transporte 360°
- **Sector**: Transporte / Logística
- **Challenge**: Empresa de transporte con presencia digital descoordinada (web, Instagram, LinkedIn, Google Business)
- **Solution**: Auditoría 360° de todos los canales, redefinición de narrativa, plan estratégico multicanal
- **Results**: Canales auditados, mejora tráfico web, crecimiento seguidores, coherencia de marca
- Sin `bannerImages` ni `beforeAfter`

### Caso 4 (nuevo): Mystery Shopper / Auditoría presencial
- **Título**: "Auditoría Mystery Shopper para cadena retail"
- **Sector**: "Retail / Mystery Shopping"
- **Challenge**: Cadena de tiendas que no sabía si la experiencia real del cliente coincidía con lo que comunicaban online. Sospechas de inconsistencias entre la imagen digital y la atención presencial/telefónica.
- **Solution**: Programa de Mystery Shopper: visitas presenciales y llamadas telefónicas a puntos de venta. Evaluación de atención al cliente, coherencia con la marca digital, cumplimiento de protocolos. Informe comparativo online vs offline con recomendaciones.
- **Results**: Puntos auditados (~20), incidencias detectadas, mejora satisfacción cliente, recomendaciones implementadas.

### Cambios técnicos
Solo `src/data/services.ts`: reescribir caso 3 y añadir caso 4.

