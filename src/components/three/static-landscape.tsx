"use client";

export function StaticLandscape() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[var(--z-base)] overflow-hidden"
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="1440" height="900" fill="#0a0a0a" />

        {/* Distant hills */}
        <ellipse cx="300" cy="650" rx="400" ry="200" fill="#132a23" opacity="0.6" />
        <ellipse cx="900" cy="680" rx="350" ry="180" fill="#1a3d2e" opacity="0.5" />
        <ellipse cx="1200" cy="660" rx="300" ry="160" fill="#132a23" opacity="0.4" />

        {/* Mid hills */}
        <ellipse cx="200" cy="720" rx="300" ry="150" fill="#1a3d2e" opacity="0.7" />
        <ellipse cx="700" cy="740" rx="250" ry="130" fill="#234238" opacity="0.5" />
        <ellipse cx="1100" cy="710" rx="280" ry="140" fill="#1a3d2e" opacity="0.6" />

        {/* Foreground terrain */}
        <path
          d="M0 750 Q200 680 400 720 Q600 690 800 730 Q1000 700 1200 740 Q1400 710 1440 750 V900 H0 Z"
          fill="#132a23"
        />

        {/* Road */}
        <path
          d="M720 900 Q700 800 740 700 Q720 650 750 600 Q730 550 760 500 Q740 450 770 400"
          stroke="#2a2a2a"
          strokeWidth="24"
          fill="none"
          strokeLinecap="round"
        />

        {/* Road center line */}
        <path
          d="M720 900 Q700 800 740 700 Q720 650 750 600 Q730 550 760 500 Q740 450 770 400"
          stroke="#d6a936"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          strokeDasharray="8 12"
        />

        {/* Vegetation clusters */}
        <g opacity="0.8">
          <polygon points="180,700 195,640 210,700" fill="#1a3d2e" />
          <polygon points="220,710 232,660 244,710" fill="#234238" />
          <polygon points="260,695 275,635 290,695" fill="#1a3d2e" />

          <polygon points="1100,720 1115,660 1130,720" fill="#1a3d2e" />
          <polygon points="1150,700 1162,650 1174,700" fill="#234238" />
          <polygon points="1200,710 1215,650 1230,710" fill="#1a3d2e" />

          <polygon points="400,730 412,680 424,730" fill="#234238" />
          <polygon points="900,710 912,660 924,710" fill="#1a3d2e" />
        </g>

        {/* Mist layers */}
        <rect x="0" y="500" width="1440" height="200" fill="#132a23" opacity="0.08" />
        <rect x="0" y="600" width="1440" height="150" fill="#132a23" opacity="0.05" />

        {/* Golden signal dot on road */}
        <circle cx="750" cy="550" r="6" fill="#d6a936" opacity="0.8" />
        <circle cx="750" cy="550" r="12" fill="#d6a936" opacity="0.2" />
      </svg>
    </div>
  );
}
