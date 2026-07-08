import { Building2, GraduationCap, Briefcase, UserRound, Linkedin, Target } from "lucide-react";
import PillarLayout, { PillarSection, PillarCards, PillarFAQ } from "@/components/PillarLayout";

const programs = [
  { icon: Building2, title: "Formación in-company en IA", description: "Programas a medida para equipos que integran IA con criterio. Presencial o remoto." },
  { icon: Briefcase, title: "Workshops intensivos", description: "Sesiones de alto impacto sobre un proceso concreto: contenido, atención al cliente, propuestas, análisis." },
  { icon: GraduationCap, title: "Programas para profesionales", description: "Formación práctica para profesionales que quieren aprender IA desde cero y aplicarla con criterio." },
  { icon: UserRound, title: "Mentoría de marca personal", description: "Acompañamiento 1 a 1 para posicionarte con autoridad, dentro y fuera de LinkedIn." },
  { icon: Linkedin, title: "LinkedIn con estrategia", description: "Programa práctico para convertir tu perfil en un activo real de negocio." },
  { icon: Target, title: "Estrategia de contenido", description: "Diseño de un sistema de contenido coherente, sostenible y con voz propia." },
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
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["Onsite", "Online"],
    location: { "@type": "Country", name: "ES" },
  },
};

const Formacion = () => (
  <PillarLayout
    seoTitle="Formación en IA y marca personal — Sandra Tello"
    seoDescription="Formación in-company, workshops y mentorías 1 a 1 en IA aplicada, marca personal, LinkedIn y estrategia de contenido. Programas prácticos por Sandra Tello."
    path="/formacion"
    jsonLd={jsonLd}
    eyebrow="Formación"
    title={
      <>
        Formación práctica en IA, <span className="text-[#C5A55A]">marca personal</span> y estrategia.
      </>
    }
    intro={
      <>
        Formaciones diseñadas para personas y equipos que quieren aprender IA y
        posicionamiento con criterio real, no con plantillas exportadas. Cada
        programa se adapta a tu negocio, tu sector y tu punto de partida.
      </>
    }
  >
    <PillarCards items={programs} />

    <PillarSection eyebrow="Cómo trabajo la formación" title="Aplicada, medida y con seguimiento.">
      <p><strong className="text-primary">Aplicada.</strong> Nunca teoría suelta. Todos los ejercicios se hacen sobre casos reales del equipo o del profesional. Lo que aprendes esta semana se usa la siguiente.</p>
      <p><strong className="text-primary">Medida.</strong> Cada programa arranca con un diagnóstico de dónde se va el tiempo hoy, y termina midiendo cuánto se ha recuperado. Sin métricas no hay formación seria.</p>
      <p><strong className="text-primary">Con seguimiento.</strong> Todos los programas in-company incluyen soporte posterior. La adopción real de IA no se resuelve en un curso; se resuelve cuando el equipo la usa sin necesitar que estés delante.</p>
      <p><strong className="text-primary">A tu sector.</strong> He trabajado con equipos en industrial, transporte, turismo y educativo. Los ejemplos, los casos y los ejercicios se adaptan a tu contexto.</p>
    </PillarSection>

    <PillarSection variant="cream" eyebrow="Para quién" title="Con quién trabajo en formación.">
      <p><strong className="text-primary">Empresas medianas</strong> que necesitan integrar IA de forma estructural en varios departamentos.</p>
      <p><strong className="text-primary">Equipos de marketing y comunicación</strong> que quieren producir mejor sin bajar el estándar.</p>
      <p><strong className="text-primary">Profesionales liberales y consultores</strong> que quieren aprender IA aplicada a su día a día real.</p>
      <p><strong className="text-primary">Directivos</strong> que necesitan entender qué está pasando antes de aprobar presupuestos o roadmaps.</p>
    </PillarSection>

    <PillarFAQ items={faqs} />
  </PillarLayout>
);

export default Formacion;
