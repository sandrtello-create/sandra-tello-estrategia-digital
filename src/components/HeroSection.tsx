import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Instagram, Linkedin } from "lucide-react";
import sandraPhoto from "@/assets/sandra-tello-hero.jpg";

const socialStats = [
  { icon: Youtube, count: "50,000+", label: "YouTube" },
  { icon: Instagram, count: "35,000+", label: "Instagram" },
  { icon: Linkedin, count: "20,000+", label: "LinkedIn" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Hero with soft grey-blue background */}
      <div className="relative min-h-screen flex items-center bg-hero-bg">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen pt-20">
            {/* Photo side */}
            <div className="relative hidden lg:flex items-end justify-center order-1">
              <div className="w-full max-w-[480px] h-[600px] bg-gradient-to-t from-hero-bg via-transparent to-transparent flex items-end justify-center">
                <img 
                  src={sandraPhoto} 
                  alt="Sandra Tello" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text side */}
            <div className="max-w-lg order-2 py-20 lg:py-0">
              <p className="text-muted-foreground font-medium text-[13px] uppercase tracking-[0.2em] mb-8">
                Sandra Tello · Empresaria · Consultora · Formadora · Mentora
              </p>
              <h1 className="font-serif text-[42px] md:text-5xl lg:text-[56px] font-medium text-primary leading-[1.15] mb-6">
                Crea la vida que te haga ilusión vivir
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Aprende a integrar la inteligencia artificial con estrategia y criterio humano 
                para transformar tu negocio, tu marca personal y tu estilo de vida.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-10 py-7 text-[13px] font-semibold uppercase tracking-[0.18em] shadow-none border border-accent">
                Suscríbete a la lista de emails
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof bar */}
      <div className="bg-background border-t border-border/60 py-6">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-12 md:gap-20">
            {socialStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="h-6 w-6 text-primary/60" />
                <span className="text-xl md:text-2xl font-serif font-semibold text-primary">
                  {stat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
