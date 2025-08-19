"use client";
import ScrollSpyNav from "./ScrollSpyNav";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-4xl font-semibold leading-tight">Anna MacDonald</h1>
        <p className="mt-2 text-sm text-white/70">Frontend Engineer · LA</p>
      </div>

      <p className="text-[15px] leading-relaxed text-white/80">
        I build crisp, accessible interfaces with <b>React</b>, <b>TypeScript</b>, and <b>Next.js</b>. Calm energy, fast iteration.
      </p>

      <ScrollSpyNav />

      <div className="mt-2 flex gap-3">
        <a href="/resume" className="btn">Résumé</a>
        <a href="#contact" className="btn-ghost">Get in touch</a>
      </div>
    </div>
  );
}
