export interface ViralPost {
  title: string;
  impressions: string;
  date: string;
  image?: string;
}

export interface Metrics {
  followers: string;
  impressionsPerMonth: string;
  engagementRate: string;
}

export interface Profile {
  name: string;
  role: string;
  linkedin: string;
  photo: string;
  slug: string;
  metrics?: Metrics;
  viralPosts?: ViralPost[];
  testimonial?: string;
}

export const profiles: Profile[] = [
  {
    name: "Jesús Arévalo",
    role: "Especialista en estrategia digital",
    linkedin: "https://www.linkedin.com/in/jesusarevalo",
    photo: "https://i.pravatar.cc/400?u=jesus-arevalo",
    slug: "jesus-arevalo",
    metrics: { followers: "8.200", impressionsPerMonth: "62.000", engagementRate: "3,8%" },
    viralPosts: [
      { title: "Cómo construí mi estrategia digital desde cero", impressions: "21.000", date: "Feb 2025" },
      { title: "El error que casi arruina mi marca personal", impressions: "14.500", date: "Ene 2025" },
    ],
    testimonial: "Sandra me ayudó a entender que primero va la estrategia y después el contenido. Eso cambió todo.",
  },
  {
    name: "Javier Burgueño",
    role: "Director de marketing",
    linkedin: "https://www.linkedin.com/in/javierburgueño",
    photo: "https://i.pravatar.cc/400?u=javier-burgueno",
    slug: "javier-burgueno",
    metrics: { followers: "15.300", impressionsPerMonth: "94.000", engagementRate: "4,5%" },
    viralPosts: [
      { title: "Por qué los directores de marketing deben tener marca personal", impressions: "38.000", date: "Mar 2025" },
      { title: "Las 3 claves del marketing que nadie te enseña", impressions: "22.000", date: "Feb 2025" },
    ],
    testimonial: "Pasé de publicar sin orden ni concierto a tener un sistema claro y resultados reales en 3 meses.",
  },
  {
    name: "Christian Helmut",
    role: "CEO & Emprendedor",
    linkedin: "https://www.linkedin.com/in/christianhelmut",
    photo: "https://i.pravatar.cc/400?u=christian-helmut",
    slug: "christian-helmut",
    metrics: { followers: "22.100", impressionsPerMonth: "130.000", engagementRate: "5,1%" },
    viralPosts: [
      { title: "Lo que aprendí al fundar 3 empresas antes de los 35", impressions: "55.000", date: "Ene 2025" },
      { title: "CEO con marca personal: la ventaja competitiva", impressions: "31.000", date: "Dic 2024" },
    ],
    testimonial: "Sandra entiende el lenguaje del negocio. No es una coach de contenido, es una estratega.",
  },
  {
    name: "Jaime Higuera",
    role: "Consultor de negocio",
    linkedin: "https://www.linkedin.com/in/jaimehiguera",
    photo: "https://i.pravatar.cc/400?u=jaime-higuera",
    slug: "jaime-higuera",
    metrics: { followers: "6.800", impressionsPerMonth: "48.000", engagementRate: "3,2%" },
    viralPosts: [
      { title: "5 preguntas que todo consultor debería hacerse", impressions: "19.000", date: "Mar 2025" },
    ],
  },
  {
    name: "Sara Mercado",
    role: "Especialista en RRHH",
    linkedin: "https://www.linkedin.com/in/saramercado",
    photo: "https://i.pravatar.cc/400?u=sara-mercado",
    slug: "sara-mercado",
    metrics: { followers: "9.400", impressionsPerMonth: "71.000", engagementRate: "4,0%" },
    viralPosts: [
      { title: "El futuro del talento en las organizaciones", impressions: "27.000", date: "Feb 2025" },
      { title: "Por qué los profesionales de RRHH necesitan visibilidad", impressions: "16.000", date: "Ene 2025" },
    ],
    testimonial: "Gracias a Sandra dejé de sentirme invisible en LinkedIn y empecé a recibir oportunidades reales.",
  },
  {
    name: "Fran Tirado",
    role: "Coach ejecutivo",
    linkedin: "https://www.linkedin.com/in/frantirado",
    photo: "https://i.pravatar.cc/400?u=fran-tirado",
    slug: "fran-tirado",
    metrics: { followers: "11.700", impressionsPerMonth: "85.000", engagementRate: "4,7%" },
    viralPosts: [
      { title: "Cómo el coaching ejecutivo cambió mi vida", impressions: "33.000", date: "Mar 2025" },
    ],
  },
  {
    name: "Alfonso Bastida",
    role: "Experto en ventas cum laude",
    linkedin: "https://www.linkedin.com/in/alfonsobastida",
    photo: "https://i.pravatar.cc/400?u=alfonso-bastida",
    slug: "alfonso-bastida",
    metrics: { followers: "18.600", impressionsPerMonth: "110.000", engagementRate: "5,3%" },
    viralPosts: [
      { title: "Cómo cerré mi mayor venta usando LinkedIn", impressions: "44.000", date: "Feb 2025" },
      { title: "El método de ventas que nadie enseña en las escuelas", impressions: "29.000", date: "Ene 2025" },
    ],
    testimonial: "Sandra me ayudó a posicionarme con autoridad en ventas. Ahora los clientes me buscan a mí.",
  },
  {
    name: "Mada Leis",
    role: "Directora creativa",
    linkedin: "https://www.linkedin.com/in/madaleis",
    photo: "https://i.pravatar.cc/400?u=mada-leis",
    slug: "mada-leis",
    metrics: { followers: "13.200", impressionsPerMonth: "79.000", engagementRate: "4,2%" },
    viralPosts: [
      { title: "La creatividad como ventaja competitiva en 2025", impressions: "25.000", date: "Mar 2025" },
    ],
  },
  {
    name: "Romuald Fons",
    role: "Experto en SEO",
    linkedin: "https://www.linkedin.com/in/romualdfons",
    photo: "https://i.pravatar.cc/400?u=romuald-fons",
    slug: "romuald-fons",
    metrics: { followers: "31.500", impressionsPerMonth: "195.000", engagementRate: "6,1%" },
    viralPosts: [
      { title: "SEO en 2025: lo que realmente funciona", impressions: "82.000", date: "Ene 2025" },
      { title: "Cómo posicioné 10 proyectos en 6 meses", impressions: "61.000", date: "Dic 2024" },
    ],
    testimonial: "El trabajo estratégico con Sandra me permitió crear contenido con propósito, no solo por publicar.",
  },
  {
    name: "Fabio Serna",
    role: "Especialista en branding",
    linkedin: "https://www.linkedin.com/in/fabioserna",
    photo: "https://i.pravatar.cc/400?u=fabio-serna",
    slug: "fabio-serna",
    metrics: { followers: "7.900", impressionsPerMonth: "55.000", engagementRate: "3,6%" },
    viralPosts: [
      { title: "Tu marca personal empieza antes del logo", impressions: "22.000", date: "Feb 2025" },
    ],
  },
  {
    name: "Inma Asencio",
    role: "Comunicadora y speaker",
    linkedin: "https://www.linkedin.com/in/inmaasencio",
    photo: "https://i.pravatar.cc/400?u=inma-asencio",
    slug: "inma-asencio",
    metrics: { followers: "14.800", impressionsPerMonth: "98.000", engagementRate: "4,9%" },
    viralPosts: [
      { title: "Hablar en público como estrategia de marca personal", impressions: "41.000", date: "Mar 2025" },
      { title: "Cómo conseguí mi primer keynote", impressions: "28.000", date: "Ene 2025" },
    ],
    testimonial: "Sandra me ayudó a trasladar mi energía como speaker a mi perfil digital. Resultado: 3 nuevas ponencias.",
  },
  {
    name: "Patricia Bartolomé",
    role: "Consultora de imagen",
    linkedin: "https://www.linkedin.com/in/patriciabartolome",
    photo: "https://i.pravatar.cc/400?u=patricia-bartolome",
    slug: "patricia-bartolome",
    metrics: { followers: "10.100", impressionsPerMonth: "67.000", engagementRate: "3,9%" },
    viralPosts: [
      { title: "La imagen profesional va más allá de la ropa", impressions: "18.000", date: "Feb 2025" },
    ],
  },
  {
    name: "Martín Arosa",
    role: "Director comercial",
    linkedin: "https://www.linkedin.com/in/martinarosa",
    photo: "https://i.pravatar.cc/400?u=martin-arosa",
    slug: "martin-arosa",
    metrics: { followers: "8.700", impressionsPerMonth: "59.000", engagementRate: "3,4%" },
    viralPosts: [
      { title: "Cómo lidero equipos comerciales de alto rendimiento", impressions: "23.000", date: "Mar 2025" },
    ],
  },
  {
    name: "David Diago",
    role: "Empresario y mentor",
    linkedin: "https://www.linkedin.com/in/daviddiago",
    photo: "https://i.pravatar.cc/400?u=david-diago",
    slug: "david-diago",
    metrics: { followers: "19.200", impressionsPerMonth: "115.000", engagementRate: "5,0%" },
    viralPosts: [
      { title: "Lo que nadie te dice sobre emprender de verdad", impressions: "47.000", date: "Feb 2025" },
      { title: "Mi mayor fracaso y qué aprendí de él", impressions: "39.000", date: "Dic 2024" },
    ],
    testimonial: "Invertir en mi marca personal con Sandra fue la mejor decisión de negocio que tomé este año.",
  },
  {
    name: "Fede Almela",
    role: "Experto en liderazgo",
    linkedin: "https://www.linkedin.com/in/fedealmela",
    photo: "https://i.pravatar.cc/400?u=fede-almela",
    slug: "fede-almela",
    metrics: { followers: "12.300", impressionsPerMonth: "80.000", engagementRate: "4,3%" },
    viralPosts: [
      { title: "Liderazgo auténtico: la clave que los manuales ignoran", impressions: "34.000", date: "Mar 2025" },
    ],
  },
  {
    name: "Darío Sandoval",
    role: "Especialista en productividad",
    linkedin: "https://www.linkedin.com/in/dariosandoval",
    photo: "https://i.pravatar.cc/400?u=dario-sandoval",
    slug: "dario-sandoval",
    metrics: { followers: "7.500", impressionsPerMonth: "51.000", engagementRate: "3,5%" },
    viralPosts: [
      { title: "El sistema de productividad que cambió mi carrera", impressions: "20.000", date: "Ene 2025" },
    ],
  },
  {
    name: "Marc Arias",
    role: "Director de innovación",
    linkedin: "https://www.linkedin.com/in/marcarias",
    photo: "https://i.pravatar.cc/400?u=marc-arias",
    slug: "marc-arias",
    metrics: { followers: "11.000", impressionsPerMonth: "74.000", engagementRate: "4,1%" },
    viralPosts: [
      { title: "Innovar desde dentro: el rol del director de innovación", impressions: "28.000", date: "Feb 2025" },
    ],
  },
  {
    name: "Sergi Candel",
    role: "Coach de negocios",
    linkedin: "https://www.linkedin.com/in/sergicandel",
    photo: "https://i.pravatar.cc/400?u=sergi-candel",
    slug: "sergi-candel",
    metrics: { followers: "9.800", impressionsPerMonth: "68.000", engagementRate: "4,0%" },
    viralPosts: [
      { title: "Preguntas que hacen crecer los negocios", impressions: "24.000", date: "Mar 2025" },
    ],
  },
  {
    name: "Carlos Morillo",
    role: "Consultor estratégico",
    linkedin: "https://www.linkedin.com/in/carlosmorillo",
    photo: "https://i.pravatar.cc/400?u=carlos-morillo",
    slug: "carlos-morillo",
    metrics: { followers: "6.200", impressionsPerMonth: "44.000", engagementRate: "3,1%" },
    viralPosts: [
      { title: "Estrategia sin ejecución es fantasía", impressions: "17.000", date: "Feb 2025" },
    ],
  },
];
