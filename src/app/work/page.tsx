import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { generatePageMetadata } from "@/lib/seo";
import { WorkPageContent } from "./content";

export const metadata: Metadata = generatePageMetadata({
  title: "Work",
  description:
    "Selected projects by Nilachal Tech Solutions — digital systems, dashboards and visibility work for local businesses.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkPageContent projects={projects} />;
}
