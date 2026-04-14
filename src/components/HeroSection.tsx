import { useEffect, useState } from "react";

const CASES_PER_SECOND = 44800 / 365 / 24 / 3600;

const HeroSection = () => {
  const [counter, setCounter] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    let raf: number;
    const update = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      setCounter(Math.floor(elapsed * CASES_PER_SECOND));
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [startTime]);

  return (
    <section id="hero" className="min-h-screen pt-[100px] pb-16 px-5 md:px-10 relative overflow-hidden">
      {/* Background shape */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full bg-surface z-0 hidden md:block"
        style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 max-w-7xl mx-auto">
        {/* Left */}
        <div>
          <div className="inline-block text-[11px] font-bold tracking-[2px] uppercase text-primary bg-primary-light px-3 py-1 rounded mb-5">
            Қазақстан · 2025
          </div>
          <h1 className="font-display text-[clamp(64px,8vw,100px)] leading-[0.95] text-foreground mb-6 tracking-wide">
            АЛАЯҚТЫҚ
            <br />
            <span className="text-primary">САҒАН</span>
            <br />
            ДА ТИЕ
            <br />
            АЛАДЫ
          </h1>
          <p className="text-base leading-relaxed text-ink2 max-w-[440px] mb-9">
            Цифрлық алаяқтық — ең жылдам өсіп жатқан қылмыс түрі. Өзіңді және жақындарыңды қорғауды үйрен.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#game"
              className="px-7 py-3.5 bg-primary text-primary-foreground rounded font-bold text-sm hover:bg-primary-dark transition-all hover:-translate-y-0.5 inline-block"
            >
              Тексеріп көр
            </a>
            <a
              href="#problem"
              className="px-7 py-3.5 bg-transparent text-foreground border-2 border-foreground rounded font-bold text-sm hover:bg-foreground hover:text-background transition-all inline-block"
            >
              Толығырақ
            </a>
          </div>
        </div>

        {/* Right — Stats */}
        <div className="flex flex-col gap-4">
          <div className="bg-background border border-border rounded-xl p-6 relative overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            <div className="font-display text-[52px] text-primary leading-none">₸140 МЛД</div>
            <div className="text-[13px] text-muted-foreground font-medium mt-1">
              2023 жылы қазақстандықтар жоғалтқан сома
            </div>
            <div className="text-[11px] text-muted-foreground/60 mt-1.5">Бас прокуратура, 2024</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background border border-border rounded-xl p-5 hover:-translate-y-1 transition-transform">
              <div className="font-display text-4xl text-foreground leading-none">44 000+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Жәбірленуші — тек 2023 жылы</div>
            </div>
            <div className="bg-background border border-border rounded-xl p-5 hover:-translate-y-1 transition-transform">
              <div className="font-display text-4xl text-foreground leading-none">10 ЕСЕГЕ</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Өсті — соңғы 7 жылда</div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg px-5 py-3.5 text-[13px] font-semibold leading-relaxed">
            <span className="text-xs opacity-80">Бүгін Қазақстанда тіркелген алаяқтық:</span>
            <span className="font-display text-[32px] block">{counter}</span>
            <span className="text-[11px] opacity-70">шамамен (ресми статистика негізінде)</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 hidden md:flex">
        <span className="text-[11px] text-muted-foreground font-semibold tracking-wider uppercase">Төмен</span>
        <div className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: "scrollPulse 1.5s ease infinite" }} />
      </div>
    </section>
  );
};

export default HeroSection;
