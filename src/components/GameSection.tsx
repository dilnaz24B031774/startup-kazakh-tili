import { useState, useEffect, useCallback, useRef } from "react";

interface Question {
  sender: string;
  avatar: string;
  avatarColor: string;
  isBank: boolean;
  message: string;
  isFraud: boolean;
  explanation: string;
}

const questions: Question[] = [
  { sender: "Kaspi Bank", avatar: "KB", avatarColor: "#D32F2F", isBank: true, message: "Сіздің картаңызда күдікті операция анықталды. Блокировкаға жол бермеу үшін СМС-кодты бізге жіберіңіз немесе 8-800 нөміріне қоңырау шалыңыз.\nКод: 8847", isFraud: true, explanation: "Дұрыс жауап! Нақты банктер SMS-кодты ешқашан сұрамайды. «Блокировкадан сақтану үшін код жібер» — классикалық алаяқтық схема." },
  { sender: "Анар Сестра", avatar: "АС", avatarColor: "#7B1FA2", isBank: false, message: "Сәлем! Мен Алматы Молл-дан IPhone 16 Pro сатып алдым, 280 000 теңге болды. Сенің өлшемің бар ма? Берейін, менде екінші бір бар.", isFraud: false, explanation: "Бұл қарапайым хабарлама. Ешқандай сілтеме, ешқандай деректер сұрауы жоқ. Алаяқтық белгісі жоқ." },
  { sender: "Astana Finance", avatar: "AF", avatarColor: "#1565C0", isBank: true, message: "Құттықтаймыз! Сіз арнайы инвестиция бағдарламасына таңдалдыңыз. Айына 35% кірісті кепілдендіреміз. Тіркелу үшін: astana-finance-invest.ru", isFraud: true, explanation: "Алаяқтық! «Кепілдендірілген 35% пайда», белгісіз компания, .ru домені — барлығы алаяқтық белгілері." },
  { sender: "eGov.kz", avatar: "EG", avatarColor: "#2E7D32", isBank: true, message: "Сізге мемлекеттік тіркеу нөмірінізге байланысты хабарлама. Egov.kz жүйесіне кіру үшін сілтемені басыңыз: egov-kz-login.net/auth", isFraud: true, explanation: "Алаяқтық! Ресми egov.kz сайты ешқашан SMS арқылы сілтеме жібермейді. «egov-kz-login.net» — жалған домен." },
  { sender: "Dosym Arman", avatar: "DA", avatarColor: "#E65100", isBank: false, message: "Бауырым, ертең той. Kazmeat дүкенінен 10 кг қой еті алдым, бірге барамыз ба? 5000-ге 1 кг шыға береді осы жерде", isFraud: false, explanation: "Қарапайым хабарлама. Досыңнан ет алу ұсынысы — алаяқтық белгілері жоқ." },
  { sender: "Halyk Bank 🔒", avatar: "HB", avatarColor: "#388E3C", isBank: true, message: "ЕСКЕРТУ: Сіздің шотыңыздан 150,000 тг шығарылмақ. Тоқтату үшін ЕШКІМГЕ бермеңіз! Тек біздің оператор: +7(747)555-0199", isFraud: true, explanation: "Алаяқтық! «ЕШКІМГЕ бермеңіз» + белгісіз нөмір — бұл екі белгі бірден. Нақты Halyk Bank тек 595 нөміріне хабарлауды сұрайды." },
  { sender: "ҚР ІІМ", avatar: "МВД", avatarColor: "#1A237E", isBank: true, message: "Сізге қатысты қылмыстық іс ашылды. 2 сағат ішінде: mvd-kz-online.com сайтына кіріп жеке деректеріңізді растаңыз, әйтпесе қамауға алынасыз.", isFraud: true, explanation: "Алаяқтық! ҚР ІІМ ешқашан SMS арқылы «қамауға алынасыз» деп қоқымпайды. «mvd-kz-online.com» — жалған сайт." },
];

