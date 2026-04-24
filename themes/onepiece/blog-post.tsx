import Link from "next/link";
import type { ThemeBlogPostProps } from "@/themes/types";
import { formatDate } from "@/lib/blog/utils";

export function BlogPost({ frontmatter, children }: ThemeBlogPostProps) {
  return (
    <article className="py-16 mx-4">
      <div
        className="p-8 border-4 border-double"
        style={{
          background: "var(--op-bg-card, #faf3e3)",
          borderColor: "var(--op-accent, #c0392b)",
        }}
      >
        <header className="mb-10 space-y-4">
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity"
            style={{ color: "var(--op-fg-muted, #8b7355)" }}
          >
            ⬅ Navigate to Log Pose
          </Link>

          <h1
            className="text-3xl sm:text-4xl font-black tracking-wide leading-tight"
            style={{
              color: "var(--op-accent, #c0392b)",
              fontFamily: "var(--op-font-display, Georgia, serif)",
            }}
          >
            {frontmatter.title}
          </h1>

          <div
            className="flex items-center gap-3 text-sm font-mono"
            style={{ color: "var(--op-fg-muted, #8b7355)" }}
          >
            <time>🗓 {formatDate(frontmatter.date)}</time>

            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <>
                <span>·</span>
                <span>🏷 {frontmatter.tags.join(", ")}</span>
              </>
            )}
          </div>

          {frontmatter.series && (
            <p
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: "var(--op-fg-muted, #8b7355)" }}
            >
              📖 Series: {frontmatter.series}
            </p>
          )}
        </header>

        <div
          className="prose max-w-none"
          style={
            {
              "--tw-prose-body": "var(--op-fg, #4a3728)",
              "--tw-prose-headings": "var(--op-accent, #c0392b)",
              "--tw-prose-links": "var(--op-accent, #c0392b)",
              "--tw-prose-bold": "var(--op-accent, #c0392b)",
              "--tw-prose-code": "var(--op-fg-muted, #8b7355)",
              "--tw-prose-pre-bg": "#2d2420",
            } as React.CSSProperties
          }
        >
          {children}
        </div>
      </div>
    </article>
  );
}
