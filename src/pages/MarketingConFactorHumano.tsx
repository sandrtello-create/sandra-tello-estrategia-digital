import { ArrowRight, Compass, Users, Heart, TrendingUp, Sparkles, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const pillars = [
  { icon: Compass, title: "Criterio antes que canal", description: "Antes de elegir dónde publicar, decidimos qué tienes que decir y por qué a alguien debería importarle." },
  { icon: Users, title: "Persona, no target", description: "Trabajamos con seres humanos con nombre, historia y contexto. No con avatares de manual." },
  { icon: Heart, title: "Relación antes que conversión", description: "Lo relacional prevalece a lo transaccional. La venta llega cuando la confianza ya está construida." },
  { icon: TrendingUp, title: "Métricas que importan", description: "No vanity metrics. Conversaciones abiertas, oportunidades reales y decisiones informadas." },
  { icon: Sparkles, title: "IA con propósito", description: "La IA multiplica lo que ya funciona. Sin estrategia previa, solo acelera el ruido." },
  { icon: Target, title: "Coherencia total", description: "Que lo que dices en LinkedIn, en una llamada y en una propuesta sea la misma persona." },
];

const metodo = [
  ["Diagnóstico honesto", "Antes de tocar nada, entendemos quién eres, qué vendes de verdad y por qué alguien debería elegirte a ti. Sin este paso, todo lo demás es decoración."],
  ["Posicionamiento con criterio", "Elegimos un ángulo defendible: una manera de mirar tu mercado que sea tuya y que resista el paso del tiempo. No una promesa de landing."],
  ["Contenido con voz propia", "Un plan editorial que suene a ti, no a plantilla. Con la IA como asistente, nunca como sustituto."],
  ["Relación sostenida", "Newsletter, LinkedIn, conversaciones privadas. Métricas que importan: quién te lee, quién te responde, quién vuelve."],
  ["Venta desde la confianza", "Cuando alguien te contacta ya sabe cómo trabajas, qué esperas y qué cuesta. La venta se convierte en una conversación, no en una batalla."],
];

const faqs = [
  { q: "¿Qué es marketing con factor humano?", a: "Es un enfoque que pone a la persona —tanto quien comunica como quien recibe— antes que el algoritmo, el embudo o la plantilla. Combina estrategia, criterio propio y herramientas (incluida la IA) al servicio de una relación real con el cliente." },
  { q: "¿En qué se diferencia del marketing tradicional?", a: "El marketing tradicional optimiza para el clic. El marketing con factor humano optimiza para la relación sostenida. La primera diferencia es el tiempo: no hay atajos honestos para construir autoridad y confianza." },
  { q: "¿Sirve para B2B y B2C?", a: "Sí. Especialmente en B2B, donde el ciclo de decisión es largo y las personas compran a personas. En B2C funciona en marcas donde el producto va acompañado de un proyecto vital." },
  { q: "¿Encaja con la IA?", a: "Perfectamente. La IA es una herramienta poderosa cuando hay criterio detrás. Sin él, solo escala la mediocridad más rápido. Con él, libera tiempo para lo que solo tú puedes hacer." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marketing con factor humano — qué es y cómo aplicarlo",
    author: { "@type": "Person", name: "Sandra Tello" },
    inLanguage: "es",
    about: ["Marketing", "Marca personal", "Estrategia digital"],
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

const MarketingConFactorHumano = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))]">
    <SEO
      title="Marketing con factor humano — Sandra Tello"
      description="Qué es el marketing con factor humano y cómo aplicarlo con criterio. Estrategia, IA y relación real con el cliente. Por Sandra Tello."
      path="/marketing-con-factor-humano"
      jsonLd={jsonLd}
    />
    <Navbar />

    {/* HERO — cream romántico con acento rosa */}
    <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[hsl(var(--cream))] overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 30%, hsl(var(--brand-pink) / 0.20), transparent 60%)",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-16 bg-[hsl(var(--brand-pink))]" />
          <p className="text-[hsl(var(--brand-pink))] font-semibold text-[11px] uppercase tracking-[0.34em]">
            Pilar · Marketing
          </p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[84px] font-medium text-primary leading-[1.02] max-w-6xl tracking-tight">
          Marketing con<br />
          <span className="italic text-[hsl(var(--brand-pink))]">factor humano</span>.
        </h1>
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-6 font-serif text-foreground/75 text-xl leading-[1.75]">
            El marketing dejó de ser un embudo hace tiempo. Hoy compite quien es
            capaz de sostener una relación real con su cliente durante meses o
            años, no quien mejor optimiza un anuncio.
          </p>
          <p className="lg:col-span-4 lg:col-start-9 font-serif italic text-primary text-2xl leading-[1.3] border-l-2 border-[hsl(var(--brand-pink))] pl-6">
            Menos ruido, más criterio.
          </p>
        </div>
      </div>
    </header>

    {/* Punto de partida — split */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[hsl(var(--brand-pink))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
              El terreno
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
              El marketing cambió. La mayoría <span className="italic">todavía no se ha enterado</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 font-serif text-[19px] leading-[1.75] text-foreground/80">
            <p>Durante años el marketing digital fue una carrera por el clic más barato, por el copy más gancho, por el funnel más automatizado. Funcionaba porque había menos competencia y más atención disponible.</p>
            <p>Hoy la atención escasea, la desconfianza sobra y las herramientas son las mismas para todo el mundo. Competir por optimización pura es competir por el fondo. Lo que sí escala —y lo que ya no puede copiarse— es <em className="text-primary not-italic font-semibold">quién eres, qué sabes y cómo lo cuentas</em>.</p>
            <p>Ese es el terreno del marketing con factor humano: convertir tu criterio, tu recorrido y tu manera de mirar en la ventaja que ninguna herramienta puede replicar.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Pilares — zigzag con acento rosa/navy */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="max-w-2xl mb-20">
          <p className="text-[hsl(var(--brand-pink))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Seis principios
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
            Cómo pienso el <span className="italic">marketing hoy</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`p-10 lg:p-12 border ${
                i % 3 === 0
                  ? "bg-primary text-white border-primary"
                  : "bg-white border-[hsl(var(--brand-pink))]/25"
              } ${i % 2 === 1 ? "md:translate-y-8" : ""}`}
            >
              <div className="flex items-start justify-between mb-8">
                <p.icon
                  className={`h-8 w-8 ${i % 3 === 0 ? "text-[hsl(var(--brand-pink))]" : "text-primary"}`}
                  strokeWidth={1.5}
                />
                <span
                  className={`font-serif italic text-3xl ${
                    i % 3 === 0 ? "text-[hsl(var(--brand-pink))]/70" : "text-[hsl(var(--brand-pink))]"
                  }`}
                >
                  0{i + 1}
                </span>
              </div>
              <h3
                className={`font-serif text-2xl lg:text-3xl font-medium mb-4 ${
                  i % 3 === 0 ? "text-white" : "text-primary"
                }`}
              >
                {p.title}
              </h3>
              <p
                className={`font-serif text-lg leading-[1.7] ${
                  i % 3 === 0 ? "text-white/75" : "text-foreground/75"
                }`}
              >
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Metodología — timeline horizontal blanca */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[hsl(var(--brand-pink))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Metodología
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
            Cómo se aplica, <span className="italic">en concreto</span>.
          </h2>
        </div>
        <ol className="space-y-10 border-l-2 border-[hsl(var(--brand-pink))]/50 pl-10 lg:pl-14 ml-4">
          {metodo.map(([title, body], i) => (
            <li key={title} className="relative">
              <span className="absolute -left-[52px] top-2 w-6 h-6 bg-[hsl(var(--brand-pink))] flex items-center justify-center text-white font-serif text-xs">
                {i + 1}
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-primary font-medium mb-3">
                {title}
              </h3>
              <p className="font-serif text-lg text-foreground/75 leading-[1.75] max-w-2xl">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* FAQ cream */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <p className="text-[hsl(var(--brand-pink))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-4">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-14 leading-[1.15] font-medium">
          Lo que suelen preguntarme.
        </h2>
        <div className="divide-y divide-[hsl(var(--brand-pink))]/30 border-t border-b border-[hsl(var(--brand-pink))]/30">
          {faqs.map((item) => (
            <details key={item.q} className="group py-8">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h3 className="font-serif text-xl md:text-2xl text-primary font-medium leading-snug">
                  {item.q}
                </h3>
                <span className="text-[hsl(var(--brand-pink))] text-3xl leading-none shrink-0 group-open:rotate-45 transition-transform">
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

    {/* CTA */}
    <section className="py-24 lg:py-28 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="border-2 border-[hsl(var(--brand-pink))] p-12 lg:p-20 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--cream))] px-6">
            <p className="text-[hsl(var(--brand-pink))] font-semibold text-[11px] uppercase tracking-[0.32em]">
              Siguiente paso
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-primary leading-[1.15] mb-8 font-medium">
            ¿Reordenamos tu <span className="italic">marketing</span> con criterio?
          </h2>
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

export default MarketingConFactorHumano;
