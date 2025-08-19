import Sidebar from "./components/Sidebar";

function MobileHero() {
  return (
    <header className="lg:hidden mb-8">
      <h1 className="text-3xl font-semibold tracking-tight">Anna MacDonald</h1>
      <p className="mt-1 text-sm text-white/70">Frontend Engineer · LA</p>
      <p className="mt-4 text-[15px] leading-relaxed text-white/80">
        I build crisp, accessible interfaces with <b>React</b>, <b>TypeScript</b>, and <b>Next.js</b>.
        Calm energy, fast iteration.
      </p>
    </header>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 md:px-8 py-10 md:py-16 min-h-screen">
      {/* Robust grid: 1 col on small, 2 cols on md, 12-col on lg */}
      <div className="grid items-start gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-12">
        {/* Left rail: visible from md up; takes 4/12 on lg */}
        <aside className="hidden md:block md:col-span-1 lg:col-span-4 sticky top-10 self-start">
          <Sidebar />
        </aside>

        {/* Right column */}
        <div className="md:col-span-1 lg:col-span-8 space-y-24 md:space-y-28 pt-1 md:pt-2 max-w-[65ch]">
          <MobileHero />

          {/* About */}
          <section id="about" className="scroll-mt-32">
            <div className="flex items-center gap-4">
              <h2 className="section-title">About</h2>
              <div className="title-rule flex-1" />
            </div>
            <div className="mt-5 text-[15px] leading-relaxed text-white/85 space-y-4">
              <p>
                I’m a front-end engineer focused on accessible, performant UI that looks clean and feels effortless.
                I’ve shipped at OpenSea and Credit Karma, and I build polished MVPs with Next.js, Tailwind, and AI.
              </p>
              <p>
                Recently I’ve been building <b>Actor’s Friend</b> (scene analysis, self-tape helper, audition tracker)
                and a <b>Real Estate AI</b> (carrier-safe SMS assistant that helps buyers and renters research properties). I care about clear UX, resilient systems, and fast iteration.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-32">
            <div className="flex items-center gap-4">
              <h2 className="section-title">Projects</h2>
              <div className="title-rule flex-1" />
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <article className="card p-5 hover:bg-white/[0.08] transition">
                <header className="flex items-center justify-between">
                  <h3 className="font-medium">Actor’s Friend</h3>
                  <span className="text-xs text-white/60">React Native / Next.js</span>
                </header>
                <p className="mt-2 text-[14px] text-white/75">
                  AI scene analysis, self-tape helper, audition tracker. Built end-to-end.
                </p>
                <div className="mt-4 text-sm text-white/70">OpenAI · Supabase · Expo</div>
              </article>

              <article className="card p-5 hover:bg-white/[0.08] transition">
                <header className="flex items-center justify-between">
                  <h3 className="font-medium">Real Estate SMS AI</h3>
                  <span className="text-xs text-white/60">Next.js / Twilio</span>
                </header>
                <p className="mt-2 text-[14px] text-white/75">
                  Carrier-safe opt-in + conversational property search (A2P double opt-in).
                </p>
                <div className="mt-4 text-sm text-white/70">Prisma · Postgres · SMS</div>
              </article>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-32">
            <div className="flex items-center gap-4">
              <h2 className="section-title">Contact</h2>
              <div className="title-rule flex-1" />
            </div>
            <p className="mt-5 text-[15px] text-white/85">
              Reach out for roles, collabs, or contract work. Best via email.
            </p>
            <div className="mt-4 flex items-center gap-4 text-white/80">
              <a className="underline-offset-4 hover:underline" href="mailto:anna.m.macdonald@gmail.com">anna.m.macdonald@gmail.com</a>
              <span>·</span>
              <a className="underline-offset-4 hover:underline" href="https://github.com/AnnaMhairi">GitHub</a>
              <span>·</span>
              <a className="underline-offset-4 hover:underline" href="https://www.linkedin.com/in/annammacdonald">LinkedIn</a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
