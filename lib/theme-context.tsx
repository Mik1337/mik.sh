"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ThemeManifest } from "@/themes/types";
import { defaultTheme } from "@/themes/default";
import { onepieceTheme } from "@/themes/onepiece";

const STORAGE_KEY = "mik-theme";

const themeRegistry: Record<string, ThemeManifest> = {
  default: defaultTheme,
  onepiece: onepieceTheme,
};

interface ThemeContextValue {
  theme: ThemeManifest;
  themeId: string;
  setTheme: (id: string) => void;
  themes: Record<string, ThemeManifest>;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEY) || "default";
    }
    return "default";
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY) || "default";
    setThemeIdState(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const setTheme = useCallback((id: string) => {
    setThemeIdState(id);
    localStorage.setItem(STORAGE_KEY, id);
    document.documentElement.setAttribute("data-theme", id);
  }, []);

  const theme = themeRegistry[themeId] || themeRegistry["default"];

  return (
    <ThemeContext.Provider value={{ theme, themeId, setTheme, themes: themeRegistry }}>
      {mounted ? (
        children
      ) : (
        <div style={{ visibility: "hidden" }}>{children}</div>
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
