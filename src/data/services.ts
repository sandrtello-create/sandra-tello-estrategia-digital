export interface ServiceCase {
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  bannerImages?: string[];
  beforeAfter?: { before: string; after: string };
}

export interface ServicePortfolio {
  slug: string;
  serviceTitle: string;
  headline: string;
  intro: string;
  cases: ServiceCase[];
}

export const servicePortfolios: ServicePortfolio[] = [
  {
    slug: "auditoria-presencia-digital",
    serviceTitle: "Auditoría de presencia digital",
    headline: "Así trabajamos la presencia digital de nuestros clientes",
    intro:
      "Cada proyecto empieza con un diagnóstico honesto. A partir de ahí, diseñamos un plan de acción claro y medible. Aquí tienes algunos ejemplos reales de cómo hemos ayudado a marcas y profesionales a mejorar su ecosistema digital.",
    cases: [
      {
        title: "Turismo de Castilla-La Mancha",
        sector: "Turismo institucional",
        challenge:
          "La presencia digital del organismo estaba fragmentada: perfiles desactualizados, contenido sin estrategia y poca coherencia entre canales. Necesitaban un diagnóstico claro para reorientar su comunicación online.",
        solution:
          "Realizamos una auditoría completa de su ecosistema digital: web, redes sociales, reputación online y coherencia de marca. Entregamos un informe con recomendaciones priorizadas y un plan de acción a 6 meses.",
        results: [
          { label: "Canales auditados", value: "8" },
          { label: "Mejora engagement", value: "+45%" },
          { label: "Recomendaciones implementadas", value: "87%" },
          { label: "Tiempo de ejecución", value: "3 meses" },
        ],
      },
      {
        title: "Optimización de perfiles LinkedIn",
        sector: "Marca personal / LinkedIn",
        challenge:
          "Profesionales y directivos con perfiles de LinkedIn que no reflejaban su valor real: headlines genéricos, banners sin diseño, secciones 'acerca de' sin estrategia ni diferenciación.",
        solution:
          "Auditoría visual y de contenido del perfil completo. Rediseño de banner, headline y sección 'acerca de'. Optimización orientada a posicionamiento y atracción de oportunidades.",
        results: [
          { label: "Visitas al perfil", value: "+210%" },
          { label: "Impresiones contenido", value: "+175%" },
          { label: "Perfiles optimizados", value: "15+" },
          { label: "Mejora de conversión", value: "+60%" },
        ],
        bannerImages: [
          "/placeholder.svg",
          "/placeholder.svg",
          "/placeholder.svg",
        ],
        beforeAfter: {
          before: "/placeholder.svg",
          after: "/placeholder.svg",
        },
      },
      {
        title: "Directivo sector tecnológico",
        sector: "Tecnología / SaaS",
        challenge:
          "Un CEO de una startup tecnológica quería posicionarse como referente en LinkedIn pero su perfil no transmitía su experiencia ni su visión. La imagen de marca personal era inexistente.",
        solution:
          "Auditoría de su perfil de LinkedIn, estrategia de contenidos y plan de publicación semanal. Acompañamiento durante 3 meses para consolidar el posicionamiento.",
        results: [
          { label: "Visitas al perfil", value: "+320%" },
          { label: "Conexiones relevantes", value: "+180" },
          { label: "Publicaciones/mes", value: "8" },
          { label: "Leads generados", value: "12" },
        ],
      },
    ],
  },
];
