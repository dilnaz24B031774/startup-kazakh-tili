import { useState } from "react";

const schemes = [
  { num: "01", title: "«Банк қызметкері»", target: "Мақсат: барлық жас топтары", desc: "Алаяқ банк атынан қоңырау шалып, шот бұғатталды немесе күдікті операция бар деп хабарлайды. SMS-код немесе карта деректерін сұрайды.\n\nБелгісі: Ешбір банк телефон арқылы PIN, CVV немесе SMS-кодты ЕШҚАШАН сұрамайды." },
  { num: "02", title: "«Жедел көмек»", target: "Мақсат: 60+ жастағылар", desc: "«Балаңыз/немереңіз ДТП жасады, ақша керек» деп хабарлайды. 2023 жылы ҚР МВД бойынша 4785 зейнеткер осы схема арқылы алданған.\n\nБелгісі: Асығыстық, «ешкімге айтпа» деген сөз — бұл 100% алаяқтық." },
  { num: "03", title: "Жалған онлайн дүкен", target: "Мақсат: 25–45 жас", desc: "2024 жылы тіркелген барлық интернет-алаяқтықтың 24,5%-ы — тауарды алдын ала төлеп, алмаған жағдайлар. Olx, Kaspi-дегі «арзан» ұсыныстар жиі осындай.\n\nБелгісі: Нарықтан 2 есе арзан баға + тек аударым арқылы төлем." },
  { num: "04", title: "Жалған инвестиция", target: "Мақсат: орта жас, бизнесмендер", desc: "«Айына 30–50% пайда» уәдесімен ақша аударады. 2024 жылы 2000-нан астам адам инвестиция схемасына алданды.\n\nБелгісі: Тексерілмеген компания, кепілдендірілген пайда, шұғылдық." },
  { num: "05", title: "Фишинг SMS/сілтеме", target: "Мақсат: барлығы", desc: "Мемлекет, банк немесе танымал компания атынан жалған сілтеме келеді. Басқан кезде жеке деректер немесе карта мәліметтері ұрланады. 2024 жылы 2600-ден астам фишинг ісі тіркелді.\n\nБелгісі: Сілтемедегі домен дұрыс ресми сайтқа сәйкес келмейді." },
];

const sources = [
  { num: 4, text: "КПСиСУ Бас прокуратурасы", link: "https://finprom.kz/ru/article/usherb-ot-sluchaev-internet-moshennichestva-v-kazahstane-vyros-do-7-milliardov-tenge", linkText: "2024 жылғы схемалар бойынша статистика" },
  { num: 5, text: "ҚР ІІМ, 2024", link: "https://special.zakon.kz/cyber_fraud", linkText: "4785 зейнеткер алданды" },
  { num: 6, text: "BAQ.KZ, 2024", link: "https://baq.kz/qazaqstanda-internettegi-alayaqtyq-deregi-4-ke-kobeydi-336236/", linkText: "2614 фишинг ісі" },
];

const SchemesSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="schemes" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Қалай алдайды?</div>
        <h2 className="section-title">5 НЕГІЗГІ СХЕМА</h2>
        <p className="section-sub">Карточкаға басыңыз — схема қалай жұмыс істейтінін көресіз.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schemes.map((s, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={s.num}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className={`border rounded-xl overflow-hidden cursor-pointer transition-all relative ${
                  isOpen ? "border-primary bg-primary-light/30" : "border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                }`}
              >
                <div className="h-1 red-gradient" />
                <div className="p-7">
                  <div className="font-display text-5xl text-border leading-none">{s.num}</div>
                  <h3 className="text-lg font-extrabold text-foreground mt-2 mb-1">{s.title}</h3>
                  <div className="text-xs text-muted-foreground font-semibold">{s.target}</div>
                </div>
                {isOpen && (
                  <div className="px-7 pb-7 text-[13px] text-ink2 leading-relaxed border-t border-border pt-4">
                    {s.desc.split("\n\n").map((p, j) => (
                      <p key={j} className={j > 0 ? "mt-3 font-semibold" : ""}>{p}</p>
                    ))}
                  </div>
                )}
                <div
                  className={`absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center text-base transition-all ${
                    isOpen ? "bg-primary text-primary-foreground rotate-45" : "bg-border text-muted-foreground"
                  }`}
                >
                  +
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 mt-10">
          <h4 className="text-[13px] font-bold text-muted-foreground mb-3.5 uppercase tracking-wider">Деректер көздері</h4>
          <div className="flex flex-col gap-2">
            {sources.map((s) => (
              <div key={s.num} className="text-xs text-ink2 flex gap-2">
                <span className="text-primary font-bold min-w-[20px]">[{s.num}]</span>
                <span>{s.text} — <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{s.linkText}</a></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;
