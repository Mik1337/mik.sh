export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  draft: boolean;
  series?: string;
  cover?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
