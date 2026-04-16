import { useEffect, useState } from "react";
import heroCyber from "@/assets/hero-cyber.jpg";

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
    <section id="hero" className="min-h-screen pt-[100px] pb-16 px-5 md:px-10 relative overflow-hidden cyber-grid-fade">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCyber}
          alt="Кибералаяқ компьютер артында"
          className="w-full h-full object-cover opacity-25"
          width={1280}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 scan-lines" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 max-w-7xl mx-auto">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[2px] uppercase text-primary border border-primary/40 bg-primary/10 px-3 py-1.5 rounded mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            SYSTEM // QAZAQSTAN · 2025
          </div>
          <h1 className="font-display text-[clamp(60px,8vw,104px)] leading-[0.92] text-foreground mb-6 tracking-wide">
            АЛАЯҚТЫҚ
            <br />
            <span className="text-primary neon-text">САҒАН</span>
            <br />
            ДА ТИЕ
            <br />
            АЛАДЫ<span className="text-primary animate-blink">_</span>
          </h1>
          <p className="text-base leading-relaxed text-ink2 max-w-[460px] mb-9">
            Цифрлық алаяқтық — қазіргі заманның ең жылдам өсіп жатқан қылмыс түрі.
            Өзіңді және жақындарыңды қорғауды үйрен.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#game"
              className="px-7 py-3.5 bg-primary text-primary-foreground rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-primary-glow transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 glow-border"
            >
              ▶ Тексеріп көр
            </a>
            <a
              href="#problem"
              className="px-7 py-3.5 bg-transparent text-foreground border border-border rounded font-mono text-xs uppercase tracking-wider font-bold hover:border-cyan hover:text-cyan transition-all inline-flex items-center gap-2"
            >
              [ Толығырақ ]
            </a>
          </div>
        </div>

        {/* Right — Stats */}
        <div className="flex flex-col gap-4">
          <div className="cyber-card corner-brackets p-6 hover:-translate-y-1 transition-transform">
            <div className="font-mono text-[10px] text-cyan uppercase tracking-wider mb-2">// зиян · 2023</div>
            <div className="font-display text-[56px] text-primary leading-none neon-text">₸140 МЛРД</div>
            <div className="text-[13px] text-muted-foreground font-medium mt-2">
              Қазақстандықтар жоғалтқан жалпы сома
            </div>
            <div className="text-[10px] text-muted-foreground/60 mt-1.5 font-mono">[ src: Бас прокуратура, 2024 ]</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="cyber-card p-5 hover:-translate-y-1 transition-transform">
              <div className="font-mono text-[10px] text-cyan uppercase tracking-wider mb-1">victims</div>
              <div className="font-display text-4xl text-foreground leading-none">44 000+</div>
              <div className="text-xs text-muted-foreground font-medium mt-2">Жәбірленуші — тек 2023 жылы</div>
            </div>
            <div className="cyber-card p-5 hover:-translate-y-1 transition-transform">
              <div className="font-mono text-[10px] text-cyan uppercase tracking-wider mb-1">growth</div>
              <div className="font-display text-4xl text-foreground leading-none">10 ЕСЕ</div>
              <div className="text-xs text-muted-foreground font-medium mt-2">Соңғы 7 жылдағы өсу</div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/40 rounded-lg px-5 py-4 text-[13px] font-semibold leading-relaxed glow-border">
            <div className="font-mono text-[10px] text-primary uppercase tracking-wider mb-1">// LIVE COUNTER</div>
            <span className="text-xs text-ink2">Бүгін Қазақстанда тіркелген алаяқтық:</span>
            <span className="font-display text-[36px] block text-primary neon-text">{counter}</span>
            <span className="text-[10px] text-muted-foreground font-mono">[ ресми статистика негізіндегі шамалас есеп ]</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">scroll ↓</span>
        <div className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: "scrollPulse 1.5s ease infinite" }} />
      </div>
    </section>
  );
};

export default HeroSection;
