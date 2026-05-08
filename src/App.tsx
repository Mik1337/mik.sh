import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./components/pages/index";
import ProjectPage from "./components/pages/project";
import ProjectIdPage from "./components/pages/project-id";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [startHeroAnimations, setStartHeroAnimations] = useState(false);

  useEffect(() => {
    if (!showLoader) return;

    const html = document.documentElement;
    const { overflow: prevHtmlOverflow } = html.style;
    const { overflow: prevBodyOverflow } = document.body.style;

    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [showLoader]);

  useEffect(() => {
    const minDelayMs = 2000;
    const startTime = Date.now();
    let didFinish = false;
    let timeoutId: number | undefined;

    const finish = () => {
      if (didFinish) return;
      didFinish = true;

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDelayMs - elapsed);
      timeoutId = window.setTimeout(() => {
        if (
          "startViewTransition" in document &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          const transition = document.startViewTransition(() => {
            flushSync(() => {
              setIsLoaded(true);
              setShowLoader(false);
            });
          });

          void transition.finished.then(
            () => setStartHeroAnimations(true),
            () => setStartHeroAnimations(true),
          );
          return;
        }

        setIsLoaded(true);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
      return () => {
        if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      };
    }

    window.addEventListener("load", finish);

    return () => {
      window.removeEventListener("load", finish);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !showLoader) return;
    const timeoutId = window.setTimeout(() => {
      setShowLoader(false);
      setStartHeroAnimations(true);
    }, 500);
    return () => window.clearTimeout(timeoutId);
  }, [isLoaded, showLoader]);

  return (
    <BrowserRouter>
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black text-white transition-opacity duration-500 ${
            isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <hgroup className="site-title-transition drop-shadow-2xs flex flex-col items-center justify-center text-white opacity-80">
            <h1 className="m-0 p-0 text-7xl font-semibold tracking-wide">
              MIK
            </h1>
            <h2 className="m-0 -mt-2 p-0 text-center text-3xl font-bold tracking-tighter">
              SANTOSH
            </h2>
          </hgroup>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <IndexPage
              animateHeroTitle={!showLoader}
              disableScroll={showLoader}
              startHeroAnimations={startHeroAnimations}
            />
          }
        />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectIdPage />} />
      </Routes>
    </BrowserRouter>
  );
}
