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

export const services: Service[] = [
  {
    slug: "digital-presence",
    index: 1,
    title: "Digital Presence",
    shortTitle: "Presence",
    tagline: "Be discovered, understood and trusted.",
    description:
      "Google Business Profile optimisation, local SEO, review strategy and business-information management.",
    benefit: "Help customers discover, understand and trust the business.",
    deliverables: [
      "Google Business Profile optimisation",
      "Local SEO setup",
      "Business-information correction",
      "Category research",
      "Service and amenity updates",
      "Review-response strategy",
      "Local visibility audit",
    ],
    suitableClients: [
      "Hotels",
      "Guest houses",
      "Restaurants",
      "Clinics",
      "Retail stores",
      "Local service businesses",
    ],
    checkpointLabel: "Origin → Presence",
  },
  {
    slug: "websites-and-experiences",
    index: 2,
    title: "Websites and Experiences",
    shortTitle: "Websites",
    tagline: "Turn attention into enquiries and bookings.",
    description:
      "Modern websites, landing pages and mobile-first digital experiences designed around business goals.",
    benefit: "Turn online attention into enquiries, bookings or customer action.",
    deliverables: [
      "Business websites",
      "Landing pages",
      "Responsive interfaces",
      "Conversion-focused design",
      "SEO-ready page structure",
      "Contact and enquiry systems",
      "Performance optimisation",
    ],
    suitableClients: [
      "Local businesses",
      "Startups",
      "Independent founders",
      "Service providers",
      "Hospitality businesses",
    ],
    checkpointLabel: "Presence → Websites",
  },
  {
    slug: "business-systems",
    index: 3,
    title: "Business Systems",
    shortTitle: "Systems",
    tagline: "One operational reference, not scattered tools.",
    description:
      "Custom dashboards, operational tools, internal applications and workflow digitisation.",
    benefit: "Reduce confusion and create a single operational reference.",
    deliverables: [
      "Room-operation dashboards",
      "Booking systems",
      "Internal admin tools",
      "Customer-management systems",
      "Task and workflow systems",
      "Reports and operational tracking",
      "Custom business applications",
    ],
    suitableClients: [
      "Hotels",
      "Guest houses",
      "Clinics",
      "Restaurants",
      "Retail businesses",
      "Teams with repeated manual workflows",
    ],
    checkpointLabel: "Websites → Systems",
  },
  {
    slug: "automation-and-strategy",
    index: 4,
    title: "Automation and Strategy",
    shortTitle: "Automation",
    tagline: "Less repetitive work, better technology choices.",
    description:
      "Digital audits, workflow automation and practical technology roadmaps.",
    benefit:
      "Reduce repetitive work, improve response time and choose the right technology.",
    deliverables: [
      "Digital audits",
      "Workflow analysis",
      "Automation setup",
      "Notification systems",
      "Lead-routing workflows",
      "Data integrations",
      "Technology roadmaps",
      "Operational consulting",
    ],
    suitableClients: [
      "Growing businesses",
      "Startups",
      "Founders",
      "Teams using disconnected tools",
      "Businesses planning digitisation",
    ],
    checkpointLabel: "Systems → Automation",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
