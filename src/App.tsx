import { useMemo } from "react";
import { useReducedMotion } from "motion/react";
import Hero from "./components/ui/landing/hero";
import Nav from "./components/ui/nav";
import Projects from "./components/ui/landing/projects";
import { ReactLenis } from "lenis/react";
// import Tools from "./components/ui/landing/tools";
import { StaggerElements } from "./components/animation/staggger-elements";

export default function App() {
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
      <ReactLenis root options={lenisOptions} />
      <StaggerElements />
      <main className="flex relative flex-col items-center justify-center gap-20 pb-40">
        <Hero />
        <Projects />
        {/* <Tools /> */}
        <Nav />
      </main>
    </>
  );
}
