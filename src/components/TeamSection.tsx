const members = [
  { initials: "МА", name: "Мықтыбек Ақсұңқар", role: "Жоба жетекшісі", color: "#C62828", quote: "«Алаяқтар бәрін алдамайды. Олар тек бір сәтті күтеді.»" },
  { initials: "МА", name: "Мұрат Алихан", role: "Зерттеуші", color: "#1565C0", quote: "«Статистикаға қарағанда, бұл жай қылмыс емес — қоғамдық дерт. Осыны адамдарға жеткізгім келді.»" },
  { initials: "ЖД", name: "Жанабергенова Дильназ", role: "Дизайнер", color: "#2E7D32", quote: "«Алаяқтықтан қорғанудың жалғыз жолы — оның қалай жұмыс істейтінін түсіну.»" },
  { initials: "БД", name: "Бәкір Дидар", role: "Контент авторы", color: "#6A1B9A", quote: "«Қарт адамдар алданып жатыр, ал біз тек айналып өтіп жүрміз. Бұл өзгеруі тиіс.»" },
  { initials: "ЗМ", name: "Зангирова Мадина", role: "Техникалық жасаушы", color: "#E65100", quote: "«Алаяқтық — тек статистика емес, бұл біздің жақындарымыздың қауіпсіздігі.»" },
  { initials: "ЖА", name: "Жұмаш Асылбек", role: "Деректер аналитигі", color: "#00695C", quote: "«Бір қате шешім — үлкен шығынға әкелуі мүмкін.»" },
];

const TeamSection = () => (
  <section id="team" className="section-container bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Кім жасады?</div>
      <h2 className="section-title">БІЗДІҢ ТОП</h2>
      <p className="section-sub">
        Алаяқтыққа қарсы хабардарлықты арттыру үшін бас қосқан 6 студент.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.name} className="bg-card border border-border rounded-xl p-7 text-center shadow-sm hover:shadow-md transition-shadow">
            <div
              className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center font-extrabold text-[22px] text-white"
              style={{ background: m.color }}
            >
              {m.initials}
            </div>
            <h3 className="text-[17px] font-extrabold text-foreground mb-1">{m.name}</h3>
            <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">{m.role}</div>
            <div className="text-[13px] leading-[1.55] italic text-ink2">{m.quote}</div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-9 mt-6 text-center shadow-sm">
        <p className="text-base leading-[1.7] max-w-2xl mx-auto mb-6 text-ink2">
          «Біз алаяқтықтың артында тек құрғақ сандар емес, шынайы адамдар мен тағдырлар тұрғанын түсінеміз.
          Сондықтан бұл платформаны әрбір қазақстандық өзін сенімді сезінуі үшін жасадық.
          САҚТАН — бұл білім, сақтық және сіздің қауіпсіздігіңіз.»
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="mailto:saktan.kz@gmail.com" className="px-5 py-2.5 rounded-lg border border-border text-sm font-bold transition-colors hover:border-primary hover:text-primary">
            📧 Email
          </a>
          <a href="#" className="px-5 py-2.5 rounded-lg border border-border text-sm font-bold transition-colors hover:border-primary hover:text-primary">
            ✈️ Telegram
          </a>
          <a href="#" className="px-5 py-2.5 rounded-lg border border-border text-sm font-bold transition-colors hover:border-primary hover:text-primary">
            📸 Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
