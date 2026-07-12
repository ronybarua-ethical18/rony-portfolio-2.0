import React from "react";
import { GraduationCap } from "lucide-react";
import Brackets from "./Brackets";

const educations = [
  {
    id: 1,
    title: "B.Sc in Engineering",
    major: "Computer Science and Engineering",
    duration: "2015 — 2018",
    institute: "Port City International University",
  },
  {
    id: 2,
    title: "Diploma in Engineering",
    major: "Computer Engineering",
    duration: "2011 — 2015",
    institute: "Cox's Bazar Polytechnic Institute",
  },
];

function Education() {
  return (
    <div>
      <h3 className="p-heading text-2xl">Education</h3>
      <p className="mt-2 max-w-[60ch] leading-relaxed text-[var(--p-muted)]">
        Where I built my engineering foundations — the academic milestones behind
        my growth as a Full-Stack Web Developer.
      </p>
      <div className="mt-7 grid gap-[18px] sm:grid-cols-2">
        {educations.map((item) => (
          <div key={item.id} className="p-card p-7">
            <Brackets />
            <div className="p-icon-chip">
              <GraduationCap size={18} />
            </div>
            <div className="mt-4 font-mono text-[11.5px] tracking-wide text-[var(--p-accent)]">
              {item.duration}
            </div>
            <h4 className="mt-1.5 text-[19px] font-bold tracking-tight text-[var(--p-ink)]">
              {item.title}
            </h4>
            <div className="text-[14.5px] text-[var(--p-muted)]">{item.major}</div>
            <div className="mt-5 border-t border-[var(--p-line-soft)] pt-4 font-mono text-[12px] text-[var(--p-muted)]">
              {item.institute}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
