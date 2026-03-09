import turismoMolinos from "@/assets/portfolio/turismo-molinos.jpg";
import turismoGastronomia from "@/assets/portfolio/turismo-gastronomia.jpg";
import logisticaGoogle from "@/assets/portfolio/logistica-google-business-v2.jpg";
import logisticaInstagram from "@/assets/portfolio/logistica-instagram.jpg";
import logisticaWeb from "@/assets/portfolio/logistica-web.jpg";
import mysteryTienda from "@/assets/portfolio/mystery-tienda.jpg";
import mysteryEvaluacion from "@/assets/portfolio/mystery-evaluacion-v2.jpg";
import mysteryInforme from "@/assets/portfolio/mystery-informe.jpg";

export interface ServiceCase {
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  galleryImages?: { src: string; alt: string; caption?: string }[];
  bannerBeforeAfter?: { before: string; after: string }[];
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
    slug: "auditoria-de-negocio",
    serviceTitle: "Auditoría de negocio",
    headline: "Así audito negocios: presencia digital y experiencia real",
    intro:
      "Cada proyecto empieza con un diagnóstico honesto —online o presencial— apoyado en herramientas de inteligencia artificial para extraer insights más profundos y actuar con mayor precisión. A partir de ahí, diseño un plan de acción claro y medible. Aquí tienes algunos ejemplos reales.",
    cases: [
      {
        title: "Turismo de Castilla-La Mancha",
        sector: "Turismo institucional",
        challenge:
          "La presencia digital del organismo estaba fragmentada: perfiles desactualizados, contenido sin estrategia y poca coherencia entre canales. Necesitaban un diagnóstico claro para reorientar su comunicación online.",
        solution:
          "Realicé una auditoría completa de su ecosistema digital: web, redes sociales, reputación online y coherencia de marca. Entregué un informe con recomendaciones priorizadas y un plan de acción a 6 meses.",
        results: [
          { label: "Canales auditados", value: "8" },
          { label: "Mejora engagement", value: "+45%" },
          { label: "Recomendaciones implementadas", value: "87%" },
          { label: "Tiempo de ejecución", value: "3 meses" },
        ],
        galleryImages: [
          { src: turismoMolinos, alt: "Molinos de viento de La Mancha", caption: "Molinos de La Mancha" },
          { src: turismoGastronomia, alt: "Gastronomía manchega con queso y vino", caption: "Gastronomía manchega" },
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
        bannerBeforeAfter: [],
      },
      {
        title: "Empresa de logística y transporte",
        sector: "Transporte / Logística",
        challenge:
          "Una empresa de transporte y logística con más de 15 años en el sector tenía una presencia digital completamente descoordinada: web desactualizada, Instagram sin estrategia, LinkedIn corporativo abandonado y ficha de Google Business sin optimizar. No existía una narrativa de marca clara ni coherencia entre canales.",
        solution:
          "Realicé una auditoría 360° de todos los canales digitales: web, Instagram, LinkedIn y Google Business. Redefiní la narrativa de marca, diseñé un plan estratégico de contenidos multicanal y creé una guía de identidad digital para unificar la comunicación.",
        results: [
          { label: "Canales auditados", value: "6" },
          { label: "Mejora tráfico web", value: "+85%" },
          { label: "Crecimiento seguidores", value: "+130%" },
          { label: "Coherencia de marca", value: "100%" },
        ],
        galleryImages: [
          { src: logisticaGoogle, alt: "Perfil de Google Business de empresa de transporte", caption: "Google Business" },
          { src: logisticaInstagram, alt: "Perfil de Instagram de empresa logística", caption: "Instagram" },
          { src: logisticaWeb, alt: "Página web corporativa de empresa de transporte", caption: "Página web" },
        ],
      },
      {
        title: "Auditoría Mystery Shopper para cadena retail",
        sector: "Retail / Mystery Shopping",
        challenge:
          "Una cadena de tiendas con presencia en varias ciudades sospechaba que la experiencia real del cliente no coincidía con lo que comunicaban en sus canales digitales. Había quejas recurrentes sobre atención al cliente, pero no tenían datos objetivos para identificar los puntos de fricción.",
        solution:
          "Diseñé y ejecuté un programa de Mystery Shopper con visitas presenciales y llamadas telefónicas a 20 puntos de venta. Evalué la atención al cliente, coherencia con la imagen de marca digital y cumplimiento de protocolos internos. Entregué un informe comparativo online vs offline con recomendaciones priorizadas.",
        results: [
          { label: "Puntos auditados", value: "20" },
          { label: "Incidencias detectadas", value: "34" },
          { label: "Mejora satisfacción", value: "+40%" },
          { label: "Recomendaciones aplicadas", value: "91%" },
        ],
        galleryImages: [
          { src: mysteryTienda, alt: "Mystery shopper evaluando tienda retail", caption: "Punto de venta" },
          { src: mysteryEvaluacion, alt: "Checklist de evaluación de experiencia del cliente en español", caption: "Evaluación de experiencia" },
          { src: mysteryInforme, alt: "Informe de resultados de mystery shopping en español", caption: "Informe de resultados" },
        ],
      },
    ],
  },
];
