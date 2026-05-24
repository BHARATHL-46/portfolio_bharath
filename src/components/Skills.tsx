/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { skillCategories } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="cyber-section">
      
      {/* Mini step tag header */}
      <div className="cyber-heading-step-wrapper">
        <span className="cyber-heading-step">02</span>
        <div className="cyber-heading-step-line" />
      </div>

      {/* Main typographic header */}
      <h2 className="cyber-heading-title">
        skills
      </h2>
      <p className="cyber-heading-desc">
        Technologies and tools I use to build AI systems.
      </p>

      {/* Interactive responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            whileHover={{ y: -5 }}
            className="cyber-premium-card group cursor-default"
          >
            <div className="cyber-hover-glow-accent" />

            {/* Header category with indicator bullet */}
            <div className="flex items-center gap-2.5 mb-6 z-10">
              <span className={`w-2 h-2 rounded-full ${cat.bulletColor} shadow-[0_0_8px_currentColor] group-hover:scale-125 transition-transform duration-300`} />
              <h3 className="font-mono text-sm font-bold tracking-widest text-zinc-300 uppercase group-hover:text-[#39e75f] transition-colors duration-300">
                {cat.title}
              </h3>
            </div>

            {/* Tags area with interactive motion hovers using unified global cyber-pill */}
            <div className="flex flex-wrap gap-2.5 z-10">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cyber-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
