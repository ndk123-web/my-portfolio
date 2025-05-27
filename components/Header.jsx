"use client";

import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ skillRef, homeRef }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const pathname = usePathname();

  // Function to handle smooth scrolling to home section
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (homeRef && homeRef.current) {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection("Home");
    setIsOpen(false);
  };

  // Function to handle smooth scrolling to skills section
  const handleSkillsClick = (e) => {
    e.preventDefault();
    if (skillRef && skillRef.current) {
      skillRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection("Skills"); // Fixed: removed extra spaces
    setIsOpen(false);
  };

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Better threshold for section detection
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      // Sort entries by intersection ratio to prioritize the most visible section
      const sortedEntries = entries.sort(
        (a, b) => b.intersectionRatio - a.intersectionRatio
      );

      sortedEntries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === homeRef?.current) {
            setActiveSection("Home");
          } else if (entry.target === skillRef?.current) {
            setActiveSection("Skills");
          }
        }
      });

      // Fallback: if no sections are intersecting, check scroll position
      if (!entries.some((entry) => entry.isIntersecting)) {
        const scrollTop = window.scrollY;
        const homeTop = homeRef?.current?.offsetTop || 0;
        const skillsTop = skillRef?.current?.offsetTop || 0;

        if (scrollTop < skillsTop - 100) {
          setActiveSection("Home");
        } else {
          setActiveSection("Skills");
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe sections
    if (homeRef?.current) observer.observe(homeRef.current);
    if (skillRef?.current) observer.observe(skillRef.current);

    // Add scroll listener as fallback
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const homeTop = homeRef?.current?.offsetTop || 0;
      const skillsTop = skillRef?.current?.offsetTop || 0;

      // Add some buffer to prevent flickering
      if (scrollTop < skillsTop - 100) {
        setActiveSection("Home");
      } else {
        setActiveSection("Skills");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (homeRef?.current) observer.unobserve(homeRef.current);
      if (skillRef?.current) observer.unobserve(skillRef.current);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [homeRef, skillRef]);

  const navItems = [
    { name: "Home", path: "/", isScroll: true, onClick: handleHomeClick },
    {
      name: "Skills",
      path: "/Skills",
      isScroll: true,
      onClick: handleSkillsClick,
    },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/Contacts" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 backdrop-blur-lg ${ // md means medium , options = md->med , lg->large , xl->extra large
        theme === "dark"
          ? "bg-gray-900/90 text-white border-gray-700"
          : "bg-white/90 text-gray-900 border-gray-200"
      } shadow-lg border-b`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-7">
          {/* Logo */}
          <button onClick={handleHomeClick} className="focus:outline-none">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
            >
              Navnath
            </motion.h1>
          </button>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`p-2.5 rounded-xl transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-600"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </motion.button>

            {/* Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-600"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 8, x: 0 }
                      : { rotate: 0, y: 0, x: 0 }
                  }
                  className="w-full h-0.5 bg-current rounded-full origin-center"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -8, x: 0 }
                      : { rotate: 0, y: 0, x: 0 }
                  }
                  className="w-full h-0.5 bg-current rounded-full origin-center"
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Handle scroll items (Home and Skills)
              if (item.isScroll) {
                const isActive = activeSection === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className="focus:outline-none"
                  >
                    <motion.div className="relative group">
                      <span
                        className={`text-lg transition-colors duration-200 ${
                          isActive
                            ? "text-blue-600 font-bold"
                            : theme === "light"
                            ? "text-gray-900 group-hover:text-blue-600"
                            : "text-gray-300 group-hover:text-blue-400"
                        }`}
                      >
                        {item.name}
                      </span>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ width: isActive ? "100%" : "0%" }}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.div>
                  </button>
                );
              }

              // Handle regular navigation items
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div className="relative group">
                    <span
                      className={`text-lg transition-colors duration-200 ${
                        pathname === item.path
                          ? "text-blue-600 font-semibold"
                          : theme === "light"
                          ? "text-gray-900 group-hover:text-blue-600"
                          : "text-gray-300 group-hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{
                        width: pathname === item.path ? "100%" : "0%",
                      }}
                      animate={{
                        width: pathname === item.path ? "100%" : "0%",
                      }}
                      whileHover={{ width: "100%" }}
                    />
                  </motion.div>
                </Link>
              );
            })}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`p-2 rounded-full ${
                theme === "light"
                  ? "text-gray-900 hover:bg-gray-200"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </motion.button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
    fixed 
    left-0 
    right-0 
    top-[73px]
    min-w-[320px]
    transition-all 
    duration-300 
    ease-in-out
    overflow-hidden
    ${isOpen ? "max-h-[calc(100vh-73px)] opacity-100" : "max-h-0 opacity-0"}
    ${theme === "dark" ? "bg-gray-900/95" : "bg-white/95"}
    border-t
    ${theme === "dark" ? "border-gray-800" : "border-gray-100"}
  `}
      >
        <div className="container mx-auto px-6">
          <nav className="py-4 space-y-2">
            {navItems.map((item, i) => (
              <div
                key={item.name}
                className={`transform transition-all duration-300 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: `${i * 75}ms`,
                }}
              >
                {item.isScroll ? (
                  <button
                    onClick={item.onClick}
                    className={`block w-full px-4 py-3 rounded-xl transition-colors duration-200 text-left ${
                      activeSection === item.name
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-semibold"
                        : theme === "light"
                        ? "text-gray-900 hover:bg-gray-50"
                        : "text-gray-300 hover:bg-gray-800/50"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                block 
                w-full 
                px-4 
                py-3 
                rounded-xl 
                transition-colors 
                duration-200
                ${
                  pathname === item.path
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-semibold"
                    : theme === "light"
                    ? "text-gray-900 hover:bg-gray-50"
                    : "text-gray-300 hover:bg-gray-800/50"
                }
              `}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
