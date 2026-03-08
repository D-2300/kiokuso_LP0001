import { useState } from 'react';

const LINE_URL = 'https://lin.ee/HVV0QJO';

const LineSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="white">
    <path d="M12 2C6.477 2 2 6.124 2 11.25c0 2.73 1.28 5.17 3.3 6.87-.14.5-.9 3.12-.93 3.33 0 0-.02.14.07.2.09.06.2.02.2.02.27-.04 3.16-2.08 3.63-2.4.77.18 1.57.27 2.39.27 5.524 0 10-4.124 10-9.25C22 6.124 17.524 2 12 2z"/>
  </svg>
);

const faqs = [
  {
    q: '断るときは、どうすればいいですか？',
    a: 'LINE 1本で完了します。「やっぱりやめます」「他社にします」でも構いません。理由を説明する必要はありません。電話で引き止めることも、しつこくフォローすることも、一切しません。',
  },
  {
    q: '物件がまだ決まっていませんが、相談できますか？',
    a: 'はい、むしろ物件が決まる前の段階からの相談を歓迎しています。「この物件は使えるか」「この予算でどの規模まで作れるか」という段階から伴走します。物件確定前に内装会社の目線でチェックすることで、「契約後に追加費用が発覚した」というリスクを大幅に減らせます。',
  },
  {
    q: '日本政策金融公庫の融資に使える見積書を作ってもらえますか？',
    a: '対応しています。Step 2（¥30,000〜60,000）で、公庫の審査担当者が確認できる精度の確定見積書と図面を作成します。Step 1・Step 2の費用は本工事受注時に全額充当します。',
  },
  {
    q: 'DIY をしたことがないのですが、DIY 対応は可能ですか？',
    a: '問題ありません。「電気・ガス・給排水などのインフラ工事（プロが担当）」と「壁の塗装・床材の敷設などの仕上げ工事（施主が参加可能）」を明確に分けて設計します。仕上げ工程では道具の貸し出しと実技指導を行います。',
  },
  {
    q: '保健所・消防の手続きは、自分でやらないといけませんか？',
    a: '記憶荘が代行・同行します。設計の初期段階で管轄の保健所・消防署に事前協議に出向き、「この図面の通りに施工すれば許可が下りる」という確認を先に取ります。工事完了後の検査不合格・追加工事・開業日の遅延というリスクをゼロに近づけます。',
  },
  {
    q: '中古の厨房機器や什器を使いたいのですが、対応してもらえますか？',
    a: '歓迎しています。ヤフオク・メルカリなどで施主が調達した設備の搬入・設置・既存インフラへの接続まで対応します。「持ち込み品は扱わない」という業者が多い中、記憶荘はその逆の立場です。',
  },
  {
    q: '仙台市外でも対応できますか？',
    a: '原則として仙台市・石巻市を中心とした宮城県内が対象です。品質管理と迅速な現地対応のため、対応エリアを絞っています。県外の案件については個別にご相談ください。',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: '#0A0A0A' }} className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-label mb-3">Chapter 09 — FAQ</div>
          <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F8F5F2', letterSpacing: '0.02em' }}>
            <span className="gold-underline">よくある不安に、先に答えます。</span>
          </h2>
        </div>

        <div style={{ border: '1px solid rgba(201,168,76,0.25)', overflow: 'hidden' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(201,168,76,0.15)' : 'none' }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-start gap-4 transition-colors duration-150"
                style={{
                  background: open === i ? '#1A1A1A' : '#141414',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '44px',
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="flex-shrink-0 font-elite text-sm w-6 h-6 flex items-center justify-center"
                  style={{ color: '#C9A84C', marginTop: '1px' }}
                >
                  Q
                </span>
                <span className="font-noto text-sm font-medium flex-1" style={{ color: '#F8F5F2', lineHeight: '1.7' }}>
                  {faq.q}
                </span>
                <span className="flex-shrink-0 ml-2 mt-0.5" style={{ color: '#C9A84C' }}>
                  {open === i
                    ? <span style={{fontSize:'1.1rem', color:'#C9A84C', fontFamily:'Cormorant Garamond, serif'}}>−</span>
                    : <span style={{fontSize:'1.1rem', color:'#C9A84C', fontFamily:'Cormorant Garamond, serif'}}>+</span>
                  }
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: open === i ? '400px' : '0',
                }}
              >
                <div
                  className="px-6 py-5 flex gap-4"
                  style={{ background: '#1A1A1A', borderTop: '1px solid rgba(201,168,76,0.15)' }}
                >
                  <span
                    className="flex-shrink-0 font-elite text-sm w-6 h-6 flex items-center justify-center"
                    style={{
                      background: '#C9A84C',
                      color: 'white',
                      borderRadius: '2px',
                      marginTop: '1px',
                    }}
                  >
                    A
                  </span>
                  <p className="font-noto text-sm" style={{ color: '#888888', lineHeight: '1.85' }}>
                    {faq.a}
                  </p>
                </div>
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
