export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface ScheduleSession {
  id: string;
  timeSlot: string;
  title: string;
  track: string;
  type: "Keynote" | "Panel" | "Poster" | "Networking";
  description: string;
  speakerPlaceholder: string;
}

export interface ScheduleDay {
  day: string;
  theme: string;
  sessions: ScheduleSession[];
}

export interface SponsorTier {
  tierName: string;
  badge: string;
  isFeatured?: boolean;
  perks: string[];
}

export interface SponsorPlaceholder {
  id: string;
  tier: string;
  name: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "Logistics" | "Poster Exhibition" | "Registration" | "General";
}

export interface SiteConfig {
  name: string;
  fullName: string;
  edition: string;
  tagline: string;
  description: string;
  dates: {
    display: string;
    note: string;
  };
  location: {
    city: string;
    venue: string;
    hybridNote: string;
  };
  navLinks: NavItem[];
  metrics: MetricItem[];
  topics: string[];
  ticketTiers: Array<{
    name: string;
    badge: string;
    status: string;
    description: string;
    perks: string[];
  }>;
  posterSubmission: {
    statusBadge: string;
    guidelines: string[];
    tracks: string[];
  };
  sponsorTiers: SponsorTier[];
  sponsorLogos: SponsorPlaceholder[];
  prospectusPreview: {
    title: string;
    summary: string;
    highlights: string[];
  };
  faq: FaqItem[];
  contact: {
    email: string;
    discord: string;
    linkedin: string;
    location: string;
  };
}
