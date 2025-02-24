"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { GoNorthStar } from "react-icons/go";

import StyleVibeImg from "../../../public/styleVibe.png";
import StyleVibe2Img from "../../../public/styleVibe3.png";
import { GlowingEffect } from "../ui/glowing-effect";
import { IoArrowForwardOutline } from "react-icons/io5";
import ColourfulText from "../ui/colourful-text";

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "MongoDB",
  "Node.js",
];

const features = [
  {
    icon: <GoNorthStar />,
    text: "Built with Next.js, React, and TypeScript for scalability.",
  },
  {
    icon: <GoNorthStar />,
    text: "Styled using Tailwind CSS with animations powered by Framer Motion.",
  },
  {
    icon: <GoNorthStar />,
    text: "State management handled by Zustand for efficiency.",
  },
  {
    icon: <GoNorthStar />,
    text: "Validation ensured with Zod for type safety.",
  },
];

const content = [
  {
    title: "StyleVibe - A Full Stack Application",
    description: (
      <div className="w-full">
        <p className="text-lg text-gray-600">
          A Full-Stack Platform Transforming Salon Operations | Smart Booking •
          Staff Scheduling • Business Intelligence.
        </p>
        <div className="space-y-4 my-8  text-white  max-w-lg">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-[#fe0f5d]">{feature.icon}</span>
              <p className="text-base">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3  backdrop-blur-0 rounded-xl max-w-lg mx-auto">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 text-white text-sm font-medium bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    content: (
      <div className="bg-[#08082d] border-gray-800 h-full p-4 rounded-xl relative transition-all duration-400 ease-in-out">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="h-full w-full flex flex-col items-center text-white p-6">
          <div className="flex items-start justify-between w-full">
            <h1 className="font-medium text-2xl text-gray-100">
              Book & Experience Premium
              <span className="font-semibold">
                <ColourfulText text=" Beauty Services" />
              </span>{" "}
              <br /> Where Style Meets Simplicity
            </h1>
            <IoArrowForwardOutline className="text-2xl cursor-pointer" />
          </div>
          <div className="absolute bottom-0 w-full px-8">
            <Image
              src={StyleVibe2Img}
              layout="intrinsic"
              className="object-cover w-full rounded-t-lg"
              alt="linear board demo test"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Powered Job Board Portal",
    description: (
      <div className="w-full">
        <>
          Developed ZenithMinds, an educational platform connecting students and
          instructors, fostering global collaboration and continuous learning.
        </>
        <div className="space-y-4 p-6  text-white  max-w-lg">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-[#fe0f5d]">{feature.icon}</span>
              <p className="text-base">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3  backdrop-blur-0 rounded-xl max-w-lg mx-auto">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 text-white text-sm font-medium bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    content: (
      <div className="border-gray-600 h-full p-4 rounded-xl bg-[#1a1a47] relative transition-all duration-400 ease-in-out">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="h-full w-full flex flex-col items-center text-white p-6">
          <h1 className="font-medium text-2xl text-gray-100">
            Convert your files instantly
          </h1>
          <div className="absolute bottom-0 w-full px-8">
            <Image
              src={StyleVibeImg}
              layout="intrinsic"
              className="object-cover w-full rounded-t-lg"
              alt="linear board demo test"
            />
          </div>
        </div>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
