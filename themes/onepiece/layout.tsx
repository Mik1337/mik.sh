import type { ThemeLayoutProps } from "@/themes/types";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function Layout({ children, navigation, socials, footer }: ThemeLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "var(--op-bg, #f5e6d0)",
        color: "var(--op-fg, #4a3728)",
      }}
    >
      <div className="mx-auto w-full max-w-3xl flex-1 flex flex-col">
        <Header navigation={navigation} />
        <main className="flex-1">{children}</main>
      </div>
      <Footer socials={socials} footer={footer} />
    </div>
  );
}
