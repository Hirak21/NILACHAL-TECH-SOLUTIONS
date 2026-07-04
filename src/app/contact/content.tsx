"use client";

import { motion } from "motion/react";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/content/site";

export function ContactPageContent() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl"
        >
          Contact Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 grid gap-12 lg:grid-cols-5"
        >
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-white/10 bg-[var(--elevated)]/50 p-6">
              <h3 className="text-lg font-semibold text-[var(--fg)]">
                Direct Contact
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Reach us directly on WhatsApp or email.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener"
                  className="rounded border border-[var(--muted)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded border border-[var(--muted)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[var(--elevated)]/50 p-6">
              <h3 className="text-lg font-semibold text-[var(--fg)]">
                {siteConfig.location}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Working with ambitious local businesses across Assam.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
