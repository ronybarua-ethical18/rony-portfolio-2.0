import React from "react";

// Define the tech stack keys as a type
type TechStackKey = 'stylevibe' | 'aiJobBoard' | 'aiKnowledgeHub';

// Directory pattern for tech stacks
export const techStacks: Record<TechStackKey, string[]> = {
  stylevibe: [
    "Next.js",
    "Redux",
    "RTK Query",
    "antd",
    "Express JS",
    "MongoDB",
    "Stripe",
    "Socket.io",
    "Redis",
    "Docker",
    "Github Actions",
    "TypeScript",
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
    "WebSockets / SSE"
  ],
};

export const content: Array<{
  title: string | React.ReactNode;
  description: React.ReactNode;
  githubUrl: string;
  demoUrl: string;
  techStackKey: TechStackKey;
}> = [
  {
    title: "StyleVibe - Beauty Service Booking App",
    description: (
      <p className="text-base text-gray-300">
        Connects customers with salons and makeup artists for easy appointment
        booking, service management, and secure payments.
      </p>
    ),
    githubUrl: "https://github.com/ronybarua-ethical18/stylevibe",
    demoUrl: "https://stylevibe-app.vercel.app/",
    techStackKey: "stylevibe",
  },
  {
    title: (
      <span>
        AI Job Board Portal - <span className="border border-[#fe0f5d] text-white px-2 py-1 rounded-md text-sm font-bold">In Development</span>
      </span>
    ),
    description: (
      <p className="text-base text-gray-300">
        AI-powered platform that matches candidates with relevant jobs using
        real-time skill analysis and smart recommendations.
      </p>
    ),
    githubUrl: "https://github.com/ronybarua-ethical18/ai-powered-job-board",
    demoUrl: "/",
    techStackKey: "aiJobBoard",
  },
  {
    title: (
      <span>
        AI Knowledge Hub - <span className="border border-[#fe0f5d] text-white px-2 py-1 rounded-md text-sm font-bold">In Development</span>
      </span>
    ),
    description: (
      <p className="text-base text-gray-300">
        Search, explore, and interact with knowledge using AI. Features
        summarization, intelligent answers, and context-aware insights.
      </p>
    ),
    githubUrl: "https://github.com/ronybarua-ethical18/ai-knowledge-hub",
    demoUrl: "/",
    techStackKey: "aiKnowledgeHub",
  },
];
