import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { ServicesPageContent } from "./content";
import { services } from "@/content/services";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "Services",
  description:
    "Google Business Profile optimisation, local SEO, website development, custom dashboards and business automation for Guwahati businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {services.map((service) => (
        <script
          key={service.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
        />
      ))}
      <ServicesPageContent />
    </>
  );
}
