"use client";

import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi2";

const Header = ({ skillRef, homeRef, projectsRef, aboutRef, experienceRef, contactRef }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (ref, name) => {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(name);
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Experience", ref: experienceRef },
    { name: "Skills", ref: skillRef },
    { name: "Projects", ref: projectsRef },
    { name: "Contact", ref: contactRef },
  ];

  const isDark = theme === "dark";

  return (
    <>
      {/* ── Desktop floating pill nav ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 ${
            scrolled
              ? isDark
                ? "bg-[#111118]/90 border border-white/10 shadow-2xl shadow-black/50 backdrop-blur-xl"
                : "bg-white/90 border border-black/10 shadow-2xl shadow-black/10 backdrop-blur-xl"
              : isDark
              ? "bg-[#111118]/60 border border-white/6 backdrop-blur-md"
              : "bg-white/60 border border-black/6 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo(homeRef, "Home")}
            className="px-3 py-1.5 mr-2 focus:outline-none"
          >
            <span className="text-lg font-bold gradient-text">NDK</span>
          </button>

          {/* Separator */}
          <div className={`w-px h-5 ${isDark ? "bg-white/10" : "bg-black/10"}`} />

          {/* Nav links — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.ref, item.name)}
                  className={`relative px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none ${
                    isActive
                      ? isDark
                        ? "text-white"
                        : "text-gray-900"
                      : isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className={`absolute inset-0 rounded-xl ${
                        isDark ? "bg-white/10" : "bg-black/8"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Separator */}
          <div className={`hidden md:block w-px h-5 mx-1 ${isDark ? "bg-white/10" : "bg-black/10"}`} />

          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-xl transition-colors focus:outline-none ${
              isDark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:text-gray-900 hover:bg-black/8"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
          </motion.button>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors focus:outline-none ${
              isDark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:text-gray-900 hover:bg-black/8"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.header>

      {/* ── Mobile slide-down menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`fixed top-20 left-4 right-4 z-40 rounded-2xl p-3 md:hidden ${
              isDark
                ? "bg-[#111118]/95 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60"
                : "bg-white/95 border border-black/10 backdrop-blur-xl shadow-2xl shadow-black/10"
            }`}
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.ref, item.name)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all focus:outline-none ${
                    activeSection === item.name
                      ? isDark
                        ? "bg-white/10 text-white"
                        : "bg-black/8 text-gray-900"
                      : isDark
                      ? "text-gray-400 hover:bg-white/6 hover:text-white"
                      : "text-gray-500 hover:bg-black/5 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
