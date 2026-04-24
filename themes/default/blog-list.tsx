import Link from "next/link";
import type { ThemeBlogListProps } from "@/themes/types";
import { formatDate } from "@/lib/blog/utils";

export function BlogList({ posts }: ThemeBlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted">No posts yet. Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block space-y-2">
              <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                {post.frontmatter.title}
              </h2>

              <div className="flex items-center gap-2 text-sm text-muted">
                <time dateTime={post.frontmatter.date}>
                  {formatDate(post.frontmatter.date)}
                </time>
              </div>

              {post.frontmatter.excerpt && (
                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                  {post.frontmatter.excerpt}
                </p>
              )}

              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-card border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
