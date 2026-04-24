import type { ThemeHomePageProps } from "@/themes/types";
import { HeroSection } from "./components/hero-section";
import { WorkTimeline } from "./components/work-timeline";

export function HomePage({ hero, work }: ThemeHomePageProps) {
  return (
    <>
      <HeroSection hero={hero} />
      <WorkTimeline work={work} />
    </>
  );
}
