const LINE_URL = 'https://lin.ee/HVV0QJO';

const LineSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="white">
    <path d="M12 2C6.477 2 2 6.124 2 11.25c0 2.73 1.28 5.17 3.3 6.87-.14.5-.9 3.12-.93 3.33 0 0-.02.14.07.2.09.06.2.02.2.02.27-.04 3.16-2.08 3.63-2.4.77.18 1.57.27 2.39.27 5.524 0 10-4.124 10-9.25C22 6.124 17.524 2 12 2z"/>
  </svg>
);

const finalSteps = [
  { num: '01', text: 'LINE 友だち追加' },
  { num: '02', text: '物件写真または\n図面を送る' },
  { num: '03', text: '24〜48h 以内に\n概算と所見を返信' },
  { num: '04', text: '気に入らなければ\nLINE 1本で終了' },
];

interface FinalCTAProps {
  onDiagnosticClick: () => void;
}

export default function FinalCTA({ onDiagnosticClick }: FinalCTAProps) {
  return (
    <section
      className="section-black py-24 px-4"
      style={{ background: '#0E0D0B' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="section-label mb-5" style={{ color: '#C9A84C' }}>
          Final — Take Action
        </div>

        <h2
          className="font-cormorant font-semibold text-white mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2', letterSpacing: '0.02em' }}
        >
          あなたの開業を、
          <br />不確実な「賭け」にしないために。
        </h2>

        <p
          className="font-noto mb-10"
          style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', color: 'rgba(255,255,255,0.55)', lineHeight: '1.9' }}
        >
          写真1枚、スマホで送るだけ。<br />
          24〜48時間以内に最初の判断材料を返信します。
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-0 mb-12">
          {finalSteps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col items-center px-4 py-2">
                <span
                  className="font-cormorant font-semibold"
                  style={{ fontSize: '2rem', color: '#C9A84C', opacity: 0.6, lineHeight: 1 }}
                >
                  {step.num}
                </span>
                <span
                  className="font-noto text-center mt-1"
                  style={{ fontSize: '0.75rem', color: '#6A6050', lineHeight: '1.6', whiteSpace: 'pre-line' }}
                >
                  {step.text}
                </span>
              </div>
              {i < finalSteps.length - 1 && (
                <span
                  className="hidden md:block font-cormorant mx-1"
                  style={{ color: '#C9A84C', opacity: 0.4, fontSize: '1.2rem' }}
                >
                  →
                </span>
              )}
              {i < finalSteps.length - 1 && (
                <span
                  className="block md:hidden font-cormorant my-1"
                  style={{ color: '#C9A84C', opacity: 0.4, fontSize: '1.2rem' }}
                >
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div
            className="p-6 flex flex-col items-center text-center"
            style={{ border: '1.5px solid rgba(255,255,255,0.15)' }}
          >
            <div
              className="font-elite text-xs tracking-widest mb-4"
              style={{ color: '#6A6050' }}
            >
              Route A
            </div>
            <h3 className="font-cormorant text-xl font-semibold text-white mb-2">
              まだ検討段階の方
            </h3>
            <p className="sub-text text-xs mb-5" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.7' }}>
              物件も予算も決まっていない。
              <br />まず自分の状況を整理したい。
            </p>
            <button
              onClick={onDiagnosticClick}
              className="btn-ghost-white w-full justify-center text-sm"
            >
              現在地診断（3分）
              <span style={{color:'rgba(201,168,76,0.6)', fontSize:'1.2rem'}}>→</span>
            </button>
          </div>

          <div
            className="p-6 flex flex-col items-center text-center"
            style={{ border: '1.5px solid #C9A84C', background: 'rgba(201,168,76,0.06)' }}
          >
            <div
              className="font-elite text-xs tracking-widest mb-4"
              style={{ color: '#C9A84C' }}
            >
              Route B
            </div>
            <h3 className="font-cormorant text-xl font-semibold text-white mb-2">
              物件・写真がある方
            </h3>
            <p className="sub-text text-xs mb-4" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.7' }}>
              物件図面や写真がある。
              <br />具体的な試算が欲しい。
            </p>
            <p
              className="text-xs mb-4"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'Noto Serif JP, serif',
                lineHeight: '1.7',
              }}
            >
              写真1枚、スマホで送るだけ。
              <br />24〜48時間以内に最初の判断材料をお返しします。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line w-full justify-center text-sm"
            >
              <LineSvg size={16} />
              LINEで写真を送る
            </a>
          </div>
        </div>

        <p
          className="mt-6 font-noto text-xs"
          style={{ color: 'rgba(255,255,255,0.3)', lineHeight: '1.9' }}
        >
          強引な営業・電話勧誘は一切しません。物件未定・相見積もり前提OK。<br />
          融資見送り時はLINE1本で完了します。
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <span style={{ fontFamily: 'Noto Serif JP, serif' }}>物件未定OK</span>
          <span style={{ color: 'rgba(201,168,76,0.4)' }}>|</span>
          <span style={{ fontFamily: 'Noto Serif JP, serif' }}>相見積もり歓迎</span>
          <span style={{ color: 'rgba(201,168,76,0.4)' }}>|</span>
          <span style={{ fontFamily: 'Noto Serif JP, serif' }}>断りはLINE1本でOK</span>
          <span style={{ color: 'rgba(201,168,76,0.4)' }}>|</span>
          <span style={{ fontFamily: 'Noto Serif JP, serif' }}>仙台市・宮城県内</span>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="font-cormorant text-2xl font-light tracking-widest text-white mb-1">
            記憶荘
          </div>
          <div className="font-elite text-xs tracking-widest" style={{ color: '#6A6050' }}>
            KIOKUZO — SENDAI STORE INTERIOR
          </div>
        </div>
      </div>
    </section>
  );
}
