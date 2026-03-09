import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoWatermark from "@/assets/sandra-logo-watermark.png";
import sandraAbout from "@/assets/sandra-tello-about.jpg";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SobreMi = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Watermark pattern */}
      <div
        className="fixed inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `url(${logoWatermark})`,
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat',
        }}
      />

      <Navbar />

      <main className="relative z-10 pt-36 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-tight mb-6">
            Sobre Sandra
          </h1>

          <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Estrategia, marketing, inteligencia artificial y una convicción: tu valor no se improvisa, se decide.
          </p>

          <div className="aspect-[16/7] overflow-hidden mb-12">
            <img
              src={sandraAbout}
              alt="Sandra Tello"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Durante muchos años trabajé en el mundo corporativo observando cómo funcionan realmente las empresas: la estrategia, el marketing, la toma de decisiones… y también cómo muchas veces el talento y el conocimiento de las personas quedan invisibles cuando falta dirección.
            </p>
            <p>
              Tendemos a seguir una lógica que pocas veces cuestionamos: trabajar, cumplir, avanzar… y esperar que el valor acabe reconociéndose. Día tras día. Año tras año.
            </p>
            <p>
              Con el tiempo entendí algo importante: <strong className="text-foreground">cuando no decides tu posicionamiento, otros acaban decidiendo tu valor.</strong>
            </p>
            <p>
              Hoy me siento honrada de acompañar a profesionales y empresas que quieren integrar estrategia, marketing, marca personal e inteligencia artificial para generar mejores oportunidades en su negocio, tomar decisiones con criterio y convertir su experiencia en proyectos con dirección.
            </p>
            <p>
              También soy docente en inteligencia artificial aplicada a negocio y marketing, porque creo profundamente en algo que forma parte de mi forma de trabajar: <em className="text-foreground">seguir aprendiendo siempre.</em>
            </p>
          </div>

          {/* Eterna aprendiz band */}
          <div className="mt-16 bg-primary/5 border-t border-border py-10 px-6 lg:px-10">
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-snug font-medium max-w-3xl">
              Me considero una <span className="italic">eterna aprendiz</span>. La tecnología cambia, los negocios evolucionan y la estrategia exige algo fundamental:{" "}
              <span className="text-accent">curiosidad, criterio y humanidad</span>.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#servicios"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 font-serif text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Descubre cómo puedo ayudarte →
            </a>
          </div>
        </div>
      </main>

      {/* Volver */}
      <section className="relative z-10 py-14 bg-primary text-primary-foreground text-center">
        <p className="text-primary-foreground/50 text-[11px] uppercase tracking-[0.2em] mb-3">¿Lista para dar el siguiente paso?</p>
        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">Volver al inicio</h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 btn-gold-gradient rounded-full px-8 py-3 font-semibold text-[12px] uppercase tracking-[0.15em]"
        >
          <ArrowLeft className="h-4 w-4" />
          Ir a inicio
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default SobreMi;
