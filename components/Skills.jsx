"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
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
  SiGo
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
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "C", icon: SiC, color: "text-blue-500" },
      { name: "C++", icon: TbBrandCpp, color: "text-blue-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Go", icon: SiGo, color: "text-blue-500" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "dark:text-white text-black",
      },
      { name: "Vite", icon: SiVite, color: "text-purple-500" },
      {
        name: "Flask",
        icon: SiFlask,
        color: "dark:text-gray-300 text-gray-700",
      },
      { name: "Django", icon: SiDjango, color: "text-green-600" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
      { name: "PyCharm", icon: SiPycharm, color: "text-green-500" },
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "dark:text-white text-black" },
    ],
  },
  {
    category: "Deployment",
    skills: [
      { name: "Vercel", icon: SiVercel, color: "dark:text-white text-black" },
      { name: "Render", icon: SiRender, color: "text-green-500" },
      { name: "Railway", icon: SiRailway, color: "text-purple-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
  },
  {
    category: "Testing",
    skills: [{ name: "Postman", icon: SiPostman, color: "text-orange-500" }],
  },
];

export default function Skills({ skillRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      ref={skillRef}
      className={`min-h-screen pt-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div
        className={`container mx-auto px-6 py-16 ${
          theme === "dark" ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3
            className={`text-3xl lg:text-4xl font-bold mb-4 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            }`}
          >
            Skills & Technologies
          </h3>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Comprehensive expertise across modern development technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((categoryData, categoryIndex) => (
            <motion.div
              key={categoryData.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Category Title */}
              <div className="flex items-center gap-4">
                <div
                  className={`h-1 flex-1 rounded-full ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                  }`}
                />
                <h4
                  className={`text-xl font-semibold px-4 ${
                    theme === "dark" ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {categoryData.category}
                </h4>
                <div
                  className={`h-1 flex-1 rounded-full ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                  }`}
                />
              </div>

              {/* Skills Grid */}
              <div className="relative">
                {/* Desktop View */}
                <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {categoryData.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.4,
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                        className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                          theme === "dark"
                            ? "bg-gray-800 border-gray-700 hover:border-gray-600 hover:bg-gray-700"
                            : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <div
                            className={`text-3xl transition-transform duration-300 ${skill.color} group-hover:scale-110`}
                          >
                            {IconComponent && <IconComponent />}
                          </div>
                          <span
                            className={`text-sm font-medium text-center leading-tight ${
                              theme === "dark"
                                ? "text-gray-200"
                                : "text-gray-700"
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile View */}
                <div className="sm:hidden">
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {categoryData.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.4,
                          }}
                          className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer min-w-[120px] flex-shrink-0 snap-center ${
                            theme === "dark"
                              ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                              : "bg-white border-gray-200 hover:bg-gray-50 hover:shadow-md"
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-3">
                            <div
                              className={`text-3xl transition-transform duration-300 ${skill.color} group-hover:scale-110`}
                            >
                              {IconComponent && <IconComponent />}
                            </div>
                            <span
                              className={`text-sm font-medium text-center leading-tight ${
                                theme === "dark"
                                  ? "text-gray-200"
                                  : "text-gray-700"
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
