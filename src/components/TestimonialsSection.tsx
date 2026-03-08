import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Trabajar con Sandra transformó mi forma de posicionarme profesionalmente. Ahora tengo una estrategia clara y uso la IA con propósito.",
    name: "María López",
    role: "Directora de Marketing",
    company: "Empresa Tech",
  },
  {
    quote:
      "El framework de Inteligencia Humana Estratégica™ me ayudó a tomar mejores decisiones de negocio y a diferencia de mi competencia.",
    name: "Carlos Martínez",
    role: "CEO & Fundador",
    company: "Startup Digital",
  },
  {
    quote:
      "Sandra combina la visión estratégica con un conocimiento profundo de la IA. Los resultados fueron inmediatos y tangibles.",
    name: "Ana García",
    role: "Consultora Senior",
    company: "Consultoría Internacional",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-lavender/50 via-background to-soft-pink/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Lo que dicen quienes han trabajado conmigo
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/40 relative">
            <Quote className="h-10 w-10 text-coral/30 mb-6" />
            <blockquote className="font-serif text-xl md:text-2xl text-primary leading-relaxed mb-8 italic">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-coral/20" />
              <div>
                <p className="font-semibold text-primary">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current ? "bg-coral w-8" : "bg-border"
                  }`}
                  aria-label={`Testimonio ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
