import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 lg:py-28 bg-hero-bg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Recursos gratuitos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-5 leading-[1.2]">
            Recursos gratuitos para crear la vida que amas
          </h2>
          <p className="text-muted-foreground text-[17px] mb-10 leading-relaxed">
            Suscríbete y recibe directamente en tu email guías prácticas de IA, estrategia 
            y contenido exclusivo para construir un negocio alineado con tu estilo de vida.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-none px-5 py-6 bg-background border-border text-base"
            />
            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-8 py-6 text-[12px] font-semibold uppercase tracking-[0.15em] whitespace-nowrap shadow-none border border-accent"
            >
              Suscribirme
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-5">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
