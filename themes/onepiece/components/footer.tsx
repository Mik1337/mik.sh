export function Footer({
  socials,
  footer,
}: {
  socials: { label: string; href: string; icon: string }[];
  footer: string;
}) {
  return (
    <footer
      className="border-t-4 border-double py-8 mt-24 text-center"
      style={{
        borderColor: "var(--op-accent, #c0392b)",
        background: "var(--op-bg-card, #faf3e3)",
      }}
    >
      <p className="text-xs font-mono mb-4" style={{ color: "var(--op-fg-muted, #8b7355)" }}>
        ─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
      </p>
      <div className="flex justify-center gap-6 mb-4">
        {socials.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity"
            style={{ color: "var(--op-accent, #c0392b)" }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-xs" style={{ color: "var(--op-fg-muted, #8b7355)" }}>
        {footer}
      </p>
    </footer>
  );
}
