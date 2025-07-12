"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import Resume from "./Resume";
import { SpotlightNewDemo } from "../ui/spotlight";
// import Work from "./Work";
import Contact from "./Contact";
// import { AnimatedTestimonialsDemo } from "./Work";
import { Button } from "../ui/button";
import { Work } from "./Work";
import { GlowingEffect } from "../ui/glowing-effect";
import Loader from "../ui/loader";

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
export const AnimatedContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />
  }

  const tabItems: TabItem[] = [
    { value: "home", label: "Home" },
    { value: "resume", label: "Resume" },
    { value: "work", label: "Work" },
    { value: "contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-40px)] text-white relative"
    >
      <SpotlightNewDemo />
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold text-4xl mt-0 absolute top-0 left-0 flex custom-md:flex hidden"
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
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
            {tabItems.map(({ value, label }) => (
              <TabsTrigger key={value} value={value} className="h-9">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[calc(100vh-212px)] flex justify-center mt-28 sixteen-hundred:mt-20">
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
                    <Work />
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
        className="absolute top-0 right-0 custom-md:block hidden"
      >
        <Button variant="secondary" className="hover:bg-[#fe0f5d] hover:text-white text-black" onClick={() => setSelectedTab('contact')}>
          Hire me
        </Button>
      </motion.div>
    </motion.div>
  );
}
