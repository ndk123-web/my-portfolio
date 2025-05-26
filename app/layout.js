'use client';

import { ThemeProvider } from "@/context/ThemeContext";
import Header from "./Header/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
