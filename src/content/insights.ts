export type Insight = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readingTime: string;
  publishDate: string;
  body?: string;
};

export const insights: Insight[] = [
  {
    slug: "local-seo-guwahati-businesses",
    title: "Local SEO basics for Guwahati businesses",
    category: "Local SEO",
    summary:
      "How accurate business information and category selection affect whether customers find you on Google.",
    readingTime: "4 min",
    publishDate: "2025-01-15",
  },
  {
    slug: "from-paper-to-dashboard",
    title: "From paper registers to a single dashboard",
    category: "Business Operations",
    summary:
      "What changes when a guest house replaces paper room registers with a real-time operational dashboard.",
    readingTime: "5 min",
    publishDate: "2025-02-02",
  },
  {
    slug: "website-strategy-for-hospitality",
    title: "Website strategy for hospitality in Assam",
    category: "Website Strategy",
    summary:
      "Turning a brochure website into a booking and enquiry channel for hotels and guest houses.",
    readingTime: "6 min",
    publishDate: "2025-03-10",
  },
];

export const getInsight = (slug: string) =>
  insights.find((i) => i.slug === slug);
