import "server-only";

import { readFile, readdir } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost } from "./blog/utils";

export type { BlogFrontmatter, BlogPost } from "./blog/utils";
export { formatDate } from "./blog/utils";

const BLOG_DIR = join(process.cwd(), "content", "blog");

export async function getAllSlugs(): Promise<string[]> {
  const files = await readdir(BLOG_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await readFile(join(BLOG_DIR, `${slug}.mdx`), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
      };
    })
  );

  return posts
    .filter((p) => !p.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const raw = await readFile(join(BLOG_DIR, `${slug}.mdx`), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}
