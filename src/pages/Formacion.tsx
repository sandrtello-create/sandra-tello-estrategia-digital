import { ArrowRight, Building2, GraduationCap, Briefcase, UserRound, Linkedin, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InlineCTA from "@/components/InlineCTA";

const programs = [
  { icon: Building2, title: "Formación in-company en IA", description: "Programas a medida para equipos que integran IA con criterio. Presencial o remoto.", tag: "Empresas" },
  { icon: Briefcase, title: "Workshops intensivos", description: "Sesiones de alto impacto sobre un proceso concreto: contenido, atención al cliente, propuestas, análisis.", tag: "Equipos" },
  { icon: GraduationCap, title: "Programas para profesionales", description: "Formación práctica para profesionales que quieren aprender IA desde cero y aplicarla con criterio.", tag: "Abierto" },
  { icon: UserRound, title: "Mentoría de marca personal", description: "Acompañamiento 1 a 1 para posicionarte con autoridad, dentro y fuera de LinkedIn.", tag: "1 a 1" },
  { icon: Linkedin, title: "LinkedIn con estrategia", description: "Programa práctico para convertir tu perfil en un activo real de negocio.", tag: "1 a 1" },
  { icon: Target, title: "Estrategia de contenido", description: "Diseño de un sistema de contenido coherente, sostenible y con voz propia.", tag: "Empresas · 1 a 1" },
];

const audiencias = [
  { title: "Empresas medianas", body: "Que necesitan integrar IA de forma estructural en varios departamentos." },
  { title: "Equipos de marketing", body: "Que quieren producir mejor sin bajar el estándar ni perder la voz." },
  { title: "Profesionales liberales", body: "Que quieren aprender IA aplicada a su día a día real, no en abstracto." },
  { title: "Directivos", body: "Que necesitan entender qué está pasando antes de aprobar presupuestos o roadmaps." },
];

const faqs = [
  { q: "¿Necesito conocimientos previos para las formaciones en IA?", a: "No. Los programas están diseñados para personas que parten de cero. Lo único que necesitas es criterio sobre tu propio trabajo o negocio." },
  { q: "¿Cuánto duran las formaciones?", a: "Los workshops intensivos duran entre 4 y 8 horas. Los programas in-company van de 3 a 6 sesiones. Las mentorías 1 a 1 se estructuran en bloques de 3 meses renovables." },
  { q: "¿Trabajas con empresas de sectores concretos?", a: "He trabajado con equipos en sectores industrial, transporte, turismo y educativo, con foco en comunicación y redes sociales. Pero la metodología se adapta a cualquier sector de servicios." },
  { q: "¿Se pueden bonificar las formaciones para empresas?", a: "Sí, en muchos casos son bonificables a través de FUNDAE. Podemos revisarlo caso a caso en la primera conversación." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formación en IA, marca personal y estrategia digital",
  description: "Programas de formación in-company, workshops y mentorías 1 a 1 en IA aplicada, marca personal y estrategia digital.",
  provider: { "@type": "Person", name: "Sandra Tello", url: "/" },
  inLanguage: "es",
};

const Formacion = () => (
  <div className="min-h-screen bg-[hsl(var(--section-alt))]">
    <SEO
      title="Formación en IA y marca personal — Sandra Tello"
      description="Formación in-company, workshops y mentorías 1 a 1 en IA aplicada, marca personal, LinkedIn y estrategia de contenido. Programas prácticos por Sandra Tello."
      path="/formacion"
      jsonLd={jsonLd}
    />
    <Navbar />

    {/* HERO — section-alt casi blanco con acento mint */}
    <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[hsl(var(--section-alt))] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 400px at 90% 20%, hsl(var(--mint) / 0.18), transparent 60%)",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-16 bg-[hsl(var(--mint))]" />
          <p className="text-[hsl(var(--mint))] font-semibold text-[11px] uppercase tracking-[0.34em]">
            Formación in-company · Curso IA para empresas
          </p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[76px] font-medium text-primary leading-[1.05] max-w-5xl tracking-tight">
          Formación en inteligencia artificial<br />
          y marca personal <span className="italic text-[hsl(var(--navy-mid))]">con criterio real</span>.
        </h1>
        <p className="mt-12 font-serif text-foreground/70 text-xl leading-[1.75] max-w-3xl">
          Programas <strong className="font-medium text-primary">in-company de formación en IA</strong>,
          workshops intensivos y mentorías 1 a 1 en marca personal, LinkedIn y estrategia de contenido.
          Cada programa se adapta a tu equipo, tu sector y tu punto de partida.
        </p>
      </div>
    </header>

    {/* 6 programas — filas horizontales anchas */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[hsl(var(--mint))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Programas
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
            Seis formatos, <span className="italic">una misma exigencia</span>.
          </h2>
        </div>

        <div className="divide-y divide-primary/10 border-t border-b border-primary/10">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className="grid lg:grid-cols-12 gap-6 py-10 lg:py-12 group hover:bg-[hsl(var(--section-alt))] transition-colors px-4 lg:px-6"
            >
              <div className="lg:col-span-1 flex lg:justify-center">
                <div className="w-14 h-14 flex items-center justify-center bg-[hsl(var(--mint))]/15 border border-[hsl(var(--mint))]/40">
                  <p.icon className="h-6 w-6 text-[hsl(var(--mint))]" strokeWidth={1.5} />
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[hsl(var(--mint))] font-semibold text-[10px] uppercase tracking-[0.28em] mb-2">
                  0{i + 1} · {p.tag}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl text-primary font-medium">
                  {p.title}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="font-serif text-lg leading-[1.75] text-foreground/75">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Cómo trabajo la formación — banda navy con mint */}
    <section className="py-24 lg:py-32 bg-[#1B2A4A]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[hsl(var(--mint))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Cómo trabajo la formación
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.1] font-medium">
            Aplicada, medida y <span className="italic text-[hsl(var(--mint))]">con seguimiento</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {[
            ["Aplicada", "Nunca teoría suelta. Todos los ejercicios se hacen sobre casos reales del equipo o del profesional. Lo que aprendes esta semana se usa la siguiente."],
            ["Medida", "Cada programa arranca con un diagnóstico de dónde se va el tiempo hoy, y termina midiendo cuánto se ha recuperado. Sin métricas no hay formación seria."],
            ["Con seguimiento", "Los programas in-company incluyen soporte posterior. La adopción real de IA no se resuelve en un curso; se resuelve cuando el equipo la usa sin necesitar que estés delante."],
            ["A tu sector", "He trabajado con equipos en industrial, transporte, turismo y educativo. Los ejemplos, los casos y los ejercicios se adaptan a tu contexto."],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-[hsl(var(--mint))]/40 pt-6">
              <h3 className="font-serif text-2xl text-[hsl(var(--mint))] mb-4 font-medium">{title}</h3>
              <p className="font-serif text-white/75 text-lg leading-[1.75]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Para quién — cuatro columnas cream */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[hsl(var(--mint))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Para quién
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
            Con quién trabajo <span className="italic">en formación</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiencias.map((a, i) => (
            <div
              key={a.title}
              className="bg-white p-8 border-t-2 border-[hsl(var(--mint))] min-h-[240px] flex flex-col justify-between"
            >
              <span className="font-serif italic text-[hsl(var(--mint))] text-3xl">0{i + 1}</span>
              <div>
                <h3 className="font-serif text-xl text-primary font-medium mb-3">{a.title}</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <p className="text-[hsl(var(--mint))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-4">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-14 leading-[1.15] font-medium">
          Lo que suelen preguntarme.
        </h2>
        <div className="divide-y divide-[hsl(var(--mint))]/30 border-t border-b border-[hsl(var(--mint))]/30">
          {faqs.map((item) => (
            <details key={item.q} className="group py-8">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h3 className="font-serif text-xl md:text-2xl text-primary font-medium leading-snug">
                  {item.q}
                </h3>
                <span className="text-[hsl(var(--mint))] text-3xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-5 text-foreground/75 text-[17px] leading-[1.75] font-serif max-w-3xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-28 bg-[hsl(var(--section-alt))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-[1.15] mb-8 font-medium">
          ¿Diseñamos <span className="italic text-[hsl(var(--mint))]">tu programa</span>?
        </h2>
        <a
          href="/#contacto"
          className="btn-gold-gradient inline-flex items-center gap-3 px-10 py-4 text-[13px] uppercase tracking-[0.24em] font-semibold"
        >
          Hablamos
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default Formacion;