const GameSection = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<(boolean | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(10);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [timedOut, setTimedOut] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef<number | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    setTimeLeft(10);
    stopTimer();
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          stopTimer();
          setAnswered(true);
          setTimedOut(true);
          setLastCorrect(false);
          setResults((r) => [...r, null]);
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);
  }, [stopTimer]);

  useEffect(() => {
    if (!answered && !gameOver) startTimer();
    return stopTimer;
  }, [current, gameOver, answered, startTimer, stopTimer]);

  const handleAnswer = (userSaysFraud: boolean) => {
    if (answered) return;
    stopTimer();
    const correct = userSaysFraud === questions[current].isFraud;
    setAnswered(true);
    setLastCorrect(correct);
    setTimedOut(false);
    if (correct) setScore((s) => s + 1);
    setResults((r) => [...r, correct]);
  };

  const nextQuestion = () => {
    if (current + 1 >= questions.length) {
      setGameOver(true);
    } else {
      setCurrent((c) => c + 1);
      setAnswered(false);
      setLastCorrect(null);
      setTimedOut(false);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setResults([]);
    setTimeLeft(10);
    setAnswered(false);
    setLastCorrect(null);
    setTimedOut(false);
    setGameOver(false);
  };

  const q = questions[current];

  const getFinalMessage = () => {
    if (score === questions.length) return { title: "🏆 Керемет! Сен шынайы детектив!", desc: "Барлық алаяқтықты таптың. Бірақ есіңде болсын — алаяқтар да дамиды. Жақындарыңа осы ойынды ұсын." };
    if (score >= 5) return { title: "👍 Жақсы нәтиже!", desc: `${questions.length - score} сұрақта қате жіберілді. Нақты жағдайда бұл ақша жоғалту дегенді білдіруі мүмкін.` };
    if (score >= 3) return { title: "⚠️ Орташа деңгей", desc: "Сен осал топтасың. Схемалар бөлімін тағы бір рет оқып, ережелерді жаттап ал." };
    return { title: "🚨 Қауіп деңгейі жоғары!", desc: "Алаяқтыққа осал боласың. «Схемалар» мен «Белгілері» бөлімдерін мұқият оқы." };
  };

  return (
    <section id="game" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Интерактив</div>
        <h2 className="section-title">АЛАЯҚТЫ ТАП</h2>
        <p className="section-sub">Нақты хабарлама скриншоттарына қараңыз — алаяқтық па, жоқ па? 7 сұрақ, 10 секунд.</p>

        <div className="max-w-[680px] mx-auto">
          {/* Score chips */}
          <div className="flex gap-2 justify-center flex-wrap mb-5">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-base ${
                  results[i] === true ? "bg-green-light" : results[i] === false ? "bg-primary-light" : results[i] === null ? "bg-primary-light" : "bg-border"
                }`}
              >
                {results[i] === true ? "✓" : results[i] === false || results[i] === null ? "✗" : "·"}
              </div>
            ))}
          </div>

          {!gameOver ? (
            <>
              <div className="text-center text-[13px] font-bold text-muted-foreground mb-5">
                Сұрақ {current + 1} / {questions.length}
              </div>

              {/* Phone */}
              <div className="bg-foreground rounded-[32px] p-4 max-w-[340px] mx-auto mb-8 shadow-2xl">
                <div className="bg-[#f0f0f0] rounded-[20px] overflow-hidden">
                  <div className="bg-background px-4 py-3 flex items-center gap-2.5 border-b border-border">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0" style={{ background: q.avatarColor }}>
                      {q.avatar}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-foreground">{q.sender}</div>
                      <div className="text-[11px] text-muted-foreground">{q.isBank ? "SMS хабарлама" : "WhatsApp"}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="bg-background rounded-[4px_12px_12px_12px] px-3.5 py-3 text-sm text-foreground leading-relaxed shadow-sm">
                      {q.message.split("\n").map((line, i) => (
                        <span key={i}>{line}{i < q.message.split("\n").length - 1 && <br />}</span>
                      ))}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-2 text-right">Жаңа ғана</div>
                  </div>
                </div>
              </div>

              {/* Timer */}
              {!answered && (
                <div className="text-center mb-5">
                  <div className="h-1.5 bg-border rounded-full overflow-hidden max-w-[340px] mx-auto mb-1.5">
                    <div className="h-full rounded-full transition-all duration-100" style={{ width: `${(timeLeft / 10) * 100}%`, background: timeLeft > 5 ? "hsl(var(--primary))" : "#ff7043" }} />
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">{Math.ceil(timeLeft)} секунд</div>
                </div>
              )}

              {/* Result */}
              {answered && (
                <div className={`rounded-xl p-5 mb-6 text-center border ${lastCorrect ? "bg-green-light border-green" : "bg-primary-light border-primary"}`}>
                  <h3 className={`text-lg font-extrabold mb-1.5 ${lastCorrect ? "text-green" : "text-primary"}`}>
                    {timedOut ? "⏰ Уақыт өтті!" : lastCorrect ? "✓ Дұрыс!" : "✗ Қате!"}
                  </h3>
                  <p className="text-sm text-ink2 leading-relaxed">{q.explanation}</p>
                </div>
              )}

              {/* Controls */}
              <div className={`flex gap-3 justify-center ${answered ? "opacity-50 pointer-events-none" : ""}`}>
                <button onClick={() => handleAnswer(false)} className="px-8 py-3.5 bg-green text-primary-foreground rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity">
                  ✓ Қауіпсіз
                </button>
                <button onClick={() => handleAnswer(true)} className="px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity">
                  ✗ Алаяқтық!
                </button>
              </div>

              {answered && (
                <button onClick={nextQuestion} className="w-full mt-4 py-3.5 bg-foreground text-background rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity">
                  {current < questions.length - 1 ? "Келесі сұрақ →" : "Нәтижені көру →"}
                </button>
              )}
            </>
          ) : (
            <div className="text-center py-8 px-8 bg-surface rounded-2xl">
              <div className="font-display text-[80px] text-primary leading-none">{score}/{questions.length}</div>
              <h3 className="text-[22px] font-extrabold my-2">{getFinalMessage().title}</h3>
              <p className="text-[15px] text-ink2 mb-6">{getFinalMessage().desc}</p>
              <button onClick={restart} className="px-7 py-3.5 bg-primary text-primary-foreground rounded font-bold text-sm hover:bg-primary-dark transition-colors">
                Қайта ойнау
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
