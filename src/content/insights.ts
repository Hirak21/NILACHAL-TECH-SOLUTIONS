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
    body: `
      <h2>Why local SEO matters in Guwahati</h2>
      <p>When someone searches "best guest house in Guwahati" or "restaurant near me", Google decides which businesses appear first. For local businesses, this visibility is the difference between a full booking calendar and an empty one.</p>
      <p>Local SEO is not about ranking for random keywords — it's about appearing when people in your area are actively looking for what you offer.</p>

      <h2>Start with your Google Business Profile</h2>
      <p>Your Google Business Profile (GBP) is the single most important local SEO asset you have. Here's what to get right:</p>
      <ul>
        <li><strong>Accurate name, address, and phone (NAP):</strong> Your business name should match your real-world signage. Use your exact street address — no abbreviations or shortcuts.</li>
        <li><strong>Primary category:</strong> Choose the most specific category that fits. "Hotel" is better than "Business"; "Restaurant" is better than "Food Service".</li>
        <li><strong>Business hours:</strong> Keep them updated, including holiday hours. Incorrect hours erode trust.</li>
        <li><strong>Photos:</strong> Businesses with 100+ photos get 520% more calls than average. Show your space, your team, your product.</li>
      </ul>

      <h2>Reviews are your reputation</h2>
      <p>Google reviews directly influence your ranking. But beyond ranking, they influence whether someone chooses you over a competitor. Ask satisfied customers to leave a review — and respond to every review, positive or negative.</p>
      <p>A simple system works: after a successful service or stay, send a direct link to your Google review page via WhatsApp or SMS.</p>

      <h2>Local citations and consistency</h2>
      <p>Your business should appear consistently across directories — JustDial, Sulekha, IndiaMART, Zomato (for restaurants), MakeMyTrip (for hospitality). Inconsistent information (different phone numbers, old addresses) confuses Google and hurts your ranking.</p>

      <h2>What to do next</h2>
      <p>Audit your Google Business Profile today. Check your categories, update your photos, and ask your last five customers for a review. These small steps compound quickly in local search.</p>
    `,
  },
  {
    slug: "from-paper-to-dashboard",
    title: "From paper registers to a single dashboard",
    category: "Business Operations",
    summary:
      "What changes when a guest house replaces paper room registers with a real-time operational dashboard.",
    readingTime: "5 min",
    publishDate: "2025-02-02",
    body: `
      <h2>The paper problem</h2>
      <p>Most small hospitality businesses in Assam still track bookings on paper registers or scattered Excel sheets. The front desk keeps one notebook, the owner keeps another, and the housekeeping team relies on verbal updates. This works until it doesn't — double bookings, missed checkouts, and lost revenue become regular occurrences.</p>

      <h2>What a dashboard changes</h2>
      <p>A single dashboard consolidates your room inventory, bookings, check-ins/check-outs, and guest information into one place that everyone can access. Here's what shifts:</p>
      <ul>
        <li><strong>Real-time room status:</strong> Clean, occupied, checkout-pending — visible to front desk, housekeeping, and management simultaneously.</li>
        <li><strong>Booking calendar:</strong> Visual calendar shows availability at a glance. No more flipping through pages to check next week.</li>
        <li><strong>Guest history:</strong> Repeat guests are recognised. Preferences are noted. Personalisation becomes possible without memory.</li>
        <li><strong>Revenue tracking:</strong> Daily, weekly, monthly revenue visible without manual calculations.</li>
      </ul>

      <h2>The transition is simpler than you think</h2>
      <p>You don't need to replace everything at once. Start with digitising your room inventory and booking calendar. Add check-in/check-out tracking next. Revenue reporting comes last. Each step reduces manual work and errors.</p>
      <p>The key is building the system around your actual workflow — not forcing your team to adapt to rigid software designed for big hotel chains.</p>

      <h2>Measuring the impact</h2>
      <p>Clients who switched from paper to a basic dashboard typically report: fewer double bookings (often zero), faster check-out processing, better occupancy visibility, and hours saved each week on manual reconciliation.</p>
      <p>The return on investment isn't just money saved — it's the time and mental energy your team gets back to focus on guest experience instead of paperwork.</p>
    `,
  },
  {
    slug: "website-strategy-for-hospitality",
    title: "Website strategy for hospitality in Assam",
    category: "Website Strategy",
    summary:
      "Turning a brochure website into a booking and enquiry channel for hotels and guest houses.",
    readingTime: "6 min",
    publishDate: "2025-03-10",
    body: `
      <h2>Beyond a digital brochure</h2>
      <p>Most hospitality websites in Assam show beautiful photos, list room types, and end with a phone number. That's a brochure — not a booking channel. A strategic website should convert visitors into enquiries and direct bookings, reducing dependency on OTA commissions.</p>

      <h2>The essential elements</h2>
      <ul>
        <li><strong>Clear value proposition above the fold:</strong> What makes your property unique? Location, experience, price — state it immediately.</li>
        <li><strong>Room comparison table:</strong> Let guests compare room types, prices, and amenities side by side. Confusion kills conversions.</li>
        <li><strong>Transparent pricing:</strong> Show rates for different seasons. Hidden pricing creates friction and distrust.</li>
        <li><strong>Prominent booking CTA:</strong> Every page should have a visible "Check Availability" or "Enquire Now" button.</li>
        <li><strong>WhatsApp integration:</strong> For Indian hospitality, WhatsApp is the preferred enquiry channel. Make it one tap to start a conversation.</li>
      </ul>

      <h2>SEO for hospitality</h2>
      <p>Target intent-based keywords: "homestay near Kamakhya temple", "budget hotel in Guwahati airport area", "family resort Assam". These are the searches your potential guests actually make. Create dedicated landing pages for each key search intent.</p>
      <p>Local SEO is critical — your Google Business Profile should link to your website, and your website should embed a Google Map with your exact location.</p>

      <h2>Speed matters more than beauty</h2>
      <p>A beautiful website that takes 5 seconds to load on mobile (where 70%+ of hospitality traffic comes from) loses visitors. Optimise images, use modern formats, and prioritise mobile performance. A fast site with clear information outperforms a slow site with stunning visuals.</p>

      <h2>The booking flow</h2>
      <p>Reduce steps between "interested" and "booked". Every extra form field, every redirect, every moment of uncertainty loses potential guests. The ideal flow: see availability → choose room → enter details → confirm. Three to four steps maximum.</p>
      <p>For businesses not ready for full online booking, a well-designed enquiry form that pre-fills the dates and room type is a practical middle ground that still captures intent.</p>
    `,
  },
];

export const getInsight = (slug: string) =>
  insights.find((i) => i.slug === slug);
