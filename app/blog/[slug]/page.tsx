import { notFound } from "next/navigation";
import { getAllSlugs, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{post.frontmatter.title}</h1>
      <time>{post.frontmatter.date}</time>
      <pre>{post.content.substring(0, 200)}</pre>
    </main>
  );
}
