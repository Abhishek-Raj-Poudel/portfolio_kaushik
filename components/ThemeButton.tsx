import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

type Props = {};

export default function ThemeButton({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {currentTheme === "dark" ? (
        <div
          onClick={() => setTheme("light")}
          className="bg-primary text-white p-2 rounded-full transition-all duration-200"
        >
          <FiSun className="w-6 h-6" />
        </div>
      ) : (
        <div
          onClick={() => setTheme("dark")}
          className="bg-primary text-white p-2 rounded-full transition-all duration-200"
        >
          <FiMoon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
}
