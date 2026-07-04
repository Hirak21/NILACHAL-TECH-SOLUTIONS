"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function CaseStudyContent({ project }: { project: Project }) {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/work"
          className="mb-8 inline-block text-sm text-[var(--muted)] hover:text-[var(--color-gold)]"
        >
          ← Back to Work
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl"
        >
          {project.name}
        </motion.h1>
        <p className="mt-2 font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
          {project.clientType} · {project.industry}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            {[
              { title: "Problem", text: project.problem },
              { title: "Research", text: project.research },
              { title: "Solution", text: project.solution },
              { title: "Outcome", text: project.outcome },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                  {section.title}
                </h2>
                <p className="mt-2 text-[var(--fg)]">{section.text}</p>
              </div>
            ))}

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Key Features
              </h2>
              <ul className="mt-2 space-y-1">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-[var(--fg)]">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="aspect-video rounded-lg border border-white/10 bg-[var(--color-forest)]" />
            <p className="mt-3 text-xs text-[var(--muted)]">
              {project.screenshotAlt}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-gold)]/30 px-3 py-1 text-xs text-[var(--color-gold)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-forest)]/50 p-8 text-center">
          <h3 className="text-xl font-semibold text-[var(--fg)]">
            Have a similar project in mind?
          </h3>
          <p className="mt-2 text-[var(--muted)]">
            Let us review your current setup and recommend the most practical
            next steps.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90"
          >
            Request a Free Digital Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
