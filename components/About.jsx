"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import { FaRocket, FaCode, FaBrain, FaUsers, FaGraduationCap, FaDownload } from "react-icons/fa";

const highlights = [
  { icon: FaCode, title: "Full Stack MERN", desc: "MongoDB · Express · React · Node", color: "from-blue-500 to-cyan-500" },
  { icon: FaBrain, title: "AI/ML Builder", desc: "Intelligent systems & automation", color: "from-purple-500 to-pink-500" },
  { icon: FaRocket, title: "Scalable Products", desc: "SaaS platforms & OSS tools", color: "from-orange-500 to-amber-500" },
  { icon: FaUsers, title: "Team Player", desc: "Remote collaboration & async work", color: "from-green-500 to-emerald-500" },
];

const stats = [
  { value: "1+", label: "Years Exp", icon: FaGraduationCap },
  { value: "20+", label: "Projects", icon: FaRocket },
  { value: "5+", label: "OSS Tools", icon: FaCode },
  { value: "1", label: "Internship", icon: FaUsers },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About({ aboutRef }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      ref={aboutRef}
      className={`relative min-h-screen pt-28 pb-20 overflow-hidden ${
        isDark ? "bg-[#0a0a0f] text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      {/* Bg grid */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? "bg-grid-dark" : "bg-grid-light"}`} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest mb-3 gradient-text`}>About Me</p>
          <h2 className={`text-4xl lg:text-5xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
            Who I Am
          </h2>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid lg:grid-cols-5 gap-5">

          {/* Bio card — wide */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`lg:col-span-3 p-8 rounded-2xl border relative overflow-hidden ${
              isDark ? "glass-dark border-white/6" : "glass-light border-black/8"
            }`}
          >
            {/* top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />

            <h3 className={`text-2xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}>
              Navnath Kadam
            </h3>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <p>
                I'm a <span className="gradient-text font-semibold">Software Engineer</span> driven by the goal of building scalable, efficient applications.
                I enjoy working across the full stack and love writing clean, maintainable code.
              </p>
              <p>
                Having worked as an <span className="gradient-text font-semibold">AI Automation Intern</span> at Autonova AI,
                I explored intelligent systems that solve real-world problems through automation and backend integrations.
              </p>
              <p>
                Beyond work, I build open-source tools like <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>who-is-running</span> (Go CLI)
                and <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Dev-Preview</span>, and constantly learn new tech.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/v5_resume.pdf";
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white animated-border shadow-lg shadow-indigo-500/20"
            >
              <FaDownload className="w-3.5 h-3.5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Stats grid — narrow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className={`p-5 rounded-2xl border flex flex-col items-center justify-center text-center gap-2 ${
                    isDark ? "glass-dark border-white/6 hover:border-white/12" : "glass-light border-black/8 hover:shadow-lg"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${i % 2 === 0 ? "text-indigo-400" : "text-purple-400"}`} />
                  <div className={`text-2xl font-extrabold gradient-text`}>{s.value}</div>
                  <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>{s.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Highlights — 4 cards */}
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`lg:col-span-1 relative p-6 rounded-2xl border overflow-hidden group ${
                  isDark ? "glass-dark border-white/6 hover:border-white/12" : "glass-light border-black/8 hover:shadow-xl"
                }`}
              >
                {/* hover gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-8 transition-opacity duration-300`} />
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${h.color} bg-opacity-20`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h4 className={`font-bold text-sm mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{h.title}</h4>
                <p className={`text-xs leading-relaxed ${isDark ? "text-gray-500" : "text-gray-400"}`}>{h.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
