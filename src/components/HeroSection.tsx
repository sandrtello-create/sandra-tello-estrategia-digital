import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative pt-20 lg:pt-0 overflow-hidden">
      {/* Full-width dark hero like Vilma/Marta */}
      <div className="relative min-h-screen flex items-center bg-primary">
        {/* Background image overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-mint/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-6">
                Consultora Estratégica · IA & Marca Personal
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
                Haz crecer tu negocio con{" "}
                <span className="italic text-accent">inteligencia artificial</span>
              </h1>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-lg">
                Ayudo a profesionales, emprendedores y empresas a integrar la IA con estrategia 
                y criterio humano para convertir su conocimiento en autoridad y oportunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-full px-8 py-6 text-sm font-semibold uppercase tracking-wider shadow-lg shadow-accent/25">
                  Trabaja conmigo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 uppercase tracking-wider font-semibold">
                  Descubre mis servicios
                </Button>
              </div>
            </div>

            {/* Hero image placeholder */}
            <div className="relative hidden lg:flex justify-center">
              <div className="w-[420px] h-[520px] rounded-3xl bg-gradient-to-b from-primary-foreground/10 to-transparent flex items-end justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-mint/20 mx-auto mb-6 border-2 border-accent/30" />
                  <p className="text-primary-foreground/50 font-medium text-sm uppercase tracking-wider">
                    Foto de Sandra Tello
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
