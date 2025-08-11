export default function Hero() {
    return (
      <section className="relative overflow-hidden pt-10 pb-14">
        <p className="mb-2 text-sm prose-muted">Los Angeles · Frontend &amp; Solutions Engineer · Actor</p>
  
        <h1 className="font-heading text-[40px] md:text-[52px] font-semibold leading-[1.06] tracking-tight">
          Building crisp, human-centered apps{" "}
          <span className="text-[rgb(64,224,208)]">that feel easy</span>
        </h1>
  
        <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed prose-muted">
          I ship premium-feeling MVPs with Next.js, TypeScript, Tailwind, AI, and carrier-safe Twilio SMS.
          Calm energy, fast iteration, zero fuss.
        </p>
  
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/contact" className="btn btn-accent">Get in touch</a>
          <a href="#projects" className="btn">View projects</a>
          <a href="/resume" className="btn btn-ghost">Résumé</a>
        </div>
      </section>
    );
  }
  