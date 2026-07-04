"use client";

import { useRef } from "react";

export function SkipLink() {
  const mainRef = useRef<HTMLElement | null>(null);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("main")?.focus();
  };
  return (
    <a
      href="#main"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:rounded focus:bg-[var(--color-gold)] focus:px-4 focus:py-2 focus:text-[var(--color-ink)] focus:no-underline"
    >
      Skip to main content
    </a>
  );
}
