import { ArrowRight, Brain, Cpu, BarChart3, Heart, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const pillars = [
  { icon: Brain, title: "Mentalidad", description: "Trabajamos primero el autosabotaje, el síndrome del impostor y la relación con tu propio valor. Sin esto, ninguna estrategia sostiene." },
  { icon: Cpu, title: "Inteligencia Artificial", description: "Herramientas de IA aplicadas con propósito para multiplicar tu impacto, ordenar tu proceso y liberar tu tiempo." },
  { icon: BarChart3, title: "Marketing", description: "Posicionamiento, visibilidad y autoridad. Comunicación coherente que genera oportunidades reales de negocio." },
  { icon: Heart, title: "VIDA", description: "Alineación entre proyecto profesional y vida personal. Lo relacional prevalece a lo transaccional." },
  { icon: Briefcase, title: "Negocio", description: "Estrategia, objetivos claros y plan de acción para generar resultados sostenibles, no picos aislados." },
];

const recorrido = [
  { label: "Sesión de diagnóstico", body: "Revisamos tu punto de partida en los cinco pilares. Salimos con un mapa claro de qué está sólido y dónde están los cuellos de botella." },
  { label: "Definición de foco", body: "Elegimos por dónde empezar. Rara vez es donde el cliente esperaba. Casi siempre es más profundo y más simple a la vez." },
  { label: "Trabajo por bloques", body: "Sesiones quincenales, con tareas concretas entre medias. Se avanza en un pilar hasta que se estabiliza; después se salta al siguiente." },
  { label: "Revisiones cruzadas", body: "Cada dos meses miramos el conjunto: cómo se están afectando los pilares entre sí, qué hay que reajustar." },
  { label: "Cierre con autonomía", body: "El objetivo no es que dependas de mí. Es que salgas con un sistema tuyo que funcione sin necesitar acompañamiento continuo." },
];

const faqs = [
  { q: "¿Por qué cinco pilares y no uno?", a: "Porque los problemas reales son sistémicos. Trabajar solo mentalidad deja intactos los procesos; trabajar solo marketing choca con la falta de criterio interno; trabajar solo IA acelera lo que no funcionaba. Los cinco pilares se sostienen entre sí." },
  { q: "¿En qué orden se aplica?", a: "Depende del punto de partida. En unos casos hay que trabajar primero mentalidad; en otros el negocio ya está claro y toca marca y visibilidad. La primera sesión sirve para diagnosticar por dónde empezar contigo." },
  { q: "¿Es solo para emprendedores?", a: "No. Funciona también con directivos, consultores, profesionales liberales y equipos internos de empresas medianas. Cambia el enfoque, no la lógica." },
  { q: "¿Cuánto dura un proceso completo?", a: "Un acompañamiento típico dura entre 3 y 6 meses. Para transformaciones más profundas o proyectos con equipo, hasta 12 meses." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Metodología Inteligencia Humana Estratégica",
  provider: { "@type": "Person", name: "Sandra Tello" },
  serviceType: "Consultoría estratégica",
  areaServed: "ES",
  description: "Método propio que integra mentalidad, IA, marketing, vida y negocio para construir autoridad profesional real.",
};

const Metodologia = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))]">
    <SEO
      title="Metodología Inteligencia Humana Estratégica™ — Sandra Tello"
      description="Método propio de Sandra Tello: cinco pilares que integran mentalidad, IA, marketing, vida y negocio para posicionarte con criterio real."
      path="/metodologia"
      jsonLd={jsonLd}
    />
    <Navbar />

    {/* HERO editorial crema */}
    <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[hsl(var(--cream))] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#C5A55A]" />
              <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.34em]">
                El método
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[80px] font-medium text-primary leading-[1.02] tracking-tight">
              Inteligencia<br />
              Humana <span className="italic text-[#C5A55A]">Estratégica</span>
              <sup className="text-2xl lg:text-3xl text-[#C5A55A] font-normal">™</sup>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="font-serif text-lg leading-[1.75] text-foreground/75 border-l border-[#C5A55A]/40 pl-6">
              No es un método más de productividad ni una plantilla exportada. Es
              un sistema construido a partir de veinte años dentro de empresas,
              un despido, un máster en IA y muchos procesos acompañando a otros.
            </p>
          </div>
        </div>
      </div>
    </header>

    {/* Manifiesto de origen — dos columnas asimétricas */}
    <section className="relative py-24 lg:py-32 bg-[hsl(var(--section-alt))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
              De dónde viene
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
              Lo que faltaba en <span className="italic">cada</span> parcela.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 font-serif text-[19px] leading-[1.75] text-foreground/80">
            <p>La mayoría de metodologías de consultoría vienen de un solo mundo: solo estrategia, solo marketing, solo desarrollo personal, solo tecnología. Cada una funciona en su parcela y falla en cuanto la vida real se cruza.</p>
            <p>Inteligencia Humana Estratégica™ nace de haber estado dentro de esas parcelas —Derecho, ADE, marketing, mediación, IA— y haber visto en primera persona qué falta cuando cada una se aplica sola. La respuesta corta: <em className="text-primary not-italic font-semibold">falta la persona</em>.</p>
            <p>El método pone a la persona en el centro y organiza a su alrededor los cinco frentes que realmente mueven un proyecto profesional. Ninguno se trabaja aislado.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Cinco pilares — editorial, con línea horizontal y números grandes */}
    <section className="relative py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Los cinco pilares
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl text-primary leading-[1.05] font-medium">
            Cinco frentes.<br />
            <span className="italic text-[hsl(var(--navy-mid))]">Una sola persona.</span>
          </h2>
        </div>

        <div className="divide-y divide-[#C5A55A]/25 border-t border-b border-[#C5A55A]/25">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="grid lg:grid-cols-12 gap-8 py-12 lg:py-16 group hover:bg-white/40 transition-colors"
            >
              <div className="lg:col-span-2">
                <span className="font-serif text-6xl lg:text-7xl text-[#C5A55A] leading-none">
                  0{i + 1}
                </span>
              </div>
              <div className="lg:col-span-4 flex items-center gap-4">
                <p.icon className="h-7 w-7 text-primary shrink-0" strokeWidth={1.5} />
                <h3 className="font-serif text-3xl lg:text-4xl text-primary font-medium">
                  {p.title}
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="font-serif text-lg leading-[1.75] text-foreground/75">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Recorrido — banda navy con timeline vertical dorada */}
    <section className="relative py-24 lg:py-32 bg-[#1B2A4A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(1000px 500px at 80% 20%, hsl(var(--gold) / 0.18), transparent 60%)",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="gold-gradient-text font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            El recorrido
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.1] font-medium">
            Cómo se aplica, <span className="italic text-[#C5A55A]">en concreto</span>.
          </h2>
        </div>

        <ol className="relative border-l-2 border-[#C5A55A]/40 ml-4 lg:ml-8 space-y-14">
          {recorrido.map((step, i) => (
            <li key={step.label} className="pl-10 lg:pl-14 relative">
              <span className="absolute -left-[11px] top-1 w-5 h-5 bg-[#C5A55A] rotate-45" />
              <p className="text-[#C5A55A] font-semibold text-xs uppercase tracking-[0.28em] mb-3">
                Etapa 0{i + 1}
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4 font-medium">
                {step.label}
              </h3>
              <p className="font-serif text-lg text-white/75 leading-[1.75] max-w-2xl">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Cita editorial */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--hero-bg))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
        <p className="text-[#C5A55A] text-5xl font-serif leading-none mb-6">“</p>
        <blockquote className="font-serif italic text-3xl md:text-4xl lg:text-[42px] text-primary leading-[1.25]">
          Lo relacional prevalece a lo transaccional.
        </blockquote>
        <p className="mt-8 text-foreground/60 text-sm uppercase tracking-[0.3em]">— Sandra Tello</p>
      </div>
    </section>

    {/* FAQ crema */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em] mb-4">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-14 leading-[1.15] font-medium">
          Lo que suelen preguntarme.
        </h2>
        <div className="divide-y divide-[#C5A55A]/30 border-t border-b border-[#C5A55A]/30">
          {faqs.map((item) => (
            <details key={item.q} className="group py-8">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h3 className="font-serif text-xl md:text-2xl text-primary font-medium leading-snug">
                  {item.q}
                </h3>
                <span className="text-[#C5A55A] text-3xl leading-none shrink-0 group-open:rotate-45 transition-transform">
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

    {/* CTA cierre — crema con marco dorado */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="border-2 border-[#C5A55A] p-12 lg:p-20 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--cream))] px-6">
            <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em]">
              El siguiente paso
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-primary leading-[1.15] mb-6 font-medium">
            ¿Hablamos de <span className="italic">tu</span> caso concreto?
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Cada proyecto es distinto. Lo revisamos juntas y decidimos si hay
            encaje. Sin fórmulas prefabricadas.
          </p>
          <a
            href="/#contacto"
            className="btn-gold-gradient inline-flex items-center gap-3 px-10 py-4 text-[13px] uppercase tracking-[0.24em] font-semibold"
          >
            Trabaja conmigo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Metodologia;
