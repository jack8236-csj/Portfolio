import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 text-center border-t border-white/10 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur">
      <p className="text-sm text-slate-600 dark:text-slate-300">
        © {new Date().getFullYear()} Chung Shi Jie — All Rights Reserved
      </p>

      <p className="text-xs mt-2 text-slate-500 dark:text-slate-400">
        Built with React · TailwindCSS · Framer Motion
      </p>
    </footer>
  );
}
