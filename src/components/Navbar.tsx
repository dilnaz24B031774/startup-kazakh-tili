import { useState, useEffect } from "react";

const links = [
  { href: "#problem", label: "Мәселе" },
  { href: "#schemes", label: "Схемалар" },
  { href: "#warnings", label: "Белгілері" },
  { href: "#future", label: "Болашақ" },
  { href: "#game", label: "Ойын" },
  { href: "#resources", label: "Ресурстар" },
  { href: "#team", label: "Топ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-[60px] backdrop-blur-xl transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ background: "rgba(255,255,255,0.96)" }}
    >
      <a
        href="#"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-display text-[28px] text-primary tracking-[2px] cursor-pointer"
      >
        САҚТАН
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[13px] font-semibold text-ink2 px-3.5 py-1.5 rounded-full transition-colors hover:bg-primary-light hover:text-primary"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-ink text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-background border-b border-border flex flex-col p-4 gap-1 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-ink2 px-4 py-2.5 rounded-lg hover:bg-primary-light hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
