"use client";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext.js";
import SnowBackground from "@/components/SnowBackgound";
import { useContext } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <ThemeProvider>
          <SnowBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
