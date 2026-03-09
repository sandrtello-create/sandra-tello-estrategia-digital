import { Eye, TrendingUp, Award, Compass, Zap, Heart } from "lucide-react";
import sandraMarcopolo from "@/assets/sandra-tello-marcopolo.jpg";
import logoWatermark from "@/assets/sandra-logo-watermark.png";

const results = [
  {
    icon: Eye,
    title: "Claridad",
    description: "Visión clara de tu posicionamiento, tu mensaje y tus próximos pasos estratégicos.",
  },
  {
    icon: TrendingUp,
    title: "Mejor posicionamiento",
    description: "Diferenciación real en tu mercado con una marca personal que atrae oportunidades.",
  },
  {
    icon: Award,
    title: "Autoridad profesional",
    description: "Conviértete en referente de tu sector con una presencia que inspira confianza.",
  },
  {
    icon: Compass,
    title: "Decisiones estratégicas",
    description: "Toma mejores decisiones de negocio combinando datos, IA y criterio experto.",
  },
  {
    icon: Zap,
    title: "Integración real de IA",
    description: "Implementa la IA de forma práctica y alineada con tu estrategia de negocio.",
  },
  {
    icon: Heart,
    title: "La vida que amas",
    description: "Diseña un negocio que trabaje para ti y te permita vivir con libertad y propósito.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Bloque narrativo con foto */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Texto a la izquierda */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
              Mi forma de trabajar
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-6 leading-[1.2]">
              Transforma tu negocio y crea la vida que amas
            </h2>
            <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
              <p>
                Hubo un tiempo en el que trabajaba encerrada en una oficina sin luz natural, 
                con horarios rígidos y la sensación de que mi vida giraba en torno al trabajo.
              </p>
              <p>
                Hoy trabajo 100% online, desde donde me propongo. Elijo mi entorno, mi ritmo 
                y mis proyectos. Puedo estar en diferentes lugares, compartir espacio con mi familia 
                y disfrutar de la compañía de mi labrador Marcopolo.
              </p>
            </div>
            <div className="mt-6 border-l-2 border-accent pl-5">
              <p className="text-primary font-serif text-lg italic leading-relaxed">
                "Diseñé un negocio que trabaja para mí, no al revés. Y eso mismo es lo que te ayudo a construir."
              </p>
            </div>
          </div>

          {/* Foto a la derecha */}
          <div className="order-1 lg:order-2">
            <img
              src={sandraMarcopolo}
              alt="Sandra Tello trabajando con su labrador Marcopolo"
              className="w-full h-auto object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Grid de resultados */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Resultados
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-5 leading-[1.2]">
            Lo que consigues trabajando conmigo
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-background p-8 text-center hover:bg-background transition-all duration-300 group"
            >
              <result.icon className="h-7 w-7 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl font-medium text-primary mb-2">{result.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
