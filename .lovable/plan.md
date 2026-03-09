
## Problema
El link "Casos de estudio" se pierde visualmente: es solo texto dorado fino sobre fondo claro, sin suficiente peso visual. Además el copy no refleja bien lo que es: proyectos reales con clientes/empresas.

## Propuesta

Diseñar un elemento tipo **pastilla/badge con acento en azul marino** (color `--primary` / `--navy`) que dé presencia visual sin romper el minimalismo editorial. Algo parecido a un chip o tag compacto con semicírculo decorativo, no un cuadro entero.

**Estructura visual:**
```
  ●  Proyectos con empresas →
```
- Un **punto/círculo sólido en azul marino** (navy) a la izquierda — actúa como el "semicírculo" de color que pide el usuario, manteniéndose sutil
- Texto `PROYECTOS CON EMPRESAS` en mayúsculas, tracking amplio, color primary (navy)
- Flecha `→` al final
- Sin fondo, sin caja, pero el punto azul le da visibilidad y distinción respecto a los otros CTAs dorados

**Alternativa con semicírculo real** (si se quiere más peso):
- Un div con `w-3 h-3 rounded-full bg-primary` a la izquierda del texto
- O un pequeño bloque `w-1 h-5 bg-primary rounded-full` (pill vertical) antes del texto

## Copy elegido
`Proyectos con empresas` — comunica exactamente lo que es: trabajo real con clientes empresariales.

Alternativas: "Clientes y proyectos" / "Trabajos realizados"

## Cambios

Solo `src/components/ServicesSection.tsx`, líneas 180-194:

```tsx
{service.portfolioSlug && (
  <div className="mt-8">
    <div className="h-px w-full bg-border/60 mb-6" />
    <Link
      to={`/servicios/${service.portfolioSlug}`}
      className="group/cta inline-flex items-center gap-3 hover:gap-4 transition-all duration-300"
    >
      {/* Navy dot/accent */}
      <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0 
                       group-hover/cta:scale-110 transition-transform duration-300" />
      <span className="text-primary font-semibold text-[12px] uppercase tracking-[0.2em]
                       border-b border-primary/0 group-hover/cta:border-primary/40 
                       transition-all duration-300 pb-px">
        Proyectos con empresas
      </span>
      <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform duration-300 
                              group-hover/cta:translate-x-0.5" />
    </Link>
  </div>
)}
```

El punto azul marino (`bg-primary`) da el acento de color pedido, diferencia el CTA del resto de elementos dorados, y comunica "esto es otra cosa, más importante". El texto cambia a navy en lugar de gold para reforzar la distinción.
