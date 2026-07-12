import React from "react";
import { Briefcase, MapPin } from "lucide-react";
import Brackets from "./Brackets";

const jobExperiences = [
  {
    id: 1,
    title: "Full Stack Engineer",
    duration: "1st Dec 2021 — Present",
    company: "Corexlab Limited",
    location: "Mirpur 10, Dhaka, Bangladesh",
    responsibility:
      "Leading two major projects and delivered four+ others independently — mentoring developers, sharing best practices, and ensuring timely delivery.",
  },
  {
    id: 2,
    title: "Frontend Developer · Remote",
    duration: "Jul 2021 — Dec 2021",
    company: "Flyte Solutions",
    location: "Gulshan, Dhaka, Bangladesh",
    responsibility:
      "Built responsive UIs with Next.js, integrated RESTful APIs, and managed state with Redux — ensuring performance and maintainability across devices.",
  },
];

function JobExperience() {
  return (
    <div>
      <h3 className="p-heading text-2xl">My Experience</h3>
      <p className="mt-2 max-w-[60ch] leading-relaxed text-[var(--p-muted)]">
        Key milestones in my career as a Full-Stack Web Developer — my growth,
        skills, and commitment to delivering quality web applications.
      </p>
      <div className="mt-7 grid gap-[18px] sm:grid-cols-2">
        {jobExperiences.map((item) => (
          <div key={item.id} className="p-card p-7">
            <Brackets />
            <div className="p-icon-chip">
              <Briefcase size={18} />
            </div>
            <div className="mt-4 font-mono text-[11.5px] tracking-wide text-[var(--p-accent)]">
              {item.duration}
            </div>
            <h4 className="mt-1.5 text-[19px] font-bold tracking-tight text-[var(--p-ink)]">
              {item.title}
            </h4>
            <div className="text-[14.5px] text-[var(--p-muted)]">
              {item.company}
            </div>
            <p className="mt-3.5 text-[14px] leading-relaxed text-[var(--p-muted)]">
              {item.responsibility}
            </p>
            <div className="mt-5 flex items-center gap-2 border-t border-[var(--p-line-soft)] pt-4 font-mono text-[12px] text-[var(--p-muted)]">
              <MapPin size={14} className="text-[var(--p-accent)]" />
              {item.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobExperience;
