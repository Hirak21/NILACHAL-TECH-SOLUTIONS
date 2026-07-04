"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ArrowDown } from "lucide-react";
import { LogoAnimation } from "@/components/motion/logo-animation";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-forest)]/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <p className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-gold)]">
          {siteConfig.location}
        </p>

        <div className="mb-6 flex justify-center">
          <LogoAnimation />
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl lg:text-6xl">
          We Build Digital Systems That Help Local Businesses Grow.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Nilachal Tech Solutions combines technology, local visibility and
          practical business strategy to transform outdated workflows into modern
          digital experiences.
        </p>

        <p className="mt-4 font-[family-name:var(--font-mono)] text-sm italic text-[var(--muted)]">
          {siteConfig.tagline}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={siteConfig.primaryCta.href}
            className="rounded bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90"
          >
            {siteConfig.primaryCta.label}
          </Link>
          <Link
            href={siteConfig.secondaryCta.href}
            className="rounded border border-[var(--muted)] px-6 py-3 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            {siteConfig.secondaryCta.label}
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8"
        aria-hidden
      >
        <ArrowDown className="animate-bounce text-[var(--muted)]" size={20} />
      </motion.div>
    </section>
  );
}
