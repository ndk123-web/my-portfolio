import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/themeContext";

export const Header = () => {
  const { isDarkMode, toggleTheme, colors, glass } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled ? "py-4" : "py-6"}
      `}
      style={{
        backgroundColor: glass.background,
        backdropFilter: glass.backdrop,
        borderBottom: glass.border,
      }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold z-50"
          style={{ color: colors.textPrimary }}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative hover:text-primary transition-colors duration-300"
              style={{ color: colors.textSecondary }}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-transform hover:scale-110"
            style={{ backgroundColor: colors.backgroundSecondary }}
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 z-50 relative"
          style={{ color: colors.textPrimary }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}
              style={{ backgroundColor: colors.textPrimary }}
            />
            <span 
              className={`block w-6 h-0.5 my-1 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: colors.textPrimary }}
            />
            <span 
              className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              style={{ backgroundColor: colors.textPrimary }}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`
            fixed inset-0 z-40 md:hidden
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          style={{
            backgroundColor: glass.background,
            backdropFilter: glass.backdrop,
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-2xl font-medium hover:scale-110 transition-all duration-300"
                style={{ color: colors.textPrimary }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                handleNavClick();
              }}
              className="p-3 rounded-full transition-transform hover:scale-110 mt-4"
              style={{ backgroundColor: colors.backgroundSecondary }}
            >
              {isDarkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;