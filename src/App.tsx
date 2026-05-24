/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GridBackground from "./components/GridBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <GridBackground>
      {/* Decorative side margins indicators to reflect hacker/CRT terminals */}
      <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-white/[0.01] pointer-events-none hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-white/[0.01] pointer-events-none hidden xl:block" />

      {/* Structured Core Modules */}
      <Navbar />
      
      <main className="w-full">
        {/* Intro */}
        <Hero />
        
        {/* Detailed context blocks with micro adjustments */}
        <div className="space-y-6">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </main>
    </GridBackground>
  );
}
