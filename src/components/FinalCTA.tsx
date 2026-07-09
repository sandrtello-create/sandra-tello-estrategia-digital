import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-6">
            Da el primer paso
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[50px] font-medium text-primary-foreground mb-6 leading-[1.15]">
            ¿Quieres crear la vida que amas con estrategia e IA?
          </h2>
          <p className="text-primary-foreground/55 text-lg md:text-xl mb-10 leading-relaxed">
            Agenda una sesión estratégica conmigo y descubramos cómo la estrategia, la marca personal y la
            inteligencia artificial, aplicadas con criterio, pueden transformar tu negocio y tu estilo de vida.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-12 py-7 text-[14px] font-semibold uppercase tracking-[0.18em] shadow-none border border-accent">
            <Link to="/contacto">
              Agenda tu sesión estratégica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
