import { ArrowRight, UserRound, Compass, PenTool, Megaphone, Linkedin, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InlineCTA from "@/components/InlineCTA";

const pillars = [
  { icon: Compass, title: "Posicionamiento", description: "Un ángulo defendible: qué mirada aportas al mercado y qué la hace tuya." },
  { icon: UserRound, title: "Identidad", description: "Quién eres, qué sabes, qué defiendes. Sin personaje, sin postureo." },
  { icon: PenTool, title: "Voz", description: "Un tono reconocible que sostenga tu criterio en cada canal y cada formato." },
  { icon: Megaphone, title: "Presencia estratégica", description: "Dónde tienes que estar y por qué. No en todas partes: donde importa." },
  { icon: Linkedin, title: "LinkedIn como activo", description: "El canal principal para posicionar autoridad B2B con contenido y relaciones." },
  { icon: Award, title: "Autoridad sostenida", description: "Construir reputación no es publicar más; es publicar mejor durante más tiempo." },
];

const metodo = [
  ["Auditoría de partida", "Qué percepción hay hoy sobre ti, qué señales estás dando (o no dando) en cada canal, qué está funcionando y qué te está restando."],
  ["Posicionamiento", "Definimos el ángulo defendible: la intersección entre lo que sabes, lo que te importa y lo que tu mercado necesita. No una promesa; un territorio."],
  ["Voz y narrativa", "Un tono, tres o cuatro mensajes clave y una historia que ordene tu recorrido. Es lo que hace que suenes a ti en cualquier formato."],
  ["Plan editorial", "Qué publicar, dónde y con qué frecuencia. LinkedIn como eje si tu negocio es B2B; blog, newsletter o pódcast como refuerzo según tu caso."],
  ["Relaciones estratégicas", "Marca personal no es solo publicar. Es también con quién hablas, a quién te acercas y qué conversaciones sostienes en privado."],
  ["Medición honesta", "Oportunidades reales, calidad de los mensajes que recibes, invitaciones a mesas donde antes no estabas. No likes."],
];

const errores = [
  ["Confundir volumen con autoridad", "Publicar tres veces al día sin criterio no construye marca; construye ruido. Es preferible menos y mejor."],
  ["Copiar la voz de otro", "Los referentes se estudian, no se imitan. Si suenas como diez personas más, no eres una marca; eres un eco."],
  ["Empezar por el diseño", "Un logo bonito sobre un mensaje flojo sigue siendo un mensaje flojo. Primero el criterio, después la estética."],
  ["Delegarlo todo a la IA", "Puedes delegar borradores, no puedes delegar mirada. Si tu marca la escribe entera un modelo, deja de ser tuya."],
];

const faqs = [
  { q: "¿Marca personal es lo mismo que marca de empresa?", a: "No. La marca personal se apoya en una persona concreta —su criterio, su historia, su manera de mirar— y por eso conecta de forma más directa con otras personas. Una empresa puede tener marca corporativa fuerte y, dentro, personas con marca personal propia que la refuerzan." },
  { q: "¿Sirve para cualquier profesión?", a: "Especialmente para consultores, directivos, profesionales liberales, freelance y fundadores. En general, para cualquier trabajo donde la relación de confianza pesa más que el precio en la decisión de compra." },
  { q: "¿Necesito exponerme mucho en redes?", a: "No. La marca personal se construye con criterio y consistencia, no con volumen. Un post reflexivo a la semana en LinkedIn con contenido sólido posiciona más que cinco al día vacíos." },
  { q: "¿Cuánto tarda en dar resultados?", a: "Los primeros resultados de red (mejores conversaciones, nuevas oportunidades) suelen aparecer entre el tercer y el sexto mes. La autoridad reconocida en un sector es un trabajo de 12–24 meses sostenidos." },
  { q: "¿Puedo delegar mi marca personal en la IA?", a: "Puedes delegar tareas —esquemas, borradores, edición— pero no la voz ni el criterio. Si lo delegas todo, tu marca deja de ser personal. La IA te acompaña; no te sustituye." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marca personal estratégica: cómo construir autoridad real",
    author: { "@type": "Person", name: "Sandra Tello" },
    inLanguage: "es",
    about: ["Marca personal", "LinkedIn", "Posicionamiento profesional"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const MarcaPersonal = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))]">
    <SEO
      title="Marca personal estratégica — Sandra Tello"
      description="Cómo construir una marca personal con autoridad real: posicionamiento, voz, LinkedIn y contenido. Método propio de Sandra Tello."
      path="/marca-personal-estrategica"
      jsonLd={jsonLd}
    />
    <Navbar />

    {/* HERO — cream + brand-yellow + oro, tipo revista de moda */}
    <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[hsl(var(--cream))] overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 20%, hsl(var(--brand-yellow) / 0.22), transparent 60%), radial-gradient(700px 400px at 100% 100%, hsl(var(--gold) / 0.15), transparent 60%)",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#C5A55A]" />
              <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.34em]">
                Pilar · Marca personal
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[92px] font-medium text-primary leading-[0.98] tracking-tight">
              Marca personal<br />
              <span className="italic text-[#C5A55A]">estratégica</span>.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-8">
            <p className="font-serif text-lg text-foreground/75 leading-[1.75] border-l-2 border-[hsl(var(--brand-yellow))] pl-6">
              No es un logo bonito ni un carrusel más. Es la decisión de dejar
              de esperar validación y construir, con criterio, la autoridad que
              ya tienes pero no se ve.
            </p>
          </div>
        </div>
      </div>
    </header>

    {/* Manifiesto — dos columnas asimétricas */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
              Punto de partida
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
              Tu valor no se improvisa.<br />
              <span className="italic text-[hsl(var(--navy-mid))]">Se decide</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 font-serif text-[19px] leading-[1.75] text-foreground/80">
            <p>La mayor parte de los profesionales con años de experiencia tienen un problema silencioso: hacen un trabajo excelente que casi nadie ve. Dependen de que alguien —un cliente, un jefe, un contacto— les dé la oportunidad.</p>
            <p>La respuesta suele ser incómoda: no están haciendo nada mal. Simplemente, <em className="text-primary not-italic font-semibold">no están posicionados</em>. Nadie puede elegirte si no sabe que existes ni por qué deberías importarle.</p>
            <p>Construir una marca personal estratégica es tomar la decisión adulta de dejar de esperar. De convertir tu criterio en un activo público.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Seis pilares — layout revista, alternando amarillo/oro */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-2xl mb-20">
          <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Seis pilares
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl text-primary leading-[1.05] font-medium">
            De qué está hecha<br />
            <span className="italic">una marca de verdad</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <article key={p.title} className="group">
              <div
                className={`aspect-[4/5] p-8 flex flex-col justify-between mb-4 ${
                  i % 3 === 1
                    ? "bg-primary text-white"
                    : i % 3 === 2
                      ? "bg-[hsl(var(--brand-yellow))]/40"
                      : "bg-white border border-[#C5A55A]/25"
                }`}
              >
                <p.icon
                  className={`h-8 w-8 ${
                    i % 3 === 1 ? "text-[hsl(var(--brand-yellow))]" : "text-[#C5A55A]"
                  }`}
                  strokeWidth={1.5}
                />
                <div>
                  <span
                    className={`font-serif italic text-6xl block leading-none mb-4 ${
                      i % 3 === 1 ? "text-[hsl(var(--brand-yellow))]/70" : "text-[#C5A55A]/60"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className={`font-serif text-3xl font-medium ${
                      i % 3 === 1 ? "text-white" : "text-primary"
                    }`}
                  >
                    {p.title}
                  </h3>
                </div>
              </div>
              <p className="font-serif text-lg text-foreground/75 leading-[1.7]">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Método — banda navy con acentos yellow */}
    <section className="py-24 lg:py-32 bg-[#1B2A4A]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[hsl(var(--brand-yellow))] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Método
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.1] font-medium">
            Cómo lo construimos, <span className="italic text-[#C5A55A]">paso a paso</span>.
          </h2>
        </div>
        <ol className="space-y-8">
          {metodo.map(([title, body], i) => (
            <li
              key={title}
              className="grid lg:grid-cols-12 gap-6 border-t border-[#C5A55A]/30 pt-8"
            >
              <div className="lg:col-span-1">
                <span className="font-serif text-4xl text-[hsl(var(--brand-yellow))]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl text-white font-medium">{title}</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="font-serif text-lg text-white/75 leading-[1.75]">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Errores frecuentes — cream */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--section-alt))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em] mb-6">
            Errores frecuentes
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-[1.1] font-medium">
            Lo que suele <span className="italic">salir mal</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {errores.map(([title, body], i) => (
            <div
              key={title}
              className="bg-white p-10 border-l-4 border-[hsl(var(--brand-yellow))]"
            >
              <span className="font-serif italic text-[hsl(var(--brand-yellow))] text-2xl">
                Error 0{i + 1}
              </span>
              <h3 className="font-serif text-2xl text-primary font-medium mt-2 mb-4">
                {title}
              </h3>
              <p className="font-serif text-lg text-foreground/75 leading-[1.7]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 lg:py-32 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em] mb-4">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-14 leading-[1.15] font-medium">
          Lo que suelen preguntarme.
        </h2>
        <div className="divide-y divide-[#C5A55A]/30 border-t border-b border-[#C5A55A]/30">
          {faqs.map((item) => (
            <details key={item.q} className="group py-8">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h3 className="font-serif text-xl md:text-2xl text-primary font-medium leading-snug">
                  {item.q}
                </h3>
                <span className="text-[#C5A55A] text-3xl leading-none shrink-0 group-open:rotate-45 transition-transform">
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

    {/* CTA — marco dorado sobre cream */}
    <section className="py-24 lg:py-28 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="border-2 border-[#C5A55A] p-12 lg:p-20 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--cream))] px-6">
            <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.32em]">
              Siguiente paso
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-primary leading-[1.15] mb-8 font-medium">
            ¿Construimos <span className="italic">tu marca</span>?
          </h2>
          <a
            href="/#contacto"
            className="btn-gold-gradient inline-flex items-center gap-3 px-10 py-4 text-[13px] uppercase tracking-[0.24em] font-semibold"
          >
            Trabaja conmigo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default MarcaPersonal;
