"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript, SiTypescript,
  SiPython, SiFlask, SiDjango, SiMongodb, SiPostgresql, SiMysql,
  SiPycharm, SiGithub, SiGit, SiVercel, SiRender, SiRailway,
  SiFirebase, SiPostman, SiVite, SiRedis, SiGo, SiRust,
} from "react-icons/si";
import { SiC } from "react-icons/si";
import { FaJava, FaTerminal, FaAws } from "react-icons/fa";
import { VscCode, VscAzure } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";

const row1 = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", cat: "Languages" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", cat: "Languages" },
  { name: "Python", icon: SiPython, color: "text-blue-400", cat: "Languages" },
  { name: "Go", icon: SiGo, color: "text-cyan-400", cat: "Languages" },
  { name: "Rust", icon: SiRust, color: "text-orange-500", cat: "Languages" },
  { name: "React", icon: SiReact, color: "text-cyan-400", cat: "Frameworks" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", cat: "Frameworks" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", cat: "Frameworks" },
  { name: "Vite", icon: SiVite, color: "text-purple-400", cat: "Frameworks" },
  { name: "Flask", icon: SiFlask, color: "text-gray-400", cat: "Frameworks" },
  { name: "Django", icon: SiDjango, color: "text-green-600", cat: "Frameworks" },
  { name: "Java", icon: FaJava, color: "text-red-400", cat: "Languages" },
  { name: "C", icon: SiC, color: "text-blue-500", cat: "Languages" },
  { name: "C++", icon: TbBrandCpp, color: "text-blue-500", cat: "Languages" },
];

const row2 = [
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500", cat: "Databases" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", cat: "Databases" },
  { name: "Redis", icon: SiRedis, color: "text-red-400", cat: "Databases" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400", cat: "Databases" },
  { name: "AWS", icon: FaAws, color: "text-amber-500", cat: "Deployment" },
  { name: "Azure", icon: VscAzure, color: "text-blue-400", cat: "Deployment" },
  { name: "Vercel", icon: SiVercel, color: "text-white", cat: "Deployment" },
  { name: "Render", icon: SiRender, color: "text-green-400", cat: "Deployment" },
  { name: "Railway", icon: SiRailway, color: "text-purple-400", cat: "Deployment" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400", cat: "Deployment" },
  { name: "Git", icon: SiGit, color: "text-orange-500", cat: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "text-white", cat: "Tools" },
  { name: "who-is-running", icon: SiGo, color: "text-cyan-400", cat: "CLI Tools" },
  { name: "Dev-Preview", icon: SiNodedotjs, color: "text-green-500", cat: "CLI Tools" },
  { name: "VS Code", icon: VscCode, color: "text-blue-400", cat: "Tools" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400", cat: "Tools" },
];

export default function Skills({ skillRef }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Duplicate items 4x for continuous infinite loop without gaps
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section
      ref={skillRef}
      className={`relative pt-28 pb-24 overflow-hidden ${
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
          <p className={`mt-3 text-sm max-w-lg mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Technologies, frameworks, and tools I use to build production systems.
          </p>
        </motion.div>

        {/* Unified Marquee Block */}
        <div className="relative marquee-container space-y-4 py-2">
          {/* Side fade masks */}
          <div className={`absolute left-0 top-0 bottom-0 w-24 z-20 pointer-events-none ${
            isDark
              ? "bg-gradient-to-r from-[#0a0a0f] to-transparent"
              : "bg-gradient-to-r from-[#f8fafc] to-transparent"
          }`} />
          <div className={`absolute right-0 top-0 bottom-0 w-24 z-20 pointer-events-none ${
            isDark
              ? "bg-gradient-to-l from-[#0a0a0f] to-transparent"
              : "bg-gradient-to-l from-[#f8fafc] to-transparent"
          }`} />

          {/* Row 1: Left Scroll */}
          <div className="overflow-hidden py-1">
            <div className="animate-marquee-left">
              {marqueeRow1.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={`r1-${skill.name}-${idx}`} className="mx-2 flex-shrink-0">
                    <div
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        isDark
                          ? "bg-white/4 border-white/8 text-gray-200 hover:bg-white/10 hover:border-white/20"
                          : "bg-white border-black/8 text-gray-800 hover:shadow-lg hover:border-black/16"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${skill.color} flex-shrink-0`} />
                      <span>{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Right Scroll */}
          <div className="overflow-hidden py-1">
            <div className="animate-marquee-right">
              {marqueeRow2.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={`r2-${skill.name}-${idx}`} className="mx-2 flex-shrink-0">
                    <div
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        isDark
                          ? "bg-white/4 border-white/8 text-gray-200 hover:bg-white/10 hover:border-white/20"
                          : "bg-white border-black/8 text-gray-800 hover:shadow-lg hover:border-black/16"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${skill.color} flex-shrink-0`} />
                      <span>{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
