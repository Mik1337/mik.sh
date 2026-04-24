import { siteConfig } from "@/content/site.config";
import { heroContent } from "@/content/hero";
import { workEntries } from "@/content/work";

export type { SiteConfig, NavigationLink, SocialLink } from "@/content/site.config";
export type { HeroContent } from "@/content/hero";
export type { WorkEntry } from "@/content/work";

export function getSiteConfig() {
  return siteConfig;
}

export function getHeroContent() {
  return heroContent;
}

export function getWorkEntries() {
  return workEntries;
}

export function getNavigation() {
  return siteConfig.navigation;
}

export function getSocials() {
  return siteConfig.socials;
}
