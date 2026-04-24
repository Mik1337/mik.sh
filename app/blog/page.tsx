import { getAllPosts } from "@/lib/blog";
import { ThemedBlogList } from "@/components/themed-blog-list";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <ThemedBlogList
      posts={posts.map((p) => ({
        slug: p.slug,
        frontmatter: p.frontmatter,
      }))}
    />
  );
}
