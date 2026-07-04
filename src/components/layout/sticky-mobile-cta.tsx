"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[var(--z-drawer)] md:hidden">
      <Link
        href={siteConfig.primaryCta.href}
        className="block w-full rounded-lg bg-[var(--color-gold)] px-6 py-3 text-center text-sm font-semibold text-[var(--color-ink)] shadow-lg transition-opacity hover:opacity-90"
      >
        {siteConfig.primaryCta.label}
      </Link>
    </div>
  );
}
