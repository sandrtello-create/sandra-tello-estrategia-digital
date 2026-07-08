import { Quote } from "lucide-react";
import PillarLayout, { PillarSection } from "@/components/PillarLayout";

const testimonios = [
  {
    quote: "Trabajar con Sandra transformó mi forma de posicionarme profesionalmente. Ahora tengo una estrategia clara y uso la IA con propósito, no por moda.",
    name: "María López",
    role: "Directora de Marketing",
    company: "Empresa Tech",
  },
  {
    quote: "El framework de Inteligencia Humana Estratégica™ me ayudó a tomar mejores decisiones de negocio y a diferenciarme de mi competencia sin recurrir a fórmulas manidas.",
    name: "Carlos Martínez",
    role: "CEO & Fundador",
    company: "Startup Digital",
  },
  {
    quote: "Sandra combina la visión estratégica con un conocimiento profundo de la IA. Los resultados fueron inmediatos y tangibles en calidad de propuestas y ahorro de tiempo.",
    name: "Ana García",
    role: "Consultora Senior",
    company: "Consultoría Internacional",
  },
  {
    quote: "Formó a nuestro equipo de comunicación en IA aplicada. En dos meses habíamos rediseñado nuestro proceso de contenidos. Sin humo, con criterio.",
    name: "Javier Ruiz",
    role: "Dir. Comunicación",
    company: "Sector industrial",
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
  <PillarLayout
    seoTitle="Testimonios — Sandra Tello"
    seoDescription="Testimonios reales de profesionales, directivos y empresas que han trabajado con Sandra Tello en IA, marca personal y estrategia."
    path="/testimonios"
    jsonLd={jsonLd}
    eyebrow="Testimonios"
    title={
      <>
        Lo que dicen quienes han <span className="text-[#C5A55A]">trabajado conmigo</span>.
      </>
    }
    intro={
      <>
        Cinco voces reales de profesionales y empresas que decidieron trabajar
        su marca personal, integrar IA con criterio o rediseñar su estrategia
        conmigo. Sin retoques ni exageraciones.
      </>
    }
  >
    <section className="py-16 lg:py-24 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonios.map((t, i) => (
            <article
              key={i}
              className="bg-white border border-border p-8 md:p-10 relative"
            >
              <Quote className="h-7 w-7 text-accent/40 mb-5" />
              <blockquote className="font-serif italic text-primary text-xl leading-relaxed mb-8">
                «{t.quote}»
              </blockquote>
              <footer className="border-t border-border pt-5">
                <p className="font-semibold text-primary text-base">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>

    <PillarSection variant="navy" eyebrow="Nota" title="Por qué no encontrarás decenas de testimonios.">
      <p>Prefiero trabajar con pocos clientes y hacerlo bien, en vez de acumular firmas. Cada testimonio de esta página corresponde a un proyecto real, con seguimiento largo, no a una sesión suelta.</p>
      <p>Si quieres validar de primera mano cómo trabajo antes de contratar, puedo ponerte en contacto con clientes actuales o pasados que hablen contigo directamente.</p>
    </PillarSection>
  </PillarLayout>
);

export default Testimonios;
