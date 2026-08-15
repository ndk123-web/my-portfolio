"use client";

import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import { HiArrowDown } from "react-icons/hi2";

const ROLES = [
  "Software Engineer",
  "AI Automation Builder",
  "Full Stack Developer",
  "Open Source Creator",
];

export default function Home({ homeRef, projectsRef, contactRef }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const stats = [
    { value: "20+", label: "Projects" },
    { value: "1+", label: "Yrs Exp" },
    { value: "5+", label: "OSS Tools" },
  ];

  return (
    <main
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? "bg-[#0a0a0f] text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      {/* Grid pattern bg */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? "bg-grid-dark" : "bg-grid-light"}`} />

      {/* Radial glow blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={homeRef} className="absolute top-0 h-20 w-full" />

      <section className="container mx-auto px-6 pt-32 pb-20 lg:pt-36 lg:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
                isDark
                  ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                  : "bg-indigo-50 border-indigo-200 text-indigo-600"
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className={`text-base font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-none tracking-tight">
                <span className="gradient-text">Navnath</span>
                <br />
                <span className={isDark ? "text-white" : "text-gray-900"}>Kadam</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className={`text-xl lg:text-2xl font-semibold h-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {displayed}
              <span className={`cursor-blink ml-0.5 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>|</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className={`text-base lg:text-lg leading-relaxed max-w-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I craft scalable web apps and AI-powered systems. Passionate about building
              clean, impactful software — from full-stack products to open-source CLI tools.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => projectsRef?.current?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white animated-border shadow-lg shadow-indigo-500/20"
              >
                View My Work
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/ndk123-web"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 border transition-colors ${
                  isDark
                    ? "border-white/10 text-gray-300 hover:bg-white/6 hover:text-white"
                    : "border-black/10 text-gray-600 hover:bg-black/5 hover:text-gray-900"
                }`}
              >
                <FaGithub className="w-4 h-4" /> GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.linkedin.com/in/navnath-kadam-883a57288"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 border transition-colors ${
                  isDark
                    ? "border-white/10 text-gray-300 hover:bg-white/6 hover:text-white"
                    : "border-black/10 text-gray-600 hover:bg-black/5 hover:text-gray-900"
                }`}
              >
                <FaLinkedin className="w-4 h-4 text-blue-500" /> LinkedIn
              </motion.a>
            </motion.div>

            {/* Stats chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex gap-4 pt-2"
            >
              {stats.map((s, i) => (
                <div key={i} className={`px-4 py-2 rounded-xl border text-center ${
                  isDark
                    ? "border-white/8 bg-white/3"
                    : "border-black/8 bg-black/2"
                }`}>
                  <div className={`text-xl font-bold gradient-text`}>{s.value}</div>
                  <div className={`text-xs mt-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start lg:pl-8"
          >
            {/* Extra padding wrapper so chips don't clip the column edge */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-10">
              {/* Outer spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full animated-border p-[2px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className={`w-full h-full rounded-full ${isDark ? "bg-[#0a0a0f]" : "bg-[#f8fafc]"}`} />
              </motion.div>

              {/* Glow ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 blur-xl" />

              {/* Image */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/myImage.jpg"
                  alt="Navnath Kadam"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Floating chips — all repositioned inside the visual boundary */}
              {[
                { label: "Problem Solver",  color: "text-cyan-400",   pos: "-top-4 left-1/2 -translate-x-1/2" },
                { label: "AI / ML",     color: "text-cyan-300",   pos: "-bottom-4 left-1/2 -translate-x-1/2" },
                { label: "DSA",     color: "text-purple-400", pos: "top-1/2 -left-14 -translate-y-1/2" },
                { label: "Full Stack",color: "text-white",      pos: "top-1/2 -right-14 -translate-y-1/2" },
              ].map((chip, idx) => (
                <motion.div
                  key={chip.label}
                  animate={{ y: [0, idx % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 2.5 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${chip.pos} px-3 py-1.5 rounded-xl text-xs font-semibold ${chip.color} border whitespace-nowrap ${
                    isDark ? "bg-[#111118] border-white/10" : "bg-white border-black/8 shadow-md"
                  }`}
                >
                  {chip.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`flex flex-col items-center gap-2 text-xs ${isDark ? "text-gray-600" : "text-gray-400"}`}
          >
            <span>Scroll</span>
            <HiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
