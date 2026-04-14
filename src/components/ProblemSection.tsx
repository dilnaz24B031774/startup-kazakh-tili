const problems = [
  {
    tag: "Технологиялық",
    icon: "📱",
    title: "Цифрлық алшақтық",
    text: "Интернет пен смартфон жылдам таралды, бірақ цифрлық сауаттылық артта қалды. Халықтың үлкен бөлігі онлайн-қауіпсіздік ережелерін білмей жаңа технологияларды пайдалана бастады. 2017–2024 жылдар аралығында интернет-алаяқтық саны 10 есеге өсті.",
  },
  {
    tag: "Психологиялық",
    icon: "🧠",
    title: "Әлеуметтік инженерия",
    text: "Алаяқтық схемалардың негізі — адам психологиясы. Мамандар екі негізгі когнитивтік қателікті атайды: «мені алдай алмайды» деген шамадан тыс сенімділік және таныс нәрсеге (банк, мемлекет, жақын) деген ерекше сенім. Стресс, жалғыздық, асығыстық — осалдықты арттырады.",
  },
  {
    tag: "Неврологиялық",
    icon: "🔬",
    title: "Мидың өзгеруі",
    text: "Жасымен мидың аралшық бөлігінің белсенділігі азаяды — бұл бөлім ұсыныстардың шынайылығын интуитивті бағалайды. Сол себепті білімді де, ақылды да қарт адам алдануы мүмкін. Бұл кінә емес — физиология. Сондықтан 60+ жастағылар ерекше осал топты құрайды.",
  },
];

const sources = [
  { num: 1, text: "ҚР Бас прокуратурасы, 2024", link: "https://24.kz/ru/news/social/658525-44-tysyachi-kazakhstantsev-postradali-ot-moshennikov-v-2023-godu", linkText: "44 000 жәбірленуші, ₸140 млрд зиян, 2023" },
  { num: 2, text: "ҚР ІІМ, 2024", link: "https://www.zakon.kz/obshestvo/6426408-bolee-20-mlrd-tenge-lishilis-kazakhstantsy-izza-internetmoshennikov-v-2023-godu.html", linkText: "7 жылда 10 есе өсу" },
  { num: 3, text: "Медяник О., СПБГУ", link: "https://www.kp.ru/daily/27764.3/5211044/", linkText: "Мидың аралшық бөлігі туралы зерттеу" },
];

const ProblemSection = () => (
  <section id="problem" className="section-container bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Неге болады?</div>
      <h2 className="section-title">МӘСЕЛЕНІҢ ҮШТІК СЕБЕБІ</h2>
      <p className="section-sub">
        Алаяқтыққа тек «сенгіш» адамдар ғана түспейді. Зерттеушілер үш негізгі себепті атайды.
      </p>

      <div className="grid md:grid-cols-3 gap-[2px] bg-border rounded-xl overflow-hidden">
        {problems.map((p) => (
          <div key={p.title} className="bg-background p-8">
            <div className="inline-block text-[10px] font-bold tracking-wider uppercase bg-primary-light text-primary px-2 py-0.5 rounded mb-3">
              {p.tag}
            </div>
            <div className="text-3xl mb-4">{p.icon}</div>
            <h3 className="text-[17px] font-extrabold text-foreground mb-2.5">{p.title}</h3>
            <p className="text-sm text-ink2 leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 mt-8">
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

export default ProblemSection;
