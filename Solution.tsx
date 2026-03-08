const costRows = [
  {
    item: '設備・什器の調達',
    theirs: 'メーカー定価・代理店経由',
    ours: '中古活用 / ヤフオク・メルカリ対応',
    isTotal: false,
  },
  {
    item: '壁・床などの仕上げ',
    theirs: '職人に一括依頼',
    ours: 'DIY可・施主支給OK',
    isTotal: false,
  },
  {
    item: '材料費の利益上乗せ',
    theirs: '仕入れ価格に20〜30%加算',
    ours: '原価完全公開（PMフィーのみ）',
    isTotal: false,
  },
  {
    item: '完成予想図（パース）',
    theirs: '外注で数日〜1週間・数万円〜',
    ours: 'AIパースで即日無料提供',
    isTotal: false,
  },
  {
    item: '保健所・消防の申請',
    theirs: '別途・追加費用',
    ours: '基本パッケージに含む',
    isTotal: false,
  },
  {
    item: '飲食店 15坪の目安（合計）',
    theirs: '500万〜1,000万円',
    ours: '150万〜300万円',
    isTotal: true,
  },
];

export default function Solution() {
  return (
    <section style={{ background: '#1A1A1A' }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="section-label mb-3">Chapter 02 — Solution</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-start">
          <h2
            className="font-cormorant font-semibold"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#F8F5F2', lineHeight: '1.55', letterSpacing: '0.04em' }}
          >
            なぜこれほど<br />
            <span style={{ color: '#C9A84C' }}>安くできるのか。</span><br />
            種明かしをします。
          </h2>
          <p
            className="font-noto text-sm"
            style={{ color: '#999999', lineHeight: '2', paddingTop: '0.5rem' }}
          >
            「安かろう悪かろう」ではありません。コストを下げる方法に、明確な根拠があります。中古設備の活用、施主支給の許可、DIYサポート。従来の内装会社が「やりたくない」と嫌がる手法を、記憶荘はむしろ得意としています。
            <br /><br />
            坪単価・工期・見積もりの根拠、すべて開示します。
          </p>
        </div>

        <div style={{ border: '1px solid rgba(201,168,76,0.25)', overflow: 'hidden' }}>
          <div
            className="grid grid-cols-3 gap-0"
            style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(201,168,76,0.2)' }}
          >
            <div className="px-5 py-3 font-noto text-xs" style={{ color: '#666', letterSpacing: '0.05em' }}>
              コスト項目
            </div>
            <div className="px-5 py-3 text-center font-elite text-xs" style={{ color: '#555', letterSpacing: '0.1em', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
              仙台市内の内装業者
            </div>
            <div className="px-5 py-3 text-center font-elite text-xs" style={{ color: '#C9A84C', letterSpacing: '0.1em', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
              記憶荘
            </div>
          </div>

          {costRows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 gap-0"
              style={{
                borderBottom: i < costRows.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                background: row.isTotal
                  ? 'rgba(201,168,76,0.08)'
                  : i % 2 === 0 ? '#1A1A1A' : '#141414',
                borderTop: row.isTotal ? '1px solid rgba(201,168,76,0.25)' : 'none',
              }}
            >
              <div
                className="px-5 py-4 font-noto text-sm"
                style={{
                  color: '#F8F5F2',
                  fontWeight: row.isTotal ? 600 : 400,
                  lineHeight: '1.7',
                }}
              >
                {row.item}
              </div>
              <div
                className="px-5 py-4 font-noto text-sm text-center"
                style={{
                  color: '#666',
                  lineHeight: '1.7',
                  borderLeft: '1px solid rgba(201,168,76,0.1)',
                }}
              >
                {row.theirs}
              </div>
              <div
                className="px-5 py-4 font-noto text-sm text-center"
                style={{
                  color: row.isTotal ? '#C9A84C' : '#F8F5F2',
                  fontWeight: row.isTotal ? 600 : 500,
                  lineHeight: '1.7',
                  borderLeft: '1px solid rgba(201,168,76,0.15)',
                  background: row.isTotal ? 'rgba(201,168,76,0.08)' : 'transparent',
                }}
              >
                {row.ours}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p
            className="font-cormorant text-2xl font-medium"
            style={{ color: '#F8F5F2' }}
          >
            「押さない・比べられる・決めるのはあなた」
          </p>
          <div className="mt-2 mx-auto" style={{ width: '80px', height: '1.5px', background: '#C9A84C' }} />
        </div>

      </div>
    </section>
  );
}
