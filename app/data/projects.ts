export type Project = {
  slug: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "real-estate-ai",
    title: "Real Estate AI",
    image: "/projects/real-estate-ai.png",
    description:
      "Opt-in funnel + double opt-in SMS + Twilio compliance. Next.js + Tailwind v4.",
    tags: ["Next.js", "Twilio", "Prisma"],
    year: "2025",
    href: "https://github.com/AnnaMhairi/Real-Estate-AI",
  },
  {
    slug: "looklab",
    title: "LookLab",
    image: "/projects/real-estate-ai.png",
    description: "Fashion lookbook marketplace. Expo (RN) with responsive web.",
    tags: ["Expo", "React Native", "TypeScript"],
    year: "2024",
    href: "#",
  },
  {
    slug: "alexander",
    title: "Alexander",
    image: "/projects/real-estate-ai.png",
    description: "Self-tape helper + audition tracker with scene analysis.",
    tags: ["Next.js", "AI", "Design"],
    year: "2025",
    href: "#",
  },
];
  