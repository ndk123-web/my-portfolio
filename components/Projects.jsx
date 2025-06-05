"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import ProjectCard from "../ui/Card.jsx";

// Sample project data - Replace with your actual projects
const projectsData = {
  "Full Stack": [
    {
      title: "ChatOrbit",
      description:
        "Real-time 1-1 chat application with secure authentication and instant messaging capabilities.",
      techStack: ["React", "Express", "MongoDB", "Socket.io", "Firebase"],
      features: [
        "Real-time messaging",
        "User authentication",
        "Message history",
        "Online status",
      ],
      github: "https://github.com/ndk123-web/chatorbit-chat-application",
      // live: "https://chat-orbit.vercel.app",
      type: "Full Stack",
    },
    {
      title: "PasswordManager",
      description:
        "Secure credential management system with encrypted storage and user authentication.",
      techStack: ["React", "Firebase Auth", "Firestore", "Tailwind CSS"],
      features: [
        "Secure encryption",
        "Stored History",
        // "Category management",
        // "Cross-device sync",
      ],
      github: "https://github.com/ndk123-web/password-manager-advance",
      // live: "https://password-manager-demo.vercel.app",
      type: "Full Stack",
    },
    {
      title: "StudyChat",
      description:
        "Educational platform facilitating student collaboration and learning resources sharing.",
      techStack: ["Django", "HTML", "CSS", "JavaScript"],
      features: [
        "User authentication",
        "Resource sharing",
        // "Discussion forums",
        "Study groups",
      ],
      github: "https://github.com/ndk123-web/studychat",
      // live: "https://study-chat.herokuapp.com",
      type: "Full Stack",
    },
    {
      title: "TechTales",
      description:
        "Blog application with cloud storage integration and content management system.",
      techStack: ["Flask", "HTML", "CSS", "JavaScript", "Dropbox Cloud"],
      features: [
        "Cloud storage",
        "Content management",
        // "User profiles",
        // "Comment system",
      ],
      github: "https://github.com/ndk123-web/blog",
      // live: "https://tech-tales.herokuapp.com",
      type: "Full Stack",
    },
    {
      title: "YtMp3 Downloader",
      description:
        "Media conversion tool with API integration for YouTube content processing.",
      techStack: ["Flask", "JavaScript", "Python", "RESTful API"],
      features: [
        "Music conversion",
        // "Format selection",
        // "Batch processing",
        "Download management",
      ],
      github: "https://github.com/ndk123-web/FLASK_YT_Downloader",
      // live: "https://yt-mp3-converter.herokuapp.com",
      type: "Full Stack",
    },
  ],
  "AI/ML": [
    {
      title: "StockInsight",
      description:
        "Stock prediction tool using polynomial regression for market trend analysis.",
      techStack: [
        "Flask",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "Polynomial Regression",
      ],
      features: [
        "Market prediction",
        // "Trend analysis",
        "Data visualization",
        // "Historical data",
      ],
      github: "https://github.com/ndk123-web/stock_insight",
      // live: "https://stock-insight.herokuapp.com",
      type: "AI/ML",
    },
  ],
};

export default function Projects({ projectsRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* Add custom styles for scrollbar hiding */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <main
        className={`min-h-screen pt-20 relative z-10 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        {/* Projects Section */}
        <div ref={projectsRef} className="h-20"></div>

        <section className="container mx-auto px-6 py-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl lg:text-5xl font-bold mb-6 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              }`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-lg lg:text-xl max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Explore my diverse portfolio of full-stack applications, AI/ML
              solutions, and mobile apps that showcase modern development
              practices and innovative solutions.
            </p>
          </motion.div>

          {/* Projects Categories */}
          <div className="space-y-20">
            {Object.entries(projectsData).map(
              ([category, projects], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-6">
                    <div
                      className={`h-1 flex-1 rounded-full ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                      }`}
                    ></div>

                    <div className="text-center">
                      <h3
                        className={`text-2xl lg:text-3xl font-bold ${
                          category === "Full Stack"
                            ? "text-blue-600 dark:text-blue-400"
                            : category === "AI/ML"
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-green-600 dark:text-green-400"
                        }`}
                      >
                        {category} Projects
                      </h3>
                      <div
                        className={`mt-2 text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {projects.length} Project
                        {projects.length > 1 ? "s" : ""}
                      </div>
                    </div>

                    <div
                      className={`h-1 flex-1 rounded-full ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                      }`}
                    ></div>
                  </div>

                  {/* Projects Grid */}
                  <div className="relative">
                    {/* Desktop Grid */}
                    <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {projects.map((project, projectIndex) => (
                        <ProjectCard
                          key={`${category}-${projectIndex}`}
                          title={project.title}
                          description={project.description}
                          techStack={project.techStack}
                          features={project.features}
                          github={project.github}
                          // // live={project.live}
                          video={project.video}
                          type={project.type}
                          index={projectIndex}
                        />
                      ))}
                    </div>

                    {/* Mobile Horizontal Scroll */}
                    <div className="sm:hidden">
                      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                        {projects.map((project, projectIndex) => (
                          <div
                            key={`${category}-mobile-${projectIndex}`}
                            className="min-w-[320px] max-w-[320px] flex-shrink-0 snap-center"
                          >
                            <ProjectCard
                              title={project.title}
                              description={project.description}
                              techStack={project.techStack}
                              features={project.features}
                              github={project.github}
                              // // live={project.live}
                              video={project.video}
                              type={project.type}
                              index={projectIndex}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Call to Action
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`mt-20 text-center rounded-3xl p-12 border ${
              theme === "dark"
                ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700"
                : "bg-gradient-to-r from-blue-50 to-indigo-50 border-gray-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-2xl lg:text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Have a Project in Mind?
            </h3>
            <p
              className={`text-lg mb-8 max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm always interested in hearing about new opportunities and
              exciting projects. Let's discuss how we can bring your ideas to
              life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 border-2 rounded-xl font-semibold transition-all duration-300 ${
                  theme === "dark"
                    ? "border-blue-400 text-blue-400 hover:bg-gray-800"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                View All Projects
              </motion.button>
            </div>
          </motion.div> */}
        </section>
      </main>
    </>
  );

}
