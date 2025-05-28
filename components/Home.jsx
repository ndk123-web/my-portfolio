"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiFlask,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPycharm,
  SiGithub,
  SiGit,
  SiVercel,
  SiRender,
  SiRailway,
  SiFirebase,
  SiPostman,
  SiVite,
  SiRedis,
  SiFireStore,
} from "react-icons/si";
import { SiC } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "Java", icon: FaJava, color: "text-red-600" },
      { name: "C", icon: SiC, color: "text-blue-700" }, // Using as placeholder
      { name: "C++", icon: TbBrandCpp, color: "text-blue-800" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-gray-900 dark:text-white",
      },
      { name: "Vite", icon: SiVite, color: "text-purple-600" },
      { name: "Flask", icon: SiFlask, color: "text-gray-500" },
      { name: "Django", icon: SiDjango, color: "text-green-800" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "Redis", icon: SiRedis, color: "text-red-600" },
      { name: "FireStore", icon: SiFirebase, color: "text-yellow-500" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
      { name: "PyCharm", icon: SiPycharm, color: "text-green-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-gray-900 dark:text-white",
      },
    ],
  },
  {
    category: "Deployment",
    skills: [
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-gray-900 dark:text-white",
      },
      { name: "Render", icon: SiRender, color: "text-green-500" },
      { name: "Railway", icon: SiRailway, color: "text-purple-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
  },
  {
    category: "Testing",
    skills: [{ name: "Postman", icon: SiPostman, color: "text-orange-500" }],
  },
];

export default function Home({ skillRef, homeRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`min-h-screen pt-20 relative z-10 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      {/* Just small padding */}

      <div ref={homeRef} className="h-20"></div>

      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`font-medium text-lg lg:text-xl ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                👋 Hello, I'm
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Navnath Kadam
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-2xl lg:text-4xl font-semibold ${
                  theme === "dark"
                    ? "text-gray-200"
                    : "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent"
                }`}
              >
                Software Developer | Ai Enthusiast
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg lg:text-xl leading-relaxed max-w-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I craft beautiful, responsive web applications with modern
              technologies. Passionate about creating seamless user experiences
              and scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-300 ${
                  theme === "dark"
                    ? "border-blue-400 text-blue-400 hover:bg-gray-800"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Let's Connect
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 pt-8"
            >
              <div className="text-center">
                <div
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  5+
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  1+
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Years Exp
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating Gradient Border */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ${
                    theme === "dark" ? "opacity-20" : "opacity-15"
                  }`}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Pulsing Inner Circle */}
                <motion.div
                  className={`absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 ${
                    theme === "dark" ? "opacity-20" : "opacity-15"
                  }`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`absolute inset-8 rounded-full overflow-hidden border-4 shadow-lg ${
                    theme === "dark" ? "border-gray-700" : "border-white"
                  }`}
                >
                  <Image
                    src="/myImage.jpg"
                    alt="Navnath Kadam - Full Stack Developer"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </motion.div>

                {/* Simple Corner Decorations */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-yellow-400/50 blur-sm"
                />

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-pink-400/50 blur-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      {/* Just small padding */}
    </main>
  );
}
