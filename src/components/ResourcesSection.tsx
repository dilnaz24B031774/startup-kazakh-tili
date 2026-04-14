const resources = [
  { tag: "Ресми · ҚР МВД", title: "CyberPol — киберқылмысқа шағым", text: "ҚР ІІМ-нің арнайы жобасы. Интернет-алаяқтыққа шалдықсаңыз — осы арқылы хабарлаңыз.", link: "https://www.mvd.gov.kz/", linkText: "Сайтқа өту" },
  { tag: "Ресми · Ұлттық банк", title: "Антифрод-орталық", text: "Ұлттық банк 2024 жылы ашты. Күдікті транзакцияларды бұғаттауға арналған.", link: "https://nationalbank.kz/", linkText: "Nationalbank.kz" },
  { tag: "Тексеру құралы", title: "Have I Been Pwned?", text: "Email немесе телефон нөміріңіз деректер ағып кету базасында бар ма — 1 секундта тексеріңіз.", link: "https://haveibeenpwned.com/", linkText: "Haveibeenpwned.com" },
  { tag: "Тексеру құралы", title: "Google Safe Browsing", text: "Кез келген сілтемені басар алдында осы арқылы тексеріңіз — зиянды сайт па, жоқ па.", link: "https://transparencyreport.google.com/safe-browsing/search", linkText: "Google тексергіші" },
  { tag: "Қаржылық сауаттылық", title: "Fingramota.kz", text: "ҚР Ұлттық банкінің қаржылық сауаттылық платформасы. Алаяқтықтан қорғану, бюджет жоспарлау.", link: "https://fingramota.kz/", linkText: "Fingramota.kz" },
  { tag: "Жасөспірімдерге", title: "Google Interland", text: "Google-дың ойын форматындағы киберқауіпсіздік тренингі. Балалар мен жасөспірімдерге арналған.", link: "https://beinternetawesome.withgoogle.com/", linkText: "Interland ойыны" },
];

const ResourcesSection = () => (
  <section id="resources" className="section-container bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Білім қоры</div>
      <h2 className="section-title">РЕСУРСТАР МЕН СІЛТЕМЕЛЕР</h2>
      <p className="section-sub">Тексерілген ресми және тәуелсіз ресурстар.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {resources.map((r) => (
          <div key={r.title} className="bg-background border border-border rounded-xl p-6 hover:border-primary hover:-translate-y-0.5 transition-all">
            <div className="text-[10px] font-bold tracking-wider uppercase text-primary mb-2.5">{r.tag}</div>
            <h3 className="text-base font-extrabold text-foreground mb-2">{r.title}</h3>
            <p className="text-[13px] text-ink2 leading-relaxed mb-3.5">{r.text}</p>
            <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-primary flex items-center gap-1.5 hover:text-primary-dark transition-colors">
              {r.linkText} <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResourcesSection;
