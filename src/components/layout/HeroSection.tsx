import React from "react";

import Link from "next/link";
import { FaDownload, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import CountUp from "react-countup";
import Image from "next/image";
import ProfileImg from "../../../public/ron.jpg";
import { Button } from "../ui/button";

function HeroSection() {
  // Extracted Social Icons Component
  const SocialIcons = () => {
    const socialLinks = [
      { Icon: FaGithub, href: "https://github.com/your-username" },
      { Icon: BsLinkedin, href: "https://linkedin.com/in/your-username" },
      { Icon: FiFacebook, href: "https://facebook.com/your-username" },
    ];

    return (
      <div className="flex space-x-6">
        {socialLinks.map(({ Icon, href }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="border-2 border-dotted border-[#fe0f5d] text-[#fe0f5d] rounded-full text-4xl p-2 hover:bg-white/10 transition-colors" />
          </Link>
        ))}
      </div>
    );
  };

  const statsData = [
    { end: 3, label: "Years of experience" },
    { end: 12, label: "Projects completed" },
    { end: 32, label: "Technologies mastered" },
    { end: 2, label: "Full Stack Projects Led" },
  ];

  const Stats = ({
    end,
    label,
    isFirst,
  }: {
    end: number;
    label: string;
    isFirst?: boolean;
  }) => (
    <div className={`flex flex-col items-center ${!isFirst ? "mx-8" : ""}`}>
      <h1 className="text-4xl text-customPrimary-800 font-semibold text-left">
        <CountUp end={end} duration={4} /> +
      </h1>
      <h1 className="text-base text-gray-400 font-medium">{label}</h1>
    </div>
  );
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-left">
          <h2 className="text-[#fe0f5d] font-medium text-xl">Hi, my name is</h2>
          <h1 className="font-bold text-6xl">Rony Barua</h1>
          <h3 className="font-normal text-gray-500 text-3xl my-6">
            Full Stack Engineer with 3 years+ Experience
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I'm an experienced Full Stack JavaScript Developer with a strong
            background in both frontend and backend development, specializing in
            creating high-performance, scalable applications. Currently, I'm
            leading the development of a Shopify Dropshipping app, focusing on
            efficient parcel tracking and management solutions.
          </p>
          <div className="flex space-x-8 items-center mt-8">
            <Button
              variant="outline"
              className="bg-transparent rounded-xl border-[#fe0f5d] text-white flex items-center gap-2 hover:bg-[#fe0f5d] hover:text-white"
            >
              <FaDownload className="text-[#fe0f5d]" />
              Download CV
            </Button>
            <SocialIcons />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="w-[400px] h-[400px] rounded-full border-2 border-dashed border-[#fff] overflow-hidden flex items-center justify-center">
            <Image
              src={ProfileImg}
              alt="Profile"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-8">
        {statsData.map((stat, index) => (
          <Stats
            key={index}
            end={stat.end}
            label={stat.label}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
