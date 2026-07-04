import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-forest)]/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--fg)]">
              <span className="text-[var(--color-gold)]">N</span>
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {siteConfig.location}
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--fg)] hover:text-[var(--color-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[var(--fg)]">
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener">
                  WhatsApp <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link
              href={siteConfig.primaryCta.href}
              className="block rounded bg-[var(--color-gold)] px-4 py-2 text-center text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90"
            >
              {siteConfig.primaryCta.label}
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
