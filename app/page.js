"use client";

import Image from "next/image";
import Header from "../components/Header.jsx";
import Home from "@/components/Home.jsx";
import { ThemeProvider } from "@/context/ThemeContext.js";

export default function Main() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
