"use client";

import Header from "../components/Header.jsx";
import Home from "@/components/Home.jsx";
import Projects from "@/components/Projects.jsx";
import Skill from "@/components/Skills.jsx";
import Experience from "@/components/Experience.jsx";
import About from "@/components/About.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";
import { useRef } from "react";

export default function Main() {
  const skillRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        skillRef={skillRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />

      <Home homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      <Skill skillRef={skillRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}
