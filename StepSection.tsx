const steps = [
  {
    num: 'Step 0',
    label: '0',
    title: 'LINEで一言送る',
    body: '「開業を考えています」の一言で十分。物件未定・構想段階でも構いません。営業の電話は一切かけません。',
    note: '断りはLINE1本でOK。フェードアウトも歓迎。',
    svgScene: (
      <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="110" fill="#fafaf8"/>
        <rect x="20" y="15" width="120" height="80" rx="12" fill="#f0f0f0" stroke="#1a1208" strokeWidth="1.5"/>
        <rect x="30" y="30" width="100" height="50" rx="8" fill="white" stroke="#e0e0e0" strokeWidth="1"/>
        <rect x="38" y="38" width="70" height="20" rx="4" fill="#06C755"/>
        <text x="73" y="52" textAnchor="middle" fontFamily="serif" fontSize="9" fill="white">LINE</text>
        <text x="80" y="75" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#6a6050">「開業を考えています」</text>
      </svg>
    ),
  },
  {
    num: 'Step 1',
    label: '1',
    title: '現在地ヒアリング',
    body: 'LINEまたはオンラインで30分程度。業態・物件条件・開業時期・予算感などをお聞きします。この段階で概算レンジをお伝えします。',
    note: 'ここから先も費用は一切かかりません。',
    svgScene: (
      <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="110" fill="#fafaf8"/>
        <circle cx="55" cy="45" r="20" fill="#f0ead8" stroke="#1a1208" strokeWidth="1.5"/>
        <text x="55" y="49" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#1a1208">A</text>
        <circle cx="105" cy="45" r="20" fill="#1a1208"/>
        <text x="105" y="49" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#C9A84C">記憶荘</text>
        <path d="M75 40 Q80 30 85 40" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
        <path d="M85 50 Q80 60 75 50" stroke="#6a6050" strokeWidth="1" fill="none"/>
        <text x="80" y="85" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#6a6050">ヒアリング（30分）</text>
      </svg>
    ),
  },
  {
    num: 'Step 2',
    label: '2',
    title: '物件図面を送る',
    body: '気になる物件の図面や写真をLINEで送るだけ。現地確認なしでも概算見積もりが作れます。複数物件を比較することも可能です。',
    note: '図面がなくても、写真と坪数がわかれば試算できます。',
    svgScene: (
      <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="110" fill="#fafaf8"/>
        <rect x="25" y="20" width="60" height="70" rx="2" fill="white" stroke="#1a1208" strokeWidth="1.5"/>
        <rect x="30" y="28" width="50" height="35" fill="#f0ead8" stroke="#d4c9b0" strokeWidth="0.5"/>
        <line x1="30" y1="42" x2="80" y2="42" stroke="#d4c9b0" strokeWidth="0.5"/>
        <line x1="55" y1="28" x2="55" y2="63" stroke="#d4c9b0" strokeWidth="0.5"/>
        <text x="55" y="76" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#6a6050">図面</text>
        <path d="M88 45 L108 45" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <polygon points="106,41 114,45 106,49" fill="#C9A84C"/>
        <text x="100" y="40" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#C9A84C">送信</text>
        <rect x="115" y="28" width="25" height="35" rx="2" fill="#1a1208"/>
        <text x="127" y="49" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#C9A84C">記憶荘</text>
      </svg>
    ),
  },
  {
    num: 'Step 3',
    label: '3',
    title: '概算見積もりの提示',
    body: '工程別・材料別の明細見積もりを提示します。「一式」という項目は使いません。他社見積もりとの比較にもそのまま使えます。',
    note: '相見積もり歓迎。比較してから決めてください。',
    svgScene: (
      <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="110" fill="#fafaf8"/>
        <rect x="20" y="15" width="120" height="80" rx="1" fill="white" stroke="#1a1208" strokeWidth="1.5"/>
        <rect x="20" y="15" width="120" height="20" fill="#1a1208"/>
        <text x="80" y="29" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#C9A84C">概算見積書</text>
        <line x1="20" y1="45" x2="140" y2="45" stroke="#e0d8cc" strokeWidth="0.5"/>
        <line x1="20" y1="58" x2="140" y2="58" stroke="#e0d8cc" strokeWidth="0.5"/>
        <line x1="20" y1="71" x2="140" y2="71" stroke="#e0d8cc" strokeWidth="0.5"/>
        <text x="30" y="54" fontFamily="serif" fontSize="6" fill="#1a1208">造作工事</text>
        <text x="110" y="54" fontFamily="serif" fontSize="6" fill="#1a1208" textAnchor="end">¥450,000</text>
        <text x="30" y="67" fontFamily="serif" fontSize="6" fill="#1a1208">電気工事</text>
        <text x="110" y="67" fontFamily="serif" fontSize="6" fill="#1a1208" textAnchor="end">¥280,000</text>
        <text x="30" y="80" fontFamily="serif" fontSize="6" fill="#1a1208">設備工事</text>
        <text x="110" y="80" fontFamily="serif" fontSize="6" fill="#1a1208" textAnchor="end">¥320,000</text>
      </svg>
    ),
  },
  {
    num: 'Step 4',
    label: '4',
    title: '正式発注・施工',
    body: '内容・金額にご納得いただけた場合のみ、正式契約です。施工中も進捗写真をLINEで随時共有します。',
    note: '断りはここでもLINE1本で構いません。',
    svgScene: (
      <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="110" fill="#fafaf8"/>
        <rect x="30" y="20" width="100" height="70" rx="1" fill="#f0ead8" stroke="#1a1208" strokeWidth="1.5"/>
        <rect x="40" y="30" width="80" height="50" fill="#e8dfc8" stroke="#1a1208" strokeWidth="1"/>
        <line x1="40" y1="50" x2="120" y2="50" stroke="#1a1208" strokeWidth="0.5"/>
        <line x1="80" y1="30" x2="80" y2="80" stroke="#1a1208" strokeWidth="0.5"/>
        <rect x="85" y="55" width="28" height="20" fill="#C9A84C"/>
        <text x="99" y="68" textAnchor="middle" fontFamily="serif" fontSize="8" fill="white">施工中</text>
      </svg>
    ),
  },
  {
    num: 'After',
    label: '✓',
    title: 'アフターフォロー',
    body: '竣工後1ヶ月以内の不具合は無償対応。開業後の追加工事・テナント退去時の原状回復も対応します。',
    note: 'LINE1本で連絡できる関係が続きます。',
    svgScene: (
      <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="110" fill="#fafaf8"/>
        <rect x="25" y="15" width="110" height="80" rx="2" fill="#1a1208"/>
        <rect x="33" y="23" width="94" height="64" rx="1" fill="#f0ead8"/>
        <text x="80" y="48" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#1a1208">OPEN</text>
        <text x="80" y="64" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#6a6050">記憶荘施工</text>
        <circle cx="80" cy="84" r="6" fill="#C9A84C"/>
        <text x="80" y="88" textAnchor="middle" fontFamily="serif" fontSize="8" fill="white">✓</text>
      </svg>
    ),
  },
];

