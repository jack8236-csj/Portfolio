import React, { useEffect, useRef, useState } from "react";

export default function GlowCursor() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.__cursor_init__) return;
    window.__cursor_init__ = true;
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const onLeave = () => setHidden(true);

    const handleHoverIn = () => setHover(true);
    const handleHoverOut = () => setHover(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onMove);
    window.addEventListener("mouseleave", onLeave);

    // attach hover for interactive elements
    const hoverable = "a, button, .btn-accent, input, textarea, .clickable";
    document.querySelectorAll(hoverable).forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.querySelectorAll(hoverable).forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.left = pos.x + "px";
    el.style.top = pos.y + "px";
    el.classList.toggle("cursor--hover", hover);
    el.classList.toggle("hidden", hidden);
  }, [pos, hover, hidden]);

  return (
    <div ref={ref} className="cursor" aria-hidden>
      <div className="ring" />
      <div className="core" />
    </div>
  );
}
