const resources = [
  { tag: "Ресми · ҚР ІІМ", title: "CyberPol — киберқылмысқа шағым", text: "ҚР ІІМ-нің арнайы жобасы. Интернет-алаяқтыққа тап болсаңыз — осы платформа арқылы хабарлаңыз.", link: "https://www.mvd.gov.kz/", linkText: "Сайтқа өту" },
  { tag: "Ресми · Ұлттық банк", title: "Антифрод-орталық", text: "Ұлттық банк 2024 жылы ашты. Күдікті транзакцияларды бұғаттауға арналған.", link: "https://nationalbank.kz/", linkText: "Nationalbank.kz" },
  { tag: "Тексеру құралы", title: "Have I Been Pwned?", text: "Email немесе телефон нөміріңіз дерек ағып кету базасында бар-жоғын 1 секундта тексеріңіз.", link: "https://haveibeenpwned.com/", linkText: "Haveibeenpwned.com" },
  { tag: "Тексеру құралы", title: "Google Safe Browsing", text: "Кез келген сілтемені басар алдында осы құрал арқылы тексеріңіз — зиянды сайт па, жоқ па.", link: "https://transparencyreport.google.com/safe-browsing/search", linkText: "Google тексергіші" },
  { tag: "Қаржылық сауаттылық", title: "Fingramota.kz", text: "ҚР Ұлттық банкінің қаржылық сауаттылық платформасы. Алаяқтықтан қорғану, бюджет жоспарлау бойынша.", link: "https://fingramota.kz/", linkText: "Fingramota.kz" },
  { tag: "Жасөспірімдерге", title: "Google Interland", text: "Google-дің ойын форматындағы киберқауіпсіздік тренингі. Балалар мен жасөспірімдерге арналған.", link: "https://beinternetawesome.withgoogle.com/", linkText: "Interland ойыны" },
];

const ResourcesSection = () => (
  <section id="resources" className="section-container bg-background relative">
    <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="section-label">Білім қоры</div>
      <h2 className="section-title">РЕСУРСТАР МЕН <span className="text-cyan">СІЛТЕМЕЛЕР</span></h2>
      <p className="section-sub">Тексерілген ресми және тәуелсіз ресурстар.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((r) => (
          <div key={r.title} className="cyber-card p-6 group">
            <div className="font-mono text-[10px] font-bold tracking-wider uppercase text-cyan mb-2.5">{r.tag}</div>
            <h3 className="font-display text-xl text-foreground mb-2 tracking-wide">{r.title}</h3>
            <p className="text-[13px] text-ink2 leading-relaxed mb-4">{r.text}</p>
            <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-[12px] font-mono uppercase tracking-wider font-bold text-primary inline-flex items-center gap-1.5 hover:text-primary-glow transition-colors">
              {r.linkText} <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResourcesSection;
