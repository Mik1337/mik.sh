import Link from "next/link";
import type { ThemeBlogPostProps } from "@/themes/types";
import { formatDate } from "@/lib/blog/utils";

export function BlogPost({ frontmatter, children }: ThemeBlogPostProps) {
  return (
    <article className="py-16">
      <header className="mb-10 space-y-4">
        <Link
          href="/blog"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← All posts
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {frontmatter.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-muted">
          <time dateTime={frontmatter.date}>
            {formatDate(frontmatter.date)}
          </time>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <>
              <span className="text-border">•</span>
              <div className="flex flex-wrap gap-1">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-1.5 py-0.5 rounded bg-card border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {frontmatter.series && (
          <p className="text-sm text-muted">
            Part of the{" "}
            <span className="font-medium text-foreground">
              {frontmatter.series}
            </span>{" "}
            series
          </p>
        )}
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {children}
      </div>
    </article>
  );
}
