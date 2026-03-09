import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Trabajar con Sandra transformó mi forma de posicionarme profesionalmente. Ahora tengo una estrategia clara y uso la IA con propósito.",
    name: "María López",
    role: "Directora de Marketing",
    company: "Empresa Tech",
    photo: "https://i.pravatar.cc/150?u=maria-lopez",
  },
  {
    quote:
      "El framework de Inteligencia Humana Estratégica™ me ayudó a tomar mejores decisiones de negocio y a diferenciarme de mi competencia.",
    name: "Carlos Martínez",
    role: "CEO & Fundador",
    company: "Startup Digital",
    photo: "https://i.pravatar.cc/150?u=carlos-martinez",
  },
  {
    quote:
      "Sandra combina la visión estratégica con un conocimiento profundo de la IA. Los resultados fueron inmediatos y tangibles.",
    name: "Ana García",
    role: "Consultora Senior",
    company: "Consultoría Internacional",
    photo: "https://i.pravatar.cc/150?u=ana-garcia",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-[#1B2A4A]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-white leading-[1.2]">
            Lo que dicen quienes han trabajado conmigo
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-sm shadow-lg px-8 md:px-14 pt-14 pb-10 relative">
            {/* Avatar */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full overflow-hidden border-[3px] border-accent shadow-md">
                <img
                  src={testimonials[current].photo}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quote icon */}
            <Quote className="h-8 w-8 text-accent/25 mx-auto mb-6" />

            {/* Quote text */}
            <blockquote className="font-serif text-xl md:text-2xl text-primary leading-relaxed mb-8 italic font-light text-center">
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-semibold text-primary text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].role}, {testimonials[current].company}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-accent/50 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-accent w-6" : "bg-white/30"
                  }`}
                  aria-label={`Testimonio ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-accent/50 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
