"use client";
import React, { useState, useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const currenttheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMount(true), []);
  return (
    <>
      {mount && currenttheme === "dark" ? (
        <CgDarkMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-purple-400"
        />
      ) : (
        <CgDarkMode
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-purple-400"
        />
      )}
    </>
  );
};

export default DarkMode;
