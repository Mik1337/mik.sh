declare module "*.mdx" {
  import type { FC } from "react";
  const component: FC<Record<string, unknown>>;
  export default component;
  export const title: string;
  export const date: string;
  export const excerpt: string;
  export const tags: string[];
  export const draft: boolean;
  export const series: string;
  export const cover: string;
}
