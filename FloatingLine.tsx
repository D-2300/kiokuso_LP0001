import { useState, useEffect } from 'react';

const LINE_URL = 'https://lin.ee/HVV0QJO';

export default function FloatingLine() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (visible && !dismissed) {
      const t = setTimeout(() => setShowLabel(true), 800);
      return () => clearTimeout(t);
    }
  }, [visible, dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="fixed z-50 transition-all duration-500"
      style={{
        bottom: '24px',
        right: '20px',
        transform: visible ? 'translateY(0)' : 'translateY(100px)',
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="relative flex items-center gap-2">
        {showLabel && (
          <div
            className="absolute right-full mr-3 whitespace-nowrap px-3 py-2 text-xs font-noto"
            style={{
              background: '#0E0D0B',
              color: 'white',
              borderRadius: '4px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
              animation: 'fadeInLeft 0.3s ease',
            }}
          >
            LINEで無料相談
            <div
              className="absolute top-1/2 left-full"
              style={{
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderLeft: '5px solid #0E0D0B',
              }}
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <button
            onClick={() => setDismissed(true)}
            className="flex items-center justify-center w-7 h-7 rounded-full self-end"
            style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              cursor: 'pointer',
            }}
            aria-label="閉じる"
          >
            <span style={{color:'white', fontSize:'0.9rem', lineHeight:1}}>×</span>
          </button>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full"
            style={{
              width: '60px',
              height: '60px',
              background: '#06C755',
              boxShadow: '0 4px 20px rgba(6,199,85,0.4)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.08)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(6,199,85,0.55)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(6,199,85,0.4)';
            }}
            aria-label="LINEで無料相談"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} fill="white">
              <path d="M12 2C6.477 2 2 6.124 2 11.25c0 2.73 1.28 5.17 3.3 6.87-.14.5-.9 3.12-.93 3.33 0 0-.02.14.07.2.09.06.2.02.2.02.27-.04 3.16-2.08 3.63-2.4.77.18 1.57.27 2.39.27 5.524 0 10-4.124 10-9.25C22 6.124 17.524 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
