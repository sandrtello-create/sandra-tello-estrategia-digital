import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import DiagonalPhotoMarquee from "@/components/DiagonalPhotoMarquee";
import logoWatermark from "@/assets/sandra-logo-watermark.png";
import sandraAbout from "@/assets/sandra-tello-about.jpg";
import sandraHero from "@/assets/sandra-tello-hero.jpg";
import sandraIA from "@/assets/sandra-tello-ia.jpg";
import sandraMarcopolo from "@/assets/sandra-tello-marcopolo.jpg";
import {
  ArrowRight,
  Camera,
  Music,
  Waves,
  Scale,
  Sparkles,
  Coffee,
  BookOpen,
  Dog,
  Plane,
  Palette,
  GraduationCap,
} from "lucide-react";

/**
 * Editorial long-form "Mi Historia" page.
 * Estilo Vilma Núñez adaptado a la paleta navy + oro de Sandra,
 * con ritmo variado: escenas foto/texto + línea de vida + cifras +
 * carrusel de citas + bloque humano ligero.
 */

/* ------------------------------ helpers ------------------------------ */

const PhotoPlaceholder = ({
  label,
  hint,
  aspect = "aspect-[4/5]",
}: {
  label: string;
  hint: string;
  aspect?: string;
}) => (
  <figure className={`relative w-full ${aspect} bg-[hsl(var(--section-alt))] border border-border overflow-hidden group`}>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <Camera className="h-8 w-8 text-accent/70 mb-3" strokeWidth={1.2} />
      <p className="font-serif text-lg text-foreground/70 italic mb-2">{label}</p>
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground max-w-[24ch] leading-relaxed">
        {hint}
      </p>
    </div>
    <div className="absolute inset-3 border border-accent/20 pointer-events-none" />
  </figure>
);

/** Bloque tipográfico para sustituir un placeholder de foto:
 *  número de capítulo enorme en oro + cita corta. Sirve como pausa visual. */
const TypographicPhoto = ({
  chapter,
  quote,
  variant = "cream",
}: {
  chapter: string;
  quote: string;
  variant?: "cream" | "navy";
}) => {
  const isNavy = variant === "navy";
  return (
    <figure
      className={`relative w-full aspect-[4/5] overflow-hidden border ${
        isNavy
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-[#ECE9E3] text-foreground border-border"
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url(${logoWatermark})`,
          backgroundSize: "70px auto",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <span
          className="font-serif italic leading-none gold-gradient-text"
          style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
        >
          {chapter}
        </span>
        <blockquote className="font-serif text-xl md:text-2xl leading-snug italic border-l-2 border-accent pl-4">
          {quote}
        </blockquote>
      </div>
    </figure>
  );
};

const Scene = ({
  eyebrow,
  children,
  photo,
  reverse = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  photo: React.ReactNode;
  reverse?: boolean;
}) => (
  <section className="py-16 lg:py-24 border-t border-border/60">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">{photo}</div>
        </div>
        <div className="lg:col-span-7">
          {eyebrow && (
            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent mb-5">
              {eyebrow}
            </p>
          )}
          <div className="space-y-6 font-serif text-[19px] md:text-[20px] leading-[1.75] text-foreground/85">
            {children}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{
        backgroundImage: `url(${logoWatermark})`,
        backgroundSize: "90px auto",
        backgroundRepeat: "repeat",
      }}
    />
    <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center relative z-10">
      <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight">
        {children}
      </p>
    </div>
  </section>
);

/* ---------------------- MÓDULO A · Línea de vida ---------------------- */

const timeline: { year: string; title: string; note: string }[] = [
  { year: "2005", title: "Primer paso corporate", note: "Entro en el mundo de la empresa desde la asistencia de dirección." },
  { year: "2008", title: "Derecho y ADE", note: "Estudio en paralelo mientras trabajo. Empieza la doble vida." },
  { year: "2012", title: "Marketing y comunicación", note: "Sin cargo oficial, asumo la voz de la marca." },
  { year: "2015", title: "Máster en Marketing", note: "Formalizo lo que ya venía haciendo desde hacía años." },
  { year: "2018", title: "Mediadora registrada", note: "Formación en Mediación y Arbitraje. El criterio se afila." },
  { year: "2021", title: "La rotura", note: "Rodilla, baja, despido. Ley de Segunda Oportunidad." },
  { year: "2022", title: "El silencio del norte", note: "Me marcho a un lugar casi vacío. Empiezo a oírme." },
  { year: "2023", title: "Máster en Inteligencia Artificial", note: "Vuelvo con criterio y con una herramienta nueva." },
  { year: "2024", title: "Consultora estratégica", note: "Marca personal, estrategia e IA aplicada a negocio." },
  { year: "Hoy", title: "Inteligencia Humana Estratégica™", note: "Acompaño a otras personas a decidir su propio valor." },
];

