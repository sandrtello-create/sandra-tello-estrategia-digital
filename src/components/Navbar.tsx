import { useState } from "react";
import { Menu, X } from "lucide-react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm border-b border-border/60">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <a href="#inicio" className="flex items-center gap-5">
            <img src={logo} alt="Sandra Tello" className="h-20 w-auto" />
            <div className="flex flex-col">
              <span className={`font-serif text-[32px] font-bold tracking-wide leading-none uppercase ${scrolled ? "text-primary" : "text-white"}`}>
                Sandra Tello
              </span>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase mt-1.5 gold-gradient-text">
                Consultora estratégica en IA
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/70 hover:text-white"}`}
              >
                {link.label}
              </a>
            ))}
            <button className="btn-gold-gradient rounded-none px-7 py-3 font-semibold uppercase tracking-[0.15em] text-[12px]">
              Trabaja conmigo ›
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
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
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-gold-gradient rounded-none w-fit px-7 py-3 mt-2 font-semibold uppercase tracking-[0.15em] text-[12px]">
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
