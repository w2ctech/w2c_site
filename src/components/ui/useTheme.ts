"use client";

import { useRef, useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const _store = new Map<string, { value: string; setter: (v: string) => void }>();

export function useTheme(): ["dark" | "light", () => void] {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("w2c-theme");
      return stored === "light" ? "light" : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.className = theme === "light" ? "theme-light" : "";
    localStorage.setItem("w2c-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return [theme, toggle];
}
