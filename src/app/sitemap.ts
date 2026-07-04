import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nilachaltech.com";
  const staticPages = ["/", "/services", "/work", "/about", "/insights", "/contact", "/privacy"];

  const projectPages = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const insightPages = insights.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: new Date(i.publishDate),
  }));

  return [
    ...staticPages.map((path) => ({
      url: base + path,
      lastModified: new Date(),
      priority: path === "/" ? 1 : 0.8,
    })),
    ...projectPages,
    ...insightPages,
  ];
}
