import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-24 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-muted mb-8">Page not found</p>
      <Link
        href="/"
        className="text-sm px-4 py-2 rounded border border-border hover:border-foreground transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
