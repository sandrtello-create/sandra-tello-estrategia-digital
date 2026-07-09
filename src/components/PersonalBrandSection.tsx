import { ArrowRight } from "lucide-react";

const PersonalBrandSection = () => {
  return (
    <section
      id="marca-personal-home"
      className="py-24 lg:py-32 bg-background"
      aria-label="Marca personal y posicionamiento digital"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent/60" />
            <p className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              Marca personal · Posicionamiento digital e IA
            </p>
          </div>

          {/* H2 */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[52px] font-medium text-primary leading-[1.1] mb-10">
            Crea una marca personal imposible de ignorar.{" "}
            <span className="italic text-accent">Y de borrar.</span>
          </h2>

          {/* Cuerpo */}
          <div className="space-y-6 text-primary/85 text-[17px] md:text-[18px] leading-relaxed font-serif">
            <p>
              Cuando construyes tu marca personal, también construyes un
              posicionamiento digital coherente con quien eres.
            </p>
            <p>
              Un trabajo interno. La unión de tus piezas personales y
              profesionales, esas que te hacen única. Porque nadie hace lo
              mismo que tú cuando parte de su propia experiencia y su propia
              vivencia.
            </p>
            <p>
              Así consigues que en tu sector te encuentren, te elijan y dejes
              de ser un número en una larga lista para ser tú, con tu nombre y
              tus apellidos.
            </p>
          </div>

          {/* Bloque de dolores */}
          <div className="mt-14 border-l-2 border-accent pl-8 md:pl-10 space-y-8">
            <p className="font-serif text-[19px] md:text-[22px] text-primary leading-snug">
              Llevas años acumulando experiencia. Pero cuando alguien busca lo
              que tú haces, <span className="italic">aparecen otros nombres</span>.
            </p>
            <p className="font-serif text-[19px] md:text-[22px] text-primary leading-snug">
              Compañeros con menos recorrido crecen más rápido. Se les ve.{" "}
              <span className="italic">A ti no.</span>
            </p>
            <p className="font-serif text-[19px] md:text-[22px] text-primary leading-snug">
              Trabajas bien, pero tu carrera depende de decisiones que toma
              otra gente. <span className="font-semibold">Un jefe.</span>{" "}
              <span className="font-semibold">Un algoritmo.</span>{" "}
              <span className="font-semibold">
                Una empresa que puede cerrar mañana.
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14">
            <a
              href="/contacto"
              className="inline-flex items-center gap-3 bg-primary text-accent px-9 py-4 rounded-full font-sans text-[12px] font-bold uppercase tracking-[0.18em] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Quiero decidir mi posicionamiento
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBrandSection;
