import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const testimonios = [
  {
    quote: "Trabajar con Sandra transformó mi forma de posicionarme profesionalmente. Ahora tengo una estrategia clara y uso la IA con propósito, no por moda.",
    name: "María López",
    role: "Directora de Marketing",
    company: "Empresa Tech",
    featured: true,
  },
  {
    quote: "El framework de Inteligencia Humana Estratégica™ me ayudó a tomar mejores decisiones de negocio y a diferenciarme sin recurrir a fórmulas manidas.",
    name: "Carlos Martínez",
    role: "CEO & Fundador",
    company: "Startup Digital",
  },
  {
    quote: "Sandra combina la visión estratégica con un conocimiento profundo de la IA. Los resultados fueron inmediatos y tangibles.",
    name: "Ana García",
    role: "Consultora Senior",
    company: "Consultoría Internacional",
  },
  {
    quote: "Formó a nuestro equipo de comunicación en IA aplicada. En dos meses habíamos rediseñado nuestro proceso de contenidos. Sin humo, con criterio.",
    name: "Javier Ruiz",
    role: "Dir. Comunicación",
    company: "Sector industrial",
    featured: true,
  },
  {
    quote: "Me acompañó en el posicionamiento en LinkedIn cuando yo estaba convencida de que 'no era para mí'. Hoy es mi principal canal de negocio.",
    name: "Elena Pérez",
    role: "Abogada",
    company: "Despacho propio",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandra Tello",
  review: testimonios.map((t) => ({
    "@type": "Review",
    reviewBody: t.quote,
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  })),
};

const Testimonios = () => (
  <div className="min-h-screen bg-[hsl(var(--hero-bg))]">
    <SEO
      title="Testimonios — Sandra Tello"
      description="Testimonios reales de profesionales, directivos y empresas que han trabajado con Sandra Tello en IA, marca personal y estrategia."
      path="/testimonios"
      jsonLd={jsonLd}
    />
    <Navbar />

    {/* HERO — soft blue-grey con acento rosa */}
    <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[hsl(var(--hero-bg))] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[hsl(var(--brand-pink))]" />
              <p className="text-[hsl(var(--brand-pink))] font-semibold text-[11px] uppercase tracking-[0.34em]">
                Testimonios
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[80px] font-medium text-primary leading-[1.02] tracking-tight">
              Voces de quienes<br />
              <span className="italic text-[hsl(var(--navy-mid))]">han trabajado</span> conmigo.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="font-serif text-lg text-foreground/70 leading-[1.75] border-l-2 border-[hsl(var(--brand-pink))] pl-6">
              Cinco proyectos reales, con seguimiento largo. Sin retoques, sin
              exageraciones, sin firmas de compromiso.
            </p>
          </div>
        </div>
      </div>
    </header>

    {/* Masonry asimétrico */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--hero-bg))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
          {testimonios.map((t, i) => {
            const spans = [
              "md:col-span-7 min-h-[380px]",
              "md:col-span-5 min-h-[300px]",
              "md:col-span-5 min-h-[300px]",
              "md:col-span-7 min-h-[380px]",
              "md:col-span-12 min-h-[240px]",
            ];
            const isFeatured = t.featured;
            return (
              <article
                key={i}
                className={`${spans[i]} relative p-10 lg:p-12 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-primary text-white"
                    : "bg-white border border-primary/10"
                }`}
              >
                <span
                  className={`font-serif text-8xl lg:text-9xl leading-none absolute top-4 left-8 ${
                    isFeatured ? "text-[hsl(var(--brand-pink))]/60" : "text-[hsl(var(--brand-pink))]/50"
                  }`}
                >
                  “
                </span>
                <blockquote
                  className={`font-serif italic ${
                    isFeatured ? "text-white text-2xl lg:text-3xl" : "text-primary text-xl lg:text-2xl"
                  } leading-[1.35] mt-16 relative z-10`}
                >
                  {t.quote}
                </blockquote>
                <footer
                  className={`mt-8 pt-6 border-t ${
                    isFeatured ? "border-white/20" : "border-primary/15"
                  }`}
                >
                  <p
                    className={`font-semibold text-base ${
                      isFeatured ? "text-[hsl(var(--brand-pink))]" : "text-primary"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p className={`text-sm ${isFeatured ? "text-white/60" : "text-muted-foreground"}`}>
                    {t.role} · {t.company}
                  </p>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* Nota — banda cream */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[hsl(var(--brand-pink))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
              Una nota honesta
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
              Por qué no verás <span className="italic">decenas</span> de testimonios.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 font-serif text-lg text-foreground/80 leading-[1.75]">
            <p>Prefiero trabajar con pocos clientes y hacerlo bien, en vez de acumular firmas. Cada testimonio de esta página corresponde a un proyecto real, con seguimiento largo, no a una sesión suelta.</p>
            <p>Si quieres validar de primera mano cómo trabajo antes de contratar, puedo ponerte en contacto con clientes actuales o pasados que hablen contigo directamente.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-28 bg-[hsl(var(--hero-bg))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-[1.15] mb-8 font-medium">
          ¿Quieres formar parte del <span className="italic text-[hsl(var(--brand-pink))]">próximo caso</span>?
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

export default Testimonios;
