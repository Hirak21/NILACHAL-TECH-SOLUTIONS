"use client";

import { motion } from "motion/react";

const steps = [
  { label: "Discover", description: "Understand the business, customers, workflow and current problems." },
  { label: "Plan", description: "Define priorities, scope, technology and expected outcomes." },
  { label: "Build", description: "Design, develop, test and implement the solution." },
  { label: "Improve", description: "Observe usage, fix friction and expand the system when justified." },
];

export function ProcessSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          How We Work
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <span className="mb-4 block font-[family-name:var(--font-mono)] text-5xl font-bold text-[var(--color-gold)]/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-[var(--fg)]">{step.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
