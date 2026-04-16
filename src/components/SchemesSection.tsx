import { useState } from "react";
import scamHacker from "@/assets/scam-hacker.jpg";

const schemes = [
  { num: "01", title: "«Банк қызметкері»", target: "Мақсат: барлық жас топтары", desc: "Алаяқ банк атынан қоңырау шалып, шотыңыз бұғатталды немесе күдікті операция бар деп хабарлайды. SMS-код пен карта деректерін сұрайды.\n\nБелгісі: ешбір банк телефон арқылы PIN-код, CVV немесе SMS-кодты ЕШҚАШАН сұрамайды." },
  { num: "02", title: "«Жедел көмек»", target: "Мақсат: 60+ жастағылар", desc: "«Балаңыз/немереңіз жол апатына ұшырады, ақша керек» деп хабарлайды. 2023 жылы ҚР ІІМ деректері бойынша 4 785 зейнеткер осы схема арқылы алданған.\n\nБелгісі: асығыстық пен «ешкімге айтпа» деген сөз — бұл 100% алаяқтық." },
  { num: "03", title: "Жалған онлайн-дүкен", target: "Мақсат: 25–45 жас", desc: "2024 жылы тіркелген барлық интернет-алаяқтықтың 24,5%-ы — тауарды алдын ала төлеп, оны ала алмаған жағдайлар. OLX, Kaspi-дегі «арзан» ұсыныстар көбіне осындай.\n\nБелгісі: нарықтан 2 есе арзан баға және тек тікелей аударым арқылы төлем." },
  { num: "04", title: "Жалған инвестиция", target: "Мақсат: орта жас, бизнесмендер", desc: "«Айына 30–50% пайда» уәдесімен ақша жинайды. 2024 жылы 2 000-нан астам адам инвестициялық схемаға алданған.\n\nБелгісі: тексерілмеген компания, кепілдендірілген пайда және шұғылдық." },
  { num: "05", title: "Фишинг SMS / сілтеме", target: "Мақсат: барлық қолданушы", desc: "Мемлекет, банк немесе танымал компания атынан жалған сілтеме келеді. Басқан сәтте жеке деректер мен карта мәліметтері ұрланады. 2024 жылы 2 600-ден астам фишинг ісі тіркелген.\n\nБелгісі: сілтемедегі домен ресми сайтқа сәйкес келмейді." },
];

const sources = [
  { num: 4, text: "ҚПСжАЕ Бас прокуратурасы", link: "https://finprom.kz/ru/article/usherb-ot-sluchaev-internet-moshennichestva-v-kazahstane-vyros-do-7-milliardov-tenge", linkText: "2024 жылғы схемалар бойынша статистика" },
  { num: 5, text: "ҚР ІІМ, 2024", link: "https://special.zakon.kz/cyber_fraud", linkText: "4 785 зейнеткер алданған" },
  { num: 6, text: "BAQ.KZ, 2024", link: "https://baq.kz/qazaqstanda-internettegi-alayaqtyq-deregi-4-ke-kobeydi-336236/", linkText: "2 614 фишинг ісі" },
];

const SchemesSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="schemes" className="section-container bg-background relative overflow-hidden">
      {/* Background image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden lg:block">
        <img src={scamHacker} alt="" className="w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-label">Қалай алдайды?</div>
        <h2 className="section-title">5 НЕГІЗГІ <span className="text-primary">СХЕМА</span></h2>
        <p className="section-sub">Карточкаға басыңыз — схеманың қалай жұмыс істейтінін көресіз.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schemes.map((s, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={s.num}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className={`cyber-card cursor-pointer ${isOpen ? "border-primary glow-border" : ""}`}
              >
                <div className="h-px red-gradient" />
                <div className="p-7">
                  <div className="font-mono text-[11px] text-cyan uppercase tracking-wider mb-2">Схема · {s.num}</div>
                  <div className="font-display text-5xl text-primary/20 leading-none">{s.num}</div>
                  <h3 className="font-display text-2xl text-foreground mt-2 mb-1 tracking-wide">{s.title}</h3>
                  <div className="text-xs text-muted-foreground font-mono">{s.target}</div>
                </div>
                {isOpen && (
                  <div className="px-7 pb-7 text-[13px] text-ink2 leading-relaxed border-t border-border pt-4">
                    {s.desc.split("\n\n").map((p, j) => (
                      <p key={j} className={j > 0 ? "mt-3 font-semibold text-primary" : ""}>{p}</p>
                    ))}
                  </div>
                )}
                <div
                  className={`absolute top-5 right-5 w-7 h-7 rounded border flex items-center justify-center text-base transition-all font-mono ${
                    isOpen ? "bg-primary text-primary-foreground border-primary rotate-45" : "border-border text-muted-foreground"
                  }`}
                >
                  +
                </div>
              </div>
            );
          })}
        </div>

        <div className="cyber-card p-6 mt-10">
          <h4 className="font-mono text-[11px] font-bold text-cyan mb-3.5 uppercase tracking-wider">Деректер көздері</h4>
          <div className="flex flex-col gap-2">
            {sources.map((s) => (
              <div key={s.num} className="text-xs text-ink2 flex gap-2 font-mono">
                <span className="text-primary font-bold min-w-[24px]">[{s.num}]</span>
                <span>{s.text} — <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{s.linkText}</a></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;
