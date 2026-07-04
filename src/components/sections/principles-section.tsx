"use client";

import { motion } from "motion/react";
import { principles } from "@/content/principles";

export function PrinciplesSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          Our Principles
        </motion.h2>

        <div className="mt-12 max-w-2xl space-y-8">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.statement}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-white/10 pb-6"
            >
              <h3 className="text-xl font-semibold text-[var(--fg)]">
                {principle.statement}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{principle.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
