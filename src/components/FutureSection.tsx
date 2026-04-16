const threats = [
  { icon: "🤖", title: "AI Deepfake — дауыс пен бейне", text: "Жақын адамыңның дауысы мен бейнесін AI 3–5 секундтық үлгі арқылы жасай алады. 2024 жылдан бастап «Анаңнан қоңырау» схемасы пайда болды — дауысы нақты, бірақ ол алаяқ.", danger: "Ең жылдам өсіп жатқан қауіп" },
  { icon: "🎯", title: "Жеке бейімделген AI-фишинг", text: "AI әлеуметтік желілерден деректеріңді жинап, тура саған арналған хабарлама жасайды — атыңмен, жұмыс орныңмен, жақындарыңның есімімен. Бұрын мұндай дәлдікке қол жеткізу мүмкін болмаған.", danger: "Таралуы артуда" },
  { icon: "📱", title: "QR-алаяқтық (квишинг)", text: "Паркинг, мейрамхана, дүкендегі QR-кодтардың үстіне жалған код жабыстырылады. Сканерлеген сәтте деректерің ұрланады немесе зиянды бағдарлама орнатылады. Қазақстанда 2023–2024 жылдары белсенді кездесе бастады.", danger: "Жаңа және таралып жатыр" },
  { icon: "🏢", title: "Корпоративтік алаяқтық", text: "Алаяқтар бизнеске де бет бұрды. Директор атынан жалған нұсқаулық, контрагент атынан жалған шот-фактура жіберіледі. 2024 жылы мамандар корпоративтік алаяқтықтың күрт өскенін тіркеді.", danger: "Шағын бизнеске қауіп" },
];

const sources = [
  { num: 7, text: "Ranking.kz, 2025", link: "https://ranking.kz/digest/regions-digest/uscherb-ot-internet-moshennichestva-v-kazahstane-vyros-pochti-vtroe.html", linkText: "2024 жылы зиян 2,8 есеге өсті" },
  { num: 8, text: "Zakon.kz, 2024", link: "https://www.zakon.kz/obshestvo/6426408-bolee-20-mlrd-tenge-lishilis-kazakhstantsev-iz-za-internetmoshennikov-v-2023-godu.html", linkText: "Трансшекаралық алаяқтық, корпоративтік сектор" },
];

const FutureSection = () => (
  <section id="future" className="section-container bg-background relative">
    <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="section-label">Ертең не болады?</div>
      <h2 className="section-title">БОЛАШАҚТЫҢ <span className="text-gradient-cyber">ҚАУПІ</span></h2>
      <p className="section-sub">
        Алаяқтық технологиямен бірге дамиды. Мына қауіптер қазірдің өзінде бар, ертең одан да күшейеді.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {threats.map((t, i) => (
          <div key={t.title} className="cyber-card p-7 group">
            <div className="flex items-start justify-between mb-4">
              <div className="text-[32px]">{t.icon}</div>
              <div className="font-mono text-[10px] text-cyan uppercase tracking-wider">[ threat.0{i + 1} ]</div>
            </div>
            <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">{t.title}</h3>
            <p className="text-sm text-ink2 leading-relaxed">{t.text}</p>
            <div className="text-xs font-mono uppercase tracking-wider text-primary mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
              {t.danger}
            </div>
          </div>
        ))}
      </div>

      <div className="cyber-card p-6 mt-10">
        <h4 className="font-mono text-[11px] font-bold text-cyan mb-3.5 uppercase tracking-wider">// Деректер көздері</h4>
        <div className="flex flex-col gap-2">
          {sources.map((s) => (
            <div key={s.num} className="text-xs text-ink2 flex gap-2 font-mono">
              <span className="text-primary font-bold min-w-[24px]">[{s.num}]</span>
              <span>{s.text} — <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{s.linkText}</a></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FutureSection;
