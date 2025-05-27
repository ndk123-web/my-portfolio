"use client";

import Image from "next/image";
import Header from "../components/Header.jsx";
import Home from "@/components/Home.jsx";
import { ThemeProvider } from "@/context/ThemeContext.js";
import { useRef } from "react";

export default function Main() {
  
  const skillRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <>
      <Header skillRef={skillRef} homeRef={homeRef} />
      <Home skillRef={skillRef} homeRef={homeRef} />
    </>
  );
}
