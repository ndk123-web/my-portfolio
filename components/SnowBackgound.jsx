import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SnowBackground = ({ theme }) => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate snowflakes
    const generateSnowflakes = () => {
      const flakes = [];
      const numberOfFlakes = 25; // Adjust number of snowflakes

      for (let i = 0; i < numberOfFlakes; i++) {
        flakes.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (%)
          size: Math.random() * 2 + 1, // Random size between 2-6px
          animationDuration: Math.random() * 3 + 2, // Random duration between 2-5s
          opacity: Math.random() * 0.6 + 0.4, // Random opacity between 0.4-1
          delay: Math.random() * 5, // Random delay up to 5s
        });
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-11 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className={`absolute rounded-full ${
            theme === "dark"
              ? "bg-white shadow-white/20"
              : "bg-slate-300 shadow-slate-400/30"
          }`}
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            filter: "blur(0.5px)",
            boxShadow:
              theme === "dark"
                ? "0 0 6px rgba(255, 255, 255, 0.3)"
                : "0 0 4px rgba(148, 163, 184, 0.4)",
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.sin(flake.id) * 100], // Gentle horizontal drift
            rotate: [0, 360],
          }}
          transition={{
            duration: flake.animationDuration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default SnowBackground;
