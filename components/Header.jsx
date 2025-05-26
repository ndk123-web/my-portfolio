"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/Skills" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/Contacts" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 backdrop-blur-md ${
        theme === "dark"
          ? "bg-gray-900/95 text-white border-gray-700"
          : "bg-white/95 text-gray-900 border-gray-200"
      } shadow-lg border-b`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.h1>
          </Link>

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
                  animate={isOpen ? { rotate: 45, y: 8, x: 0 } : { rotate: 0, y: 0, x: 0 }}
                  className="w-full h-0.5 bg-current rounded-full origin-center"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8, x: 0 } : { rotate: 0, y: 0, x: 0 }}
                  className="w-full h-0.5 bg-current rounded-full origin-center"
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.div className="relative group">
                  <span
                    className={`text-lg transition-colors duration-200 ${
                      pathname === item.path
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ width: pathname === item.path ? "100%" : "0%" }}
                    animate={{ width: pathname === item.path ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </motion.button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu - Fixed version */}
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
                key={item.path}
                className={`
            transform 
            transition-all 
            duration-300
            ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
          `}
                style={{
                  transitionDelay: `${i * 75}ms`,
                }}
              >
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
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }
            `}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
