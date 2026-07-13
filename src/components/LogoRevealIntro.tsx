import { useEffect, useState } from "react";

interface LogoRevealIntroProps {
  onFinish?: () => void;
}

export default function LogoRevealIntro({ onFinish }: LogoRevealIntroProps) {
  const [hide, setHide] = useState(false);
  const [stageTwo, setStageTwo] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStageTwo(true), 2600);
    const t2 = setTimeout(() => setHide(true), 5200);
    const t3 = setTimeout(() => onFinish?.(), 5900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center w-full max-w-5xl px-6">
        <div className="absolute w-96 h-96 rounded-full bg-white/8 blur-3xl animate-pulse-ring" />

        <div
          className={`relative flex items-center justify-center w-full transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            stageTwo ? "md:justify-start" : "justify-center"
          }`}
        >
          {/* Stage 1: large centered logo -> Stage 2: smaller left logo */}
          <div
            className={`relative transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              stageTwo
                ? "scale-[0.62] sm:scale-[0.7] md:scale-[0.78] md:-translate-x-12"
                : "scale-100 translate-x-0"
            }`}
          >
            <svg
              viewBox="0 0 220 220"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 text-white drop-shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
              fill="none"
            >
              {/* orbit strokes */}
              <g
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                className="logo-fade-reveal animate-logo-reveal"
                style={{ filter: "blur(0.15px)", animationDelay: "0.2s" }}
              >
                <ellipse cx="110" cy="110" rx="86" ry="32" />
                <ellipse cx="110" cy="110" rx="86" ry="32" transform="rotate(45 110 110)" />
                <ellipse cx="110" cy="110" rx="86" ry="32" transform="rotate(90 110 110)" />
                <ellipse cx="110" cy="110" rx="86" ry="32" transform="rotate(135 110 110)" />
              </g>

              {/* down triangle solid */}
              <path
                d="M110 154 L70.5 85.5 L149.5 85.5 Z"
                fill="currentColor"
                className="logo-fade-reveal animate-logo-reveal"
                style={{ animationDelay: "1.4s" }}
              />

              {/* up triangle stroke */}
              <path
                d="M110 66 L149.5 134.5 L70.5 134.5 Z"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinejoin="round"
                className="logo-fade-reveal"
                style={{ animationDelay: "2s" }}
              />

              {/* electrons */}
              <circle cx="48" cy="48" r="10" fill="currentColor" className="logo-pop-in" style={{ animationDelay: "2.8s" }} />
              <circle cx="172" cy="48" r="10" fill="currentColor" className="logo-pop-in" style={{ animationDelay: "3.1s" }} />
              <circle cx="110" cy="188" r="10" fill="currentColor" className="logo-pop-in" style={{ animationDelay: "3.4s" }} />
            </svg>
          </div>

          {/* Stage 2: reveal brand name after logo animation completes */}
          <div
            className={`absolute md:static left-1/2 top-[72%] md:top-auto -translate-x-1/2 md:translate-x-0 md:ml-2 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              stageTwo
                ? "opacity-100 md:translate-y-0"
                : "opacity-0 translate-y-6 md:translate-y-0"
            }`}
          >
            <div className="text-center md:text-left">
              <p className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[0.18em] animate-logo-reveal leading-none whitespace-nowrap">
                KELVORNEX
              </p>
              <p className="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.35em] text-white/45 font-semibold whitespace-nowrap">
                Learn • Build • Innovate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
