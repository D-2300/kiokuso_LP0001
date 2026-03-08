const LINE_URL = 'https://lin.ee/HVV0QJO';

const LineSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="white">
    <path d="M12 2C6.477 2 2 6.124 2 11.25c0 2.73 1.28 5.17 3.3 6.87-.14.5-.9 3.12-.93 3.33 0 0-.02.14.07.2.09.06.2.02.2.02.27-.04 3.16-2.08 3.63-2.4.77.18 1.57.27 2.39.27 5.524 0 10-4.124 10-9.25C22 6.124 17.524 2 12 2z"/>
  </svg>
);

const panels = [
  {
    number: '01',
    title: '費用が読めない',
    scene: '物件を調べるAさん',
    dialogue: '「飲食店の開業費は500万〜3,500万円って書いてある。じゃあ自分のケースは？」',
    caption: '仙台市内の内装業者は、ほぼ全社が坪単価を非公開にしています。',
    thought: '融資の申込みもできない',
    svgScene: (
      <svg viewBox="0 0 200 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" fill="#fafaf8"/>
        <rect x="20" y="20" width="160" height="90" fill="#f0ead8" stroke="#1a1208" strokeWidth="1.5"/>
        <rect x="35" y="35" width="130" height="60" fill="#e8e0cc" stroke="#1a1208" strokeWidth="1"/>
        <text x="100" y="68" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#1a1208">？</text>
        <text x="100" y="82" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#6a6050">坪単価 ￥???,???</text>
        <circle cx="100" cy="118" r="12" fill="#1a1208"/>
        <text x="100" y="122" textAnchor="middle" fontFamily="serif" fontSize="9" fill="white">A</text>
        <path d="M85 108 Q100 95 115 108" stroke="#1a1208" strokeWidth="1" fill="none"/>
        <text x="100" y="136" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#6a6050">物件探し中</text>
      </svg>
    ),
  },
  {
    number: '02',
    title: '断るのが怖い',
    scene: 'スマホを前に固まるAさん',
    dialogue: '「問い合わせたら最後、強引な営業が始まりそう。断ったら失礼かもしれない……」',
    caption: '「相談だけ」のつもりが、気づけば契約を迫られていた──という話を何度も聞いてきた。',
    thought: '安いほうが良いのか、それとも……',
    svgScene: (
      <svg viewBox="0 0 200 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" fill="#fafaf8"/>
        <rect x="15" y="15" width="75" height="95" fill="white" stroke="#1a1208" strokeWidth="1.5" transform="rotate(-3 52 62)"/>
        <text x="52" y="38" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#1a1208" transform="rotate(-3 52 62)">A社見積書</text>
        <text x="52" y="55" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#1a1208" fontWeight="bold" transform="rotate(-3 52 62)">¥350万</text>
        <text x="52" y="68" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#6a6050" transform="rotate(-3 52 62)">一式 ¥3,500,000</text>
        <rect x="110" y="15" width="75" height="95" fill="white" stroke="#1a1208" strokeWidth="1.5" transform="rotate(3 147 62)"/>
        <text x="147" y="38" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#1a1208" transform="rotate(3 147 62)">B社見積書</text>
        <text x="147" y="55" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#1a1208" fontWeight="bold" transform="rotate(3 147 62)">¥220万</text>
        <text x="147" y="68" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#6a6050" transform="rotate(3 147 62)">一式 ¥2,200,000</text>
        <text x="100" y="125" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#c9a84c">???</text>
      </svg>
    ),
  },
  {
    number: '03',
    title: '融資前に動けない',
    scene: '書類の前で止まるAさん',
    dialogue: '「物件も資金も確定していないと話を聞いてもらえない。でも融資には見積書が必要……」',
    caption: 'このにわとりと卵の問題を解決できる業者が、仙台にはいなかった。',
    thought: 'ずっと決断を先延ばしにしている',
    svgScene: (
      <svg viewBox="0 0 200 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" fill="#fafaf8"/>
        <circle cx="100" cy="65" r="40" fill="#f0ead8" stroke="#1a1208" strokeWidth="1.5"/>
        <line x1="100" y1="30" x2="100" y2="65" stroke="#1a1208" strokeWidth="2" strokeLinecap="round"/>
        <line x1="100" y1="65" x2="125" y2="72" stroke="#1a1208" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="100" cy="65" r="3" fill="#1a1208"/>
        {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
          <line
            key={i}
            x1={100 + 33 * Math.sin(i * Math.PI / 6)}
            y1={65 - 33 * Math.cos(i * Math.PI / 6)}
            x2={100 + 36 * Math.sin(i * Math.PI / 6)}
            y2={65 - 36 * Math.cos(i * Math.PI / 6)}
            stroke="#1a1208"
            strokeWidth="1"
          />
        ))}
        <text x="100" y="120" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#6a6050">時間だけが過ぎていく…</text>
        <path d="M40 130 Q100 115 160 130" stroke="#c9a84c" strokeWidth="1" fill="none" strokeDasharray="3,2"/>
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section style={{ background: '#141414' }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Chapter 01 — Problem</div>
          <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#C9A84C', letterSpacing: '0.02em' }}>
            <span className="gold-underline">開業準備で「わからない」が重なっていませんか。</span>
          </h2>
          <p className="font-noto text-sm max-w-lg mx-auto" style={{ color: '#999999', lineHeight: '1.8' }}>
            開業を検討している多くの方が、この3つの壁の前で立ち止まっています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-1">
          {panels.map((panel, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{
                border: '1px solid rgba(201,168,76,0.25)',
                background: '#1A1A1A',
                marginBottom: i < 2 ? '1px' : 0,
              }}
            >
              <div className="manga-caption-gold flex items-center justify-between">
                <span className="font-elite">Scene {panel.number}</span>
                <span className="font-noto text-xs">{panel.scene}</span>
              </div>

              <div className="flex-1 p-0 aspect-[4/3]">
                {panel.svgScene}
              </div>

              <div className="p-4" style={{ borderTop: '1px solid rgba(201,168,76,0.25)' }}>
                <h3
                  className="font-cormorant font-semibold mb-2"
                  style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: '#C9A84C' }}
                >
                  {panel.title}
                </h3>
                <p className="font-noto text-sm mb-3" style={{ color: '#999999', lineHeight: '1.7' }}>
                  {panel.dialogue}
                </p>
                <div
                  className="text-xs px-3 py-2"
                  style={{
                    background: 'rgba(201,168,76,0.08)',
                    color: '#888888',
                    border: '1px solid rgba(201,168,76,0.2)',
                    fontFamily: 'Noto Serif JP, serif',
                    lineHeight: '1.6',
                    letterSpacing: '0.03em',
                  }}
                >
                  {panel.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div
            className="inline-block px-6 py-4 max-w-xl"
            style={{
              border: '1.5px solid #C9A84C',
              background: 'rgba(201,168,76,0.06)',
            }}
          >
            <p className="font-cormorant text-xl font-medium" style={{ color: '#F8F5F2' }}>
              この「わからない」は、情報の非対称性が原因です。
            </p>
            <p className="font-noto text-sm mt-2" style={{ color: '#888888' }}>
              記憶荘は、その非対称性を解消することから始めます。
            </p>
          </div>
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
