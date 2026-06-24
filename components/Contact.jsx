"use client";

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
  FaLinkedin, FaTwitter, FaPaperPlane,
} from "react-icons/fa";
import { SiLeetcode, SiProducthunt, SiPeerlist } from "react-icons/si";

const socials = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/ndk123-web", color: "hover:text-white hover:bg-gray-800 hover:border-gray-700" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/navnath-kadam-883a57288", color: "hover:text-white hover:bg-blue-600 hover:border-blue-600" },
  { label: "LeetCode", icon: SiLeetcode, href: "https://leetcode.com/u/Ndk18/", color: "hover:text-white hover:bg-orange-500 hover:border-orange-500" },
  { label: "Product Hunt", icon: SiProducthunt, href: "https://www.producthunt.com/@navnath_kadam", color: "hover:text-white hover:bg-[#DA552F] hover:border-[#DA552F]" },
  { label: "Peerlist", icon: SiPeerlist, href: "https://peerlist.io/ndk18", color: "hover:text-white hover:bg-emerald-600 hover:border-emerald-600" },
  { label: "Twitter", icon: FaTwitter, href: "https://twitter.com", color: "hover:text-white hover:bg-sky-500 hover:border-sky-500" },
];

const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: "navnathkadam284@gmail.com", href: "mailto:navnathkadam284@gmail.com" },
  { icon: FaPhone, label: "Phone", value: "+91- 9757382736", href: "tel:+919757382736" },
  { icon: FaMapMarkerAlt, label: "Location", value: "India", href: null },
];

export default function Contact({ contactRef }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:navnathkadam284@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      ref={contactRef}
      className={`relative pt-28 pb-20 overflow-hidden ${
        isDark ? "bg-[#0a0a0f] text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      <div className={`absolute inset-0 pointer-events-none ${isDark ? "bg-grid-dark" : "bg-grid-light"}`} />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 gradient-text">Get in Touch</p>
          <h2 className={`text-4xl lg:text-5xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
            Let's Connect
          </h2>
          <p className={`mt-3 text-base max-w-lg mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Left: Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Contact info cards */}
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-all group ${
                  isDark
                    ? "glass-dark border-white/6 hover:border-white/12"
                    : "glass-light border-black/8 hover:shadow-lg"
                }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-indigo-500/15" : "bg-indigo-50"
                  }`}>
                    <Icon className={`w-4 h-4 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
                  </div>
                  <div>
                    <div className={`text-xs font-medium mb-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{c.label}</div>
                    <div className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-800"} group-hover:gradient-text`}>{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <motion.a key={c.label} whileHover={{ x: 4 }} href={c.href}>{inner}</motion.a>
              ) : (
                <motion.div key={c.label} whileHover={{ x: 4 }}>{inner}</motion.div>
              );
            })}

            {/* Socials grid */}
            <div className={`p-5 rounded-2xl border ${
              isDark ? "glass-dark border-white/6" : "glass-light border-black/8"
            }`}>
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />
              <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      whileHover={{ y: -3, scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                        isDark
                          ? `text-gray-400 bg-white/3 border-white/8 ${s.color}`
                          : `text-gray-600 bg-white border-black/10 ${s.color}`
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {s.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className={`relative p-7 rounded-2xl border overflow-hidden ${
                isDark ? "glass-dark border-white/6" : "glass-light border-black/8"
              }`}
            >
              {/* top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />

              <div className="space-y-4">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Navnath Kadam" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "you@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id]}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/30 ${
                        isDark
                          ? "bg-white/4 border-white/8 text-white placeholder-gray-600 focus:border-indigo-500/40"
                          : "bg-white border-black/10 text-gray-900 placeholder-gray-400 focus:border-indigo-400"
                      }`}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-all resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/30 ${
                      isDark
                        ? "bg-white/4 border-white/8 text-white placeholder-gray-600 focus:border-indigo-500/40"
                        : "bg-white border-black/10 text-gray-900 placeholder-gray-400 focus:border-indigo-400"
                    }`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-sm text-white animated-border shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  {sent ? "Message Sent! ✓" : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
