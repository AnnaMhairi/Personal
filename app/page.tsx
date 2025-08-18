import Image from "next/image";
import { projects } from "@/app/data/projects";


export default function Home() {
  return (
    <>
      {/* Intro / hero */}
      <section id="top" className="section">
        <p className="intro-eyebrow text-sm text-[color:var(--muted)]">
          Los Angeles · Frontend &amp; Solutions Engineer
        </p>
        <h2 className="intro-title font-heading text-4xl md:text-5xl font-semibold tracking-tight text-[var(--ink)]">
          I build crisp, human-centered apps <span className="text-[rgb(64,224,208)]">that feel easy.</span>
        </h2>
        <p className="intro-body text-[15px] leading-relaxed text-[color:var(--muted)]">
          Fast MVPs with Next.js, TypeScript, Tailwind, AI, and carrier-safe Twilio SMS (A2P). Calm energy, clean UX, quick iteration.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-accent">Get in touch</a>
          <a href="#projects" className="btn">View projects</a>
          <a href="/resume" className="btn btn-ghost">Résumé</a>
        </div>
      </FadeInSection>

      {/* About */}
      <section id="about" className="section">
        <h3 className="font-heading text-xl md:text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)]">About</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--muted)]">
          I’m a frontend/solutions engineer who ships polished UI and scrappy MVPs. Comfortable presenting, demoing,
          and translating technical concepts for stakeholders. Stack: Next.js, TypeScript, Tailwind, Prisma, Twilio, AI.
        </p>
      </FadeInSection>

      {/* Experience */}
      <section id="experience" className="section">
        <h3 className="font-heading text-xl md:text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)]">Experience</h3>
        <ul className="mt-4 space-y-4">
          {[
            { role:"Frontend Engineer", org:"OpenSea", meta:"2021–2022 · Remote", body:"Design system + feature work in React/TS; perf tuning; shipped polished UI under tight timelines." },
            { role:"Frontend", org:"Credit Karma (Autos)", meta:"2019–2021 · LA", body:"Built new flows with a small LA pod that scaled quickly; accessibility + performance minded." },
            { role:"Solutions Engineer", org:"Freelance", meta:"Ongoing", body:"Rapid MVPs, A2P-compliant funnels, real-estate AI assistants, integrations (Twilio, Supabase, Stripe)." },
          ].map(x => (
            <li key={x.role+x.org} className="card p-4">
              <div className="flex items-baseline justify-between gap-6">
                <div className="font-heading text-[16px] font-medium text-[var(--ink)]">{x.role} — {x.org}</div>
                <div className="text-[12px] text-[color:var(--muted)] whitespace-nowrap">{x.meta}</div>
              </div>
              <p className="mt-1 text-[14px] leading-relaxed text-[color:var(--muted)]">{x.body}</p>
            </li>
          ))}
        </ul>
      </FadeInSection>

      {/* Projects */}
      <section id="projects" className="section">
        <h3 className="font-heading text-xl md:text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)]">Projects</h3>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title:"Real Estate AI", img:"/projects/real-estate-ai.png", desc:"SMS opt-in, double opt-in, Twilio compliance.", href:"https://github.com/AnnaMhairi/Real-Estate-AI", tags:["Next.js","Twilio","Prisma"], year:"2025" },
            { title:"LookLab", img:"/projects/looklab.png", desc:"Fashion lookbook marketplace (Expo + web).", href:"#", tags:["Expo","RN","TS"], year:"2024" },
            { title:"Alexander", img:"/projects/alexander.png", desc:"Self-tape helper & audition tracker with AI analysis.", href:"#", tags:["Next.js","AI","Design"], year:"2025" },
          ].map(p => (
            <a key={p.title} href={p.href} className="card p-3 transition hover:bg-white/10">
              <div className="relative overflow-hidden rounded-md border border-white/10">
                <Image alt={p.title} src={p.img} width={1200} height={800} className="h-44 w-full object-cover" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-heading text-[15px] font-medium text-[var(--ink)]">{p.title}</div>
                <span className="text-[11px] text-[color:var(--muted)]">{p.year}</span>
              </div>
              <p className="mt-1 text-[14px] leading-relaxed text-[color:var(--muted)]">{p.desc}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Acting */}
      <section id="acting" className="section min-h-[40vh]">
        <h3 className="font-heading text-xl md:text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)]">Acting</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--muted)]">
          Recurring TV roles (e.g. Showtime), indie features, and stage in LA/NYC. Training in on-camera, improv, VO.
        </p>
      </FadeInSection>

      {/* Contact */}
      <section id="contact" className="section min-h-[50vh]">
        <h3 className="font-heading text-xl md:text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)]">Contact</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--muted)]">Email is best. Open to frontend &amp; solutions roles.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn btn-accent" href="mailto:hello@yourdomain.com">Get in touch</a>
          <a className="btn" href="https://linkedin.com/in/..." target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-ghost" href="https://github.com/AnnaMhairi" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </FadeInSection>
    </>
  );
}
