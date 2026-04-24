import type { ThemeManifest } from "@/themes/types";
import { Layout } from "./layout";
import { HomePage } from "./home";
import { BlogList } from "./blog-list";
import { BlogPost } from "./blog-post";

export const onepieceTheme: ThemeManifest = {
  id: "onepiece",
  label: "One Piece",
  Layout,
  HomePage,
  BlogList,
  BlogPost,
};
