"use client";
import Header from "@/components/Header";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Skills = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <main className="pt-20">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <div className= {theme === "dark" ? "text-white" : "text-black"} >This is Just a Skills Page</div>
      </main>
    </>
  );
};

export default Skills;
