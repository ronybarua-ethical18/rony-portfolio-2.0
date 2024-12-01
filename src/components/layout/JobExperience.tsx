import React from "react";
import { SiBmcsoftware } from "react-icons/si";

function JobExperience() {
  const jobExperiences = [
    {
      id: 1,
      title: "Full Stack Engineer",
      location: "Mirpur 10, Dhaka, Bangladesh",
      duration: "1st Dec 2021 - Present",
      company: "Corexlab Limited",
      responsiblity:
        "Currently leading two major projects and have completed over four others independently, mentoring developers, sharing coding best practices, and ensuring timely project delivery.",
      technologies: "",
    },
    {
      id: 2,
      title: "Frontend Developer - Remote",
      location: "Gulshan, Dhaka, Bangladesh",
      duration: "11th July Dec 2021 - Dec 2021",
      responsiblity:
        "Developed responsive UIs with Next.js, integrated RESTful APIs, and managed state with Redux, ensuring performance and maintainability across devices.",
      company: "Flyte Solutions",
    },
  ];
  return (
    <div>
      {" "}
      <h2 className="text-2xl font-semibold">My Experience</h2>
      <p className="text-gray-400 mt-2">
        Showcasing key milestones and achievements in my career as a Full Stack
        Web Developer, highlighting my growth, skills, and commitment to
        delivering quality web applications.
      </p>
      <div className="mt-10 flex space-x-4">
        {jobExperiences.map((item) => (
          <div
            className="p-8 rounded-md shadow-sm border border-gray-400 w-full hover:border-[#fe0f5d] cursor-default"
            key={item.id}
          >
               <SiBmcsoftware className="mb-2 text-xl"/>
            <h2 className="font-medium text-[#fe0f5d]">{item.duration}</h2>
            <h1 className="font-medium text-lg mt-4">{item.title}</h1>
            <p className="text-gray-500">
              {item.company}
            </p>
            <li className=" mt-6">{item.location}</li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobExperience;
