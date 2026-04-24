import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="text-2xl font-bold mt-10 mb-4" {...props}>{children}</h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-xl font-semibold mt-8 mb-3" {...props}>{children}</h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-lg font-semibold mt-6 mb-2" {...props}>{children}</h3>
    ),
    p: ({ children, ...props }) => (
      <p className="leading-relaxed mb-4" {...props}>{children}</p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside mb-4 space-y-1" {...props}>{children}</ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1" {...props}>{children}</ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>{children}</li>
    ),
    a: ({ children, href, ...props }) => (
      <a href={href} className="text-accent underline underline-offset-2 hover:opacity-80" {...props}>{children}</a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-2 border-border pl-4 italic text-muted my-4" {...props}>{children}</blockquote>
    ),
    hr: (props) => (
      <hr className="my-8 border-border" {...props} />
    ),
    ...components,
  };
}
