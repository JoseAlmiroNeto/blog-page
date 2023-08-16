"use client";
import { useState, useEffect } from "react";
import { Switch } from "./switch";

export function SwitchTheme() {
  const [theme, setTheme] = useState("null");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Switch onClick={handleThemeSwitch}/>
  );
}
