"use client";

import { useTheme } from "@/lib/theme-context";
import type { ThemeHomePageProps } from "@/themes/types";

export function ThemedHomePage(props: ThemeHomePageProps) {
  const { theme } = useTheme();
  const HomeComponent = theme.HomePage;
  return <HomeComponent {...props} />;
}