const TimelineSection = () => (
  <section className="py-20 lg:py-28 bg-[#ECE9E3] border-y border-border/60 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: `url(${logoWatermark})`,
        backgroundSize: "90px auto",
        backgroundRepeat: "repeat",
      }}
    />
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="text-center mb-14">
        <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent mb-4">
          Línea de vida profesional
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight max-w-3xl mx-auto">
          Todo lo que pasó <span className="italic text-accent">antes</span> de que esta página existiera.
        </h2>
      </div>

      <div className="relative overflow-x-auto pb-6 -mx-6 px-6 lg:mx-0 lg:px-0">
        <div className="absolute left-0 right-0 top-[86px] h-px bg-accent/30 hidden md:block" />
        <ol className="flex gap-6 md:gap-8 min-w-max md:min-w-0 md:grid md:grid-cols-5 lg:grid-cols-10">
          {timeline.map((item) => (
            <li key={item.year} className="w-[220px] md:w-auto flex flex-col items-start">
              <span className="font-serif text-2xl md:text-[26px] font-medium text-primary leading-none mb-4">
                {item.year}
              </span>
              <span className="relative flex items-center justify-center w-4 h-4 mb-4">
                <span className="w-3 h-3 rounded-full gold-gradient" />
                <span className="absolute inset-0 rounded-full border border-accent/40" />
              </span>
              <p className="font-serif text-base font-medium text-foreground leading-snug mb-2">
                {item.title}
              </p>
              <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
                {item.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

/* ---------------------- MÓDULO C · En cifras -------------------------- */

const stats: { value: string; label: string }[] = [
  { value: "18", label: "años en el mundo corporate" },
  { value: "6", label: "titulaciones oficiales" },
  { value: "2", label: "másters (Marketing e IA)" },
  { value: "1", label: "rescate propio, sin plan B" },
];

const EnCifrasSection = () => (
  <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: `url(${logoWatermark})`,
        backgroundSize: "110px auto",
        backgroundRepeat: "repeat",
      }}
    />
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="mb-14 max-w-2xl">
        <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent mb-4">
          Este recorrido en cifras
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">
          Los papeles no fueron trofeos.
          <br />
          Fueron <span className="italic text-accent">piezas de un mapa</span>.
        </h2>
      </div>

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-primary-foreground/20 pt-6">
            <dt
              className="font-serif italic leading-none gold-gradient-text mb-4"
              style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)" }}
            >
              {s.value}
            </dt>
            <dd className="font-sans text-[13px] uppercase tracking-[0.16em] text-primary-foreground/75 leading-relaxed max-w-[22ch]">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

/* ---------------------- MÓDULO D · Carrusel de citas ------------------ */

const rotatingQuotes = [
  "Cuando no decides tu valor, otros lo deciden por ti.",
  "Pide ayuda cuando la necesites. Esa fue mi primera regla nueva.",
  "El mérito sin oportunidad es una frase bonita que repiten quienes ya están dentro.",
  "No existe fecha de caducidad para decidir el propio valor.",
];

const QuotesCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingQuotes.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#DDE3EC] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent mb-8">
          Frases que hoy dirijo también a mí misma
        </p>
        <div className="relative min-h-[220px] md:min-h-[180px] flex items-center justify-center">
          {rotatingQuotes.map((q, i) => (
            <p
              key={q}
              className={`absolute inset-0 flex items-center justify-center font-serif text-2xl md:text-4xl lg:text-5xl font-light text-primary leading-[1.2] italic transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              «{q}»
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mt-10">
          {rotatingQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Cita ${i + 1}`}
              className={`h-1.5 rounded-none transition-all duration-300 ${
                i === index ? "w-10 bg-accent" : "w-6 bg-primary/25 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------------- MÓDULO B · 10 cosas de mí --------------------- */

const funFacts: { icon: typeof Music; title: string; text: string }[] = [
  { icon: Music, title: "Toco el piano", text: "Conservatorio. Todavía saco el teclado cuando algo no me cuadra." },
  { icon: Waves, title: "Chicharrera", text: "Nacida en Tenerife. Hija de madre ecuatoriana y padre peninsular." },
  { icon: Scale, title: "Soy mediadora", text: "Formación en Mediación y Arbitraje. Escuchar antes que hablar." },
  { icon: Sparkles, title: "Alta sensibilidad", text: "Ponerle nombre a mi forma de funcionar lo cambió todo." },
  { icon: Coffee, title: "Café solo, siempre", text: "Sin azúcar, sin leche, sin excusas. La mitad de mis ideas nacen ahí." },
  { icon: BookOpen, title: "Eterna aprendiz", text: "Nunca dejo de estudiar. Ahora, IA aplicada a negocio." },
  { icon: Dog, title: "Marcopolo", text: "Mi compañero de escritorio. Y de casi todo lo demás." },
  { icon: Plane, title: "Entre dos mares", text: "Crecí repartida entre el Atlántico y el Mediterráneo." },
  { icon: Palette, title: "Diseño lo que enseño", text: "Cada plantilla, cada carrusel, cada slide. Manía sana." },
  { icon: GraduationCap, title: "Doy clases de IA", text: "En escuelas de negocio y para equipos que quieren criterio real." },
];

const FunFactsSection = () => (
  <section className="py-24 lg:py-32 bg-[#ECE9E3] border-y border-border/60 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: `url(${logoWatermark})`,
        backgroundSize: "80px auto",
        backgroundRepeat: "repeat",
      }}
    />
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="text-center mb-14">
        <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent mb-4">
          Lado B
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight max-w-3xl mx-auto">
          10 cosas que <span className="italic text-accent">quizá no sabes</span> de mí.
        </h2>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
        {funFacts.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex flex-col items-start border-t border-accent/30 pt-5">
            <Icon className="h-6 w-6 text-accent mb-4" strokeWidth={1.4} />
            <p className="font-serif text-lg font-medium text-foreground leading-snug mb-2">
              {title}
            </p>
            <p className="font-sans text-[14px] text-muted-foreground leading-relaxed">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* =============================== PAGE =============================== */

const SobreMi = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO
        title="Mi historia — Sandra Tello · Consultora en IA, marca personal y marketing"
        description="Del despido a reconstruir un valor propio. La historia real detrás del trabajo de Sandra Tello: marca personal, estrategia y IA aplicada a negocio."
        path="/sobre-mi"
        type="profile"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sandra Tello",
            jobTitle: "Consultora estratégica en Inteligencia Artificial, marca personal y marketing",
            description:
              "Consultora estratégica que acompaña a profesionales y empresas a integrar marca personal, estrategia y IA aplicada a negocio para tomar mejores decisiones y decidir su propio valor.",
            url: "/sobre-mi",
            nationality: "ES",
            birthPlace: {
              "@type": "Place",
              name: "Tenerife, España",
            },
            alumniOf: [
              { "@type": "EducationalOrganization", name: "Grado en Derecho" },
              { "@type": "EducationalOrganization", name: "Administración y Dirección de Empresas" },
              { "@type": "EducationalOrganization", name: "Máster en Dirección Comercial y Marketing" },
              { "@type": "EducationalOrganization", name: "Máster en Inteligencia Artificial" },
            ],
            knowsAbout: [
              "Inteligencia Artificial aplicada a negocio",
              "Estrategia digital",
              "Marca personal",
              "Marketing",
              "Mediación y arbitraje",
              "Employee advocacy",
            ],
            sameAs: [],
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
              { "@type": "ListItem", position: 2, name: "Mi historia", item: "/sobre-mi" },
            ],
          },
        ]}
      />

      {/* Watermark de fondo global */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url(${logoWatermark})`,
          backgroundSize: "100px auto",
          backgroundRepeat: "repeat",
        }}
      />

      <Navbar />

      <main className="relative z-10">
        {/* HERO editorial */}
        <section className="pt-36 pb-16 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-accent mb-8">
                  Mi historia · Sin filtros
                </p>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.02] tracking-tight mb-8">
                  Durante mucho tiempo
                  <br />
                  me dio vergüenza decir
                  <br />
                  <span className="italic text-accent">que me habían despedido.</span>
                </h1>
                <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Esta es la historia real que hay detrás de mi trabajo. La que explica por qué acompaño a otras personas a decidir su propio valor.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative">
                  <div
                    className="absolute -inset-2 bg-brand-teal -z-10"
                    style={{ transform: "rotate(-3deg)" }}
                  />
                  <div
                    className="aspect-[4/5] overflow-hidden shadow-[0_30px_60px_-20px_rgba(27,42,74,0.4)]"
                    style={{ transform: "rotate(2deg)" }}
                  >
                    <img
                      src={sandraAbout}
                      alt="Sandra Tello, retrato editorial"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-6">
                  Sandra Tello — 45 años, chicharrera, eterna aprendiz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Franja diagonal · carrusel visual estilo Vilma */}
        <DiagonalPhotoMarquee />

        {/* MÓDULO A · Línea de vida profesional */}
        <TimelineSection />

        {/* ESCENA 1 — El despido */}
        <Scene
          eyebrow="Capítulo 01 · El día en que todo se detuvo"
          photo={
            <PhotoPlaceholder
              label="Retrato en blanco y negro"
              hint="Mirada directa, expresión serena pero seria. Ancla que esto es real."
            />
          }
        >
          <p className="first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:mt-1">
            Me sentía culpable, como si de repente no valiera nada, como si dejar atrás el estatus de trabajar en una empresa grande y reconocida fuera a borrarme de golpe. Pensaba que ya nadie más se fijaría en mí. Y encima estaba la edad. Todo eso lo guardé dentro durante mucho tiempo, aparentando que estaba bien mientras por dentro me sentía completamente perdida.
          </p>
          <p>
            Fue una reunión breve, en una sala fría, con gente que me había felicitado y abrazado al otro lado de la pantalla apenas unas semanas antes, diciéndome ahora que mi perfil «no era de marketing» y que por eso iban a reestructurar el departamento. ¿Os lo imagináis? Si mi perfil no era de marketing, y una empresa así de grande y así de poderosa me lo decía con esa seguridad, ¿cómo iba yo a seguir viviendo de lo que tanto amaba?
          </p>
          <p>
            En realidad fue el castigo a una baja, a una rotura que no aceptaron bien y a una forma muy habitual de quitarme de en medio sin tener que dar explicaciones. Firmé con un <span className="text-accent font-medium">No Conforme</span> escrito de mi puño y letra. Me acompañaron hasta mi mesa como si fuera una delincuente, y apenas pude despedirme de nadie. Después de casi dieciocho años aguantando mil historias, ya no me quedaba fuerza para nada más.
          </p>
          <p>
            Salí del edificio con una caja de cartón que ni siquiera necesitaba, porque en realidad no había nada mío que llevarme de ahí dentro. Lo mío, lo de verdad, llevaba tiempo estando en otra parte, aunque todavía tardaría un tiempo en descubrir dónde.
          </p>
        </Scene>

        {/* ESCENA 2 — El fondo · bloque tipográfico en lugar de placeholder */}
        <Scene
          eyebrow="Capítulo 02 · Lo que vino después"
          reverse
          photo={
            <TypographicPhoto
              chapter="02"
              quote="El cuerpo subrayó el mensaje por si no había quedado claro."
              variant="cream"
            />
          }
        >
          <p>
            Lo que vino después no tuvo ninguna gracia. Una depresión muy silenciosa que me fue alejando de todo el mundo sin que apenas me diera cuenta, y una situación económica que me llevó a acogerme a la <span className="italic">Ley de Segunda Oportunidad</span> para empezar de cero: sin colchón, sin plan B, sin energía siquiera para fingir delante de mi familia que todo iba bien.
          </p>
          <p>
            Y como si el cuerpo hubiera querido subrayar el mensaje por si no había quedado claro, la rodilla se me volvió a salir: un menisco que tuvieron que reconstruir otra vez, un ligamento cruzado que tuvieron que volver a «bordar», y muchos meses más de reposo forzado en el peor momento posible, justo cuando mi cabeza todavía quería seguir corriendo a la velocidad de siempre.
          </p>
        </Scene>

        {/* ESCENA 3 — Infancia */}
        <Scene
          eyebrow="Capítulo 03 · Antes de todo esto"
          photo={
            <PhotoPlaceholder
              label="Archivo personal, Tenerife"
              hint="Foto escaneada con textura de época. Lo imperfecto ayuda aquí."
            />
          }
        >
          <p>
            Para entender cómo llegué a un día así hay que retroceder bastante más atrás, hasta una chicharrera un poco peculiar, hija de madre ecuatoriana y padre peninsular, que aprendió muy pronto a ser la de las notas altas, la que los profesores describían como madura para su edad, la que nunca daba problemas a nadie.
          </p>
          <p>
            Crecí repartida entre el Atlántico y el Mediterráneo sin saber todavía que ese ir y venir sería mi primer entrenamiento serio: moverme entre mundos distintos sin dejar pedazos de mí misma por el camino. Lo que nadie veía, debajo de esa fachada tan bien resuelta, era el precio: una exigencia interior que jamás se apagaba del todo, y la sensación difusa de no encajar por completo en ningún sitio.
          </p>
        </Scene>

        {/* ESCENA 4 — El piano */}
        <Scene
          eyebrow="Capítulo 04 · El piano y la exigencia"
          reverse
          photo={
            <PhotoPlaceholder
              label="Manos sobre las teclas"
              hint="Blanco y negro, luz lateral suave. Intimidad y disciplina."
              aspect="aspect-[4/5]"
            />
          }
        >
          <p>
            Esa misma niña eligió, muy pequeñita, que quería aprender a tocar el piano. Y ahí, entre escalas que al principio me parecían un idioma inventado, encontré algo parecido a un refugio. El conservatorio me dio oído fino, disciplina, una manera de escuchar tan profunda que me acompañaría el resto de mi vida.
          </p>
          <p>
            Pero también me dejó, sin proponérselo, una idea con veneno lento: que solo merecía estar ahí si tocaba perfecto. Esa idea se me quedó agazapada dentro, y años más tarde la reconocería asomando detrás de cada examen, de cada informe de trabajo, de cada relación en la que me exigí más de lo razonable por miedo a no ser suficiente.
          </p>
        </Scene>

        {/* PULL QUOTE */}
        <PullQuote>
          «Cuando pones toda tu vida en manos de un tercero, llega el día en que ese tercero puede quitártelo todo menos la <span className="italic text-accent">responsabilidad de seguir adelante</span>.»
        </PullQuote>

        {/* ESCENA 5 — Trayectoria */}
        <Scene
          eyebrow="Capítulo 05 · Los títulos y el mérito"
          photo={
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sandraHero}
                alt="Sandra Tello en su trayectoria profesional"
                className="w-full h-full object-cover"
              />
            </div>
          }
        >
          <p>
            Llegados a este punto, pienso que quizá debería plantearme escribir mis memorias algún día. Con el tiempo llegaron los títulos, uno detrás de otro, casi con la voracidad de quien no puede dejar a medias un libro que le interesa de verdad: Técnico Superior en Asistencia a Dirección, en Marketing y Comercio, en Finanzas. Después Derecho. Después Administración y Dirección de Empresas. Un máster en Marketing. La formación en Mediación y Arbitraje que me convirtió en mediadora registrada.
          </p>
          <p>
            Ninguno de esos papeles fue nunca un trofeo para la pared; eran, sin que yo lo supiera aún, las piezas sueltas de un mapa que solo mucho después conseguiría leer entero.
          </p>
          <p>
            Me contrataron como asistente de dirección, con una preparación que me sobraba con creces para el puesto, y desde ahí fui asumiendo, casi sin pedirlo, tareas de atención al cliente, comercial, marketing, comunicación, hasta convertirme en esa persona a la que todo el mundo acudía cuando algo se torcía. Estuve cerca del poder durante casi veinte años sin que a nadie se le ocurriera nunca ponerme el cargo que ese trabajo merecía.
          </p>
          <p>
            Creo, todavía hoy, en el mérito, en que el esfuerzo debería pesar más que la casualidad de a quién conoces. Pero también aprendí, mirándome a mí misma como quien mira un caso de estudio, que <span className="text-foreground font-medium">el mérito sin una oportunidad real detrás es solo una frase bonita que repiten quienes ya están dentro.</span>
          </p>
        </Scene>

        {/* MÓDULO C · En cifras */}
        <EnCifrasSection />

        {/* ESCENA 6 — Reconstrucción · bloque tipográfico navy */}
        <Scene
          eyebrow="Capítulo 06 · El silencio que enseña"
          reverse
          photo={
            <TypographicPhoto
              chapter="06"
              quote="Nadie vino a rescatarme. Me rescaté yo, sin prisa de heroína."
              variant="navy"
            />
          }
        >
          <p>
            Ya sabes lo que vino después. Sabes que, tras la caja de cartón vacía y la rodilla rota, me marché de Tenerife en busca de un lugar casi vacío en pleno invierno, uno de esos sitios donde el silencio de fuera obliga a escuchar lo de dentro.
          </p>
          <p>
            Y ahí, con el mar frío y ese silencio como única compañía, empecé a oírme a mí misma por primera vez en mucho tiempo. Entendí entonces, muy despacio, algo que llevaba media vida esquivando: que cuando pones toda tu vida en manos de un tercero, sea una empresa, un banco o un sistema entero, llega el día en que ese tercero puede quitártelo todo menos la responsabilidad de seguir adelante.
          </p>
          <p>
            Nadie vino a rescatarme. Me rescaté yo, sin prisa de heroína de película, decidiendo poco a poco que la siguiente etapa la construiría con mis propias normas. Y una de las primeras fue, y sigue siendo hoy: <span className="text-accent font-medium">pide ayuda cuando la necesites.</span>
          </p>
        </Scene>

        {/* ESCENA 7 — Ponerle nombre */}
        <Scene
          eyebrow="Capítulo 07 · Ponerle nombre a lo que era"
          photo={
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sandraMarcopolo}
                alt="Sandra Tello con Marcopolo"
                className="w-full h-full object-cover"
              />
            </div>
          }
        >
          <p>
            Hubo otra pieza que tardó bastante más en encajar. Durante años conviví con una sensación difícil de nombrar: me interesaban demasiadas cosas a la vez, conectaba ideas que a nadie más se le ocurría relacionar, me aburría enseguida de cualquier rutina fija, sentía el mundo con un volumen que a los demás les resultaba excesivo.
          </p>
          <p>
            Pasados ya los cuarenta, pude por fin ponerle nombre a esa manera distinta de funcionar, y en lugar de seguir viviéndola como un defecto que corregir, empecé a entenderla como la razón exacta por la que soy capaz de ver matices que otros pasan por alto, y de cruzar disciplinas tan dispares como leyes, negocio, marketing, tecnología o música, como si en el fondo hubieran sido siempre la misma cosa.
          </p>
          <p>
            Durante un tiempo cargué también con otra creencia que ni siquiera era mía: que existe una edad correcta para reinventarse, y que yo ya la había dejado atrás. Tardé en darme cuenta de que esa idea pertenecía a un sistema que premia ir en línea recta y castiga cualquier desvío del camino esperado.
          </p>
          <p className="font-medium text-foreground">
            Hoy sé que no existe fecha de caducidad para decidir el propio valor. Existe, solamente, el momento en que dejas de esperar que alguien te dé permiso para hacerlo.
          </p>
        </Scene>

        {/* MÓDULO D · Carrusel de citas */}
        <QuotesCarousel />

        {/* ESCENA 8 — La vocación construida */}
        <Scene
          eyebrow="Capítulo 08 · Marca, estrategia e IA"
          reverse
          photo={
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sandraIA}
                alt="Sandra Tello enseñando IA aplicada a negocio"
                className="w-full h-full object-cover"
              />
            </div>
          }
        >
          <p>
            De todo ese recorrido, sin que yo lo planeara así, nace la manera en que hoy entiendo la marca personal, la estrategia digital y la inteligencia artificial: tres cosas que, bien miradas, resultan ser en el fondo la misma cosa.
          </p>
          <p>
            Una marca personal honesta no es un personaje de cartón piedra: es contar quién eres, qué sabes y qué aportas, para dejar de depender de que un tercero decida tu valor en tu lugar, como me ocurrió a mí durante casi toda una vida.
          </p>
          <p>
            La estrategia digital es lo que evita que esa marca dependa de la suerte o de publicar sin rumbo. Y la inteligencia artificial es, sencillamente, la herramienta más potente que hemos tenido nunca para ordenar todo eso con criterio propio.
          </p>
        </Scene>

        {/* MÓDULO B · 10 cosas de mí */}
        <FunFactsSection />

        {/* ESCENA 9 — Pelu2Go */}
        <Scene
          eyebrow="Capítulo 09 · Un proyecto que espera su momento"
          photo={
            <PhotoPlaceholder
              label="Pelu2Go"
              hint="Mockup o estética de marca. Opcional."
            />
          }
        >
          <p>
            Queda también, en algún cajón que durante años no tuve tiempo de abrir, un proyecto llamado <span className="text-accent font-medium">Pelu2Go</span>, pensado para digitalizar el sector belleza y para que marcas y salones dejen de tratarse como proveedor y cliente y empiecen a comportarse, por fin, como socios de verdad.
          </p>
          <p>
            No lo abandoné porque la idea no valiera; lo aparqué porque no se puede reconstruir una vida entera y un negocio nuevo al mismo tiempo. Ahora lo he retomado, con mucho más criterio del que tenía la primera vez, y paso a paso. Sin prisa.
          </p>
          <p className="italic text-muted-foreground">
            Al fin y al cabo, ¿cuánto tiempo tenemos? ¿Alguien lo sabe, en realidad?
          </p>
        </Scene>

        {/* CIERRE — Método y llamada */}
        <section className="py-20 lg:py-28 bg-[hsl(var(--section-alt))] border-t border-border/60">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent mb-8 text-center">
              Y por eso hago lo que hago
            </p>
            <div className="space-y-7 font-serif text-[20px] md:text-[22px] leading-[1.75] text-foreground/85">
              <p>
                El Derecho, el piano, el despido, la Ley de Segunda Oportunidad, ponerle nombre por fin a mi propia forma de funcionar, Pelu2Go, la inteligencia artificial: nada de esto son anécdotas sueltas para rellenar una biografía.
              </p>
              <p className="text-foreground font-medium">
                Juntas son la razón exacta por la que entiendo, desde dentro y no desde la teoría, lo que cuesta de verdad construir un valor propio cuando nadie está dispuesto a regalártelo.
              </p>
              <p>
                Por eso acompaño hoy a quien está en ese mismo punto del camino. No desde un manual ni desde una teoría aprendida en un máster, sino desde haber estado ahí: desde el despido, desde el fondo, desde la vuelta a empezar sin plan B. Guío, oriento y ayudo desde mi propia experiencia, no desde la distancia de quien nunca ha tenido que reconstruirse.
              </p>
              <p className="italic text-foreground">
                Ese es, en el fondo, todo mi método.
              </p>
            </div>

            <div className="mt-16 border-t border-accent/40 pt-12 text-center">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug mb-8 max-w-2xl mx-auto">
                Si estás en un punto de tu carrera o de tu negocio en el que sientes que otros llevan demasiado tiempo decidiendo tu valor por ti, es muy probable que esta historia te suene más de lo que esperabas al empezar a leerla.
              </p>
              <p className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight mb-3">
                Tu valor no se improvisa.
              </p>
              <p className="font-serif text-4xl md:text-5xl italic text-accent leading-tight mb-10">
                Se decide.
              </p>
              <p className="font-serif text-lg text-muted-foreground mb-2">
                Y si has llegado hasta aquí, puede que ya sepas con quién quieres hablar.
              </p>
              <p className="font-serif text-lg text-foreground">
                Soy Sandra. Cada <span className="text-accent">28 de junio</span> cumplo un año más, y ahora mismo, mientras publico esta página, tengo <span className="text-accent">45</span>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url(${logoWatermark})`,
              backgroundSize: "80px auto",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <PhotoPlaceholder
                  label="Retrato de cierre"
                  hint="Sonrisa natural, luz cálida. Contraste con la apertura seria."
                  aspect="aspect-[4/5]"
                />
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent mb-5">
                  Hablemos
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
                  Si mi historia te ha resonado, la tuya también me interesa.
                </h2>
                <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8">
                  Cuéntame en qué punto estás. Miramos juntas si tiene sentido trabajar contigo desde marca personal, estrategia o inteligencia artificial aplicada a tu negocio.
                </p>
                <a
                  href="/#servicios"
                  className="inline-flex items-center gap-3 btn-gold-gradient px-8 py-4 font-semibold text-[12px] uppercase tracking-[0.18em]"
                >
                  Ver cómo trabajamos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreMi;
