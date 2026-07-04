import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = path ? `${siteConfig.name} ${path}` : siteConfig.name;
  const desc = description || `${title} — ${siteConfig.name}`;

  return {
    title,
    description: desc,
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description: desc,
      url: path ? `https://nilachaltech.com${path}` : undefined,
      type: "website",
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteConfig.name}`,
      description: desc,
    },
  };
}
