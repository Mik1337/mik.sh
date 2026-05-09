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
    id: "noz",
    title: "North of Zero",
    description: "Various web apps for a variety of clients",
    media: [],
    fill: "#8BB001",
  },
  {
    id: "nudge",
    title: "the/nudge institute",
    description: "social entrepreneurship dashboard",
    media: [],
    fill: "#3F251D",
  },
  {
    id: "delta",
    title: "the^delta",
    description: "social entrepreneurship dashboard",
    media: [],
    fill: "#A80000",
  },
  {
    id: "unmute",
    title: "Unmute",
    description: "Anonymous workplace abuse reporting",
    media: [],
    fill: "#5C4D00",
  },

  {
    id: "other",
    title: "Other Work",
    description: "Other work I've done.",
    media: [],
    fill: "#3A2B3C",
  },
];

export const clientWorkProjects: ClientWorkProject[] = [
  ...professionalProjects,
];
