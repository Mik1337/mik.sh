export function Footer({
  socials,
  footer,
}: {
  socials: { label: string; href: string; icon: string }[];
  footer: string;
}) {
  return (
    <footer className="border-t border-border py-8 mt-24">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {socials.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted">{footer}</p>
      </div>
    </footer>
  );
}
