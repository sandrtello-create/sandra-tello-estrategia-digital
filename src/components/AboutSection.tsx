import { ArrowUpRight } from "lucide-react";
import sandraAbout from "@/assets/sandra-tello-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={sandraAbout}
                alt="Sandra Tello"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-serif text-2xl md:text-3xl font-light text-muted-foreground mb-2">
              ¡Hola!
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-tight mb-8">
              SOY SANDRA.
            </h2>

            {/* Opening hook */}
            <p className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-8 italic">
              «Cuando no paras a decidir, otros lo hacen por ti.»
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              Durante muchos años trabajé dentro del mundo corporativo siguiendo una lógica que muchas personas aceptan sin cuestionar: trabajar, cumplir, avanzar… y esperar que el valor acabe reconociéndose.
            </p>

            <p className="text-foreground text-[17px] leading-relaxed mb-5 font-medium">
              Hasta que entendí algo importante.
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-6 font-semibold">
              Cuando no decides tu posicionamiento, otros acaban decidiendo tu valor.
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              Hoy trabajo con profesionales y empresas que quieren hacer justamente lo contrario:{" "}
              <strong className="text-foreground font-semibold">
                pensar con estrategia, integrar inteligencia artificial con criterio
              </strong>{" "}
              y convertir su experiencia en autoridad y negocio.
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-8">
              Porque el marketing sin estrategia es ruido.
              <br />
              Y la tecnología sin criterio no transforma nada.
            </p>

            {/* Highlighted quote */}
            <div className="mb-8 inline-block">
              <p className="bg-gold/15 px-5 py-3 font-sans text-[17px] font-semibold text-foreground leading-relaxed">
                Tu valor no se improvisa.
                <br />
                Se decide.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="bg-primary text-primary-foreground p-6 flex items-center justify-between cursor-pointer hover:bg-primary/90 transition-colors duration-300 group"
            >
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70 mb-1">
                  ¿Hablamos?
                </p>
                <p className="font-serif text-xl font-medium">
                  Si no quieres que otros sigan decidiendo tu valor
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
