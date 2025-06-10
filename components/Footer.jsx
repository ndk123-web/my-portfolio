"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaHeart,
  FaArrowUp,
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPython,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

export default function Footer({
  skillRef,
  homeRef,
  projectsRef,
  aboutRef,
  contactRef,
}) {
  const { theme } = useContext(ThemeContext);

  const footerLinks = {
    navigation: [
      { name: "Home", href: "home", icon: FaHome },
      { name: "About", href: "about", icon: FaUser },
      { name: "Skills", href: "skills", icon: FaCode },
      { name: "Projects", href: "projects", icon: FaProjectDiagram },
      { name: "Contact", href: "contact", icon: FaEnvelope },
    ],
    social: [
      {
        name: "LinkedIn",      href:"https://www.linkedin.com/in/navnath-kadam-883a57288",
        icon: FaLinkedin,
        color: "text-blue-500 hover:text-blue-600",
        bgColor: "hover:bg-blue-100 dark:hover:bg-blue-900/20",
      },
      {
        name: "GitHub",
        href: "https://github.com/ndk123-web",
        icon: FaGithub,
        color:
          "text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200",
        bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
      },
    ],
    skills: [
      { name: "React", icon: SiReact, color: "text-blue-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-600 dark:text-gray-400",
      },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
    ],
    contact: [
      {
        icon: FaEnvelope,
        value: "navnath.kadam@vit.edu.in",
        href: "mailto:navnath.kadam@vit.edu.in",
      },
      {
        icon: FaPhone,
        value: "+91 91362 92975",
        href: "tel:+919876543210",
      },
    ],
  };

  const handleNavClick = (href) => {
    switch (href) {
      case "home":
        homeRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 border-t border-gray-800"
          : "bg-white border-t border-gray-200"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Navnath Kadam
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Full Stack Developer & AI/ML Enthusiast
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-sm leading-relaxed mb-6 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Passionate about creating innovative solutions and building
                scalable applications that make a difference in people's lives.
              </motion.p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {footerLinks.social.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-100 hover:bg-gray-200"
                      } ${social.color} ${social.bgColor}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4
                className={`text-lg font-semibold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 group ${
                          theme === "dark"
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <IconComponent className="text-sm group-hover:text-blue-500 transition-colors duration-300" />
                        <span className="text-sm">{link.name}</span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Skills & Technologies */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4
                className={`text-lg font-semibold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Technologies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {footerLinks.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        theme === "dark"
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <IconComponent className={`text-sm ${skill.color}`} />
                      <span
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div> */}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4
                className={`text-lg font-semibold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Contact
              </h4>
              <ul className="space-y-4">
                {footerLinks.contact.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li
                      key={item.value}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={item.href}
                        className={`flex items-center space-x-3 group transition-all duration-300 hover:translate-x-1 ${
                          theme === "dark"
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <IconComponent className="text-sm group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                        <span className="text-sm break-all">{item.value}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Newsletter Signup - Additional Contact Feature */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <p
                  className={`text-xs mb-3 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Let's connect and build something amazing together!
                </p>
                <div className="flex items-center space-x-2">
                  <FaHeart className="text-red-500 text-sm animate-pulse" />
                  <span
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Made with passion
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`text-sm text-center sm:text-left ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © {new Date().getFullYear()} Navnath Kadam. All rights reserved.
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl transition-all duration-300 group ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Scroll to top"
              >
                <FaArrowUp className="text-sm group-hover:animate-bounce" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
