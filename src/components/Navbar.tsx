/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section detection for scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 90;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const currentScrollPercent = () => {
    if (typeof window === "undefined") return 0;
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return height > 0 ? (winScroll / height) * 100 : 0;
  };

  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleProgress = () => {
      setScrollProgress(currentScrollPercent());
    };
    window.addEventListener("scroll", handleProgress);
    return () => window.removeEventListener("scroll", handleProgress);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-cyber-dark/85 backdrop-blur-md border-b border-cyber-border py-4" 
          : "bg-transparent py-6"
      }`}
    >
      {/* Top scroll-progress line in neon green */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-[#39e75f] transition-all duration-100 shadow-[0_0_8px_#39e75f]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo brand identifier */}
        <motion.a 
          href="#"
          onClick={(e) => handleLinkClick(e, "#")}
          className="flex items-center gap-2 font-mono text-xl sm:text-2xl font-bold tracking-tight text-white focus:outline-none"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-[#39e75f] font-extrabold">&gt;_</span>
          <span className="hover:text-[#39e75f] transition-colors font-mono">bl</span>
        </motion.a>

        {/* Desktop navbar navigation links - lowercase as requested */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-base font-bold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-1 py-1 transition-colors hover:text-white lowercase tracking-wider ${
                  isActive ? "text-[#39e75f] glow-text-green" : "text-zinc-400"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#39e75f]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action hire CTA button */}
        <div className="hidden md:block">
          <motion.a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="inline-flex items-center justify-center px-5 py-2 font-mono text-base font-bold lowercase bg-[#39e75f] hover:bg-white text-black rounded transition-all shadow-[0_0_12px_rgba(57,231,95,0.25)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
          >
            hire me
          </motion.a>
        </div>

        {/* Mobile controls button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer viewport panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-cyber-border bg-cyber-dark/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block font-mono text-base lowercase tracking-wider py-1 ${
                      isActive ? "text-[#39e75f] font-bold" : "text-zinc-400 font-medium hover:text-white"
                    }`}
                  >
                    <span className="text-[#39e75f] mr-2">//</span>
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="block w-full py-2.5 px-4 text-center font-mono text-sm font-bold lowercase bg-[#39e75f] hover:bg-white text-black rounded transition-all"
                >
                  hire me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
