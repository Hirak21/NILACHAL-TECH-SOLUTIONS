import type { Metadata } from "next";
import { insights } from "@/content/insights";
import { generatePageMetadata } from "@/lib/seo";
import { InsightsPageContent } from "./content";

export const metadata: Metadata = generatePageMetadata({
  title: "Insights",
  description:
    "Practical articles on local business digitisation, Google Business optimisation, website strategy and technology adoption for businesses in Assam.",
  path: "/insights",
});

export default function InsightsPage() {
  return <InsightsPageContent insights={insights} />;
}
