const LINE_URL = 'https://lin.ee/HVV0QJO';

const LineSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="white">
    <path d="M12 2C6.477 2 2 6.124 2 11.25c0 2.73 1.28 5.17 3.3 6.87-.14.5-.9 3.12-.93 3.33 0 0-.02.14.07.2.09.06.2.02.2.02.27-.04 3.16-2.08 3.63-2.4.77.18 1.57.27 2.39.27 5.524 0 10-4.124 10-9.25C22 6.124 17.524 2 12 2z"/>
  </svg>
);

const promises = [
  {
    num: 'I',
    title: '見積もりの根拠を、全部示す',
    body: '坪単価・工期・材料費の内訳を、すべてオープンにします。「なぜこの金額か」を説明できない項目は、一切請求しません。仙台市内で唯一、メニュー型で坪単価を公開しています。',
    sub: '業態別坪単価を公開 ── 仙台市内で唯一、明細で提示',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="24" rx="1" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="4" y1="16" x2="36" y2="16" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="14" y1="8" x2="14" y2="32" stroke="#C9A84C" strokeWidth="1.5"/>
        <text x="8" y="27" fontFamily="serif" fontSize="8" fill="#C9A84C" fontWeight="bold">¥</text>
        <text x="18" y="27" fontFamily="serif" fontSize="7" fill="#6A6050">公開</text>
        <circle cx="32" cy="12" r="4" fill="#C9A84C"/>
        <polyline points="30,12 31.5,13.5 34,10.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    num: 'II',
    title: '融資承認前から、動く',
    body: '物件が未定でも、融資が通っていなくても相談を受けます。日本政策金融公庫の審査に使える精度の概算見積書を無料で作成します。「融資を通すには見積書が必要、でも見積書を取るには物件が必要」という矛盾を、記憶荘が解消します。',
    sub: 'Step 0（¥0）から対応 ── 物件未定・資金未確定でも受付',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="20" y1="10" x2="20" y2="20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="20" x2="27" y2="24" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2" fill="#C9A84C"/>
        <path d="M8 34 Q20 30 32 34" stroke="#C9A84C" strokeWidth="1" fill="none" strokeDasharray="2,2"/>
      </svg>
    ),
  },
  {
    num: 'III',
    title: '工事中、毎日 LINE で報告する',
    body: '施工中は写真と一言コメントを毎日 LINE で送ります。「現場に行けない」「本当に進んでいるか不安」という気持ちに、徹底的に応えます。施主・ご家族・関係者全員をグループに招待できます。',
    sub: 'LINEグループで施主・関係者全員に共有 ── オープン後も継続',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="28" height="22" rx="4" stroke="#C9A84C" strokeWidth="1.5"/>
        <path d="M13 30 L20 36 L27 30" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="13" cy="19" r="2" fill="#C9A84C"/>
        <circle cx="20" cy="19" r="2" fill="#C9A84C"/>
        <circle cx="27" cy="19" r="2" fill="#C9A84C"/>
      </svg>
    ),
  },
];

export default function WhySection() {
  return (
    <section style={{ background: '#0F0F0F' }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Chapter 03 — Promise</div>
          <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F8F5F2', letterSpacing: '0.02em' }}>
            <span className="gold-underline">3つの約束</span>
          </h2>
          <p className="font-noto text-sm max-w-lg mx-auto" style={{ color: '#999999', lineHeight: '1.8' }}>
            記憶荘が守り続けているブランドの核心です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promises.map((p, i) => (
            <div
              key={i}
              className="p-8 flex flex-col"
              style={{
                background: '#141414',
                border: '1px solid rgba(201,168,76,0.25)',
                position: 'relative',
              }}
            >
              <div
                className="font-elite text-xs mb-6"
                style={{ color: '#C9A84C', letterSpacing: '0.3em' }}
              >
                Promise {p.num}
              </div>

              <div className="mb-5">{p.icon}</div>

              <h3
                className="font-cormorant font-semibold mb-3"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#F8F5F2' }}
              >
                {p.title}
              </h3>

              <p className="font-noto text-sm mb-5" style={{ color: '#999999', lineHeight: '1.85', flex: 1 }}>
                {p.body}
              </p>

              <div
                className="text-xs px-3 py-2 mt-auto"
                style={{
                  borderLeft: '2px solid #C9A84C',
                  color: '#888888',
                  fontFamily: 'Noto Serif JP, serif',
                  lineHeight: '1.6',
                  background: 'rgba(201,168,76,0.06)',
                }}
              >
                {p.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div
            className="w-full max-w-xl px-6 py-5 text-center"
            style={{ background: 'rgba(201,168,76,0.06)', border: '1.5px solid rgba(201,168,76,0.3)' }}
          >
            <p className="text-xs mb-4" style={{ color: '#888888', fontFamily: 'Noto Serif JP, serif', lineHeight: '1.7' }}>
              強引な営業・電話勧誘は一切しません。物件未定・相見積もり前提OK。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line justify-center text-sm inline-flex">
              <LineSvg size={16} />
              LINEで無料相談（断ってOK）
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
