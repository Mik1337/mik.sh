import type { ThemeLayoutProps } from "@/themes/types";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function Layout({ children, navigation, socials, footer }: ThemeLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col text-foreground bg-background">
      <div className="mx-auto w-full max-w-3xl px-6 flex-1 flex flex-col">
        <Header navigation={navigation} />
        <main className="flex-1">{children}</main>
      </div>
      <Footer socials={socials} footer={footer} />
    </div>
  );
}
