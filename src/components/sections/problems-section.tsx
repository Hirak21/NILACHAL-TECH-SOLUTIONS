"use client";

import { motion } from "motion/react";

const problems = [
  {
    title: "Poor Google visibility",
    description:
      "Customers cannot easily discover or trust the business online.",
  },
  {
    title: "No professional digital presence",
    description:
      "The business lacks a clear, modern and reliable customer experience.",
  },
  {
    title: "Manual daily operations",
    description: "Staff depend on registers, repeated calls and memory.",
  },
  {
    title: "Disconnected tools and information",
    description:
      "Important data remains scattered across devices, spreadsheets and messages.",
  },
];

export function ProblemsSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          Your business should not depend on paperwork, missed calls and
          outdated systems.
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-white/10 bg-[var(--elevated)]/50 p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--fg)]">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
