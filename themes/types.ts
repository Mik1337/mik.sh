import type { HeroContent } from "@/content/hero";
import type { WorkEntry } from "@/content/work";
import type { BlogFrontmatter } from "@/lib/blog/utils";

export interface ThemeLayoutProps {
  children: React.ReactNode;
  navigation: { label: string; href: string }[];
  socials: { label: string; href: string; icon: string }[];
  footer: string;
}

export interface ThemeHomePageProps {
  hero: HeroContent;
  work: WorkEntry[];
  navigation: { label: string; href: string }[];
  socials: { label: string; href: string; icon: string }[];
  footer: string;
}

export interface ThemeBlogListProps {
  posts: { slug: string; frontmatter: BlogFrontmatter }[];
}

export interface ThemeBlogPostProps {
  frontmatter: BlogFrontmatter;
  children: React.ReactNode;
}

export interface ThemeManifest {
  id: string;
  label: string;
  Layout: React.ComponentType<ThemeLayoutProps>;
  HomePage: React.ComponentType<ThemeHomePageProps>;
  BlogList: React.ComponentType<ThemeBlogListProps>;
  BlogPost: React.ComponentType<ThemeBlogPostProps>;
}
