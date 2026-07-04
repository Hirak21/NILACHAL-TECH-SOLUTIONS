"use client";

import { motion } from "motion/react";

export function LogoAnimation() {
  return (
    <div className="relative" aria-hidden>
      <motion.svg
        viewBox="0 0 120 80"
        className="h-16 w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left hill ridge - outer vertical of N */}
        <motion.path
          d="M20 70 Q25 40 30 20 Q32 15 35 12"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Right hill ridge - outer vertical of N */}
        <motion.path
          d="M80 70 Q85 40 90 20 Q92 15 95 12"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Winding road - diagonal of N */}
        <motion.path
          d="M30 20 Q45 45 60 35 Q75 25 90 20"
          stroke="#d6a936"
          strokeWidth={1.5}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Golden signal dot */}
        <motion.circle
          cx={60}
          cy={35}
          r={3}
          fill="#d6a936"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        />
      </motion.svg>
    </div>
  );
}
