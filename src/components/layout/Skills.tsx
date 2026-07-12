import skills from "@/utils/skills";
import React from "react";

function Skills() {
  return (
    <div>
      <h3 className="p-heading text-2xl">My Skills</h3>
      <p className="mt-2 max-w-[60ch] leading-relaxed text-[var(--p-muted)]">
        The languages, frameworks, and tools I reach for across the stack.
      </p>

      <div className="mt-6 lg:max-h-[340px] lg:overflow-y-auto lg:pr-1">
        {skills.map((category) => (
          <div key={category.title} className="mb-6 last:mb-0">
            <h5 className="mb-3.5 flex items-center gap-2 border-b border-[var(--p-line-soft)] pb-2.5 font-mono text-[11.5px] uppercase tracking-wider text-[var(--p-muted)]">
              {category.title}
              <span className="ml-auto text-[var(--p-muted-2)]">
                {String(category.skillSet.length).padStart(2, "0")}
              </span>
            </h5>
            <div className="flex flex-wrap gap-2.5">
              {category.skillSet.map((skill) => (
                <span
                  key={skill.id}
                  className="p-chip inline-flex items-center gap-2"
                >
                  <skill.icon className="h-4 w-4" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
