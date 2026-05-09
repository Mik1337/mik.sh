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
    id: "landing-pages",
    title: "Landing pages",
    description: "social entrepreneurship dashboard",
    media: [],
    fill: "#3F251D",
  },
  {
    id: "dashboards",
    title: "Dashboards",
    description: "Various web apps for a variety of clients",
    media: [],
    fill: "#8BB001",
  },
  {
    id: "apps",
    title: "Mobile Apps",
    description: "Anonymous workplace abuse reporting",
    media: [],
    fill: "#5C4D00",
  },
];

export const clientWorkProjects: ClientWorkProject[] = [
  ...professionalProjects,
];
