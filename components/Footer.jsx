"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";
import { SiLeetcode, SiProducthunt, SiPeerlist } from "react-icons/si";

const socials = [
  { icon: FaGithub, href: "https://github.com/ndk123-web", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/navnath-kadam-883a57288", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Ndk18/", label: "LeetCode" },
  { icon: SiProducthunt, href: "https://www.producthunt.com/@navnath_kadam", label: "Product Hunt" },
  { icon: SiPeerlist, href: "https://peerlist.io/ndk18", label: "Peerlist" },
];

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={`relative pt-8 pb-8 border-t ${
      isDark ? "bg-[#0a0a0f] border-white/6" : "bg-[#f8fafc] border-black/6"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-extrabold gradient-text">NDK</span>
            <div className={`w-px h-5 ${isDark ? "bg-white/10" : "bg-black/10"}`} />
            <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              Built with <FaHeart className="inline w-3 h-3 text-red-500 mx-0.5" /> & Next.js
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  whileHover={{ y: -3, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? "text-gray-600 hover:text-gray-200" : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>

          {/* Last Updated section */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border ${
            isDark
              ? "bg-white/4 border-white/8 text-gray-400"
              : "bg-black/4 border-black/8 text-gray-500"
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Last Updated: <strong className={isDark ? "text-gray-200" : "text-gray-800"}>15th August 2026</strong></span>
          </div>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-4">
            <span className={`text-xs ${isDark ? "text-gray-600" : "text-gray-400"}`}>
              © {new Date().getFullYear()} Navnath Kadam
            </span>
            <motion.button
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollTop}
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? "border-white/8 text-gray-600 hover:text-white hover:border-white/16"
                  : "border-black/8 text-gray-400 hover:text-gray-900 hover:border-black/16"
              }`}
              title="Back to top"
            >
              <FaArrowUp className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
