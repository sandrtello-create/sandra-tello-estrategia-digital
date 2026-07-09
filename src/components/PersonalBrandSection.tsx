import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import sandraPortrait from "@/assets/sandra-portrait-half.png.asset.json";

const dolores = [
  {
    num: "01",
    body: (
      <>
        Llevas años acumulando experiencia. Pero cuando alguien busca lo que
        tú haces, <span className="italic">aparecen otros nombres</span>.
      </>
    ),
  },
  {
    num: "02",
    body: (
      <>
        Compañeros con menos recorrido crecen más rápido. Se les ve.{" "}
        <span className="italic">A ti no.</span>
      </>
    ),
  },
  {
    num: "03",
    body: (
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

const DolorCard = ({
  num,
  body,
  index,
}: {
  num: string;
  body: React.ReactNode;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative border border-primary/15 bg-background px-8 md:px-10 py-7 md:py-8 grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-center transition-all duration-700 ease-out hover:border-accent hover:shadow-[0_20px_60px_-30px_rgba(27,42,74,0.35)] group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 180}ms`,
      }}
    >
      {/* Barra dorada lateral */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-[3px] bg-accent transition-all duration-500 ease-out"
        style={{ height: visible ? "100%" : "0%" }}
      />

      {/* Número */}
      <span className="font-serif italic text-accent text-5xl md:text-6xl leading-none">
        {num}
      </span>

      {/* Texto */}
      <p className="font-serif text-primary text-[18px] md:text-[20px] leading-[1.4]">
        {body}
      </p>
    </div>
  );
};

const PersonalBrandSection = () => {
  return (
    <section
      id="marca-personal-home"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      aria-label="Marca personal y posicionamiento digital"
    >
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Foto lateral — derecha, espejada */}
          <div className="lg:col-span-5 lg:col-start-8 lg:sticky lg:top-24 lg:self-start order-first lg:order-last">
            <div className="relative">
              {/* Marco dorado desplazado */}
              <span
                aria-hidden="true"
                className="hidden md:block absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent"
              />
              <span
                aria-hidden="true"
                className="hidden md:block absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/50"
              />
              <div className="relative bg-[#F5F0E8] overflow-hidden">
                <img
                  src={sandraPortrait.url}
                  alt="Retrato editorial de Sandra Tello"
                  className="w-full h-auto object-cover mix-blend-multiply grayscale-[0.15] scale-x-[-1]"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-primary/5 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Contenido — columna izquierda */}
          <div className="lg:col-span-7 lg:row-start-1">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent/60" />
              <p className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                Marca personal · Posicionamiento digital e IA
              </p>
            </div>

            {/* H2 */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] font-medium text-primary leading-[1.1] mb-10">
              Crea una marca personal imposible de ignorar.
              <br />
              <span className="relative inline-block italic text-accent mt-2">
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
                  />
                </svg>
              </span>
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
                Así consigues que en tu sector te encuentren, te elijan y
                dejes de ser un número en una larga lista para ser tú, con tu
                nombre y tus apellidos.
              </p>
            </div>

            {/* Dolores — rectángulos apilados */}
            <div className="mt-14">
              <div className="mb-8 flex items-center gap-4">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/60">
                  Reconócete
                </span>
                <span className="h-px flex-1 bg-primary/15" />
              </div>

              <div className="flex flex-col gap-5">
                {dolores.map((d, i) => (
                  <DolorCard key={i} num={d.num} body={d.body} index={i} />
                ))}
              </div>
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
      </div>
    </section>
  );
};

export default PersonalBrandSection;
