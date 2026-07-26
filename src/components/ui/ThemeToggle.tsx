"use client";
import { useTheme } from "@/lib/theme-context";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="relative w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center transition-colors hover:bg-amber-200 dark:hover:bg-amber-800/60">
      <Sun className={"absolute w-5 h-5 text-amber-600 transition-all duration-300 " + (theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0")} />
      <Moon className={"absolute w-5 h-5 text-amber-200 transition-all duration-300 " + (theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")} />
    </button>
  );
}