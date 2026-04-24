import type { WorkEntry } from "@/content/work";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-children";

export function WorkTimeline({ work }: { work: WorkEntry[] }) {
  return (
    <section className="py-8 mx-4">
      <h2
        className="text-2xl font-black uppercase tracking-widest mb-8 text-center"
        style={{
          color: "var(--op-accent, #c0392b)",
          fontFamily: "var(--op-font-display, Georgia, serif)",
        }}
      >
        ⛵ Voyage Log
      </h2>

      <StaggerContainer className="space-y-6">
        {work.map((entry) => (
          <StaggerItem key={entry.id}>
            <div
              className="p-6 border-2 border-dashed relative"
              style={{
                background: "var(--op-bg-card, #faf3e3)",
                borderColor: "var(--op-border, #d4c5b2)",
              }}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3
                    className="font-black text-lg uppercase tracking-wide"
                    style={{ color: "var(--op-accent, #c0392b)" }}
                  >
                    {entry.role}
                  </h3>
                  {entry.current && (
                    <span
                      className="text-[10px] uppercase tracking-widest px-2 py-0.5 font-bold"
                      style={{
                        background: "var(--op-accent, #c0392b)",
                        color: "#fff",
                      }}
                    >
                      ⭐ Active
                    </span>
                  )}
                </div>

                <div
                  className="flex items-center gap-2 text-sm font-mono"
                  style={{ color: "var(--op-fg-muted, #8b7355)" }}
                >
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:opacity-70"
                    >
                      {entry.company}
                    </a>
                  ) : (
                    <span>{entry.company}</span>
                  )}
                  <span>·</span>
                  <span>🗓 {entry.period}</span>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--op-fg, #4a3728)" }}
                >
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 border font-bold"
                      style={{
                        borderColor: "var(--op-border, #d4c5b2)",
                        color: "var(--op-fg-muted, #8b7355)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
