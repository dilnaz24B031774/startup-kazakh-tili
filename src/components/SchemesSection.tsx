import { useState } from "react";

const schemes = [
  { num: "01", title: "«Банк қызметкері»", target: "Мақсат: барлық жас топтары", desc: "Алаяқ банк атынан қоңырау шалып, шотыңыз бұғатталды немесе күдікті операция бар деп хабарлайды. SMS-код пен карта деректерін сұрайды.\n\nБелгісі: ешбір банк телефон арқылы PIN-код, CVV немесе SMS-кодты ЕШҚАШАН сұрамайды." },
  { num: "02", title: "«Жедел көмек»", target: "Мақсат: 60+ жастағылар", desc: "«Балаңыз/немереңіз жол апатына ұшырады, ақша керек» деп хабарлайды. 2023 жылы ҚР ІІМ деректері бойынша 4 785 зейнеткер осы схема арқылы алданған.\n\nБелгісі: асығыстық пен «ешкімге айтпа» деген сөз — бұл 100% алаяқтық." },
  { num: "03", title: "Жалған онлайн-дүкен", target: "Мақсат: 25–45 жас", desc: "2024 жылы тіркелген барлық интернет-алаяқтықтың 24,5%-ы — тауарды алдын ала төлеп, оны ала алмаған жағдайлар. OLX, Kaspi-дегі «арзан» ұсыныстар көбіне осындай.\n\nБелгісі: нарықтан 2 есе арзан баға және тек тікелей аударым арқылы төлем." },
  { num: "04", title: "Жалған инвестиция", target: "Мақсат: орта жас, бизнесмендер", desc: "«Айына 30–50% пайда» уәдесімен ақша жинайды. 2024 жылы 2 000-нан астам адам инвестициялық схемаға алданған.\n\nБелгісі: тексерілмеген компания, кепілдендірілген пайда және шұғылдық." },
  { num: "05", title: "Фишинг SMS / сілтеме", target: "Мақсат: барлық қолданушы", desc: "Мемлекет, банк немесе танымал компания атынан жалған сілтеме келеді. Басқан сәтте жеке деректер мен карта мәліметтері ұрланады. 2024 жылы 2 600-ден астам фишинг ісі тіркелген.\n\nБелгісі: сілтемедегі домен ресми сайтқа сәйкес келмейді." },
];

const SchemesSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="schemes" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Қалай алдайды?</div>
        <h2 className="section-title">5 НЕГІЗГІ СХЕМА</h2>
        <p className="section-sub">Карточкаға басыңыз — схеманың қалай жұмыс істейтінін көресіз.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schemes.map((s, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={s.num}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className={`border rounded-xl overflow-hidden cursor-pointer transition-all relative ${
                  isOpen
                    ? "border-primary bg-primary-light/30 shadow-lg"
                    : "border-border bg-card hover:border-primary hover:shadow-lg"
                }`}
              >
                <div className="h-1 bg-gradient-to-r from-primary to-primary-dark" />
                <div className="p-7">
                  <div className="font-display text-[48px] text-border leading-none">{s.num}</div>
                  <h3 className="text-lg font-extrabold text-foreground mt-2 mb-1">{s.title}</h3>
                  <div className="text-xs text-muted-foreground font-semibold">{s.target}</div>
                </div>
                {isOpen && (
                  <div className="px-7 pb-7 text-[13px] text-ink2 leading-[1.65] border-t border-border pt-4">
                    {s.desc.split("\n\n").map((p, j) => (
                      <p key={j} className={j > 0 ? "mt-3 font-bold text-primary" : ""}>{p}</p>
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
      </div>
    </section>
  );
};

export default SchemesSection;
