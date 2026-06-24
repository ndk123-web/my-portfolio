"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript, SiTypescript,
  SiPython, SiFlask, SiDjango, SiMongodb, SiPostgresql, SiMysql,
  SiPycharm, SiGithub, SiGit, SiVercel, SiRender, SiRailway,
  SiFirebase, SiPostman, SiVite, SiRedis, SiGo,
} from "react-icons/si";
import { SiC } from "react-icons/si";
import { FaJava, FaTerminal } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";

const skillCategories = [
  {
    category: "Languages",
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Python", icon: SiPython, color: "text-blue-400" },
      { name: "Go", icon: SiGo, color: "text-cyan-400" },
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "C", icon: SiC, color: "text-blue-500" },
      { name: "C++", icon: TbBrandCpp, color: "text-blue-500" },
    ],
  },
  {
    category: "Frameworks",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Vite", icon: SiVite, color: "text-purple-400" },
      { name: "Flask", icon: SiFlask, color: "text-gray-400" },
      { name: "Django", icon: SiDjango, color: "text-green-600" },
    ],
  },
  {
    category: "Databases",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "Redis", icon: SiRedis, color: "text-red-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
    ],
  },
  {
    category: "Tools",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "VS Code", icon: VscCode, color: "text-blue-400" },
      { name: "PyCharm", icon: SiPycharm, color: "text-green-400" },
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    ],
  },
  {
    category: "Deployment",
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Render", icon: SiRender, color: "text-green-400" },
      { name: "Railway", icon: SiRailway, color: "text-purple-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
    ],
  },
  {
    category: "CLI Based Tools",
    color: "from-teal-500 to-cyan-500",
    skills: [
      { name: "who-is-running", icon: SiGo, color: "text-cyan-400" },
      { name: "Dev-Preview", icon: SiNodedotjs, color: "text-green-500" },
    ],
  },
];

export default function Skills({ skillRef }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      ref={skillRef}
      className={`relative pt-28 pb-20 overflow-hidden ${
        isDark ? "bg-[#0a0a0f] text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      <div className={`absolute inset-0 pointer-events-none ${isDark ? "bg-grid-dark" : "bg-grid-light"}`} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 gradient-text">Expertise</p>
          <h2 className={`text-4xl lg:text-5xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`h-px flex-1 ${isDark ? "bg-white/6" : "bg-black/6"}`} />
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                  <span className={`text-sm font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {cat.category}
                  </span>
                </div>
                <div className={`h-px flex-1 ${isDark ? "bg-white/6" : "bg-black/6"}`} />
              </div>

              {/* Pill chips — horizontal scrollable */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIdx * 0.05 + skillIdx * 0.04, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-medium cursor-default transition-all duration-200 ${
                        isDark
                          ? "bg-white/3 border-white/8 text-gray-300 hover:bg-white/8 hover:border-white/16"
                          : "bg-white border-black/8 text-gray-700 hover:shadow-md hover:border-black/16"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${skill.color} flex-shrink-0`} />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
