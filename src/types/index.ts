export type Service = {
  slug: string;
  index: number;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  benefit: string;
  deliverables: string[];
  suitableClients: string[];
  checkpointLabel: string;
};

export type Project = {
  slug: string;
  name: string;
  clientType: string;
  industry: string;
  problem: string;
  research: string;
  solution: string;
  features: string[];
  technology: string[];
  outcome: string;
  screenshotAlt: string;
  relatedServices: string[];
  featured: boolean;
};

export type Principle = {
  statement: string;
  detail: string;
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readingTime: string;
  publishDate: string;
  body?: string;
};

export type NavItem = { label: string; href: string };

export type SiteConfig = {
  name: string;
  founder: string;
  location: string;
  tagline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  navCta: { label: string; href: string };
  email: string;
  whatsapp: string;
  whatsappLink: string;
};
