const solutions = [
  {
    num: "01",
    title: "«Банк қызметкері» схемасы",
    target: "Мақсат: барлық жас топтары",
    threat: "Жалған банкир SMS-код, PIN, CVV немесе «қорғаныс шотына» аударым жасауды сұрайды.",
    actions: [
      "Қоңырауды дереу үз — ашуланса да",
      "Картаңның артындағы нөмірге өзің қоңырау шал",
      "SMS-код, PIN немесе CVV-ды телефонмен ешқашан берме",
      "Банктің мобильдік қосымшасынан шот жағдайын тексер",
    ],
  },
  {
    num: "02",
    title: "«Жедел көмек» схемасы",
    target: "Мақсат: 60+ жастағылар",
    threat: "«Балаңыз / немереңіз жол апатына ұшырады, ақша керек» деп асықтырады.",
    actions: [
      "Қоңырауды үзіп, бала / немереге өзің тікелей хабарлас",
      "«Ешкімге айтпа» десе — бұл 100% алаяқтық",
      "Ақша аударуды ешқашан асығыс жасама",
      "Жақын адамдармен алдын ала «кілт сөз» келісіп қой",
    ],
  },
  {
    num: "03",
    title: "Жалған онлайн-дүкен",
    target: "Мақсат: 25–45 жас",
    threat: "Нарықтан 2 есе арзан тауар, тек тікелей аударым талап етіледі, тауар келмейді.",
    actions: [
      "Kaspi Pay немесе тауарды алғаннан кейінгі төлемді ғана қолдан",
      "Сатушының рейтингі мен пікірлерін мұқият тексер",
      "Нарықтық бағаны салыстыр: тым арзан — қауіп белгісі",
      "Жеке кездесіп, тауарды тексеріп барып төле",
    ],
  },
  {
    num: "04",
    title: "Жалған инвестиция",
    target: "Мақсат: орта жас, бизнесмендер",
    threat: "«Айына 30–50% пайда», тексерілмеген компания, несие алуға итермелейді.",
    actions: [
      "Компанияны АРРФР тізімінен тексер: finreg.kz",
      "Кепілдендірілген пайда — Қазақстанда заңсыз",
      "Инвестиция үшін несие алма, үйді кепілге қойма",
      "Тәуелсіз заңгер немесе бухгалтермен ақылдас",
    ],
  },
  {
    num: "05",
    title: "Фишинг SMS / сілтеме",
    target: "Мақсат: барлығы",
    threat: "Мемлекет / банк атынан жалған сілтеме, деректер мен карта мәліметтері ұрланады.",
    actions: [
      "Доменді мұқият оқы: egov.kz ≠ egov-kz.net",
      "SMS-тегі сілтемені баспа, сайтты браузерге өзің тер",
      "Күдікті сайтта карта деректерін ешқашан енгізбе",
      "Google Safe Browsing немесе Norton-мен тексер",
    ],
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="section-container bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Схема бойынша қорғаныс</div>
      <h2 className="section-title">5 СХЕМАҒА — 5 ҚАЛҚАН</h2>
      <p className="section-sub">
        Әр алаяқтық схемасына арналған нақты іс-қимыл. Білім — ең мықты қорғаныс.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutions.map((s) => (
          <div key={s.num} className="bg-card border border-border rounded-xl overflow-hidden hover:border-green hover:shadow-lg transition-all">
            <div className="px-7 pt-6 pb-5 border-b border-border flex items-start gap-4">
              <div className="font-display text-[44px] text-border leading-none flex-shrink-0">{s.num}</div>
              <div>
                <h3 className="text-[17px] font-extrabold text-foreground mb-1">{s.title}</h3>
                <div className="text-xs text-muted-foreground font-semibold">{s.target}</div>
              </div>
            </div>
            <div className="px-7 py-5">
              <div className="bg-primary-light border-l-[3px] border-primary rounded-r-md px-3.5 py-2.5 mb-4">
                <div className="text-[10px] font-bold uppercase tracking-[1px] text-primary mb-1">Қауіп</div>
                <p className="text-[13px] text-ink2 leading-[1.5]">{s.threat}</p>
              </div>
              <div className="flex flex-col gap-2">
                {s.actions.map((a) => (
                  <div key={a} className="flex gap-2.5 text-[13px] text-ink2 leading-[1.5]">
                    <span className="text-green font-extrabold flex-shrink-0 mt-px">✓</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
