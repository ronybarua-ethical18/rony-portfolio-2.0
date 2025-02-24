"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#10122e", "#10122e", "#10122e"];
  const linearGradients = ["#10122e", "#10122e", "#10122e"];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[600px] overflow-y-auto flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-[500px] w-[650px] rounded-2xl sticky top-10 overflow-hidden border border-gray-600 p-3",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      <div className="div relative flex items-start px-4">
        <div className="max-w-4xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10">
              <div className="flex items-center">
                <div className="w-8 h-1 bg-[#fe0f5d] rounded-sm mr-4"></div>
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <div className="flex items-center ml-8 space-x-3">
                  {" "}
                  <FiGithub className="cursor-pointer hover:text-[#fe0f5d]" />
                  <FiExternalLink className="cursor-pointer hover:text-[#fe0f5d]" />
                </div>
              </div>
              <motion.h1
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-gray-600 max-w-lg mt-10"
              >
                {item.description}
              </motion.h1>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
