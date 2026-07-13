interface LogoProps {
  className?: string;
}

/**
 * Kelvornex atom logo:
 * - 4 black orbit ovals (0°, 45°, 90°, 135°)
 * - star core made of two exact equilateral triangles:
 *   down triangle solid black, up triangle transparent with black outline
 * - 3 electron dots in brand blues #0900ff, #008eff, #00ccff
 */
export default function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* 4 orbit ovals — black */}
      <g stroke="#000000" strokeWidth="3.5">
        <ellipse cx="50" cy="50" rx="42" ry="16" />
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="16"
          transform="rotate(45 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="16"
          transform="rotate(90 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="16"
          transform="rotate(135 50 50)"
        />
      </g>

      {/* Down triangle — solid black */}
      <path d="M50 72 L30.95 39 L69.05 39 Z" fill="#000000" />
      {/* Up triangle — transparent with black outline */}
      <path
        d="M50 28 L69.05 61 L30.95 61 Z"
        fill="none"
        stroke="#000000"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* 3 electron dots — placed exactly on the orbit oval lines:
          (20.3,20.3) = tip of 45° oval, (79.7,20.3) = tip of 135° oval,
          (50,92) = bottom tip of vertical oval */}
      <circle cx="20.3" cy="20.3" r="5.5" fill="#0900ff" />
      <circle cx="79.7" cy="20.3" r="5.5" fill="#008eff" />
      <circle cx="50" cy="92" r="5.5" fill="#00ccff" />
    </svg>
  );
}
