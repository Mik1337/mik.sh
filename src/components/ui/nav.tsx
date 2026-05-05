import { cn } from "../../utils";
import { motion, useReducedMotion } from "motion/react";

export default function Nav() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={reduceMotion ? false : { opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : 0.5,
      }}
      className="flex gap-4 z-2 px-8 py-2.5 border border-amber-400/40 bg-amber-400/20  items-center justify-center min-w-0 w-fit max-w-screen-sm  backdrop-blur-sm fixed bottom-0 left-0 right-0 mb-4 mx-auto"
    >
      <Link href="/">Home</Link>
      <Link href="#snippets">Snippets</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#tools">Tools</Link>
    </motion.nav>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className={cn(
        "text-white font-pixel-square text-base hover:text-amber-400 transition-colors",
      )}
    >
      {children}
    </a>
  );
}
