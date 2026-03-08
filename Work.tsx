const mineItems = [
  { icon: '⚠', title: '「一式」見積もりは比較不能', detail: '工種ごとに分解されていない見積もりは、A社とB社の比較ができません。安い・高いの判断ができない状態のまま発注することになります。' },
  { icon: '⚠', title: '解体前の配管・配線確認なし', detail: '居抜き物件で既存の配管・電気系統を確認せずに工事を始めると、後から追加費用が発生します。事前調査は必須です。' },
  { icon: '⚠', title: '保健所・消防法の確認漏れ', detail: '飲食店・サロンなどは、設計段階での保健所・消防への事前相談が必要です。工事後に「この設備では許可が下りない」となるケースがあります。' },
  { icon: '⚠', title: '原状回復義務の範囲が曖昧', detail: '退去時の原状回復義務を確認せずに工事すると、閉店時に想定外の費用が発生します。契約書と照合した範囲確認が必要です。' },
  { icon: '⚠', title: '融資実行前の着工', detail: '融資が確定する前に着工してしまうと、審査が通らなかった場合に工事費の支払いができなくなります。タイミング管理は慎重に。' },
];

const works = [
  {
    category: 'ヘアサロン',
    area: '仙台市青葉区',
    sqm: '16坪',
    type: 'スケルトン',
    cost: '約680万円',
    period: '工期35日',
    beforeBg: 'linear-gradient(135deg, #8B7355 0%, #5C4A2A 100%)',
    afterBg: 'linear-gradient(135deg, #F7F4EF 0%, #E8E0CC 50%, #D4C9B0 100%)',
    detail: 'スケルトンから居心地のよいオープンサロンへ。造作カウンター・間接照明・大理石調フロアで高単価ブランドイメージを構築。',
  },
  {
    category: 'カフェ',
    area: '仙台市宮城野区',
    sqm: '22坪',
    type: '居抜き',
    cost: '約1,150万円',
    period: '工期48日',
    beforeBg: 'linear-gradient(135deg, #6B5B45 0%, #3D2B1F 100%)',
    afterBg: 'linear-gradient(135deg, #F0EAD8 0%, #C9A84C 50%, #A08032 100%)',
    detail: '居抜き物件を活用しながら、前テナントの印象を完全リセット。ダークウッドとアイアンを組み合わせたブルックリンスタイル。',
  },
  {
    category: 'パーソナルジム',
    area: '仙台市泉区',
    sqm: '18坪',
    type: 'スケルトン',
    cost: '約780万円',
    period: '工期28日',
    beforeBg: 'linear-gradient(135deg, #7A7A7A 0%, #3A3A3A 100%)',
    afterBg: 'linear-gradient(135deg, #1A1208 0%, #2D2215 50%, #C9A84C 100%)',
    detail: '防音・防振対策と高級感を両立。暗めのトーンと間接照明でモチベーションが上がる空間。鏡面の効果的な配置で視覚的な広がりを演出。',
  },
];

export default function Work() {
  return (
    <section style={{ background: '#1A1A1A' }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Chapter 06 — Work</div>
          <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F8F5F2', letterSpacing: '0.02em' }}>
            <span className="gold-underline">施工実績</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {works.map((w, i) => (
            <div key={i} className="overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.25)' }}>
              <div className="manga-caption-gold">
                {w.category} | {w.area} | {w.sqm} | {w.type}
              </div>

              <div className="flex h-40">
                <div className="flex-1 relative" style={{ background: w.beforeBg }}>
                  <div
                    className="absolute bottom-0 left-0 right-0 py-1 text-center font-elite text-xs"
                    style={{ background: 'rgba(0,0,0,0.6)', color: '#aaa', letterSpacing: '0.15em' }}
                  >
                    BEFORE
                  </div>
                </div>
                <div className="w-0.5 flex-shrink-0" style={{ background: '#1A1208' }} />
                <div className="flex-1 relative" style={{ background: w.afterBg }}>
                  <div
                    className="absolute bottom-0 left-0 right-0 py-1 text-center font-elite text-xs"
                    style={{ background: 'rgba(201,168,76,0.8)', color: '#1A1208', letterSpacing: '0.15em' }}
                  >
                    AFTER
                  </div>
                </div>
              </div>

              <div className="p-4" style={{ borderTop: '1px solid rgba(201,168,76,0.25)', background: '#141414' }}>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {[w.sqm, w.type, w.cost, w.period].map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5"
                      style={{
                        border: '1px solid rgba(201,168,76,0.35)',
                        background: 'rgba(201,168,76,0.08)',
                        color: '#888888',
                        fontSize: '0.65rem',
                        fontFamily: 'Noto Serif JP, serif',
                        lineHeight: '1.6',
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="font-noto text-xs" style={{ color: '#888888', lineHeight: '1.7' }}>
                  {w.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-center mb-8">
            <div className="section-label mb-2">地雷チェック表</div>
            <h3 className="font-cormorant text-2xl font-semibold" style={{ color: '#F8F5F2' }}>
              見積もりを取る前に確認してほしいこと
            </h3>
          </div>

          <div style={{ border: '1px solid rgba(201,168,76,0.25)' }}>
            <div
              className="px-6 py-3"
              style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(201,168,76,0.25)' }}
            >
              <span className="font-elite text-xs tracking-widest" style={{ color: '#C9A84C' }}>
                MINE CHECK — 知らないと損する5つのポイント
              </span>
            </div>
            {mineItems.map((item, i) => (
              <div
                key={i}
                className="px-6 py-5"
                style={{
                  borderBottom: i < mineItems.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                  background: i % 2 === 0 ? '#1A1A1A' : '#141414',
                }}
              >
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm"
                    style={{
                      border: '1.5px solid #C9A84C',
                      background: 'rgba(201,168,76,0.1)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1 L13 12 L1 12 Z" stroke="#C9A84C" strokeWidth="1.2" fill="rgba(201,168,76,0.15)"/>
                      <line x1="7" y1="5" x2="7" y2="8.5" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
                      <circle cx="7" cy="10.2" r="0.6" fill="#C9A84C"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-noto text-sm font-semibold mb-1" style={{ color: '#F8F5F2' }}>
                      {item.title}
                    </h4>
                    <p className="font-noto text-xs" style={{ color: '#888888', lineHeight: '1.75' }}>
                      {item.detail}
                    </p>
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
