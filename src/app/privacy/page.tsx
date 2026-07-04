import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Nilachal Tech Solutions — how we collect, use and protect your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--fg)]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Last updated: January 2025
        </p>
        <div className="mt-8 space-y-6 text-[var(--fg)]">
          <section>
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p className="mt-2 text-[var(--muted)]">
              When you submit a contact form, we collect your name, business
              name, phone number, email address and the details you provide
              about your project or business problem.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">How We Use Your Information</h2>
            <p className="mt-2 text-[var(--muted)]">
              We use your information solely to respond to your enquiry, provide
              a digital audit and communicate about potential projects. We do not
              sell, share or rent your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Data Protection</h2>
            <p className="mt-2 text-[var(--muted)]">
              We take reasonable steps to protect your personal information from
              unauthorised access, use or disclosure. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-[var(--muted)]">
              For questions about this policy, contact us at hello@nilachaltech.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
