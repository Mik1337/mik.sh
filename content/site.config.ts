export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  defaultTheme: string;
  twitterHandle: string;
  navigation: NavigationLink[];
  socials: SocialLink[];
  footer: string;
}

export const siteConfig: SiteConfig = {
  title: "Mik",
  description:
    "Henlo, I'm mik; I'm a programmer, a maker, a hacker and a lot of other things. This is my website.",
  url: "https://mik.sh",
  defaultTheme: "default",
  twitterHandle: "@AvocadoMik",

  navigation: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ],

  socials: [
    {
      label: "X",
      href: "https://x.com/AvocadoMik",
      icon: "x",
    },
    {
      label: "Email",
      href: "mailto:hello@mik.sh",
      icon: "email",
    },
    {
      label: "GitHub",
      href: "https://github.com/Mik1337",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/santosh%E1%90%9A%EF%BE%82/",
      icon: "linkedin",
    },
  ],

  footer: "© Mik – built with Next.js, deployed on GitHub Pages",
};
