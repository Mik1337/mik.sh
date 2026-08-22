import { clientWorkProjects } from "@/data/clientwork-projects";
import { cn } from "@/utils";
import Folder from "../cards/folder";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const ufoRef = useRef<HTMLImageElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "100% 100%",
        end: "100% 0%",
        markers: true,
        scrub: 1,
      },
    });

    tl.set(titleRef.current, { opacity: 0 });
    tl.set(ufoRef.current, { opacity: 0, y: 100, x: 100 });
    tl.set(projectsRef.current, { opacity: 0, scale: 0.9, y: 100 });

    tl.to(ufoRef.current, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(titleRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(
        projectsRef.current,
        {
          opacity: 1,
          scale: 1,
          y: -100,
          duration: 0.8,
          ease: "power2.out",
        },
        "<",
      );

    tl.play();
    return () => {
      tl.kill();
    };
  }, [reduceMotion]);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="projects-bg relative z-2 mx-auto flex min-h-3/4 w-full max-w-7xl flex-col items-center justify-start gap-2"
    >
      <img
        ref={ufoRef}
        src="/assets/projects/aliencat.png"
        alt=""
        className="bg-(--bg)pointer-events-none absolute top-0 left-0 isolate inline-block h-auto w-40"
      />
      <hgroup
        ref={titleRef}
        className="flex flex-col items-center justify-start gap-2"
      >
        <h2 className="font-pixel-circle text-center text-6xl font-bold text-white opacity-80">
          What we can work on
        </h2>
        <p className="font-pixel-square text-center text-lg text-white opacity-80">
          together
        </p>
      </hgroup>
      <div
        ref={projectsRef}
        className={cn(
          "grid grid-cols-1 sm:grid-cols-3",
          "gap-x-2 gap-y-8 pt-6 sm:pt-8",
          "w-full max-w-4xl",
          "items-stretch justify-items-center",
        )}
      >
        {clientWorkProjects.map((project) => (
          <Folder
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            media={project.media}
            fill={project.fill}
          />
        ))}
      </div>
    </section>
  );
}
