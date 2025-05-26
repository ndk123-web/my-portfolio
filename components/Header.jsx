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

  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 px-6 py-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-lg`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            Portfolio
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.div
                whileHover={{ y: -2 }}
                className={`relative text-lg py-2 ${
                  pathname === item.path ? "font-bold" : ""
                }`}
              >
                {item.name}
                {/* Underline animation */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-current ${
                    pathname === item.path ? "w-full" : "w-0"
                  }`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.div>
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-current"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-2 space-y-4">
          {navItems.map((item, i) => (
            <motion.div
              key={item.path}
              custom={i}
              variants={menuItemVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
            >
              <Link href={item.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-lg py-2 ${
                    pathname === item.path
                      ? "font-bold border-b-2 border-current"
                      : ""
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            </motion.div>
          ))}

          {/* Mobile Theme Toggle Button */}
          <motion.div
            variants={menuItemVariants}
            custom={navItems.length}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            className="pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <motion.button
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center space-x-2 w-full py-2"
            >
              <span className="text-lg">
                {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
