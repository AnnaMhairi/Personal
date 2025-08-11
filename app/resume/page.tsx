export const metadata = { title: "Résumé — Anna" };

export default function Resume() {
  return (
    <section className="card p-7">
      <h1 className="text-2xl font-semibold">Résumé</h1>
      <p className="mt-2 text-slate-300">Frontend & Solutions Engineer · Actor</p>
      <a className="btn mt-4" href="/anna-resume.pdf" target="_blank" rel="noreferrer">Download PDF</a>

      <h2 className="mt-6 font-semibold">Highlights</h2>
      <ul className="mt-2 grid gap-2 text-slate-300 md:grid-cols-2">
        <li>Built compliant SMS funnels (A2P 10DLC) end-to-end</li>
        <li>React/Next + TypeScript + Tailwind design systems</li>
        <li>Integrated Twilio, Supabase, Stripe</li>
        <li>Shipped cross-platform (Expo + web)</li>
      </ul>
    </section>
  );
}
