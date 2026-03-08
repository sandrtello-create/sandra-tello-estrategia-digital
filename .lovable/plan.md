

## Plan: Ajustar copy del header de Servicios

### Cambios en `src/components/ServicesSection.tsx` (líneas 130-136)

**Título (h2)** — se mantiene:
> *"Tu negocio no necesita más ruido. Necesita estrategia."*

**Subtítulo (p)** — reescribir para sonar más profesional y menos en primera persona:
> *"Estrategia, marketing e inteligencia artificial para que tu negocio crezca con dirección, no por inercia."*

**Añadir segunda línea descriptiva (nuevo `<p>`)** debajo del subtítulo:
> *"Para profesionales y empresas que quieren ordenar su estrategia, posicionar su valor y utilizar la inteligencia artificial con criterio."*

Esta segunda línea irá en un tamaño ligeramente menor (`text-[15px]`) y con `mt-3`, manteniendo el estilo editorial.

### Archivo a modificar
`src/components/ServicesSection.tsx` — líneas 133-136, reemplazar el subtítulo actual y añadir la línea adicional.

