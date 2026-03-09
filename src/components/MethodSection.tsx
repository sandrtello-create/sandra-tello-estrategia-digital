import { Brain, Cpu, BarChart3, Heart, Briefcase } from "lucide-react";
import sandraMetodoBg from "@/assets/sandra-tello-metodo-bg.png";

const pillars = [
  {
    icon: Brain,
    title: "Mentalidad",
    description:
      "Supera el autosabotaje y el síndrome del impostor. La confianza es tu mayor ventaja competitiva.",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description:
      "Herramientas de IA aplicadas con propósito para multiplicar tu impacto y optimizar tu tiempo.",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    description:
      "Posicionamiento, visibilidad y autoridad que genera oportunidades reales de negocio.",
  },
  {
    icon: Heart,
    title: "VIDA",
    description:
      "Alineación entre tu proyecto profesional y tu vida personal. Desde la coherencia.",
  },
  {
    icon: Briefcase,
    title: "Negocio",
    description:
      "Estrategia, objetivos claros y un plan de acción para generar resultados reales y sostenibles.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <img
        src={sandraMetodoBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[100%_center]"
      />
      <div className="absolute inset-0 bg-[#1a1f3d]/75" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="gold-gradient-text font-semibold text-sm uppercase tracking-[0.25em] mb-4">
            El Método
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[52px] font-medium text-white mb-6 leading-[1.15]">
            Inteligencia Humana Estratégica™
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Un sistema que alinea mentalidad, IA, marketing, VIDA y negocio
            para que con la tecnología impulses tu valor.{" "}
            <span className="text-white font-medium">Desde la coherencia.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-10 text-center hover:bg-white/15 transition-colors duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="h-9 w-9 text-[hsl(38,55%,50%)]" />
              </div>
              <div className="text-[hsl(38,55%,50%)] font-serif text-sm font-semibold mb-2">
                0{index + 1}
              </div>
              <h3 className="font-serif text-[22px] font-medium text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-white/60 text-[15px] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 font-serif text-xl md:text-2xl text-white/80 italic max-w-2xl mx-auto">
          "Porque la confianza convierte antes que cualquier algoritmo."
        </p>
      </div>
    </section>
  );
};

export default MethodSection;
