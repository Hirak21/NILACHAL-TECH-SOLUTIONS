"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function WorkPageContent({ projects }: { projects: Project[] }) {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl"
        >
          Our Work
        </motion.h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
          Selected projects where we have helped businesses transform their
          digital operations.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-lg border border-white/10 bg-[var(--elevated)]/50 p-6 transition-colors hover:border-[var(--color-gold)]/30"
            >
              <div className="aspect-video rounded bg-[var(--color-forest)]" />
              <h2 className="mt-4 text-lg font-semibold text-[var(--fg)]">
                {project.name}
              </h2>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                {project.industry}
              </p>
              <p className="mt-3 line-clamp-2 text-sm text-[var(--muted)]">
                {project.problem}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.relatedServices.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-[var(--muted)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href={`/work/${project.slug}`}
                className="mt-4 inline-block text-sm font-medium text-[var(--fg)] underline underline-offset-4 hover:text-[var(--color-gold)]"
              >
                View Case Study →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
