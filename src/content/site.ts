export type NavItem = { label: string; href: string };

export const siteConfig = {
  name: "Nilachal Tech Solutions",
  founder: "Hirakjyoti Nath",
  location: "Guwahati, Assam, India",
  tagline: "Born from Nilachal. Built for what comes next.",
  primaryCta: { label: "Book a Free Digital Audit", href: "/contact" },
  secondaryCta: { label: "Explore Our Work", href: "/work" },
  navCta: { label: "Start a Project", href: "/contact" },
  email: "hello@nilachaltech.com",
  whatsapp: "+919999999999",
  whatsappLink: "https://wa.me/919999999999",
} as const;

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
