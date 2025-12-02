import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle(){
  const [dark, setDark] = useState(() => {
    try {
      const s = localStorage.getItem("theme");
      if (s) return s === "dark";
      return true;
    } catch { return true; }
  });

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return (
    <button onClick={() => setDark(d => !d)} className="p-2 rounded-md bg-black/30 border border-cyan-900/10 text-slate-200">
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
