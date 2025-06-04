"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import {
  FaCode,
  FaBrain,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaHeart,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiTensorflow,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const highlights = [
  {
    icon: FaCode,
    title: "Full Stack MERN",
    description: "MongoDB, Express.js, React, Node.js",
    color: "from-green-400 to-blue-500",
    techIcons: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
  },
  {
    icon: FaBrain,
    title: "AI/ML Enthusiast",
    description: "Machine Learning & Intelligent Systems",
    color: "from-purple-400 to-pink-500",
    techIcons: [SiPython, SiTensorflow],
  },
  {
    icon: FaLightbulb,
    title: "Innovation & Solutions",
    description: "Creative problem-solving approach",
    color: "from-yellow-400 to-orange-500",
    techIcons: [SiJavascript, SiTypescript],
  },
  {
    icon: FaUsers,
    title: "Team Collaboration",
    description: "Effective teamwork & communication",
    color: "from-blue-400 to-indigo-500",
    techIcons: [],
  },
];

const stats = [
  { label: "Years of Experience", value: "0+", icon: FaGraduationCap },
  { label: "Projects Completed", value: "5+", icon: FaRocket },
  // { label: "Technologies Mastered", value: "2+", icon: FaTools },
  // { label: "Problem-Solving Focus", value: "100%", icon: FaHeart },
];

export default function About({ aboutRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`min-h-screen pt-20 relative z-10 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* About Section */}
      <div ref={aboutRef} className="h-20"></div>

      <section className="container mx-auto px-6 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Passionate about creating impactful solutions through code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I'm{" "}
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Navnath Kadam
                </span>
                , a passionate Software Developer driven by the goal of building
                scalable and efficient applications. I enjoy working across the
                full stack and love writing clean, maintainable code that's easy
                to scale and debug.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Currently exploring the world of{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Artificial Intelligence
                </span>{" "}
                and{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Machine Learning
                </span>
                , I aim to build intelligent systems that solve real-world user
                problems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I constantly seek to grow by learning new technologies and
                frameworks, and I believe in turning ideas into robust,
                impactful software.
              </motion.p>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 border-2 rounded-xl font-semibold transition-all duration-300 ${
                  theme === "dark"
                    ? "border-blue-400 text-blue-400 hover:bg-gray-800"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Let's Connect
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Right side - Interactive Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 rounded-2xl border text-center transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-800/60 border-gray-700 hover:border-gray-600"
                        : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`text-2xl mb-3 ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      <IconComponent />
                    </div>
                    <div
                      className={`text-2xl font-bold mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3
              className={`text-2xl lg:text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              What I Bring to the Table
            </h3>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative p-6 rounded-2xl border overflow-hidden group transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-800/60 border-gray-700 hover:border-gray-600"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl"
                  }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`text-3xl mb-4 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}
                  >
                    <IconComponent />
                  </div>

                  {/* Content */}
                  <h4
                    className={`text-lg font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {highlight.title}
                  </h4>

                  <p
                    className={`text-sm mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {highlight.description}
                  </p>

                  {/* Tech Icons */}
                  {highlight.techIcons.length > 0 && (
                    <div className="flex gap-2 justify-center">
                      {highlight.techIcons.map((TechIcon, techIndex) => (
                        <div
                          key={techIndex}
                          className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                            theme === "dark" ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          <TechIcon />
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="sm:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`relative p-6 rounded-2xl border overflow-hidden min-w-[280px] flex-shrink-0 snap-center transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-800/60 border-gray-700"
                        : "bg-white border-gray-200 shadow-sm"
                    }`}
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5`}
                    />

                    {/* Icon */}
                    <div
                      className={`text-3xl mb-4 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}
                    >
                      <IconComponent />
                    </div>

                    {/* Content */}
                    <h4
                      className={`text-lg font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {highlight.title}
                    </h4>

                    <p
                      className={`text-sm mb-4 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {highlight.description}
                    </p>

                    {/* Tech Icons */}
                    {highlight.techIcons.length > 0 && (
                      <div className="flex gap-2 justify-center">
                        {highlight.techIcons.map((TechIcon, techIndex) => (
                          <div
                            key={techIndex}
                            className={`text-lg ${
                              theme === "dark"
                                ? "text-gray-500"
                                : "text-gray-400"
                            }`}
                          >
                            <TechIcon />
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Personal Touch Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-20 text-center rounded-3xl p-12 border ${
            theme === "dark"
              ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700"
              : "bg-gradient-to-r from-blue-50 to-indigo-50 border-gray-200 shadow-lg"
          }`}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl mb-4"
          >
            🚀
          </motion.div>
          <h3
            className={`text-2xl lg:text-3xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Always Learning, Always Growing
          </h3>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Every day brings new challenges and opportunities to learn. I'm
            passionate about staying updated with the latest technologies and
            best practices to deliver exceptional results.
          </p>
        </motion.div>
      </section>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}
