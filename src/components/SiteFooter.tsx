const SiteFooter = () => (
  <footer className="border-t border-border bg-background py-8 px-5 md:px-10">
    <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
        <div className="font-display text-2xl text-foreground tracking-[2px]">
          САҚ<span className="text-primary">ТАН</span>
        </div>
        
      </div>
      <div className="flex gap-4 flex-wrap">
        {[
          { label: "Мәселе", href: "#problem" },
          { label: "Схемалар", href: "#schemes" },
          { label: "Ойын", href: "#game" },
          { label: "Ресурстар", href: "#resources" },
        ].map((l) => (
          <a key={l.label} href={l.href} className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3 border border-primary/40 rounded px-3 py-1.5 bg-primary/5">
        <span className="text-xs text-ink2">Алаяқтыққа тап болдыңыз ба?</span>
        <span className="font-display text-xl font-extrabold text-primary neon-text">102</span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
