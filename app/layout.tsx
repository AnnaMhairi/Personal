import "./globals.css";
import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import ScrollSpyNav from "./components/ScrollSpyNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  title: "Anna — Frontend & Solutions Engineer",
  description: "Next.js, TypeScript, Tailwind, AI, Twilio A2P — calm, fast, polished.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} scroll-smooth`}>
      <body>
        <div className="container mx-auto px-6 md:px-10 lg:px-14 py-10 md:py-14 grid gap-rhythm md:grid-cols-[var(--col-rail)_minmax(0,1fr)]">
          {/* left rail (sticky like ref) */}
          <aside className="rail hidden md:sticky md:top-[var(--rail-top)] md:h-[calc(100vh-var(--rail-top)-1rem)] md:block">
            <h1 className="font-heading text-[28px] md:text-[32px] font-semibold tracking-tight text-[var(--ink)]">
              Anna Mhairi
            </h1>
            <p className="text-sm text-[color:var(--muted)]">Frontend &amp; Solutions Engineer</p>
            <ScrollSpyNav />
          </aside>

          {/* right content column */}
          <main className="min-w-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
