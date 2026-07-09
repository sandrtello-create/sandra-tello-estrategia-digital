import { ArrowRight } from "lucide-react";

const dolores = [
  {
    num: "01",
    text: (
      <>
        Llevas años acumulando experiencia. Pero cuando alguien busca lo que
        tú haces, <em className="italic text-accent not-italic-fallback">aparecen otros nombres</em>.
      </>
    ),
  },
  {
    num: "02",
    text: (
      <>
        Compañeros con menos recorrido crecen más rápido. Se les ve.{" "}
        <em className="italic text-accent">A ti no.</em>
      </>
    ),
  },
  {
    num: "03",
    text: (
      <>
        Trabajas bien, pero tu carrera depende de decisiones que toma otra
        gente. <span className="font-semibold">Un jefe.</span>{" "}
        <span className="font-semibold">Un algoritmo.</span>{" "}
        <span className="font-semibold">
          Una empresa que puede cerrar mañana.
        </span>
      </>
    ),
  },
];

const PersonalBrandSection = () => {
  return (
    <section
      id="marca-personal-home"
      className="relative py-24 lg:py-32 bg-[#F5F0E8] overflow-hidden"
      aria-label="Marca personal y posicionamiento digital"
    >
      {/* Ornamento decorativo — número gigante fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 md:-right-20 font-serif text-[220px] md:text-[380px] leading-none text-accent/[0.06] select-none"
      >
        01
      </div>

      {/* Hairline dorado superior */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Columna izquierda — sticky headline */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 lg:self-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-accent" />
              <p className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                Marca personal · Posicionamiento digital e IA
              </p>
            </div>

            {/* H2 con "Y de borrar" subrayado */}
            <h2 className="font-serif text-[36px] md:text-5xl lg:text-[56px] font-medium text-primary leading-[1.05] mb-10">
              Crea una marca personal imposible de ignorar.{" "}
              <span className="relative inline-block italic text-accent">
                Y de borrar.
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 Q 75 2, 150 5 T 298 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="text-accent"
                  />
                </svg>
              </span>
            </h2>

            {/* Cuerpo */}
            <div className="space-y-5 text-primary/85 text-[17px] md:text-[18px] leading-relaxed font-serif max-w-xl">
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
                Así consigues que en tu sector te encuentren, te elijan y
                dejes de ser un número en una larga lista para ser tú, con tu
                nombre y tus apellidos.
              </p>
            </div>

            {/* CTA — solo desktop */}
            <div className="mt-12 hidden lg:block">
              <a
                href="/contacto"
                className="group inline-flex items-center gap-3 bg-primary text-accent px-9 py-4 rounded-none font-sans text-[12px] font-bold uppercase tracking-[0.18em] hover:bg-accent hover:text-primary transition-all duration-500 border border-primary hover:border-accent shadow-lg"
              >
                Quiero decidir mi posicionamiento
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Columna derecha — dolores */}
          <div className="lg:col-span-6">
            {/* Header del bloque */}
            <div className="mb-10 flex items-center gap-4">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/60">
                Reconócete
              </span>
              <span className="h-px flex-1 bg-primary/15" />
            </div>

            <div className="space-y-0">
              {dolores.map((d, i) => (
                <div
                  key={i}
                  className="group relative grid grid-cols-[auto_1fr] gap-6 md:gap-8 py-8 border-t border-primary/10 first:border-t-0 transition-colors"
                >
                  {/* Número editorial gigante */}
                  <div className="relative">
                    <span className="block font-serif italic text-[64px] md:text-[80px] leading-[0.85] text-accent/30 group-hover:text-accent transition-colors duration-500">
                      {d.num}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-2 left-0 w-8 h-px bg-accent/60 group-hover:w-16 transition-all duration-500"
                    />
                  </div>

                  {/* Texto del dolor */}
                  <p className="font-serif text-primary text-[19px] md:text-[22px] leading-[1.35] pt-2">
                    {d.text}
                  </p>
                </div>
              ))}
              {/* Cierre */}
              <div className="border-t border-primary/10" />
            </div>

            {/* Ornamento cita */}
            <div className="mt-12 pl-6 border-l-2 border-accent">
              <p className="font-serif italic text-primary/70 text-[17px] leading-relaxed">
                No es un problema de esfuerzo. Es un problema de
                posicionamiento.
              </p>
            </div>

            {/* CTA — mobile */}
            <div className="mt-10 lg:hidden">
              <a
                href="/contacto"
                className="inline-flex items-center gap-3 bg-primary text-accent px-8 py-4 font-sans text-[12px] font-bold uppercase tracking-[0.18em]"
              >
                Quiero decidir mi posicionamiento
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hairline dorado inferior */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
    </section>
  );
};

export default PersonalBrandSection;
