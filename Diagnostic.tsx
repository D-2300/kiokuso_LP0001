import { useState, forwardRef } from 'react';

const LINE_URL = 'https://lin.ee/HVV0QJO';

const questions = [
  {
    id: 'area',
    text: '開業予定の広さは？',
    options: [
      { label: '〜10坪', value: 1, hint: 'ネイル・まつ毛・小型サロンなど' },
      { label: '10〜20坪', value: 2, hint: 'カフェ・美容室・ジムなど' },
      { label: '20〜35坪', value: 3, hint: '飲食店・ヨガ・フィットネスなど' },
      { label: '35坪以上', value: 4, hint: '大型案件（別途ご相談）' },
    ],
  },
  {
    id: 'type',
    text: '物件の状態は？',
    options: [
      { label: '居抜き（前テナントの内装が残っている）', value: 0, hint: 'そのまま使える部分が多い' },
      { label: 'スケルトン（コンクリートの躯体のみ）', value: 2, hint: '一から設計できる' },
      { label: 'まだ物件を探している', value: 1, hint: '物件未定でも相談OK' },
    ],
  },
  {
    id: 'diy',
    text: 'DIY・施主支給への関心は？',
    options: [
      { label: 'できる限り活用したい', value: -2, hint: '壁塗り・床貼りを一緒にやる。最大コスト削減' },
      { label: '一部やってみたい', value: -1, hint: '仕上げ工事の一部に参加する' },
      { label: 'プロに全部お任せしたい', value: 0, hint: 'その場合は費用が上がります' },
    ],
  },
  {
    id: 'equipment',
    text: '設備・什器の調達方法は？',
    options: [
      { label: 'ヤフオク・メルカリなど中古も使いたい', value: -2, hint: '大幅なコスト削減が可能' },
      { label: '新品中心で一部中古も検討できる', value: -1, hint: 'バランスが取れる' },
      { label: '新品で揃えたい', value: 0, hint: '費用は高くなりますが品質が安定' },
    ],
  },
  {
    id: 'timing',
    text: '開業時期のイメージは？',
    options: [
      { label: '半年以内に動きたい', value: 1, hint: '早め相談がおすすめ' },
      { label: '1年以内を目指している', value: 1, hint: '物件探しと並行して動けます' },
      { label: 'まだ構想中・情報収集したい', value: 0, hint: 'この段階からでも相談OK' },
    ],
  },
];

type ResultKey = 'minimal' | 'standard' | 'full' | 'large';

interface ResultData {
  key: ResultKey;
  label: string;
  range: string;
  rangeNote: string;
  message: string;
  adjustMessage: string;
  nextAction: string;
  color: string;
}

const results: ResultData[] = [
  {
    key: 'minimal',
    label: '居抜き活用・コスト最小化プラン',
    range: '約 80万〜 180万円',
    rangeNote: 'DIY・中古設備・施主支給を最大活用した場合の目安',
    message: '居抜きの強みとDIYを組み合わせれば、驚くほどのコストダウンが可能です。記憶荘が最も力を発揮できる領域です。',
    adjustMessage: '壁の塗装・床の一部貼り替えを施主が担当することで、さらに20〜30万円の削減が見込めます。',
    nextAction: 'LINEで物件の写真を1枚送るだけで、具体的な試算をお返しします。',
    color: '#4a7c59',
  },
  {
    key: 'standard',
    label: '標準施工プラン',
    range: '約 150万〜 350万円',
    rangeNote: '坪数・物件状態・DIY参加度により変動します',
    message: 'このレンジが記憶荘の最も得意とする領域です。中古設備の活用や部分的なDIYで、さらに費用を下げることもできます。',
    adjustMessage: '設備の一部を中古品に切り替えることで30〜80万円、DIY参加でさらに20〜50万円の削減が可能です。',
    nextAction: 'まずは図面か写真を送ってください。24〜48時間以内に明細つきの概算をお返しします。',
    color: '#C9A84C',
  },
  {
    key: 'full',
    label: 'フルビルドプラン',
    range: '約 250万〜 500万円',
    rangeNote: 'スケルトン物件への標準施工費用の目安',
    message: 'スケルトンからの施工は費用がかかりますが、DIY参加・中古設備活用の組み合わせで大幅に圧縮できます。設計段階からの工夫が重要です。',
    adjustMessage: '内装仕上げのDIY参加や厨房機器の中古活用で、50〜150万円の削減が現実的に可能です。',
    nextAction: '物件図面をLINEで送ってください。どこを削れるか、一緒に考えます。',
    color: '#8B7355',
  },
  {
    key: 'large',
    label: '大型案件（個別相談）',
    range: '500万円〜',
    rangeNote: '現時点での記憶荘の対応範囲外の可能性があります',
    message: '35坪以上の大型案件は、現時点では対応範囲外になる場合があります。まずはご相談ください。規模によっては対応できるケースもあります。',
    adjustMessage: '規模を縮小したフェーズ1（一部先行施工）という選択肢も検討できます。',
    nextAction: 'まずLINEでご相談ください。対応可否を正直にお伝えします。',
    color: '#555',
  },
];

