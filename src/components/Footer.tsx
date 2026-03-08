import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Sandra", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Formación", href: "#formacion" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10 py-14">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
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
              marketing y posicionamiento de marca personal.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-[0.15em] text-[11px]">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-primary-foreground/45 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-[0.15em] text-[11px]">Sígueme</h4>
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

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/35">
            © {new Date().getFullYear()} Sandra Tello. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
