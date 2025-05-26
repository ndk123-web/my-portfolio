"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Header = () => {
  // Destructure theme directly
  const { theme, setTheme } = useContext(ThemeContext);

  const handleDarkLight = () => {
    setTheme((prevTheme) => {
      prevTheme = (prevTheme === "light") ? "dark" : "light";
      return prevTheme;
    });
  };

  return (
    <div>
      This is Header
      <p>Theme: {theme}</p>
      <button onClick={handleDarkLight}>Toggle theme</button>
    </div>
  );
};

export default Header;
