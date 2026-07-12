import React from "react";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Brackets from "./Brackets";
import type { ProjectStatus } from "./WorkData";

interface ProjectCardProps {
  image: StaticImageData;
  techStack: string[];
  title: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  status: ProjectStatus;
  statusLabel: string;
}

const statusStyles: Record<
  ProjectStatus,
  { color: string; dot: string; pulse: boolean }
> = {
  shipped: { color: "var(--p-accent-2)", dot: "var(--p-accent)", pulse: false },
  dev: { color: "var(--p-dev)", dot: "var(--p-dev)", pulse: false },
  live: { color: "var(--p-live)", dot: "var(--p-live)", pulse: true },
};

const MAX_TAGS = 5;

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  techStack,
  title,
  description,
  githubUrl,
  demoUrl,
  status,
  statusLabel,
}) => {
  const s = statusStyles[status];
  const shownTags = techStack.slice(0, MAX_TAGS);
  const extra = techStack.length - shownTags.length;

  return (
    <article className="p-card flex flex-col overflow-hidden">
      <Brackets />

      {/* thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--p-line)]">
        <Image
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover object-top"
        />
        <span
          className="absolute right-3 top-3 z-[3] inline-flex items-center gap-1.5 rounded-full border px-[11px] py-[5px] font-mono text-[10.5px] backdrop-blur-md"
          style={{
            background: "rgba(0,0,0,0.5)",
            borderColor: "rgba(255,255,255,0.14)",
            color: s.color,
          }}
        >
          <span
            className={`h-[7px] w-[7px] rounded-full ${s.pulse ? "animate-pulse-dot" : ""}`}
            style={{ background: s.dot, boxShadow: `0 0 8px ${s.dot}` }}
          />
          {statusLabel}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-[22px]">
        <h4 className="mb-2 text-[18px] font-bold tracking-tight text-[var(--p-ink)]">
          {title}
        </h4>
        <p className="text-[14px] leading-relaxed text-[var(--p-muted)]">
          {description}
        </p>

        <div className="my-[18px] flex flex-wrap gap-[7px]">
          {shownTags.map((tech) => (
            <span
              key={tech}
              className="rounded-[7px] border border-[var(--p-line)] px-2 py-1 font-mono text-[10.5px] text-[var(--p-muted)]"
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-[7px] border border-[var(--p-accent)]/40 px-2 py-1 font-mono text-[10.5px] text-[var(--p-accent)]">
              +{extra}
            </span>
          )}
        </div>

        <div className="mt-auto flex gap-2.5 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-[var(--p-line)] px-3 py-[11px] font-mono text-[12px] text-[var(--p-ink)] transition-all hover:border-[var(--p-muted-2)] hover:bg-[var(--p-elevate)]"
            >
              <FiGithub size={14} />
              Code
            </a>
          )}
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-[var(--p-accent)] px-3 py-[11px] font-mono text-[12px] text-white transition-all hover:brightness-110"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex flex-1 cursor-default items-center justify-center rounded-[10px] border border-dashed border-[var(--p-line)] px-3 py-[11px] font-mono text-[12px] text-[var(--p-muted-2)]">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
