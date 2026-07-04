"use client";

import { motion } from "motion/react";
import { services } from "@/content/services";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function ServicesPageContent() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl"
        >
          Our Services
        </motion.h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
          Four capabilities that work together to help your business grow through
          practical technology.
        </p>

        <div className="mt-16 space-y-16">
          {services.map((service, i) => (
            <motion.section
              key={service.slug}
              id={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-24 rounded-lg border border-white/10 bg-[var(--elevated)]/50 p-8"
            >
              <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-gold)]">
                Service {service.index} — {service.checkpointLabel}
              </p>
              <h2 className="text-2xl font-semibold text-[var(--fg)]">
                {service.title}
              </h2>
              <p className="mt-2 text-[var(--muted)]">{service.description}</p>
              <p className="mt-4 font-medium text-[var(--color-gold)]">
                {service.benefit}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Common Deliverables
                </h3>
                <ul className="mt-2 space-y-1">
                  {service.deliverables.map((d) => (
                    <li key={d} className="text-sm text-[var(--fg)]">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Suitable For
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {service.suitableClients.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-forest)]/50 p-8 text-center">
          <p className="text-sm text-[var(--muted)]">
            Custom development, hosting, paid advertising and ongoing maintenance
            are separately scoped based on project requirements.
          </p>
          <Link
            href={siteConfig.primaryCta.href}
            className="mt-4 inline-block rounded bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90"
          >
            {siteConfig.primaryCta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
