const members = [
  { initials: "АА", name: "Айгерім Асанова", role: "Жоба жетекшісі", color: "#C62828", quote: "«Апам алаяқтарға ақша аударып жібергенде, бұл жобаның қаншалықты маңызды екенін түсіндім.»" },
  { initials: "БМ", name: "Бауыржан Мұратов", role: "Зерттеуші", color: "#1565C0", quote: "«Статистикаға қарағанда, бұл жай қылмыс емес — қоғамдық дерт. Осыны адамдарға жеткізгім келді.»" },
  { initials: "ДС", name: "Дана Сейткали", role: "Дизайнер", color: "#2E7D32", quote: "«Ақпарат болуы жеткіліксіз — оны адам оқыгысы келетіндей етіп жасау керек.»" },
  { initials: "ЖА", name: "Жансая Ахметова", role: "Контент авторы", color: "#6A1B9A", quote: "«Қарт адамдар алданып жатыр, ал біз тек айналып өтіп жүрміз. Бұл өзгеруі тиіс.»" },
  { initials: "НИ", name: "Нұрлан Ибрагим", role: "Техникалық жасаушы", color: "#E65100", quote: "«Код арқылы қоғамға пайда келтіруге болатынына осы жоба дәлел.»" },
  { initials: "МК", name: "Мадина Қалиева", role: "Деректер аналитигі", color: "#00695C", quote: "«Сандар артында нақты адамдар бар. Соны ұмытпасақ болды.»" },
];

const TeamSection = () => (
  <section id="team" className="section-container" style={{ background: "hsl(0 0% 10%)" }}>
    <div className="max-w-7xl mx-auto">
      <div className="section-label" style={{ color: "#E57373" }}>Кім жасады?</div>
      <h2 className="section-title" style={{ color: "white" }}>БІЗДІҢ ТОП</h2>
      <p className="section-sub" style={{ color: "#999" }}>
        Алаяқтыққа қарсы хабардарлықты арттыру үшін бас қосқан 6 студент.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((m) => (
          <div
            key={m.name}
            className="rounded-2xl p-7 text-center border transition-all hover:-translate-y-1 hover:border-primary"
            style={{ background: "#1e1e1e", borderColor: "#2a2a2a" }}
          >
            <div
              className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center font-display text-[26px]"
              style={{ background: m.color, color: "white" }}
            >
              {m.initials}
            </div>
            <h3 className="text-base font-extrabold mb-1" style={{ color: "white" }}>{m.name}</h3>
            <div className="text-xs font-semibold mb-3" style={{ color: "#888" }}>{m.role}</div>
            <div className="text-[13px] leading-relaxed italic" style={{ color: "#888" }}>{m.quote}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-9 mt-6 text-center border" style={{ background: "#1e1e1e", borderColor: "#2a2a2a" }}>
        <p className="text-base leading-relaxed max-w-xl mx-auto mb-5" style={{ color: "#ccc" }}>
          «Біз — алаяқтықтың тек статистика емес, нақты адамдардың өміріне тиетінін сезінген студенттерміз. Бұл платформа хабардарлықты арттыру үшін жасалды — кез келген адам, кез келген жерде пайдалана алсын деп.»
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="mailto:saktan.kz@gmail.com" className="px-5 py-2.5 rounded-md text-[13px] font-bold transition-colors hover:bg-primary" style={{ background: "#2a2a2a", color: "#ccc" }}>
            📧 Email
          </a>
          <a href="#" className="px-5 py-2.5 rounded-md text-[13px] font-bold transition-colors hover:bg-primary" style={{ background: "#2a2a2a", color: "#ccc" }}>
            ✈️ Telegram
          </a>
          <a href="#" className="px-5 py-2.5 rounded-md text-[13px] font-bold transition-colors hover:bg-primary" style={{ background: "#2a2a2a", color: "#ccc" }}>
            📸 Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
