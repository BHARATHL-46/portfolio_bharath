/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Calendar, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { experienceItems } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="cyber-section">
      
      {/* Step tag */}
      <div className="cyber-heading-step-wrapper">
        <span className="cyber-heading-step">04</span>
        <div className="cyber-heading-step-line" />
      </div>

      {/* Title block */}
      <h2 className="cyber-heading-title">
        experience
      </h2>
      <p className="cyber-heading-desc">
        Professional work and internship history.
      </p>

      {/* Vertical Timeline List Container */}
      <div className="relative pl-6 sm:pl-10 space-y-12 after:absolute after:top-1 after:bottom-1 after:left-1.5 sm:after:left-2 after:w-[2px] after:bg-zinc-800">
        {experienceItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="relative"
          >
            {/* Timeline bullet locator icon with emerald ping */}
            <div className="absolute -left-[30px] sm:-left-[42px] top-1.5 z-10">
              <span className="relative flex h-5.5 w-5.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39e75f]/20 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#39e75f] border-2 border-[#050608]"></span>
              </span>
            </div>

            {/* Content card */}
            <div className="p-8 bg-[#0b0d13] border border-zinc-800/80 hover:border-[#39e75f]/30 hover:shadow-[0_8px_30px_rgba(57,231,95,0.04)] transition-all duration-300 group cursor-default rounded-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-mono font-bold text-white group-hover:text-[#39e75f] transition-colors duration-300 flex gap-2 items-center">
                    {item.role}
                  </h3>
                  
                  {/* Organization indicator */}
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#39e75f]">
                      <Briefcase className="w-3.5 h-3.5 text-[#39e75f]" />
                      {item.company}
                    </span>
                    <span className="text-zinc-700 font-sans text-xs">•</span>
                    <span className="text-zinc-500 font-mono text-xs">
                      {item.locationState}
                    </span>
                  </div>
                </div>

                {/* Range calendar block on right */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-800/80 group-hover:border-[#39e75f]/30 rounded-lg text-zinc-300 font-mono text-xs w-fit transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-[#39e75f]" />
                  <span>{item.dateRange}</span>
                </div>

              </div>

              {/* Description body context */}
              <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors">
                {item.description}
              </p>

              {/* Tech Stack badged footer row using our modular cyber-pill */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                {item.tags.map((tag) => (
                  <span key={tag} className="cyber-pill">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
