import React from "react";

import Link from "next/link";
import { FaDownload, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import CountUp from "react-countup";
import Image from "next/image";
import ProfileImg from "../../../public/rony.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

function HeroSection() {
  // Extracted Social Icons Component
  const SocialIcons = () => {
    const socialLinks = [
      { Icon: FaGithub, href: "https://github.com/your-username" },
      { Icon: BsLinkedin, href: "https://linkedin.com/in/your-username" },
      { Icon: FiFacebook, href: "https://facebook.com/your-username" },
    ];

    return (
      <div className="flex space-x-4">
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
      <div className="grid grid-cols-1 custom-lg:grid-cols-2 gap-4 ">
        <div className="text-left">
          <h2 className="text-[#fe0f5d] font-medium text-xl">Hi, my name is</h2>
          <h1 className="font-bold text-6xl sixteen-hundred:text-5xl">Rony Barua</h1>
          <h3 className="font-normal text-gray-500 text-3xl my-6 sixteen-hundred:text-2xl">
            Backend-Focused Full-Stack Engineer with Over 3 Years of Experience
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg sixteen-hundred:text-base">
            I&apos;m an experienced Full Stack JavaScript Developer with a strong
            background in both frontend and backend development, specializing in
            creating high-performance, scalable applications. 
          </p>
          <div className="flex space-x-6 items-center mt-8">
            <a href="/resume.pdf" download>
              <Button
                variant="outline"
                className="bg-transparent rounded-xl border-[#fe0f5d] text-white flex items-center gap-2 hover:bg-[#fe0f5d] hover:text-white"
              >
                <FaDownload className="text-[#fe0f5d]" />
                Download Resume
              </Button>
            </a>
            <SocialIcons />
          </div>
        </div>
        
        {/* Stats Section - Between text and image on small screens */}
        <div className="custom-lg:hidden flex flex-col custom-sm:flex-row items-center mt-8 sixteen-hundred:mt-8">
          <div className="grid grid-cols-2 gap-4 w-full custom-sm:w-auto custom-sm:flex">
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
        
        <div className="hidden custom-lg:flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
            }}
            className="relative flex items-center justify-center w-[480px] h-[480px]"
          >
            {/* Profile Image with Bottom Fade Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
              }}
              className="w-[430px] h-[430px] flex items-center justify-center mix-blend-lighten absolute shadow-xl overflow-hidden rounded-full"
            >
              <Image
                src={ProfileImg}
                alt="Profile"
                width={420}
                priority
                quality={100}
                height={420}
                className="object-cover sixteen-hundred:w-[350px] sixteen-hundred:h-[350px]"
              />

              {/* Bottom Shadow to Hide Part of Image */}
              <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-black to-transparent opacity-90"></div>
            </motion.div>

            {/* Rotating Circle Effect */}
            <motion.svg
              className="absolute w-[470px] h-[470px] sixteen-hundred:w-[430px] sixteen-hundred:h-[430px] z-50"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlnsXlink="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx={253}
                cy={253}
                r={250}
                stroke="#fe0f5d"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 00" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.circle>
            </motion.svg>

            {/* Dark Shadow Overlay to Hide External Part */}
            <div className="absolute  w-full h-full rounded-full bg-gradient-to-t from-[#10122e] via-black/5 to-transparent opacity-90 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section - Only visible on large screens */}
      <div className="hidden custom-lg:flex items-center mt-8 sixteen-hundred:mt-0">
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
