/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, ChevronDown, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { statCounters } from "../data";

const ROLES = [
  "Artificial Intelligence & Data Science",
  "Python Developer",
  "AI Systems Builder",
  "RAG Pipeline Architect",
  "Machine Learning Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(75); // consistent professional typing pace

        if (displayText === fullText) {
          // Stay paused at full sentence
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          return;
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(35); // deleting is swifter

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(200); // pause briefly before starting the next role
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("projects");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 90,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToAbout = () => {
    const targetElement = document.getElementById("about");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 90,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 90,
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
         className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
      >
        
         {/* Left InformationColumn */}
        <div className="lg:col-span-8 flex flex-col justify-center text-left">
          
          {/* Signal Header tag matching the screenshot */}
          <motion.div aria-hidden="true" className="flex items-center gap-3 mb-6" variants={itemVariants}>
            <span className="font-mono text-xs sm:text-sm text-[#39e75f] font-bold tracking-widest flex items-center gap-2">
              &gt;_ hello, world
            </span>
            <div className="h-[1px] w-20 bg-zinc-800" />
          </motion.div>

          {/* Core Typography Heading */}
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[115px] font-sans font-medium tracking-tight leading-[0.95] text-white mb-6"
            variants={itemVariants}
          >
            Bharath
            <span className="block mt-3 text-[#39e75f] font-sans font-medium tracking-tight glow-text-green">
              L
            </span>
          </motion.h1>

          {/* Specialty tag matching the screenshot with dynamic animated typewriter effect */}
          <motion.div 
            className="font-mono text-sm sm:text-base md:text-lg lg:text-xl text-zinc-200 font-bold tracking-wide mb-6 flex items-center gap-2 min-h-[1.75rem] sm:min-h-[2rem]"
            variants={itemVariants}
          >
            <span className="text-[#39e75f]">//</span>
            <span>{displayText}</span>
            <span className="inline-block w-[7px] h-[15px] sm:w-[9px] sm:h-[18px] bg-[#39e75f] animate-pulse ml-0.5 shrink-0 select-none shadow-[0_0_8px_#39e75f]" />
          </motion.div>

          {/* Narrative Summary matching the screenshot exactly */}
          <motion.p 
            className="font-sans text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8"
            variants={itemVariants}
          >
            Designing & deploying <span className="text-white font-semibold">6+ end-to-end AI systems</span> — from RAG pipelines to multimodal search, with production-ready precision.
          </motion.p>

          {/* Location details */}
          <motion.div 
            className="flex items-center gap-2 font-mono text-sm text-zinc-400 mb-10"
            variants={itemVariants}
          >
            <MapPin className="w-4 h-4 text-[#39e75f]" />
            <span className="hover:text-white transition-colors">Tamil Nadu, India</span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div 
            className="flex flex-wrap gap-4 items-center mb-10"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-8 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#39e75f] hover:bg-white text-black rounded transition-all cursor-pointer flex items-center gap-2 justify-center shadow-[0_0_15px_rgba(57,231,95,0.35)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              view projects
            </motion.a>

            <motion.a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-8 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border border-[#39e75f]/30 hover:border-[#39e75f] hover:bg-[#39e75f]/5 text-[#39e75f] rounded transition-all cursor-pointer flex items-center gap-2 justify-center"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              get in touch
            </motion.a>
          </motion.div>

          {/* Social Icons row */}
          <motion.div 
            className="flex items-center gap-5 text-zinc-400"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/sakthibharath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#39e75f] transition-all flex items-center justify-center p-1"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-5.5 h-5.5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/sakthibharath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#39e75f] transition-all flex items-center justify-center p-1"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="w-5.5 h-5.5" />
            </motion.a>
            <motion.a 
              href="mailto:sakthibharath1234@gmail.com"
              className="hover:text-[#39e75f] transition-all flex items-center justify-center p-1"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-5.5 h-5.5" />
            </motion.a>
          </motion.div>

        </div>

        {/* Right Status Counters Column matching the screenshot's minimalist styling */}
        <div className="lg:col-span-4 lg:pl-12 flex flex-col gap-6 lg:gap-8 justify-end py-6 mt-6 lg:mt-0">
          {statCounters.map((stat) => (
            <motion.div 
              key={stat.label}
              whileHover={{ x: -4 }}
              className="flex flex-col lg:items-end text-left lg:text-right transition-all duration-300 group cursor-default"
            >
              <span className="text-5xl sm:text-6xl font-mono font-bold text-white tracking-tight group-hover:text-[#39e75f] transition-colors duration-200">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase mt-1 group-hover:text-zinc-300 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Centered Scroll indicator matching screenshot exactly (scroll \n ↓) */}
      <div 
        onClick={handleScrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-0.5 font-mono text-[10.5px] text-zinc-500 lowercase tracking-widest cursor-pointer hover:text-zinc-300 transition-colors select-none"
      >
        <span>scroll</span>
        <motion.span
          className="text-current text-[14px] font-bold"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </div>

    </section>
  );
}
