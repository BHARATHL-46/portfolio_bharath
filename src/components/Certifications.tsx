/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { certificationItems } from "../data";

export default function Certifications() {
  const getTagStyle = (tag?: string) => {
    switch (tag) {
      case "ai":
        return "bg-purple-950/40 text-purple-400 border-purple-800/40";
      case "python":
        return "bg-blue-950/40 text-blue-400 border-blue-800/40";
      case "ml":
        return "bg-[#39e75f]/5 text-[#39e75f] border-[#39e75f]/30";
      default:
        return "bg-zinc-900 text-zinc-400 border-zinc-800";
    }
  };

  return (
    <section id="certifications" className="cyber-section">
      
      {/* Step tag */}
      <div className="cyber-heading-step-wrapper">
        <span className="cyber-heading-step">05.5</span>
        <div className="cyber-heading-step-line" />
      </div>

      {/* Main typographic header */}
      <h2 className="cyber-heading-title">
        certifications
      </h2>
      <p className="cyber-heading-desc">
        Verified credentials and technical specializations.
      </p>

      {/* Grid of mini cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationItems.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="cyber-premium-card group cursor-default"
          >
            {/* Ambient indicator accent line on hover */}
            <div className="cyber-hover-glow-accent" />

            <div className="z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-[#07080d]/80 border border-zinc-800 rounded group-hover:bg-[#39e75f]/5 group-hover:border-[#39e75f]/25 transition-all duration-300">
                    <Award className="w-5 h-5 text-[#39e75f]" />
                  </div>
                  
                  {cert.highlightTag && (
                    <span className={`px-2.5 py-0.5 font-mono text-[9px] uppercase font-bold rounded border ${getTagStyle(cert.highlightTag)}`}>
                      #{cert.highlightTag}
                    </span>
                  )}
                </div>

                {/* Course Title and Issuer */}
                <h3 className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-[#39e75f] transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-sans text-zinc-400 mt-2.5 flex items-center gap-1.5 group-hover:text-zinc-300 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#39e75f] shrink-0" />
                  <span>{cert.issuer}</span>
                </p>
              </div>

              {/* Issued year indicator */}
              <div className="pt-3 mt-4 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>Verified ID Credential</span>
                <span className="text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 font-bold">{cert.dateIssued}</span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
