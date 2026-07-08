import { UserRound, Compass, PenTool, Megaphone, Linkedin, Award } from "lucide-react";
import PillarLayout, { PillarSection, PillarCards, PillarFAQ } from "@/components/PillarLayout";

const pillars = [
  { icon: Compass, title: "Posicionamiento", description: "Un ángulo defendible: qué mirada aportas al mercado y qué la hace tuya." },
  { icon: UserRound, title: "Identidad", description: "Quién eres, qué sabes, qué defiendes. Sin personaje, sin postureo." },
  { icon: PenTool, title: "Voz", description: "Un tono reconocible que sostenga tu criterio en cada canal y cada formato." },
  { icon: Megaphone, title: "Presencia estratégica", description: "Dónde tienes que estar y por qué. No en todas partes: donde importa." },
  { icon: Linkedin, title: "LinkedIn como activo", description: "El canal principal para posicionar autoridad B2B con contenido y relaciones." },
  { icon: Award, title: "Autoridad sostenida", description: "Construir reputación no es publicar más; es publicar mejor durante más tiempo." },
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
  <PillarLayout
    seoTitle="Marca personal estratégica — Sandra Tello"
    seoDescription="Cómo construir una marca personal con autoridad real: posicionamiento, voz, LinkedIn y contenido. Método propio de Sandra Tello."
    path="/marca-personal-estrategica"
    jsonLd={jsonLd}
    eyebrow="Pilar · Marca personal"
    title={
      <>
        Marca personal <span className="text-[#C5A55A]">estratégica</span>.
        <br />
        La que sostiene tu criterio.
      </>
    }
    intro={
      <>
        Marca personal no es un logo bonito ni un carrusel más de LinkedIn. Es
        la decisión de dejar de esperar que un tercero valide tu trabajo y
        empezar a construir, con criterio y método, la autoridad que ya tienes
        pero que no se ve. Esto es lo que significa en la práctica.
      </>
    }
  >
    <PillarSection eyebrow="El punto de partida" title="Tu valor no se improvisa. Se decide.">
      <p>La mayor parte de los profesionales con años de experiencia tienen un problema silencioso: hacen un trabajo excelente que casi nadie ve. Dependen de que alguien —un cliente, un jefe, un contacto— les dé la oportunidad. Y cuando esa oportunidad no llega, se preguntan qué están haciendo mal.</p>
      <p>La respuesta suele ser incómoda: no están haciendo nada mal. Simplemente, no están posicionados. Nadie —ni los buenos clientes, ni los buenos proyectos, ni los medios— puede elegirte si no sabe que existes ni por qué deberías importarle.</p>
      <p>Construir una marca personal estratégica es tomar la decisión adulta de dejar de esperar. De convertir tu criterio en un activo público que abra puertas por sí mismo, en lugar de vivir a merced del canal comercial de turno.</p>
    </PillarSection>

    <PillarCards items={pillars} />

    <PillarSection eyebrow="Método" title="Cómo lo construimos, paso a paso.">
      <p><strong className="text-primary">1. Auditoría de partida.</strong> Qué percepción hay hoy sobre ti, qué señales estás dando (o no dando) en cada canal, qué está funcionando y qué te está restando.</p>
      <p><strong className="text-primary">2. Posicionamiento.</strong> Definimos el ángulo defendible: la intersección entre lo que sabes, lo que te importa y lo que tu mercado necesita. No una promesa; un territorio.</p>
      <p><strong className="text-primary">3. Voz y narrativa.</strong> Un tono, tres o cuatro mensajes clave y una historia que ordene tu recorrido. Es lo que hace que suenes a ti en cualquier formato.</p>
      <p><strong className="text-primary">4. Plan editorial.</strong> Qué publicar, dónde y con qué frecuencia. LinkedIn como eje si tu negocio es B2B; blog, newsletter o pódcast como refuerzo según tu caso.</p>
      <p><strong className="text-primary">5. Relaciones estratégicas.</strong> Marca personal no es solo publicar. Es también con quién hablas, a quién te acercas y qué conversaciones sostienes en privado.</p>
      <p><strong className="text-primary">6. Medición honesta.</strong> Oportunidades reales, calidad de los mensajes que recibes, invitaciones a mesas donde antes no estabas. No likes.</p>
    </PillarSection>

    <PillarSection variant="cream" eyebrow="Errores frecuentes" title="Lo que suele salir mal (y por qué).">
      <p><strong className="text-primary">Confundir volumen con autoridad.</strong> Publicar tres veces al día sin criterio no construye marca; construye ruido. Es preferible menos y mejor.</p>
      <p><strong className="text-primary">Copiar la voz de otro.</strong> Los referentes se estudian, no se imitan. Si suenas como diez personas más, no eres una marca; eres un eco.</p>
      <p><strong className="text-primary">Empezar por el diseño.</strong> Un logo bonito sobre un mensaje flojo sigue siendo un mensaje flojo. Primero el criterio, después la estética.</p>
      <p><strong className="text-primary">Delegarlo todo a la IA.</strong> Puedes delegar borradores, no puedes delegar mirada. Si tu marca la escribe entera un modelo, deja de ser tuya.</p>
    </PillarSection>

    <PillarFAQ items={faqs} />
  </PillarLayout>
);

export default MarcaPersonal;
