/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
}

export default function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-[#050608] text-slate-100 overflow-hidden">
      {/* Ambient radial overlay to naturally dissolve grid towards screen edges just like high-end visual consoles */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(5,6,8,0) 0%, rgba(5,6,8,0.7) 70%, #050608 100%)"
        }}
      />
      
      {/* Interactive digital overlay grids (radioactive terminal green) */}
      <div className="absolute inset-0 cyber-grid opacity-75 pointer-events-none z-0" />
      <div className="absolute inset-0 cyber-grid-highlight opacity-50 animate-grid-fade pointer-events-none z-0" />
      
      {/* Subtle background deep ambient glows using our specific bright neon green (#39e75f) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#39e75f]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#39e75f]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[#39e75f]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
