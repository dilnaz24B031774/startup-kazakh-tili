const SiteFooter = () => (
  <footer className="bg-[#111] py-8 px-5 md:px-10">
    <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
      <div className="font-display text-2xl text-primary tracking-[2px]">САҚТАН</div>
      <div className="flex gap-5 flex-wrap">
        {[
          { label: "Мәселе", href: "#problem" },
          { label: "Схемалар", href: "#schemes" },
          { label: "Ойын", href: "#game" },
          { label: "Ресурстар", href: "#resources" },
        ].map((l) => (
          <a key={l.label} href={l.href} className="text-[13px] text-[#666] hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-[#555]">Алаяқтыққа тап болдыңыз ба?</span>
        <span className="font-display text-xl font-extrabold text-primary">102</span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
