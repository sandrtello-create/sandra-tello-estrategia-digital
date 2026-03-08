import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Gift } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-accent/5 via-secondary/60 to-mint/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Gift className="h-8 w-8 text-accent" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Recursos gratuitos para crear la vida que amas
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
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
              className="rounded-full px-6 py-6 bg-card border-border/60 text-base"
            />
            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-gold-light rounded-full px-8 py-6 text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
            >
              <Send className="h-4 w-4 mr-2" />
              Suscribirme
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
