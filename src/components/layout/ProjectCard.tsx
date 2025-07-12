import React from "react";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { GlowingEffect } from "../ui/glowing-effect";

interface ProjectCardProps {
  image: StaticImageData;
  techStack: string[];
  title: string;
  description: React.ReactNode;
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  techStack,
  title,
  description,
  githubUrl,
  demoUrl,
}) => (
  <div className="
    bg-gradient-to-br from-[#1a1a2e]/80 via-[#16213e]/70 to-[#0f3460]/80
    backdrop-blur-lg
    border border-white/10
    shadow-2xl
    rounded-2xl
    p-6
    max-w-md
    transition
    duration-300
    hover:cursor-default
  ">
    <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
    <div className="rounded-xl overflow-hidden mb-4">
      <Image src={image} alt={title} className="w-full object-cover" />
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {techStack.map((tech, idx) => (
        <span
          key={idx}
          className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-lg border border-white/20"
        >
          {tech}
        </span>
      ))}
    </div>
    <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
    {description}
    <div className="flex gap-4 mt-8">
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FiGithub className="text-white text-2xl hover:text-gray-400" />
        </a>
      )}
      {demoUrl && (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <FiExternalLink className="text-white text-2xl hover:text-gray-400" />
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
