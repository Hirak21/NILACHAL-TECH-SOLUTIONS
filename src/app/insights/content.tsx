"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { Insight } from "@/content/insights";

export function InsightsPageContent({ insights }: { insights: Insight[] }) {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl"
        >
          Insights
        </motion.h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
          Practical knowledge on digitisation, local visibility, website strategy
          and business operations.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-white/10 bg-[var(--elevated)]/50 p-6"
            >
              <p className="mb-2 font-[family-name:var(--font-mono)] text-xs text-[var(--color-gold)]">
                {article.category}
              </p>
              <h2 className="text-lg font-semibold text-[var(--fg)]">
                {article.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                {article.summary}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
                <span>{article.readingTime} read</span>
                <span>{article.publishDate}</span>
              </div>
              <Link
                href={`/insights/${article.slug}`}
                className="mt-4 inline-block text-sm font-medium text-[var(--fg)] underline underline-offset-4 hover:text-[var(--color-gold)]"
              >
                Read Article →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
