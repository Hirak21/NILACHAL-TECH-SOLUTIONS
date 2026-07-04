"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function FinalCtaSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          Your business does not need more random digital tools. It needs the
          right system.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-[var(--muted)]"
        >
          Let us review your current digital presence and workflow, identify the
          biggest gaps and recommend the most practical next steps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href={siteConfig.primaryCta.href}
            className="rounded bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90"
          >
            {siteConfig.primaryCta.label}
          </Link>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener"
            className="rounded border border-[var(--muted)] px-6 py-3 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            Contact on WhatsApp <span className="sr-only">(opens in a new tab)</span>
          </a>
          <Link
            href={siteConfig.secondaryCta.href}
            className="rounded border border-[var(--muted)] px-6 py-3 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
