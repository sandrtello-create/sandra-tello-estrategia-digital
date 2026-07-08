import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface PillarLayoutProps {
  seoTitle: string;
  seoDescription: string;
  path: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Layout consistente para páginas pillar / interiores.
 * Toma la paleta y patrones aprobados en Inicio (navy + oro, cards
 * bg-white/10 backdrop-blur, sin bordes redondeados).
 */
const PillarLayout = ({
  seoTitle,
  seoDescription,
  path,
  jsonLd,
  eyebrow,
  title,
  intro,
  children,
  ctaLabel = "Trabaja conmigo",
  ctaHref = "/#contacto",
}: PillarLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title={seoTitle} description={seoDescription} path={path} jsonLd={jsonLd} />
      <Navbar />

      {/* HERO */}
      <header className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-[#1B2A4A] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(1000px 500px at 15% 10%, hsl(var(--gold) / 0.18), transparent 60%), radial-gradient(900px 500px at 100% 100%, hsl(var(--gold) / 0.10), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-5xl">
          <p className="gold-gradient-text font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[62px] font-medium text-white leading-[1.08] mb-8 max-w-4xl">
            {title}
          </h1>
          <div className="text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl">
            {intro}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A55A] to-transparent opacity-60" />
      </header>

      {/* CONTENT */}
      <main className="bg-background">{children}</main>

      {/* CIERRE / CTA */}
      <section className="relative py-20 lg:py-28 bg-[#1B2A4A] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 400px at 50% 50%, hsl(var(--gold) / 0.15), transparent 60%)",
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <p className="gold-gradient-text font-semibold text-[11px] uppercase tracking-[0.32em] mb-5">
            El siguiente paso
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.15] mb-8">
            ¿Hablamos de tu caso concreto?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Cada proyecto es distinto. Lo revisamos juntas y decidimos si hay
            encaje. Sin fórmulas prefabricadas.
          </p>
          <a
            href={ctaHref}
            className="btn-gold-gradient inline-flex items-center gap-3 px-9 py-4 text-[13px] uppercase tracking-[0.24em] font-semibold"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ---------- Sub-componentes reutilizables para páginas pillar ---------- */

export const PillarSection = ({
  eyebrow,
  title,
  children,
  variant = "light",
}: {
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  variant?: "light" | "cream" | "navy";
}) => {
  const bg =
    variant === "navy"
      ? "bg-[#1B2A4A] text-white"
      : variant === "cream"
        ? "bg-[hsl(var(--cream))]"
        : "bg-background";
  return (
    <section className={`py-16 lg:py-24 ${bg} relative`}>
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        {eyebrow && (
          <p
            className={`font-semibold text-[11px] uppercase tracking-[0.28em] mb-4 ${
              variant === "navy" ? "gold-gradient-text" : "text-accent"
            }`}
          >
            {eyebrow}
          </p>
        )}
        {title && (
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-[44px] font-medium mb-10 leading-[1.2] max-w-3xl ${
              variant === "navy" ? "text-white" : "text-primary"
            }`}
          >
            {title}
          </h2>
        )}
        <div
          className={`prose-lg max-w-none font-serif text-[19px] leading-[1.75] space-y-5 ${
            variant === "navy" ? "text-white/80" : "text-foreground/85"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export const PillarCards = ({
  items,
}: {
  items: { icon?: React.ComponentType<{ className?: string }>; title: string; description: string }[];
}) => (
  <section className="py-16 lg:py-24 bg-[#1B2A4A] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        background:
          "radial-gradient(700px 400px at 100% 0%, hsl(var(--gold) / 0.12), transparent 60%)",
      }}
    />
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="group bg-white/10 backdrop-blur-md border border-white/10 p-8 hover:bg-[#1B2A4A] hover:border-[#C5A55A] transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,165,90,0.3)]"
          >
            {item.icon && (
              <item.icon className="h-8 w-8 text-[#C5A55A] mb-5" />
            )}
            <div className="gold-gradient-text font-serif text-sm font-semibold mb-2">
              0{i + 1}
            </div>
            <h3 className="font-serif text-xl font-medium text-white mb-3">
              {item.title}
            </h3>
            <p className="text-white/65 text-[15px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const PillarFAQ = ({
  items,
}: {
  items: { q: string; a: string }[];
}) => (
  <section className="py-16 lg:py-24 bg-[hsl(var(--cream))]">
    <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
      <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.28em] mb-4">
        Preguntas frecuentes
      </p>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-12 leading-[1.2]">
        Lo que suelen preguntarme
      </h2>
      <div className="divide-y divide-border">
        {items.map((item, i) => (
          <details key={i} className="group py-6">
            <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
              <h3 className="font-serif text-xl md:text-2xl text-primary font-medium leading-snug">
                {item.q}
              </h3>
              <span className="text-accent text-2xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-4 text-foreground/75 text-[17px] leading-[1.7] font-serif max-w-3xl">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default PillarLayout;
