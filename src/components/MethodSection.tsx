import { Brain, Cpu, BarChart3, Heart, Briefcase } from "lucide-react";
import sandraMetodoBg from "@/assets/sandra-tello-metodo-bg.png";

const pillars = [
  {
    icon: Brain,
    title: "Mentalidad",
    description:
      "Supera el autosabotaje y el síndrome del impostor.",
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
    <section className="pt-10 pb-16 lg:pt-14 lg:pb-24 relative overflow-hidden">
      <img
        src={sandraMetodoBg}
        alt=""
        className="absolute -top-[15%] left-0 h-[115%] w-auto max-w-none object-contain object-left"
      />
      <div className="absolute inset-0 bg-[#1a1f3d]/75" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-right max-w-lg ml-auto mb-20">
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
              className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-10 text-center hover:bg-[#1B2A4A] hover:border-[#C5A55A] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(197,165,90,0.3)]"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="h-9 w-9 text-[hsl(38,55%,50%)] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-[hsl(38,55%,50%)] group-hover:text-white/80 font-serif text-sm font-semibold mb-2 transition-colors duration-300">
                0{index + 1}
              </div>
              <h3 className="font-serif text-[22px] font-medium text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-white/60 group-hover:text-white/80 text-[15px] leading-relaxed transition-colors duration-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MethodSection;
