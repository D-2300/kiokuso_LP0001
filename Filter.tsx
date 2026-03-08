const cannotAccept = [
  {
    title: '工事費 500万円超の大型案件',
    detail: '現時点では対応していません。小〜中規模に集中することで、対応品質を最大化しています。',
  },
  {
    title: '「全部お任せ、費用は気にしない」という方',
    detail: 'コストダウンの手法（DIY・中古活用・施主支給）を一緒に考えることが記憶荘の強みです。それを不要と感じる方には、より高品質なデザイン会社が適しています。',
  },
  {
    title: '開業後の集客や経営に全く興味のない方',
    detail: '記憶荘は「箱を作って終わり」ではなく、開業後の生存まで伴走することを目指しています。',
  },
  {
    title: '仙台市・石巻市以外の遠方案件',
    detail: '現場への迅速な対応が難しいため、現在は宮城県内に絞っています。',
  },
];

export default function Filter() {
  return (
    <section style={{ background: '#1A1A1A' }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="section-label mb-3">Chapter 08 — Filter</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="font-cormorant font-semibold mb-5"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#F8F5F2', lineHeight: '1.55', letterSpacing: '0.03em' }}
            >
              受注しない案件について、<br />正直に書きます。
            </h2>
            <p className="font-noto text-sm mb-6" style={{ color: '#999999', lineHeight: '2' }}>
              すべての方に対応できるわけではありません。<br />
              合わないケースを事前に開示することが、誠実さだと考えています。
            </p>
            <div
              className="px-4 py-4"
              style={{ borderLeft: '3px solid #C9A84C', background: 'rgba(201,168,76,0.06)' }}
            >
              <p className="font-noto text-sm" style={{ color: '#C9A84C', lineHeight: '1.85' }}>
                逆に言えば、以下の条件に当てはまる方には、<br />
                記憶荘が最も力を発揮できます。
              </p>
            </div>
          </div>

          <div style={{ border: '1px solid rgba(201,168,76,0.25)', overflow: 'hidden' }}>
            <div className="px-5 py-3" style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(201,168,76,0.25)' }}>
              <span className="font-cormorant text-base font-medium" style={{ color: '#C9A84C' }}>
                以下の案件はお断りしています
              </span>
            </div>
            {cannotAccept.map((item, i) => (
              <div
                key={i}
                className="px-5 py-4 flex gap-3"
                style={{
                  borderBottom: i < cannotAccept.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                  background: i % 2 === 0 ? '#141414' : '#1A1A1A',
                }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="#C9A84C" strokeWidth="1.3"/>
                    <line x1="6" y1="6" x2="12" y2="12" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round"/>
                    <line x1="12" y1="6" x2="6" y2="12" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-noto text-sm font-semibold mb-1" style={{ color: '#F8F5F2' }}>
                    {item.title}
                  </h3>
                  <p className="font-noto text-xs" style={{ color: '#888888', lineHeight: '1.8' }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
