import React from "react";

import { PiGraduationCapFill } from "react-icons/pi";
import { GlowingEffect } from "../ui/glowing-effect";

function Education() {
  const educations = [
    {
      id: 1,
      title: "B.Sc in Engineering",
      major: "Computer Science and Engineering",
      duration: "2015 - 2018",
      institute: "Port City International University",
    },
    {
      id: 2,
      title: "Diploma in Engineering",
      major: "Computer Engineering",
      duration: "2011 - 2015",
      institute: "Cox's Bazar Polytechnic Institute",
    },
  ];
  return (
    <div>
      {" "}
      <h2 className="text-2xl font-semibold">Education</h2>
      <p className="text-gray-400 mt-2">
        Showcasing key milestones and achievements in my career as a Full Stack
        Web Developer, highlighting my growth, skills, and commitment to
        delivering quality web applications.
      </p>
      <div className="mt-10 flex space-x-4">
        {educations.map((item) => (
          <div
            className="p-8 rounded-md shadow-sm border border-gray-400 w-full cursor-default hover:bg-white/5 hover:backdrop-blur-lg transition-all duration-300 ease-in-out hover:duration-300 hover:ease-in-out
            relative"
            key={item.id}
          >
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <PiGraduationCapFill className="mb-2 text-xl" />

            <h2 className="font-medium text-[#fe0f5d]">{item.duration}</h2>
            <h1 className="font-medium text-lg mt-4">{item.title}</h1>
            <p className="text-gray-500">{item.major}</p>
            <li className=" mt-6 ">{item.institute}</li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
