const warnings = [
  { num: "01", title: "Асығыстық және қысым", text: "«Қазір шешім қабылдамасаң, кеш болады» — алаяқтар сыни ойлауды өшіру үшін уақытты шектейді. Нақты банктер мен мемлекеттік органдар ешқашан осындай әрекет жасамайды.", badge: "Ең жиі" },
  { num: "02", title: "«Ешкімге айтпа»", text: "Заңды ұйымдар ешқашан жақындарыңнан жасыруды сұрамайды. Бұл сөз болса — 100% алаяқтық. Дәл қазір жақыныңа хабарла.", badge: "Қауіпті" },
  { num: "03", title: "Тым тиімді ұсыныс", text: "Нарықтан 2–3 есе арзан тауар немесе «кепілдендірілген» пайда — алаяқтықтың классикалық белгісі. Ақысыз ірімшік тышқан ұстайтын қақпанда ғана болады.", badge: "Жиі кездеседі" },
  { num: "04", title: "Деректер немесе код сұрау", text: "Ешбір банк, мемлекеттік орган немесе компания телефон арқылы PIN-код, CVV, SMS-код, парольді ЕШҚАШАН сұрамайды. Сұраса — бұл алаяқ.", badge: "Маңызды" },
  { num: "05", title: "Белгісіз нөмір немесе сілтеме", text: "Шетелдік нөмірден банктің атынан қоңырау, SMS-тегі қысқартылған сілтеме немесе домен дұрыс сайтқа сәйкес келмесе — баспай-ақ қой.", badge: "Техникалық" },
];

const WarningsSection = () => (
  <section id="warnings" className="section-container dark-section">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Қалай тануға болады?</div>
      <h2 className="section-title">5 ҚЫЗЫЛ ЖАЛАУША</h2>
      <p className="section-sub">
        Мына белгілердің кез келгені болса — дереу түрде тоқтап, қоңырауды үзіп, жақыныңа хабарлаған жөн.
      </p>

      <div className="border border-[#333] rounded-xl overflow-hidden">
        {warnings.map((w, i) => (
          <div
            key={w.num}
            className={`flex items-center gap-6 px-7 py-6 bg-[#1e1e1e] hover:bg-[#252525] transition-colors ${
              i < warnings.length - 1 ? "border-b border-[#2a2a2a]" : ""
            }`}
          >
            <div className="font-display text-[40px] text-primary leading-none min-w-[52px]">{w.num}</div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-white mb-1">{w.title}</h4>
              <p className="text-[13px] leading-[1.5] text-[#888]">{w.text}</p>
            </div>
            <div className="ml-auto text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#2a2a2a] text-[#666] whitespace-nowrap hidden sm:block">
              {w.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WarningsSection;
