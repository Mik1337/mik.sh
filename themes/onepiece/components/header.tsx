"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header({
  navigation,
}: {
  navigation: { label: string; href: string }[];
}) {
  const pathname = usePathname();

  return (
    <header
      className="flex items-center justify-between py-6 px-4 border-b-4 border-double"
      style={{
        borderColor: "var(--op-accent, #c0392b)",
        background: "var(--op-bg-card, #faf3e3)",
      }}
    >
      <Link
        href="/"
        className="text-2xl font-black tracking-widest uppercase"
        style={{ color: "var(--op-accent, #c0392b)", fontFamily: "var(--op-font-display, Georgia, serif)" }}
      >
        ⚓ mik
      </Link>

      <nav className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
        {navigation.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: isActive ? "var(--op-accent, #c0392b)" : "var(--op-fg-muted, #8b7355)",
              }}
              className="transition-colors hover:opacity-80"
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="nav-skull"
                  className="text-xs text-center"
                >
                  ☠
                </motion.div>
              )}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
