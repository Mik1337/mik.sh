import { useMemo } from "react";
import { useReducedMotion } from "motion/react";
import { ReactLenis } from "lenis/react";
import { StaggerElements } from "../animation/staggger-elements";
import Hero from "../ui/landing/hero";
import Projects from "../ui/landing/projects";
import Nav from "../ui/nav";

interface IndexPageProps {
  animateHeroTitle?: boolean;
  disableScroll?: boolean;
  startHeroAnimations?: boolean;
}

export default function IndexPage({
  animateHeroTitle = false,
  disableScroll = false,
  startHeroAnimations = false,
}: IndexPageProps) {
  const reduceMotion = useReducedMotion();

  const lenisOptions = useMemo(
    () => ({
      autoRaf: true,
      anchors: reduceMotion === true ? ({ immediate: true } as const) : true,
      smoothWheel: reduceMotion !== true,
      ...(reduceMotion === true ? { lerp: 1 } : { lerp: 0.08 }),
    }),
    [reduceMotion],
  );

  return (
    <>
      {!disableScroll && <ReactLenis root options={lenisOptions} />}
      <StaggerElements />
      <main className="flex relative flex-col items-center justify-center gap-20 pb-40">
        <Hero
          animateTitle={animateHeroTitle}
          startAnimations={startHeroAnimations}
        />
        <Projects />
        <Nav />
      </main>
    </>
  );
}
