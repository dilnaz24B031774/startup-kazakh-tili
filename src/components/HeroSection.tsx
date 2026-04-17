const HeroSection = () => (
  <section id="hero" className="min-h-screen pt-[100px] pb-16 px-5 md:px-10 relative overflow-hidden bg-background">
    <div className="hero-diagonal-bg" />

    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 max-w-7xl mx-auto">
      {/* Left */}
      <div>
        <div className="inline-block text-[11px] font-bold tracking-[2px] uppercase text-primary bg-primary-light px-3 py-1.5 rounded mb-5">
          Қазақстан · 2025
        </div>
        <h1 className="font-display text-[clamp(64px,8vw,100px)] leading-[0.95] text-foreground mb-6 tracking-wide">
          АЛАЯҚТЫҚ<br />
          <span className="text-primary">САҒАН</span><br />
          ДА ТИЕ<br />
          АЛАДЫ
        </h1>
        <p className="text-base leading-[1.7] text-ink2 max-w-[440px] mb-9">
          Цифрлық алаяқтық — ең жылдам өсіп жатқан қылмыс түрі.
          Өзіңді және жақындарыңды қорғауды үйрен.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#game"
            className="px-7 py-3.5 bg-primary text-primary-foreground rounded font-bold text-sm hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
          >
            Тексеріп көр
          </a>
          <a
            href="#problem"
            className="px-7 py-3.5 bg-transparent text-foreground border-2 border-foreground rounded font-bold text-sm hover:bg-foreground hover:text-background transition-all"
          >
            Толығырақ
          </a>
        </div>
      </div>

      {/* Right — stats */}
      <div className="flex flex-col gap-4">
        <div className="bg-card border border-border rounded-xl p-6 md:p-7 relative overflow-hidden hover:-translate-y-0.5 transition-transform shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
          <div className="font-display text-[52px] text-primary leading-none">₸140 МЛРД</div>
          <div className="text-[13px] text-muted-foreground font-medium mt-1">
            2023 жылы қазақстандықтар жоғалтқан сома
          </div>
          <div className="text-[11px] text-muted-foreground/70 mt-1.5">Бас прокуратура, 2024</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5 hover:-translate-y-0.5 transition-transform shadow-sm">
            <div className="font-display text-4xl text-foreground leading-none">44 000+</div>
            <div className="text-xs text-muted-foreground font-medium mt-1">Жәбірленуші — тек 2023 жылы</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 hover:-translate-y-0.5 transition-transform shadow-sm">
            <div className="font-display text-4xl text-foreground leading-none">10 ЕСЕГЕ</div>
            <div className="text-xs text-muted-foreground font-medium mt-1">Өсті — соңғы 7 жылда</div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg px-5 py-3.5 text-[13px] font-semibold leading-snug">
          <span className="text-xs opacity-80">Бүгін Қазақстанда тіркелген алаяқтық:</span>
          <span className="font-display text-[32px] block leading-none my-0.5">~80</span>
          <span className="text-[11px] opacity-70 font-normal">шамамен (ресми статистика негізінде)</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
