const SiteFooter = () => (
  <footer className="flex items-center justify-between flex-wrap gap-4 px-5 md:px-10 py-8" style={{ background: "#111" }}>
    <div className="font-display text-2xl text-primary tracking-[2px]">САҚТАН</div>
    <div className="flex gap-5">
      {["Мәселе", "Схемалар", "Ойын", "Ресурстар"].map((l) => (
        <a key={l} href={`#${l === "Мәселе" ? "problem" : l === "Схемалар" ? "schemes" : l === "Ойын" ? "game" : "resources"}`} className="text-[13px] transition-colors hover:text-background" style={{ color: "#666" }}>
          {l}
        </a>
      ))}
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xs" style={{ color: "#555" }}>Алаяқтыққа тап болдыңыз ба?</span>
      <span className="text-base font-extrabold" style={{ color: "white" }}>102</span>
    </div>
  </footer>
);

export default SiteFooter;
