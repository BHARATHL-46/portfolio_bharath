/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Brain, Code, Zap, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { bentoCards } from "../data";

export default function About() {
  // Mapping helpers for bento icons with dark theme contrast
  const getIcon = (type: string) => {
    switch (type) {
      case "brain":
        return <Brain className="w-5 h-5 text-[#39e75f] group-hover:scale-110 transition-transform duration-300" />;
      case "code":
        return <Code className="w-5 h-5 text-[#39e75f] group-hover:scale-110 transition-transform duration-300" />;
      case "bolt":
        return <Zap className="w-5 h-5 text-[#39e75f] group-hover:scale-110 transition-transform duration-300" />;
      case "terminal":
        return <Terminal className="w-5 h-5 text-[#39e75f] group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Terminal className="w-5 h-5 text-[#39e75f] group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <section id="about" className="cyber-section">
      
      {/* Mini tag header identifier */}
      <div className="cyber-heading-step-wrapper">
        <span className="cyber-heading-step">01</span>
        <div className="cyber-heading-step-line" />
      </div>

      {/* Main typographic header */}
      <h2 className="cyber-heading-title">
        about me
      </h2>
      <p className="cyber-heading-desc">
        AI engineer by curiosity, builder by conviction.
      </p>

      {/* Grid columns layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left narrative section */}
        <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-base sm:text-lg leading-relaxed text-zinc-300">
          <p>
            I'm an Artificial Intelligence and Data Science student at{" "}
            <span className="text-white font-bold">Bannari Amman Institute of Technology</span>, 
            driven by a passion for building AI systems that solve real-world problems at scale.
          </p>

          <p>
            My work spans Computer Vision, Retrieval-Augmented Generation (RAG), and Agentic AI 
            — with hands-on experience deploying{" "}
            <span className="text-white font-bold">6+ end-to-end systems</span> using Python, 
            LangChain, FastAPI, and OpenAI integrations.
          </p>

          <p>
            I take full ownership from system design through deployment, building 
            production-ready applications with clean architecture and real-time interfaces.
          </p>

          {/* Status Display exactly matching screenshot */}
          <div className="mt-6 border border-amber-500/20 bg-[#120d06]/60 rounded px-4 py-2.5 font-mono text-xs sm:text-sm shadow-sm relative overflow-hidden self-start max-w-full">
            <code>
              <span className="text-purple-400 font-bold">const</span>{" "}
              <span className="text-zinc-300">status</span>{" "}
              <span className="text-[#39e75f] font-bold">=</span>{" "}
              <span className="text-amber-200">"open to opportunities"</span>
              <span className="text-zinc-500">;</span>
            </code>
          </div>
        </div>

        {/* Right side bento cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bentoCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="cyber-premium-card h-[180px] group cursor-default shadow-lg"
            >
              <div className="cyber-hover-glow-accent" />

              <div className="flex items-center justify-between z-10">
                <div className="p-2.5 bg-zinc-900/50 border border-zinc-800 rounded group-hover:bg-[#39e75f]/5 group-hover:border-[#39e75f]/20 transition-all duration-300">
                  {getIcon(card.iconType)}
                </div>
              </div>

              <div className="z-10">
                <span className="text-4xl font-mono font-bold text-white group-hover:text-[#39e75f] transition-colors duration-300 block mb-1">
                  {card.value}
                </span>
                <h3 className="text-xs font-mono tracking-wider font-bold uppercase text-zinc-300 mb-0.5">
                  {card.title}
                </h3>
                <p className="text-[11px] font-sans text-zinc-550 group-hover:text-zinc-400 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
