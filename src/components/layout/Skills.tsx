import skills from "@/utils/skills";
import React from "react";

function Skills() {
  return (
    <div className="rounded-lg">
    
      <div className="h-[500px] overflow-y-scroll rounded-lg">
      <h2 className="text-2xl font-semibold mt-0">My Skills</h2>
      <p className="text-gray-400 mt-4 mb-6">
        Showcasing key milestones and achievements in my career as a Full Stack
        Web Developer, highlighting my growth, skills, and commitment to
        delivering quality web applications.
      </p>
        {skills.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-300 border-b border-gray-600 pb-2">
              {category.title}
            </h2>
            <div className="grid grid-cols-3 custom-lg:grid-cols-4 super-sm:grid-cols-2 gap-4">
              {category.skillSet.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex items-center gap-3 
                    transition duration-300 ease-in-out 
                    group 
                    hover:bg-white hover:text-black 
                    cursor-default"
                >
                  <skill.icon
                    className="w-6 h-6 
                      text-white 
                      group-hover:text-black 
                      transition duration-300 ease-in-out "
                  />
                  <span
                    className="
                      transition duration-300 ease-in-out 
                      group-hover:text-black"
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
