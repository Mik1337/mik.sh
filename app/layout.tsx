import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { getNavigation, getSocials } from "@/lib/content";
import { ThemeProvider } from "@/lib/theme-context";
import { ThemedLayout } from "@/components/themed-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = getNavigation();
  const socials = getSocials();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('mik-theme') || '${siteConfig.defaultTheme}';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })()
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ThemedLayout
            navigation={navigation}
            socials={socials}
            footer={siteConfig.footer}
          >
            {children}
          </ThemedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
