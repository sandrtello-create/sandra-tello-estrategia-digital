import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InlineCTAProps {
  kicker?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "cream" | "gold";
}

/**
 * CTA intermedio reutilizable. Se usa a mitad de las páginas largas
 * (pillar pages, formación, servicios) para evitar que el lector caiga
 * sin conversión antes de llegar al footer.
 */
const InlineCTA = ({
  kicker = "Trabajemos juntos",
  title,
  description,
  primaryLabel = "Reserva una sesión",
  primaryHref = "/contacto",
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: InlineCTAProps) => {
  const styles = {
    navy: {
      section: "bg-[#1B2A4A] text-white",
      kicker: "text-[#C5A55A]",
      title: "text-white",
      desc: "text-white/70",
      primary: "bg-[#C5A55A] text-[#1B2A4A] hover:bg-[#d4b872]",
      secondary: "border-white/30 text-white hover:border-[#C5A55A] hover:text-[#C5A55A]",
      border: "bg-[#C5A55A]",
    },
    cream: {
      section: "bg-[hsl(40,18%,94%)] text-[#1B2A4A]",
      kicker: "text-[#C5A55A]",
      title: "text-[#1B2A4A]",
      desc: "text-[#1B2A4A]/70",
      primary: "bg-[#1B2A4A] text-white hover:bg-[#C5A55A]",
      secondary: "border-[#1B2A4A]/25 text-[#1B2A4A] hover:border-[#C5A55A] hover:text-[#C5A55A]",
      border: "bg-[#C5A55A]",
    },
    gold: {
      section: "bg-[#C5A55A]/15 text-[#1B2A4A]",
      kicker: "text-[#1B2A4A]/70",
      title: "text-[#1B2A4A]",
      desc: "text-[#1B2A4A]/75",
      primary: "bg-[#1B2A4A] text-white hover:bg-[#0F1A30]",
      secondary: "border-[#1B2A4A]/30 text-[#1B2A4A] hover:border-[#1B2A4A]",
      border: "bg-[#1B2A4A]",
    },
  }[variant];

  return (
    <section className={`py-16 md:py-20 ${styles.section} relative`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] ${styles.border}`} />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className={`text-[11px] uppercase tracking-[0.3em] font-semibold mb-5 ${styles.kicker}`}>
            {kicker}
          </p>
          <h3 className={`font-serif text-[28px] md:text-[42px] leading-[1.15] mb-5 ${styles.title}`}>
            {title}
          </h3>
          {description && (
            <p className={`text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto ${styles.desc}`}>
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryHref}
              className={`inline-flex items-center gap-2 px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors ${styles.primary}`}
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                to={secondaryHref}
                className={`inline-flex items-center gap-2 px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] border transition-colors ${styles.secondary}`}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InlineCTA;
