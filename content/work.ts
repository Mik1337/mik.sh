export interface WorkEntry {
  id: string;
  company: string;
  url?: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  current: boolean;
}

export const workEntries: WorkEntry[] = [
  {
    id: "wknd",
    company: "WKND inc.",
    url: "https://wknd.com",
    role: "Lead Software Engineer",
    period: "Jun 2022 – Present",
    description:
      "Overseeing development and implementation across the stack. Previously Full Stack Developer (Dec 2020 – Jun 2022) migrating CSR React.js to Next.js, building React Native apps, managing DevOps with GitHub Actions and AWS Elastic Beanstalk, and designing REST APIs with NestJS.",
    skills: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Stripe",
      "GitHub Actions",
    ],
    current: true,
  },
  {
    id: "north-of-zero",
    company: "North Of Zero",
    url: "https://northofzero.dev",
    role: "Designer",
    period: "Jul 2023 – Present",
    description:
      "Part-time design work. Figma, React.js prototyping, and UI/UX consultation.",
    skills: ["Figma", "React.js", "UI/UX"],
    current: true,
  },
  {
    id: "thenudge",
    company: "The/Nudge Institute",
    url: "https://thenudge.org",
    role: "Technical Support & Research",
    period: "Sep 2020 – Jul 2022",
    description:
      "Research for conferences, implementing marketing automation, organizing community events, technical support across the organization, and data analysis.",
    skills: ["AWS Lambda", "Amazon S3", "Amazon Redshift", "HubSpot"],
    current: false,
  },
  {
    id: "fanlytiks",
    company: "Fanlytiks",
    url: "https://www.linkedin.com/company/fanlytiks",
    role: "Full Stack Developer",
    period: "Jul 2019 – Nov 2019",
    description:
      "Point of contact between client and product team for a sports analytics dashboard. Built GraphQL APIs with Apollo, maintained PostgreSQL databases, and contributed to the React.js/Next.js frontend.",
    skills: ["Node.js", "Apollo GraphQL", "PostgreSQL", "Next.js"],
    current: false,
  },
];
