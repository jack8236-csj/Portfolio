import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 nav-glass">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-6">
          <a href="#" className="font-bold text-lg text-cyan-600 dark:text-cyan-300">
            Chung Shi Jie
          </a>

          <div className="hidden md:flex gap-6 text-slate-700 dark:text-slate-200 font-medium">
            <a href="#projects" className="hover:text-cyan-500 dark:hover:text-cyan-300">Projects</a>
            <a href="#skills" className="hover:text-cyan-500 dark:hover:text-cyan-300">Skills</a>
            <a href="#screens" className="hover:text-cyan-500 dark:hover:text-cyan-300">Screens</a>
            <a href="#contact" className="hover:text-cyan-500 dark:hover:text-cyan-300">Contact</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <a className="btn-accent hidden md:inline-flex items-center" 
             href="/Resume- Chung Shi Jie.pdf" download>
            <FaDownload /> <span className="ml-1">Download CV</span>
          </a>

          <a href="https://github.com/jack8236-csj" 
             target="_blank" rel="noreferrer"
             className="text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-300">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/chung-shi-jie-561127233/"
             target="_blank" rel="noreferrer"
             className="text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-300">
            <FaLinkedin />
          </a>

          <ThemeToggle />

          <button className="md:hidden p-2 rounded-md text-slate-700 dark:text-slate-200"
                  onClick={() => setOpen(o => !o)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/80 dark:bg-black/40 border-t border-gray-200 dark:border-cyan-900/10">
          <div className="flex flex-col gap-3 px-4 py-4">
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#screens" onClick={() => setOpen(false)}>Screens</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a className="btn-accent inline-flex items-center justify-center mt-2"
               href="/Resume- Chung Shi Jie.pdf"
               download>
               Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
