import { Link } from "react-router-dom";
import { ArrowRight, Users, Building2, Linkedin } from "lucide-react";

/**
 * Sección "Trabaja conmigo" — clarifica en 3 tarjetas los 3 servicios
 * principales, con las keywords SEO detectadas con Semrush integradas
 * de forma natural en H2/H3 y descripciones.
 *
 * Keywords principales atacadas:
 * - "consultora marca personal" / "consultor marca personal" (dif. 2-25)
 * - "formacion ia para empresas" / "curso ia empresas" (dif. 0-19)
 * - "marca personal linkedin" / "mentoria linkedin" (dif. 0-18)
 */
const WhatIDoSection = () => {
  const servicios = [
    {
      icon: Users,
      kicker: "Para directivos y fundadores",
      title: "Consultoría estratégica 1 a 1",
      description:
        "Como consultora de marca personal e IA, te acompaño a construir tu posicionamiento con criterio: estrategia, contenido, presencia y decisiones apoyadas en inteligencia artificial.",
      bullets: [
        "Diagnóstico y hoja de ruta",
        "Estrategia de marca personal",
        "IA aplicada a tu negocio",
      ],
      cta: "Consultoría 1 a 1",
      href: "/sobre-mi",
    },
    {
      icon: Building2,
      kicker: "Para empresas y equipos",
      title: "Formación en IA para empresas",
      description:
        "Programas in-company de formación en inteligencia artificial y employee advocacy. Tu equipo aprende a usar IA con criterio y a construir presencia digital como marca.",
      bullets: [
        "Curso de IA para empresas",
        "Employee advocacy",
        "Formación LinkedIn a medida",
      ],
      cta: "Formación in-company",
      href: "/formacion",
    },
    {
      icon: Linkedin,
      kicker: "Para profesionales independientes",
      title: "Programa de marca personal en LinkedIn",
      description:
        "Mentoría de marca personal en LinkedIn con estrategia: pasas de perfil invisible a autoridad reconocida en tu sector. Contenido, posicionamiento y voz propia.",
      bullets: [
        "Mentoría LinkedIn 3 meses",
        "Estrategia de contenido",
        "Personal branding editorial",
      ],
      cta: "Mentoría LinkedIn",
      href: "/marca-personal-estrategica",
    },
  ];

  return (
    <section
      id="trabaja-conmigo"
      className="py-24 lg:py-32 relative bg-[hsl(40,18%,96%)]"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #C5A55A 0%, transparent 40%), radial-gradient(circle at 85% 80%, #1B2A4A 0%, transparent 45%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.3em] mb-6">
            Trabaja conmigo
          </p>
          <h2 className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[#1B2A4A] mb-6 tracking-tight">
            Tres formas de trabajar juntas — <em className="italic text-[#C5A55A]">tres resultados distintos</em>.
          </h2>
          <p className="text-[#1B2A4A]/70 text-lg leading-relaxed">
            Consultoría estratégica, formación en inteligencia artificial y marca personal en
            LinkedIn. Elige por dónde empezar: cada servicio está pensado para un momento y un
            perfil profesional distinto.
          </p>
        </div>

        {/* Grid 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((s, i) => (
            <article
              key={s.title}
              className="group bg-white border border-[#1B2A4A]/10 p-8 lg:p-10 flex flex-col relative hover:border-[#C5A55A] transition-colors"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-[#C5A55A]/0 group-hover:bg-[#C5A55A] transition-colors" />

              <div className="flex items-start justify-between mb-8">
                <span className="font-serif text-[#C5A55A] text-4xl leading-none">
                  0{i + 1}
                </span>
                <s.icon className="h-6 w-6 text-[#1B2A4A]/40 group-hover:text-[#C5A55A] transition-colors" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#1B2A4A]/50 mb-3">
                {s.kicker}
              </p>
              <h3 className="font-serif text-[24px] md:text-[26px] leading-[1.15] text-[#1B2A4A] mb-4">
                {s.title}
              </h3>
              <p className="text-[#1B2A4A]/70 text-[15px] leading-relaxed mb-6">
                {s.description}
              </p>

              <ul className="space-y-2 mb-8 pb-8 border-b border-[#1B2A4A]/10">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-[#1B2A4A]/75"
                  >
                    <span className="text-[#C5A55A] font-bold mt-0.5">·</span>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                to={s.href}
                className="mt-auto inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] hover:text-[#C5A55A] transition-colors"
              >
                {s.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <p className="text-[#1B2A4A]/70 text-base">
            ¿Aún no lo tienes claro?
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-[#1B2A4A] text-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] hover:bg-[#C5A55A] transition-colors"
          >
            Cuéntame tu caso
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
