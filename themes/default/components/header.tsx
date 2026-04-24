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
    <header className="flex items-center justify-between py-8">
      <Link
        href="/"
        className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
      >
        mik
      </Link>

      <nav className="flex items-center gap-6">
        {navigation.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
