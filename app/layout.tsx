import "./globals.css";
import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  title: "Anna — Frontend & Solutions Engineer",
  description: "Next.js, TypeScript, Tailwind, AI, Twilio A2P — calm, fast, polished.",
  viewport: { width: "device-width", initialScale: 1 }, // <- ensures responsive breakpoints work
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
