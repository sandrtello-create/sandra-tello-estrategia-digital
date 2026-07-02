import { Compass, BrainCircuit, Map, ShieldCheck, MessagesSquare, ScanEye } from "lucide-react";

const areas = [
  {
    icon: Compass,
    title: "Marca personal y liderazgo digital",
    description:
      "Posicionamiento, narrativa profesional y presencia digital para perfiles expertos, directivos, consultores y fundadores.",
    work: "Propuesta de valor, discurso, perfil de LinkedIn, pilares de contenido y tono de comunicación.",
  },
  {
    icon: BrainCircuit,
    title: "Formación en IA aplicada",
    description:
      "Sesiones prácticas para profesionales, empresas y equipos que necesitan aplicar la IA con criterio en su trabajo diario.",
    work: "Prompting, herramientas IA, casos de uso, productividad, marketing, comunicación y toma de decisiones.",
  },
  {
    icon: Map,
    title: "Estrategia digital y posicionamiento",
    description:
      "Diagnóstico y orden estratégico para negocios y profesionales que necesitan comunicar mejor qué hacen, para quién y por qué deberían elegirlos.",
    work: "Auditoría, propuesta de valor, arquitectura de mensajes, servicios y prioridades de acción.",
  },
  {
    icon: ShieldCheck,
    title: "Comunicación para perfiles de alta exposición",
    description:
      "Trabajo estratégico de comunicación para perfiles públicos o profesionales con alta visibilidad que necesitan cuidar reputación, autoridad y coherencia.",
    work: "Narrativa, tono, criterios de publicación, enfoque de contenidos y protección reputacional.",
  },
  {
    icon: MessagesSquare,
    title: "Contenido estratégico para LinkedIn",
    description:
      "Desarrollo de contenido profesional orientado a autoridad, confianza, conversación y oportunidades de negocio.",
    work: "Pilares editoriales, calendario de contenidos, mensajes clave, enfoque de publicaciones y revisión estratégica.",
  },
  {
    icon: ScanEye,
    title: "Auditoría de percepción digital",
    description:
      "Análisis de cómo se percibe una marca, perfil profesional o negocio en sus activos digitales.",
    work: "Revisión de mensaje, coherencia visual, propuesta de valor, tono, contenidos y experiencia percibida.",
  },
];

const ProfilesTeaser = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.28em] mb-5">
            Experiencia aplicada
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary-foreground mb-6 leading-[1.2]">
            Proyectos de estrategia, formación y posicionamiento
          </h2>
          <div className="space-y-4 text-primary-foreground/70 text-[15px] lg:text-[16px] leading-relaxed">
            <p>
              He trabajado en proyectos vinculados a marca personal, estrategia digital, formación en IA, comunicación profesional, posicionamiento y desarrollo de presencia digital para perfiles técnicos, directivos, emprendedores, equipos y figuras de alta exposición pública.
            </p>
            <p className="text-primary-foreground/55 italic">
              Por confidencialidad, no se muestran nombres, marcas, logos ni datos sensibles. Esta sección recoge áreas de intervención reales, explicadas desde el reto trabajado y el enfoque estratégico aplicado.
            </p>
          </div>
        </div>

        {/* Grid 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {areas.map((area, i) => (
            <article
              key={i}
              className="group relative bg-primary-foreground/[0.03] border border-primary-foreground/10 p-8 lg:p-9 transition-all duration-500 hover:border-accent/50 hover:bg-primary-foreground/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.35)]"
            >
              {/* Number */}
              <span className="absolute top-6 right-7 font-serif text-sm text-accent/40 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="mb-7">
                <area.icon
                  className="h-8 w-8 text-accent transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.25}
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl lg:text-[22px] font-medium text-primary-foreground mb-4 leading-snug">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/65 text-[14.5px] leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Divider */}
              <div className="h-px w-10 bg-accent/40 mb-5 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />

              {/* Work done */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent/80 mb-2">
                  Trabajo realizado
                </p>
                <p className="text-primary-foreground/55 text-[13.5px] leading-relaxed">
                  {area.work}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing */}
        <div className="max-w-2xl mx-auto text-center mt-16 lg:mt-20 pt-10 border-t border-primary-foreground/10">
          <p className="font-serif text-lg lg:text-xl italic text-primary-foreground/75 leading-relaxed">
            "La confidencialidad también forma parte del valor estratégico de un proyecto. No todo puede mostrarse con nombres, pero sí puede explicarse con criterio."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilesTeaser;
