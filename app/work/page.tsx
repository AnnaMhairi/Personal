import { projects } from "../data/projects";
import Image from "next/image";

export const metadata = { title: "Work — Anna" };

export default function Work() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tight">Selected Work</h1>
      <p className="text-slate-300 mb-6">Small, focused builds that ship. Here are a few I’m proud of.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <a key={p.slug} href={p.href || "#"} className="card floaty p-4 group">
            <div className="relative mb-3 overflow-hidden rounded-lg border border-white/10">
              <Image src={p.image} alt={p.title} width={1200} height={800}
                     className="h-44 w-full object-cover transition group-hover:scale-[1.02]" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{p.title}</h3>
              <span className="text-xs text-slate-400">{p.year}</span>
            </div>
            <p className="mt-1 text-sm text-slate-300">{p.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
