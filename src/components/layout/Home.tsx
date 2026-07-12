"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import HeroSection from "./HeroSection";
import Resume from "./Resume";
import { Work } from "./Work";
import Contact from "./Contact";
import ThemeToggle from "./ThemeToggle";
import Loader from "../ui/loader";

interface TabItem {
  value: string;
  label: string;
}

const tabItems: TabItem[] = [
  { value: "home", label: "Home" },
  { value: "resume", label: "Resume" },
  { value: "work", label: "Work" },
  { value: "contact", label: "Contact" },
];

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* ---- top bar ---- */}
      <header
        className="relative z-30 border-b border-[var(--p-line-soft)] backdrop-blur-md"
        style={{ background: "var(--p-bar-bg)" }}
      >
        <div className="mx-auto flex h-[70px] max-w-[1160px] items-center gap-5 px-[30px] nav-max:h-auto nav-max:flex-wrap nav-max:px-5 nav-max:py-3">
          <div className="flex items-center gap-[7px] text-[21px] font-extrabold tracking-tight text-[var(--p-ink)]">
            Rony
            <span
              className="h-2 w-2 rounded-full bg-[var(--p-accent)] animate-pulse-dot"
              style={{ boxShadow: "0 0 14px var(--p-accent-glow)" }}
            />
          </div>

          <nav
            role="tablist"
            aria-label="Pages"
            className="ml-auto flex gap-[3px] rounded-[13px] border border-[var(--p-line)] p-[5px] nav-max:order-3 nav-max:ml-0 nav-max:w-full nav-max:justify-between"
            style={{ background: "var(--p-tab-bg)" }}
          >
            {tabItems.map(({ value, label }) => (
              <button
                key={value}
                role="tab"
                aria-selected={selectedTab === value}
                onClick={() => setSelectedTab(value)}
                className={cn(
                  "rounded-[9px] px-4 py-2 font-mono text-[12.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  selectedTab === value
                    ? "text-white"
                    : "text-[var(--p-muted)] hover:text-[var(--p-ink)]"
                )}
                style={
                  selectedTab === value
                    ? {
                        background: "var(--p-accent)",
                        boxShadow: "0 6px 20px -6px var(--p-accent-glow)",
                      }
                    : undefined
                }
              >
                {label}
              </button>
            ))}
          </nav>

          <span className="nav-max:ml-auto">
            <ThemeToggle />
          </span>

          <button
            type="button"
            onClick={() => setSelectedTab("contact")}
            className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--p-line)] px-4 py-[10px] font-mono text-[12.5px] text-[var(--p-ink)] transition-all hover:border-[var(--p-accent)] hover:bg-[var(--p-accent)] hover:text-white nav-max:hidden"
          >
            Hire me
            <ArrowRight size={15} />
          </button>
        </div>
      </header>

      {/* ---- content: centered when it fits, scrolls when it doesn't ---- */}
      <main className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto px-[30px] py-7 nav-max:px-5">
        <div className="mx-auto flex w-full max-w-[1160px] flex-1 flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-auto w-full"
            >
              {selectedTab === "home" && <HeroSection />}
              {selectedTab === "resume" && <Resume />}
              {selectedTab === "work" && <Work />}
              {selectedTab === "contact" && <Contact />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* ---- footer ---- */}
      <footer className="relative z-10 border-t border-[var(--p-line-soft)] px-[30px] py-[18px] nav-max:px-5">
        <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-2 font-mono text-[11.5px] text-[var(--p-muted-2)]">
          <span>© 2026 Rony Barua</span>
          <span>system architecture · light + dark</span>
        </div>
      </footer>
    </div>
  );
}
