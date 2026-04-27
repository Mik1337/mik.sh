import Hero from "./components/ui/landing/hero";
import Nav from "./components/ui/nav";

export default function App() {
  return (
    <main className="flex relative flex-col items-center justify-center">
      <Hero />
      <Nav />
    </main>
  );
}
