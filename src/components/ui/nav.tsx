import { cn } from "../../utils";
import { motion, useReducedMotion } from "motion/react";

const linkClassName = cn(
  "text-white flex flex-row items-center gap-1 font-pixel-square text-base hover:text-amber-400 transition-colors",
);

interface NavProps {
  startAnimations?: boolean;
}

export default function Nav({ startAnimations = false }: NavProps) {
  const reduceMotion = useReducedMotion();
  const canAnimateIn = reduceMotion || startAnimations;

  return (
    <motion.nav
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={canAnimateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: canAnimateIn ? 0.5 : 0,
      }}
      className="fixed right-0 bottom-0 left-0 z-2 mx-auto mb-4 flex w-fit max-w-[80%] min-w-0 items-center justify-center gap-4 border border-amber-400/80 bg-amber-400/40 px-4 py-2.5 backdrop-blur-sm sm:px-8 md:gap-4"
    >
      <a href="#" className={linkClassName}>
        Home
      </a>
      <Separator />
      <a href="#projects" className={linkClassName}>
        Projects
      </a>
      <Separator />
      {/* <a href="#tools" className={linkClassName}>Tools</a>
      <Separator /> */}
      <a href="#contact" className={linkClassName}>
        Contact
      </a>
    </motion.nav>
  );
}

function Separator() {
  return <span className="text-white/10">|</span>;
}
