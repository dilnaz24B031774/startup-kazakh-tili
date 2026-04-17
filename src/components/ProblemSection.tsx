const problems = [
  {
    tag: "Технологиялық",
    icon: "📱",
    title: "Цифрлық алшақтық",
    text: "Интернет пен смартфон жылдам таралды, бірақ цифрлық сауаттылық соған ілесе алмады. Халықтың үлкен бөлігі онлайн-қауіпсіздік ережелерін білмей жаңа технологияларды пайдалана бастады. 2017–2024 жылдар аралығында интернет-алаяқтық саны 10 есеге өсті.",
  },
  {
    tag: "Психологиялық",
    icon: "🧠",
    title: "Әлеуметтік инженерия",
    text: "Алаяқтық схемалардың негізі — адам психологиясы. Мамандар екі негізгі когнитивтік қателікті атайды: «мені ешкім алдай алмайды» деген шамадан тыс сенімділік және таныс нәрсеге (банк, мемлекет, жақын адам) деген ерекше сенім. Стресс, жалғыздық пен асығыстық — осалдықты арттырады.",
  },
  {
    tag: "Неврологиялық",
    icon: "🔬",
    title: "Мидың өзгеруі",
    text: "Жасы ұлғайған сайын мидың аралшық бөлігінің белсенділігі азаяды — бұл бөлім ұсыныстардың шынайылығын интуитивті бағалайды. Сондықтан білімді әрі ақылды қарт адам да алдануы мүмкін. Бұл — кінә емес, физиология. Сол себепті 60+ жастағылар ерекше осал топты құрайды.",
  },
];

const sources = [
  { num: 1, text: "ҚР Бас прокуратурасы, 2024", link: "https://24.kz/ru/news/social/658525-44-tysyachi-kazakhstantsev-postradali-ot-moshennikov-v-2023-godu", linkText: "44 000 жәбірленуші, ₸140 млрд зиян" },
  { num: 2, text: "ҚР ІІМ, 2024", link: "https://www.zakon.kz/obshestvo/6426408-bolee-20-mlrd-tenge-lishilis-kazakhstantsev-iz-za-internetmoshennikov-v-2023-godu.html", linkText: "7 жылда 10 есе өсу" },
  { num: 3, text: "Медяник О., СПбГУ", link: "https://www.kp.ru/daily/27764.3/5211044/", linkText: "Мидың аралшық бөлігі туралы зерттеу" },
];

const ProblemSection = () => (
  <section id="problem" className="section-container bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Неге болады?</div>
      <h2 className="section-title">МӘСЕЛЕНІҢ ҮШТІК СЕБЕБІ</h2>
      <p className="section-sub">
        Алаяқтыққа тек «сенгіш» адамдар ғана түспейді. Зерттеушілер үш негізгі себепті атайды.
      </p>

      <div className="grid md:grid-cols-3 gap-0.5 bg-border rounded-xl overflow-hidden">
        {problems.map((p) => (
          <div key={p.title} className="bg-card p-8">
            <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase bg-primary-light text-primary px-2 py-1 rounded mb-3">
              {p.tag}
            </div>
            <div className="text-[28px] mb-4">{p.icon}</div>
            <h3 className="text-[17px] font-extrabold text-foreground mb-2.5">{p.title}</h3>
            <p className="text-sm text-ink2 leading-[1.65]">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mt-8 shadow-sm">
        <h4 className="text-[11px] font-bold text-primary mb-3.5 uppercase tracking-wider">Деректер көздері</h4>
        <div className="flex flex-col gap-2">
          {sources.map((s) => (
            <div key={s.num} className="text-xs text-ink2 flex gap-2">
              <span className="text-primary font-bold min-w-[24px]">[{s.num}]</span>
              <span>{s.text} — <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{s.linkText}</a></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
