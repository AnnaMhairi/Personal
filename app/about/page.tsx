export const metadata = { title: "About — Anna" };

export default function About() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <div className="card p-6 md:col-span-2">
        <h1 className="text-2xl font-semibold">Hi, I’m Anna.</h1>
        <p className="mt-3 text-slate-300">
          I’m a frontend/solutions engineer who cares about craft: crisp UI, fast iteration, quality design.
          I also act — TV & film credits on request — so I’m comfortable collaborating, presenting,
          and translating technical stuff for humans.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          <li>React/Next.js, TypeScript, Tailwind, design systems</li>
          <li>API integrations (Twilio, Supabase, Payments), auth, deployment (Vercel)</li>
          <li>Product thinking: reducing scope, shipping MVPs, learning fast</li>
        </ul>
      </div>

      <div className="card p-6">
        <h2 className="font-semibold">Quick facts</h2>
        <ul className="mt-3 space-y-2 text-slate-300 text-sm">
          <li>📍 Los Angeles</li>
          <li>🎬 Acting: recurring & indie features</li>
          <li>🎧 Loves cozy mysteries + music</li>
          <li>💼 Open to solutions engineering / frontend roles</li>
        </ul>
      </div>
    </section>
  );
}
