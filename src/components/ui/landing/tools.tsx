import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Tools() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const macbookRef = useRef<HTMLImageElement>(null);
  const tableRef = useRef<HTMLImageElement>(null);
  const mouseRef = useRef<HTMLImageElement>(null);
  const keyboardRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top top",
          end: "bottom top",
          markers: true,
          scrub: 1,
        },
      });

      tl.to(tableRef.current, {
        y: -100,
        duration: 1,
        delay: 2,
        ease: "power2.inOut",
      }).to(macbookRef.current, {
        y: -36,
        duration: 0.85,
        ease: "power2.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    const container = containerRef.current;
    const target = mouseRef.current;
    if (!container || !target) return;

    const maxShiftX = 28;
    const maxShiftY = 28;

    const handleMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;

      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      const x = gsap.utils.mapRange(0, 1, -maxShiftX, maxShiftX, nx);
      const y = gsap.utils.mapRange(0, 1, -maxShiftY, maxShiftY, ny);

      gsap.to(target, {
        x,
        y,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleLeave = () => {
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
      gsap.killTweensOf(target);
    };
  }, [reduceMotion]);

  return (
    <section
      ref={containerRef}
      id="tools"
      className="loading-bg-4 tools-bg relative z-2 flex min-h-svh w-full flex-col items-center justify-start gap-2 pt-80"
    >
      <div className="relative w-1/2">
        <img
          src="/mac_body.png"
          ref={macbookRef}
          className="macbook pointer-events-none absolute top-[-50%] left-[38%] w-40"
        />
        <img
          src="/table.png"
          ref={tableRef}
          className="pointer-events-none table aspect-video touch-none"
        />
        <img
          src="/keyboard.png"
          ref={keyboardRef}
          className="keyboard pointer-events-none absolute bottom-[38%] left-[34%] size-auto w-50 touch-none"
        />
        <img
          src="/mouse.png"
          ref={mouseRef}
          className="mouse pointer-events-none absolute top-9 right-[20%] size-18 touch-none"
        />
      </div>
    </section>
  );
}
