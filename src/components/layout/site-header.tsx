"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[var(--z-header)] border-b border-white/10 bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--fg)]"
        >
          <span className="text-[var(--color-gold)]">N</span>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.navCta.href}
            className="rounded bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90"
          >
            {siteConfig.navCta.label}
          </Link>
        </nav>

        <button
          className="rounded p-2 text-[var(--fg)] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-[var(--bg)] px-4 pb-4 pt-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-[var(--fg)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={siteConfig.navCta.href}
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded bg-[var(--color-gold)] px-4 py-2 text-center text-sm font-semibold text-[var(--color-ink)]"
              >
                {siteConfig.navCta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
