import type { WorkEntry } from "@/content/work";

export function WorkTimeline({ work }: { work: WorkEntry[] }) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-8">Work</h2>
      <div className="space-y-8">
        {work.map((entry) => (
          <div key={entry.id} className="group relative pl-6 border-l border-border">
            <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-border bg-background group-hover:border-accent transition-colors" />

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold">
                  {entry.role}
                </h3>
                {entry.current && (
                  <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium">
                    Current
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted">
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors underline underline-offset-2 decoration-border hover:decoration-foreground"
                  >
                    {entry.company}
                  </a>
                ) : (
                  <span>{entry.company}</span>
                )}
                <span className="text-border">•</span>
                <span>{entry.period}</span>
              </div>

              <p className="text-sm text-muted leading-relaxed max-w-2xl">
                {entry.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {entry.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded bg-card border border-border text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
