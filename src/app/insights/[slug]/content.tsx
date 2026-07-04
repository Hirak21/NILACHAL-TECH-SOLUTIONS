"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { Insight } from "@/content/insights";

export function ArticleContent({ article }: { article: Insight }) {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/insights"
          className="mb-8 inline-block text-sm text-[var(--muted)] hover:text-[var(--color-gold)]"
        >
          ← Back to Insights
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs text-[var(--color-gold)]">
            {article.category}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-[var(--muted)]">{article.summary}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-[var(--muted)]">
            <span>{article.readingTime} read</span>
            <span>{article.publishDate}</span>
          </div>
        </motion.div>

        <div className="mt-12 space-y-6 text-[var(--fg)]">
          {article.body ? (
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          ) : (
            <p className="text-[var(--muted)] italic">
              Article content coming soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
