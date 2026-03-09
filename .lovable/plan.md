

## Problema actual
El CTA actual es demasiado discreto: solo texto navy con un puntito, se pierde en la página. No tiene suficiente peso visual para llamar la atención.

## Propuesta: Badge/Botón redondeado con fondo azul y texto dorado

Crear un elemento tipo **pill/badge** visible:

```
┌─────────────────────────────────┐
│  Proyectos con empresas  →      │  ← Fondo azul marino (bg-primary)
└─────────────────────────────────┘    Texto dorado (text-accent)
                                       Bordes redondeados (rounded-lg)
```

### Especificaciones
- **Fondo**: `bg-primary` (azul marino)
- **Texto**: `text-accent` (dorado) + flecha dorada
- **Forma**: `rounded-lg` o `rounded-full` (pill)
- **Padding**: `px-5 py-2.5` para darle presencia
- **Hover**: Sombra sutil y ligero scale

### Código resultante

```tsx
{service.portfolioSlug && (
  <div className="mt-8">
    <Link
      to={`/servicios/${service.portfolioSlug}`}
      className="inline-flex items-center gap-2 bg-primary text-accent 
                 px-5 py-2.5 rounded-lg font-semibold text-sm
                 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
    >
      Proyectos con empresas
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
)}
```

Esto crea un botón visible con contraste fuerte (azul oscuro + dorado) que no se pierde y mantiene coherencia con la paleta del sitio.

