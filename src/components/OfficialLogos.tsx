import React, { useState } from 'react';

/**
 * Official FIRST Emblem & Wordmark Logo
 * Reference: Official FIRST Brand Assets (https://www.firstinspires.org)
 * Features the 3D isometric interlocking Red Triangle, Blue Diamond, and Silver Circle
 * with the bold forward-italic 'FIRST ®' wordmark.
 * Asset fallback: /assets/first-logo.svg
 */
export const FirstLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/assets/first-logo.svg"
        alt="Logo Oficial FIRST (For Inspiration and Recognition of Science and Technology)"
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
        loading="eager"
      />
    );
  }

  // High-fidelity fallback SVG if external asset path differs in preview container
  return (
    <svg
      viewBox="0 0 450 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Logo Oficial FIRST"
    >
      <g transform="translate(45, 20)">
        <polygon points="120,40 100,55 100,215 120,200" fill="#9E1217" />
        <polygon points="100,215 120,200 210,200 190,215" fill="#780E12" />
        <path d="M120 40 L210 200 H160 L140 160 H100 L80 200 H30 L120 40 Z" fill="#ED1C24" />
        <polygon points="120,95 145,145 95,145" fill="#FFFFFF" />

        <polygon points="260,40 240,55 240,145 260,130" fill="#004680" />
        <polygon points="310,130 330,115 350,135 330,150" fill="#003561" />
        <polygon points="260,40 330,115 260,190 190,115" fill="#0066B3" />
        <polygon points="260,78 300,115 260,152 220,115" fill="#FFFFFF" />

        <path
          d="M175 140 C160 140 145 130 140 115 C135 100 140 85 152 75 C165 65 185 65 198 75 C210 85 215 100 210 115 C205 130 190 140 175 140 Z"
          stroke="#A0A5AA"
          strokeWidth="22"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M172 138 C158 138 144 128 140 114 C136 100 140 86 151 76"
          stroke="#7A8086"
          strokeWidth="6"
          fill="none"
        />
      </g>
      <g transform="translate(25, 270)" fill="#111827">
        <path d="M30 100 L58 5 H132 L122 35 H82 L76 56 H112 L102 86 H66 L50 140 H10 L30 100 Z" />
        <polygon points="120,140 148,5 186,5 158,140" />
        <path d="M180 140 L208 5 H265 C295 5 312 18 306 48 C302 68 288 82 268 88 L296 140 H254 L232 94 H215 L205 140 H180 Z M228 35 L220 70 H248 C262 70 270 64 272 52 C274 40 268 35 254 35 H228 Z" />
        <path d="M300 128 C306 138 318 144 335 144 C358 144 372 132 374 116 C376 96 352 90 338 82 C318 72 312 60 315 42 C318 18 340 5 368 5 C388 5 404 12 412 24 L392 50 C386 42 376 36 362 36 C344 36 338 44 336 52 C334 68 358 74 372 82 C394 94 400 108 396 128 C392 152 368 165 336 165 C310 165 290 154 280 138 L300 128 Z" />
        <polygon points="388,35 435,35 414,140 376,140 397,35 372,35 378,5 455,5 448,35" />
        <circle cx="448" cy="20" r="10" stroke="#111827" strokeWidth="2.5" fill="none" />
        <text x="448" y="24" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#111827">
          R
        </text>
      </g>
    </svg>
  );
};

/**
 * Official SENAI Logo
 * Reference: SENAI Nacional & Sistema Fibra (https://www.sistemafibra.org.br/senai/)
 * Authentic Red horizontal banner with 5 white speed lines on each side and bold italic 'SENAI' typography.
 * Asset fallback: /assets/senai-logo.svg
 */
export const SenaiLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/assets/senai-logo.svg"
        alt="Logo Oficial SENAI (Serviço Nacional de Aprendizagem Industrial)"
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
        loading="eager"
      />
    );
  }

  // High-fidelity fallback SVG
  return (
    <svg
      viewBox="0 0 500 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Logo Oficial SENAI"
    >
      <rect width="500" height="125" fill="#E30613" />
      <g fill="#FFFFFF">
        <rect x="0" y="18" width="28" height="4" />
        <rect x="0" y="38" width="28" height="4" />
        <rect x="0" y="58" width="28" height="4" />
        <rect x="0" y="78" width="28" height="4" />
        <rect x="0" y="98" width="28" height="4" />
        <rect x="472" y="18" width="28" height="4" />
        <rect x="472" y="38" width="28" height="4" />
        <rect x="472" y="58" width="28" height="4" />
        <rect x="472" y="78" width="28" height="4" />
        <rect x="472" y="98" width="28" height="4" />
      </g>
      <g fill="#FFFFFF" transform="translate(35, 16)">
        <path d="M62 76 C55 83 44 87 31 87 C12 87 2 77 5 58 C6 49 14 43 27 39 L40 35 C52 31 56 26 58 17 C60 6 52 0 37 0 C23 0 13 5 7 13 L20 23 C24 18 30 15 38 15 C45 15 48 18 47 23 C46 29 40 33 29 36 L17 40 C4 44 -2 52 0 65 C3 84 18 95 38 95 C54 95 68 87 75 75 L62 76 Z" />
        <path d="M80 93 L97 2 H160 L156 18 H115 L110 37 H148 L144 53 H106 L101 77 H145 L141 93 H80 Z" />
        <path d="M165 93 L182 2 H203 L245 61 L256 2 H275 L258 93 H238 L195 33 L184 93 H165 Z" />
        <path d="M295 93 L325 2 H354 L368 93 H347 L344 71 H314 L308 93 H295 Z M318 55 H341 L334 22 L318 55 Z" />
        <path d="M375 93 L392 2 H414 L397 93 H375 Z" />
      </g>
    </svg>
  );
};
