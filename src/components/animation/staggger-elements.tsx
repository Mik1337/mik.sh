import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, GSDevTools, DrawSVGPlugin);
}

export function HeroAnimation() {
  useEffect(() => {
    const elBg = document.querySelector(".animate-item-bg");
    const elTitle = document.querySelector(".animate-hero");

    const ctx = gsap.context(() => {
      // Initial fade-in animation for background
      gsap.fromTo(
        elBg,
        {
          opacity: 0,
          filter: "blur(100px)",
          y: 100,
        },
        {
          opacity: 1,
          duration: 1.6,
          filter: "blur(0px)",
          y: 0,
          ease: "power3.out",
          delay: 0.5, // Animation starts after 0.5 seconds
        },
      );

      // Parallax scroll effect for background (uses yPercent to avoid conflict)
      gsap.to(elBg, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: elBg,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Initial fade-in animation for title
      gsap.fromTo(
        elTitle,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          delay: 1,
        },
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}

export function StaggerElements() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const elTitles = document.querySelectorAll(".animate-title");
    const elItems = document.querySelectorAll(".animate-items");

    const ctx = gsap.context(() => {
      // Animate each title individually when it enters viewport
      elTitles.forEach((elTitle) => {
        gsap.fromTo(
          elTitle,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: elTitle,
              start: isMobile ? "top 90%" : "top 100%",
              toggleActions: "play none none reverse",
              // markers: true,
            },
          },
        );
      });

      // Animate each items container individually when it enters viewport
      elItems.forEach((itemContainer) => {
        // Check if this container has child elements to stagger
        const children = itemContainer.children;

        if (children.length > 0) {
          // Animate children with stagger
          gsap.fromTo(
            children,
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: itemContainer,
                start: isMobile ? "top 90%" : "top 100%",
                toggleActions: "play none none reverse",
                // markers: true,
              },
            },
          );
        } else {
          // No children, animate the container itself
          gsap.fromTo(
            itemContainer,
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: itemContainer,
                start: "top 90%",
                toggleActions: "play none none reverse",
                // markers: true,
              },
            },
          );
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
