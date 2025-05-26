'use client';

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    
  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // Pass the values directly, not wrapped in allStates
  const value = {
    theme,
    setTheme,
    toggle,
    setToggle,
    mousePosition,
    setMousePosition
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};