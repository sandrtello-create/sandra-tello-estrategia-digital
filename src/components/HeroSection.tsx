import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-lavender via-soft-pink to-transparent rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-turquoise/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Consultora Estratégica · IA & Marca Personal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Transforma tu expertise en{" "}
              <span className="italic text-coral">autoridad</span>{" "}
              con inteligencia artificial y estrategia
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ayudo a profesionales, emprendedores y empresas a integrar la IA con estrategia 
              y criterio humano para convertir su conocimiento en visibilidad, posicionamiento 
              y oportunidades de negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-coral text-coral-foreground hover:bg-coral/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-coral/25">
                Trabaja conmigo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-primary/30 text-primary hover:bg-primary/5">
                Descubre mis servicios
              </Button>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-lavender via-turquoise/20 to-soft-pink flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/10">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-turquoise/30 to-coral/30 mx-auto mb-6" />
                <p className="text-muted-foreground font-medium">Foto de Sandra Tello</p>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-coral to-coral/70 shadow-lg flex items-center justify-center">
              <span className="text-coral-foreground font-serif text-3xl font-bold">IA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
