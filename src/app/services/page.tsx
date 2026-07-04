import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { ServicesPageContent } from "./content";

export const metadata: Metadata = generatePageMetadata({
  title: "Services",
  description:
    "Google Business Profile optimisation, local SEO, website development, custom dashboards and business automation for Guwahati businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
