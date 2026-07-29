"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MotionEffects() {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const settleTimers: number[] = [];
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-reveal"),
    );
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
  }, [pathname]);

  useEffect(() => {
    let animationFrame = 0;
    let scrollIdleTimer = 0;

    const updateScrollCue = () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(scrollIdleTimer);
      document.documentElement.classList.add("is-scrolling");

      animationFrame = requestAnimationFrame(() => {
        setIsAtTop(window.scrollY <= 24);
      });

      scrollIdleTimer = window.setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling");
      }, 140);
    };

    setIsAtTop(window.scrollY <= 24);
    window.addEventListener("scroll", updateScrollCue, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(scrollIdleTimer);
      document.documentElement.classList.remove("is-scrolling");
      window.removeEventListener("scroll", updateScrollCue);
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let currentY = window.scrollY;
    let targetY = currentY;
    let animationFrame = 0;
    let isAnimating = false;

    const maximumScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const stopAnimation = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      isAnimating = false;
      currentY = window.scrollY;
      targetY = currentY;
      document.documentElement.classList.remove("inertial-scrolling");
    };

    const canScrollNestedElement = (target: EventTarget | null, delta: number) => {
      let element = target instanceof HTMLElement ? target : null;

      while (element && element !== document.body) {
        const styles = window.getComputedStyle(element);
        const allowsScroll = /(auto|scroll)/.test(styles.overflowY);

        if (allowsScroll && element.scrollHeight > element.clientHeight) {
          const canMoveDown =
            delta > 0 &&
            element.scrollTop + element.clientHeight < element.scrollHeight - 1;
          const canMoveUp = delta < 0 && element.scrollTop > 0;

          if (canMoveDown || canMoveUp) return true;
        }

        element = element.parentElement;
      }

      return false;
    };

    const animateScroll = () => {
      const distance = targetY - currentY;
      currentY += distance * 0.115;

      if (Math.abs(distance) < 0.35) {
        currentY = targetY;
        document.documentElement.scrollTop = currentY;
        stopAnimation();
        return;
      }

      document.documentElement.scrollTop = currentY;
      animationFrame = requestAnimationFrame(animateScroll);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.defaultPrevented) return;

      const multiplier =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? window.innerHeight
            : 1;
      const delta = event.deltaY * multiplier;

      if (!delta || canScrollNestedElement(event.target, delta)) return;

      event.preventDefault();
      targetY = Math.min(maximumScroll(), Math.max(0, targetY + delta));

      if (!isAnimating) {
        currentY = window.scrollY;
        isAnimating = true;
        document.documentElement.classList.add("inertial-scrolling");
        animationFrame = requestAnimationFrame(animateScroll);
      }
    };

    const syncNativeScroll = () => {
      if (isAnimating) return;
      currentY = window.scrollY;
      targetY = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", syncNativeScroll, { passive: true });
    window.addEventListener("pointerdown", stopAnimation, { passive: true });
    window.addEventListener("resize", stopAnimation, { passive: true });

    return () => {
      stopAnimation();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", syncNativeScroll);
      window.removeEventListener("pointerdown", stopAnimation);
      window.removeEventListener("resize", stopAnimation);
    };
  }, []);

  useEffect(() => {
    const surfaces = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-viewport-surface"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "motion-in-viewport",
            entry.isIntersecting,
          );
        });
      },
      { rootMargin: "20% 0px" },
    );

    surfaces.forEach((surface) => observer.observe(surface));
    return () => observer.disconnect();
  }, [pathname]);

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
