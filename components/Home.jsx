"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

const techStack = [
	{ name: "React", icon: "⚛️" },
	{ name: "Next.js", icon: "🔺" },
	{ name: "Node.js", icon: "🟢" },
	{ name: "JavaScript", icon: "🟨" },
	{ name: "TypeScript", icon: "🔷" },
	{ name: "MongoDB", icon: "🍃" },
	{ name: "PostgreSQL", icon: "🐘" },
	{ name: "Docker", icon: "🐳" },
];

export default function Home() {
	const { theme } = useContext(ThemeContext);

	return (
		<main
			className={`min-h-screen pt-20 relative z-10 ${
				theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
			}`}
		>
			{/* Hero Section */}
			<section className="container mx-auto px-6 py-16 lg:py-24">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left side - Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						<div className="space-y-4">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="text-blue-600 font-medium text-lg"
							>
								👋 Hello, I'm
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="text-5xl lg:text-7xl font-bold leading-tight"
							>
								<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
									Navnath Kadam
								</span>
							</motion.h1>

							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200"
							>
								Software Developer | Ai Enthusiast
							</motion.h2>
						</div>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
						>
							I craft beautiful, responsive web applications with modern
							technologies. Passionate about creating seamless user
							experiences and scalable solutions.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="flex flex-col sm:flex-row gap-4"
						>
							<motion.button
								whileHover={{
									scale: 1.05,
									boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
								}}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
							>
								View My Work
							</motion.button>

							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
							>
								Let's Connect
							</motion.button>
						</motion.div>

						{/* Quick Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
							className="flex gap-8 pt-8"
						>
							<div className="text-center">
								<div className="text-2xl font-bold text-blue-600">5+</div>
								<div className="text-sm text-gray-500">Projects</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-blue-600">1+</div>
								<div className="text-sm text-gray-500">Years Exp</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Right side - Profile Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex justify-center lg:justify-end"
					>
						<div className="relative">
							{/* Main Image Container */}
							<div className="relative w-80 h-80 lg:w-96 lg:h-96">
								{/* Rotating Gradient Border */}
								<motion.div
									className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
									animate={{
										rotate: 360,
									}}
									transition={{
										duration: 20,
										repeat: Infinity,
										ease: "linear",
									}}
								/>

								{/* Pulsing Inner Circle */}
								<motion.div
									className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
									animate={{
										scale: [1, 1.1, 1],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								/>

								{/* Profile Image */}
								<motion.div
									whileHover={{ scale: 1.02 }}
									className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg"
								>
									<Image
										src="/myImage.jpg"
										alt="Navnath Kadam - Full Stack Developer"
										fill
										priority
										className="object-cover object-center"
										sizes="(max-width: 768px) 320px, 384px"
									/>
								</motion.div>

								{/* Simple Corner Decorations */}
								<motion.div
									animate={{ y: [-5, 5, -5] }}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-yellow-400/50 blur-sm"
								/>

								<motion.div
									animate={{ y: [5, -5, 5] }}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-pink-400/50 blur-sm"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className="container mx-auto px-6 py-16 border-t border-gray-200 dark:border-gray-700">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
						Technologies I Master
					</h3>
					<p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
						Leveraging cutting-edge technologies to build exceptional digital
						experiences
					</p>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
					{techStack.map((tech, index) => (
						<motion.div
							key={tech.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							whileHover={{
								scale: 1.1,
								rotate: 5,
								boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
							}}
							className="flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
						>
							<div className="text-3xl mb-3">{tech.icon}</div>
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
								{tech.name}
							</span>
						</motion.div>
					))}
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="container mx-auto px-6 py-16">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 border border-gray-200 dark:border-gray-700"
				>
					<h3 className="text-3xl lg:text-4xl font-bold mb-6">
						Ready to bring your ideas to life?
					</h3>
					<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
						Let's collaborate and create something amazing together. I'm
						always excited to work on new challenges.
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
					>
						Start a Project
					</motion.button>
				</motion.div>
			</section>
		</main>
	);
}
