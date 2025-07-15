"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Load preference on mount
    const stored = localStorage.getItem("theme");
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored === "dark" || (!stored && systemPref);
    setIsDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  const toggleTheme = () => {
    const enabled = !isDark;
    setIsDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
    localStorage.setItem("theme", enabled ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-neutral-200 dark:bg-neutral-700 p-2 rounded text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
    >
      {isDark ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
