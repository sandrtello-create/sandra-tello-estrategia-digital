import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Gift } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-coral/5 via-lavender/40 to-soft-pink/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-6">
            <Gift className="h-8 w-8 text-coral" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Recursos gratuitos de IA y estrategia
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Suscríbete y recibe directamente en tu email guías prácticas, herramientas de IA 
            y contenido exclusivo sobre estrategia y marca personal.
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
              className="bg-coral text-coral-foreground hover:bg-coral/90 rounded-full px-8 py-6 text-base font-semibold whitespace-nowrap"
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
