/**
 * Parsed from clientwork.txt — client and selected personal work.
 * `media` are static image URLs only.
 */

export type ClientWorkProject = {
  id: string;
  title: string;
  /** Single line, max 200 characters. */
  description: string;
  media: string[];
};

const zencureDemoVideos = [
  "https://www.northofzero.dev/work/zencure/videos/booking.mp4#t=0.001",
  "https://www.northofzero.dev/work/zencure/videos/Repeat%20Bookings.mp4#t=0.001",
  "https://www.northofzero.dev/work/zencure/videos/Custom%20Appointments.mp4#t=0.001",
  "https://www.northofzero.dev/work/zencure/videos/usingzencure.mp4#t=0.001",
] as const;

export const zencureDemoVideoUrls: readonly string[] = [
  ...new Set(zencureDemoVideos),
];

/** “Other projects” in clientwork.txt: two lines per card (link/name, then blurb). Happy Hours is one card: name, two URLs, then “Cocktail recipes app”. */
export const personalProjects: ClientWorkProject[] = [
  {
    id: "shruthinishad",
    title: "shruthinishad.com",
    description:
      "Website for a chef working in the best restaurant in the city",
    media: [],
  },
  {
    id: "kind-mind",
    title: "Kind Mind Therapy",
    description: "Website for a therapist",
    media: [],
  },
  {
    id: "fun-mik-sh",
    title: "fun.mik.sh",
    description: "My chaotic website",
    media: [],
  },
  {
    id: "whack-a-key",
    title: "WHCK",
    description: "A game, inspired by tetris and osu",
    media: [],
  },
  {
    id: "happy-hours",
    title: "Happy Hours",
    description: "A curated cocktail recipes app",
    media: [],
  },
];

const professionalProjects: ClientWorkProject[] = [
  {
    id: "zencure",
    title: "Zencure (2024)",
    description: "HIPPA compliant doctor patient management software",
    media: [],
  },
  {
    id: "nudge-iaf",
    title: "the/nudge IAF",
    description: "social entrepreneurship",
    media: [],
  },
  {
    id: "nudge-social",
    title: "the/nudge institute",
    description: "social entrepreneurship",
    media: [],
  },
  {
    id: "founders-playbook",
    title: "Founders Playbook",
    description: "Founder-facing tools, blog, tips, and perks. Docusaurus.",
    media: [],
  },
  {
    id: "unmute",
    title: "Unmute",
    description: "Anonymous workplace reporting",
    media: [],
  },
  {
    id: "floxx",
    title: "Floxx",
    description:
      "Framer plugin for a custom dropshipping storefront in minutes. Next.js (App), Supabase, Framer plugin starter.",
    media: [],
  },
  {
    id: "delta",
    title: "the^delta",
    description: "social entrepreneurship",
    media: [],
  },
];

export const clientWorkProjects: ClientWorkProject[] = [
  ...professionalProjects,
  ...personalProjects,
];