export default function StepSection() {
  return (
    <section className="bg-aged-paper py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mb-3">Chapter 05 — Process</div>
          <h2 className="section-heading mb-4">
            <span className="gold-underline">依頼の流れ</span>
          </h2>
          <p className="sub-text max-w-lg mx-auto">
            LINEの一言から始まり、竣工後まで。すべてのステップが透明です。
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute hidden md:block"
            style={{
              left: '28px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.2))',
            }}
          />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch gap-0 md:gap-6">

                <div
                  className="hidden md:flex flex-shrink-0 items-start pt-5"
                  style={{ width: '58px' }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: step.label === '✓' ? '#C9A84C' : '#1A1208',
                      border: '2px solid #C9A84C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: step.label === '✓' ? '#1A1208' : '#C9A84C',
                      boxShadow: '0 0 0 4px #F7F4EF, 0 0 0 5px rgba(201,168,76,0.3)',
                      zIndex: 1,
                      position: 'relative',
                    }}
                  >
                    {step.label}
                  </div>
                </div>

                <div
                  className="card-elevated border-book flex-1 flex flex-col md:flex-row items-stretch"
                  style={{
                    background: '#FDFBF8',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-full md:w-44"
                    style={{ borderBottom: '1px solid rgba(26,18,8,0.1)' }}
                  >
                    <div
                      className="md:hidden px-4 py-2 flex items-center gap-2"
                      style={{
                        background: '#1A1208',
                        borderBottom: '1px solid rgba(201,168,76,0.3)',
                      }}
                    >
                      <span
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: step.label === '✓' ? '#C9A84C' : 'transparent',
                          border: '1.5px solid #C9A84C',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '0.7rem',
                          color: step.label === '✓' ? '#1A1208' : '#C9A84C',
                        }}
                      >
                        {step.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Special Elite, monospace',
                          fontSize: '0.6rem',
                          letterSpacing: '0.15em',
                          color: 'rgba(201,168,76,0.7)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {step.num}
                      </span>
                    </div>

                    <div
                      className="hidden md:flex px-3 py-2 items-center"
                      style={{
                        background: '#1A1208',
                        borderBottom: '1px solid rgba(201,168,76,0.2)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Special Elite, monospace',
                          fontSize: '0.55rem',
                          letterSpacing: '0.2em',
                          color: 'rgba(201,168,76,0.7)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {step.num}
                      </span>
                    </div>

                    <div className="p-0 h-32 md:h-36">
                      {step.svgScene}
                    </div>
                  </div>

                  <div
                    className="flex-1 p-5 md:p-6 flex flex-col justify-center"
                    style={{ borderLeft: '1px solid rgba(26,18,8,0.08)' }}
                  >
                    <h3
                      className="font-cormorant font-semibold mb-2"
                      style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                        color: '#1A1208',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-noto text-sm mb-4"
                      style={{ color: '#3A2E20', lineHeight: '1.9' }}
                    >
                      {step.body}
                    </p>
                    <div
                      className="inline-block text-xs px-3 py-2"
                      style={{
                        borderLeft: '2px solid #C9A84C',
                        color: '#6A6050',
                        fontFamily: 'Noto Serif JP, serif',
                        background: 'rgba(201,168,76,0.05)',
                        lineHeight: '1.7',
                      }}
                    >
                      {step.note}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
