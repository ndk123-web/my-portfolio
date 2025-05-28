"use client";

import Image from "next/image";
import Header from "../components/Header.jsx";
import Home from "@/components/Home.jsx";
import Projects from "@/components/Projects.jsx";
import Skill from "@/components/Skills.jsx";

import { ThemeProvider } from "@/context/ThemeContext.js";
import { useRef } from "react";

export default function Main() {
  const skillRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Header skillRef={skillRef} homeRef={homeRef} projectsRef={projectsRef} />
      <Home skillRef={skillRef} homeRef={homeRef} projectsRef={projectsRef} />
      <Skill skillRef={skillRef} homeRef={homeRef} projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef}/>
    </>
  );
}
