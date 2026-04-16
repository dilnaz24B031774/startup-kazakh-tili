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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-[64px] backdrop-blur-xl transition-all border-b ${
        scrolled ? "bg-background/90 border-border" : "bg-background/60 border-transparent"
      }`}
    >
      <a
        href="#"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
        <span className="font-display text-[26px] text-foreground tracking-[3px]">
          САҚ<span className="text-primary neon-text">ТАН</span>
        </span>
        <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline">v.2025</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-1">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[12px] font-mono uppercase tracking-wider text-ink2 px-3 py-1.5 rounded transition-colors hover:bg-primary/10 hover:text-primary"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-foreground text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Меню"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[64px] left-0 right-0 bg-background border-b border-border flex flex-col p-4 gap-1 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono uppercase tracking-wider text-ink2 px-4 py-2.5 rounded hover:bg-primary/10 hover:text-primary transition-colors"
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
