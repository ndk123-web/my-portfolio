"use client";

import Image from "next/image";
import Header from "../components/Header.jsx";
import Home from "@/components/Home.jsx";
import Projects from "@/components/Projects.jsx";
import Skill from "@/components/Skills.jsx";

import { ThemeProvider } from "@/context/ThemeContext.js";
import { use, useRef } from "react";
import About from "@/components/About.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

export default function Main() {
  const skillRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        skillRef={skillRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />

      <Home skillRef={skillRef} homeRef={homeRef} projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <Skill skillRef={skillRef} homeRef={homeRef} projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />

      <Footer
        skillRef={skillRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
    </>
  );
}
