"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript, SiTypescript,
  SiPython, SiFlask, SiDjango, SiMongodb, SiPostgresql, SiMysql,
  SiFirebase, SiVercel, SiRender, SiRailway, SiRedis, SiTensorflow,
  SiPytorch, SiKeras, SiOpencv, SiPandas, SiNumpy, SiJupyter,
  SiGo, SiScikitlearn,
} from "react-icons/si";
import { FaProjectDiagram, FaTerminal } from "react-icons/fa";

const techIcons = {
  React: SiReact, "Next.js": SiNextdotjs, "Node.js": SiNodedotjs,
  JavaScript: SiJavascript, TypeScript: SiTypescript, Python: SiPython,
  Flask: SiFlask, Django: SiDjango, MongoDB: SiMongodb, PostgreSQL: SiPostgresql,
  MySQL: SiMysql, Firebase: SiFirebase, Vercel: SiVercel, Render: SiRender,
  Railway: SiRailway, Redis: SiRedis, TensorFlow: SiTensorflow, PyTorch: SiPytorch,
  "Scikit-learn": SiScikitlearn, Keras: SiKeras, OpenCV: SiOpencv, Pandas: SiPandas,
  NumPy: SiNumpy, Jupyter: SiJupyter, Go: SiGo, "Go (Golang)": SiGo,
  CLI: FaTerminal, "Graph-Engine": FaProjectDiagram, "React (Vite)": SiReact,
};

const projectsData = {
  "Full Stack": [
    {
      title: "FlowFrame",
      description: "Interactive frame-based system design visualizer for simulating request flow across system components.",
      techStack: ["Next.js", "React", "Vercel", "Graph-Engine"],
      features: ["Interactive canvas for architecture visual planning", "Simulates live request flow paths", "High performance node graphs"],
      github: "https://github.com/ndk123-web/flow-frame",
      live: "https://flowframe.taskplexus.app",
    },
    {
      title: "TaskPlexus",
      description: "A SaaS productivity platform with AI-generated daily plans, offline-first sync, workspace isolation, and secure subscription handling.",
      techStack: ["React (Vite)", "TypeScript", "Go (Golang)", "MongoDB", "PostgreSQL", "Redis"],
      features: ["Workspace-based task isolation", "Offline-first with IndexedDB", "Flowchart task visualization", "Razorpay payments"],
      github: "https://github.com/taskplexuss",
      live: "https://taskplexus.app",
    },
    {
      title: "ChatOrbit",
      description: "Real-time 1-1 chat application with secure authentication and instant messaging.",
      techStack: ["React", "MongoDB", "Firebase"],
      features: ["Real-time messaging", "User authentication", "Online status"],
      github: "https://github.com/ndk123-web/chatorbit-chat-application",
    },
    {
      title: "PasswordManager",
      description: "Secure credential management system with encrypted storage and user authentication.",
      techStack: ["React", "Firebase"],
      features: ["Secure encryption", "Stored history"],
      github: "https://github.com/ndk123-web/password-manager-advance",
    },
    {
      title: "StudyChat",
      description: "Educational platform facilitating student collaboration and learning resources sharing.",
      techStack: ["Django"],
      features: ["Resource sharing", "Study groups"],
      github: "https://github.com/ndk123-web/studychat",
    },
    {
      title: "TechTales",
      description: "Blog application with cloud storage integration and content management system.",
      techStack: ["Flask", "Python"],
      features: ["Cloud storage", "Content management"],
      github: "https://github.com/ndk123-web/blog",
    },
    {
      title: "YtMp3 Downloader",
      description: "Media conversion tool with API integration for YouTube content processing.",
      techStack: ["Flask", "Python"],
      features: ["Music conversion", "Download management"],
      github: "https://github.com/ndk123-web/FLASK_YT_Downloader",
    },
  ],
  "AI/ML": [
    {
      title: "StudySync AI",
      description: "AI-Powered LMS that transforms YouTube videos, PDFs, and study content into personalized learning experiences.",
      techStack: ["React (Vite)", "FastAPI", "MongoDB", "Gemini API"],
      features: ["AI quiz generation via Gemini API", "PDF & YouTube processing", "Vector search with Pinecone"],
      github: "https://github.com/ndk123-web/study-sync-ai",
      live: "https://study-sync-ai.vercel.app",
    },
    {
      title: "ResumeAI",
      description: "AI-Powered Resume Builder that generates professional resumes using Gemini AI.",
      techStack: ["React (Vite)", "FastAPI", "Gemini API", "Firebase"],
      features: ["AI content generation", "Firebase auth", "PDF export"],
      github: "https://github.com/ndk123-web/ai-resume-maker",
    },
    {
      title: "StockInsight",
      description: "Stock prediction tool using polynomial regression for market trend analysis.",
      techStack: ["Flask", "Python", "Scikit-learn"],
      features: ["Market prediction", "Data visualization"],
      github: "https://github.com/ndk123-web/stock_insight",
    },
  ],
  "CLI & Tools": [
    {
      title: "who-is-running",
      description: "A fast CLI to inspect ports and identify running processes on your machine.",
      techStack: ["Go (Golang)", "CLI"],
      features: ["Identify processes by port", "Fast lightweight execution", "Inspect active services"],
      github: "https://github.com/ndk123-web/who-is-running",
    },
    {
      title: "NDK-RPC-Cluster",
      description: "Enterprise-grade RPC cluster with load balancing, fault tolerance, and auto-replica creation.",
      techStack: ["Node.js"],
      features: ["Auto replica scaling", "Round-robin load balancing", "Global service discovery"],
      github: "https://github.com/ndk123-web/ndk-rpc-cluster",
      npm: "https://www.npmjs.com/package/ndk-rpc-cluster",
    },
    {
      title: "NDK RPC Engine",
      description: "Lightweight, fast RPC engine for Node.js with built-in client/server support.",
      techStack: ["Node.js"],
      features: ["Simple setup", "Type-flexible parameters", "Express & CORS support"],
      github: "https://github.com/ndk123-web/ndk-rpc-engine",
      npm: "https://www.npmjs.com/package/ndk-rpc-engine",
    },
    {
      title: "Dev-Preview",
      description: "A lightweight npm package for live previewing HTML files during development.",
      techStack: ["Node.js"],
      features: ["Live preview for HTML files"],
      github: "https://github.com/ndk123-web/dev-preview",
    },
  ],
};

