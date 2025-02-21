import React, { useState } from "react";
import { Button } from "../ui/button";
import JobExperience from "./JobExperience";
import Education from "./Education";
import Skills from "./Skills";
import { motion, AnimatePresence } from "framer-motion";

const tabItems = [
  { value: "experience", label: "Experience" },
  { value: "skills", label: "Skills" },
  { value: "education", label: "Education" },
];

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

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
            <div key={item.value} className="flex flex-col">
              <Button
                onClick={() => setSelectedTab(item.value)}
                variant="secondary"
                className={`mt-4 text-base ${
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
        <AnimatePresence mode="wait">
          {selectedTab === "experience" && (
            <motion.div key="experience" variants={tabVariants} initial="hidden" animate="visible" exit="exit">
              <JobExperience />
            </motion.div>
          )}
          {selectedTab === "education" && (
            <motion.div key="education" variants={tabVariants} initial="hidden" animate="visible" exit="exit">
              <Education />
            </motion.div>
          )}
          {selectedTab === "skills" && (
            <motion.div key="skills" variants={tabVariants} initial="hidden" animate="visible" exit="exit">
              <Skills />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Resume;