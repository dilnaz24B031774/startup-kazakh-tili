const resources = [
  { tag: "Ресми · ҚР ІІМ", title: "CyberPol — киберқылмысқа шағым", text: "ҚР ІІМ-нің арнайы жобасы. Интернет-алаяқтыққа тап болсаңыз — осы платформа арқылы хабарлаңыз.", link: "https://www.mvd.gov.kz/", linkText: "Сайтқа өту" },
  { tag: "Ресми · Ұлттық банк", title: "Антифрод-орталық", text: "Ұлттық банк 2024 жылы ашты. Күдікті транзакцияларды бұғаттауға арналған.", link: "https://nationalbank.kz/", linkText: "Nationalbank.kz" },
  { tag: "Тексеру құралы", title: "Have I Been Pwned?", text: "Email немесе телефон нөміріңіз дерек ағып кету базасында бар-жоғын 1 секундта тексеріңіз.", link: "https://haveibeenpwned.com/", linkText: "Haveibeenpwned.com" },
  { tag: "Тексеру құралы", title: "Google Safe Browsing", text: "Кез келген сілтемені басар алдында осы құрал арқылы тексеріңіз — зиянды сайт па, жоқ па.", link: "https://transparencyreport.google.com/safe-browsing/search", linkText: "Google тексергіші" },
  { tag: "Қаржылық сауаттылық", title: "Fingramota.kz", text: "ҚР Ұлттық банкінің қаржылық сауаттылық платформасы. Алаяқтықтан қорғану, бюджет жоспарлау бойынша.", link: "https://fingramota.kz/", linkText: "Fingramota.kz" },
  { tag: "Жасөспірімдерге", title: "Google Interland", text: "Google-дің ойын форматындағы киберқауіпсіздік тренингі. Балалар мен жасөспірімдерге арналған.", link: "https://beinternetawesome.withgoogle.com/", linkText: "Interland ойыны" },
];

const ResourcesSection = () => (
  <section id="resources" className="section-container bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Білім қоры</div>
      <h2 className="section-title">РЕСУРСТАР МЕН СІЛТЕМЕЛЕР</h2>
      <p className="section-sub">Тексерілген ресми және тәуелсіз ресурстар.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((r) => (
          <div key={r.title} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary transition-all">
            <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase bg-primary-light text-primary px-2 py-1 rounded mb-3">
              {r.tag}
            </div>
            <h3 className="text-[17px] font-extrabold text-foreground mb-2">{r.title}</h3>
            <p className="text-[13px] text-ink2 leading-[1.6] mb-4">{r.text}</p>
            <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-primary inline-flex items-center gap-1.5 hover:gap-2 transition-all">
              {r.linkText} <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResourcesSection;
