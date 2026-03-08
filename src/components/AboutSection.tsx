import { ArrowUpRight } from "lucide-react";
import sandraAbout from "@/assets/sandra-tello-about.jpg";
import logoWatermark from "@/assets/sandra-logo-watermark.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Watermark pattern background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url(${logoWatermark})`,
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
              Durante muchos años trabajé en el mundo corporativo observando cómo funcionan realmente las empresas: la estrategia, el marketing, la toma de decisiones… y también cómo muchas veces el talento y el conocimiento de las personas quedan invisibles cuando falta dirección.
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-2">
              Tendemos a seguir una lógica que pocas veces cuestionamos: trabajar, cumplir, avanzar… y esperar que el valor acabe reconociéndose.
            </p>
            <p className="text-foreground text-[17px] leading-relaxed mb-8 font-medium tracking-wide">
              Día tras día. Año tras año.
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-2">
              Con el tiempo entendí algo importante:
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-8 font-semibold">
              Cuando no decides tu posicionamiento, otros acaban decidiendo tu valor.
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              Hoy me siento honrada de acompañar a profesionales y empresas que quieren integrar estrategia, marketing, marca personal e inteligencia artificial para generar mejores oportunidades en su negocio, tomar decisiones con criterio y convertir su experiencia en proyectos con dirección.
            </p>

            <p className="text-muted-foreground text-[17px] leading-relaxed mb-2">
              También soy docente en inteligencia artificial aplicada a negocio y marketing, porque creo profundamente en algo que forma parte de mi forma de trabajar:
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-8 italic">
              seguir aprendiendo siempre.
            </p>

            {/* Rest of text continues after the "eterna aprendiz" band below */}
            <p className="text-foreground text-lg leading-relaxed mb-5 font-semibold">
              Desde ahí trabajo.
            </p>

            <p className="font-serif text-xl md:text-[22px] text-muted-foreground leading-relaxed mb-10">
              Porque el marketing sin estrategia es ruido.
              <br />
              Y la tecnología sin criterio no transforma nada.
            </p>

            {/* Highlighted quote — editorial style */}
            <div className="border-l-2 border-accent pl-6 mb-10">
              <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-snug">
                Tu valor no se improvisa.
                <br />
                Se decide.
              </p>
            </div>

            {/* CTA */}
            <a
              href="/sobre-mi"
              className="bg-primary text-primary-foreground p-6 flex items-center justify-between cursor-pointer hover:bg-primary/90 transition-colors duration-300 group"
            >
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70 mb-1">
                  Conoce más
                </p>
                <p className="font-serif text-xl font-medium">
                  Descubre cómo puedo ayudarte
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* "Eterna aprendiz" band — spans full width below the photo */}
        <div className="mt-12 bg-primary/5 border-t border-border py-8 px-6 lg:px-10">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-snug font-medium max-w-4xl">
            Me considero una <span className="italic">eterna aprendiz</span>. La tecnología cambia, los negocios evolucionan y la estrategia exige algo fundamental:{" "}
            <span className="text-accent">curiosidad, criterio y humanidad</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;