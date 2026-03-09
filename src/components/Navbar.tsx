import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/sandra-tello-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Sandra", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Formación", href: "#formacion" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const getHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                className="text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors text-foreground/70 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/perfiles"
              className="text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors text-foreground/70 hover:text-primary"
            >
              Perfiles
            </Link>
            <a
              href={getHref("#contacto")}
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
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/perfiles"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
              >
                Perfiles
              </Link>
              <button className="btn-gold-gradient rounded-full w-fit px-7 py-3 mt-2 font-semibold uppercase tracking-[0.15em] text-[12px]">
                Trabaja conmigo ›
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
