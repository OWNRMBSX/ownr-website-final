"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const observed = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    function observe(el: Element) {
      if (!observed.has(el)) {
        observed.add(el);
        io.observe(el);
      }
    }

    function scanAll() {
      document.querySelectorAll(".animate-on-scroll").forEach(observe);
    }

    // Initial scan
    scanAll();

    // Re-scan after a short delay to catch hydration-rendered elements
    const t1 = setTimeout(scanAll, 100);
    const t2 = setTimeout(scanAll, 500);

    // Watch for new elements added later (page navigations, dynamic content)
    const mo = new MutationObserver((mutations) => {
      let hasNew = false;
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("animate-on-scroll")) {
              observe(node);
              hasNew = true;
            }
            const children = node.querySelectorAll(".animate-on-scroll");
            if (children.length > 0) {
              children.forEach(observe);
              hasNew = true;
            }
          }
        });
      });
      // After DOM mutations settle, re-scan to catch anything missed
      if (hasNew) setTimeout(scanAll, 50);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