function IllustrationCard({ type, color }: { type: ResultKey; color: string }) {
  if (type === 'minimal') {
    return (
      <svg viewBox="0 0 280 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="180" fill="#F0EAD8" rx="2"/>
        <rect x="60" y="50" width="160" height="100" fill="#FDFBF8" stroke="#1A1208" strokeWidth="1.5"/>
        <rect x="60" y="50" width="160" height="22" fill="#1A1208"/>
        <text x="140" y="66" textAnchor="middle" fontFamily="serif" fontSize="9" fill={color}>OPEN</text>
        <rect x="110" y="100" width="35" height="50" rx="2" fill="#F0EAD8" stroke="#1A1208" strokeWidth="1"/>
        <circle cx="141" cy="126" r="2" fill="#1A1208"/>
        <rect x="165" y="88" width="40" height="35" rx="1" fill="#e8f4fd" stroke="#1A1208" strokeWidth="1"/>
        <line x1="185" y1="88" x2="185" y2="123" stroke="#1A1208" strokeWidth="0.5"/>
        <line x1="165" y1="106" x2="205" y2="106" stroke="#1A1208" strokeWidth="0.5"/>
        <circle cx="42" cy="100" r="12" fill="#F0EAD8" stroke="#1A1208" strokeWidth="1.5"/>
        <line x1="42" y1="112" x2="42" y2="148" stroke="#1A1208" strokeWidth="2"/>
        <line x1="42" y1="120" x2="28" y2="108" stroke="#1A1208" strokeWidth="1.5"/>
        <line x1="42" y1="120" x2="56" y2="105" stroke="#1A1208" strokeWidth="1.5"/>
        <path d="M48 150 Q42 155 36 150" stroke="#1A1208" strokeWidth="1.5" fill="none"/>
        <path d="M38 98 Q42 103 46 98" stroke="#1A1208" strokeWidth="1" fill="none"/>
        <circle cx="39" cy="96" r="1" fill="#1A1208"/>
        <circle cx="45" cy="96" r="1" fill="#1A1208"/>
        <rect x="55" y="68" width="70" height="22" rx="4" fill={color} opacity="0.15" stroke={color} strokeWidth="0.8"/>
        <text x="90" y="83" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#1A1208">開業できた！</text>
        <text x="220" y="45" fontSize="16" fill={color} opacity="0.4">★</text>
        <text x="235" y="62" fontSize="10" fill={color} opacity="0.3">★</text>
        <path d="M240 90 Q244 86 248 90 Q252 86 256 90 L248 100 Z" fill={color} opacity="0.3"/>
      </svg>
    );
  }

  if (type === 'standard') {
    return (
      <svg viewBox="0 0 280 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="180" fill="#F0EAD8" rx="2"/>
        <rect x="70" y="40" width="140" height="115" fill="#FDFBF8" stroke="#1A1208" strokeWidth="1.5"/>
        <rect x="70" y="40" width="140" height="28" fill="#1A1208"/>
        <text x="140" y="59" textAnchor="middle" fontFamily="serif" fontSize="10" fill={color}>Hair Salon</text>
        <rect x="115" y="102" width="50" height="53" rx="2" fill="#F0EAD8" stroke="#1A1208" strokeWidth="1"/>
        <circle cx="160" cy="130" r="2.5" fill="#1A1208"/>
        <rect x="78" y="80" width="28" height="40" rx="1" fill="#e8f4fd" stroke="#1A1208" strokeWidth="1"/>
        <rect x="174" y="80" width="28" height="40" rx="1" fill="#e8f4fd" stroke="#1A1208" strokeWidth="1"/>
        <rect x="136" y="68" width="8" height="12" fill="#C9A84C" opacity="0.6"/>
        <circle cx="38" cy="105" r="11" fill="#F0EAD8" stroke="#1A1208" strokeWidth="1.5"/>
        <line x1="38" y1="116" x2="38" y2="148" stroke="#1A1208" strokeWidth="2"/>
        <line x1="38" y1="122" x2="25" y2="112" stroke="#1A1208" strokeWidth="1.5"/>
        <line x1="38" y1="122" x2="51" y2="112" stroke="#1A1208" strokeWidth="1.5"/>
        <path d="M44 148 Q38 153 32 148" stroke="#1A1208" strokeWidth="1.5" fill="none"/>
        <path d="M34 103 Q38 108 42 103" stroke="#1A1208" strokeWidth="1" fill="none"/>
        <circle cx="242" cy="105" r="11" fill="#F0EAD8" stroke="#1A1208" strokeWidth="1.5"/>
        <line x1="242" y1="116" x2="242" y2="148" stroke="#1A1208" strokeWidth="2"/>
        <line x1="242" y1="122" x2="229" y2="110" stroke="#1A1208" strokeWidth="1.5"/>
        <line x1="242" y1="122" x2="255" y2="112" stroke="#1A1208" strokeWidth="1.5"/>
        <path d="M248 148 Q242 153 236 148" stroke="#1A1208" strokeWidth="1.5" fill="none"/>
        <path d="M238 103 Q242 108 246 103" stroke="#1A1208" strokeWidth="1" fill="none"/>
        <rect x="52" y="72" width="80" height="22" rx="4" fill={color} opacity="0.12" stroke={color} strokeWidth="0.8"/>
        <text x="92" y="87" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#1A1208">予算内で理想通り！</text>
        <rect x="18" y="55" width="5" height="5" fill={color} opacity="0.4" transform="rotate(30 20 57)"/>
        <rect x="250" y="50" width="4" height="4" fill={color} opacity="0.4" transform="rotate(-20 252 52)"/>
        <circle cx="22" cy="70" r="2.5" fill={color} opacity="0.3"/>
        <circle cx="258" cy="68" r="2" fill={color} opacity="0.3"/>
      </svg>
    );
  }

  if (type === 'full') {
    return (
      <svg viewBox="0 0 280 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="180" fill="#F0EAD8" rx="2"/>
        <rect x="80" y="45" width="120" height="110" fill="none" stroke="#1A1208" strokeWidth="2" strokeDasharray="4 2"/>
        <line x1="80" y1="85" x2="200" y2="85" stroke="#1A1208" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
        <line x1="80" y1="125" x2="200" y2="125" stroke="#1A1208" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
        <line x1="140" y1="45" x2="140" y2="155" stroke="#1A1208" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
        <rect x="90" y="55" width="40" height="25" fill={color} opacity="0.08" stroke={color} strokeWidth="0.5"/>
        <rect x="150" y="55" width="40" height="25" fill={color} opacity="0.08" stroke={color} strokeWidth="0.5"/>
        <text x="140" y="140" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#6A6050">Under Construction</text>
        <circle cx="42" cy="90" r="12" fill="#F0EAD8" stroke="#1A1208" strokeWidth="1.5"/>
        <line x1="42" y1="102" x2="42" y2="140" stroke="#1A1208" strokeWidth="2"/>
        <line x1="42" y1="112" x2="30" y2="125" stroke="#1A1208" strokeWidth="1.5"/>
        <rect x="44" y="108" width="22" height="16" rx="1" fill="white" stroke="#1A1208" strokeWidth="1"/>
        <line x1="47" y1="112" x2="63" y2="112" stroke="#C9A84C" strokeWidth="0.8"/>
        <line x1="47" y1="116" x2="63" y2="116" stroke="#C9A84C" strokeWidth="0.8"/>
        <line x1="47" y1="120" x2="58" y2="120" stroke="#C9A84C" strokeWidth="0.8"/>
        <path d="M38 140 Q42 145 46 140" stroke="#1A1208" strokeWidth="1.5" fill="none"/>
        <path d="M38 88 Q42 93 46 88" stroke="#1A1208" strokeWidth="1" fill="none"/>
        <circle cx="39" cy="86" r="1" fill="#1A1208"/>
        <circle cx="45" cy="86" r="1" fill="#1A1208"/>
        <rect x="58" y="62" width="88" height="22" rx="4" fill={color} opacity="0.12" stroke={color} strokeWidth="0.8"/>
        <text x="102" y="77" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#1A1208">ゼロから作れる！</text>
        <text x="230" y="60" fontSize="14" fill={color} opacity="0.5">✦</text>
        <text x="220" y="80" fontSize="8" fill={color} opacity="0.3">✦</text>
        <text x="245" y="75" fontSize="10" fill={color} opacity="0.4">✦</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#F0EAD8" rx="2"/>
      <rect x="90" y="50" width="100" height="80" rx="16" fill="#1A1208"/>
      <rect x="98" y="58" width="84" height="64" rx="12" fill="#06C755"/>
      <text x="140" y="98" textAnchor="middle" fontFamily="serif" fontSize="11" fill="white">まずは</text>
      <text x="140" y="113" textAnchor="middle" fontFamily="serif" fontSize="11" fill="white">ご相談を</text>
      <circle cx="55" cy="95" r="12" fill="#F0EAD8" stroke="#1A1208" strokeWidth="1.5"/>
      <line x1="55" y1="107" x2="55" y2="145" stroke="#1A1208" strokeWidth="2"/>
      <line x1="55" y1="117" x2="42" y2="125" stroke="#1A1208" strokeWidth="1.5"/>
      <line x1="55" y1="117" x2="68" y2="108" stroke="#1A1208" strokeWidth="1.5"/>
      <path d="M61 145 Q55 150 49 145" stroke="#1A1208" strokeWidth="1.5" fill="none"/>
      <path d="M51 93 Q55 97 59 93" stroke="#1A1208" strokeWidth="1" fill="none"/>
      <circle cx="225" cy="95" r="12" fill="#F0EAD8" stroke="#1A1208" strokeWidth="1.5"/>
      <line x1="225" y1="107" x2="225" y2="145" stroke="#1A1208" strokeWidth="2"/>
      <line x1="225" y1="117" x2="212" y2="108" stroke="#1A1208" strokeWidth="1.5"/>
      <line x1="225" y1="117" x2="238" y2="125" stroke="#1A1208" strokeWidth="1.5"/>
      <path d="M231 145 Q225 150 219 145" stroke="#1A1208" strokeWidth="1.5" fill="none"/>
      <path d="M221 93 Q225 97 229 93" stroke="#1A1208" strokeWidth="1" fill="none"/>
      <line x1="68" y1="100" x2="90" y2="100" stroke="#555" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="190" y1="100" x2="213" y2="100" stroke="#555" strokeWidth="1" strokeDasharray="3 2"/>
    </svg>
  );
}

function calcResult(answers: Record<string, number>): ResultData {
  const areaVal = answers['area'] ?? 2;
  const typeVal = answers['type'] ?? 1;
  const diyVal = answers['diy'] ?? 0;
  const equipVal = answers['equipment'] ?? 0;

  const total = areaVal + typeVal + diyVal + equipVal;

  if (areaVal === 4) return results[3];
  if (total <= -1) return results[0];
  if (total <= 2) return results[1];
  return results[2];
}

const Diagnostic = forwardRef<HTMLElement>((_, ref) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [animating, setAnimating] = useState(false);

  const currentQ = questions[step];
  const result = showResult ? calcResult(answers) : null;

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    const selectedValue = currentQ.options[selectedIndex].value;
    const newAnswers = { ...answers, [currentQ.id]: selectedValue };
    setAnswers(newAnswers);
    setAnimating(true);
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
        setSelectedIndex(null);
      } else {
        setShowResult(true);
      }
      setAnimating(false);
    }, 280);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
    setSelectedIndex(null);
    setAnimating(false);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="diagnostic"
      className="bg-aged-cream py-20 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Chapter 04 — Diagnostic</div>
          <h2
            className="font-cormorant font-semibold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#1A1208' }}
          >
            現在地診断
          </h2>
          <p className="sub-text" style={{ maxWidth: '480px', margin: '0 auto' }}>
            5問に答えるだけで、あなたの状況に合った概算予算レンジをお伝えします。<br />
            <span style={{ color: '#C9A84C', fontSize: '0.82rem' }}>DIY・施主支給の活用で、大幅に費用を下げられます。</span>
          </p>
        </div>

        <div
          className="card-elevated border-book overflow-hidden"
          style={{
            background: '#FDFBF8',
            borderRadius: '2px',
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 0.28s ease, transform 0.28s ease',
          }}
        >
          {!showResult ? (
            <>
              <div style={{ background: '#1A1208', padding: '0.9rem 1.8rem' }}>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="font-elite"
                    style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.6)' }}
                  >
                    QUESTION {step + 1} / {questions.length}
                  </span>
                  <span className="font-noto" style={{ fontSize: '0.68rem', color: '#6A6050' }}>
                    {Math.round(((step) / questions.length) * 100)}% 完了
                  </span>
                </div>
                <div
                  style={{
                    height: '2px',
                    background: 'rgba(201,168,76,0.15)',
                    borderRadius: '1px',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${((step) / questions.length) * 100}%`,
                      background: '#C9A84C',
                      borderRadius: '1px',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>

              <div className="p-8">
                <h3
                  className="font-cormorant font-semibold mb-6"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#1A1208', lineHeight: '1.5' }}
                >
                  {currentQ.text}
                </h3>

                <div className="flex flex-col gap-3 mb-8">
                  {currentQ.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className="text-left"
                      style={{
                        padding: '1rem 1.4rem',
                        border: selectedIndex === i
                          ? '1.5px solid #C9A84C'
                          : '1px solid rgba(26,18,8,0.12)',
                        background: selectedIndex === i
                          ? 'rgba(201,168,76,0.06)'
                          : '#FDFBF8',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        transition: 'all 0.18s ease',
                        boxShadow: selectedIndex === i
                          ? '0 0 0 3px rgba(201,168,76,0.12)'
                          : 'none',
                      }}
                    >
                      <div
                        className="font-noto"
                        style={{
                          fontSize: '0.9rem',
                          color: '#1A1208',
                          marginBottom: '0.2rem',
                          fontWeight: selectedIndex === i ? 600 : 400,
                        }}
                      >
                        {opt.label}
                      </div>
                      {opt.hint && (
                        <div
                          className="font-noto"
                          style={{ fontSize: '0.72rem', color: selectedIndex === i ? '#C9A84C' : '#6A6050' }}
                        >
                          {opt.hint}
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  {step > 0 ? (
                    <button
                      onClick={() => {
                        const prevStep = step - 1;
                        setStep(prevStep);
                        const prevQ = questions[prevStep];
                        const prevAnswer = answers[prevQ.id];
                        if (prevAnswer !== undefined) {
                          const prevIndex = prevQ.options.findIndex(o => o.value === prevAnswer);
                          setSelectedIndex(prevIndex >= 0 ? prevIndex : null);
                        } else {
                          setSelectedIndex(null);
                        }
                      }}
                      className="font-noto"
                      style={{ fontSize: '0.78rem', color: '#6A6050', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      ← 前の質問に戻る
                    </button>
                  ) : <div />}
                  <button
                    onClick={handleNext}
                    disabled={selectedIndex === null}
                    style={{
                      padding: '0.9rem 2.4rem',
                      background: selectedIndex !== null ? '#1A1208' : 'rgba(26,18,8,0.15)',
                      color: selectedIndex !== null ? '#C9A84C' : '#999',
                      border: '1px solid ' + (selectedIndex !== null ? '#C9A84C' : 'transparent'),
                      borderRadius: '2px',
                      fontFamily: 'Noto Serif JP, serif',
                      fontSize: '0.85rem',
                      cursor: selectedIndex !== null ? 'pointer' : 'default',
                      letterSpacing: '0.08em',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {step < questions.length - 1 ? '次の質問へ →' : '結果を見る →'}
                  </button>
                </div>
              </div>
            </>
          ) : result && (
            <>
              <div style={{ background: '#1A1208', padding: '0.9rem 1.8rem' }}>
                <span
                  className="font-elite"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.6)' }}
                >
                  DIAGNOSTIC RESULT
                </span>
              </div>

              <div className="p-8">
                <div
                  className="mb-6 border-book card-elevated overflow-hidden"
                  style={{
                    borderRadius: '2px',
                    height: '200px',
                    background: '#F0EAD8',
                  }}
                >
                  <IllustrationCard type={result.key} color={result.color} />
                </div>

                <div
                  className="font-elite mb-1"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: result.color }}
                >
                  {result.label}
                </div>

                <div
                  className="font-cormorant font-semibold mb-1"
                  style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', color: '#1A1208', lineHeight: '1.2' }}
                >
                  {result.range}
                </div>
                <div
                  className="font-noto mb-5"
                  style={{ fontSize: '0.72rem', color: '#6A6050' }}
                >
                  {result.rangeNote}
                </div>

                <p
                  className="font-noto mb-4"
                  style={{
                    fontSize: '0.88rem',
                    color: '#1A1208',
                    lineHeight: '2',
                    borderLeft: '2px solid ' + result.color,
                    paddingLeft: '1rem',
                  }}
                >
                  {result.message}
                </p>

                <div
                  className="mb-6 p-4"
                  style={{
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '2px',
                  }}
                >
                  <div
                    className="font-elite mb-1"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#C9A84C' }}
                  >
                    DIY · 施主支給で調整できます
                  </div>
                  <p
                    className="font-noto"
                    style={{ fontSize: '0.82rem', color: '#3A2E20', lineHeight: '1.85' }}
                  >
                    {result.adjustMessage}
                  </p>
                </div>

                <div
                  className="mb-6 font-noto"
                  style={{ fontSize: '0.82rem', color: '#6A6050', lineHeight: '1.85' }}
                >
                  {result.nextAction}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19.365 9.89c.50 0 .902.402.902.9s-.403.9-.902.9h-2.26v1.45h2.26c.5 0 .902.403.902.9 0 .5-.403.9-.902.9H16.2c-.498 0-.9-.4-.9-.9V9.89c0-.498.402-.9.9-.9h3.165zm-5.055 5.05c0 .376-.232.714-.584.856-.109.044-.22.064-.33.064-.255 0-.504-.104-.683-.296l-2.92-3.2v2.576c0 .498-.403.9-.9.9-.5 0-.9-.402-.9-.9V9.89c0-.376.232-.713.583-.856.352-.14.752-.063 1.016.197l2.918 3.2V9.89c0-.498.4-.9.9-.9.497 0 .9.402.9.9v5.05zm-6.555 0c0 .498-.402.9-.9.9-.5 0-.902-.402-.902-.9V9.89c0-.498.402-.9.9-.9.5 0 .902.402.902.9v5.05zM12 2C6.477 2 2 6.084 2 11.1c0 2.564 1.073 4.878 2.813 6.56L4 22l4.588-1.22C9.64 21.25 10.8 21.5 12 21.5 17.523 21.5 22 17.416 22 11.1 22 5.584 17.523 2 12 2z"/>
                    </svg>
                    LINEで詳しく相談する
                  </a>
                  <button
                    onClick={handleReset}
                    className="btn-ghost"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    ↺ もう一度診断する
                  </button>
                </div>

                <p
                  className="font-noto text-center mt-4"
                  style={{ fontSize: '0.68rem', color: '#6A6050' }}
                >
                  この概算結果は参考値です。正確な見積もりはLINEにてご相談ください。
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
});

Diagnostic.displayName = 'Diagnostic';

export default Diagnostic;
