import type { ThemeManifest } from "@/themes/types";
import { Layout } from "./layout";
import { HomePage } from "./home";
import { BlogList } from "./blog-list";
import { BlogPost } from "./blog-post";

export const defaultTheme: ThemeManifest = {
  id: "default",
  label: "Default",
  Layout,
  HomePage,
  BlogList,
  BlogPost,
};
