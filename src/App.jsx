import React from "react";
import Portfolio from "./portfolio/Portfolio";
import GlowCursor from "./components/GlowCursor";

export default function App() {
  return (
    <>
      {/* Glow Cursor MUST be outside everything */}
      <GlowCursor />

      {/* Prevent theme toggle from causing layout jump */}
      <div className="min-h-screen w-full bg-[var(--bg-1)] transition-colors duration-300">
        <Portfolio />
      </div>
    </>
  );
}
