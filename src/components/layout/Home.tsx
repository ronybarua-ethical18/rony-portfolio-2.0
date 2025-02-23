"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import Resume from "./Resume";
import {  SpotlightNewDemo } from "../ui/spotlight";
// import Work from "./Work";
import Contact from "./Contact";
// import { AnimatedTestimonialsDemo } from "./Work";
import { Button } from "../ui/button";
import { StickyScrollRevealDemo } from "./Work";

// Type definitions
interface TabItem {
  value: string;
  label: string;
}

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Animated wrapper component
const AnimatedContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

// Main Home Component
export default function Home() {
  const [selectedTab, setSelectedTab] = useState("home");

  const tabItems: TabItem[] = [
    { value: "home", label: "Home" },
    { value: "resume", label: "Resume" },
    { value: "work", label: "Work" },
    { value: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-[calc(100vh-40px)] text-white relative">
      <SpotlightNewDemo
      />
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold text-4xl mt-0 absolute top-0 left-0 flex"
      >
        Rony
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="w-[8px] h-[8px] bg-[#fe0f5d] rounded-full mt-8 ml-2"
        />
      </motion.h1>

      <div className="">
        <Tabs
          defaultValue="home"
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full m-0"
        >
          <TabsList className="grid max-w-[500px] grid-cols-4 m-auto bg-white/5 backdrop-blur-sm border border-white/20 shadow-lg rounded-md h-12 place-items-center">
            {tabItems.map(({ value, label }) => (
              <TabsTrigger key={value} value={value} className="h-9">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[calc(100vh-212px)] flex justify-center mt-28">
            <TabsContent value="home" className="text-left w-full m-0">
              {selectedTab === "home" && (
                <AnimatePresence mode="wait">
                  <AnimatedContent>
                    <HeroSection />
                  </AnimatedContent>
                </AnimatePresence>
              )}
            </TabsContent>
            
            <TabsContent value="resume" className="w-full m-0">
              {selectedTab === "resume" && (
                <AnimatePresence mode="wait">
                  <AnimatedContent>
                    <Resume />
                  </AnimatedContent>
                </AnimatePresence>
              )}
            </TabsContent>
            
            <TabsContent value="work" className="w-full m-0">
              {selectedTab === "work" && (
                <AnimatePresence mode="wait">
                  <AnimatedContent>
                    <StickyScrollRevealDemo />
                  </AnimatedContent>
                </AnimatePresence>
              )}
            </TabsContent>
            
            <TabsContent value="contact" className="w-full m-0">
              {selectedTab === "contact" && (
                <AnimatePresence mode="wait">
                  <AnimatedContent>
                    <Contact />
                  </AnimatedContent>
                </AnimatePresence>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-0"
      >
        <Button
          variant="secondary"
          className="hover:bg-gray-700/50"
        >
          Hire me
        </Button>
      </motion.div>
    </div>
  );
}