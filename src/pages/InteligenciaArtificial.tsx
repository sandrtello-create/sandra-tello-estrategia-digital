import { Brain, Cpu, Zap, ShieldCheck, Workflow, GraduationCap } from "lucide-react";
import PillarLayout, { PillarSection, PillarCards, PillarFAQ } from "@/components/PillarLayout";

const pillars = [
  { icon: Brain, title: "Criterio primero", description: "La IA amplifica decisiones. Sin criterio detrás, amplifica errores más rápido." },
  { icon: Cpu, title: "Herramientas aplicadas", description: "ChatGPT, Claude, Gemini, agentes, automatizaciones. Cada una en su lugar y con su porqué." },
  { icon: Workflow, title: "Procesos, no trucos", description: "Diseñamos flujos de trabajo repetibles, no prompts sueltos que caducan mañana." },
  { icon: Zap, title: "Impacto medible", description: "Horas ahorradas, calidad estable, tareas delegadas. La IA solo tiene sentido si libera tiempo real." },
  { icon: ShieldCheck, title: "Uso responsable", description: "Privacidad, propiedad intelectual y sesgos. La IA no te exime de responsabilidad, la aumenta." },
  { icon: GraduationCap, title: "Autonomía real", description: "El objetivo no es que dependas de mí. Es que aprendas a decidir con criterio propio." },
];

const faqs = [
  { q: "¿Necesito saber de tecnología para aprovechar la IA en mi trabajo?", a: "No. La mayoría de personas a las que acompaño parten de cero. Lo que necesitas es criterio sobre tu propio negocio; la parte técnica se aprende en el orden correcto y con casos reales, no con tutoriales genéricos." },
  { q: "¿Qué diferencia hay entre 'usar ChatGPT' e integrar IA en mi negocio?", a: "Usar ChatGPT es abrir una ventana y pedir cosas sueltas. Integrar IA es diseñar procesos donde ciertas tareas —producción de contenido, atención al cliente, análisis, propuestas— quedan sistematizadas, medidas y mejoradas con el tiempo." },
  { q: "¿La IA va a reemplazar mi trabajo?", a: "Va a reemplazar tareas, no oficios. Los profesionales que integren IA con criterio van a hacer en dos horas lo que otros hacen en dos días. La pregunta no es si adoptarla; es cuándo y cómo." },
  { q: "¿Es seguro usar IA con datos de clientes?", a: "Depende de la herramienta, el plan contratado y la configuración. Parte del trabajo que hago es diseñar entornos donde la privacidad y el cumplimiento no sean un añadido, sino el punto de partida." },
  { q: "¿Cuánto tiempo tarda una empresa en ver resultados?", a: "En formación in-company, los primeros ahorros de tiempo aparecen en semanas. La integración estratégica completa —procesos, KPIs, adopción real por parte del equipo— suele estabilizarse entre 3 y 6 meses." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Inteligencia artificial para profesionales y empresas",
    author: { "@type": "Person", name: "Sandra Tello" },
    inLanguage: "es",
    about: ["Inteligencia Artificial", "Consultoría IA", "Formación IA"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const InteligenciaArtificial = () => (
  <PillarLayout
    seoTitle="Inteligencia artificial para profesionales y empresas — Sandra Tello"
    seoDescription="IA aplicada con criterio para profesionales y empresas. Consultoría, formación e integración estratégica. Sin humo, con resultados. Sandra Tello."
    path="/inteligencia-artificial-para-profesionales"
    jsonLd={jsonLd}
    eyebrow="Pilar · Inteligencia Artificial"
    title={
      <>
        Inteligencia artificial <span className="text-[#C5A55A]">con criterio</span>.
        <br />
        Sin humo. Sin recetas.
      </>
    }
    intro={
      <>
        La IA ya no es una promesa: es la herramienta con más apalancamiento que
        ha tenido tu profesión en décadas. La diferencia entre usarla bien y
        usarla mal la marca el criterio de quien la maneja. Aquí explico cómo
        integrarla de verdad en tu día a día profesional o en tu empresa.
      </>
    }
  >
    <PillarSection eyebrow="El terreno" title="Ni magia ni amenaza: una palanca.">
      <p>Alrededor de la IA se han montado dos discursos que estorban por igual. El primero la vende como magia inevitable: enchufa el prompt, recoge los resultados, hazte rico. El segundo la presenta como una amenaza existencial que exige quedarse quieto hasta que alguien resuelva el dilema.</p>
      <p>La realidad es más aburrida y más útil: la IA es una palanca. Bien situada, multiplica el trabajo de quien ya sabe lo que hace. Mal situada, produce mucho ruido y ningún resultado. La diferencia está en el criterio previo — el mismo criterio que ya distingue a los buenos profesionales del resto.</p>
    </PillarSection>

    <PillarCards items={pillars} />

    <PillarSection eyebrow="Cómo lo trabajo" title="Un método para integrar IA sin perder el norte.">
      <p><strong className="text-primary">Diagnóstico.</strong> Antes de recomendar ninguna herramienta, entiendo tu negocio, tus procesos actuales y dónde se te va el tiempo de verdad. La IA solo tiene sentido si resuelve un cuello de botella real.</p>
      <p><strong className="text-primary">Selección.</strong> Elegimos entre ChatGPT, Claude, Gemini, Perplexity, herramientas de automatización (Make, n8n, Zapier), agentes personalizados o soluciones específicas del sector. Sin fidelidad marca; fidelidad a lo que te funciona.</p>
      <p><strong className="text-primary">Diseño de procesos.</strong> Convertimos casos de uso en flujos de trabajo documentados. No prompts sueltos que hay que reinventar cada vez.</p>
      <p><strong className="text-primary">Formación aplicada.</strong> Aprendes con tus propios casos, no con ejercicios de manual. La adopción se sostiene porque ves el impacto en tu semana, no en un curso.</p>
      <p><strong className="text-primary">Medición y ajuste.</strong> Horas ahorradas, tareas delegadas, calidad estable. Métricas concretas para saber si de verdad está funcionando.</p>
    </PillarSection>

    <PillarSection variant="cream" eyebrow="Para quién" title="Con quién trabajo en IA.">
      <p><strong className="text-primary">Profesionales independientes</strong> que quieren usar la IA para ganar tiempo y elevar la calidad de su trabajo sin depender de nadie más.</p>
      <p><strong className="text-primary">Equipos de marketing y comunicación</strong> que necesitan producir más contenido sin bajar el estándar ni perder la voz de marca.</p>
      <p><strong className="text-primary">Empresas medianas</strong> que quieren integrar la IA de forma estructural en varios departamentos, no como experimento aislado.</p>
      <p><strong className="text-primary">Directivos</strong> que necesitan entender qué está pasando antes de aprobar presupuestos, contratos o roadmaps de sus equipos.</p>
    </PillarSection>

    <PillarFAQ items={faqs} />
  </PillarLayout>
);

export default InteligenciaArtificial;
