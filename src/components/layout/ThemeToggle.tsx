"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-[42px] w-[42px] place-items-center rounded-[11px] border border-[var(--p-line)] text-[var(--p-muted)] transition-all duration-200 hover:border-[var(--p-accent)] hover:bg-[var(--p-accent-soft)] hover:text-[var(--p-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