const TABS = Object.keys(projectsData);
const TAB_COLORS = {
  "Full Stack": "from-blue-500 to-cyan-500",
  "AI/ML": "from-purple-500 to-pink-500",
  "CLI & Tools": "from-teal-500 to-green-500",
};

function ProjectCard({ project, isDark, i }) {
  const hasGithub = !!project.github;
  const hasLive = !!project.live;
  const hasNpm = !!project.npm;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.07, duration: 0.4 }}
      whileHover={{ y: -6 }}
      className={`relative flex-shrink-0 w-[300px] sm:w-[340px] h-[370px] rounded-2xl border overflow-hidden group flex flex-col ${
        isDark
          ? "glass-dark border-white/6 hover:border-white/14"
          : "glass-light border-black/8 hover:shadow-xl hover:border-black/16"
      }`}
    >
      {/* Top gradient line */}
      <div className="h-[2px] flex-shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />

      <div className="p-5 flex flex-col flex-1 min-h-0 gap-3">
        {/* Title + badge — fixed ~2 lines */}
        <div className="flex items-start justify-between gap-2 flex-shrink-0">
          <h3 className={`font-bold text-base leading-tight line-clamp-2 ${isDark ? "text-white" : "text-gray-900"}`}>
            {project.title}
          </h3>
          {project.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20 whitespace-nowrap flex-shrink-0">
              {project.badge}
            </span>
          )}
        </div>

        {/* Description — clamped to 3 lines */}
        <p className={`text-xs leading-relaxed line-clamp-3 flex-shrink-0 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          {project.description}
        </p>

        {/* Tech chips — fixed single row, no wrap overflow */}
        <div className="flex flex-wrap gap-1.5 flex-shrink-0 max-h-[44px] overflow-hidden">
          {project.techStack.slice(0, 4).map((tech) => {
            const Icon = techIcons[tech];
            return (
              <span
                key={tech}
                className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-lg border ${
                  isDark ? "bg-white/4 border-white/8 text-gray-400" : "bg-black/3 border-black/8 text-gray-500"
                }`}
              >
                {Icon && <Icon className="w-2.5 h-2.5" />}
                {tech}
              </span>
            );
          })}
        </div>

        {/* Features — grows to fill remaining space, max 3 items */}
        <ul className={`space-y-1.5 flex-1 min-h-0 overflow-hidden ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-xs">
              <span className="gradient-text font-bold mt-0.5 flex-shrink-0">›</span>
              <span className="line-clamp-1">{f}</span>
            </li>
          ))}
        </ul>

        {/* Action buttons — always pinned at bottom */}
        <div className="flex gap-2 pt-1 flex-shrink-0">
          {hasGithub && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isDark
                  ? "border-white/10 text-gray-400 hover:text-white hover:bg-white/6"
                  : "border-black/10 text-gray-500 hover:text-gray-900 hover:bg-black/5"
              }`}
            >
              <FaGithub className="w-3 h-3" /> Code
            </motion.a>
          )}
          {hasLive && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white animated-border"
            >
              <FaExternalLinkAlt className="w-2.5 h-2.5" /> Live
            </motion.a>
          )}
          {hasNpm && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.npm}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border text-red-400 border-red-500/20 hover:bg-red-500/8 transition-colors`}
            >
              npm
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ projectsRef }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section
      className={`relative pt-28 pb-20 overflow-hidden ${
        isDark ? "bg-[#0a0a0f] text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      <div className={`absolute inset-0 pointer-events-none ${isDark ? "bg-grid-dark" : "bg-grid-light"}`} />
      <div className="absolute -top-20 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div ref={projectsRef} className="absolute top-0 w-full h-20" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 gradient-text">Portfolio</p>
          <h2 className={`text-4xl lg:text-5xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
            Featured Projects
          </h2>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className={`inline-flex p-1 rounded-2xl gap-1 ${
            isDark ? "bg-white/4 border border-white/6" : "bg-black/4 border border-black/6"
          }`}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  activeTab === tab
                    ? "text-white"
                    : isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-xl animated-border"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
                <span className={`relative z-10 ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab
                    ? "bg-white/20"
                    : isDark ? "bg-white/8 text-gray-500" : "bg-black/8 text-gray-400"
                }`}>
                  {projectsData[tab].length}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal scroll cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            >
              {projectsData[activeTab].map((project, i) => (
                <div key={project.title} className="snap-start">
                  <ProjectCard project={project} isDark={isDark} i={i} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Fade edges */}
          <div className={`absolute right-0 top-0 bottom-6 w-16 pointer-events-none ${
            isDark
              ? "bg-gradient-to-l from-[#0a0a0f] to-transparent"
              : "bg-gradient-to-l from-[#f8fafc] to-transparent"
          }`} />
        </div>

        {/* Count hint */}
        <p className={`text-center text-xs mt-2 ${isDark ? "text-gray-700" : "text-gray-300"}`}>
          ← scroll to see all {projectsData[activeTab].length} projects →
        </p>
      </div>
    </section>
  );
}
