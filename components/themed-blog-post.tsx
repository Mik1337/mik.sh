"use client";

import { useTheme } from "@/lib/theme-context";
import type { ThemeBlogPostProps } from "@/themes/types";

export function ThemedBlogPost(props: ThemeBlogPostProps) {
  const { theme } = useTheme();
  const BlogPostComponent = theme.BlogPost;
  return <BlogPostComponent {...props} />;
}
