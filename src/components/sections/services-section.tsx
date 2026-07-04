"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          The Road to Digital Growth
        </motion.h2>
        <p className="mt-4 max-w-xl text-[var(--muted)]">
          Each checkpoint represents one stage of business transformation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-white/10 bg-[var(--elevated)]/50 p-8"
            >
              <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-gold)]">
                {service.checkpointLabel}
              </p>
              <h3 className="text-xl font-semibold text-[var(--fg)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-medium text-[var(--color-gold)]">
                {service.benefit}
              </p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-4 inline-block text-sm font-medium text-[var(--fg)] underline underline-offset-4 hover:text-[var(--color-gold)]"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
