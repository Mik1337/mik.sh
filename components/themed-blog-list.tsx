"use client";

import { useTheme } from "@/lib/theme-context";
import type { ThemeBlogListProps } from "@/themes/types";

export function ThemedBlogList(props: ThemeBlogListProps) {
  const { theme } = useTheme();
  const BlogListComponent = theme.BlogList;
  return <BlogListComponent {...props} />;
}
