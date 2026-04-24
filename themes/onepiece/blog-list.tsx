import Link from "next/link";
import type { ThemeBlogListProps } from "@/themes/types";
import { formatDate } from "@/lib/blog/utils";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-children";

export function BlogList({ posts }: ThemeBlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-16 text-center">
        <h1
          className="text-4xl font-black uppercase tracking-widest mb-4"
          style={{ color: "var(--op-accent, #c0392b)", fontFamily: "var(--op-font-display, Georgia, serif)" }}
        >
          📜 Log Pose
        </h1>
        <p style={{ color: "var(--op-fg-muted, #8b7355)" }}>
          The needle points nowhere. No posts yet.
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 mx-4">
      <h1
        className="text-4xl font-black uppercase tracking-widest mb-10 text-center"
        style={{ color: "var(--op-accent, #c0392b)", fontFamily: "var(--op-font-display, Georgia, serif)" }}
      >
        📜 Log Pose
      </h1>

      <StaggerContainer className="space-y-6">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block">
              <div
                className="p-6 border-2 border-dashed transition-colors hover:border-double"
                style={{
                  background: "var(--op-bg-card, #faf3e3)",
                  borderColor: "var(--op-border, #d4c5b2)",
                }}
              >
                <h2
                  className="text-xl font-black uppercase tracking-wide mb-2"
                  style={{ color: "var(--op-accent, #c0392b)" }}
                >
                  {post.frontmatter.title}
                </h2>
                <time
                  className="text-xs font-mono mb-2 block"
                  style={{ color: "var(--op-fg-muted, #8b7355)" }}
                >
                  🗓 {formatDate(post.frontmatter.date)}
                </time>
                {post.frontmatter.excerpt && (
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--op-fg, #4a3728)" }}
                  >
                    {post.frontmatter.excerpt}
                  </p>
                )}
                {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {post.frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-bold"
                        style={{ color: "var(--op-fg-muted, #8b7355)" }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
