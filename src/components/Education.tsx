/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, BookOpen, Book } from "lucide-react";
import { motion } from "motion/react";
import { educationItems } from "../data";

export default function Education() {
  const getIcon = (degree: string) => {
    if (degree.includes("B.E.") || degree.includes("B.E. ")) {
      return <GraduationCap className="w-5 h-5 text-[#39e75f]" />;
    } else if (degree.includes("HSC")) {
      return <BookOpen className="w-5 h-5 text-[#39e75f]" />;
    }
    return <Book className="w-5 h-5 text-[#39e75f]" />;
  };

  return (
    <section id="education" className="cyber-section">
      
      {/* Step tag */}
      <div className="cyber-heading-step-wrapper">
        <span className="cyber-heading-step">05</span>
        <div className="cyber-heading-step-line" />
      </div>

      {/* Main typographic header */}
      <h2 className="cyber-heading-title">
        education
      </h2>
      <p className="cyber-heading-desc">
        Academic background and qualifications.
      </p>

       {/* Responsive Grid list of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationItems.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="cyber-premium-card group cursor-default"
          >
            {/* Ambient accent strip active on card hover */}
            <div className="cyber-hover-glow-accent" />

            <div className="z-10 flex flex-col justify-between h-full">
              <div>
                {/* Card top banner containing icon and ongoing/completed tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 bg-[#07080d]/80 border border-zinc-800 rounded group-hover:bg-[#39e75f]/5 group-hover:border-[#39e75f]/25 transition-all duration-300">
                    {getIcon(edu.degree)}
                  </div>
                  
                  <span className={`px-2.5 py-0.5 font-mono text-[10px] uppercase font-bold rounded border ${
                    edu.statusText === "Ongoing" 
                      ? "bg-[#39e75f]/5 text-[#39e75f] border-[#39e75f]/30 animate-pulse" 
                      : "bg-[#0b0d13] text-zinc-500 border-zinc-800"
                  }`}>
                    {edu.statusText}
                  </span>
                </div>

                {/* Title degree & Sub school */}
                <h3 className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-[#39e75f] transition-colors duration-300 line-clamp-2">
                  {edu.degree}
                </h3>
                <p className="text-sm font-sans text-zinc-300 mt-1.5 line-clamp-1 group-hover:text-zinc-200 transition-colors">
                  {edu.school}
                </p>
              </div>

              {/* Micro border line and metric metrics output details */}
              <div className="pt-4 mt-6 border-t border-zinc-800/60 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors font-bold">
                  {edu.dateRange}
                </span>
                <span className="text-[#39e75f] font-bold bg-[#39e75f]/5 px-2.5 py-0.5 rounded border border-[#39e75f]/30 group-hover:bg-[#39e75f]/10 transition-all">
                  {edu.metricLabel}: {edu.metricValue}
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
