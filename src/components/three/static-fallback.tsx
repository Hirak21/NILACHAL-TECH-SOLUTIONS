"use client";

import { motion } from "motion/react";

export function StaticFallback() {
  return (
    <div className="relative h-[60vh] overflow-hidden bg-gradient-to-b from-[var(--color-forest)] to-[var(--color-ink)]">
      {/* Static landscape illustration */}
      <svg
        viewBox="0 0 1200 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#132a23" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#sky)" />

        {/* Hills */}
        <path
          d="M0 350 Q200 200 400 280 Q600 180 800 260 Q1000 200 1200 300 L1200 400 L0 400Z"
          fill="#1a3d2e"
          opacity={0.6}
        />
        <path
          d="M0 380 Q300 250 600 320 Q900 230 1200 340 L1200 400 L0 400Z"
          fill="#132a23"
          opacity={0.8}
        />

        {/* Road */}
        <path
          d="M600 400 Q550 350 580 300 Q620 250 600 200 Q560 160 600 120 Q640 80 600 40"
          stroke="#d6a936"
          strokeWidth={2}
          fill="none"
          opacity={0.4}
          strokeDasharray="8 4"
        />
      </svg>
    </div>
  );
}
