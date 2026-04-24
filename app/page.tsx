import {
  getHeroContent,
  getWorkEntries,
  getNavigation,
  getSocials,
  getSiteConfig,
} from "@/lib/content";
import { ThemedHomePage } from "@/components/themed-home";

export default function Page() {
  const hero = getHeroContent();
  const work = getWorkEntries();
  const navigation = getNavigation();
  const socials = getSocials();
  const config = getSiteConfig();

  return (
    <ThemedHomePage
      hero={hero}
      work={work}
      navigation={navigation}
      socials={socials}
      footer={config.footer}
    />
  );
}
