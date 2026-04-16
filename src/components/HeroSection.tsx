import heroCyber from "@/assets/hero-cyber.jpg";

const HeroSection = () => {

  return (
    <section id="hero" className="min-h-screen pt-[100px] pb-16 px-5 md:px-10 relative overflow-hidden">
      {/* Background image — more visible, less red */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCyber}
          alt="Кибералаяқ компьютер артында"
          className="w-full h-full object-cover opacity-60"
          width={1280}
          height={1280}
        />
        {/* Subtle dark overlay for readability, no red tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        {/* Soft cyan accent glow — replaces heavy red */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 scan-lines opacity-50" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 max-w-7xl mx-auto">
        {/* Left */}
        <div>
          <h1 className="font-display text-[clamp(60px,8vw,104px)] leading-[0.92] text-foreground mb-6 tracking-wide">
            АЛАЯҚТЫҚ
            <br />
            <span className="text-gradient-cyber">Сенің</span>
            <br />
            ЕСІГІҢДІ
            <br />
            Қағуда<span className="text-cyan animate-blink">_</span>
          </h1>
          <p className="text-base leading-relaxed text-ink2 max-w-[460px] mb-9">
            Цифрлық алаяқтық — ең жылдам өсіп жатқан қылмыс түрі.
            Өзіңді және жақындарыңды қорғауды үйрен.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#game"
              className="px-7 py-3.5 bg-foreground text-background rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-cyan hover:text-background transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              ▶ Тексеріп көр
            </a>
            <a
              href="#problem"
              className="px-7 py-3.5 bg-background/40 backdrop-blur-md text-foreground border border-border rounded font-mono text-xs uppercase tracking-wider font-bold hover:border-cyan hover:text-cyan transition-all inline-flex items-center gap-2"
            >
              [ Толығырақ ]
            </a>
          </div>
        </div>

        {/* Right — Stats with glassmorphism */}
        <div className="flex flex-col gap-4">
          <div className="bg-surface/70 backdrop-blur-xl border border-border/60 rounded-lg p-6 hover:-translate-y-1 hover:border-cyan/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
            <div className="font-mono text-[10px] text-cyan uppercase tracking-wider mb-2">Зиян · 2023</div>
            <div className="font-display text-[56px] text-foreground leading-none">₸140 <span className="text-cyan">МЛРД</span></div>
            <div className="text-[13px] text-muted-foreground font-medium mt-2">
              Қазақстандықтар жоғалтқан жалпы сома
            </div>
            <div className="text-[10px] text-muted-foreground/60 mt-1.5 font-mono">Дереккөз: Бас прокуратура, 2024</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface/70 backdrop-blur-xl border border-border/60 rounded-lg p-5 hover:-translate-y-1 hover:border-cyan/40 transition-all">
              <div className="font-mono text-[10px] text-cyan uppercase tracking-wider mb-1">Жәбірленуші</div>
              <div className="font-display text-4xl text-foreground leading-none">44 000+</div>
              <div className="text-xs text-muted-foreground font-medium mt-2">Тек 2023 жылы</div>
            </div>
            <div className="bg-surface/70 backdrop-blur-xl border border-border/60 rounded-lg p-5 hover:-translate-y-1 hover:border-cyan/40 transition-all">
              <div className="font-mono text-[10px] text-cyan uppercase tracking-wider mb-1">Өсу</div>
              <div className="font-display text-4xl text-foreground leading-none">10 ЕСЕ</div>
              <div className="text-xs text-muted-foreground font-medium mt-2">Соңғы 7 жылда</div>
            </div>
          </div>

          <div className="bg-surface/70 backdrop-blur-xl border border-cyan/30 rounded-lg px-5 py-4 text-[13px] font-semibold leading-relaxed relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent pointer-events-none" />
            <span className="text-xs text-ink2 relative">Бүгін Қазақстанда тіркелген алаяқтық:</span>
            <span className="font-display text-[36px] block text-foreground relative">80+</span>
            <span className="text-[10px] text-muted-foreground font-mono relative">шамамен (ресми статистика негізінде)</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Төмен ↓</span>
        <div className="w-1.5 h-1.5 rounded-full bg-cyan" style={{ animation: "scrollPulse 1.5s ease infinite" }} />
      </div>
    </section>
  );
};

export default HeroSection;
