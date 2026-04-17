const threats = [
  { icon: "🤖", title: "AI Deepfake — дауыс пен бейне", text: "Жақын адамыңның дауысы мен бейнесін AI 3–5 секундтық үлгі арқылы жасай алады. 2024 жылдан бастап «Анаңнан қоңырау» схемасы пайда болды — дауысы нақты, бірақ ол алаяқ.", danger: "Ең жылдам өсіп жатқан қауіп" },
  { icon: "🎯", title: "Жеке бейімделген AI-фишинг", text: "AI әлеуметтік желілерден деректеріңді жинап, тура саған арналған хабарлама жасайды — атыңмен, жұмыс орныңмен, жақындарыңның есімімен. Бұрын мұндай дәлдікке қол жеткізу мүмкін болмаған.", danger: "Таралуы артуда" },
  { icon: "📱", title: "QR-алаяқтық (квишинг)", text: "Паркинг, мейрамхана, дүкендегі QR-кодтардың үстіне жалған код жабыстырылады. Сканерлеген сәтте деректерің ұрланады немесе зиянды бағдарлама орнатылады. Қазақстанда 2023–2024 жылдары белсенді кездесе бастады.", danger: "Жаңа және таралып жатыр" },
  { icon: "🏢", title: "Корпоративтік алаяқтық", text: "Алаяқтар бизнеске де бет бұрды. Директор атынан жалған нұсқаулық, контрагент атынан жалған шот-фактура жіберіледі. 2024 жылы мамандар корпоративтік алаяқтықтың күрт өскенін тіркеді.", danger: "Шағын бизнеске қауіп" },
];

const FutureSection = () => (
  <section id="future" className="section-container bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Ертең не болады?</div>
      <h2 className="section-title">БОЛАШАҚТЫҢ ҚАУПІ</h2>
      <p className="section-sub">
        Алаяқтық технологиямен бірге дамиды. Мына қауіптер қазірдің өзінде бар, ертең одан да күшейеді.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {threats.map((t) => (
          <div key={t.title} className="bg-card border border-border rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[32px] mb-4">{t.icon}</div>
            <h3 className="text-[17px] font-extrabold text-foreground mb-2.5">{t.title}</h3>
            <p className="text-sm text-ink2 leading-[1.65]">{t.text}</p>
            <div className="text-xs font-bold text-primary mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t.danger}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FutureSection;
