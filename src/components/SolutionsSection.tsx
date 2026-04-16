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
  <section id="solutions" className="section-container bg-background relative">
    <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="section-label">Схема бойынша қорғаныс</div>
      <h2 className="section-title">5 СХЕМАҒА — <span className="text-cyan">5 ҚАЛҚАН</span></h2>
      <p className="section-sub">
        Әр алаяқтық схемасына арналған нақты іс-қимыл. Білім — ең мықты қорғаныс.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutions.map((s) => (
          <div key={s.num} className="cyber-card overflow-hidden group hover:border-cyan/60 transition-colors">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
            <div className="p-6 border-b border-border flex items-start gap-4">
              <div className="font-display text-[44px] text-cyan/30 leading-none">{s.num}</div>
              <div>
                <h3 className="text-base font-extrabold text-foreground mb-1">{s.title}</h3>
                <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">{s.target}</div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-primary/10 border-l-2 border-primary rounded-r-md px-3.5 py-2.5 mb-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Қауіп</div>
                <p className="text-[13px] text-ink2 leading-relaxed">{s.threat}</p>
              </div>
              <div className="flex flex-col gap-2">
                {s.actions.map((a) => (
                  <div key={a} className="flex gap-2.5 text-[13px] text-ink2 leading-snug">
                    <span className="text-cyan font-bold flex-shrink-0">✓</span>
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
