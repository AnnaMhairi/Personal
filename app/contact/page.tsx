export const metadata = { title: "Contact — Anna" };

export default function Contact() {
  return (
    <section className="card p-7 max-w-2xl">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-slate-300">Email works best. DMs okay too.</p>
      <div className="mt-4 space-y-3">
        <a className="btn" href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
        <div className="text-sm text-slate-400">
          Also on <a href="https://github.com/AnnaMhairi" target="_blank" rel="noreferrer">GitHub</a> ·
          <a className="ml-2" href="https://linkedin.com/in/..." target="_blank" rel="noreferrer">LinkedIn</a> ·
          <a className="ml-2" href="https://instagram.com/..." target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  );
}
