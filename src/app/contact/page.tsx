import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { ContactPageContent } from "./content";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Start a project with Nilachal Tech Solutions. Book a free digital audit for your business in Guwahati, Assam.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
