const threats = [
  { icon: "🤖", title: "AI-Deepfake дауыс пен бейне", text: "Жақын адамыңның дауысын немесе бейнесін AI 3–5 секундтық үлгі арқылы жасай алады. 2024 жылдан бастап «Анаңнан қоңырау» схемасы пайда болды — дауысы нақты, бірақ бұл алаяқ.", danger: "Ең жылдам өсіп жатқан қауіп" },
  { icon: "🎯", title: "Жеке бейімделген AI-фишинг", text: "AI әлеуметтік желілерден деректеріңді жинап, тура саған арналған хабарлама жасайды — атыңмен, жұмыс орныңмен, жақындарыңның есімімен. Бұрын мұндай дәлдік мүмкін болмаған.", danger: "Таралуы артуда" },
  { icon: "📱", title: "QR-алаяқтық (Квишинг)", text: "Паркинг, мейрамхана, дүкендегі QR-кодтардың үстіне жалған код желімделеді. Сканерлегенде деректерің ұрланады немесе зиянды бағдарлама орнатылады. Қазақстанда 2023–2024 жылдары белсенді кездесе бастады.", danger: "Жаңа және таралып жатыр" },
  { icon: "🏢", title: "Корпоративтік алаяқтық", text: "Алаяқтар бизнеске де бет бұрды. Директордың атынан жалған нұсқаулық, контрагент атынан жалған шот-фактура. 2024 жылы мамандар корпоративтік алаяқтықтың күрт өскенін тіркеді.", danger: "Шағын бизнеске қауіп" },
];

const sources = [
  { num: 7, text: "Ranking.kz, 2025", link: "https://ranking.kz/digest/regions-digest/uscherb-ot-internet-moshennichestva-v-kazahstane-vyros-pochti-vtroe.html", linkText: "2024 жылы зиян 2,8 есеге өсті" },
  { num: 8, text: "Zakon.kz, 2024", link: "https://www.zakon.kz/obshestvo/6426408-bolee-20-mlrd-tenge-lishilis-kazakhstantsy-izza-internetmoshennikov-v-2023-godu.html", linkText: "Трансшекаралық алаяқтық, корпоративтік сектор" },
];

const FutureSection = () => (
  <section id="future" className="section-container bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Ертең не болады?</div>
      <h2 className="section-title">БОЛАШАҚТЫҢ ҚАУПІ</h2>
      <p className="section-sub">
        Алаяқтық технологиямен бірге дамиды. Мына қауіптер қазір де бар, ертең одан бетер болмақ.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {threats.map((t) => (
          <div key={t.title} className="bg-background border border-border rounded-xl p-7">
            <div className="text-[32px] mb-4">{t.icon}</div>
            <h3 className="text-[17px] font-extrabold text-foreground mb-2.5">{t.title}</h3>
            <p className="text-sm text-ink2 leading-relaxed">{t.text}</p>
            <div className="text-xs font-bold text-primary mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {t.danger}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 mt-10">
        <h4 className="text-[13px] font-bold text-muted-foreground mb-3.5 uppercase tracking-wider">Деректер көздері</h4>
        <div className="flex flex-col gap-2">
          {sources.map((s) => (
            <div key={s.num} className="text-xs text-ink2 flex gap-2">
              <span className="text-primary font-bold min-w-[20px]">[{s.num}]</span>
              <span>{s.text} — <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{s.linkText}</a></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FutureSection;
