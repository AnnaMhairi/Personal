"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = ["about", "experience", "projects", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function ScrollSpyNav() {
  const [active, setActive] = useState<SectionId>("about");
  const ticking = useRef(false);
  const OFFSET = 96; // matches your scroll-margin-top

  function computeActive(): SectionId {
    const y = window.scrollY + OFFSET;
    let current: SectionId = "about";

    // If we're basically at the bottom, force last section active
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) return "contact";

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.offsetTop;               // section top (document coords)
      const bottom = top + el.offsetHeight;   // section bottom
      if (y >= top && y < bottom) current = id;
      if (y >= top) current = id; // keep advancing to last one passed
    }
    return current;
  }

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const next = computeActive();
        setActive(prev => (prev === next ? prev : next));
      });
    };

    const onResize = () => setActive(computeActive());

    // initial calc
    setActive(computeActive());
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const go = (id: SectionId) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav aria-label="Section navigation">
      <ul className="space-y-2 text-sm">
        {SECTIONS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={go(id)}
              className={`link block py-1 font-heading transition-colors hover:text-[rgb(var(--accent))] ${
                active === id ? "font-semibold text-[rgb(var(--accent))]" : ""
              }`}
              aria-current={active === id ? "true" : undefined}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <a className="btn btn-ghost" href="/resume" target="_blank" rel="noreferrer">
          Résumé
        </a>
        <a className="btn btn-accent" href="#contact" onClick={go("contact")}>
          Get in touch
        </a>
      </div>
    </nav>
  );
}
