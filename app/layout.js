"use client";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Navnath Kadam | Software Engineer | AI Automation | Portfolio</title>
        <meta name="description" content="Navnath Kadam — Software Engineer, AI Automation Builder & Full Stack Developer. Explore projects, skills and experience." />
        <link rel="icon" href="/myImage.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/myImage.jpg" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
