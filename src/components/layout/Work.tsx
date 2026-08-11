"use client";
import React from "react";
import { content, techStacks } from "./WorkData";
import ProjectCard from "./ProjectCard";
import StyleVibeImg from "../../../public/stylevibe.png";
import NlDbAgentImg from "../../../public/nl-db-agent.png";
import KnowledgeHubImg from "../../../public/ai-knowledge-hub.png";

const images = [StyleVibeImg, NlDbAgentImg, KnowledgeHubImg];

export function Work() {
  return (
    <div>
      <span className="p-eyebrow">{"// selected work"}</span>
      <h2 className="p-heading mt-4 text-[clamp(28px,3.4vw,38px)]">My Works</h2>
      <p className="mt-2 max-w-[60ch] leading-relaxed text-[var(--p-muted)]">
        Featured full-stack projects — the systems, not just the screens.
      </p>
      <div className="mt-8 grid gap-[22px] md:grid-cols-3">
        {content.map((item, idx) => (
          <ProjectCard
            key={item.techStackKey}
            image={images[idx]}
            techStack={techStacks[item.techStackKey]}
            title={item.title}
            description={item.description}
            githubUrl={item.githubUrl}
            demoUrl={item.demoUrl}
            status={item.status}
            statusLabel={item.statusLabel}
          />
        ))}
      </div>
    </div>
  );
}
