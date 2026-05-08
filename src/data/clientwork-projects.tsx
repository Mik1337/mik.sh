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
  fill: string & {};
};

const professionalProjects: ClientWorkProject[] = [
  {
    id: "zencure",
    title: "Zencure",
    description: "HIPPA compliant doctor patient management software",
    media: [],
    fill: "#485C00",
  },
  {
    id: "nudge-iaf",
    title: "the/nudge IAF",
    description: "social entrepreneurship",
    media: [],
    fill: "#3F251D",
  },
  {
    id: "nudge-social",
    title: "the/nudge institute",
    description: "social entrepreneurship",
    media: [],
    fill: "#3F251D",
  },
  {
    id: "delta-social",
    title: "the^delta",
    description: "social entrepreneurship",
    media: [],
    fill: "#A80000",
  },
  {
    id: "unmute",
    title: "Unmute",
    description: "Anonymous workplace reporting",
    media: [],
    fill: "#5C4D00",
  },
  {
    id: "floxx",
    title: "Floxx",
    description: "Framer plugin for a custom dropshipping storefront",
    media: [],
    fill: "#003C5C",
  },
  {
    id: "freelance",
    title: "Freelance Work",
    description: "",
    media: [],
    fill: "#3A2B3C",
  },
];

export const clientWorkProjects: ClientWorkProject[] = [
  ...professionalProjects,
];
