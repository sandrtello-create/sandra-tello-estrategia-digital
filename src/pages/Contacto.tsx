import { useState } from "react";
import { Mail, Phone, Calendar, ArrowRight, Send, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const servicios = [
  "Consultoría estratégica 1 a 1",
  "Formación in-company en IA",
  "Programa de marca personal en LinkedIn",
  "Employee advocacy para equipos",
  "Auditoría de negocio",
  "Otro / aún no lo tengo claro",
];

const presupuestos = [
  "Menos de 3.000 €",
  "3.000 – 8.000 €",
  "8.000 – 20.000 €",
  "Más de 20.000 €",
  "Aún no lo sé",
];

const Contacto = () => {
  const [servicio, setServicio] = useState(servicios[0]);
  const [presupuesto, setPresupuesto] = useState(presupuestos[1]);

  return (
    <div className="min-h-screen bg-[hsl(40,18%,94%)]">
      <SEO
        title="Contacto — Sandra Tello | Consultora en IA y marca personal"
        description="Escríbeme para consultoría estratégica, formación en inteligencia artificial para empresas o programas de marca personal en LinkedIn. Respuesta en 48h."
        path="/contacto"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contacto Sandra Tello",
          description:
            "Formulario de contacto para consultoría estratégica, formación en IA y marca personal.",
        }}
      />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #C5A55A 0%, transparent 45%), radial-gradient(circle at 80% 70%, #1B2A4A 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-[#C5A55A] font-semibold text-[11px] uppercase tracking-[0.3em] mb-6">
                Contacto
              </p>
              <h1 className="font-serif text-[42px] md:text-[62px] lg:text-[78px] leading-[0.98] text-[#1B2A4A] mb-8 tracking-tight">
                Hablemos de lo que quieres <em className="italic text-[#C5A55A]">construir</em>.
              </h1>
              <p className="text-[#1B2A4A]/75 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Consultoría 1 a 1, formación in-company en inteligencia artificial o
                acompañamiento en marca personal en LinkedIn. Cuéntame tu contexto y te
                respondo personalmente en 48 horas.
              </p>
            </div>
            <div className="lg:col-span-4 border-l-2 border-[#C5A55A] pl-6">
              <p className="font-serif italic text-[#1B2A4A] text-xl leading-snug mb-3">
                "Lo relacional prevalece a lo transaccional."
              </p>
              <p className="text-[#1B2A4A]/60 text-sm">
                Antes de proponer nada, escucho. Cada conversación empieza así.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO + INFO */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* FORM */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-8 bg-white border border-[#1B2A4A]/10 p-8 md:p-12 relative"
            >
              <div className="absolute top-0 left-0 w-24 h-1 bg-[#C5A55A]" />
              <h2 className="font-serif text-[28px] md:text-[34px] text-[#1B2A4A] mb-2">
                Cuéntame tu proyecto
              </h2>
              <p className="text-[#1B2A4A]/60 text-sm mb-10">
                Todos los campos con * son necesarios.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A] mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-[hsl(40,18%,97%)] border border-[#1B2A4A]/15 focus:border-[#C5A55A] focus:outline-none text-[#1B2A4A]"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-[hsl(40,18%,97%)] border border-[#1B2A4A]/15 focus:border-[#C5A55A] focus:outline-none text-[#1B2A4A]"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A] mb-2">
                    Empresa / Rol
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[hsl(40,18%,97%)] border border-[#1B2A4A]/15 focus:border-[#C5A55A] focus:outline-none text-[#1B2A4A]"
                    placeholder="Empresa o cargo actual"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-[hsl(40,18%,97%)] border border-[#1B2A4A]/15 focus:border-[#C5A55A] focus:outline-none text-[#1B2A4A]"
                    placeholder="+34 ___ ___ ___"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A] mb-3">
                  ¿Qué te interesa? *
                </label>
                <div className="grid md:grid-cols-2 gap-2">
                  {servicios.map((s) => (
                    <label
                      key={s}
                      className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-colors ${
                        servicio === s
                          ? "border-[#C5A55A] bg-[#C5A55A]/10"
                          : "border-[#1B2A4A]/15 hover:border-[#1B2A4A]/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="servicio"
                        value={s}
                        checked={servicio === s}
                        onChange={() => setServicio(s)}
                        className="accent-[#C5A55A]"
                      />
                      <span className="text-sm text-[#1B2A4A]">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A] mb-3">
                  Presupuesto orientativo
                </label>
                <div className="flex flex-wrap gap-2">
                  {presupuestos.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPresupuesto(p)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        presupuesto === p
                          ? "bg-[#1B2A4A] text-white border-[#1B2A4A]"
                          : "border-[#1B2A4A]/20 text-[#1B2A4A]/70 hover:border-[#1B2A4A]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A] mb-2">
                  Cuéntame tu contexto *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[hsl(40,18%,97%)] border border-[#1B2A4A]/15 focus:border-[#C5A55A] focus:outline-none text-[#1B2A4A] resize-none"
                  placeholder="En qué momento estás, qué has probado, qué quieres conseguir…"
                />
              </div>

              <label className="flex items-start gap-3 mb-8 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-[#C5A55A]" />
                <span className="text-xs text-[#1B2A4A]/70 leading-relaxed">
                  Acepto la política de privacidad y el tratamiento de mis datos para
                  responder a esta consulta.
                </span>
              </label>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#1B2A4A] text-white px-10 py-5 text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#C5A55A] transition-colors"
              >
                <Send className="h-4 w-4" />
                Enviar mensaje
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-[11px] text-[#1B2A4A]/50 mt-4">
                Te respondo personalmente en un plazo máximo de 48h laborables.
              </p>
            </form>

            {/* SIDEBAR INFO */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-[#1B2A4A] text-white p-8 relative">
                <div className="absolute top-0 right-0 w-16 h-1 bg-[#C5A55A]" />
                <h3 className="font-serif text-2xl mb-6">Otras formas de contacto</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#C5A55A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-1">
                        Email
                      </p>
                      <a href="mailto:hola@sandratello.com" className="text-white hover:text-[#C5A55A]">
                        hola@sandratello.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#C5A55A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-1">
                        Agenda 30 min
                      </p>
                      <a href="#" className="text-white hover:text-[#C5A55A]">
                        Reserva una sesión exploratoria
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#C5A55A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-1">
                        Horario
                      </p>
                      <p className="text-white/80 text-sm">Lun–Vie · 9:30 a 18:00 (CET)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#C5A55A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-1">
                        Base
                      </p>
                      <p className="text-white/80 text-sm">Madrid · Trabajo con clientes en toda España y LATAM</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-[#C5A55A]/40 p-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A55A] font-semibold mb-3">
                  Lo que puedes esperar
                </p>
                <ul className="space-y-3 text-[#1B2A4A] text-sm">
                  <li className="flex gap-2"><span className="text-[#C5A55A]">01.</span> Respuesta personal en 48h.</li>
                  <li className="flex gap-2"><span className="text-[#C5A55A]">02.</span> Llamada exploratoria sin coste.</li>
                  <li className="flex gap-2"><span className="text-[#C5A55A]">03.</span> Propuesta a medida en 5 días.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
