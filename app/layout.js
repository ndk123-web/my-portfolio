"use client";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext.js";
import SnowBackground from "@/components/SnowBackgound";
import { useContext } from "react";
import "dotenv/config";
// import type { Metadata } from "next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Navnath Kadam | Software Engineer | MERN Stack | AiML Portfolio</title>
        <meta name="description" content="This is my own Next.js app" />
        <link rel="icon" href="/myImage.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/myImage.jpg" />
      </head>

      <body className="relative">
        <ThemeProvider>
          <SnowBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
