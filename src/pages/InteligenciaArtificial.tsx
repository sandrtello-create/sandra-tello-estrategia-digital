import { ArrowRight, Brain, Cpu, Zap, ShieldCheck, Workflow, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InlineCTA from "@/components/InlineCTA";

const pillars = [
  { icon: Brain, title: "Criterio primero", description: "La IA amplifica decisiones. Sin criterio detrás, amplifica errores más rápido." },
  { icon: Cpu, title: "Herramientas aplicadas", description: "ChatGPT, Claude, Gemini, agentes, automatizaciones. Cada una en su lugar y con su porqué." },
  { icon: Workflow, title: "Procesos, no trucos", description: "Diseñamos flujos de trabajo repetibles, no prompts sueltos que caducan mañana." },
  { icon: Zap, title: "Impacto medible", description: "Horas ahorradas, calidad estable, tareas delegadas. La IA solo tiene sentido si libera tiempo real." },
  { icon: ShieldCheck, title: "Uso responsable", description: "Privacidad, propiedad intelectual y sesgos. La IA no te exime de responsabilidad, la aumenta." },
  { icon: GraduationCap, title: "Autonomía real", description: "El objetivo no es que dependas de mí. Es que aprendas a decidir con criterio propio." },
];

const metodo = [
  ["Diagnóstico", "Antes de recomendar ninguna herramienta, entiendo tu negocio, tus procesos actuales y dónde se te va el tiempo de verdad."],
  ["Selección", "Elegimos entre ChatGPT, Claude, Gemini, Perplexity, herramientas de automatización o agentes personalizados. Sin fidelidad a marca; fidelidad a lo que funciona."],
  ["Diseño de procesos", "Convertimos casos de uso en flujos de trabajo documentados. No prompts sueltos que hay que reinventar cada vez."],
  ["Formación aplicada", "Aprendes con tus propios casos, no con ejercicios de manual. La adopción se sostiene porque ves el impacto en tu semana."],
  ["Medición y ajuste", "Horas ahorradas, tareas delegadas, calidad estable. Métricas concretas para saber si de verdad está funcionando."],
];

const audiencias = [
  ["Profesionales independientes", "Que quieren usar la IA para ganar tiempo y elevar la calidad de su trabajo sin depender de nadie más."],
  ["Equipos de marketing y comunicación", "Que necesitan producir más contenido sin bajar el estándar ni perder la voz de marca."],
  ["Empresas medianas", "Que quieren integrar la IA de forma estructural en varios departamentos, no como experimento aislado."],
  ["Directivos", "Que necesitan entender qué está pasando antes de aprobar presupuestos, contratos o roadmaps."],
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
  <div className="min-h-screen bg-[#1B2A4A]">
    <SEO
      title="Inteligencia artificial para profesionales y empresas — Sandra Tello"
      description="IA aplicada con criterio para profesionales y empresas. Consultoría, formación e integración estratégica. Sin humo, con resultados. Sandra Tello."
      path="/inteligencia-artificial-para-profesionales"
      jsonLd={jsonLd}
    />
    <Navbar />

    {/* HERO — navy con brand-teal como acento tech */}
    <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[#1B2A4A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(1000px 500px at 15% 15%, hsl(var(--brand-teal) / 0.14), transparent 60%), radial-gradient(900px 500px at 100% 100%, hsl(var(--gold) / 0.14), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--brand-teal)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-teal)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-16 bg-[hsl(var(--brand-teal))]" />
          <p className="text-[hsl(var(--brand-teal))] font-semibold text-[11px] uppercase tracking-[0.34em]">
            Consultoría inteligencia artificial · Formación IA para empresas
          </p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[84px] font-medium text-white leading-[1.02] max-w-6xl tracking-tight">
          Inteligencia artificial para empresas<br />
          <span className="italic text-[#C5A55A]">con criterio</span>.
        </h1>
        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <p className="lg:col-span-7 font-serif text-white/75 text-xl leading-[1.75]">
            La IA ya no es una promesa: es la herramienta con más apalancamiento
            que ha tenido tu profesión en décadas. La diferencia entre usarla
            bien y mal la marca el criterio de quien la maneja.
          </p>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <div className="border-l-2 border-[hsl(var(--brand-teal))] pl-6">
              <p className="text-white text-3xl font-serif italic leading-tight">
                Sin humo.<br />Sin recetas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* El terreno — split navy */}
    <section className="py-24 lg:py-32 bg-[#1B2A4A] border-t border-[hsl(var(--brand-teal))]/25">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[hsl(var(--brand-teal))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
              El terreno
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.1] font-medium">
              Ni magia ni amenaza:<br /><span className="italic text-[hsl(var(--brand-teal))]">una palanca</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 font-serif text-[19px] leading-[1.75] text-white/80">
            <p>Alrededor de la IA se han montado dos discursos que estorban por igual. El primero la vende como magia inevitable: enchufa el prompt, recoge los resultados, hazte rico. El segundo la presenta como una amenaza existencial que exige quedarse quieto.</p>
            <p>La realidad es más aburrida y más útil: la IA es una <em className="text-[hsl(var(--brand-teal))] not-italic">palanca</em>. Bien situada, multiplica el trabajo de quien ya sabe lo que hace. Mal situada, produce ruido y ningún resultado.</p>
            <p>La diferencia está en el criterio previo — el mismo que ya distingue a los buenos profesionales del resto.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Seis pilares — grid con teal y gold alternos */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[hsl(var(--brand-teal))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Seis principios
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
            Cómo integro <span className="italic">la IA de verdad</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/15 border border-primary/15">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="bg-white p-10 min-h-[280px] flex flex-col justify-between group hover:bg-[hsl(var(--section-alt))] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center ${
                    i % 2 === 0 ? "bg-[hsl(var(--brand-teal))]/15" : "bg-[hsl(var(--gold))]/15"
                  }`}
                >
                  <p.icon
                    className={`h-6 w-6 ${
                      i % 2 === 0 ? "text-[hsl(var(--brand-teal))]" : "text-[#C5A55A]"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <span className="font-serif italic text-primary/25 text-3xl">0{i + 1}</span>
              </div>
              <div>
                <h3 className="font-serif text-xl lg:text-2xl text-primary font-medium mb-3">
                  {p.title}
                </h3>
                <p className="font-serif text-foreground/70 text-[16px] leading-[1.7]">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <InlineCTA
      variant="navy"
      kicker="Consultoría IA"
      title="¿Integramos la IA en tu negocio con criterio?"
      description="Una sesión estratégica para diagnosticar dónde tiene sentido aplicar inteligencia artificial en tus procesos —y dónde no todavía—."
      primaryLabel="Reserva sesión"
      secondaryLabel="Ver formación in-company"
      secondaryHref="/formacion"
    />

    {/* Método — banda navy con teal */}
    <section className="py-24 lg:py-32 bg-[#1B2A4A]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[hsl(var(--brand-teal))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Cómo lo trabajo
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.1] font-medium">
            Un método para integrar IA <span className="italic text-[hsl(var(--brand-teal))]">sin perder el norte</span>.
          </h2>
        </div>
        <ol className="space-y-8">
          {metodo.map(([title, body], i) => (
            <li key={title} className="grid lg:grid-cols-12 gap-6 border-t border-[hsl(var(--brand-teal))]/25 pt-8">
              <div className="lg:col-span-1">
                <span className="font-serif text-4xl text-[hsl(var(--brand-teal))]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl text-white font-medium">{title}</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="font-serif text-lg text-white/75 leading-[1.75]">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Para quién — grid cream con teal */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[hsl(var(--brand-teal))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Para quién
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
            Con quién trabajo en <span className="italic">IA</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {audiencias.map(([title, body], i) => (
            <div key={title} className="bg-white p-10 border-l-4 border-[hsl(var(--brand-teal))]">
              <span className="font-serif italic text-[hsl(var(--brand-teal))] text-2xl">0{i + 1}</span>
              <h3 className="font-serif text-2xl text-primary font-medium mt-2 mb-4">{title}</h3>
              <p className="font-serif text-lg text-foreground/75 leading-[1.7]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <p className="text-[hsl(var(--brand-teal))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-4">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-14 leading-[1.15] font-medium">
          Lo que suelen preguntarme.
        </h2>
        <div className="divide-y divide-[hsl(var(--brand-teal))]/25 border-t border-b border-[hsl(var(--brand-teal))]/25">
          {faqs.map((item) => (
            <details key={item.q} className="group py-8">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h3 className="font-serif text-xl md:text-2xl text-primary font-medium leading-snug">
                  {item.q}
                </h3>
                <span className="text-[hsl(var(--brand-teal))] text-3xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-5 text-foreground/75 text-[17px] leading-[1.75] font-serif max-w-3xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — navy */}
    <section className="py-24 lg:py-28 bg-[#1B2A4A] border-t border-[hsl(var(--brand-teal))]/25">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.15] mb-8 font-medium">
          ¿Diseñamos tu <span className="italic text-[hsl(var(--brand-teal))]">integración de IA</span>?
        </h2>
        <a
          href="/#contacto"
          className="btn-gold-gradient inline-flex items-center gap-3 px-10 py-4 text-[13px] uppercase tracking-[0.24em] font-semibold"
        >
          Hablamos
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default InteligenciaArtificial;
