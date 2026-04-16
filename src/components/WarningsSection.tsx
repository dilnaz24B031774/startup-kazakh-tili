import bgCircuit from "@/assets/bg-circuit.jpg";

const warnings = [
  { num: "01", title: "Асығыстық пен қысым", text: "«Қазір шешім қабылдамасаң, кеш болады» — алаяқтар сыни ойлауды өшіру үшін уақытты шектейді. Нақты банктер мен мемлекеттік органдар ешқашан осылай сөйлеспейді.", badge: "Ең жиі" },
  { num: "02", title: "«Ешкімге айтпа»", text: "Заңды ұйымдар ешқашан ақпаратты жақындарыңнан жасыруды сұрамайды. Мұндай сөз естілсе — бұл 100% алаяқтық. Дәл қазір жақыныңа хабарла.", badge: "Қауіпті" },
  { num: "03", title: "Тым тиімді ұсыныс", text: "Нарықтан 2–3 есе арзан тауар немесе «кепілдендірілген» пайда — алаяқтықтың классикалық белгісі. Тегін ірімшік тек тышқан қақпанында болады.", badge: "Жиі кездеседі" },
  { num: "04", title: "Дерек немесе код сұрау", text: "Ешбір банк, мемлекеттік орган немесе компания телефон арқылы PIN-код, CVV, SMS-код, парольді ЕШҚАШАН сұрамайды. Сұраса — бұл алаяқ.", badge: "Маңызды" },
  { num: "05", title: "Белгісіз нөмір немесе сілтеме", text: "Шетелдік нөмірден банк атынан қоңырау, SMS-тегі қысқартылған сілтеме немесе домен ресми сайтқа сәйкес келмесе — баспа.", badge: "Техникалық" },
];

const WarningsSection = () => (
  <section id="warnings" className="section-container bg-background relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <img src={bgCircuit} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="section-label">Қалай тануға болады?</div>
      <h2 className="section-title">5 <span className="text-primary neon-text">ҚЫЗЫЛ</span> ЖАЛАУША</h2>
      <p className="section-sub">
        Мына белгілердің кез келгені байқалса — тоқта, трубканы қой, жақыныңа хабарла.
      </p>

      <div className="border border-border rounded-lg overflow-hidden bg-surface/80 backdrop-blur-sm">
        {warnings.map((w, i) => (
          <div
            key={w.num}
            className={`flex items-center gap-6 px-7 py-6 transition-colors hover:bg-primary/5 group ${
              i < warnings.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="font-display text-[44px] text-primary leading-none min-w-[60px] group-hover:neon-text transition-all">{w.num}</div>
            <div className="flex-1">
              <div className="font-mono text-[10px] text-cyan uppercase tracking-wider mb-1">Белгі · {w.num}</div>
              <h4 className="text-base font-bold mb-1 text-foreground">{w.title}</h4>
              <p className="text-[13px] leading-relaxed text-ink2">{w.text}</p>
            </div>
            <div className="ml-auto text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-border whitespace-nowrap hidden sm:block text-muted-foreground uppercase tracking-wider">
              {w.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WarningsSection;
