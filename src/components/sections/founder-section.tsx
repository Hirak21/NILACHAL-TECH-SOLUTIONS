"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/content/site";

export function FounderSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          Technology built around real business problems.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl space-y-4 text-[var(--fg)]"
        >
          <p>
            Nilachal Tech Solutions is founded by {siteConfig.founder}, a developer
            and digital problem-solver based in Guwahati. His approach combines
            hands-on business understanding, product thinking and practical
            technology development.
          </p>
          <p>
            The company exists to help local businesses modernise their digital
            presence, improve operational efficiency and grow through practical
            technology, local visibility and custom business systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {["Developer", "Builder", "Digital Problem-Solver", "Technology Strategist", "Local Business Partner"].map(
            (role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-[var(--muted)]"
              >
                {role}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
