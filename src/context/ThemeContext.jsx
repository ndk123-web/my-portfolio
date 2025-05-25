import React, { createContext, useContext, useState, useEffect } from "react";

// Step 1: Create the Context
// This creates a "channel" that components can tune into
const ThemeContext = createContext();

// Step 2: Create Provider Component
// This is like the "broadcasting station" that holds and manages theme state
export const ThemeProvider = ({ children }) => {
  // State to track if dark mode is active
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State for theme animations (smooth transitions)
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Step 3: Initialize theme on component mount
  useEffect(() => {
    // Check if user has a saved preference in localStorage
    const savedTheme = localStorage.getItem("portfolio-theme");

    // Check user's system preference (OS dark/light mode)
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Priority: saved preference > system preference > default (light)
    const shouldUseDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    setIsDarkMode(shouldUseDark);

    // Apply theme to document element for CSS variables
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  // Step 4: Toggle theme function
  const toggleTheme = () => {
    setIsTransitioning(true);

    // Toggle the state
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Save to localStorage for persistence
    localStorage.setItem("portfolio-theme", newDarkMode ? "dark" : "light");

    // Apply to document for global CSS access
    document.documentElement.classList.toggle("dark", newDarkMode);

    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Step 5: Theme colors and styles (dynamic based on current theme)
  const theme = {
    // Current theme state
    isDarkMode,
    isTransitioning,

    // Theme toggle function
    toggleTheme,

    // Color palette that changes based on theme
    colors: {
      // Primary brand colors
      primary: isDarkMode ? "#3B82F6" : "#2563EB",
      primaryHover: isDarkMode ? "#60A5FA" : "#1D4ED8",

      // Background colors
      background: isDarkMode ? "#0F172A" : "#FFFFFF",
      backgroundSecondary: isDarkMode ? "#1E293B" : "#F8FAFC",

      // Text colors
      textPrimary: isDarkMode ? "#F1F5F9" : "#1E293B",
      textSecondary: isDarkMode ? "#94A3B8" : "#64748B",

      // Border and accent colors
      border: isDarkMode ? "#334155" : "#E2E8F0",
      accent: isDarkMode ? "#7C3AED" : "#8B5CF6",

      // Status colors
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
    },

    // Glassmorphism effects
    glass: {
      background: isDarkMode
        ? "rgba(30, 41, 59, 0.8)"
        : "rgba(255, 255, 255, 0.8)",
      backdrop: "blur(12px)",
      border: isDarkMode
        ? "1px solid rgba(148, 163, 184, 0.1)"
        : "1px solid rgba(203, 213, 225, 0.3)",
    },

    // Shadow styles for neomorphism
    shadows: {
      neumorphism: isDarkMode
        ? `
          20px 20px 40px rgba(0, 0, 0, 0.4),
          -20px -20px 40px rgba(255, 255, 255, 0.05)
        `
        : `
          20px 20px 40px rgba(0, 0, 0, 0.1),
          -20px -20px 40px rgba(255, 255, 255, 0.8)
        `,

      card: isDarkMode
        ? "0 8px 32px rgba(0, 0, 0, 0.3)"
        : "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
  };

  // Step 6: Provide the theme data to all child components
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Step 7: Custom hook to use theme in any component
// This is a convenience function so we don't have to import useContext everywhere
export const useTheme = () => {

  // it returns all the values from the context like value = {theme}
  const context = useContext(ThemeContext);

  // Error handling: make sure hook is used within ThemeProvider
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// Step 8: Export the context for advanced usage (optional)
export default ThemeContext;
