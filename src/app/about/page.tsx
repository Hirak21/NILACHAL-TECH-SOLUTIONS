import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { AboutPageContent } from "./content";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description:
    "Why Nilachal Tech Solutions exists, the meaning behind the name and the company's approach to helping businesses in Assam adopt useful technology.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
