"use client";

import React, { useState } from "react";
import { Briefcase, Sparkles, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import JobExperience from "./JobExperience";
import Education from "./Education";
import Skills from "./Skills";

const tabItems = [
  { value: "experience", label: "Experience", Icon: Briefcase },
  { value: "skills", label: "Skills", Icon: Sparkles },
  { value: "education", label: "Education", Icon: GraduationCap },
];

const panels = [
  { value: "experience", Node: JobExperience },
  { value: "skills", Node: Skills },
  { value: "education", Node: Education },
];

function Resume() {
  const [selectedTab, setSelectedTab] = useState("experience");

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_2fr]">
      {/* ---- sidebar ---- */}
      <div>
        <span className="p-eyebrow">{"// resume"}</span>
        <h2 className="p-heading mt-4 text-[clamp(28px,3.4vw,38px)]">
          Why hire me?
        </h2>
        <p className="mt-3.5 max-w-[46ch] leading-relaxed text-[var(--p-muted)]">
          Full-Stack Web Developer with 4+ years building scalable apps in React,
          Node.js &amp; MongoDB. I specialize in clean code, seamless UX, and
          efficient back-end systems.
        </p>

        <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Resume sections">
          {tabItems.map(({ value, label, Icon }) => (
            <button
              key={value}
              role="tab"
              aria-selected={selectedTab === value}
              onClick={() => setSelectedTab(value)}
              className={cn(
                "inline-flex items-center gap-2 rounded-[11px] border px-[17px] py-[10px] font-mono text-[12.5px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-accent-2)]",
                selectedTab === value
                  ? "border-[var(--p-accent)] bg-[var(--p-accent)] text-white"
                  : "border-[var(--p-line)] bg-[var(--p-surface)] text-[var(--p-muted)] hover:border-[var(--p-muted-2)] hover:text-[var(--p-ink)]"
              )}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ---- panel: on desktop every section is stacked in the same grid cell,
             so the column is always as tall as the tallest section and its
             height never changes when switching sub-tabs — the sidebar stays
             fixed. On mobile only the active section renders (normal flow). ---- */}
      <div className="lg:grid">
        {panels.map(({ value, Node }) => {
          const active = selectedTab === value;
          return (
            <div
              key={value}
              aria-hidden={!active}
              className={cn(
                "transition-opacity duration-300 lg:col-start-1 lg:row-start-1",
                active
                  ? "block lg:visible lg:opacity-100"
                  : "hidden lg:block lg:invisible lg:opacity-0 lg:pointer-events-none"
              )}
            >
              <Node />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
