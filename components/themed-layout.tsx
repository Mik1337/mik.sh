"use client";

import { useTheme } from "@/lib/theme-context";
import type { ThemeLayoutProps } from "@/themes/types";

export function ThemedLayout({
  children,
  ...rest
}: ThemeLayoutProps & { children: React.ReactNode }) {
  const { theme } = useTheme();
  const Layout = theme.Layout;
  return <Layout {...rest}>{children}</Layout>;
}
