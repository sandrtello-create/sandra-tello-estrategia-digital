import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-8">
            <Calendar className="h-8 w-8 text-accent" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            ¿Lista para crear la vida que amas con estrategia e IA?
          </h2>
          <p className="text-primary-foreground/65 text-lg md:text-xl mb-10 leading-relaxed">
            Agenda una sesión estratégica con Sandra Tello y descubre cómo la inteligencia artificial, 
            una estrategia clara y el enfoque correcto pueden transformar tu negocio y tu estilo de vida.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-full px-10 py-7 text-base font-semibold uppercase tracking-wider shadow-xl shadow-accent/25">
            Agenda tu sesión estratégica
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
