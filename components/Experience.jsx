"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "AI Automation Intern",
    company: "Autonova AI",
    type: "Internship",
    duration: "May 2026 – Present · 2 mos",
    location: "India · Remote",
    description: "Working on AI automation workflows, backend integrations, and scalable AI-powered systems while collaborating remotely with the development team.",
    skills: ["AI Automation", "Backend Integration", "Scalable Systems", "Remote Collaboration"],
    color: "from-indigo-500 to-purple-500",
    current: true,
  },
];

export default function Experience({ experienceRef }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      ref={experienceRef}
      className={`relative pt-28 pb-20 overflow-hidden ${
        isDark ? "bg-[#0a0a0f] text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      <div className={`absolute inset-0 pointer-events-none ${isDark ? "bg-grid-dark" : "bg-grid-light"}`} />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 gradient-text">Career</p>
          <h2 className={`text-4xl lg:text-5xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className={`absolute left-6 top-0 bottom-0 w-px ${isDark ? "bg-white/6" : "bg-black/6"}`} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-16 pb-10"
            >
              {/* Dot */}
              <div className="absolute left-[18px] top-7 -translate-x-1/2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 ${
                  isDark ? "border-[#0a0a0f] bg-indigo-500" : "border-[#f8fafc] bg-indigo-500"
                }`}>
                  <FaBriefcase className="w-3 h-3 text-white" />
                </div>
                {exp.current && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                )}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className={`relative p-6 rounded-2xl border overflow-hidden ${
                  isDark ? "glass-dark border-white/6 hover:border-white/12" : "glass-light border-black/8 hover:shadow-xl"
                }`}
              >
                {/* Top color bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.color}`} />

                {/* Badge + title */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      isDark ? "bg-indigo-500/15 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                    }`}>
                      {exp.type}
                    </span>
                    <h3 className={`text-xl font-bold mt-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {exp.role}
                    </h3>
                    <div className={`flex items-center gap-1.5 text-sm font-medium mt-0.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      <FaBuilding className="w-3 h-3" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  {exp.current && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                      Current
                    </span>
                  )}
                </div>

                {/* Meta chips */}
                <div className={`flex flex-wrap gap-3 text-xs font-medium mb-4 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="w-3 h-3" /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="w-3 h-3" /> {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {exp.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                        isDark ? "bg-white/4 border-white/8 text-gray-300" : "bg-black/3 border-black/8 text-gray-600"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* CTA to connect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pl-16"
          >
            <div className={`text-sm ${isDark ? "text-gray-600" : "text-gray-400"}`}>
              More coming soon — currently building & learning 🚀
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
