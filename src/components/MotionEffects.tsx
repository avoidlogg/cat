"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MotionEffects() {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const settleTimers: number[] = [];
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-reveal"),
    );

    if (reduceMotion) {
      revealElements.forEach((element) =>
        element.classList.add("is-visible", "motion-settled"),
      );
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);

            settleTimers.push(
              window.setTimeout(() => {
                entry.target.classList.add("motion-settled");
              }, 1200),
            );
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -6% 0px",
        },
      );

      revealElements.forEach((element) => observer.observe(element));

      return () => {
        observer.disconnect();
        settleTimers.forEach((timer) => window.clearTimeout(timer));
      };
    }
  }, [pathname]);

  useEffect(() => {
    let animationFrame = 0;

    const updateScrollCue = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsAtTop(window.scrollY <= 24);
      });
    };

    updateScrollCue();
    window.addEventListener("scroll", updateScrollCue, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateScrollCue);
    };
  }, []);

  if (pathname !== "/") return null;

  return (
    <a
      href="#products"
      aria-label="Scroll to products"
      aria-hidden={!isAtTop}
      tabIndex={isAtTop ? 0 : -1}
      className={`scroll-cue ${isAtTop ? "" : "scroll-cue--hidden"}`}
    >
      <span className="scroll-cue__label">Scroll</span>
      <span className="scroll-cue__arrow" aria-hidden="true">
        &darr;
      </span>
    </a>
  );
}
