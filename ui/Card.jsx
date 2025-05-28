"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
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
  SiFirebase,
  SiVercel,
  SiRender,
  SiRailway,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiSwift,
  SiReactnative,
  SiExpo,
  SiAndroid,
  SiApple,
} from "react-icons/si";

// Tech stack icon mapping
const techIcons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Flask: SiFlask,
  Django: SiDjango,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  Vercel: SiVercel,
  Render: SiRender,
  Railway: SiRailway,
  Redis: SiRedis,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  "Scikit-learn": SiScikitlearn,
  Keras: SiKeras,
  OpenCV: SiOpencv,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Jupyter: SiJupyter,
  Flutter: SiFlutter,
  Dart: SiDart,
  Kotlin: SiKotlin,
  Swift: SiSwift,
  "React Native": SiReactnative,
  Expo: SiExpo,
  Android: SiAndroid,
  iOS: SiApple,
};

// Tech stack colors
const techColors = {
  React: "text-cyan-500",
  "Next.js": "text-gray-900 dark:text-white",
  "Node.js": "text-green-600",
  JavaScript: "text-yellow-500",
  TypeScript: "text-blue-600",
  Python: "text-blue-500",
  Flask: "text-gray-500",
  Django: "text-green-800",
  MongoDB: "text-green-600",
  PostgreSQL: "text-blue-700",
  MySQL: "text-blue-600",
  Firebase: "text-yellow-500",
  Vercel: "text-gray-900 dark:text-white",
  Render: "text-green-500",
  Railway: "text-purple-600",
  Redis: "text-red-600",
  TensorFlow: "text-orange-500",
  PyTorch: "text-red-600",
  "Scikit-learn": "text-orange-600",
  Keras: "text-red-500",
  OpenCV: "text-green-600",
  Pandas: "text-blue-600",
  NumPy: "text-blue-500",
  Jupyter: "text-orange-500",
  Flutter: "text-blue-500",
  Dart: "text-blue-600",
  Kotlin: "text-purple-600",
  Swift: "text-orange-600",
  "React Native": "text-cyan-500",
  Expo: "text-gray-900 dark:text-white",
  Android: "text-green-600",
  iOS: "text-gray-600",
};

export default function ProjectCard({
  title,
  description,
  techStack,
  features,
  github,
  live,
  video,
  type,
  index,
}) {
  const { theme } = useContext(ThemeContext);

  const getTypeColor = (projectType) => {
    switch (projectType) {
      case "Full Stack":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "AI/ML":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "App Development":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-800/60 border-gray-700 hover:border-gray-600 hover:bg-gray-800/80"
          : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl"
      }`}
    >
      {/* Project Type Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
            type
          )}`}
        >
          {type}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 pt-16">
        {/* Project Title */}
        <h3
          className={`text-xl font-bold mb-3 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm mb-4 leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4
            className={`text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, techIndex) => {
              const IconComponent = techIcons[tech];
              const colorClass = techColors[tech] || "text-gray-500";

              return (
                <div
                  key={techIndex}
                  className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium border ${
                    theme === "dark"
                      ? "bg-gray-700/50 border-gray-600 text-gray-300"
                      : "bg-gray-50 border-gray-200 text-gray-700"
                  }`}
                >
                  {IconComponent && (
                    <IconComponent className={`w-3 h-3 ${colorClass}`} />
                  )}
                  <span>{tech}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4
            className={`text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Key Features
          </h4>
          <div className="flex flex-wrap gap-1">
            {features.map((feature, featureIndex) => (
              <span
                key={featureIndex}
                className={`px-2 py-1 rounded-md text-xs ${
                  theme === "dark"
                    ? "bg-blue-900/30 text-blue-300"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                theme === "dark"
                  ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50"
                  : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              <FaGithub className="w-4 h-4" />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
          )}

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              <span className="text-sm font-medium">Live</span>
            </motion.a>
          )}

          {video && (
            <motion.a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                theme === "dark"
                  ? "border-purple-600 text-purple-400 hover:bg-purple-900/30"
                  : "border-purple-300 text-purple-700 hover:bg-purple-50"
              }`}
            >
              <FaPlay className="w-3 h-3" />
              <span className="text-sm font-medium">Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Effect Gradient */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          theme === "dark"
            ? "bg-gradient-to-t from-blue-900/10 to-transparent"
            : "bg-gradient-to-t from-blue-50/50 to-transparent"
        }`}
      />
    </motion.div>
  );
}
