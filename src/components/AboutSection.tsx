import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl bg-gradient-to-tr from-lavender to-turquoise/20 shadow-xl overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                  <div className="w-28 h-28 rounded-full bg-primary/10 mx-auto mb-4" />
                  <p className="text-muted-foreground">Foto de Sandra</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl" />
          </div>

          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Sobre Sandra Tello
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Estrategia, marketing y criterio humano en la era de la inteligencia artificial
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Con más de 15 años de experiencia en estrategia empresarial, marketing y 
              desarrollo de marca, he ayudado a cientos de profesionales y empresas a 
              posicionar su expertise y transformar su conocimiento en oportunidades reales.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hoy integro la inteligencia artificial como herramienta estratégica, pero siempre 
              con el criterio humano como centro de cada decisión. Así nació mi framework:
            </p>

            <div className="bg-gradient-to-r from-lavender to-soft-pink rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    Inteligencia Humana Estratégica™
                  </h3>
                  <p className="text-muted-foreground">
                    Un enfoque que combina estrategia, criterio humano, marketing e inteligencia artificial 
                    para tomar mejores decisiones y generar resultados tangibles.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/5">
              Conoce más sobre Sandra
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
