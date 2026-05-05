import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-bg w-full relative flex min-h-svh flex-col items-center justify-center gap-2 z-2">
      <hgroup className="flex flex-col text-white drop-shadow-2xs opacity-80 items-center justify-center">
        <h1 className="text-7xl tracking-wide font-semibold p-0 m-0">MIK</h1>
        <h2 className="text-3xl tracking-tighter text-center -mt-2 font-bold p-0 m-0">
          SANTOSH
        </h2>
      </hgroup>
      <div className="flex relative items-center justify-start gap-2">
        <motion.p
          className="text-xl inline-block font-pixel-square text-white opacity-90"
          initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : 0.12,
          }}
        >
          I'm a freelance design engineer.
        </motion.p>

        <Block />
      </div>
    </section>
  );
}

function Block() {
  return <div className="w-2 h-4 bg-white opacity-90 animate-blink" />;
}
