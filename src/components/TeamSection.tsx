const members = [
  { initials: "МА", name: "Мықтыбек Ақсұңқар", role: "Жоба жетекшісі", color: "#C62828", quote: "«Апам алаяқтарға ақша аударып жібергенде, бұл жобаның қаншалықты маңызды екенін түсіндім.»" },
  { initials: "МА", name: "Мұрат Алихан", role: "Зерттеуші", color: "#1565C0", quote: "«Статистикаға қарағанда, бұл жай қылмыс емес — қоғамдық дерт. Осыны адамдарға жеткізгім келді.»" },
  { initials: "ЖД", name: "Жанабергенова Дильназ", role: "Дизайнер", color: "#2E7D32", quote: "«Ақпарат болғаны жеткіліксіз — оны адам оқығысы келетіндей етіп жасау керек.»" },
  { initials: "БД", name: "Бәкір Дидар", role: "Контент авторы", color: "#6A1B9A", quote: "«Қарт адамдар алданып жатыр, ал біз тек айналып өтіп жүрміз. Бұл өзгеруі тиіс.»" },
  { initials: "ЗМ", name: "Зангирова Мадина", role: "Техникалық жасаушы", color: "#E65100", quote: "«Код арқылы қоғамға пайда келтіруге болатынына осы жоба — тірі дәлел.»" },
  { initials: "ЖА", name: "Жұмаш Асылбек", role: "Деректер аналитигі", color: "#00695C", quote: "«Сандардың артында нақты адамдар бар. Соны ұмытпасақ болғаны.»" },
];

const TeamSection = () => (
  <section id="team" className="section-container bg-background relative overflow-hidden">
    <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="section-label">Кім жасады?</div>
      <h2 className="section-title">БІЗДІҢ <span className="text-primary neon-text">ТОП</span></h2>
      <p className="section-sub">
        Алаяқтыққа қарсы хабардарлықты арттыру үшін бас қосқан 6 студент.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.name} className="cyber-card p-7 text-center group">
            <div
              className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center font-display text-[26px] text-white border-2 border-border group-hover:border-primary transition-colors"
              style={{ background: m.color }}
            >
              {m.initials}
            </div>
            <h3 className="font-display text-xl text-foreground mb-1 tracking-wide">{m.name}</h3>
            <div className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-3">{m.role}</div>
            <div className="text-[13px] leading-relaxed italic text-ink2">{m.quote}</div>
          </div>
        ))}
      </div>

      <div className="cyber-card corner-brackets p-9 mt-6 text-center">
        <div className="font-mono text-[11px] uppercase tracking-wider text-cyan mb-3">Біздің миссиямыз</div>
        <p className="text-base leading-relaxed max-w-2xl mx-auto mb-6 text-ink2">
          «Біз — алаяқтықтың жай статистика емес, нақты адамдардың өміріне әсер ететінін сезінген студенттерміз.
          Бұл платформа хабардарлықты арттыру үшін жасалды — кез келген адам, кез келген жерде пайдалана алсын деп.»
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="mailto:saktan.kz@gmail.com" className="px-5 py-2.5 rounded border border-border font-mono text-[11px] uppercase tracking-wider font-bold transition-colors hover:border-primary hover:text-primary">
            Email
          </a>
          <a href="#" className="px-5 py-2.5 rounded border border-border font-mono text-[11px] uppercase tracking-wider font-bold transition-colors hover:border-primary hover:text-primary">
            Telegram
          </a>
          <a href="#" className="px-5 py-2.5 rounded border border-border font-mono text-[11px] uppercase tracking-wider font-bold transition-colors hover:border-primary hover:text-primary">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
