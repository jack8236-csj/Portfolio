import React from "react";

/**
 * TechBackground - renders decorative animated lines/dots
 * lightweight — just DOM elements with CSS animations in index.css
 */
export default function TechBackground({ lines = 6, dots = 8 }) {
  // randomize positions
  const rand = (min, max) => Math.random() * (max - min) + min;

  const lineEls = Array.from({ length: lines }).map((_, i) => {
    const left = `${rand(5, 95)}%`;
    const delay = `${rand(-6, 0)}s`;
    const rotate = `${rand(-14, 14)}deg`;
    const style = {
      left,
      transform: `rotate(${rotate})`,
      animationDelay: delay,
      opacity: 0.18,
      height: `${rand(110, 160)}%`,
    };
    return <div key={"l" + i} className="line" style={style} />;
  });

  const dotEls = Array.from({ length: dots }).map((_, i) => {
    const left = `${rand(6, 94)}%`;
    const top = `${rand(10, 92)}%`;
    const delay = `${rand(-8, 0)}s`;
    const size = `${rand(6, 12)}px`;
    const style = {
      left,
      top,
      width: size,
      height: size,
      animationDelay: delay,
      opacity: 0.95,
    };
    return <div key={"d" + i} className="dot" style={style} />;
  });

  return (
    <div className="hero-anim" aria-hidden>
      {lineEls}
      {dotEls}
    </div>
  );
}
