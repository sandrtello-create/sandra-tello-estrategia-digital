import { ArrowUpRight } from "lucide-react";
import sandraHero from "@/assets/sandra-tello-hero.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={sandraHero}
                alt="Sandra Tello"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pt-4">
            <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
              ¡Hola!
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 leading-[1.05]">
              Soy Sandra.
            </h2>

            <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug mb-8">
              Consultora estratégica de{" "}
              <strong className="font-bold">
                inteligencia artificial, marketing y marca personal.
              </strong>{" "}
              Y ahora, si me permites,{" "}
              <strong className="font-bold">tu nueva mentora.</strong>
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              Es probable que hayas escuchado de mí o hayas consumido alguno de
              mis contenidos. Con más de 15 años de experiencia,{" "}
              <strong className="text-foreground font-semibold">
                he ayudado a cientos de profesionales y empresas
              </strong>{" "}
              a posicionar su expertise y transformar su conocimiento en
              oportunidades reales. Pero sin importar cómo llegaste aquí,{" "}
              <strong className="text-foreground font-semibold">
                gracias por estar.
              </strong>
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-8">
              Hoy más que nunca, en una era marcada por la{" "}
              <span className="text-gold font-semibold">
                inteligencia artificial
              </span>
              ,{" "}
              <strong className="text-foreground font-semibold">
                se necesitan líderes como tú
              </strong>
              : que combinan{" "}
              <strong className="text-foreground font-semibold">
                humanidad con estrategia
              </strong>
              , e IA con intención y propósito.
            </p>

            {/* Highlighted quote */}
            <div className="mb-8 inline-block">
              <p className="bg-gold/15 px-4 py-2 font-sans text-[17px] font-semibold text-foreground leading-relaxed">
                No solo encontrarás el "qué"
                <br />
                También aprenderás el "cómo"
              </p>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-6 flex items-center justify-between cursor-pointer hover:bg-primary/90 transition-colors duration-300 group">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70 mb-1">
                  Sobre mí
                </p>
                <p className="font-serif text-xl font-medium">
                  Conoce mi historia
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
