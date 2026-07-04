"use client";

import { motion } from "motion/react";
import { featuredProject } from "@/content/projects";
import { services } from "@/content/services";
import Link from "next/link";

export function FeaturedCaseSection() {
  if (!featuredProject) return null;

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-gold)]">
            Featured Project
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl">
            {featuredProject.name}
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Challenge
              </h3>
              <p className="mt-2 text-[var(--fg)]">{featuredProject.problem}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Solution
              </h3>
              <p className="mt-2 text-[var(--fg)]">{featuredProject.solution}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Outcome
              </h3>
              <p className="mt-2 text-[var(--fg)]">{featuredProject.outcome}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-white/10 bg-[var(--elevated)]/50 p-6"
          >
            <div className="aspect-video rounded bg-[var(--color-forest)]" />
            <p className="mt-4 text-xs text-[var(--muted)]">
              Dashboard screenshot placeholder
            </p>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {featuredProject.technology.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-gold)]/30 px-3 py-1 text-xs text-[var(--color-gold)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${featuredProject.slug}`}
          className="mt-6 inline-block text-sm font-medium text-[var(--fg)] underline underline-offset-4 hover:text-[var(--color-gold)]"
        >
          View Full Case Study →
        </Link>
      </div>
    </section>
  );
}
