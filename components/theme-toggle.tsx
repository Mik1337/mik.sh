"use client";

import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
  const { themeId, setTheme, themes } = useTheme();
  const themeIds = Object.keys(themes);

  if (themeIds.length <= 1) return null;

  return (
    <button
      onClick={() => {
        const currentIndex = themeIds.indexOf(themeId);
        const nextIndex = (currentIndex + 1) % themeIds.length;
        setTheme(themeIds[nextIndex]);
      }}
      className="text-xs px-2.5 py-1 rounded border border-border text-muted hover:text-foreground hover:border-foreground transition-all"
      aria-label={`Switch theme (current: ${themeId})`}
    >
      {themes[themeId]?.label ?? themeId}
    </button>
  );
}
