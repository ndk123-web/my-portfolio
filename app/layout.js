"use client";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext.js";
import SnowBackground from "@/components/SnowBackgound";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SnowBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
