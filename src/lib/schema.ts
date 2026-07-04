import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description:
      "Digital growth and technology studio helping local businesses modernise their digital presence.",
    url: "https://nilachaltech.com",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guwahati",
      addressRegion: "Assam",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
  };
}

export function serviceSchema(service: (typeof services)[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
  };
}

export function articleSchema(article: {
  title: string;
  slug: string;
  publishDate: string;
  summary: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    url: `https://nilachaltech.com/insights/${article.slug}`,
    datePublished: article.publishDate,
    description: article.summary,
    author: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `https://nilachaltech.com${item.href}`,
    })),
  };
}
