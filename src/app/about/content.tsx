"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/content/site";

export function AboutPageContent() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl"
        >
          About {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 space-y-6 text-[var(--fg)]"
        >
          <p>
            Nilachal Tech Solutions was born from a simple observation: many local
            businesses in Assam have the talent, the product and the customers —
            but their digital operations are held together by paper registers,
            scattered spreadsheets and repeated phone calls.
          </p>
          <p>
            The name <strong>Nilachal</strong> is inspired by Nilachal Hill in
            Guwahati. Not by any specific structure on the hill — but by the
            landscape itself: the winding roads, the monsoon mist, the dense
            vegetation, the rocky terrain, the sense of elevation and journey. The
            hill represents foundation, identity and long-term ambition.
          </p>
          <p>
            We are a practical technology partner that connects business strategy,
            digital visibility and operational systems. We help businesses
            modernise their digital presence, improve operational efficiency and
            grow through technology that makes sense.
          </p>

          <div className="border-l-2 border-[var(--color-gold)] pl-6">
            <h2 className="text-xl font-semibold text-[var(--fg)]">
              What we do
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Website design and development, local SEO, Google Business Profile
              optimisation, business digitisation, operational software, custom
              dashboards, workflow automation and digital consulting.
            </p>
          </div>

          <div className="border-l-2 border-[var(--color-gold)] pl-6">
            <h2 className="text-xl font-semibold text-[var(--fg)]">
              Who we work with
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Hotels and guest houses, restaurants and cafés, clinics, local
              service businesses, retail businesses, startups and independent
              founders across Assam.
            </p>
          </div>

          <div className="border-l-2 border-[var(--color-gold)] pl-6">
            <h2 className="text-xl font-semibold text-[var(--fg)]">
              Our approach
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Founded by {siteConfig.founder}, a developer and digital
              problem-solver based in Guwahati. Our approach combines hands-on
              business understanding, product thinking and practical technology
              development. We solve problems before adding tools.
            </p>
          </div>

          <div className="border-l-2 border-[var(--color-gold)] pl-6">
            <h2 className="text-xl font-semibold text-[var(--fg)]">Vision</h2>
            <p className="mt-2 text-[var(--muted)]">
              To help businesses in Assam adopt useful technology — not the most
              expensive tool, but the right system. To be the trusted technology
              partner that local businesses turn to when they are ready to grow.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
