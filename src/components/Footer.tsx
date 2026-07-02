import { Linkedin, Instagram, Youtube, Mail, MessageCircle } from "lucide-react";

const formacionLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Formación en IA", href: "#formacion" },
  { label: "Marca personal y estrategia", href: "#formacion" },
  { label: "Mentoría 1 a 1", href: "#contacto" },
  { label: "Sobre Sandra", href: "#sobre" },
];

const contenidoLinks = [
  { label: "Blog", href: "#blog" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Recursos gratuitos", href: "#formacion" },
  { label: "Perfiles", href: "/perfiles" },
];

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-privacidad" },
  { label: "Política de cookies", href: "/politica-cookies" },
  { label: "Condiciones de contratación", href: "/condiciones" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10 py-14">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand + contact */}
          <div className="md:col-span-4">
            <a href="#inicio" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary-foreground leading-none">
                Sandra Tello
              </span>
              <span className="text-accent text-[10px] font-medium tracking-[0.15em] uppercase mt-1">
                Estrategia · IA · Vida
              </span>
            </a>
            <p className="text-primary-foreground/45 mt-4 text-sm leading-relaxed">
              Consultora estratégica especializada en inteligencia artificial,
              marca personal y marketing. Acompaño a personas y equipos a crear
              la vida y el negocio que aman.
            </p>

            <div className="mt-6 space-y-2">
              <a
                href="#contacto"
                className="flex items-center gap-2 text-sm text-primary-foreground/55 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                Escríbeme
              </a>
              <a
                href="#contacto"
                className="flex items-center gap-2 text-sm text-primary-foreground/55 hover:text-accent transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp directo
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-primary-foreground mb-3 uppercase tracking-[0.15em] text-[11px]">
                Sígueme
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/45 hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formación */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-[0.15em] text-[11px]">
              Formación
            </h4>
            <ul className="space-y-2">
              {formacionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/55 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contenido */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-[0.15em] text-[11px]">
              Contenido
            </h4>
            <ul className="space-y-2">
              {contenidoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/55 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-[0.15em] text-[11px]">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/55 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-primary-foreground/35">
            © {new Date().getFullYear()} Sandra Tello · Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Inteligencia Humana Estratégica™ es una marca de Sandra Tello.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
