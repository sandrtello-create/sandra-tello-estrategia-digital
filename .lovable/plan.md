

## Diagnóstico

He identificado dos problemas:

### 1. Error "Servicio no encontrado"
El slug cambió de `auditoria-presencia-digital` a `auditoria-de-negocio`. Estás en la URL antigua (`/servicios/auditoria-presencia-digital`) que ya no existe. **Solución**: Navega a `/servicios/auditoria-de-negocio`.

### 2. Texto en plural ("auditamos", "diseñamos")
En `src/data/services.ts` líneas 23-25:
- "Así **auditamos** negocios" → "Así **audito** negocios"
- "**diseñamos** un plan" → "**diseño** un plan"
- "**Realizamos** una auditoría" → "**Realicé** una auditoría" (y demás verbos en primera persona singular)

---

## Plan de cambios

**Archivo**: `src/data/services.ts`

Cambiar todos los verbos de primera persona plural a singular en el portfolio de auditoría:

| Línea | Antes | Después |
|-------|-------|---------|
| 23 | "Así auditamos negocios" | "Así audito negocios" |
| 25 | "diseñamos un plan" | "diseño un plan" |
| 33 | "Realizamos una auditoría... Entregamos un informe" | "Realicé una auditoría... Entregué un informe" |
| Otros casos | "Auditoría 360°..." (revisar verbos) | Adaptar a primera persona singular |

Revisaré todo el archivo y cambiaré cualquier verbo en plural ("trabajamos", "realizamos", "entregamos", "diseñamos") a singular ("trabajo", "realicé", "entregué", "diseño/diseñé").

