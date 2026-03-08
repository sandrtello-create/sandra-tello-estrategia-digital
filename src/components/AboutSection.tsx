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
            <p className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-6 italic">
              «Cuando no paras a decidir, otros lo hacen por ti.»
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              Durante mucho tiempo viví sin cuestionar esa lógica. Hasta que entendí que hay 3 preguntas que{" "}
              <strong className="text-foreground font-semibold">NO son opcionales</strong> cuando tu valor está en juego:{" "}
              <strong className="text-foreground font-semibold">qué, cómo y para qué.</strong>
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              +15 años en el mundo corporativo terminaron con un despido tras una baja por accidente.
              Por videoconferencia, y esta frase:{" "}
              <em className="text-foreground">«Ya no eres un perfil para marketing digital».</em>
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              ¡Inhumanos! Pensé.{" "}
              <strong className="text-foreground font-semibold">Bendición, digo hoy.</strong> 😉
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              Da igual que hubiera liderado campañas nacionales y digitales en +500 estaciones de servicio
              o que fuera la única del equipo con carreras universitarias, FP Superior y máster en Marketing.{" "}
              <strong className="text-foreground font-semibold">Mi valor dejó de contar.</strong>
            </p>

            {/* Highlighted quote */}
            <div className="mb-6 inline-block">
              <p className="bg-gold/15 px-5 py-3 font-sans text-[17px] font-semibold text-foreground leading-relaxed uppercase tracking-wide">
                Cuando no decides tu posicionamiento,
                <br />
                otros deciden tu valor.
              </p>
            </div>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              De ahí nace mi propósito: trabajo con empresas y profesionales que deciden integrar{" "}
              <span className="text-gold font-semibold">IA, estrategia y marca personal</span>{" "}
              para convertir su experiencia en autoridad y negocio.
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              No para exhibirse.{" "}
              <strong className="text-foreground font-semibold">
                SÍ para ocupar su lugar, romper barreras, generar oportunidades rentables y VIVIR.
              </strong>
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              He creado mi propio marco:{" "}
              <strong className="text-foreground font-semibold">
                Inteligencia Humana Estratégica™
              </strong>
              . Un sistema que alinea mentalidad, IA, marketing, vida y negocio para que con la tecnología impulses tu valor.
            </p>

            <p className="text-foreground text-[17px] leading-relaxed mb-8 font-medium">
              Desde la coherencia. Porque la confianza convierte antes que cualquier algoritmo.
            </p>

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
