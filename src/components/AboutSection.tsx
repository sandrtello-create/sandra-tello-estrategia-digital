import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-section-alt overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                  <div className="w-28 h-28 rounded-full bg-primary/8 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">Foto de Sandra</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
              Sobre Sandra Tello
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-6 leading-[1.2]">
              Estrategia, IA y la vida que mereces vivir
            </h2>
            <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
              Con más de 15 años de experiencia en estrategia empresarial, marketing y 
              desarrollo de marca, he ayudado a cientos de profesionales y empresas a 
              posicionar su expertise y transformar su conocimiento en oportunidades reales.
            </p>
            <p className="text-muted-foreground text-[17px] leading-relaxed mb-8">
              Creo firmemente que tu negocio debe estar al servicio de la vida que quieres crear. 
              Por eso integro la inteligencia artificial como herramienta estratégica, para que 
              trabajes con más inteligencia, menos esfuerzo y más libertad.
            </p>

            <div className="border-l-2 border-accent pl-6 mb-6">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                    Inteligencia Humana Estratégica™
                  </h3>
                  <p className="text-muted-foreground text-[15px]">
                    Estrategia, criterio humano, marketing e inteligencia artificial 
                    para tomar mejores decisiones y generar resultados tangibles.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-mint pl-6 mb-8">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-mint mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                    Crea la vida que amas
                  </h3>
                  <p className="text-muted-foreground text-[15px]">
                    Tu negocio es el vehículo para diseñar una vida con propósito, 
                    libertad y equilibrio.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="rounded-none px-8 py-5 border-primary/20 text-primary hover:bg-primary/5 uppercase tracking-[0.15em] text-[12px] font-semibold">
              Conoce más sobre Sandra
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
