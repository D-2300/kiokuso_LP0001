const LINE_URL = 'https://lin.ee/HVV0QJO';

const LineSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="white">
    <path d="M12 2C6.477 2 2 6.124 2 11.25c0 2.73 1.28 5.17 3.3 6.87-.14.5-.9 3.12-.93 3.33 0 0-.02.14.07.2.09.06.2.02.2.02.27-.04 3.16-2.08 3.63-2.4.77.18 1.57.27 2.39.27 5.524 0 10-4.124 10-9.25C22 6.124 17.524 2 12 2z"/>
  </svg>
);

const mainPlans = [
  {
    type: 'Uchiuki / Renovation',
    title: '居抜き・スケルトン活用プラン',
    range: '坪 8〜18 万円',
    note: '業態・物件状態により異なります。中古設備・施主支給・DIYを最大限に組み合わせた場合の目安。',
    items: [
      'インフラ工事（電気・ガス・給排水）',
      'プロジェクトマネジメントフィー（実費の15〜25%）',
      '保健所・消防の事前協議・申請サポート',
      'AIパースによる完成イメージ即日提供',
    ],
    featured: true,
  },
  {
    type: 'Skeleton Build',
    title: 'スケルトンからのフルビルド',
    range: '坪 18〜35 万円',
    note: '設備・仕上げを含む標準施工。スケルトン物件に設備一式を新設する場合の目安。',
    items: [
      '内装仕上げ工事（壁・床・天井）',
      '設備機器の選定・調達・設置',
      '行政申請代行（保健所・消防）',
      'LINE 日次進捗報告',
    ],
    featured: false,
  },
];

const subPlans = [
  {
    type: 'Phase 1 — Consulting',
    title: '企画・設計コンサル',
    range: '¥15〜30 万円',
    items: [
      '事業計画書の作成支援',
      '物件同行・大家交渉',
      '融資用概算見積書作成',
    ],
  },
  {
    type: 'Phase 3 — Digital',
    title: 'デジタル開業パッケージ',
    range: '¥20〜40 万円',
    items: [
      'LP・簡易HP制作',
      'Googleビジネスプロフィール設定',
      'LINE公式・Instagram初期構築',
    ],
  },
  {
    type: 'Phase 4 — Monthly',
    title: '開業後の継続伴走',
    range: '月 ¥3〜8 万円',
    items: [
      'MEO・Instagram運用アドバイス',
      'Google広告の運用代行',
      '経営メンタリング（月次）',
    ],
  },
];

export default function Pricing() {
  return (
    <section style={{ background: '#0D0D0D' }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Chapter 07 — Pricing</div>
          <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F8F5F2', letterSpacing: '0.02em' }}>
            <span className="gold-underline">坪単価と料金体系</span>
          </h2>
          <p className="font-noto text-sm max-w-xl mx-auto" style={{ color: '#999999', lineHeight: '1.8' }}>
            すべての数字に根拠があります。<br />
            「なぜこの金額か」を説明できない項目は請求しません。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {mainPlans.map((plan, i) => (
            <div
              key={i}
              className="relative flex flex-col"
              style={{
                border: plan.featured ? '2px solid #C9A84C' : '1px solid rgba(201,168,76,0.25)',
                background: '#141414',
              }}
            >
              {plan.featured && (
                <div
                  className="absolute top-0 right-0 font-noto text-xs px-3 py-1"
                  style={{ background: '#C9A84C', color: '#0D0D0D', fontWeight: 600, letterSpacing: '0.05em' }}
                >
                  人気
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="font-elite text-xs tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                  {plan.type}
                </div>
                <h3
                  className="font-cormorant font-semibold mb-1"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#F8F5F2' }}
                >
                  {plan.title}
                </h3>
                <div
                  className="font-cormorant font-semibold mb-3"
                  style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: '#C9A84C' }}
                >
                  {plan.range}
                </div>
                <p className="font-noto text-xs mb-5" style={{ color: '#888888', lineHeight: '1.8' }}>
                  {plan.note}
                </p>
                <ul className="space-y-2 mt-auto">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                        <circle cx="8" cy="8" r="7" fill="#C9A84C"/>
                        <polyline points="4.5,8 7,10.5 11.5,5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      <span className="font-noto text-xs" style={{ color: '#F8F5F2', lineHeight: '1.7' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {subPlans.map((plan, i) => (
            <div
              key={i}
              className="p-5"
              style={{ border: '1px solid rgba(201,168,76,0.2)', background: '#141414' }}
            >
              <div className="font-elite text-xs tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                {plan.type}
              </div>
              <h3
                className="font-cormorant font-semibold mb-1"
                style={{ fontSize: '1.1rem', color: '#F8F5F2' }}
              >
                {plan.title}
              </h3>
              <div
                className="font-cormorant font-semibold mb-4"
                style={{ fontSize: '1.2rem', color: '#C9A84C' }}
              >
                {plan.range}
              </div>
              <ul className="space-y-2">
                {plan.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div
                      className="flex-shrink-0 w-1 h-1 rounded-full mt-2"
                      style={{ background: '#C9A84C' }}
                    />
                    <span className="font-noto text-xs" style={{ color: '#888888', lineHeight: '1.7' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mb-8 px-5 py-4 text-center"
          style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.04)' }}
        >
          <p className="font-noto text-xs" style={{ color: '#888888', lineHeight: '1.9' }}>
            Step 1・Step 2 の費用は、本工事受注時に全額充当します。<br />
            ※ 500万円超・大型案件は現時点での対象外です。
          </p>
        </div>

        <div className="flex justify-center">
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
