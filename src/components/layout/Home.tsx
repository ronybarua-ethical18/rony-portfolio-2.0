"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "./HeroSection";
import Resume from "./Resume";
import Work from "./Work";

// Home Page Content Component
const HomeContent = () => {
  return <HeroSection />;
};

// Main Home Component
export default function Home() {
  const tabItems = [
    { value: "home", label: "Home" },
    { value: "resume", label: "Resume" },
    { value: "work", label: "Work" },
    { value: "contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-between items-start min-h-[calc(100vh-40px)] text-white relative">
      <h1 className="text-white font-bold text-4xl mt-0 absolute top-0 left-0">
        Rony
      </h1>

      <Tabs defaultValue="home" className="w-full m-0">
        <TabsList className="grid max-w-[500px] grid-cols-4 m-auto bg-transparent border border-dotted h-10">
          {tabItems.map(({ value, label }) => (
            <TabsTrigger key={value} value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="min-h-[calc(100vh-212px)] flex justify-center mt-28">
          <TabsContent value="home" className="text-left w-full">
            <HomeContent />
          </TabsContent>
          <TabsContent value="resume" className="w-full"><Resume /></TabsContent>
          <TabsContent value="work"><Work /></TabsContent>
          <TabsContent value="blogs">Blogs</TabsContent>
          <TabsContent value="contact">Contact</TabsContent>
        </div>
      </Tabs>

      <Button
        variant="secondary"
        className="absolute top-0 right-0 hover:bg-gray-700/50"
      >
        Hire me
      </Button>
    </div>
  );
}
