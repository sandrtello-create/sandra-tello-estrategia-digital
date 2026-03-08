import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-coral/20 flex items-center justify-center mx-auto mb-8">
            <Calendar className="h-8 w-8 text-coral" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            ¿Lista para transformar tu expertise en autoridad?
          </h2>
          <p className="text-primary-foreground/75 text-lg md:text-xl mb-10 leading-relaxed">
            Agenda una sesión estratégica con Sandra Tello y descubre cómo la inteligencia artificial 
            y una estrategia clara pueden impulsar tu carrera y tu negocio.
          </p>
          <Button className="bg-coral text-coral-foreground hover:bg-coral/90 rounded-full px-10 py-7 text-lg font-semibold shadow-xl shadow-coral/30">
            Agenda tu sesión estratégica
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
