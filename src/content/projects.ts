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

export const projects: Project[] = [
  {
    slug: "puspanjali-guest-house",
    name: "Puspanjali Guest House",
    clientType: "Hospitality",
    industry: "Hotel & Guest House",
    problem:
      "The property required better online visibility, accurate business information, improved review presentation and a clearer room-management workflow.",
    research:
      "Reviewed existing Google Business Profile, local search presence, review handling and daily room-operations process.",
    solution:
      "Optimised the Google Business Profile, improved local search relevance, and built a custom room-operations dashboard with real-time status and housekeeping workflow.",
    features: [
      "Google Business Profile optimised (primary category corrected to Hotel, Guest House retained as secondary)",
      "Amenities and service attributes updated",
      "Visible reviews professionally answered",
      "Local search relevance improved",
      "Custom room-operations dashboard developed",
      "Real-time room-status workflow added",
      "Housekeeping workflow added",
      "Responsive interface created",
      "Assamese labels integrated",
    ],
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Local SEO"],
    outcome:
      "A stronger digital presence and a centralised operational reference for daily staff coordination.",
    screenshotAlt:
      "Puspanjali Guest House room-operations dashboard showing real-time room status and housekeeping workflow.",
    relatedServices: ["digital-presence", "business-systems"],
    featured: true,
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const featuredProject = projects.find((p) => p.featured);
