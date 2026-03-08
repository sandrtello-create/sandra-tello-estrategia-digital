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
      "El framework de Inteligencia Humana Estratégica™ me ayudó a tomar mejores decisiones de negocio y a diferenciarme de mi competencia.",
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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary leading-[1.2]">
            Lo que dicen quienes han trabajado conmigo
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center px-4 md:px-12">
            <Quote className="h-10 w-10 text-accent/30 mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-3xl text-primary leading-relaxed mb-10 italic font-light">
              "{testimonials[current].quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-primary text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].role}, {testimonials[current].company}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent/50 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-accent w-6" : "bg-border"
                  }`}
                  aria-label={`Testimonio ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent/50 transition-colors"
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
