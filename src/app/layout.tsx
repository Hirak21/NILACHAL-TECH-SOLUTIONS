import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nilachaltech.com"),
  title: {
    default: "Nilachal Tech Solutions — Digital Systems for Local Business Growth",
    template: "%s · Nilachal Tech Solutions",
  },
  description:
    "Nilachal Tech Solutions combines technology, local visibility and practical business strategy to transform outdated workflows into modern digital experiences. Based in Guwahati, Assam.",
  keywords: [
    "technology studio Guwahati",
    "website development Guwahati",
    "local SEO Guwahati",
    "business automation Assam",
    "custom dashboards local business",
    "hospitality software Assam",
    "digital transformation small business",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nilachaltech.com",
    siteName: "Nilachal Tech Solutions",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <SkipLink />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <StickyMobileCta />
        </ThemeProvider>
      </body>
    </html>
  );
}
