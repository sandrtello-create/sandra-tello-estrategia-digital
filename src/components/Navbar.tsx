import { useState } from "react";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/sandra-tello-logo.png";

type SubLink = { label: string; href: string };
type NavItem = { label: string; href: string; children?: SubLink[] };

const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  {
    label: "Sobre Sandra",
    href: "/sobre-mi",
    children: [
      { label: "Sobre mí (bio)", href: "/sobre-mi" },
      { label: "Mi historia", href: "/mi-historia" },
      { label: "Metodología", href: "/metodologia" },
      { label: "Resultados", href: "/resultados" },
      { label: "Testimonios", href: "/testimonios" },
    ],
  },
  {
    label: "Servicios",
    href: "#servicios",
    children: [
      { label: "Consultoría estratégica con IA", href: "/#servicios" },
      { label: "Posicionamiento de marca personal", href: "/#servicios" },
      { label: "Auditoría de negocio", href: "/servicios/auditoria-de-negocio" },
      { label: "Perfiles con los que trabajo", href: "/perfiles" },
    ],
  },
  {
    label: "Áreas",
    href: "/marketing-con-factor-humano",
    children: [
      { label: "Marketing con factor humano", href: "/marketing-con-factor-humano" },
      { label: "Inteligencia artificial", href: "/inteligencia-artificial-para-profesionales" },
      { label: "Marca personal estratégica", href: "/marca-personal-estrategica" },
    ],
  },
  {
    label: "Formación",
    href: "/formacion",
    children: [
      { label: "Formación en IA", href: "/formacion" },
      { label: "Mentoría de marca personal", href: "/formacion" },
      { label: "LinkedIn con estrategia", href: "/formacion" },
      { label: "Recursos gratuitos", href: "/#formacion" },
    ],
  },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const resolve = (href: string) => {
    if (href.startsWith("#")) return isHome ? href : `/${href}`;
    return href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm border-b border-border/60">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Sandra Tello" className="h-28 w-auto" />
            <div className="flex flex-col">
              <span className="font-serif text-[32px] font-bold tracking-wide leading-none uppercase text-primary">
                Sandra Tello
              </span>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase mt-1.5 gold-gradient-text">
                Estrategia digital, IA, negocio y vida
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const hasChildren = !!item.children?.length;
              return (
                <div key={item.label} className="relative group">
                  <a
                    href={resolve(item.href)}
                    className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors text-foreground/70 hover:text-primary py-2"
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    )}
                  </a>
                  {hasChildren && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="w-64 bg-background border border-border/60 shadow-lg py-2">
                        {item.children!.map((sub) => (
                          <a
                            key={sub.label}
                            href={resolve(sub.href)}
                            className="block px-4 py-2.5 text-[12px] font-medium text-foreground/75 hover:bg-accent/10 hover:text-primary transition-colors tracking-wide"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <a
              href={resolve("#contacto")}
              className="btn-gold-gradient rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Trabaja conmigo"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-border/50 pt-4 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                const open = openMobile === item.label;
                return (
                  <div key={item.label} className="border-b border-border/30">
                    <div className="flex items-center justify-between">
                      <a
                        href={resolve(item.href)}
                        onClick={() => !hasChildren && setIsOpen(false)}
                        className="flex-1 py-3 text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                      {hasChildren && (
                        <button
                          onClick={() => setOpenMobile(open ? null : item.label)}
                          className="p-3 text-foreground/60"
                          aria-label={`Abrir ${item.label}`}
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {hasChildren && open && (
                      <div className="pl-4 pb-3 flex flex-col gap-1">
                        {item.children!.map((sub) => (
                          <a
                            key={sub.label}
                            href={resolve(sub.href)}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-[13px] text-foreground/65 hover:text-primary transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <a
                href={resolve("#contacto")}
                onClick={() => setIsOpen(false)}
                className="btn-gold-gradient rounded-full w-10 h-10 flex items-center justify-center mt-3"
                aria-label="Trabaja conmigo"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
