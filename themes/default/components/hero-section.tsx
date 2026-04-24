import type { HeroContent } from "@/content/hero";

export function HeroSection({ hero }: { hero: HeroContent }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          {hero.name}
        </h1>
        <p className="text-lg text-muted leading-relaxed">{hero.intro}</p>
        <div className="flex items-center gap-4 text-sm text-muted">
          <span>{hero.location}</span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {hero.status}
          </span>
        </div>
      </div>
    </section>
  );
}
