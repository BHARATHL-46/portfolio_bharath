/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { contactDetails } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="cyber-section mb-20">

      {/* 06 heading step matching screenshot */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-sm text-[#39e75f] tracking-widest font-bold">06</span>
        <div className="h-[1px] w-12 bg-[#39e75f]/30" />
      </div>

      {/* Title & subtitle exactly matching screenshot */}
      <h2 className="text-4xl sm:text-5xl font-mono font-bold text-white mb-2 tracking-tight">
        contact
      </h2>
      <p className="font-sans text-sm sm:text-base text-zinc-500 mb-12">
        Let's build something intelligent together.
      </p>

      {/* Responsive layout matching screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">

        {/* Left Column: Description & Syntax-Colored Code Editor Box */}
        <div className="flex flex-col gap-6">
          <p className="font-sans text-sm sm:text-base leading-relaxed text-zinc-400">
            I'm currently open to internship opportunities, AI research collaborations, and interesting projects.
            Whether you're building something ambitious or just want to talk tech — my inbox is open.
          </p>

          <div className="border border-zinc-900 bg-[#07080d]/80 rounded-xl p-8 font-mono text-xs sm:text-sm shadow-md relative overflow-hidden">
            <pre className="text-zinc-100 overflow-x-auto select-all leading-relaxed">
              <code>
                <span className="text-zinc-500 italic select-none">// reach me at</span>{"\n"}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-white">contact</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-zinc-400">{"{"}</span>{"\n"}{"  "}
                <span className="text-[#60a5fa]">email</span>
                <span className="text-zinc-400">:</span>{" "}
                <span className="text-amber-200">"sakthibharath1234@gmail.com"</span>
                <span className="text-zinc-400">,</span>{"\n"}{"  "}
                <span className="text-[#60a5fa]">location</span>
                <span className="text-zinc-400">:</span>{" "}
                <span className="text-amber-200">"Tamil Nadu, India"</span>
                <span className="text-zinc-400">,</span>{"\n"}{"  "}
                <span className="text-[#60a5fa]">status</span>
                <span className="text-zinc-400">:</span>{" "}
                <span className="text-[#39e75f]">"open to work"</span>{"\n"}
                <span className="text-zinc-450">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Right Column: Dynamic structured visual contact cards with fully interactive hover/active states */}
        <div className="flex flex-col gap-5">

          {/* Email Card */}
          <motion.a
            href={`mailto:${contactDetails.email}`}
            whileHover={{ x: 4 }}
            className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-900 bg-[#0b0d13]/40 hover:border-[#39e75f] hover:bg-[#39e75f]/5 hover:shadow-[0_0_15px_rgba(57,231,95,0.08)] transition-all duration-300 cursor-pointer"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg group-hover:bg-[#39e75f] group-hover:text-[#050608] group-hover:border-[#39e75f] group-hover:shadow-[0_0_8px_rgba(57,231,95,0.3)] transition-all duration-300">
              <Mail className="w-5 h-5 stroke-[2.25]" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400 tracking-wider block mb-0.5 transition-colors duration-300">
                email
              </span>
              <span className="font-sans text-sm sm:text-base text-zinc-100 font-medium group-hover:text-[#39e75f] group-hover:font-semibold transition-all duration-300">
                sakthibharath1234@gmail.com
              </span>
            </div>
          </motion.a>

          {/* GitHub Badge Card */}
          <motion.a
            href={`https://${contactDetails.github}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-900 bg-[#0b0d13]/40 hover:border-[#39e75f] hover:bg-[#39e75f]/5 hover:shadow-[0_0_15px_rgba(57,231,95,0.08)] transition-all duration-300 cursor-pointer"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg group-hover:bg-[#39e75f] group-hover:text-[#050608] group-hover:border-[#39e75f] group-hover:shadow-[0_0_8px_rgba(57,231,95,0.3)] transition-all duration-300">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400 tracking-wider block mb-0.5 transition-colors duration-300">
                github
              </span>
              <span className="font-sans text-sm sm:text-base text-zinc-100 font-medium group-hover:text-[#39e75f] group-hover:font-semibold transition-all duration-300">
                github.com/Bharath
              </span>
            </div>
          </motion.a>

          {/* LinkedIn Badge Card */}
          <motion.a
            href={`https://${contactDetails.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-900 bg-[#0b0d13]/40 hover:border-[#39e75f] hover:bg-[#39e75f]/5 hover:shadow-[0_0_15px_rgba(57,231,95,0.08)] transition-all duration-300 cursor-pointer"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg group-hover:bg-[#39e75f] group-hover:text-[#050608] group-hover:border-[#39e75f] group-hover:shadow-[0_0_8px_rgba(57,231,95,0.3)] transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400 tracking-wider block mb-0.5 transition-colors duration-300">
                linkedin
              </span>
              <span className="font-sans text-sm sm:text-base text-zinc-100 font-medium group-hover:text-[#39e75f] group-hover:font-semibold transition-all duration-300">
                linkedin.com/in/Bharath
              </span>
            </div>
          </motion.a>

          {/* Location status node pin matching exactly */}
          <div className="flex items-center gap-2 mt-2 px-2 font-mono text-xs text-zinc-400">
            <MapPin className="w-4 h-4 text-[#39e75f]" />
            <span>Tamil Nadu, Namakkal, India</span>
          </div>

        </div>

      </div>

      {/* FOOTER SECTION ROW */}
      <footer className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left side label */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
          <span className="text-[#39e75f] font-extrabold">©</span>
          <span>{new Date().getFullYear()}</span>
          <span>bharath l</span>
        </div>

        {/* Middle socials */}
        <div className="flex items-center gap-5 text-zinc-500">
          <a
            href={`https://${contactDetails.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#39e75f] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`https://${contactDetails.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#39e75f] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${contactDetails.email}`} className="hover:text-[#39e75f] transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right side built info */}
        <div className="font-mono text-xs text-zinc-500 select-none">
          built with <span className="text-zinc-300 font-semibold">react, vite & tailwind</span>
        </div>

      </footer>

    </section>
  );
}
