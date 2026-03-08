import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl bg-gradient-to-tr from-secondary to-mint/10 shadow-xl overflow-hidden">
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
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">
              Sobre Sandra Tello
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Estrategia, IA y la vida que mereces vivir
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Con más de 15 años de experiencia en estrategia empresarial, marketing y 
              desarrollo de marca, he ayudado a cientos de profesionales y empresas a 
              posicionar su expertise y transformar su conocimiento en oportunidades reales.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Creo firmemente que tu negocio debe estar al servicio de la vida que quieres crear. 
              Por eso integro la inteligencia artificial como herramienta estratégica, para que 
              trabajes con más inteligencia, menos esfuerzo y más libertad. Así nació mi framework:
            </p>

            <div className="bg-gradient-to-r from-secondary to-cream rounded-2xl p-6 mb-6 border border-border/50">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
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

            <div className="bg-gradient-to-r from-mint/5 to-accent/5 rounded-2xl p-6 mb-8 border border-mint/20">
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-mint mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    Crea la vida que amas
                  </h3>
                  <p className="text-muted-foreground">
                    Tu negocio es el vehículo para diseñar una vida con propósito, libertad y equilibrio. 
                    La estrategia y la IA son las herramientas para lograrlo.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/5 uppercase tracking-wider text-xs font-semibold">
              Conoce más sobre Sandra
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
