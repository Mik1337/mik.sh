import { cn } from "../../utils";
import { motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";

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
      className="flex gap-2 md:gap-4 z-2 px-8 py-2.5 border border-amber-400/40 bg-amber-400/20  items-center justify-center min-w-0 w-fit max-w-screen-sm  backdrop-blur-sm fixed bottom-0 left-0 right-0 mb-4 mx-auto"
    >
      <Link href="/">Home</Link>
      <Separator />
      <Link href="#snippets">
        Snippets <ExternalLink size={16} />
      </Link>
      <Separator />
      <Link href="#projects">Projects</Link>
      <Separator />
      <Link href="#tools">Tools</Link>
      <Separator />
      <Link href="#contact">Contact</Link>
    </motion.nav>
  );
}

function Separator() {
  return <span className="text-white/10">|</span>;
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className={cn(
        "text-white flex flex-row items-center gap-1 font-pixel-square text-base hover:text-amber-400 transition-colors",
      )}
    >
      {children}
    </a>
  );
}
