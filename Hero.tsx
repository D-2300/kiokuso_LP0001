const LINE_URL = 'https://lin.ee/HVV0QJO';

const LineSvg = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="white">
    <path d="M12 2C6.477 2 2 6.124 2 11.25c0 2.73 1.28 5.17 3.3 6.87-.14.5-.9 3.12-.93 3.33 0 0-.02.14.07.2.09.06.2.02.2.02.27-.04 3.16-2.08 3.63-2.4.77.18 1.57.27 2.39.27 5.524 0 10-4.124 10-9.25C22 6.124 17.524 2 12 2z"/>
  </svg>
);

export default function Hero(_props: Record<string, never>) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px', backgroundColor: '#0E0D0B' }}
    >
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.03 }}>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div
        className="hidden md:block absolute top-0 bottom-0"
        style={{
          left: '4rem',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)',
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <div className="w-full max-w-3xl mx-auto text-center">
          <div className="font-elite text-xs tracking-widest mb-6 opacity-70 text-white">
            仙台・石巻エリア 店舗内装スタジオ
          </div>

          <h1
            className="font-cormorant font-semibold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', letterSpacing: '0.01em' }}
          >
            内装工事の相場、<br className="sm:hidden" />
            まず知ってください。<br />
            <span style={{ color: '#C9A84C' }}>営業は、しません。</span>
          </h1>

          <p
            className="font-noto mb-8"
            style={{
              fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)',
              color: '#999',
              letterSpacing: '0.05em',
              lineHeight: '1.85',
            }}
          >
            強引な営業は、しません。電話での勧誘も、しません。<br />
            相場を知るだけでいい、それで十分です。
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['物件未定OK', '融資用見積もり対応', '相見積もり歓迎', '断り連絡はLINE1本でOK'].map((badge) => (
              <span
                key={badge}
                className="font-noto text-xs text-white px-3 py-1.5 rounded-sm"
                style={{
                  border: '1px solid rgba(201,168,76,0.6)',
                  background: 'rgba(201,168,76,0.1)',
                  letterSpacing: '0.05em',
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line w-full sm:w-auto justify-center"
              style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', paddingLeft: '32px', paddingRight: '32px' }}
            >
              <LineSvg size={18} />
              <span>
                LINEで無料一次診断を開始
                <span
                  className="block text-xs font-normal mt-0.5 opacity-80"
                  style={{ fontFamily: 'Noto Serif JP, serif', letterSpacing: '0.03em' }}
                >
                  まずは相場確認だけ。断ってOK
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
      />
    </section>
  );
}
