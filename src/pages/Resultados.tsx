import { ArrowRight, Eye, TrendingUp, Award, Compass, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InlineCTA from "@/components/InlineCTA";

const results = [
  { icon: Eye, title: "Claridad", description: "Visión clara de tu posicionamiento, tu mensaje y tus próximos pasos estratégicos." },
  { icon: TrendingUp, title: "Mejor posicionamiento", description: "Diferenciación real en tu mercado con una marca personal que atrae oportunidades." },
  { icon: Award, title: "Autoridad profesional", description: "Reputación construida en tu sector con una presencia que inspira confianza." },
  { icon: Compass, title: "Decisiones estratégicas", description: "Mejores decisiones de negocio combinando datos, IA y criterio experto." },
  { icon: Zap, title: "Integración real de IA", description: "IA implementada de forma práctica y alineada con tu estrategia de negocio." },
  { icon: Heart, title: "La vida que amas", description: "Un negocio que trabaja para ti y te permite vivir con libertad y propósito." },
];

const cases = [
  {
    role: "Directiva en sector industrial",
    quote: "Pasé de ser 'la de marketing' a ser referente del sector en LinkedIn en menos de un año. Las mejores conversaciones ahora vienen a mí.",
    outcome: "Autoridad reconocida · Contenido sostenido · Oportunidades entrantes",
  },
  {
    role: "Fundadora de agencia B2B",
    quote: "Integramos IA en producción de contenidos y propuestas. Multiplicamos por tres la capacidad del equipo sin bajar calidad ni contratar.",
    outcome: "Procesos IA integrados · Ahorro de 20h/semana · Margen recuperado",
  },
  {
    role: "Consultor independiente",
    quote: "Dejé de vender horas y empecé a vender criterio. Cambió el tipo de cliente, el ticket y —sobre todo— cómo me relaciono con mi propio trabajo.",
    outcome: "Reposicionamiento · Ticket medio ×2 · Cartera cualificada",
  },
];

const Resultados = () => (
  <div className="min-h-screen bg-[#1B2A4A]">
    <SEO
      title="Resultados de trabajar conmigo — Sandra Tello"
      description="Casos reales, transformaciones y resultados de la consultoría estratégica en IA y marca personal de Sandra Tello."
      path="/resultados"
    />
    <Navbar />

    {/* HERO — navy profundo con brand-yellow como acento */}
    <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[#1B2A4A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(1100px 550px at 20% 10%, hsl(var(--brand-yellow) / 0.10), transparent 60%), radial-gradient(900px 500px at 100% 100%, hsl(var(--gold) / 0.14), transparent 60%)",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-16 bg-[hsl(var(--brand-yellow))]" />
          <p className="text-[hsl(var(--brand-yellow))] font-semibold text-[11px] uppercase tracking-[0.34em]">
            Resultados
          </p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[84px] font-medium text-white leading-[1.02] max-w-5xl tracking-tight">
          Lo que consigues<br />
          trabajando <span className="italic text-[#C5A55A]">conmigo</span>.
        </h1>
        <p className="mt-12 font-serif text-white/70 text-xl leading-[1.75] max-w-2xl">
          No prometo números que no puedo garantizar. Prometo un proceso serio,
          criterio propio y decisiones difíciles tomadas contigo, no por ti.
        </p>
      </div>
    </header>

    {/* Seis resultados — bento asimétrico sobre navy con acentos yellow */}
    <section className="relative py-24 lg:py-32 bg-[#1B2A4A]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-[hsl(var(--gold))]/25 border border-[hsl(var(--gold))]/25">
          {results.map((r, i) => {
            // patrón asimétrico: 3-3, 2-4, 4-2
            const span = [3, 3, 2, 4, 4, 2][i];
            const tall = i === 2 || i === 4;
            return (
              <article
                key={r.title}
                className={`md:col-span-${span} bg-[#1B2A4A] p-10 lg:p-14 flex flex-col justify-between ${
                  tall ? "min-h-[380px]" : "min-h-[280px]"
                } group hover:bg-[#22335a] transition-colors`}
                style={{ gridColumn: `span ${span}` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <r.icon className="h-8 w-8 text-[hsl(var(--brand-yellow))]" strokeWidth={1.5} />
                  <span className="font-serif italic text-white/25 text-3xl">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4 font-medium">
                    {r.title}
                  </h3>
                  <p className="font-serif text-white/70 text-lg leading-[1.7]">
                    {r.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* Casos reales — spreads editoriales grandes */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Casos reales
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl text-primary leading-[1.05] font-medium">
            Tres transformaciones<br />
            <span className="italic text-[hsl(var(--navy-mid))]">representativas</span>.
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {cases.map((c, i) => (
            <article
              key={i}
              className={`grid lg:grid-cols-12 gap-10 items-start ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-4">
                <p className="text-[hsl(var(--brand-yellow))] bg-primary inline-block px-4 py-2 font-semibold text-[10px] uppercase tracking-[0.28em] mb-6">
                  Caso 0{i + 1}
                </p>
                <p className="font-serif text-primary text-2xl font-medium leading-snug">
                  {c.role}
                </p>
                <div className="mt-8 pt-6 border-t border-[#C5A55A]/40">
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {c.outcome}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <span className="font-serif text-[#C5A55A] text-7xl lg:text-8xl leading-none">“</span>
                <blockquote className="font-serif italic text-primary text-2xl md:text-3xl lg:text-[36px] leading-[1.3] -mt-6">
                  {c.quote}
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <InlineCTA
      variant="gold"
      kicker="Tu caso"
      title="¿Cómo se vería este proceso en tu negocio?"
      description="Reserva una sesión estratégica y salgamos con un mapa claro de por dónde empezar contigo."
      primaryLabel="Reserva sesión"
    />

    {/* Honestidad — banda navy con marca yellow */}
    <section className="py-24 lg:py-32 bg-[#1B2A4A]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[hsl(var(--brand-yellow))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
              Qué no prometo
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.1] font-medium">
              Honestidad antes que <span className="italic text-[#C5A55A]">promesa</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 font-serif text-lg text-white/80 leading-[1.75]">
            <p><span className="text-[hsl(var(--brand-yellow))] font-semibold">No.</span> No te prometo recetas mágicas ni fórmulas de éxito rápido. No hay atajos honestos para construir autoridad, integrar IA con criterio o alinear tu proyecto con tu vida.</p>
            <p><span className="text-[hsl(var(--brand-yellow))] font-semibold">No.</span> No te prometo resultados en semanas. Los primeros cambios reales suelen tardar meses. Lo importante es que sean sostenibles cuando lleguen.</p>
            <p><span className="text-[hsl(var(--brand-yellow))] font-semibold">Sí.</span> Sí te prometo un proceso serio, criterio propio y una relación adulta donde te digo lo que veo, aunque no sea lo que te apetece oír.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-28 bg-[#1B2A4A] border-t border-[#C5A55A]/25">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.15] mb-8 font-medium">
          ¿Hablamos de <span className="italic text-[#C5A55A]">tu</span> caso?
        </h2>
        <a
          href="/#contacto"
          className="btn-gold-gradient inline-flex items-center gap-3 px-10 py-4 text-[13px] uppercase tracking-[0.24em] font-semibold"
        >
          Trabaja conmigo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default Resultados;
