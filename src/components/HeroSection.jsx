import React from "react";
import TypingAnimation from "./TypingAnimation";
import GradientBlob from "./GradientBlob";
import TechBackground from "./TechBackground";

import { motion } from "framer-motion";

export default function HeroSection(){
  return (
    <section className="relative overflow-hidden py-28">
<TechBackground />
      <GradientBlob />

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ y: -8, opacity: 0 }}
          animate={{ y:0, opacity:1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-cyan-300"
        >
          Chung Shi Jie
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.18 }}
          className="mt-4 text-lg text-slate-700 dark:text-slate-300"
        >
          <TypingAnimation texts={[
            "Android • Web • Backend • UI/UX",
            "Kotlin, Firebase, Google Maps",
            "Flask, Python, Git, Figma"
          ]} />
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.28 }}
          className="mt-6 flex items-center justify-center gap-4"
        >
          <a className="btn-accent" href="/Resume- Chung Shi Jie.pdf" download>Download CV</a>
          <a className="px-4 py-2 rounded-md border border-gray-300 dark:border-white/10 text-sm text-slate-700 dark:text-slate-300" href="mailto:jackchung10@gmail.com">Contact</a>
        </motion.div>

      </div>
    </section>
  );
}
