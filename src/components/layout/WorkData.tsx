// Tech stack keys
type TechStackKey = "stylevibe" | "aiJobBoard" | "aiKnowledgeHub";

export type ProjectStatus = "shipped" | "dev" | "live";

export const techStacks: Record<TechStackKey, string[]> = {
  stylevibe: [
    "Next.js",
    "Stripe",
    "Socket.io",
    "Redis",
    "Docker",
    "Node.js / Express",
    "TypeScript",
    "Redux (RTK Query)",
    "MongoDB",
  ],
  aiJobBoard: [
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Prisma ORM",
    "LangChain",
    "OpenAI API",
    "Pinecone (Vector DB)",
    "Redis",
    "Docker",
    "GitHub Actions",
  ],
  aiKnowledgeHub: [
    "Next.js",
    "NestJS",
    "MongoDB",
    "Redis",
    "LangChain",
    "OpenAI API",
    "Pinecone (Vector DB)",
    "BullMQ / Trigger.dev",
    "WebSockets / SSE",
  ],
};

export const content: Array<{
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  techStackKey: TechStackKey;
  status: ProjectStatus;
  statusLabel: string;
}> = [
  {
    title: "StyleVibe — Beauty Service Booking",
    description:
      "Connects customers with salons and makeup artists for easy appointment booking, service management, and secure payments.",
    githubUrl: "https://github.com/ronybarua-ethical18/stylevibe",
    demoUrl: "https://stylevibe-app.vercel.app/",
    techStackKey: "stylevibe",
    status: "shipped",
    statusLabel: "Shipped",
  },
  {
    title: "AI Job Board Portal",
    description:
      "AI-powered platform that matches candidates with relevant jobs using real-time skill analysis and smart recommendations.",
    githubUrl: "https://github.com/ronybarua-ethical18/ai-powered-job-board",
    demoUrl: "",
    techStackKey: "aiJobBoard",
    status: "dev",
    statusLabel: "In Development",
  },
  {
    title: "AI Knowledge Hub",
    description:
      "Scoped to your workspace & teammates, delivering grounded answers with source citations and live indexing status for every file.",
    githubUrl: "https://github.com/ronybarua-ethical18/ai-knowledge-hub",
    demoUrl: "https://ai-knowledge-hub-web-nine.vercel.app/",
    techStackKey: "aiKnowledgeHub",
    status: "live",
    statusLabel: "Live",
  },
];
