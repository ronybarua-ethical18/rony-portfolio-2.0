"use client";
import React from "react";
import { content, techStacks } from "./WorkData";
import ProjectCard from "./ProjectCard";
import StyleVibeImg from "../../../public/stylevibe.png";
import JobBoardImg from "../../../public/job-board.png";
import KnowledgeHubImg from "../../../public/ai-hub.jpg";

const images = [StyleVibeImg, JobBoardImg, KnowledgeHubImg];

export function Work() {
  return (
    <>
      <h2 className="text-2xl font-semibold">My Works</h2>
      <p className="text-gray-400 mt-2">
        Showcasing my featured full stack web projects and technical skills.
      </p>
      <div className="flex flex-col custom-md:flex-row gap-8 mt-8">
        {content.map((item, idx) => (
          <ProjectCard
            key={item.techStackKey}
            image={images[idx]}
            techStack={techStacks[item.techStackKey]}
            title={item.title}
            description={item.description}
            githubUrl={item.githubUrl}
            demoUrl={item.demoUrl}
          />
        ))}
      </div>
    </>
  );
}
