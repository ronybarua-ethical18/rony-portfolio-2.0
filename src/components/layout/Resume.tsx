import React from "react";
import { Button } from "../ui/button";
import { useState } from "react";
import JobExperience from "./JobExperience";
import Education from "./Education";
import Skills from "./Skills";
const tabItems = [
  { value: "experience", label: "Experience" },
  { value: "skills", label: "Skills" },
  { value: "education", label: "Education" },
  // { value: "blogs", label: "About Me" },
];

function Resume() {
  const [selectedTab, setSelectedTab] = useState("experience");
  return (
    <div className="grid grid-cols-3 gap-8 w-full">
      {/* First Column */}
      <div className="col-span-1 p-4">
        <h1 className="font-semibold text-4xl mb-6">Why hire me?</h1>
        <p className="text-gray-300 mb-4">
          I am a Full Stack Web Developer with 3+ years of experience in
          building scalable web applications using React, Node.js, and MongoDB.
          I specialize in clean code, seamless UX, and efficient back-end
          systems.
        </p>
        <div>
          {tabItems.map((item) => (
            <div key={item.value} className="flex flex-col ">
              <Button
                onClick={() => setSelectedTab(item.value)}
                variant="secondary"
                className={`mt-4 text-base  ${
                  selectedTab === item.value
                    ? "bg-[#fe0f5d] text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                {item.label}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Second Column */}
      <div className="col-span-2 p-4">
        {/* Content for the second column */}
       {selectedTab === "experience" ? <JobExperience />: selectedTab === "education" ? <Education />: selectedTab === "skills" ?<Skills />:<></>}
      </div>
    </div>
  );
}

export default Resume;
