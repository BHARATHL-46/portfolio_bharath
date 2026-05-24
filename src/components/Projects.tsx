/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projectItems } from "../data";

export default function Projects() {
  const featured = projectItems.filter((p) => p.isFeatured);
  const others = projectItems.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="cyber-section">
      
      {/* Mini header tag */}
      <div className="cyber-heading-step-wrapper">
        <span className="cyber-heading-step">03</span>
        <div className="cyber-heading-step-line" />
      </div>

      {/* Main typographic title */}
      <h2 className="cyber-heading-title">
        projects
      </h2>
      <p className="cyber-heading-desc">
        AI systems I've designed, built, and shipped.
      </p>

      {/* Featured Projects List */}
      <div className="flex flex-col gap-10 mb-16">
        {featured.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="p-8 sm:p-10 bg-[#0b0d13] border border-zinc-800/80 hover:border-[#39e75f]/30 rounded-2xl relative overflow-hidden transition-all duration-300 group shadow-lg"
          >
            {/* Custom ambient corner backlights on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#39e75f]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Top row containing featured indicator and links */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#39e75f] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39e75f] shadow-[0_0_6px_#39e75f] animate-pulse" />
                  FEATURED SYSTEM
                </span>
                <div className="h-[1px] w-12 bg-[#39e75f]/20" />
              </div>
              
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-white transition-all py-1.5 px-3 rounded border border-zinc-800 bg-zinc-900 hover:bg-[#39e75f]/10 hover:border-[#39e75f]/30"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github source</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-[#39e75f]" />
                </a>
              )}
            </div>

            {/* Project title and sub label */}
            <h3 className="text-2xl sm:text-4xl font-mono font-bold text-white mb-1.5 leading-tight group-hover:text-[#39e75f] transition-colors duration-300 relative z-10">
              {project.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#39e75f] lowercase tracking-wide mb-6 relative z-10 font-bold">
              {project.subtitle}
            </p>

            {/* Description text */}
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-4xl relative z-10">
              {project.description}
            </p>

            {/* Highlighted Performance metric bar */}
            {project.highlightLine && (
              <div className="w-full mb-8 p-4 bg-[#39e75f]/5 border border-[#39e75f]/15 hover:border-[#39e75f]/35 rounded-lg flex items-start sm:items-center gap-2.5 transition-all duration-300 relative overflow-hidden group/metric">
                <div className="absolute inset-y-0 left-0 w-[3px] bg-[#39e75f]" />
                <span className="font-mono text-[#39e75f] text-xs sm:text-sm font-bold flex items-center gap-2">
                  <span className="text-zinc-600 font-mono text-xs shrink-0 select-none">&gt;</span>
                  {project.highlightLine}
                </span>
              </div>
            )}

            {/* Tech list tag pills using our modular global cyber-pill */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {project.tags.map((tag) => (
                <span key={tag} className="cyber-pill">
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

      {/* Other Projects header */}
      <h3 className="font-mono text-sm tracking-wider uppercase text-zinc-500 mb-8 border-b border-zinc-850 pb-4">
        minor systems & pipelines
      </h3>

      {/* Grid for minor projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {others.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="cyber-premium-card group cursor-default"
          >
            <div className="cyber-hover-glow-accent" />

            <div className="z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[9px] text-[#39e75f] uppercase tracking-widest font-bold">
                    System Architecture
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-[#39e75f] hover:bg-zinc-900/50 rounded-lg transition-colors border border-transparent hover:border-zinc-800"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h4 className="text-xl font-mono font-bold text-white mb-1 group-hover:text-[#39e75f] transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="font-mono text-xs text-[#39e75f] font-bold lowercase mb-4">
                  {project.subtitle}
                </p>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-zinc-800/60 pt-4">
                {project.tags.map((tag) => (
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
