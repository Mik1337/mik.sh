import type { HeroContent } from "@/content/hero";
import { TextReveal } from "@/components/ui/text-reveal";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection({ hero }: { hero: HeroContent }) {
  return (
    <section
      className="py-16 sm:py-24 mx-4 my-8 p-8 border-4 border-double relative overflow-hidden"
      style={{
        background: "var(--op-bg-card, #faf3e3)",
        borderColor: "var(--op-accent, #c0392b)",
      }}
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 20px, var(--op-accent, #c0392b) 20px, var(--op-accent, #c0392b) 21px)",
        }}
      />

      <div className="relative max-w-2xl space-y-6">
        <TextReveal as="h1">
          <span
            className="block text-5xl sm:text-6xl font-black tracking-widest uppercase"
            style={{
              color: "var(--op-accent, #c0392b)",
              fontFamily: "var(--op-font-display, Georgia, serif)",
              textShadow: "2px 2px 0 var(--op-fg-muted, #8b7355)",
            }}
          >
            {hero.name}
          </span>
        </TextReveal>

        <p
          className="text-sm font-bold uppercase tracking-[0.3em]"
          style={{ color: "var(--op-fg-muted, #8b7355)" }}
        >
          aka &ldquo;{hero.subtitle}&rdquo; · Bounty: ??? Berry
        </p>

        <FadeIn delay={0.2}>
          <p
            className="text-lg leading-relaxed italic"
            style={{ color: "var(--op-fg, #4a3728)" }}
          >
            &ldquo;{hero.intro}&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div
            className="flex items-center gap-4 text-sm font-mono"
            style={{ color: "var(--op-fg-muted, #8b7355)" }}
          >
            <span>📍 {hero.location}</span>
            <span>•</span>
            <span>⚔ {hero.status}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
